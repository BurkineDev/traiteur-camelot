import type { Locale, MenuKey } from "./i18n";

/**
 * Contenu bilingue (FR prioritaire + EN). Source unique des chaînes traduites.
 * Les NOMS de plats restent en français (usage gastronomique) ; seules les
 * chrome/titres/intitulés de sections sont traduits (cf. menuHeadings).
 */

type ServiceContent = { title: string; short: string; description: string };
type MenuChrome = {
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
};

const fr = {
  nav: {
    about: "À propos",
    services: "Nos services",
    contact: "Nous joindre",
    testimonials: "Témoignages",
    openMenu: "Ouvrir le menu",
    language: "English",
  },
  home: {
    heroEyebrow: "Mont-Tremblant · Chef privé · Traiteur",
    heroTitle: "Chef privé & traiteur d'exception",
    heroSubtitle:
      "Une cuisine gastronomique, chez vous, dans les Laurentides et à Montréal.",
    viewMenus: "Voir les menus",
    contactUs: "Contactez-nous",
    histoireEyebrow: "Traiteur Camelot",
    histoireTitle: "Notre Histoire",
    histoireBody:
      "Camelot, chef privé, traiteur et chef à domicile, a été créé dans l'intention de partager notre passion pour la cuisine et la gastronomie québécoise. Installés dans les Laurentides, à Mont-Tremblant, nous élaborons nos menus en harmonie avec les saisons. Petite entreprise animée par une passion commune, nous mettons tout en œuvre pour créer des moments inoubliables pour vous et vos proches.",
    chefEyebrow: "Chef privé",
    chefName: "Jean-Philippe Delarosbil",
    chefRole: "Chef exécutif / propriétaire",
    chefBody:
      "Après avoir découvert sa passion pour la cuisine en travaillant au Fairmont Château Whistler, Jean-Philippe, chef privé et traiteur, est revenu au Québec pour étudier à l'ITHQ. Diplômé en Cuisine et en Cuisine supérieure, il a perfectionné sa formation par des stages dans des restaurants étoilés Michelin et a ensuite travaillé dans plusieurs établissements à travers le monde. Ces expériences lui ont permis de lancer sa propre caravane gourmande sur l'Île de Vancouver. Aujourd'hui, avec plus de 15 ans d'expérience et de retour au Québec, Jean-Philippe vous invite à partager sa passion chez vous avec Camelot, traiteur et chef à domicile.",
    galleryEyebrow: "Galerie",
    galleryTitle: "Quelques réalisations",
    gallerySubtitle:
      "Un aperçu de nos tables, bouchées et événements signés Camelot.",
    ctaTitle: "Transformez votre événement en un festin inoubliable.",
    ctaButton: "Demande d'informations",
  },
  services: {
    heroTitle: "Nos services",
    heroSubtitle: "Une cuisine sur mesure pour chaque occasion.",
    serviceLabel: "Service",
    requestQuote: "Demander une soumission",
    discoverMenu: "Découvrir un exemple de menu",
    items: {
      "chef-a-domicile": {
        title: "Chef à domicile",
        short: "Un chef privé qui cuisine chez vous, du marché à l'assiette.",
        description:
          "Vivez l'expérience d'un restaurant gastronomique dans le confort de votre maison ou de votre chalet. Menu sur mesure, service complet et cuisine laissée impeccable.",
      },
      "cocktail-dinatoire": {
        title: "Cocktail dinatoire",
        short: "Bouchées raffinées et stations gourmandes pour vos réceptions.",
        description:
          "Des bouchées créatives et des pièces signature pour vos lancements, 5 à 7 et célébrations, présentés avec soin et au goût du jour.",
      },
      "traiteur-evenements": {
        title: "Traiteur / Événements",
        short: "Un service traiteur d'exception pour tous vos événements.",
        description:
          "Anniversaires, événements corporatifs, fêtes de famille : des menus saisonniers conçus en harmonie avec les produits du moment et adaptés à votre nombre d'invités.",
      },
      mariage: {
        title: "Mariage",
        short: "Un repas inoubliable pour le plus beau jour.",
        description:
          "De la dégustation à la coordination du service, nous orchestrons la partie gastronomique de votre mariage dans les Laurentides et à Montréal.",
      },
    } satisfies Record<string, ServiceContent>,
  },
  contact: {
    heroTitle: "Nous joindre",
    heroSubtitle:
      "Transformez votre événement en un festin inoubliable avec notre service traiteur d'exception.",
    infoTitle: "Demande d'informations",
    infoBody:
      "Dites-nous en plus sur votre projet : nous vous reviendrons rapidement avec une proposition adaptée.",
    phone: "Téléphone",
    email: "Courriel",
    location: "Localisation",
  },
  testimonials: {
    title: "Comment avez-vous vécu votre expérience avec le traiteur Camelot ?",
    backHome: "Retour à l'accueil",
  },
  form: {
    name: "Nom",
    namePlaceholder: "Votre nom",
    phone: "Téléphone",
    serviceType: "Type de service",
    choose: "Choisir…",
    eventDate: "Date de l'événement",
    guests: "Nombre d'invités",
    guestsPlaceholder: "Ex. 12",
    email: "Adresse courriel",
    emailPlaceholder: "Votre adresse courriel",
    message: "Votre message",
    messagePlaceholder: "Décrivez votre projet, vos envies, vos contraintes…",
    testimonial: "Votre témoignage",
    testimonialPlaceholder: "Écrivez votre témoignage",
    send: "Envoyer ma demande",
    submitTestimonial: "Soumettre un témoignage",
    sending: "Envoi…",
    thanks: "Merci !",
    okDevis:
      "Votre demande a bien été reçue. Nous vous répondrons rapidement.",
    okTemoignage: "Votre témoignage a bien été envoyé.",
    errorGeneric: "Une erreur est survenue.",
    doNotFill: "Ne pas remplir",
  },
  menusUi: {
    backToServices: "← Tous les services",
    ctaTitle: "Un menu sur mesure pour votre événement.",
    ctaBody:
      "Chaque menu est composé selon vos goûts, la saison et le nombre de convives.",
    ctaButton: "Demander une soumission",
  },
  footer: {
    contact: "Contact",
    location: "Localisation",
    phone: "Téléphone :",
    email: "Courriel :",
    rights: "Tous droits réservés.",
  },
  fab: {
    title: "Une question ?",
    subtitle: "Réponse rapide — écrivez-nous.",
    call: "Appeler",
    quote: "Demander une soumission",
    open: "Contact rapide",
    close: "Fermer",
  },
};

