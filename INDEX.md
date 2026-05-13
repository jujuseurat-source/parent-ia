# Index — parent-ia (repo FR)

**Mis à jour :** 13/05/2026  
**Repo GitHub :** `github.com/jujuseurat-source/parent-ia`  
**Blog :** `parent-ia.fr`

---

## Ce dossier

C'est le repo Next.js du blog français. Il se déploie automatiquement sur Vercel à chaque `git push`.

---

## Structure du code

```
parent-ia/
├── CLAUDE.md              ← Contexte complet pour Claude (lire en premier)
├── INDEX.md               ← Ce fichier
├── app/                   ← Pages (App Router Next.js 14)
│   ├── page.tsx           ← Accueil
│   ├── blog/page.tsx      ← Liste des articles
│   ├── blog/[slug]/       ← Article individuel (MDX)
│   └── a-propos/          ← Page à propos
├── components/            ← Composants réutilisables (Nav, Footer, ArticleCard)
├── content/articles/      ← Les articles MDX publiés (source de vérité)
├── lib/articles.ts        ← getAllArticles() + getArticleBySlug()
├── types/article.ts       ← Types TypeScript
└── public/                ← Assets statiques
```

---

## Commandes essentielles

```bash
# Développement local
cd "C:\Users\julie\Desktop\Parent IA\parent-ia"
npm run dev
# → http://localhost:3000

# Publier un article
git add . && git commit -m "Article : nom de l'article" && git push
# Vercel redéploie en 1-2 minutes
```

---

## Documentation complète

Toute la documentation stratégique et éditoriale est dans :  
`C:\Users\julie\Desktop\Parent IA\` (dossiers 01 à 05)

Référence rapide :
- Règles d'écriture → `02-CONTENU/REGLES-ECRITURE.md`
- Format MDX → `02-CONTENU/FRONTMATTER.md`
- Plan actuel → `04-OPERATIONS/PROCHAINE-SESSION.md`
