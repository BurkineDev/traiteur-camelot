import { NextRequest, NextResponse } from "next/server";

/**
 * Le français vit à la racine (/  /nos-services  /nous-joindre  /temoignage …).
 * Ce middleware réécrit ces URL en /fr/… en interne pour que le segment [lang]
 * existant les rende sans redirection côté navigateur.
 * Les redirections /fr → / et /fr/* → /* dans next.config.ts gèrent les URLs
 * temporairement indexées sous /fr — elles s'exécutent AVANT ce middleware et
 * ne créent donc aucune boucle.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /en/* et /api/* passent sans transformation.
  if (pathname.startsWith("/en") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Réécriture interne : /  →  /fr  ;  /nos-services  →  /fr/nos-services …
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/fr" : `/fr${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Exclut _next, api et les fichiers avec extension (images, fonts, etc.)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
