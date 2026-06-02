/**
 * Contenu des pages « exemple de menu », repris de l'ancien site
 * (mêmes URLs : /menu-5, /canapes, /menu-bachelorette, /menu-mariage)
 * pour préserver le référencement. Chaque menu est relié à un service
 * depuis /nos-services.
 */

export type MenuItem = { name: string; description?: string };
export type MenuCourse = { heading?: string; items: MenuItem[] };
export type MenuGroup = { name?: string; courses: MenuCourse[] };

export type MenuPageData = {
  slug: string; // chemin complet, ex. "/menu-5"
  title: string;
  subtitle?: string;
  heroImage?: string;
  metaTitle: string;
  metaDescription: string;
  groups: MenuGroup[];
};

export const menus = {
  "menu-5": {
    slug: "/menu-5",
    title: "Chef à domicile",
    subtitle: "Un exemple de nos menus dégustation, servis chez vous.",
    heroImage: "/service-chef-a-domicile.jpg",
    metaTitle:
      "Exemple de menu — chef privé à domicile (5 services & brunch) | Camelot",
    metaDescription:
      "Un aperçu de nos menus de chef privé à domicile : menu 5 services et menu brunch, sur mesure, dans les Laurentides et à Montréal.",
    groups: [
      {
        name: "Menu 5 services",
        courses: [
          {
            items: [
              { name: "Calmar", description: "pain brioché, kimchi, échalotes frites, chili mayo" },
              { name: "Huître", description: "béchamel champagne, caviar de mulet" },
              { name: "Tartare de cerf", description: "champignons marinés, œuf au sel" },
              { name: "Pétoncles poêlées", description: "panais, polenta" },
              { name: "Carré d'agneau", description: "pommes de terre sarladaises, rapini, sauce xérès" },
              { name: "Churros", description: "caramel érable, fleur de sel" },
            ],
          },
        ],
      },
      {
        name: "Menu brunch",
        courses: [
          {
            items: [
              { name: "Truite fumée", description: "labneh, blini" },
              { name: "Œuf bénédictine", description: "jambon à l'os" },
              { name: "Cupcake", description: "poireau et lardon" },
              { name: "Salade de fruits", description: "poivre rose" },
              { name: "Profiteroles", description: "banane, chocolat Valrhona" },
            ],
          },
        ],
      },
    ],
  },

  canapes: {
    slug: "/canapes",
    title: "Cocktail dinatoire",
    subtitle: "Des bouchées raffinées et pièces signature pour vos réceptions.",
    heroImage: "/service-cocktail-dinatoire.jpg",
    metaTitle: "Canapés & cocktail dinatoire — traiteur Mont-Tremblant | Camelot",
    metaDescription:
      "Une sélection de canapés et bouchées signature pour vos cocktails dinatoires et réceptions dans les Laurentides et à Montréal.",
    groups: [
      {
        courses: [
          {
            heading: "Canapés",
            items: [
              { name: "Gougère", description: "gruyère des grottes, lard" },
              { name: "Arancini", description: "champignons sauvages, truffe" },
              { name: "Royal de foie gras", description: "argousier, brioche" },
              { name: "Bonbons de saumon", description: "concombre, aneth" },
              { name: "Polpette de gibier", description: "griotte, glace de veau" },
              { name: "Tartare de thon", description: "melon pressé, wasabi" },
              { name: "Bœuf wagyu au sel", description: "figue, pesto fleur d'ail" },
              { name: "Accra de morue", description: "sauce gribiche" },
            ],
          },
        ],
      },
    ],
  },

  "menu-bachelorette": {
    slug: "/menu-bachelorette",
    title: "Traiteur / Événements",
    subtitle:
      "Des menus pensés pour vos événements et buffets, du corporatif à la fête.",
    heroImage: "/service-traiteur-evenements.jpg",
    metaTitle:
      "Menu traiteur, buffet & événementiel (bachelorette & corporatif) | Camelot",
    metaDescription:
      "Exemples de menus traiteur, buffet et événementiel pour vos événements : bachelorette et corporatif, à Mont-Tremblant, dans les Laurentides et à Montréal.",
    groups: [
      {
        name: "Menu Bachelorette",
        courses: [
          {
            heading: "En station pour débuter",
            items: [
              { name: "Charcuterie de la région & fromage du Québec" },
              { name: "Huître fraîche", description: "mignonette, bloody césar" },
            ],
          },
          {
            heading: "La suite",
            items: [
              { name: "Salade de betterave jaune", description: "pistache, Paillot de chèvre" },
              { name: "Orecchiette", description: "rapini, noix de pin, Manchego" },
              { name: "Volaille rôtie", description: "sauce truffe" },
              { name: "Pomme de terre rattes croustillantes", description: "beurre d'herbes" },
            ],
          },
          {
            heading: "Table des desserts",
            items: [
              { name: "Profiterole", description: "chantilly érable, fleur de sel" },
              { name: "Salade de fruits", description: "poivre rose" },
            ],
          },
        ],
      },
      {
        name: "Menu Corporatif",
        courses: [
          {
            heading: "Canapés",
            items: [
              { name: "Blini", description: "saumon fumé à chaud, crème d'aneth" },
              { name: "Tartare de bœuf", description: "cornichon, câpres capucines" },
              { name: "Arancini champignon sauvage", description: "fromage poutine" },
            ],
          },
          {
            heading: "Plat dinatoire",
            items: [
              { name: "Pain brioche", description: "salade de crevette, fenouil" },
              { name: "Parmentier de canard confit", description: "mousseline panais, glace de veau" },
            ],
          },
          {
            heading: "Mignardises",
            items: [
              { name: "Mini cannoli", description: "Dulce de leche" },
              { name: "Tartelette citron chocolat blanc", description: "meringue" },
            ],
          },
        ],
      },
    ],
  },

  "menu-mariage": {
    slug: "/menu-mariage",
    title: "Menu Mariage — 4 services",
    subtitle:
      "La gastronomie de votre grand jour, dans les Laurentides et à Montréal.",
    heroImage: "/service-mariage.jpg",
    metaTitle: "Menu mariage 4 services — traiteur & chef privé | Camelot",
    metaDescription:
      "Un exemple de menu mariage 4 services : canapés, entrées, plats et dessert. Traiteur et chef privé à Mont-Tremblant, dans les Laurentides et à Montréal.",
    groups: [
      {
        courses: [
          {
            heading: "Entrée — Canapés",
            items: [
              { name: "Huître Rockefeller" },
              { name: "Tartare de cerf", description: "cassis" },
              { name: "Accra de crabe des neiges", description: "sauce Espelette" },
            ],
          },
          {
            heading: "Choix d'entrées",
            items: [
              { name: "Risotto de betterave fumée" },
              { name: "Paillot de chèvre", description: "vinaigrette truffe, niçoise" },
              { name: "Gravlax de truite", description: "gaufrette câpres, chantilly aneth, concombre" },
            ],
          },
          {
            heading: "Choix de plats",
            items: [
              { name: "Filet de bœuf Rossini", description: "sauce périgourdine, pomme de terre mille-feuilles, pleurote" },
              { name: "Bar de ligne en croûte d'herbes", description: "beurre blanc à l'orange, pomme de terre mousseline, panais braisé" },
              { name: "Ravioli ortie et ricotta maison", description: "sauce champagne, noix de pin, petit pois" },
            ],
          },
          {
            heading: "Dessert",
            items: [{ name: "Gâteau de mariage personnalisé" }],
          },
        ],
      },
    ],
  },
} satisfies Record<string, MenuPageData>;

export type MenuSlug = keyof typeof menus;
