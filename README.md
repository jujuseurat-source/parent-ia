# Parent IA — Blog

Un blog où un père documente ses expériences pour apprendre l'IA à ses enfants de manière ludique et sans écran.

**Tagline :** Grandir avec l'IA

---

## 📖 Documentation

**Lire d'abord :** [`CLAUDE.md`](./CLAUDE.md) — contexte complet du projet  
**Navigation :** [`INDEX.md`](./INDEX.md) — guide de la documentation  
**Roadmap :** [`ROADMAP.md`](./ROADMAP.md) — plan d'action

Toute la documentation se trouve dans le dossier `docs/` :
- `docs/01-PROJET/` — Vision, stack, structure
- `docs/02-CONTENU/` — Règles d'écriture, concepts IA, backlog
- `docs/03-DESIGN/` — Palette, composants, UX
- `docs/04-OPERATIONS/` — Lancement, déploiement, phases

---

## 🚀 Démarrage rapide

```bash
# Installer dépendances
npm install

# Développement local
npm run dev
# → http://localhost:3000

# Build de production
npm run build

# Lancer en production
npm start
```

---

## 📁 Structure du projet

```
parent-ia/
├── app/                  ← Pages React (App Router)
├── components/           ← Composants réutilisables
├── lib/                  ← Utilitaires
├── types/                ← Types TypeScript
├── content/articles/     ← Articles MDX (le contenu!)
├── public/               ← Assets statiques
├── docs/                 ← Documentation complète
├── CLAUDE.md             ← Contexte pour Claude
├── ROADMAP.md            ← Plan d'action
└── INDEX.md              ← Navigation documentation
```

---

## 📝 Ajouter un article

1. Créer `content/articles/mon-slug.mdx`
2. Ajouter le frontmatter YAML (voir `docs/02-CONTENU/FRONTMATTER.md`)
3. Écrire le contenu (voir `docs/02-CONTENU/REGLES-ECRITURE.md`)
4. Tester local : `npm run dev`
5. Push et déployer

---

## 🎨 Stack

- **Framework :** Next.js 14 (App Router)
- **Styles :** Tailwind CSS 3.4
- **Langage :** TypeScript
- **Articles :** MDX + Gray Matter
- **Deploy :** Vercel

---

## 🔗 Liens utiles

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [MDX Docs](https://mdxjs.com)
- [Vercel Docs](https://vercel.com/docs)

---

**Mise à jour :** 29/04/2026
