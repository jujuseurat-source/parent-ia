# Phase 2 — Feuille de route après lancement

Plan d'enrichissement et croissance après le lancement public.

---

## 📈 Objectifs Phase 2

- Consolider audience initiale
- Enrichir fonctionnalités basées sur feedback
- Commencer community building
- Augmenter fréquence publication

---

## 🎯 Priorité 1 : Contenu régulier

### Timeline
- **Mai** : 1 article (déjà en cours)
- **Juin** : 2 articles
- **Juillet+** : 1-2 articles/mois soutenable

### Processus
1. Test activité avec Romane/Meryl
2. Rédaction 1-2h
3. Review + corrections
4. Publication

### Métriques de succès
- Articles publiés à temps
- Readership croissant (analytics)
- Engagement dans commentaires

---

## 🔧 Priorité 2 : Filtrage par tags (1-2 semaines)

### Feature
- Ajouter filtres sur `/blog`
- Afficher : "Concepts clés", checkboxes pour chaque tag
- Click tag → filter articles

### Implémentation
```tsx
// app/blog/page.tsx
// État : selectedTags[]
// Afficher cartes où tags inclent selectedTags
```

### Test
- Vérifier filtres marchent
- Performance OK (< 100ms)

---

## 📧 Priorité 3 : Newsletter (2-3 semaines)

### Plateforme
- Mailchimp (gratuit pour < 500 subscribers)
- Ou Substack (plus simple, mais moins control)

### Implémentation
- Footer : formulaire inscription
- Mail de confirmation
- Weekly digest (vendredi) avec dernier article

### Copy
```
Reçois nos articles chaque vendredi.
Parents, professeurs, curieux... on est tous ici pour apprendre avec nos enfants.
```

---

## 💬 Priorité 4 : Commentaires (2-3 semaines)

### Plateforme
- **Giscus** (GitHub-backed, gratuit) ← recommandé
- Ou Disqus (plus lourd)

### Setup Giscus
1. Public repo GitHub
2. Enable Discussions
3. Install Giscus
4. Config dans `app/blog/[slug]/page.tsx`

### Modération
- Modérer commentaires spammeurs
- Répondre aux questions pertinentes

---

## 📊 Priorité 5 : Analytics avancés (1 semaine)

### Outils
- **Plausible** (privacy-first, payant ~€10/mois)
- Ou **Umami** (open-source, self-hosted)
- Vercel Analytics (déjà inclu, bon pour démarrer)

### Métriques à tracker
- Articles les plus lus
- Temps moyen par article
- Bounce rate
- Source du traffic

### Utilisation
- Comprendre ce qui marche
- Inspirer les prochains articles
- Voir si audience grandit

---

## 🎨 Priorité 6 : Design itérations (ongoing)

### Basé sur feedback
- Design ajustements si users demandent
- Améliorer mobile si problèmes
- Dark mode (optionnel)

### Testing
- Form feedback : email juju
- Analytics : comprendre où ils se perdent

---

## 🌐 Priorité 7 : SEO moyen terme (mois 2-3)

### Actions
- Blogroll + backlinks
- Guest posts sur autres blogs
- Partage sur dev.to, Hacker News si pertinent
- Twitter/LinkedIn posting régulier

### Meta
- Rich snippets pour articles
- Schema markup
- Sitemap + robots.txt

---

## 🚀 Priorité 8 : Extras (mois 3+)

### Newsletter PDF
- Compilation d'articles du mois
- Envoyé à subscribers

### Ressources téléchargeables
- Fiches d'activités PDF
- Dossiers pédagogiques

### Podcast/Audio
- Narration audio des articles
- Spotify / Apple Podcasts

### Community
- Discord léger ou Forum simple
- Parents partagent leurs expériences

---

## 📅 Timeline Phase 2

| Semaine | Jalon | Effort |
|---|---|---|
| **Semaine 1-2 (05-12/05)** | Monitoring launch | Faible |
| **Semaine 3-4 (12-19/05)** | Filtres + newsletter setup | Moyen |
| **Semaine 5-6 (19-26/05)** | Commentaires + analytics | Moyen |
| **Mois 2 (juin)** | Articles + SEO + feedback | Moyen |
| **Mois 3+ (juillet+)** | Expansion (podcast, PDF, etc) | À la demande |

---

## 💡 Feedback à collecter

### Auprès des premiers lecteurs
- Qu'est-ce que tu as aimé le plus ?
- Quels concepts tu aimerais voir ?
- Trop long ? Trop court ?
- Design OK ? Lisibilité OK ?

### Via analytics
- Où les gens se perdent
- Articles les plus lus
- Temps moyen lecture
- Scroll depth

### Via commentaires
- Questions précises sur concepts
- Idées d'articles
- Problèmes techniques

---

## ✅ Success criteria Phase 2

- [ ] 5-7 articles publiés (juin)
- [ ] 500+ visiteurs/mois (juin)
- [ ] 50+ newsletter subscribers
- [ ] Filtres + commentaires actifs
- [ ] Community engagement (commentaires, partages)
- [ ] Analytics montrent patterns

