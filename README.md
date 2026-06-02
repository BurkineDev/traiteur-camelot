# Camelot — site Next.js (refonte)

Refonte propre du site `traiteurcamelot.com` (chef privé & traiteur,
Mont-Tremblant), en remplacement de la version Hostinger/Zyro.

**Stack** : Next.js 15 (App Router, **SSG**) · TypeScript strict · Tailwind v4 ·
police **Poiret One** (next/font, auto-hébergée) · formulaires via route handler
+ **Resend** · anti-spam **Cloudflare Turnstile** + honeypot. Déploiement Vercel.

---

## Démarrage

```bash
npm install
cp .env.example .env.local   # puis remplir les clés
npm run dev                  # http://localhost:3000
```

Le formulaire fonctionne en local **sans** clé (l'email est juste loggé dans la
console, Turnstile n'est pas exigé). Renseigne les clés pour l'envoi réel.

```bash
npm run build && npm start   # build de production
npm run typecheck            # vérif TypeScript
```

## Variables d'environnement

| Variable | Rôle |
|---|---|
| `RESEND_API_KEY` | Clé API Resend (envoi des courriels) |
| `CONTACT_TO_EMAIL` | Adresse qui reçoit les demandes |
| `CONTACT_FROM_EMAIL` | Expéditeur vérifié dans Resend |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Clé publique Turnstile (widget) |
| `TURNSTILE_SECRET_KEY` | Clé secrète Turnstile (vérif serveur) |
| `NEXT_PUBLIC_SITE_URL` | URL canonique sans `/` final |

Sur Vercel : ajoute ces variables dans *Project → Settings → Environment Variables*.

## Anti-spam (la raison de la refonte)

L'ancien site exposait `info@…` en clair → scrapé par les bots. Ici :

1. l'email n'apparaît qu'au runtime côté client (`ObfuscatedEmail`) ;
2. tout passe par un **formulaire** → `/api/contact` ;
3. **honeypot** (champ caché) + **Turnstile** (vérifié côté serveur) filtrent les bots ;
4. envoi via Resend, avec `reply-To` = l'adresse du visiteur.

## Contenu à compléter

- Images : voir `public/IMAGES.md`.
- Logo : remplacer le wordmark dans `src/components/site-header.tsx` (TODO).
- Réseaux sociaux : `socials` dans `src/lib/site-config.ts` (FB / IG).
- NAP / géo : `src/lib/site-config.ts` — **doit rester identique à la fiche Google**.

---

## ✅ Checklist SEO — migration sans perdre de positions

Le framework ne change rien au ranking : Google indexe des **URLs + du contenu**.
Ce qui casse une migration, c'est l'exécution. À respecter :

- [ ] **Même domaine** `traiteurcamelot.com`.
- [ ] **Mêmes URLs** : `/`, `/nos-services` (+ ancres `#chef-a-domicile`,
      `#cocktail-dinatoire`, `#traiteur-evenements`, `#mariage`), `/temoignage`,
      `/nous-joindre`. Toute URL changée → **redirection 301** ancien→nouveau
      (dans `next.config.ts` via `redirects()`).
- [ ] **Titles + meta** repris/améliorés (déjà fait par page).
- [ ] **SSG** (déjà le cas) — pas de SPA client-only.
- [ ] **Aucun `noindex`** en prod (vérifier l'en-tête + `robots.ts`).
- [ ] **JSON-LD LocalBusiness/Caterer** en place (`src/lib/schema.ts`) — c'était
      absent de l'ancien site, c'est le principal gain local.
- [ ] **NAP identique** à la fiche Google Business Profile.
- [ ] Mise en ligne **sans coupure** (bascule DNS, pas de site hors ligne).
- [ ] **Search Console** : resoumettre `/sitemap.xml` après le déploiement, puis
      surveiller la couverture 2–4 semaines.

### Ta « carte Google » ≠ ce site
La fiche **Google Business Profile** (Maps / local pack) est une entité séparée
qui ramène l'essentiel du trafic local. La refonte n'y touche pas tant que le
domaine, l'URL du site dans la fiche et la disponibilité restent stables.
**Ne jamais supprimer/recréer la fiche.**

### Exemple de redirection (si une URL change)
```ts
// next.config.ts
async redirects() {
  return [
    { source: "/ancienne-url", destination: "/nos-services", permanent: true },
  ];
}
```

## Notes typo
Poiret One n'existe qu'en **graisse 400**. La hiérarchie se joue donc à la taille
et au letter-spacing. Pour un corps de texte plus lisible, tu peux ajouter une
police secondaire dans `src/app/layout.tsx` et changer `--font-display` →
police body dans `globals.css` (en gardant Poiret One pour les titres et le logo).
