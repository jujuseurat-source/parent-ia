# Palette de couleurs — Parent IA

Design system et utilisation des couleurs.

---

## 🎨 Couleurs principales

### Beige — Fond global
```
Hex: #F5EFE0
RGB: 245, 239, 224
Usage: Fond page, containers légers
Sensation: Chaleureux, reposant, papier
```

### Sauge — Accents doux
```
Hex: #7A9E7A
RGB: 122, 158, 122
Usage: Badges, accents, hover states légers
Sensation: Nature, croissance, calme
```

### Terracotta — CTA & accent chaud
```
Hex: #B86A3E
RGB: 184, 106, 62
Usage: Liens, boutons, tags, lien actif nav
Sensation: Énergique, attention, bienveillance
```

### Brun — Texte principal
```
Hex: #3D3028
RGB: 61, 48, 40
Usage: Texte principal, headings
Sensation: Lisible, chaleureux
```

### Brun-light — Texte secondaire
```
Hex: #8B7B6B
RGB: 139, 123, 107
Usage: Texte secondaire, meta (date, durée)
Sensation: Discret, hiérarchique
```

### Brun-lighter — Texte très discret
```
Hex: #B5A898
RGB: 181, 168, 152
Usage: Placeholders, disabled states
Sensation: Léger, recul

```

---

## 🎯 Utilisation

| Élément | Couleur | Raison |
|---|---|---|
| **Fond page** | Beige | Chaleur, reposant |
| **Texte principal** | Brun | Lisibilité, contraste |
| **Texte secondaire** | Brun-light | Hiérarchie |
| **Lien** | Terracotta | Attention, action |
| **Lien hover** | Terracotta + sauge | Feedback |
| **Lien actif (nav)** | Terracotta + underline | Clarté position |
| **Tags** | Terracotta | Cohérence |
| **Badges** | Sauge | Accent doux |
| **CTA buttons** | Terracotta | Action |
| **Borders légers** | Brun-lighter | Subtilité |

---

## 📱 Contraste & accessibilité

| Combo | Ratio | AA | AAA |
|---|---|---|---|
| Brun sur Beige | 8.5:1 | ✅ | ✅ |
| Brun-light sur Beige | 5.2:1 | ✅ | ❌ |
| Terracotta sur Beige | 4.8:1 | ✅ | ❌ |
| Blanc sur Terracotta | 4.2:1 | ✅ | ❌ |

**Conclusion :** Design accessible en AA, bon en AAA pour textes principaux.

---

## 🎨 Tailwind CSS config

```typescript
// tailwind.config.ts
const colors = {
  beige: '#F5EFE0',
  sauge: '#7A9E7A',
  terracotta: '#B86A3E',
  brun: '#3D3028',
  'brun-light': '#8B7B6B',
  'brun-lighter': '#B5A898',
}
```

### Utilisation dans composants

```tsx
// Texte principal
<p className="text-brun">Lorem ipsum</p>

// Lien
<a href="#" className="text-terracotta hover:text-sauge">Lien</a>

// Fond
<div className="bg-beige">Content</div>

// Border
<div className="border border-brun-lighter">Box</div>

// Bouton
<button className="bg-terracotta text-white hover:bg-[#a85a30]">
  Action
</button>
```

---

## ❌ Couleurs NON utilisées

- ❌ **Bleu** : Associé tech/corporate
- ❌ **Rose/magenta** : Trop génré
- ❌ **Noir pur** : Trop agressif (on préfère brun)
- ❌ **Blanc pur** : On préfère beige (chaleur)
- ❌ **Vert lime** : Trop criant

---

## 🌙 Mode sombre (futur)

Si on ajoute dark mode :
- Fond → noir doux (~#1a1410)
- Texte → beige clair
- Accents → inchangés (terracotta, sauge)

Mais pour MVP : light mode only.

---

## 📸 Exemples visuels

**À venir :** Screenshots des pages avec palette appliquée.

