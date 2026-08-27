import type { Metadata } from "next";
import { Poiret_One } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { siteUrl } from "@/lib/site-config";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactFab } from "@/components/contact-fab";
import { locales, isLocale } from "@/lib/i18n";

// Police identique à l'original — next/font l'auto-héberge (perf + RGPD).
const poiret = Poiret_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-poiret",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Camelot — Chef privé & traiteur, Mont-Tremblant",
    template: "%s | Camelot",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Camelot",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Camelot — chef privé et traiteur, Mont-Tremblant",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.jpg"] },
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const htmlLang = lang === "fr" ? "fr-CA" : "en-CA";

  return (
    <html lang={htmlLang} className={poiret.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(lang)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema(lang)) }}
        />
        <SiteHeader locale={lang} />
        <main>{children}</main>
        <SiteFooter locale={lang} />
        <ContactFab locale={lang} />
        <Analytics />
      </body>
    </html>
  );
}
