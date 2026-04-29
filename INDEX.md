# Index documentation — Parent IA

Bienvenue dans le dossier du projet. Voici comment naviguer la documentation.

---

## 📚 Structure du dossier

```
parent-ia/
├── 📖 CLAUDE.md                ← Contexte pour Claude (lire d'abord!)
├── 📋 ROADMAP.md               ← Plan d'action court/moyen terme
├── 📌 INDEX.md                 ← Ce fichier
│
├── docs/                       ← Toute la documentation
│   ├── STRATEGIST.md           ← Décisions stratégiques
│   │
│   ├── 01-PROJET/              ← Infos sur le projet
│   │   ├── README.md           ← Vision du projet
│   │   ├── STACK.md            ← Stack technique
│   │   └── STRUCTURE.md        ← Structure du code
│   │
│   ├── 02-CONTENU/             ← Guide d'écriture
│   │   ├── REGLES-ECRITURE.md  ← Le ton, les anti-patterns
│   │   ├── FRONTMATTER.md      ← Format des articles MDX
│   │   ├── CONCEPTS-IA.md      ← Concepts à explorer
│   │   └── BACKLOG-ARTICLES.md ← Idées + brouillons
│   │
│   ├── 03-DESIGN/              ← Guide design
│   │   ├── PALETTE.md          ← Couleurs
│   │   ├── COMPONENTS.md       ← Composants React
│   │   └── UX-GUIDELINES.md    ← Principes design
│   │
│   └── 04-OPERATIONS/          ← Opérations
│       ├── PRE-LANCEMENT.md    ← Checklist avant public
│       ├── PHASE2.md           ← Après lancement
│       └── DEPLOIEMENT.md      ← Guide Vercel
│
├── app/                        ← Code React (App Router)
├── components/                 ← Composants réutilisables
├── lib/                        ← Utilitaires
├── types/                      ← Types TypeScript
├── content/articles/           ← Articles MDX
├── public/                     ← Assets statiques
└── package.json
```

---

## 🚀 Par où commencer ?

### Pour Claude (prochaines sessions)
1. **Lire** `CLAUDE.md` (contexte complet)
2. **Consulter** `ROADMAP.md` (où on en est)
3. **Vérifier** `docs/02-CONTENU/REGLES-ECRITURE.md` (avant écrire)

### Pour toi (Juju)
1. **Consulter** `ROADMAP.md` (ce qui vient)
2. **Lire** `docs/04-OPERATIONS/PRE-LANCEMENT.md` (avant lancer public)
3. **Vérifier** `docs/02-CONTENU/BACKLOG-ARTICLES.md` (idées articles)

### Pour développer
1. **Voir** `docs/01-PROJET/STRUCTURE.md` (organisation du code)
2. **Consulter** `docs/03-DESIGN/PALETTE.md` (couleurs)
3. **Lire** `docs/03-DESIGN/UX-GUIDELINES.md` (principes design)

---

## 📋 Document par document

| Document | Audience | Contenu |
|---|---|---|
| **CLAUDE.md** | Claude + Juju | Contexte complet, règles écriture, structure |
| **ROADMAP.md** | Juju + Claude | Plan d'action, priorités, calendrier |
| **STRATEGIST.md** | Tous | Décisions stratégiques, principes, rationale |
| **01-PROJET/README.md** | Tous | Vision du projet, objectif |
| **01-PROJET/STACK.md** | Dev | Tech utilisée, versions |
| **01-PROJET/STRUCTURE.md** | Dev | Arborescence code, où mettre quoi |
| **02-CONTENU/REGLES-ECRITURE.md** | Claude + Juju | Le ton, anti-patterns, structure articles |
| **02-CONTENU/FRONTMATTER.md** | Juju | Format des articles MDX |
| **02-CONTENU/CONCEPTS-IA.md** | Juju + Claude | Concepts à explorer, priorités |
| **02-CONTENU/BACKLOG-ARTICLES.md** | Juju | Idées, brouillons, statut |
| **03-DESIGN/PALETTE.md** | Dev + Design | Couleurs, utilisation |
| **03-DESIGN/COMPONENTS.md** | Dev | Composants React, props, exemples |
| **03-DESIGN/UX-GUIDELINES.md** | Dev + Design | Principes, accessibilité, interactions |
| **04-OPERATIONS/PRE-LANCEMENT.md** | Juju | Checklist avant public |
| **04-OPERATIONS/PHASE2.md** | Juju | Feuille de route après lancement |
| **04-OPERATIONS/DEPLOIEMENT.md** | Dev + Juju | Guide Vercel step-by-step |

---

## 💡 Workflow type

### Écrire un article
1. **Idée** : Vérifier dans `02-CONTENU/BACKLOG-ARTICLES.md`
2. **Tester** : Faire l'activité avec Romane/Meryl
3. **Rédiger** : Respecter `02-CONTENU/REGLES-ECRITURE.md`
4. **Format** : Utiliser template `02-CONTENU/FRONTMATTER.md`
5. **Publier** : Copier dans `content/articles/mon-slug.mdx`

### Ajouter une feature
1. **Vérifier** : `01-PROJET/STRUCTURE.md` (où mettre le code)
2. **Design** : Consulter `03-DESIGN/*` (couleurs, composants)
3. **Coder** : Suivre `03-DESIGN/UX-GUIDELINES.md`
4. **Tester** : `npm run dev`

### Lancer en public
1. **Checklist** : `04-OPERATIONS/PRE-LANCEMENT.md`
2. **Déployer** : Suivre `04-OPERATIONS/DEPLOIEMENT.md`
3. **Monitor** : Vérifier `04-OPERATIONS/PHASE2.md` (étapes suivantes)

---

## 📱 Pour les sessions Claude.ai

Quand tu crées un projet sur Claude.ai :

1. **Instructions du projet** : Coller `CLAUDE.md` complet
2. **Fichiers à uploader** :
   - `ROADMAP.md` (pour savoir où on en est)
   - `docs/02-CONTENU/REGLES-ECRITURE.md` (règles sacrées)
   - `docs/02-CONTENU/BACKLOG-ARTICLES.md` (idées articles)

---

## 🔄 Maintenance

Ce fichier INDEX.md doit être updaté si :
- Nouvelle section documentation
- Changement d'organisation
- Nouveau document créé

**Dernière mise à jour :** 29/04/2026

