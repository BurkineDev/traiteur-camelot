import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Gallery } from "@/components/gallery";
import { getDictionary } from "@/lib/dictionaries";
import { path, type Locale } from "@/lib/i18n";

export function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home;
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-5 text-center">
        <div className="animate-heroZoom absolute inset-0 bg-[#1a1a1a]">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/35" />

        <div className="relative z-10 max-w-3xl">
          <p className="animate-rise text-xs uppercase tracking-[0.4em] text-gold-soft drop-shadow-[0_1px_6px_rgba(0,0,0,0.65)] sm:text-sm">
            {t.heroEyebrow}
          </p>
          <h1 className="animate-rise mt-5 text-balance text-5xl text-cream drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)] sm:text-7xl lg:text-8xl [animation-delay:80ms]">
            {t.heroTitle}
          </h1>
          <span className="animate-rise mx-auto mt-6 block h-px w-24 bg-gold-soft/70 [animation-delay:160ms]" />
          <p className="animate-rise mt-6 text-xl text-cream drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] [animation-delay:240ms]">
            {t.heroSubtitle}
          </p>
          <div className="animate-rise mt-10 flex flex-wrap justify-center gap-4 [animation-delay:360ms]">
            <ButtonLink href={path(locale, "services")} variant="cream" size="lg">
              {t.viewMenus}
            </ButtonLink>
            <ButtonLink href={path(locale, "contact")} variant="outline" size="lg">
              {t.contactUs}
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ---------------- NOTRE HISTOIRE ---------------- */}
      <section id="notre-histoire" className="scroll-mt-28 bg-cream px-5 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-4 text-sm uppercase tracking-[0.3em] text-olive-dark">
            <span className="h-px w-10 bg-gold" />
            {t.histoireEyebrow}
            <span className="h-px w-10 bg-gold" />
          </p>
          <h2 className="mt-5 text-5xl text-olive-deep sm:text-6xl">{t.histoireTitle}</h2>
          <p className="mt-8 text-xl leading-relaxed text-ink/85">{t.histoireBody}</p>
          <span className="mx-auto mt-10 block text-2xl text-gold">◆</span>
        </div>
      </section>

      {/* ---------------- CHEF ---------------- */}
      <section className="bg-parchment px-5 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-olive-dark">{t.chefEyebrow}</p>
            <h2 className="mt-3 text-4xl text-olive-deep sm:text-5xl">{t.chefName}</h2>
            <p className="mt-1 italic text-ink/70">{t.chefRole}</p>
            <p className="mt-5 text-lg leading-relaxed text-ink/90">{t.chefBody}</p>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-olive/20 shadow-[0_24px_60px_-30px_rgba(45,55,40,0.6)] ring-1 ring-gold/20">
            <Image
              src="/chef.jpg"
              alt={t.chefName}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------- GALERIE ---------------- */}
      <Gallery locale={locale} />

      {/* ---------------- BANDEAU CTA (pâtes) ---------------- */}
      {/* L'ancien effet parallaxe (background-attachment: fixed) était
          incompatible avec next/image et déjà ignoré sur iOS. */}
      <section className="relative overflow-hidden bg-olive-dark px-5 py-28 text-center sm:py-36">
        <Image
          src="/pasta.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(40,47,34,.74),rgba(40,47,34,.64))]" />
        <h2 className="relative mx-auto max-w-2xl text-3xl text-cream sm:text-4xl">{t.ctaTitle}</h2>
        <div className="relative mt-8">
          <ButtonLink href={path(locale, "contact")} variant="cream" size="lg">
            {t.ctaButton}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
