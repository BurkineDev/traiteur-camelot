"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site-config";

/**
 * Rend l'adresse courriel côté client uniquement : elle n'apparaît donc PAS
 * en clair dans le HTML statique servi aux robots qui scrapent les mailto.
 * (C'est la source du spam sur l'ancien site.)
 */
export function ObfuscatedEmail({ className }: { className?: string }) {
  const [addr, setAddr] = useState<string | null>(null);

  useEffect(() => {
    setAddr(`${site.email.user}@${site.email.domain}`);
  }, []);

  if (!addr) {
    return <span className={className}>{site.email.user}&#64;…</span>;
  }
  return (
    <a className={className} href={`mailto:${addr}`}>
      {addr}
    </a>
  );
}
