import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

const photos = [
  { src: "/gallery-1.jpg", alt: "Dressage de table pour une réception — traiteur Camelot" },
  { src: "/gallery-2.jpg", alt: "Entrées gastronomiques dressées à l'assiette" },
  { src: "/gallery-3.jpg", alt: "Dessert maison aux fraises" },
  { src: "/gallery-4.jpg", alt: "Décor floral de mariage dans les Laurentides" },
  { src: "/gallery-5.jpg", alt: "Plateau de grignotines et de fruits" },
  { src: "/gallery-6.jpg", alt: "Table de brunch et de réception" },
];

/** Galerie de réalisations (photos du client). */
export function Gallery({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home;
  return (
    <section className="bg-cream px-5 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-olive-dark">
              {t.galleryEyebrow}
            </p>
            <h2 className="mt-3 text-4xl text-olive-dark lg:text-5xl">
              {t.galleryTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink/80">
              {t.gallerySubtitle}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
            {photos.map((p) => (
              <div
                key={p.src}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md ring-1 ring-olive/10"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
