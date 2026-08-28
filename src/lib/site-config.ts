/**
 * Source unique de vérité du site.
 * Le NAP (Nom / Adresse / Téléphone) doit rester IDENTIQUE à la fiche
 * Google Business Profile pour ne pas brouiller le référencement local.
 */

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://traiteurcamelot.com"
).replace(/\/$/, "");

export const site = {
  name: "Camelot",
  legalName: "Camelot — Service culinaire & chef privé",
  tagline: "Service culinaire · Chef privé",
  url: siteUrl,

  // Téléphone : version affichée + version cliquable (E.164)
  phoneDisplay: "+(514) 978-8838",
  phoneHref: "tel:+15149788838",

  // Email découpé pour l'obfuscation (limite le scraping par les bots)
  email: { user: "info", domain: "traiteurcamelot.com" },

  address: {
    locality: "Mont-Tremblant",
    region: "QC",
    country: "CA",
  },

  // Coordonnées approximatives de Mont-Tremblant — à affiner si pignon sur rue.
  geo: { lat: 46.2117, lng: -74.5825 },

  priceRange: "$$-$$$",
  servesCuisine: ["Cuisine québécoise", "Gastronomie", "Cuisine française"],

  founder: {
    name: "Jean-Philippe Delarosbil",
    jobTitle: "Chef exécutif / propriétaire",
  },

  // Zones desservies (utilisé dans le schema local) — élargi pour le SEO local.
  areaServed: [
    "Mont-Tremblant",
    "Saint-Sauveur",
    "Sainte-Adèle",
    "Val-David",
    "Sainte-Agathe-des-Monts",
    "Morin-Heights",
    "Saint-Jérôme",
    "Les Laurentides",
    "Montréal",
  ],

  // Pages officielles — alimentent les liens sameAs du balisage (l'entité
  // que Google relie à la fiche Business Profile) et le pied de page.
  socials: {
    facebook:
      "https://www.facebook.com/p/CAMELOT-Service-Culinaire-61569230758627/",
    instagram: "https://www.instagram.com/traiteurcamelot/",
  },
} as const;

/** Pages = mêmes URLs que le site actuel (à préserver pour le SEO). */
export const routes = {
  home: "/",
  services: "/nos-services",
  contact: "/nous-joindre",
  testimonials: "/temoignage",
} as const;

/** Services + ancres (#…) identiques à celles déjà indexées par Google. */
export const services = [
  {
    slug: "chef-a-domicile",
    menu: "/menu-5",
    title: "Chef à domicile",
    short: "Un chef privé qui cuisine chez vous, du marché à l'assiette.",
    description:
      "Vivez l'expérience d'un restaurant gastronomique dans le confort de votre maison ou de votre chalet. Menu sur mesure, service complet et cuisine laissée impeccable.",
  },
  {
    slug: "cocktail-dinatoire",
    menu: "/canapes",
    title: "Cocktail dinatoire",
    short: "Bouchées raffinées et stations gourmandes pour vos réceptions.",
    description:
      "Des bouchées créatives et des pièces signature pour vos lancements, 5 à 7 et célébrations, présentés avec soin et au goût du jour.",
  },
  {
    slug: "traiteur-evenements",
    menu: "/menu-bachelorette",
    title: "Traiteur / Événements",
    short: "Un service traiteur et buffet d'exception pour tous vos événements.",
    description:
      "Anniversaires, événements corporatifs, fêtes de famille et buffets : un service traiteur événementiel avec des menus saisonniers et formules buffet, conçus en harmonie avec les produits du moment et adaptés à votre nombre d'invités.",
  },
  {
    slug: "mariage",
    menu: "/menu-mariage",
    title: "Mariage",
    short: "Un repas inoubliable pour le plus beau jour.",
    description:
      "De la dégustation à la coordination du service, nous orchestrons la partie gastronomique de votre mariage dans les Laurentides et à Montréal.",
  },
] as const;

export const nav = [
  { label: "À propos", href: `${routes.home}#notre-histoire` },
  { label: "Nos services", href: routes.services, children: services },
  { label: "Nous joindre", href: routes.contact },
  { label: "Témoignages", href: routes.testimonials },
] as const;
