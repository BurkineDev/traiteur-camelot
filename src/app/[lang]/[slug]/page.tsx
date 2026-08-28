import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesView } from "@/components/views/services-view";
import { ContactView } from "@/components/views/contact-view";
import { TestimonialsView } from "@/components/views/testimonials-view";
import { WeddingView } from "@/components/views/wedding-view";
import { ChaletView } from "@/components/views/chalet-view";
import { CorporateView } from "@/components/views/corporate-view";
import { ChefView } from "@/components/views/chef-view";
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

// dynamicParams doit rester actif : avec false, un slug inconnu recevrait la
// 404 Next.js par défaut au lieu de la page not-found du segment [lang].
// Les slugs connus restent pré-générés ; un slug inconnu passe par notFound().
export const dynamicParams = true;

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
    case "weddingCatering":
      return {
        title: t.weddingPage.metaTitle,
        description: t.weddingPage.metaDescription,
      };
    case "chaletChef":
      return {
        title: t.chaletPage.metaTitle,
        description: t.chaletPage.metaDescription,
      };
    case "corporateCatering":
      return {
        title: t.corporatePage.metaTitle,
        description: t.corporatePage.metaDescription,
      };
    case "chef":
      return {
        title: t.chefPage.metaTitle,
        description: t.chefPage.metaDescription,
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
    case "weddingCatering":
      return <WeddingView locale={lang} />;
    case "chaletChef":
      return <ChaletView locale={lang} />;
    case "corporateCatering":
      return <CorporateView locale={lang} />;
    case "chef":
      return <ChefView locale={lang} />;
    default:
      notFound();
  }
}
