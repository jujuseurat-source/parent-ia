# Composants React — Parent IA

Documentation des composants réutilisables.

---

## Navigation

**Fichier :** `components/Navigation.tsx`

### Features
- Sticky en haut de page
- Lien actif mis en valeur (terracotta + underline)
- Menu : Accueil / Blog / À propos
- Responsive (mobile + desktop)

### Props
```typescript
// Pas de props — utilise usePathname() pour actif
```

### Exemple utilisation
```tsx
import Navigation from '@/components/Navigation'

export default function Layout() {
  return <Navigation />
}
```

---

## ArticleCard

**Fichier :** `components/ArticleCard.tsx`

### Features
- Affiche : titre, date, âge cible, durée, résumé
- Tags en pastilles terracotta
- Clickable → route vers article
- Responsive

### Props
```typescript
interface ArticleCardProps {
  title: string
  date: string          // formatée "29 avril 2026"
  ageCible: string      // "6-9 ans"
  duree: string         // "30 minutes"
  resume: string        // 1-2 phrases
  slug: string          // pour link
  tags: string[]        // ["classification", "logique"]
}
```

### Exemple utilisation
```tsx
<ArticleCard
  title="Trier comme une IA"
  date="29 avril 2026"
  ageCible="6-9 ans"
  duree="20 minutes"
  resume="Romane apprend à catégoriser..."
  slug="le-tri-magique"
  tags={["classification"]}
/>
```

---

## Footer

**Fichier :** `components/Footer.tsx`

### Features
- Tagline : "Grandir avec l'IA"
- Copyright
- Éventuellement liens futurs (newsletter, etc.)

### Props
```typescript
// Pas de props
```

### Exemple utilisation
```tsx
import Footer from '@/components/Footer'

export default function Layout() {
  return <Footer />
}
```

---

## Composants futurs

### NewsletterForm
Pour la phase 2 (inscription newsletter).

```typescript
interface NewsletterFormProps {
  onSubmit: (email: string) => Promise<void>
  placeholder?: string
}
```

### ArticleComments
Pour intégrer Disqus ou Giscus (phase 3).

### TagFilter
Pour filtrer articles par tag sur `/blog` (phase 2).

```typescript
interface TagFilterProps {
  tags: string[]
  selected: string[]
  onChange: (tags: string[]) => void
}
```

---

## 🎨 Styles & utilitaires

### Classe `.prose-parent`
Pour les articles MDX (typographie).

```css
/* app/globals.css */
.prose-parent {
  @apply text-brun leading-relaxed;
}

.prose-parent h2 {
  @apply text-2xl font-bold text-brun mt-6 mb-3;
}

.prose-parent p {
  @apply mb-4;
}

/* etc. */
```

### Classes utiles

```tsx
// Texte principal
<p className="text-brun">Lorem</p>

// Meta (date, durée)
<span className="text-brun-light text-sm">29 avril 2026</span>

// Lien
<a href="#" className="text-terracotta hover:text-sauge transition">Link</a>

// Tag
<span className="bg-terracotta text-white px-3 py-1 rounded">Classification</span>

// Container
<div className="bg-beige px-4 py-6">Content</div>
```

---

## 📐 Responsive breakpoints

Utiliser breakpoints Tailwind standard :
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

Mobile-first : écrire pour mobile d'abord, puis `md:` pour desktop.

```tsx
export default function ArticleCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Cards */}
    </div>
  )
}
```

