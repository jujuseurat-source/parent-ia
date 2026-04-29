# Format des articles — Frontmatter MDX

Chaque article doit commencer par ce frontmatter YAML.

---

## Template complet

```yaml
---
titre: "Titre court et descriptif"
date: "2026-04-29"
age_cible: "6-9 ans"
duree: "30 minutes"
materiel:
  - "Objet 1"
  - "Objet 2"
  - "Objet 3"
resume: "Un résumé court (1-2 phrases) pour la carte article"
retour_enfants: "Bref résumé : qu'ont dit/ressenti les enfants"
tags:
  - "concept1"
  - "concept2"
---

# Votre article MDX commence ici

Contenu...
```

---

## 📝 Détails de chaque champ

### `titre`
- Court et descriptif
- Commencer par un verbe ou une action quand possible
- Pas de ponctuation à la fin

**Exemples :**
- ✅ "Trier comme une IA"
- ✅ "Classer les jetons par couleur"
- ❌ "Le concept de classification." (point inutile)

### `date`
- Format ISO 8601 : `YYYY-MM-DD`
- Date de publication
- ✅ `2026-04-29`

### `age_cible`
- Format : `"X-Y ans"` ou `"X ans+"`
- Valeurs suggérées : 4-6 ans, 6-8 ans, 6-9 ans, 8+

**Exemples :**
- `"4-6 ans"`
- `"6-9 ans"`
- `"8 ans+"`

### `duree`
- Temps approximatif pour faire l'activité
- Format libre : `"20 minutes"`, `"1h"`, `"30-45 min"`

### `materiel`
- Liste d'objets nécessaires pour l'activité
- Objets du quotidien, rien de spécialisé
- Chaque item sur sa ligne avec `-`

**Exemple :**
```yaml
materiel:
  - "Jetons de différentes couleurs"
  - "Un table"
  - "Les enfants (obligatoire 😉)"
```

### `resume`
- 1-2 phrases max pour la carte article
- Donne envie de lire
- Visible sur `/blog` et accueil

**Exemple :**
```
Romane trie les jetons par couleur. 
C'est une première leçon de classification — 
comment le cerveau (et l'IA) reconnaît les patterns.
```

### `retour_enfants`
- Bref résumé des réactions
- Ce qu'ils ont dit, ressenti, appris
- Visible quand on clique sur la carte

**Exemple :**
```
Romane a compris la logique immédiatement. 
Meryl a invité du chaos, mais en posant de bonnes questions.
```

### `tags`
- Liste de concepts IA / compétences
- Pour futur filtrage
- Minuscule, tiret si plusieurs mots
- Max 3-5 tags

**Tags suggérés :**
- `classification`
- `pattern-recognition`
- `logique`
- `mémoire`
- `apprentissage`
- `langage-naturel`
- `créativité`
- `prédiction`
- `reconnaissance-visuelle`

---

## ✅ Exemple complet

```yaml
---
titre: "Trier comme une IA — les jetons magiques"
date: "2026-04-29"
age_cible: "6-9 ans"
duree: "20 minutes"
materiel:
  - "Jetons de différentes couleurs"
  - "Une table"
  - "Les enfants"
resume: "Romane découvre que son cerveau trie les choses automatiquement — 
exactement comme une IA apprendrait à catégoriser. 
Une activité simple pour comprendre la classification."
retour_enfants: "Romane a immédiatement compris la logique. 
Meryl a ajouté du chaos (mais pertinent). 
Les deux en ont parlé pendant des heures."
tags:
  - "classification"
  - "pattern-recognition"
  - "logique"
---

# Votre article commence ici...
```

---

## 🔍 Vérification

**Avant de publier, vérifier :**
- [ ] Tous les champs sont remplis
- [ ] `date` est au format `YYYY-MM-DD`
- [ ] `materiel` a au moins 2 items
- [ ] `resume` est lisible et accrocheur
- [ ] `tags` sont pertinents (1-5)
- [ ] Pas de caractères spéciaux dans les champs

---

## 📂 Où sauver le fichier

```
content/articles/mon-slug.mdx
```

**Slug** = nom du fichier (lowercase, tirets, pas d'espaces)

Exemples :
- `le-tri-magique-jetons.mdx`
- `comprendre-patterns-meryl.mdx`
- `romane-et-la-memoire.mdx`

