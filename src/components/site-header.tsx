"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site-config";
import { getDictionary } from "@/lib/dictionaries";
import { path, equivalentSlug, serviceKeys, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  children?: { slug: string; title: string }[];
};

function Brand({ locale }: { locale: Locale }) {
  return (
    <Link href={path(locale, "home")} className="group flex items-center">
      <Image
        src="/logo.avif"
        alt="Camelot — Service culinaire & chef privé"
        width={368}
        height={189}
        priority
        className="h-12 w-auto sm:h-14 lg:h-16"
      />
    </Link>
  );
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Sécurité : referme les menus à chaque navigation.
  useEffect(() => {
    setOpenMenu(null);
    setOpen(false);
  }, [pathname]);

  // Lien vers la page équivalente dans l'autre langue (sélecteur FR/EN).
  const other: Locale = locale === "fr" ? "en" : "fr";
  const curSlug = (pathname ?? "").split("/").filter(Boolean)[1];
  let switchHref = `/${other}`;
  if (curSlug) {
    const eq = equivalentSlug(locale, other, curSlug);
    if (eq !== null) switchHref = eq ? `/${other}/${eq}` : `/${other}`;
  }

  const servicesHref = path(locale, "services");

  const navItems: NavItem[] = [
    { label: t.nav.about, href: `${path(locale, "home")}#notre-histoire` },
    {
      label: t.nav.services,
      href: servicesHref,
      children: serviceKeys.map((k) => ({
        slug: k,
        title: t.services.items[k].title,
      })),
    },
    { label: t.nav.contact, href: path(locale, "contact") },
    { label: t.nav.testimonials, href: path(locale, "testimonials") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-olive">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Brand locale={locale} />

        {/* --- Desktop --- */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenMenu(null);
                  }
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpenMenu(null)}
                  aria-expanded={openMenu === item.label}
                  className="flex items-center gap-1 uppercase tracking-wider text-cream/90 transition-colors hover:text-gold-soft"
                >
                  {item.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    aria-hidden
                    className={cn(
                      "transition-transform duration-200",
                      openMenu === item.label && "rotate-180",
                    )}
                  >
                    <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
                <ul
                  className={cn(
                    "absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 rounded-xl bg-olive-dark p-2 shadow-xl transition-all duration-200",
                    openMenu === item.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-1 opacity-0",
                  )}
                >
                  {item.children.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`${servicesHref}#${c.slug}`}
                        onClick={() => setOpenMenu(null)}
                        className="block rounded-lg px-4 py-2.5 text-cream/85 transition-colors hover:bg-cream/10 hover:text-gold-soft"
                      >
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="uppercase tracking-wider text-cream/90 transition-colors hover:text-gold-soft"
              >
                {item.label}
              </Link>
            ),
          )}
          <a
            href={site.phoneHref}
            className="text-xl text-gold-soft transition-colors hover:text-gold"
          >
            {site.phoneDisplay}
          </a>
          <Link
            href={switchHref}
            aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
            className="rounded-full border border-cream/40 px-3 py-1 text-sm uppercase tracking-wider text-cream/90 transition-colors hover:border-gold-soft hover:text-gold-soft"
          >
            {other.toUpperCase()}
          </Link>
        </nav>

        {/* --- Bouton menu mobile --- */}
        <button
          type="button"
          aria-label={t.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-cream lg:hidden"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
            )}
          </svg>
        </button>
      </div>

      {/* --- Menu mobile déroulé --- */}
      <div
        className={cn(
          "overflow-hidden border-t border-cream/10 bg-olive-dark transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[36rem]" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-lg uppercase tracking-wider text-cream/90"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 flex flex-col border-l border-cream/15 pl-3">
                  {item.children.map((c) => (
                    <Link
                      key={c.slug}
                      href={`${servicesHref}#${c.slug}`}
                      onClick={() => setOpen(false)}
                      className="py-1.5 text-cream/70"
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href={site.phoneHref} className="mt-2 py-2.5 text-xl text-gold-soft">
            {site.phoneDisplay}
          </a>
          <Link
            href={switchHref}
            onClick={() => setOpen(false)}
            className="mt-1 py-2.5 text-lg uppercase tracking-wider text-cream/90"
          >
            {locale === "fr" ? "English" : "Français"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
