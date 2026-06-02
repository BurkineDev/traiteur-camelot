import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeView } from "@/components/views/home-view";
import { locales, isLocale, path, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const homeMeta: Record<Locale, { title: string; description: string }> = {
  fr: {
    title:
      "Chef privé à domicile, traiteur & buffet — Mont-Tremblant, Laurentides",
    description:
      "Chef privé à domicile, traiteur, buffet et événementiel : menus gastronomiques sur mesure pour mariages, cocktails et événements à Mont-Tremblant, dans les Laurentides et à Montréal.",
  },
  en: {
    title:
      "Private chef at home, caterer & buffet — Mont-Tremblant, Laurentians",
    description:
      "Private chef at home, caterer, buffet and events: bespoke fine-dining menus for weddings, cocktails and events in Mont-Tremblant, the Laurentians and Montréal.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const m = homeMeta[lang];
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: path(lang, "home"),
      languages: { fr: "/fr", en: "/en", "x-default": "/fr" },
    },
    openGraph: {
      type: "website",
      locale: lang === "fr" ? "fr_CA" : "en_CA",
      url: path(lang, "home"),
      siteName: "Camelot",
      title: m.title,
      description: m.description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <HomeView locale={lang} />;
}
