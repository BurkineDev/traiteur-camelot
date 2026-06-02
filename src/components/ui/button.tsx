import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "cream" | "outline" | "olive";
type Size = "default" | "lg";

const base =
  "inline-flex items-center justify-center rounded-full text-lg tracking-wide " +
  "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none " +
  "disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-olive-dark/85 text-cream hover:bg-olive-deep",
  cream: "bg-parchment text-ink hover:bg-gold-soft",
  outline:
    "border border-cream/70 text-cream hover:bg-cream/10 backdrop-blur-sm",
  olive: "border border-olive text-olive-dark hover:bg-olive/10",
};

const sizes: Record<Size, string> = {
  default: "px-7 py-3",
  lg: "px-10 py-4 text-xl",
};

type CommonProps = { variant?: Variant; size?: Size; className?: string };

export function Button({
  variant = "primary",
  size = "default",
  className,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  size = "default",
  className,
  href,
  ...props
}: CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className"> & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
