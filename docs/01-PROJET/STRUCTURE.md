# Structure du projet — Parent IA

```
parent-ia/
│
├── app/                          ← Pages et layout (App Router)
│   ├── layout.tsx                ← Layout global (Nav + Footer + meta)
│   ├── page.tsx                  ← Accueil (/) — hero + pilliers + articles
│   ├── globals.css               ← Styles globaux + utilitaires
│   ├── favicon.ico
│   │
│   ├── blog/
│   │   ├── page.tsx              ← Liste articles (/blog)
│   │   └── [slug]/
│   │       └── page.tsx          ← Article individuel (/blog/mon-article)
│   │
│   └── a-propos/
│       └── page.tsx              ← À propos (/a-propos)
│
├── components/                   ← Composants React réutilisables
│   ├── Navigation.tsx            ← Nav sticky + lien actif
│   ├── ArticleCard.tsx           ← Carte article (méta + résumé)
│   └── Footer.tsx                ← Footer + tagline
│
├── lib/                          ← Utilitaires et logique métier
│   ├── articles.ts               ← getAllArticles() + getArticleBySlug()
│   └── (autres: dates, formats, etc.)
│
├── types/                        ← Types TypeScript
│   └── article.ts                ← ArticleFrontmatter + Article interface
│
├── content/                      ← Contenu statique
│   └── articles/
│       ├── le-tri-magique-classer-comme-une-ia.mdx
│       ├── mon-article.mdx
│       └── ...
│
├── public/                       ← Assets statiques
│   ├── images/
│   └── (favicons, etc.)
│
├── tailwind.config.ts            ← Config Tailwind (palette + plugins)
├── next.config.mjs               ← Config Next.js (MDX, images, etc.)
├── tsconfig.json                 ← Config TypeScript
├── package.json                  ← Dépendances NPM
└── .gitignore
```

---

## 📁 Où mettre quoi

### Ajouter un article
```
content/articles/mon-slug.mdx
```

Avec frontmatter :
```yaml
---
titre: "Mon activité"
date: "2026-04-29"
age_cible: "6-9 ans"
duree: "30 minutes"
materiel:
  - "Objet 1"
  - "Objet 2"
resume: "Résumé court"
retour_enfants: "Qu'ils ont dit/ressenti"
tags:
  - "concept1"
  - "concept2"
---

# Contenu MDX ici...
```

L'article s'affiche automatiquement partout. ✨

### Ajouter une image
```
public/images/mon-image.png
```

Puis dans l'article MDX :
```markdown
![Alt text](/images/mon-image.png)
```

### Ajouter un composant
```
components/MonComposant.tsx
```

Puis dans un article :
```mdx
import MonComposant from '@/components/MonComposant'

<MonComposant />
```

---

## 🔄 Flux de développement

1. **Créer/modifier** un fichier
2. **Tester local** : `npm run dev` → http://localhost:3000
3. **Vérifier** : Nav, routing, styling
4. **Commit** : `git add . && git commit -m "message"`
5. **Push** : Vercel auto-déploie
6. **Vérifier public** : Domaine Vercel

---

## 📊 Fichiers clés

| Fichier | Rôle | À modifier quand ? |
|---|---|---|
| `app/layout.tsx` | Meta, styles globaux | SEO, fonts, structure HTML |
| `app/page.tsx` | Accueil | Changer hero, pilliers, nb articles |
| `components/Navigation.tsx` | Menu | Ajouter routes, changer actif |
| `content/articles/*` | Articles | Publier contenu nouveau |
| `lib/articles.ts` | Logique articles | Ajouter tri, filtres |
| `tailwind.config.ts` | Palette + plugins | Couleurs, typo, composants |

---

## 🚀 Commandes utiles

```bash
# Développement local
npm run dev

# Build de prod
npm run build

# Lancer build local
npm run start

# Vérifier erreurs TypeScript
npm run type-check

# Formatter code (optionnel)
npm run format
```

