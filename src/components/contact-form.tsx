"use client";

import { useRef, useState } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/dictionaries";
import { serviceKeys, type Locale } from "@/lib/i18n";

type Kind = "devis" | "temoignage";
type Status = "idle" | "sending" | "ok" | "error";

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const field =
  "w-full rounded-md border border-olive/30 bg-white/70 px-4 py-3 text-ink " +
  "placeholder:text-ink/40 focus:border-olive focus:outline-none focus:ring-2 focus:ring-gold/60";
const label = "mb-1.5 block text-olive-dark";

export function ContactForm({
  kind,
  locale,
}: {
  kind: Kind;
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  const t = dict.form;
  const serviceOptions = serviceKeys.map((k) => dict.services.items[k].title);

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot : rempli => bot. On stoppe sans rien envoyer.
    if (data.get("company")) return;

    setStatus("sending");
    setError("");

    const payload = {
      kind,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      eventType: String(data.get("eventType") ?? ""),
      eventDate: String(data.get("eventDate") ?? ""),
      guests: String(data.get("guests") ?? ""),
      message: String(data.get("message") ?? ""),
      turnstileToken: String(data.get("cf-turnstile-response") ?? ""),
      company: String(data.get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error ?? t.errorGeneric);
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t.errorGeneric);
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-lg border border-olive/30 bg-white/70 p-8 text-center text-ink">
        <p className="text-2xl text-olive-dark">{t.thanks}</p>
        <p className="mt-2">
          {kind === "temoignage" ? t.okTemoignage : t.okDevis}
        </p>
      </div>
    );
  }

  return (
    <>
      {siteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          async
          defer
        />
      )}

      <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
        {/* Honeypot — caché aux humains, attirant pour les bots */}
        <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label>
            {t.doNotFill}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {kind === "devis" && (
          <>
            <div>
              <label className={label} htmlFor="name">
                {t.name} <span className="text-gold">*</span>
              </label>
              <input id="name" name="name" required className={field} placeholder={t.namePlaceholder} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="phone">
                  {t.phone}
                </label>
                <input id="phone" name="phone" type="tel" className={field} placeholder="(514) 000-0000" />
              </div>
              <div>
                <label className={label} htmlFor="eventType">
                  {t.serviceType}
                </label>
                <select id="eventType" name="eventType" className={field} defaultValue="">
                  <option value="" disabled>
                    {t.choose}
                  </option>
                  {serviceOptions.map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="eventDate">
                  {t.eventDate}
                </label>
                <input id="eventDate" name="eventDate" type="date" className={field} />
              </div>
              <div>
                <label className={label} htmlFor="guests">
                  {t.guests}
                </label>
                <input id="guests" name="guests" type="number" min={1} className={field} placeholder={t.guestsPlaceholder} />
              </div>
            </div>
          </>
        )}

        <div>
          <label className={label} htmlFor="email">
            {t.email} <span className="text-gold">*</span>
          </label>
          <input id="email" name="email" type="email" required className={field} placeholder={t.emailPlaceholder} />
        </div>

        <div>
          <label className={label} htmlFor="message">
            {kind === "temoignage" ? t.testimonial : t.message}{" "}
            <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={kind === "temoignage" ? 6 : 4}
            className={field}
            placeholder={kind === "temoignage" ? t.testimonialPlaceholder : t.messagePlaceholder}
          />
        </div>

        {siteKey && <div className="cf-turnstile" data-sitekey={siteKey} />}

        {status === "error" && <p className="text-sm text-red-700">{error}</p>}

        <Button type="submit" variant="primary" disabled={status === "sending"}>
          {status === "sending"
            ? t.sending
            : kind === "temoignage"
              ? t.submitTestimonial
              : t.send}
        </Button>
      </form>
    </>
  );
}
