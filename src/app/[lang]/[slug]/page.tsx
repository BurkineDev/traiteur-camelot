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

  // URL canonique de la langue courante (FR à la racine, EN sous /en)
  langs[lang === "fr" ? "fr-CA" : "en-CA"] =
    lang === "fr" ? `/${slug}` : `/en/${slug}`;

  // URL équivalente dans l'autre langue
  const other: Locale = lang === "fr" ? "en" : "fr";
  const eq = equivalentSlug(lang, other, slug);
  if (eq !== null) {
    langs[other === "fr" ? "fr-CA" : "en-CA"] =
      other === "fr" ? (eq ? `/${eq}` : "/") : (eq ? `/en/${eq}` : "/en");
  }

  // x-default = version FR à la racine
  const frSlug = lang === "fr" ? slug : equivalentSlug(lang, "fr", slug);
  langs["x-default"] = frSlug ? `/${frSlug}` : "/";
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
        description: t.services.metaDescription,
      };
    case "contact":
      return {
        title: t.contact.metaTitle,
        description: t.contact.metaDescription,
      };
    case "testimonials":
      return {
        title: t.testimonials.metaTitle,
        description: t.testimonials.metaDescription,
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
  const canonical = lang === "fr" ? `/${slug}` : `/en/${slug}`;
  const languages = buildLanguages(lang, slug);

  if (r.type === "menu") {
    const c = menuChrome[r.key][lang];
    return {
      // metaTitle contient déjà « | Camelot » — absolute évite que le
      // template du layout ne l'ajoute une seconde fois.
      title: { absolute: c.metaTitle },
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
