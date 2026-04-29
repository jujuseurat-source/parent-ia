# Stack technique — Parent IA

---

## Frontend

| Élément | Tech | Version | Raison |
|---|---|---|---|
| **Framework** | Next.js | 14 | App Router, SSR natif, déploiement Vercel facile |
| **Style** | Tailwind CSS | 3.4 | Utility-first, mobile-first, pas d'overhead |
| **Langage** | TypeScript | Latest | Maintenabilité, autocomplétion, erreurs détectées tôt |
| **Articles** | MDX | next-mdx-remote | Format lisible, versionnable, pas de CMS |
| **Police** | Geist Sans | Local | Moderne, inclusive, chargement rapide |

---

## Content

| Élément | Format | Stockage |
|---|---|---|
| **Articles** | MDX + Frontmatter YAML | `content/articles/*.mdx` (Git) |
| **Métadonnées** | YAML frontmatter | Parsing avec `gray-matter` |
| **Images** | PNG/JPG/WebP | `public/images/` (static) |

---

## Build & Deploy

| Étape | Outil | Détails |
|---|---|---|
| **Build** | Next.js | `npm run build` → optimisé statique/SSR mixte |
| **Deploy** | Vercel | Auto-deploy sur push Git |
| **Monitoring** | Vercel Analytics | Performance + errors |
| **CDN** | Vercel Edge Network | Images optimisées auto |

---

## Dépendances clés

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.x",
    "tailwindcss": "^3.4",
    "next-mdx-remote": "^5.x",    // Parser MDX côté serveur
    "gray-matter": "^4.x"          // Parser frontmatter YAML
  }
}
```

---

## Performance targets

| Métrique | Target | Notes |
|---|---|---|
| **Lighthouse Performance** | 90+ | Images optimisées, fonts chargées bien |
| **LCP (Largest Contentful Paint)** | < 2.5s | Critique pour mobile |
| **FID (First Input Delay)** | < 100ms | Interactivité rapide |
| **CLS (Cumulative Layout Shift)** | < 0.1 | Pas de décalages de layout |

---

## Hébergement & domaine

**Provider :** Vercel  
**Domaine :** À configurer (vercel.app initial, puis custom)  
**SSL :** Automatique avec Vercel  
**Email :** À ajouter (pour newsletter future)

---

## Sécurité & Privacy

- ✅ HTTPS natif
- ✅ No cookies (sauf analytics)
- ✅ No ads
- ✅ No tracking agressif (Vercel Analytics = privacy-first)
- ✅ Pas de données personnelles stockées

---

## Scalabilité future

Si le projet grandit :
- **Newsletter** : Mailchimp ou Substack
- **Commentaires** : Giscus (GitHub-backed) ou Disqus
- **Database** : PostgreSQL si besoin (mais pas prévu MVP)
- **Analytics avancés** : Plausible ou Fathom

