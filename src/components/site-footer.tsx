import Link from "next/link";
import { site } from "@/lib/site-config";
import { ObfuscatedEmail } from "@/components/obfuscated-email";
import { getDictionary } from "@/lib/dictionaries";
import { path, type Locale } from "@/lib/i18n";

function Social() {
  const { facebook, instagram } = site.socials;
  if (!facebook && !instagram) return null;
  return (
    <div className="mt-5 flex gap-4">
      {facebook && (
        <a href={facebook} aria-label="Facebook" className="text-cream/80 hover:text-gold-soft" target="_blank" rel="noopener noreferrer">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M13 22v-8h2.7l.4-3H13V9.1c0-.9.3-1.5 1.6-1.5H16V5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9V11H7.5v3H10v8h3z" />
          </svg>
        </a>
      )}
      {instagram && (
        <a href={instagram} aria-label="Instagram" className="text-cream/80 hover:text-gold-soft" target="_blank" rel="noopener noreferrer">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
      )}
    </div>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).footer;
  return (
    <footer className="bg-olive text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <Link href={path(locale, "home")} className="text-3xl tracking-[0.35em] text-gold-soft">
            CAMELOT
          </Link>
          <Social />
        </div>

        {/* Intitulés en <p> : un footer présent sur les 16 pages ne doit pas
            injecter de H2 dans le plan de chaque page. */}
        <div>
          <p className="text-2xl text-gold-soft">{t.contact}</p>
          <p className="mt-4">
            {t.phone}{" "}
            <a href={site.phoneHref} className="text-gold-soft hover:text-gold">
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            {t.email} <ObfuscatedEmail className="text-gold-soft hover:text-gold" />
          </p>
        </div>

        <div>
          <p className="text-2xl text-gold-soft">{t.location}</p>
          <p className="mt-4 text-cream/85">
            {site.address.locality}, {site.address.region}
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 text-center text-sm text-cream/75">
        © {new Date().getFullYear()} {site.legalName}. {t.rights}
      </div>
    </footer>
  );
}
