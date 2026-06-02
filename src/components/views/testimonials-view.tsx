import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { getDictionary } from "@/lib/dictionaries";
import { path, type Locale } from "@/lib/i18n";

export function TestimonialsView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).testimonials;
  return (
    <section
      className="px-5 py-20 lg:py-28"
      style={{
        backgroundColor: "var(--color-cream)",
        backgroundImage: "url('/temoignage-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-xl">
        <h1 className="text-center text-4xl text-olive-dark sm:text-5xl">{t.title}</h1>
        <div className="mt-10 rounded-2xl bg-white/70 p-6 backdrop-blur-sm sm:p-8">
          <ContactForm kind="temoignage" locale={locale} />
        </div>
        <p className="mt-6 text-center text-sm text-ink/70">
          <Link href={path(locale, "home")} className="underline hover:text-olive">
            {t.backHome}
          </Link>
        </p>
      </div>
    </section>
  );
}
