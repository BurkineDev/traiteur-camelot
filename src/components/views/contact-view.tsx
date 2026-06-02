import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { ObfuscatedEmail } from "@/components/obfuscated-email";
import { getDictionary } from "@/lib/dictionaries";
import { site } from "@/lib/site-config";
import type { Locale } from "@/lib/i18n";

export function ContactView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).contact;
  return (
    <>
      <PageHero title={t.heroTitle} subtitle={t.heroSubtitle} image="/contact-hero.jpg" />

      <section className="bg-cream px-5 py-16 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-3xl text-olive-dark">{t.infoTitle}</h2>
            <p className="mt-4 text-ink/80">{t.infoBody}</p>
            <dl className="mt-8 space-y-3 text-ink/90">
              <div>
                <dt className="text-olive-dark">{t.phone}</dt>
                <dd>
                  <a href={site.phoneHref} className="hover:text-olive">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-olive-dark">{t.email}</dt>
                <dd>
                  <ObfuscatedEmail className="hover:text-olive" />
                </dd>
              </div>
              <div>
                <dt className="text-olive-dark">{t.location}</dt>
                <dd>
                  {site.address.locality}, {site.address.region}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl bg-white/60 p-6 sm:p-8">
            <ContactForm kind="devis" locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
