import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Site bilingue : FR prioritaire sous /fr, EN sous /en.
  // Les anciennes URLs (sans préfixe, déjà indexées) sont redirigées en 308
  // vers leur équivalent /fr — pour ne perdre aucune position SEO.
  async redirects() {
    return [
      { source: "/", destination: "/fr", permanent: false },
      { source: "/nos-services", destination: "/fr/nos-services", permanent: true },
      { source: "/nous-joindre", destination: "/fr/nous-joindre", permanent: true },
      { source: "/temoignage", destination: "/fr/temoignage", permanent: true },
      { source: "/menu-5", destination: "/fr/menu-5", permanent: true },
      { source: "/canapes", destination: "/fr/canapes", permanent: true },
      { source: "/menu-bachelorette", destination: "/fr/menu-bachelorette", permanent: true },
      { source: "/menu-mariage", destination: "/fr/menu-mariage", permanent: true },
    ];
  },
};

export default nextConfig;
