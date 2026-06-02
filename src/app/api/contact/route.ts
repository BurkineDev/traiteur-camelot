import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function verifyTurnstile(token: string, ip?: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // pas configuré (ex. en local) -> on n'exige pas

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.append("remoteip", ip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body },
  );
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

export async function POST(req: Request) {
  try {
    const b = await req.json();

    // 1) Honeypot : champ "company" rempli => bot. On répond OK sans rien faire.
    if (b.company) return NextResponse.json({ ok: true });

    // 2) Validation minimale
    const email = String(b.email ?? "").trim();
    const message = String(b.message ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Courriel invalide." }, { status: 400 });
    }
    if (message.length < 3) {
      return NextResponse.json({ error: "Message vide." }, { status: 400 });
    }

    // 3) Turnstile
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const ok = await verifyTurnstile(String(b.turnstileToken ?? ""), ip);
    if (!ok) {
      return NextResponse.json(
        { error: "Validation anti-robot échouée." },
        { status: 400 },
      );
    }

    // 4) Construction du courriel
    const isTemoignage = b.kind === "temoignage";
    const subject = isTemoignage
      ? "Nouveau témoignage — site Camelot"
      : `Nouvelle demande (${esc(String(b.eventType || "Traiteur"))}) — site Camelot`;

    const rows: [string, string][] = isTemoignage
      ? [
          ["Courriel", email],
          ["Témoignage", message],
        ]
      : [
          ["Nom", String(b.name || "—")],
          ["Courriel", email],
          ["Téléphone", String(b.phone || "—")],
          ["Type de service", String(b.eventType || "—")],
          ["Date", String(b.eventDate || "—")],
          ["Invités", String(b.guests || "—")],
          ["Message", message],
        ];

    const html = `<h2 style="font-family:sans-serif">${esc(subject)}</h2>
<table style="font-family:sans-serif;border-collapse:collapse">${rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 14px 6px 0;vertical-align:top;color:#586245"><b>${esc(
            k,
          )}</b></td><td style="padding:6px 0">${esc(v).replace(/\n/g, "<br>")}</td></tr>`,
      )
      .join("")}</table>`;

    const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

    // 5) Envoi via Resend (si configuré). En local sans clé -> on log seulement.
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.info("[contact] (DEV, pas de RESEND_API_KEY)\n", text);
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ?? "Camelot <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? `${site.email.user}@${site.email.domain}`,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("[contact] Resend:", error);
      return NextResponse.json({ error: "Envoi impossible." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] ", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
