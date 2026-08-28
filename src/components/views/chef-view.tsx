import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/lib/dictionaries";
import { chefSchema } from "@/lib/schema";
import { site } from "@/lib/site-config";
import { path, type Locale } from "@/lib/i18n";

/** Page « le chef » : le parcours de Jean-Philippe Delarosbil (audit SEO). */
export function ChefView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).chefPage;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(chefSchema(locale)),
        }}
      />
      <PageHero title={t.heroTitle} subtitle={t.heroSubtitle} />

      {/* ---------------- PARCOURS ---------------- */}
      <section className="bg-cream px-5 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-olive/20 shadow-[0_24px_60px_-30px_rgba(45,55,40,0.6)] ring-1 ring-gold/20">
              <Image
                src="/chef.jpg"
                alt={site.founder.name}
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="space-y-12">
            {t.sections.map((s) => (
              <Reveal key={s.title}>
                <div>
                  <h2 className="text-3xl text-olive-deep sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink/90">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="bg-olive-dark px-5 py-16 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl text-cream sm:text-4xl">
          {t.ctaTitle}
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href={path(locale, "contact")} variant="cream" size="lg">
            {t.ctaButton}
          </ButtonLink>
          <ButtonLink href={path(locale, "services")} variant="outline" size="lg">
            {t.servicesButton}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
