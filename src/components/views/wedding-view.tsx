import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/lib/dictionaries";
import { faqSchema } from "@/lib/schema";
import { siteUrl } from "@/lib/site-config";
import { path, menuPath, type Locale } from "@/lib/i18n";

/** Page d'atterrissage « traiteur mariage Mont-Tremblant » (audit SEO). */
export function WeddingView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).weddingPage;
  const url = `${siteUrl}${path(locale, "weddingCatering")}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(url, t.faq)),
        }}
      />
      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/service-mariage.jpg"
      />

      {/* ---------------- INTRO ---------------- */}
      <section className="bg-cream px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl leading-relaxed text-ink/90">{t.intro1}</p>
          <p className="mt-6 text-lg italic leading-relaxed text-ink/75">
            {t.intro2}
          </p>
          <span className="mx-auto mt-10 block text-2xl text-gold">◆</span>
        </div>
      </section>

      {/* ---------------- DÉROULÉ ---------------- */}
      <section className="bg-parchment px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-4xl text-olive-deep sm:text-5xl">
              {t.processTitle}
            </h2>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {t.processSteps.map((s, i) => (
                <div key={s.title} className="text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-olive-deep text-lg text-gold-soft ring-1 ring-gold/30">
                    {`0${i + 1}`}
                  </span>
                  <h3 className="mt-5 text-2xl text-olive-dark">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/85">{s.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- MENU ---------------- */}
      <section className="bg-cream px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-4xl text-olive-deep sm:text-5xl">
              {t.menuTitle}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/85">
              {t.menuBody}
            </p>
            <div className="mt-8">
              <ButtonLink href={menuPath(locale, "mariage")} variant="olive">
                {t.menuCta}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- LIEUX ---------------- */}
      <section className="bg-parchment px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center text-4xl text-olive-deep sm:text-5xl">
              {t.venuesTitle}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink/85">
              {t.venuesBody1}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink/85">
              {t.venuesBody2}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="bg-cream px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center text-4xl text-olive-deep sm:text-5xl">
              {t.faqTitle}
            </h2>
            <div className="mt-12 space-y-8">
              {t.faq.map((f) => (
                <div
                  key={f.q}
                  className="rounded-2xl bg-white/60 p-6 ring-1 ring-olive/10 sm:p-8"
                >
                  <h3 className="text-xl text-olive-dark">{f.q}</h3>
                  <p className="mt-3 leading-relaxed text-ink/85">{f.a}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="bg-olive-dark px-5 py-16 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl text-cream sm:text-4xl">
          {t.ctaTitle}
        </h2>
        <div className="mt-8">
          <ButtonLink href={path(locale, "contact")} variant="cream" size="lg">
            {t.ctaButton}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
