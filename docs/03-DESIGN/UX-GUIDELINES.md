# UX Guidelines — Parent IA

Principes de design et d'expérience utilisateur.

---

## 🎯 Principes de design

### 1. Mobile-first
- Majorité des parents consultent sur téléphone
- Desktop doit être meilleur, pas un afterthought
- Texte lisible (16px min pour body)

### 2. Chaleureux, pas corporate
- Couleurs naturelles (beige, terracotta, sauge)
- Pas de dégradés criards
- Typographie humaine
- Espacement généreux

### 3. Clarté avant beauté
- Hiérarchie visuelle claire
- Contraste suffisant pour accessibilité (AA min)
- Pas de décorations inutiles
- CTA évidents

### 4. Léger, pas lourd
- Pas d'animations excessives
- Chargement rapide (pas d'images ultra-pesantes)
- Pas de popups agressives
- Défilement fluide

---

## 📐 Typographie

### Hierarchy

```
h1 : 32px | font-bold | brun
h2 : 24px | font-bold | brun
h3 : 20px | font-semibold | brun
p  : 16px | font-normal | brun
meta: 14px | font-normal | brun-light
```

### Line height
- Body : 1.6 (lisibilité)
- Headings : 1.3 (compacité)
- Lists : 1.8 (respiration)

### Max-width
- Content : 720px (lisibilité, pas trop long)
- Desktop full : 1200px

---

## 🎨 Espacement

```
Utiliser la progression : 4px, 8px, 16px, 24px, 32px, 48px, 64px

gap-2  : 8px
gap-3  : 12px
gap-4  : 16px
gap-6  : 24px
gap-8  : 32px
gap-12 : 48px
```

### Marges articles
- Top/bottom articles : 32px
- Entre paragraphes : 16px
- Entre sections : 24px

---

## 🔘 Boutons & CTA

### Style primaire (action)
```
bg-terracotta text-white px-6 py-3 rounded
hover: opacity-90
active: scale-98
```

### Style secondaire
```
bg-sauge text-white px-6 py-3 rounded
hover: opacity-90
```

### States
- **Default** : couleur normale
- **Hover** : opacity -10%, couleur slightly darker
- **Active** : scale-98
- **Disabled** : opacity-50, cursor-not-allowed

---

## 📱 Responsive Layout

### Accueil
```
Mobile  : 1 col
Tablet  : 2 col
Desktop : 3 col
```

### Blog listing
```
Mobile  : 1 col, full width
Tablet  : 2 col, gaps-4
Desktop : 3 col, gaps-6
```

### Article
```
Mobile  : max-w-full, padding-4
Tablet+ : max-w-2xl, padding-8, centered
```

---

## ♿ Accessibilité

### Minimum standards
- WCAG 2.1 AA
- Contraste : 4.5:1 pour texte
- Taille police : 16px min body
- Focus visible sur tous les éléments interactifs

### Checklist
- [ ] Images ont des alt texts descriptifs
- [ ] Couleur n'est pas le seul moyen de communiquer
- [ ] Formulaires ont labels explicites
- [ ] Navigation logique (keyboard accessible)
- [ ] Pas de contenu clignotant (> 3x/sec)

---

## 🎬 Interactions

### Links
```tsx
<a className="text-terracotta hover:text-sauge hover:underline transition">
  Link text
</a>
```

### Transitions
```
transition-all duration-300 ease-in-out
```

Utiliser pour :
- Hover sur liens
- Hover sur cartes
- Modale entrée/sortie

### Pas d'animations auto
- Pas de parallax
- Pas d'auto-play vidéo
- Pas de popups surprises

---

## 📸 Images

### Formats
- JPG : photos (compress bien)
- PNG : icones, graphiques
- WebP : modern (fallback JPG)

### Optimisation
- Max width : 1200px
- Lazy loading : natif Next.js
- Alt text : TOUJOURS

### Guidelines
- Pas de photos d'écran (règle sacré)
- Préférer illustrations ou photos réelles
- Cohérence style à travers blog

---

## 🌈 Palette en contexte

### Header/Hero
- Fond beige
- Texte brun
- Accent terracotta pour CTA

### Article
- Fond beige
- Texte brun
- Highlights terracotta
- Meta brun-light

### Tags/Badges
- Fond terracotta
- Texte white
- Ou fond sauge light

### Disabled/Inactive
- Fond brun-lighter
- Texte brun-light
- Cursor not-allowed

---

## 🔍 Feedback utilisateur

### États visibles
- Hover states
- Active states
- Loading states (spinner terracotta)
- Error states (couleur alert, rouge discret)
- Success states (sauge)

### Messages
- Erreur : "Oups, quelque chose s'est mal passé"
- Succès : "Enregistré!"
- Loading : spinner + "Chargement..."

---

## 📊 Performance

### Targets
- Lighthouse Performance : 90+
- LCP : < 2.5s
- First Input Delay : < 100ms

### Optimisations
- Images lazyload
- Code splitting automatique Next.js
- Pas de scripts tiers lourds (sauf analytics)
- CDN Vercel pour images

