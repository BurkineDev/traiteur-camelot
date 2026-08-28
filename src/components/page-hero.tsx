import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Bandeau de titre. L'image de fond se met dans /public (ex. /pasta.jpg).
 * Sans image, un dégradé olive sert de repli propre.
 * L'image passe par next/image (fill + priority : c'est le LCP des pages
 * intérieures) au lieu d'un background CSS non optimisé.
 */
export function PageHero({
  title,
  subtitle,
  image,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative flex min-h-[42vh] items-center justify-center overflow-hidden px-5 py-20 text-center",
        className,
      )}
      style={{ backgroundColor: "var(--color-olive)" }}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(45,55,40,.62),rgba(45,55,40,.42))]" />
        </>
      )}
      <div className="relative z-10 max-w-2xl">
        <h1 className="animate-rise text-5xl text-cream drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="animate-rise mt-5 text-lg text-cream drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] [animation-delay:120ms]">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