type Shape = typeof fr;

const en: Shape = {
  nav: {
    about: "About",
    services: "Our services",
    contact: "Contact",
    testimonials: "Testimonials",
    openMenu: "Open menu",
    language: "Français",
  },
  home: {
    heroEyebrow: "Mont-Tremblant · Private Chef · Caterer",
    heroTitle: "Exceptional private chef & caterer",
    heroSubtitle:
      "Fine-dining cuisine, in your home, across the Laurentians and Montréal.",
    viewMenus: "View the menus",
    contactUs: "Contact us",
    histoireEyebrow: "Camelot Catering",
    histoireTitle: "Our Story",
    histoireBody:
      "Camelot — private chef, caterer and personal chef — was created to share our passion for Québec cuisine and gastronomy. Based in the Laurentians, in Mont-Tremblant, we craft our menus in harmony with the seasons. A small business driven by a shared passion, we do everything we can to create unforgettable moments for you and your loved ones.",
    chefEyebrow: "Private chef",
    chefName: "Jean-Philippe Delarosbil",
    chefRole: "Executive chef / owner",
    chefBody:
      "After discovering his passion for cooking while working at the Fairmont Château Whistler, Jean-Philippe — private chef and caterer — returned to Québec to study at the ITHQ. A graduate in Cuisine and Advanced Cuisine, he refined his training through stages in Michelin-starred restaurants and went on to work in several establishments around the world. Those experiences led him to launch his own gourmet food truck on Vancouver Island. Today, with more than 15 years of experience and back in Québec, Jean-Philippe invites you to share his passion in your home with Camelot, caterer and personal chef.",
    galleryEyebrow: "Gallery",
    galleryTitle: "A few of our creations",
    gallerySubtitle:
      "A glimpse of the tables, bites and events crafted by Camelot.",
    ctaTitle: "Turn your event into an unforgettable feast.",
    ctaButton: "Request information",
  },
  services: {
    heroTitle: "Our services",
    heroSubtitle: "Bespoke cuisine for every occasion.",
    serviceLabel: "Service",
    requestQuote: "Request a quote",
    discoverMenu: "See a sample menu",
    items: {
      "chef-a-domicile": {
        title: "Private chef at home",
        short: "A private chef who cooks in your home, from market to plate.",
        description:
          "Enjoy the experience of a fine-dining restaurant in the comfort of your home or chalet. Bespoke menu, full service, and a spotless kitchen left behind.",
      },
      "cocktail-dinatoire": {
        title: "Cocktail reception",
        short: "Refined canapés and gourmet stations for your receptions.",
        description:
          "Creative canapés and signature pieces for your launches, after-work gatherings and celebrations, presented with care and a contemporary touch.",
      },
      "traiteur-evenements": {
        title: "Catering / Events",
        short: "Exceptional catering for all your events.",
        description:
          "Birthdays, corporate events, family celebrations: seasonal menus crafted in harmony with the best of the moment and tailored to your guest count.",
      },
      mariage: {
        title: "Weddings",
        short: "An unforgettable meal for your big day.",
        description:
          "From the tasting to service coordination, we orchestrate the culinary side of your wedding in the Laurentians and Montréal.",
      },
    },
  },
  contact: {
    heroTitle: "Contact us",
    heroSubtitle:
      "Turn your event into an unforgettable feast with our exceptional catering service.",
    infoTitle: "Request information",
    infoBody:
      "Tell us more about your project: we'll get back to you quickly with a tailored proposal.",
    phone: "Phone",
    email: "Email",
    location: "Location",
  },
  testimonials: {
    title: "How was your experience with Camelot catering?",
    backHome: "Back to home",
  },
  form: {
    name: "Name",
    namePlaceholder: "Your name",
    phone: "Phone",
    serviceType: "Type of service",
    choose: "Choose…",
    eventDate: "Event date",
    guests: "Number of guests",
    guestsPlaceholder: "e.g. 12",
    email: "Email address",
    emailPlaceholder: "Your email address",
    message: "Your message",
    messagePlaceholder: "Describe your project, your wishes, any constraints…",
    testimonial: "Your testimonial",
    testimonialPlaceholder: "Write your testimonial",
    send: "Send my request",
    submitTestimonial: "Submit a testimonial",
    sending: "Sending…",
    thanks: "Thank you!",
    okDevis: "Your request has been received. We'll reply shortly.",
    okTemoignage: "Your testimonial has been sent.",
    errorGeneric: "Something went wrong.",
    doNotFill: "Do not fill in",
  },
  menusUi: {
    backToServices: "← All services",
    ctaTitle: "A menu tailored to your event.",
    ctaBody:
      "Each menu is built around your tastes, the season and your guest count.",
    ctaButton: "Request a quote",
  },
  footer: {
    contact: "Contact",
    location: "Location",
    phone: "Phone:",
    email: "Email:",
    rights: "All rights reserved.",
  },
  fab: {
    title: "A question?",
    subtitle: "Quick reply — get in touch.",
    call: "Call",
    quote: "Request a quote",
    open: "Quick contact",
    close: "Close",
  },
};

