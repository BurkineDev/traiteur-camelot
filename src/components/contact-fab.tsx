"use client";

import { useState } from "react";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { path, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site-config";

/**
 * Bouton flottant de contact rapide (bas de page).
 * Actions : appeler (tel:) + « Demander une soumission » (formulaire).
 * On n'expose PAS le courriel en clair → respecte l'anti-spam du site.
 */
export function ContactFab({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const t = getDictionary(locale).fab;

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 print:hidden">
      {open && (
        <div className="w-72 overflow-hidden rounded-2xl bg-cream shadow-2xl ring-1 ring-olive/20">
          <div className="bg-olive-dark px-5 py-4">
            <p className="text-lg text-cream">{t.title}</p>
            <p className="mt-0.5 text-sm text-cream/80">{t.subtitle}</p>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <a
              href={site.phoneHref}
              className="flex items-center gap-3 rounded-xl bg-olive/10 px-4 py-3 text-ink transition-colors hover:bg-olive/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1z" />
              </svg>
              <span className="text-sm">
                {t.call} · {site.phoneDisplay}
              </span>
            </a>
            <Link
              href={path(locale, "contact")}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl bg-olive-dark px-4 py-3 text-cream transition-colors hover:bg-olive-deep"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M4 5h16v14H4z" />
                <path d="M4 6l8 6 8-6" />
              </svg>
              <span className="text-sm">{t.quote}</span>
            </Link>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t.close : t.open}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-olive-dark text-cream shadow-xl ring-1 ring-gold/40 transition-transform duration-200 hover:scale-105"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12z" />
          </svg>
        )}
      </button>
    </div>
  );
}
