/**
 * Configuration bilingue (FR prioritaire + EN).
 * - Le français garde ses slugs déjà indexés, désormais sous /fr
 *   (redirections 301 depuis l'ancien chemin sans préfixe → cf. next.config).
 * - L'anglais a ses propres slugs traduits, sous /en, pour un bon SEO EN.
 */

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Pages simples : clé logique → slug par langue ("" = accueil). */
export const pageSlugs = {
  home: { fr: "", en: "" },
  services: { fr: "nos-services", en: "services" },
  contact: { fr: "nous-joindre", en: "contact" },
  testimonials: { fr: "temoignage", en: "testimonials" },
  // Pages d'atterrissage locales (audit SEO) : une intention de recherche
  // complète par page — mariage, chalet — plus le parcours du chef.
  weddingCatering: {
    fr: "traiteur-mariage-mont-tremblant",
    en: "wedding-caterer-mont-tremblant",
  },
  chaletChef: {
    fr: "chef-prive-chalet-tremblant",
    en: "private-chef-chalet-tremblant",
  },
  corporateCatering: {
    fr: "traiteur-corporatif-laurentides",
    en: "corporate-caterer-laurentians",
  },
  chef: { fr: "le-chef", en: "the-chef" },
} as const;
export type PageKey = keyof typeof pageSlugs;

/** Pages de menus, reliées à chaque service par son slug logique. */
export const menuSlugs = {
  "chef-a-domicile": { fr: "menu-5", en: "tasting-menu" },
  "cocktail-dinatoire": { fr: "canapes", en: "canapes" },
  "traiteur-evenements": { fr: "menu-bachelorette", en: "catering-menu" },
  mariage: { fr: "menu-mariage", en: "wedding-menu" },
} as const;
export type MenuKey = keyof typeof menuSlugs;

/** Ordre d'affichage des services (identique aux clés de menuSlugs). */
export const serviceKeys = [
  "chef-a-domicile",
  "cocktail-dinatoire",
  "traiteur-evenements",
  "mariage",
] as const satisfies readonly MenuKey[];

/**
 * Chemin localisé d'une page simple.
 * FR vit à la racine : path("fr","services") → "/nos-services"
 *                       path("fr","home")     → "/"
 * EN est préfixé /en : path("en","services") → "/en/services"
 */
export function path(locale: Locale, key: PageKey): string {
  const slug = pageSlugs[key][locale];
  if (locale === "fr") return slug ? `/${slug}` : "/";
  return slug ? `/en/${slug}` : "/en";
}

/** Chemin localisé d'une page de menu (FR à la racine, EN sous /en). */
export function menuPath(locale: Locale, key: MenuKey): string {
  if (locale === "fr") return `/${menuSlugs[key][locale]}`;
  return `/en/${menuSlugs[key][locale]}`;
}

/** Résout (langue, slug) → page logique pour le routage dynamique [slug]. */
export type Resolved =
  | { type: "page"; key: PageKey }
  | { type: "menu"; key: MenuKey };

export function resolveSlug(locale: Locale, slug: string): Resolved | null {
  for (const key of Object.keys(pageSlugs) as PageKey[]) {
    if (key !== "home" && pageSlugs[key][locale] === slug) {
      return { type: "page", key };
    }
  }
  for (const key of Object.keys(menuSlugs) as MenuKey[]) {
    if (menuSlugs[key][locale] === slug) return { type: "menu", key };
  }
  return null;
}

/** Slug équivalent dans l'autre langue (pour le sélecteur FR/EN + hreflang). */
export function equivalentSlug(
  from: Locale,
  to: Locale,
  slug: string,
): string | null {
  const r = resolveSlug(from, slug);
  if (!r) return null;
  return r.type === "page" ? pageSlugs[r.key][to] : menuSlugs[r.key][to];
}

/** Toutes les paires { lang, slug } pour generateStaticParams du segment [slug]. */
export function allSlugParams(): { lang: Locale; slug: string }[] {
  const out: { lang: Locale; slug: string }[] = [];
  for (const locale of locales) {
    for (const key of Object.keys(pageSlugs) as PageKey[]) {
      if (key === "home") continue;
      out.push({ lang: locale, slug: pageSlugs[key][locale] });
    }
    for (const key of Object.keys(menuSlugs) as MenuKey[]) {
      out.push({ lang: locale, slug: menuSlugs[key][locale] });
    }
  }
  return out;
}
