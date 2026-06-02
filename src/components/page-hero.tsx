import { cn } from "@/lib/utils";

/**
 * Bandeau de titre. L'image de fond se met dans /public (ex. /pasta.jpg).
 * Sans image, un dégradé olive sert de repli propre.
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
        "relative flex min-h-[42vh] items-center justify-center px-5 py-20 text-center",
        className,
      )}
      style={
        image
          ? {
              backgroundImage: `linear-gradient(0deg, rgba(45,55,40,.62), rgba(45,55,40,.42)), url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : { backgroundColor: "var(--color-olive)" }
      }
    >
      <div className="max-w-2xl">
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
