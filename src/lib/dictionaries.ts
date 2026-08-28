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
    chefLink: "Le parcours du chef",
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
    metaDescription:
      "Chef à domicile, cocktail dinatoire, traiteur événementiel et menu de mariage : des services sur mesure à Mont-Tremblant, dans les Laurentides et à Montréal.",
    serviceLabel: "Service",
    moreWedding: "Traiteur de mariage à Mont-Tremblant",
    moreChalet: "Chef privé à votre chalet",
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
    metaTitle: "Nous joindre — traiteur & chef privé à Mont-Tremblant",
    metaDescription:
      "Demandez une soumission pour votre mariage, réception ou souper en chalet : appelez-nous ou écrivez-nous. Traiteur et chef privé à Mont-Tremblant, dans les Laurentides.",
    infoTitle: "Demande d'informations",
    infoBody:
      "Dites-nous en plus sur votre projet : nous vous reviendrons rapidement avec une proposition adaptée.",
    phone: "Téléphone",
    email: "Courriel",
    location: "Localisation",
  },
  testimonials: {
    title: "Comment avez-vous vécu votre expérience avec le traiteur Camelot ?",
    metaTitle: "Témoignages — traiteur & chef privé à Mont-Tremblant",
    metaDescription:
      "Partagez votre expérience avec Camelot, traiteur et chef privé à Mont-Tremblant : votre témoignage aide les futurs mariés et hôtes des Laurentides à nous découvrir.",
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
  weddingPage: {
    heroTitle: "Traiteur de mariage à Mont-Tremblant",
    heroSubtitle:
      "La gastronomie de votre grand jour, dans les Laurentides et à Montréal.",
    metaTitle: "Traiteur mariage — Mont-Tremblant & Laurentides",
    metaDescription:
      "Traiteur de mariage à Mont-Tremblant et dans les Laurentides : menu 4 services sur mesure, dégustation, coordination du service — du chalet intime au grand domaine.",
    intro1:
      "Se marier dans les Laurentides, c'est recevoir ses proches au cœur des montagnes — dans un chalet, une auberge ou un domaine avec vue. Camelot, traiteur et chef privé établi à Mont-Tremblant, orchestre la partie gastronomique de votre mariage : un menu élaboré avec vous, en harmonie avec la saison, servi avec le soin d'une cuisine professionnelle.",
    intro2:
      "Chaque menu est composé selon vos goûts, la saison et le nombre de convives — jamais un menu figé.",
    processTitle: "De la première rencontre au dernier service",
    processSteps: [
      {
        title: "Votre projet",
        body: "Vous nous décrivez votre journée : le lieu, le nombre d'invités, vos envies et vos contraintes. Nous vous revenons rapidement avec une proposition adaptée.",
      },
      {
        title: "Le menu et la dégustation",
        body: "Le chef compose un menu sur mesure, puis l'ajuste avec vous — de la dégustation jusqu'à la version finale.",
      },
      {
        title: "Le jour J",
        body: "Nous coordonnons le service de la réception : les canapés à l'arrivée des invités, le repas, le gâteau personnalisé. Vous recevez, nous nous occupons du reste.",
      },
    ],
    menuTitle: "Un exemple de menu mariage 4 services",
    menuBody:
      "Huître Rockefeller, tartare de cerf au cassis, filet de bœuf Rossini sauce périgourdine ou bar de ligne en croûte d'herbes, et un gâteau de mariage personnalisé pour clore la soirée. L'exemple donne le ton — votre menu sera composé avec vous.",
    menuCta: "Voir le menu mariage 4 services",
    venuesTitle: "De Mont-Tremblant à Montréal",
    venuesBody1:
      "Nous nous déplaçons partout dans les Laurentides — Mont-Tremblant, Saint-Sauveur, Sainte-Adèle, Val-David, Sainte-Agathe-des-Monts, Morin-Heights, Saint-Jérôme — ainsi qu'à Montréal. Chalet familial, auberge, salle de réception ou domaine : nous adaptons la logistique de cuisine au lieu que vous avez choisi.",
    venuesBody2:
      "Établis à Mont-Tremblant, nous connaissons les réceptions de montagne : les cocktails en terrasse l'été, les soirées au coin du feu l'hiver, et les cuisines de chalet qu'il faut savoir apprivoiser.",
    faqTitle: "Questions fréquentes — mariage",
    faq: [
      {
        q: "Proposez-vous une dégustation avant le mariage ?",
        a: "Oui. Le menu se construit avec vous, et la dégustation permet d'arrêter les derniers choix avant le grand jour.",
      },
      {
        q: "Le menu peut-il tenir compte des allergies et des restrictions alimentaires ?",
        a: "Chaque menu est composé sur mesure : dites-nous ce que vos invités ne mangent pas et nous l'intégrons dès la conception.",
      },
      {
        q: "Vous déplacez-vous à l'extérieur de Mont-Tremblant ?",
        a: "Oui, partout dans les Laurentides et jusqu'à Montréal. Indiquez votre lieu de réception dans votre demande : nous confirmons la logistique avec la soumission.",
      },
      {
        q: "Comment obtenir une soumission ?",
        a: "Écrivez-nous par le formulaire de contact avec la date, le lieu et le nombre approximatif d'invités. Nous vous répondons rapidement avec une proposition adaptée.",
      },
    ],
    ctaTitle: "Parlez-nous de votre mariage.",
    ctaButton: "Demander une soumission",
  },
  chaletPage: {
    heroTitle: "Chef privé à votre chalet, à Tremblant",
    heroSubtitle:
      "L'expérience d'un restaurant gastronomique, sans quitter votre salon.",
    metaTitle: "Chef privé en chalet — Tremblant & Laurentides",
    metaDescription:
      "Un chef privé cuisine dans votre chalet à Tremblant et dans les Laurentides : menu dégustation 5 services ou brunch, service à table, cuisine laissée impeccable.",
    intro1:
      "Votre séjour en chalet mérite mieux qu'une réservation introuvable le samedi soir. Camelot, chef privé établi à Mont-Tremblant, apporte le restaurant jusqu'à votre table : le chef arrive avec les produits, cuisine sur place, dresse chaque service et laisse la cuisine impeccable.",
    intro2:
      "Souper d'anniversaire, week-end entre amis, réveillon ou brunch paresseux après une matinée de ski : le menu se compose selon vos goûts, la saison et votre groupe.",
    howTitle: "Comment ça se passe",
    howSteps: [
      {
        title: "Avant votre séjour",
        body: "Vous nous écrivez avec la date, le secteur du chalet et le nombre de convives. Le chef compose un menu sur mesure et l'ajuste avec vous.",
      },
      {
        title: "Le soir venu",
        body: "Le chef arrive avec les produits, s'installe dans la cuisine du chalet et dresse chaque service à table.",
      },
      {
        title: "Après le dernier service",
        body: "La cuisine est laissée impeccable — il ne vous reste que la table et les souvenirs.",
      },
    ],
    menuTitle: "Un exemple de menu dégustation",
    menuBody:
      "Huître à la béchamel champagne, tartare de cerf, pétoncles poêlées, carré d'agneau, churros au caramel d'érable… Le menu 5 services donne un aperçu, et un menu brunch est aussi proposé pour les matins de chalet.",
    menuCta: "Voir le menu 5 services & brunch",
    seasonTitle: "Au rythme de la montagne",
    seasonBody1:
      "L'hiver, le chef prend le relais après votre journée sur les pistes : les convives passent du spa à la table pendant que la cuisine s'active. L'été, la formule se prête aux longues soirées en terrasse et aux grandes tablées familiales.",
    seasonBody2:
      "Nous desservons les secteurs de villégiature des Laurentides : Mont-Tremblant et ses versants, Saint-Sauveur, Sainte-Adèle, Val-David, Sainte-Agathe-des-Monts et Morin-Heights.",
    faqTitle: "Questions fréquentes — chef au chalet",
    faq: [
      {
        q: "Que fournit le chef ?",
        a: "Le chef arrive avec les produits et s'adapte à la cuisine du chalet — indiquez-nous ses particularités dans votre demande, le menu en tiendra compte.",
      },
      {
        q: "Pouvez-vous cuisiner pour un grand groupe ?",
        a: "Chaque demande est évaluée selon le groupe et le lieu. Indiquez le nombre de convives dans le formulaire : la soumission confirmera la formule adaptée.",
      },
      {
        q: "Faut-il réserver longtemps d'avance ?",
        a: "Écrivez-nous dès que vos dates sont arrêtées, surtout pour les fins de semaine de la saison de ski et la période des Fêtes. Nous vous répondons rapidement.",
      },
    ],
    ctaTitle: "Votre chalet, notre cuisine.",
    ctaButton: "Demander une soumission",
  },
  chefPage: {
    heroTitle: "Jean-Philippe Delarosbil",
    heroSubtitle: "Chef exécutif et propriétaire de Camelot",
    metaTitle: "Jean-Philippe Delarosbil — chef privé à Mont-Tremblant",
    metaDescription:
      "Formé à l'ITHQ et révélé au Fairmont Château Whistler, passé par des restaurants étoilés Michelin, le chef Jean-Philippe Delarosbil cuisine depuis plus de 15 ans — aujourd'hui chef privé et traiteur à Mont-Tremblant.",
    sections: [
      {
        title: "De Whistler à l'ITHQ",
        body: "C'est au Fairmont Château Whistler que Jean-Philippe découvre sa passion pour la cuisine. De retour au Québec, il entre à l'Institut de tourisme et d'hôtellerie du Québec, dont il ressort diplômé en Cuisine, puis en Cuisine supérieure.",
      },
      {
        title: "Les étoiles et la route",
        body: "Il perfectionne ensuite son métier par des stages dans des restaurants étoilés Michelin, puis travaille dans plusieurs établissements à travers le monde — jusqu'à lancer sa propre caravane gourmande sur l'île de Vancouver.",
      },
      {
        title: "Retour aux Laurentides",
        body: "Fort de plus de quinze ans de métier, Jean-Philippe revient au Québec et fonde Camelot à Mont-Tremblant : un service de chef privé et de traiteur dont les menus suivent les saisons et la gastronomie québécoise.",
      },
      {
        title: "Sa cuisine",
        body: "Des produits du moment, des menus jamais figés et l'ambition de créer des moments inoubliables pour vous et vos proches — chez vous, au chalet ou sur le lieu de votre réception.",
      },
    ],
    ctaTitle: "Invitez le chef à votre table.",
    ctaButton: "Nous joindre",
    servicesButton: "Découvrir nos services",
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
    chefLink: "The chef's journey",
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
    metaDescription:
      "Private chef at home, cocktail receptions, event catering and wedding menus: bespoke services in Mont-Tremblant, the Laurentians and Montréal.",
    serviceLabel: "Service",
    moreWedding: "Wedding caterer in Mont-Tremblant",
    moreChalet: "Private chef at your chalet",
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
    metaTitle: "Contact us — caterer & private chef in Mont-Tremblant",
    metaDescription:
      "Request a quote for your wedding, reception or chalet dinner: call or write to us. Caterer and private chef in Mont-Tremblant and the Laurentians.",
    infoTitle: "Request information",
    infoBody:
      "Tell us more about your project: we'll get back to you quickly with a tailored proposal.",
    phone: "Phone",
    email: "Email",
    location: "Location",
  },
  testimonials: {
    title: "How was your experience with Camelot catering?",
    metaTitle: "Testimonials — caterer & private chef in Mont-Tremblant",
    metaDescription:
      "Share your experience with Camelot, caterer and private chef in Mont-Tremblant: your testimonial helps future couples and hosts in the Laurentians discover us.",
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
  weddingPage: {
    heroTitle: "Wedding caterer in Mont-Tremblant",
    heroSubtitle:
      "The gastronomy of your big day, across the Laurentians and Montréal.",
    metaTitle: "Wedding caterer — Mont-Tremblant & Laurentians",
    metaDescription:
      "Wedding catering in Mont-Tremblant and the Laurentians: bespoke 4-course menu, tasting, service coordination — from an intimate chalet to a grand estate.",
    intro1:
      "Getting married in the Laurentians means gathering your loved ones in the heart of the mountains — in a chalet, an inn or an estate with a view. Camelot, caterer and private chef based in Mont-Tremblant, orchestrates the culinary side of your wedding: a menu built with you, in harmony with the season, served with the care of a professional kitchen.",
    intro2:
      "Every menu is composed around your tastes, the season and your guest count — never a fixed menu.",
    processTitle: "From first meeting to last course",
    processSteps: [
      {
        title: "Your project",
        body: "Tell us about your day: the venue, the guest count, your wishes and your constraints. We'll get back to you quickly with a tailored proposal.",
      },
      {
        title: "The menu and the tasting",
        body: "The chef composes a bespoke menu, then refines it with you — from the tasting to the final version.",
      },
      {
        title: "The big day",
        body: "We coordinate the reception service: canapés as your guests arrive, the meal, the personalized cake. You host — we take care of the rest.",
      },
    ],
    menuTitle: "A sample 4-course wedding menu",
    menuBody:
      "Oyster Rockefeller, venison tartare with blackcurrant, beef fillet Rossini with périgourdine sauce or line-caught sea bass in a herb crust, and a personalized wedding cake to close the evening. The sample sets the tone — your menu will be composed with you.",
    menuCta: "See the 4-course wedding menu",
    venuesTitle: "From Mont-Tremblant to Montréal",
    venuesBody1:
      "We travel throughout the Laurentians — Mont-Tremblant, Saint-Sauveur, Sainte-Adèle, Val-David, Sainte-Agathe-des-Monts, Morin-Heights, Saint-Jérôme — as well as Montréal. Family chalet, inn, reception hall or estate: we adapt the kitchen logistics to the venue you've chosen.",
    venuesBody2:
      "Based in Mont-Tremblant, we know mountain receptions: terrace cocktails in summer, firelit evenings in winter, and chalet kitchens that take some taming.",
    faqTitle: "Wedding FAQ",
    faq: [
      {
        q: "Do you offer a tasting before the wedding?",
        a: "Yes. The menu is built with you, and the tasting is where the final choices are settled before the big day.",
      },
      {
        q: "Can the menu account for allergies and dietary restrictions?",
        a: "Every menu is bespoke: tell us what your guests can't eat and we'll design around it from the start.",
      },
      {
        q: "Do you travel outside Mont-Tremblant?",
        a: "Yes, throughout the Laurentians and as far as Montréal. Mention your venue in your request: we'll confirm the logistics with the quote.",
      },
      {
        q: "How do I get a quote?",
        a: "Write to us through the contact form with the date, the venue and the approximate guest count. We'll reply quickly with a tailored proposal.",
      },
    ],
    ctaTitle: "Tell us about your wedding.",
    ctaButton: "Request a quote",
  },
  chaletPage: {
    heroTitle: "A private chef at your chalet, in Tremblant",
    heroSubtitle:
      "The fine-dining experience, without leaving your living room.",
    metaTitle: "Private chef at your chalet — Tremblant & Laurentians",
    metaDescription:
      "A private chef cooks in your chalet in Tremblant and the Laurentians: 5-course tasting menu or brunch, table service, and a spotless kitchen left behind.",
    intro1:
      "Your chalet getaway deserves better than an impossible Saturday-night reservation. Camelot, a private chef based in Mont-Tremblant, brings the restaurant to your table: the chef arrives with the ingredients, cooks on site, plates every course and leaves the kitchen spotless.",
    intro2:
      "A birthday dinner, a weekend with friends, a holiday feast or a lazy brunch after a morning on the slopes: the menu is composed around your tastes, the season and your group.",
    howTitle: "How it works",
    howSteps: [
      {
        title: "Before your stay",
        body: "Write to us with the date, the chalet's area and the number of guests. The chef composes a bespoke menu and refines it with you.",
      },
      {
        title: "On the evening",
        body: "The chef arrives with the ingredients, sets up in the chalet's kitchen and plates every course at the table.",
      },
      {
        title: "After the last course",
        body: "The kitchen is left spotless — all that remains is the table and the memories.",
      },
    ],
    menuTitle: "A sample tasting menu",
    menuBody:
      "Oyster with champagne béchamel, venison tartare, seared scallops, rack of lamb, churros with maple caramel… The 5-course menu gives you a glimpse, and a brunch menu is also offered for chalet mornings.",
    menuCta: "See the 5-course & brunch menu",
    seasonTitle: "In step with the mountain",
    seasonBody1:
      "In winter, the chef takes over after your day on the slopes: guests drift from the spa to the table while the kitchen gets to work. In summer, the formula suits long terrace evenings and big family tables.",
    seasonBody2:
      "We serve the resort areas of the Laurentians: Mont-Tremblant and its slopes, Saint-Sauveur, Sainte-Adèle, Val-David, Sainte-Agathe-des-Monts and Morin-Heights.",
    faqTitle: "Chalet chef FAQ",
    faq: [
      {
        q: "What does the chef provide?",
        a: "The chef arrives with the ingredients and adapts to the chalet's kitchen — mention its particularities in your request and the menu will take them into account.",
      },
      {
        q: "Can you cook for a large group?",
        a: "Every request is assessed by group and venue. Give the number of guests in the form: the quote will confirm the right formula.",
      },
      {
        q: "How far in advance should I book?",
        a: "Write to us as soon as your dates are set, especially for ski-season weekends and the holidays. We reply quickly.",
      },
    ],
    ctaTitle: "Your chalet, our kitchen.",
    ctaButton: "Request a quote",
  },
  chefPage: {
    heroTitle: "Jean-Philippe Delarosbil",
    heroSubtitle: "Executive chef and owner of Camelot",
    metaTitle: "Jean-Philippe Delarosbil — private chef in Mont-Tremblant",
    metaDescription:
      "Trained at the ITHQ and awakened at the Fairmont Château Whistler, seasoned in Michelin-starred restaurants, chef Jean-Philippe Delarosbil has been cooking for over 15 years — today a private chef and caterer in Mont-Tremblant.",
    sections: [
      {
        title: "From Whistler to the ITHQ",
        body: "It was at the Fairmont Château Whistler that Jean-Philippe discovered his passion for cooking. Back in Québec, he entered the Institut de tourisme et d'hôtellerie du Québec, graduating in Cuisine, then Advanced Cuisine.",
      },
      {
        title: "Stars and the road",
        body: "He then honed his craft through stages in Michelin-starred restaurants and went on to work in establishments around the world — eventually launching his own gourmet food truck on Vancouver Island.",
      },
      {
        title: "Back to the Laurentians",
        body: "With more than fifteen years in the trade, Jean-Philippe returned to Québec and founded Camelot in Mont-Tremblant: a private chef and catering service whose menus follow the seasons and Québec gastronomy.",
      },
      {
        title: "His cooking",
        body: "Products of the moment, menus that are never fixed, and the ambition to create unforgettable moments for you and your loved ones — at home, at the chalet or at your reception venue.",
      },
    ],
    ctaTitle: "Invite the chef to your table.",
    ctaButton: "Contact us",
    servicesButton: "Discover our services",
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
