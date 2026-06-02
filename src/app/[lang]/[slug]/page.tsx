import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesView } from "@/components/views/services-view";
import { ContactView } from "@/components/views/contact-view";
import { TestimonialsView } from "@/components/views/testimonials-view";
import { MenuView } from "@/components/menu-view";
import { getDictionary, menuChrome, type Dictionary } from "@/lib/dictionaries";
import {
  allSlugParams,
  isLocale,
  resolveSlug,
  equivalentSlug,
  type Locale,
  type PageKey,
} from "@/lib/i18n";

export function generateStaticParams() {
  return allSlugParams();
}

export const dynamicParams = false;

function buildLanguages(lang: Locale, slug: string) {
  const langs: Record<string, string> = {};
  langs[lang] = `/${lang}/${slug}`;
  const other: Locale = lang === "fr" ? "en" : "fr";
  const eq = equivalentSlug(lang, other, slug);
  if (eq !== null) langs[other] = eq ? `/${other}/${eq}` : `/${other}`;
  const frSlug = lang === "fr" ? slug : equivalentSlug(lang, "fr", slug);
  langs["x-default"] = frSlug ? `/fr/${frSlug}` : "/fr";
  return langs;
}

function pageMeta(lang: Locale, key: PageKey, t: Dictionary) {
  switch (key) {
    case "services":
      return {
        title:
          lang === "fr"
            ? "Services traiteur, chef privé & chef à domicile — Mont-Tremblant"
            : "Catering, private chef & personal chef services — Mont-Tremblant",
        description: t.services.heroSubtitle,
      };
    case "contact":
      return { title: t.contact.heroTitle, description: t.contact.heroSubtitle };
    case "testimonials":
      return {
        title: t.nav.testimonials,
        description:
          lang === "fr"
            ? "Partagez votre expérience avec le traiteur et chef privé Camelot, à Mont-Tremblant."
            : "Share your experience with Camelot caterer and private chef, in Mont-Tremblant.",
      };
    default:
      return { title: "Camelot", description: t.home.heroSubtitle };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const r = resolveSlug(lang, slug);
  if (!r) return {};
  const canonical = `/${lang}/${slug}`;
  const languages = buildLanguages(lang, slug);

  if (r.type === "menu") {
    const c = menuChrome[r.key][lang];
    return {
      title: c.metaTitle,
      description: c.metaDescription,
      alternates: { canonical, languages },
    };
  }

  const meta = pageMeta(lang, r.key, getDictionary(lang));
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical, languages },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const r = resolveSlug(lang, slug);
  if (!r) notFound();

  if (r.type === "menu") return <MenuView locale={lang} menuKey={r.key} />;

  switch (r.key) {
    case "services":
      return <ServicesView locale={lang} />;
    case "contact":
      return <ContactView locale={lang} />;
    case "testimonials":
      return <TestimonialsView locale={lang} />;
    default:
      notFound();
  }
}
