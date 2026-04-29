# SYNTHÈSE — Projet Parent IA
> Généré le 29/04/2026 · Stack : Next.js 14 · Tailwind CSS · TypeScript · MDX

---

## 1. Vision du projet

**Nom :** Parent IA  
**Tagline :** *Grandir avec l'IA*  
**Objectif :** Blog où un père documente ses expériences pour initier ses enfants à l'intelligence artificielle de manière ludique, concrète, et sans écran.  
**Déploiement prévu :** Vercel

---

## 2. Stack technique

| Élément | Technologie |
|---|---|
| Framework | Next.js 14 (App Router) |
| Style | Tailwind CSS 3.4 + @tailwindcss/typography |
| Langage | TypeScript |
| Articles | MDX via `next-mdx-remote` + `gray-matter` |
| Police | Geist Sans (locale) |
| Node | v24.15.0 / npm 11.12.1 |

---

## 3. Structure du projet

```
parent-ia/
├── app/
│   ├── layout.tsx               ← Layout global (Nav + Footer + SEO)
│   ├── page.tsx                 ← Accueil : hero, 3 pilliers, derniers articles
│   ├── globals.css              ← Styles de base + utilitaire .prose-parent
│   ├── blog/
│   │   ├── page.tsx             ← Liste de tous les articles
│   │   └── [slug]/
│   │       └── page.tsx         ← Article individuel (MDX rendu côté serveur)
│   └── a-propos/
│       └── page.tsx             ← Page "Notre histoire"
├── components/
│   ├── Navigation.tsx           ← Sticky, lien actif en terracotta
│   ├── ArticleCard.tsx          ← Carte article (tags, méta, résumé)
│   └── Footer.tsx               ← Tagline + copyright
├── lib/
│   └── articles.ts              ← getAllArticles() + getArticleBySlug() + formatDate()
├── types/
│   └── article.ts               ← Interface ArticleFrontmatter + Article
├── content/
│   └── articles/
│       └── le-tri-magique-classer-comme-une-ia.mdx   ← Article exemple complet
├── tailwind.config.ts           ← Palette personnalisée + plugin typography
├── next.config.mjs              ← pageExtensions MDX activées
└── package.json
```

---

## 4. Palette de couleurs

| Nom | Usage | Valeur principale |
|---|---|---|
| `beige` | Fond global | `#F5EFE0` |
| `sauge` | Accents doux, badges | `#7A9E7A` |
| `terracotta` | CTA, liens actifs, tags | `#B86A3E` |
| `brun` | Texte principal | `#3D3028` |
| `brun-light` | Texte secondaire | `#8B7B6B` |
| `brun-lighter` | Texte discret | `#B5A898` |

Design : **mobile-first**, chaleureux, aucune photo d'écran.

---

## 5. Système d'articles (MDX)

### Frontmatter obligatoire

```yaml
---
titre: "Titre de l'activité"
date: "YYYY-MM-DD"
age_cible: "6-9 ans"
duree: "40 minutes"
materiel:
  - "Objet 1"
  - "Objet 2"
resume: "Court résumé de l'activité"
retour_enfants: "Ce qu'ils ont dit / ressenti"
tags:
  - "classification"
  - "logique"
---
```

### Ajouter un article

1. Créer `content/articles/mon-slug.mdx`
2. Remplir le frontmatter ci-dessus
3. Écrire le contenu en Markdown/MDX
4. ✅ L'article apparaît automatiquement sur l'accueil et dans `/blog`

---

## 6. Pages et routes

| Route | Fichier | Description |
|---|---|---|
| `/` | `app/page.tsx` | Hero + 3 pilliers + 3 derniers articles |
| `/blog` | `app/blog/page.tsx` | Liste complète des articles |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Article individuel avec MDX |
| `/a-propos` | `app/a-propos/page.tsx` | Histoire du projet |

---

## 7. Composants clés

### `getAllArticles()` — `lib/articles.ts`
Lit tous les `.mdx` dans `content/articles/`, parse le frontmatter, trie par date décroissante.

### `ArticleCard` — `components/ArticleCard.tsx`
Affiche : titre, date, âge cible, durée, résumé, tags en pastilles terracotta.

### `Navigation` — `components/Navigation.tsx`
- Sticky en haut de page
- Lien actif mis en valeur (terracotta + souligné)
- Liens : Accueil / Blog / À propos

---

## 8. Article exemple

**Fichier :** `content/articles/le-tri-magique-classer-comme-une-ia.mdx`  
**Concept IA expliqué :** Classification / catégorisation  
**Activité :** Trier des objets du quotidien selon différents critères  
**Structure :** Introduction → Le concept → L'activité pas à pas → Ce que les enfants en retiennent → Ce que le parent retient

---

## 9. Commandes essentielles

```bash
# Lancer en local
npx next dev
# → http://localhost:3000

# Build de production
npx next build

# Démarrer en production
npx next start
```

---

## 10. Prochaines étapes suggérées

- [ ] Corriger la tagline de la page d'accueil (voir discussion en cours)
- [ ] Écrire 2-3 articles supplémentaires
- [ ] Ajouter un système de filtrage par tags sur `/blog`
- [ ] Configurer le déploiement Vercel
- [ ] Ajouter les métadonnées Open Graph pour le partage social
- [ ] Créer une page de contact / newsletter

---

## 11. Points de vigilance

- `next-mdx-remote` et `gray-matter` sont dans `package.json` mais ont été installés manuellement — vérifier qu'ils sont bien dans `dependencies` (pas `extraneous`)
- Le build passe ✅ (vérifié lors de la création)
- `@tailwindcss/typography` requis pour le rendu des articles MDX (classes `prose`)
