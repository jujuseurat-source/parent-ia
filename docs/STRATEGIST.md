# STRATEGIST — Décisions stratégiques Parent IA

**Mis à jour :** 29/04/2026

Historique des décisions importantes, principes et choix architecturaux.

---

## 🎯 Principes directeurs

### 1. **Authentique avant tout**
- Jamais fictif : chaque histoire est testée avec Romane et Meryl
- Les ratés comptent autant que les succès
- Ton de père, pas de prof

### 2. **Pédagogie sans écran**
- Chaque activité = matériel physique, manipulation réelle
- L'IA expliquée à travers des gestes, pas des diapositives
- Les enfants apprennent en *faisant*

### 3. **Accessible à tous les parents**
- Mobile-first (parents consultent sur téléphone)
- Pas de jargon IA/tech
- "Si mon enfant peut le faire, vous aussi"

### 4. **Design chaleureux, pas corporate**
- Palette de couleurs naturelle (terracotta, sauge, beige)
- Pas de bleu tech, pas de gradients agressifs
- Emojis oui, mais sobres

---

## 📊 Décisions d'architecture

### Stack : Next.js 14 + Tailwind + MDX
**Pourquoi ?**
- **Next.js 14 App Router** : SSR facile, déploiement simple, SEO natif
- **Tailwind** : Style rapide, mobile-first, pas d'overhead CSS
- **MDX** : Articles statiques, versionnable en git, facile à éditer
- **TypeScript** : Maintenabilité à long terme

**Pas de :** CMS headless (trop lourd), React-admin (overkill), DB (pas besoin)

---

## 📝 Choix éditoriaux

### Structure d'un article = Format immuable

```
1. Accroche in medias res
2. Concept IA expliqué simplement
3. L'activité pas à pas
4. Ce qui s'est vraiment passé
5. Question ouverte finale
```

**Raison :** Cohérence et prévisibilité pour le lecteur.

### Frontmatter MDX = Source de vérité

```yaml
---
titre: ""
date: "YYYY-MM-DD"
age_cible: "6-9 ans"
duree: "40 minutes"
materiel: []
resume: ""
retour_enfants: ""
tags: []
---
```

**Raison :** Métadonnées + affichage automatique (cartes, listes, filtres futurs).

### Anti-patterns IA (méthode Benoît Raphaël)

**Bannir :**
- "Dans un monde qui..."
- "Révolutionnaire", "game-changer"
- Listes à bullets compulsives
- Conclusions qui résument

**Garder :**
- Prose fluide
- Exemples concrets
- Ton personnel

---

## 🎨 Design system

### Palette finaliste

| Couleur | Hex | Usage | Raison |
|---|---|---|---|
| Beige | `#F5EFE0` | Fond | Chaleureux, reposant |
| Sauge | `#7A9E7A` | Accents | Nature, croissance |
| Terracotta | `#B86A3E` | CTA/liens | Énergique, attention |
| Brun | `#3D3028` | Texte | Lisible, chaleureux |

**Pas de bleu** : Associé au tech/corporate. Ici c'est plus "humain".

---

## 🚀 Stratégie de lancement

### MVP public = accueil + 3 articles
- Déployer quand on a 3 articles solides
- Pas de "coming soon"
- Valider auprès de 5 parents en test beta d'abord

### Puis : 1 article/2 semaines
- Pas de rush
- Qualité > quantité
- Feedback des lecteurs = guide pour les sujets futurs

---

## 📈 Métriques de succès

**Court terme (mois 1):**
- 100+ visiteurs/mois
- 50+ lecteurs par article
- Pas de bounce excessif

**Moyen terme (mois 3):**
- Parents partagent les articles
- Commentaires constructifs
- 1-2 articles/mois soutenu

**Long terme (mois 6+):**
- Communauté de parents actifs
- Ressources téléchargées régulièrement
- Peut-être une formation ou produit associé

---

## 🤔 Questions pas encore tranchées

- [ ] Monétisation ? (Patreon, ads, gratuit ?)
- [ ] Internationalisation ? (EN + FR ?)
- [ ] Partenariats ? (autres parents, éducateurs ?)
- [ ] Podcast ? (audio des articles ?)

