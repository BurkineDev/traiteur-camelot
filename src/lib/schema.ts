import { site, siteUrl, services } from "@/lib/site-config";
import { menus, type MenuPageData } from "@/lib/menus";
import { menuChrome, tHeading } from "@/lib/dictionaries";
import {
  menuSlugs,
  menuPath,
  serviceKeys,
  type Locale,
  type MenuKey,
} from "@/lib/i18n";

/**
 * Données structurées Schema.org pour le référencement local.
 * C'est exactement ce qui manquait au site Hostinger (0 bloc JSON-LD) :
 * ça aide Google à comprendre que Camelot est un traiteur local, sa zone,
 * ses services, ses coordonnées et son lien avec ses pages réseaux sociaux.
 *
 * Le courriel n'apparaît volontairement PAS ici : il est obfusqué partout
 * ailleurs (cf. ObfuscatedEmail) et le publier en clair dans le JSON-LD
 * annulerait cette protection anti-spam.
 */

const businessDescription: Record<Locale, string> = {
  fr: "Service de chef à domicile, chef privé et traiteur. Menus sur mesure pour mariages, événements et cocktails dans les Laurentides et à Montréal.",
  en: "Personal chef, private chef and catering service. Bespoke menus for weddings, events and cocktail receptions in the Laurentians and Montréal.",
};

export function localBusinessSchema(locale: Locale) {
  const sameAs = [site.socials.facebook, site.socials.instagram].filter(Boolean);

  return {
    "@context": "https://schema.org",
    // « Caterer » n'existe pas sur schema.org — FoodEstablishment + LocalBusiness
    // sont les types valides les plus proches.
    "@type": ["FoodEstablishment", "LocalBusiness"],
    "@id": `${siteUrl}/#business`,
    name: site.name,
    legalName: site.legalName,
    description: businessDescription[locale],
    url: siteUrl,
    telephone: site.phoneHref.replace("tel:", ""),
    priceRange: site.priceRange,
    slogan: site.tagline,
    keywords:
      "chef privé à domicile, chef traiteur, traiteur, cocktail dinatoire, buffet, mariage, événementiel, Mont-Tremblant, Laurentides, Montréal",
    knowsAbout: [
      "Chef privé à domicile",
      "Service traiteur",
      "Cocktail dinatoire",
      "Buffet",
      "Mariage",
      "Événementiel",
    ],
    servesCuisine: [...site.servesCuisine],
    image: `${siteUrl}/og-image.jpg`,
    hasMenu: serviceKeys.map((key) => `${siteUrl}${menuPath(locale, key)}`),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    founder: {
      "@type": "Person",
      name: site.founder.name,
      jobTitle: site.founder.jobTitle,
    },
    ...(sameAs.length ? { sameAs } : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Camelot",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.short,
          url: `${siteUrl}/nos-services#${s.slug}`,
        },
      })),
    },
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${site.name} — ${site.tagline}`,
    inLanguage: locale === "fr" ? "fr-CA" : "en-CA",
  };
}

/**
 * Balisage Menu → MenuSection → MenuItem d'une page « exemple de menu »,
 * généré depuis menus.ts (source unique des plats). Les intitulés de
 * sections sont localisés ; les noms de plats restent en français.
 */
type JsonLdMenuSection = {
  "@type": "MenuSection";
  name?: string;
  hasMenuItem?: { "@type": "MenuItem"; name: string; description?: string }[];
  hasMenuSection?: JsonLdMenuSection[];
};

export function menuSchema(menuKey: MenuKey, locale: Locale) {
  const chrome = menuChrome[menuKey][locale];
  const data: MenuPageData = menus[menuSlugs[menuKey].fr as keyof typeof menus];
  const url = `${siteUrl}${menuPath(locale, menuKey)}`;

  const sections = data.groups.flatMap((group): JsonLdMenuSection[] => {
    const courseSections = group.courses.map(
      (course): JsonLdMenuSection => ({
        "@type": "MenuSection",
        ...(course.heading ? { name: tHeading(locale, course.heading) } : {}),
        hasMenuItem: course.items.map((item) => ({
          "@type": "MenuItem" as const,
          name: item.name,
          ...(item.description ? { description: item.description } : {}),
        })),
      }),
    );

    // Groupe nommé (ex. « Menu 5 services ») → section englobante ;
    // un groupe à course unique sans intitulé porte ses plats directement.
    if (group.name) {
      const single =
        courseSections.length === 1 && !group.courses[0].heading
          ? courseSections[0]
          : null;
      return [
        {
          "@type": "MenuSection" as const,
          name: tHeading(locale, group.name),
          ...(single
            ? { hasMenuItem: single.hasMenuItem }
            : { hasMenuSection: courseSections }),
        },
      ];
    }
    return courseSections;
  });

  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${url}#menu`,
    url,
    name: chrome.title,
    description: chrome.metaDescription,
    // Les plats restent en français quelle que soit la langue de la page.
    inLanguage: "fr-CA",
    mainEntityOfPage: url,
    hasMenuSection: sections,
  };
}
