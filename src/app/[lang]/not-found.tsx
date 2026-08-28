"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/button";
import { path, type Locale } from "@/lib/i18n";

/**
 * Page 404 aux couleurs du site, rendue dans le layout [lang] (avec en-tête
 * et pied de page localisés) à la place de la page Next.js par défaut.
 * Composant client : not-found ne reçoit pas les params et lire les headers()
 * ici rendrait dynamiques TOUTES les routes du segment (perte du SSG). La
 * langue se déduit de l'URL du navigateur (FR à la racine, EN sous /en).
 */

const copy: Record<Locale, { title: string; body: string; home: string; services: string }> = {
  fr: {
    title: "Page introuvable",
    body: "Cette page n'existe pas ou n'existe plus. Nos menus et nos services, eux, sont toujours là.",
    home: "Retour à l'accueil",
    services: "Voir nos services",
  },
  en: {
    title: "Page not found",
    body: "This page doesn't exist or is no longer available. Our menus and services are still here, though.",
    home: "Back to home",
    services: "See our services",
  },
};

export default function NotFound() {
  const pathname = usePathname() ?? "";
  const locale: Locale =
    pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
  const t = copy[locale];

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-cream px-5 py-24 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-olive-dark">404</p>
      <h1 className="mt-4 text-5xl text-olive-deep sm:text-6xl">{t.title}</h1>
      <span className="mx-auto mt-8 block text-2xl text-gold">◆</span>
      <p className="mt-6 max-w-md text-lg text-ink/80">{t.body}</p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <ButtonLink href={path(locale, "home")} variant="primary">
          {t.home}
        </ButtonLink>
        <ButtonLink href={path(locale, "services")} variant="olive">
          {t.services}
        </ButtonLink>
      </div>
    </section>
  );
}
