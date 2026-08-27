"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
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

const AUTOPLAY_MS = 4000;

export function Gallery({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home;
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setActive(index);
  }, []);

  const next = useCallback(() => scrollTo((active + 1) % photos.length), [active, scrollTo]);
  const prev = useCallback(() => scrollTo((active - 1 + photos.length) % photos.length), [active, scrollTo]);

  // Autoplay
  useEffect(() => {
    timerRef.current = setTimeout(next, AUTOPLAY_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [next]);

  // Sync dot indicator with native scroll (swipe / scroll)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const slideWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 1;
      const idx = Math.round(track.scrollLeft / slideWidth);
      setActive(Math.min(idx, photos.length - 1));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-cream px-5 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
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

        {/* Carousel */}
        <div className="relative mt-12">
          {/* Track */}
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {photos.map((p, i) => (
              <div
                key={p.src}
                className="relative aspect-square w-[80vw] shrink-0 snap-center overflow-hidden rounded-2xl shadow-md ring-1 ring-olive/10 sm:w-[55vw] md:w-[42vw] lg:w-[30vw]"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 42vw, (min-width: 640px) 55vw, 80vw"
                  className={`object-cover transition-transform duration-[1200ms] ease-out ${i === active ? "scale-[1.03]" : "scale-100"}`}
                />
              </div>
            ))}
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Photo précédente"
            className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 shadow-md ring-1 ring-olive/20 transition hover:bg-parchment active:scale-95 sm:-left-5 lg:-left-7"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-olive-dark" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Photo suivante"
            className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 shadow-md ring-1 ring-olive/20 transition hover:bg-parchment active:scale-95 sm:-right-5 lg:-right-7"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-olive-dark" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-olive-dark" : "w-1.5 bg-olive/30 hover:bg-olive/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
