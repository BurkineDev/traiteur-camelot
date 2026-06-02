import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/lib/dictionaries";
import { path, menuPath, serviceKeys, type Locale } from "@/lib/i18n";

export function ServicesView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).services;
  return (
    <>
      <PageHero title={t.heroTitle} subtitle={t.heroSubtitle} image="/services-hero.jpg" />

      <div className="bg-cream">
        {serviceKeys.map((key, i) => {
          const s = t.items[key];
          const reversed = i % 2 === 1;
          return (
            <section key={key} id={key} className="scroll-mt-28 px-5 py-20 lg:py-28">
              <Reveal>
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                  <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
                    <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] shadow-[0_30px_70px_-30px_rgba(45,55,40,0.55)] ring-1 ring-gold/25">
                      <div
                        className="absolute inset-0 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                        style={{
                          backgroundImage: `url('/service-${key}.jpg')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        role="img"
                        aria-label={s.title}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-olive-deep/35 via-transparent to-transparent" />
                    </div>
                    <span className="absolute -top-5 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-olive-deep text-xl text-gold-soft shadow-lg ring-1 ring-gold/30">
                      {`0${i + 1}`}
                    </span>
                  </div>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <p className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-olive-dark">
                      <span className="h-px w-10 bg-gold" />
                      {t.serviceLabel}
                    </p>
                    <h2 className="mt-4 text-4xl text-olive-deep sm:text-5xl">{s.title}</h2>
                    <p className="mt-4 text-2xl italic text-olive">{s.short}</p>
                    <p className="mt-6 text-lg leading-relaxed text-ink/90">{s.description}</p>
                    <div className="mt-9 flex flex-wrap items-center gap-4">
                      <ButtonLink href={path(locale, "contact")} variant="primary">
                        {t.requestQuote}
                      </ButtonLink>
                      <ButtonLink href={menuPath(locale, key)} variant="olive">
                        {t.discoverMenu}
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </Reveal>

              {i < serviceKeys.length - 1 && (
                <div className="mx-auto mt-20 flex max-w-6xl items-center justify-center gap-4 lg:mt-28">
                  <span className="h-px w-16 bg-olive/20" />
                  <span className="text-gold">◆</span>
                  <span className="h-px w-16 bg-olive/20" />
                </div>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