const dictionaries = { fr, en } as const;

export type Dictionary = Shape;
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Chrome localisée des pages de menus (les plats restent en FR). */
export const menuChrome: Record<MenuKey, Record<Locale, MenuChrome>> = {
  "chef-a-domicile": {
    fr: {
      title: "Chef à domicile",
      subtitle: "Un exemple de nos menus dégustation, servis chez vous.",
      metaTitle:
        "Exemple de menu — chef privé à domicile (5 services & brunch) | Camelot",
      metaDescription:
        "Un aperçu de nos menus de chef privé à domicile : menu 5 services et menu brunch, sur mesure, dans les Laurentides et à Montréal.",
    },
    en: {
      title: "Private chef at home",
      subtitle: "A sample of our tasting menus, served in your home.",
      metaTitle:
        "Sample menu — private chef at home (5-course & brunch) | Camelot",
      metaDescription:
        "A glimpse of our private-chef menus: 5-course tasting and brunch, bespoke, across the Laurentians and Montréal.",
    },
  },
  "cocktail-dinatoire": {
    fr: {
      title: "Cocktail dinatoire",
      subtitle: "Des bouchées raffinées et pièces signature pour vos réceptions.",
      metaTitle:
        "Canapés & cocktail dinatoire — traiteur Mont-Tremblant | Camelot",
      metaDescription:
        "Une sélection de canapés et bouchées signature pour vos cocktails dinatoires et réceptions dans les Laurentides et à Montréal.",
    },
    en: {
      title: "Cocktail reception",
      subtitle: "Refined canapés and signature pieces for your receptions.",
      metaTitle:
        "Canapés & cocktail reception — caterer Mont-Tremblant | Camelot",
      metaDescription:
        "A selection of canapés and signature bites for your cocktail receptions across the Laurentians and Montréal.",
    },
  },
  "traiteur-evenements": {
    fr: {
      title: "Traiteur / Événements",
      subtitle:
        "Des menus pensés pour vos événements et buffets, du corporatif à la fête.",
      metaTitle:
        "Menu traiteur, buffet & événementiel (bachelorette & corporatif) | Camelot",
      metaDescription:
        "Exemples de menus traiteur, buffet et événementiel pour vos événements : bachelorette et corporatif, à Mont-Tremblant, dans les Laurentides et à Montréal.",
    },
    en: {
      title: "Catering / Events",
      subtitle:
        "Menus designed for your events and buffets, from corporate to celebration.",
      metaTitle:
        "Catering, buffet & events menu (bachelorette & corporate) | Camelot",
      metaDescription:
        "Sample catering, buffet and event menus: bachelorette and corporate, in Mont-Tremblant, the Laurentians and Montréal.",
    },
  },
  mariage: {
    fr: {
      title: "Menu Mariage — 4 services",
      subtitle:
        "La gastronomie de votre grand jour, dans les Laurentides et à Montréal.",
      metaTitle: "Menu mariage 4 services — traiteur & chef privé | Camelot",
      metaDescription:
        "Un exemple de menu mariage 4 services : canapés, entrées, plats et dessert. Traiteur et chef privé à Mont-Tremblant, dans les Laurentides et à Montréal.",
    },
    en: {
      title: "Wedding menu — 4 courses",
      subtitle: "The gastronomy of your big day, across the Laurentians and Montréal.",
      metaTitle: "4-course wedding menu — caterer & private chef | Camelot",
      metaDescription:
        "A sample 4-course wedding menu: canapés, starters, mains and dessert. Caterer and private chef in Mont-Tremblant, the Laurentians and Montréal.",
    },
  },
};

/** Traductions des intitulés de sections des menus (FR → EN). Les plats restent en FR. */
export const menuHeadings: Record<string, string> = {
  "Menu 5 services": "5-course menu",
  "Menu brunch": "Brunch menu",
  Canapés: "Canapés",
  "Menu Bachelorette": "Bachelorette menu",
  "Menu Corporatif": "Corporate menu",
  "En station pour débuter": "Stations to begin",
  "La suite": "To follow",
  "Table des desserts": "Dessert table",
  "Plat dinatoire": "Cocktail plate",
  Mignardises: "Mignardises",
  "Entrée — Canapés": "Starter — Canapés",
  "Choix d'entrées": "Choice of starters",
  "Choix de plats": "Choice of mains",
  Dessert: "Dessert",
};

/** Traduit un intitulé de menu vers la langue cible (FR = identité). */
export function tHeading(locale: Locale, frHeading: string): string {
  if (locale === "fr") return frHeading;
  return menuHeadings[frHeading] ?? frHeading;
}
