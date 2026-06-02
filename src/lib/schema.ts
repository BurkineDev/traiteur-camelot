import { site, siteUrl, services } from "@/lib/site-config";

/**
 * Données structurées Schema.org pour le référencement local.
 * C'est exactement ce qui manquait au site Hostinger (0 bloc JSON-LD) :
 * ça aide Google à comprendre que Camelot est un traiteur local, sa zone,
 * ses services, ses coordonnées et son lien avec ses pages réseaux sociaux.
 */
export function localBusinessSchema() {
  const sameAs = [site.socials.facebook, site.socials.instagram].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": ["FoodEstablishment", "LocalBusiness"],
    "@id": `${siteUrl}/#business`,
    additionalType: "https://schema.org/Caterer",
    name: site.name,
    legalName: site.legalName,
    description:
      "Service de chef à domicile, chef privé et traiteur. Menus sur mesure pour mariages, événements et cocktails dans les Laurentides et à Montréal.",
    url: siteUrl,
    telephone: site.phoneHref.replace("tel:", ""),
    email: `${site.email.user}@${site.email.domain}`,
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

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${site.name} — ${site.tagline}`,
    inLanguage: "fr-CA",
  };
}
