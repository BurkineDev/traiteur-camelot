import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Site bilingue : FR prioritaire sous /fr, EN sous /en.
  // Les anciennes URLs (sans préfixe, déjà indexées) sont redirigées en 308
  // vers leur équivalent /fr — pour ne perdre aucune position SEO.
  async redirects() {
    // Redirections 301 permanentes depuis les URLs /fr/* temporairement indexées
    // vers les nouvelles URLs canoniques FR à la racine.
    // Ces redirections s'exécutent AVANT le middleware → aucun risque de boucle.
    return [
      { source: "/fr", destination: "/", permanent: true },
      { source: "/fr/nos-services", destination: "/nos-services", permanent: true },
      { source: "/fr/nous-joindre", destination: "/nous-joindre", permanent: true },
      { source: "/fr/temoignage", destination: "/temoignage", permanent: true },
      { source: "/fr/menu-5", destination: "/menu-5", permanent: true },
      { source: "/fr/canapes", destination: "/canapes", permanent: true },
      { source: "/fr/menu-bachelorette", destination: "/menu-bachelorette", permanent: true },
      { source: "/fr/menu-mariage", destination: "/menu-mariage", permanent: true },
      // Anciennes URLs encore indexées (site précédent) qui renvoyaient 404.
      { source: "/plats-dinatoires", destination: "/canapes", permanent: true },
      { source: "/terms-and-conditions", destination: "/nous-joindre", permanent: true },
    ];
  },
};

export default nextConfig;
