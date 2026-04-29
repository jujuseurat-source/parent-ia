# CLAUDE.md — Contexte Parent IA pour les prochaines sessions

**Mis à jour :** 29/04/2026  
**Statut global :** MVP fonctionnel ✅ — Phase d'enrichissement et déploiement

---

## 🎯 Le projet en 30 secondes

**Parent IA** est un blog Next.js où Julien documente ses expériences pour apprendre l'IA à ses enfants (Romane 7 ans, Meryl 4 ans) de façon ludique et sans écran.

**Tagline :** "Grandir avec l'IA"  
**Stack :** Next.js 14 + Tailwind + TypeScript + MDX  
**Dossier projet :** `C:\Users\julie\parent-ia`

---

## ✅ Ce qui est fait

### Infrastructure
- [x] Projet Next.js 14 initialisé avec App Router
- [x] Tailwind CSS 3.4 configuré (palette personnalisée)
- [x] Structure de dossiers en place (`app/`, `components/`, `lib/`, `content/articles/`)
- [x] MDX via `next-mdx-remote` + `gray-matter` fonctionnel
- [x] Build passe, pas d'erreurs TypeScript

### Pages créées
- [x] **Accueil** (`/`) : Hero + 3 pilliers + 3 derniers articles
- [x] **Blog** (`/blog`) : Liste de tous les articles avec cartes
- [x] **Article individuel** (`/blog/[slug]`) : Rendu MDX côté serveur
- [x] **À propos** (`/a-propos`) : Histoire du projet

### Design & UX
- [x] Navigation sticky avec lien actif (terracotta)
- [x] Footer avec tagline et copyright
- [x] Palette de couleurs chaudes (beige, sauge, terracotta, bruns)
- [x] Mobile-first responsive
- [x] ArticleCard réutilisable (titre, date, âge, durée, résumé, tags)

### Contenu & Système d'articles
- [x] Frontmatter MDX standardisé : titre, date, age_cible, duree, materiel[], resume, retour_enfants, tags
- [x] 1 article exemple complet : "le-tri-magique-classer-comme-une-ia.mdx"
- [x] Règles d'écriture clairement définies (ton Julien, anti-patterns IA, structure)
- [x] `getAllArticles()` et `getArticleBySlug()` fonctionnels dans `lib/articles.ts`

---

## ⚠️ Problèmes connus / TODO

- [ ] **Tagline page d'accueil** : À vérifier/corriger (discussion en cours)
- [ ] **Filtrage par tags** : `/blog` n'a pas de filtres (prévu pour plus tard)
- [ ] **Déploiement Vercel** : Pas encore configuré
- [ ] **Open Graph** : Métadonnées manquantes pour le partage social
- [ ] **Page contact/newsletter** : Pas prévue dans le MVP

---

## 📝 Règles d'écriture sacrées

### Le TON (Julien)
- Père qui raconte une vraie aventure, sans posture d'expert
- Anecdotes réelles avec Romane et Meryl — les **ratés comptent**
- Phrases courtes qui respirent, vocabulaire du quotidien
- Humour, autodérision bienvenus
- Zéro jargon académique

### Structure des articles
1. **Accroche in medias res** : Au milieu de l'action, une scène concrète
2. **Concept IA expliqué** : Simplement, sans jargon
3. **L'activité pas à pas** : Matériel, durée, déroulé exact
4. **Ce qui s'est vraiment passé** : Réactions des enfants, succès ET ratés
5. **Question ou observation ouverte** : Jamais une morale appuyée

### Interdits absolus
❌ "Ce que j'en retiens" en fin (tue le texte)  
❌ Conclusions qui résument  
❌ Introductions qui annoncent  
❌ Formules IA-cringe : "Dans un monde qui...", "révolutionnaire", "game-changer"  
❌ Tirets cadratins (—), listes à bullets compulsives, emphase excessive  
❌ Vocabulaire corporate : optimiser, déployer, framework, levier  
❌ Passif objectivant : "Il a été démontré"  
❌ Fausse intimité : "Vous vous demandez peut-être..."

---

## 🏗️ Architecture du projet

```
parent-ia/
├── app/
│   ├── layout.tsx               ← Nav + Footer + SEO
│   ├── page.tsx                 ← Accueil
│   ├── globals.css              ← Styles + classe .prose-parent
│   ├── blog/page.tsx            ← Liste articles
│   ├── blog/[slug]/page.tsx     ← Article MDX
│   └── a-propos/page.tsx        ← À propos
├── components/
│   ├── Navigation.tsx
│   ├── ArticleCard.tsx
│   └── Footer.tsx
├── lib/
│   └── articles.ts              ← getAllArticles() + getArticleBySlug()
├── types/
│   └── article.ts               ← ArticleFrontmatter + Article
├── content/articles/
│   └── le-tri-magique-classer-comme-une-ia.mdx
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## 🎨 Palette de couleurs

| Nom | Valeur | Usage |
|---|---|---|
| **beige** | `#F5EFE0` | Fond global |
| **sauge** | `#7A9E7A` | Accents doux, badges |
| **terracotta** | `#B86A3E` | CTA, liens actifs, tags |
| **brun** | `#3D3028` | Texte principal |
| **brun-light** | `#8B7B6B` | Texte secondaire |
| **brun-lighter** | `#B5A898` | Texte discret |

---

## 🚀 Commandes essentielles

```bash
# Développement
cd C:\Users\julie\parent-ia
npm run dev
# → http://localhost:3000

# Build
npm run build
npm start

# Ajouter un article
# → Créer `content/articles/mon-slug.mdx` avec frontmatter
# → Apparaît automatiquement partout
```

---

## 🤝 Comment travailler avec Claude

### Demandes typiques
```
"Écris un article complet sur [activité testée]. Romane a fait X, Meryl a dit Y."
"Trouve-moi 5 idées d'activités pour expliquer [concept IA] à une enfant de 6 ans, sans écran."
"Voici mon brouillon : [texte]. Améliore-le en gardant mon ton."
"Génère le frontmatter MDX pour [sujet], durée 30 min, 6-9 ans."
```

### Ce que Claude fait TOUJOURS
✅ Écrire articles MDX complets, prêts à copier-coller  
✅ Proposer des idées d'activités (concept → sans écran)  
✅ Améliorer textes existants (respecter le ton)  
✅ Générer frontmatter MDX  
✅ Brainstormer angles pédagogiques

### Ce que Claude ne fait JAMAIS
❌ Inventer des prénoms (c'est Romane et Meryl)  
❌ Finir par une leçon morale en gras  
❌ Ton de manuel pédagogique  
❌ Me féliciter avant de répondre (direct!)

---

## 📊 État actuel (snapshots)

**Articles écrits :** 1 (le-tri-magique)  
**Articles en brouillon :** 0  
**Concepts explorés :** Classification/catégorisation  
**Enfants testés :** Romane et Meryl (vraies reactions)  

**Prochains articles suggérés :**
- Mémoire / apprentissage
- Langage naturel / compréhension
- Reconnaissance visuelle / patterns
- Prédiction et algorithmes
- Créativité & génération

