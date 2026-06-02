import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";
import { pageSlugs, menuSlugs } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  const push = (fr: string, en: string, priority: number) => {
    const languages = { fr: siteUrl + fr, en: siteUrl + en };
    entries.push({ url: siteUrl + fr, lastModified: now, priority, alternates: { languages } });
    entries.push({ url: siteUrl + en, lastModified: now, priority, alternates: { languages } });
  };

  for (const key of Object.keys(pageSlugs) as (keyof typeof pageSlugs)[]) {
    const fr = pageSlugs[key].fr ? `/fr/${pageSlugs[key].fr}` : "/fr";
    const en = pageSlugs[key].en ? `/en/${pageSlugs[key].en}` : "/en";
    const priority = key === "home" ? 1 : key === "services" ? 0.9 : 0.7;
    push(fr, en, priority);
  }

  for (const key of Object.keys(menuSlugs) as (keyof typeof menuSlugs)[]) {
    push(`/fr/${menuSlugs[key].fr}`, `/en/${menuSlugs[key].en}`, 0.7);
  }

  return entries;
}
