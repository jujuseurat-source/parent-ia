# Checklist Pré-lancement — Parent IA

À faire avant de mettre le blog public.

---

## ✅ Contenu

- [ ] **Tagline d'accueil** : Valider texte (discussion en cours)
- [ ] **Article 1** : Le tri magique — vérifier tout est OK
- [ ] **Article 2** : Mémoire (ou autre) — rédiger et tester
- [ ] **Article 3** : Pattern (ou autre) — rédiger et tester
- [ ] **Page À propos** : Vérifier texte et ton
- [ ] **Meta descriptions** : Ajouter pour SEO

---

## 🎨 Design & UX

- [ ] **Navigation** : Tester sur mobile/desktop
- [ ] **Articles** : Vérifier affichage MDX (heading, texte, spacing)
- [ ] **Responsive** : Test 375px (mobile), 768px (tablet), 1200px (desktop)
- [ ] **Couleurs** : Vérifier contraste pour accessibilité
- [ ] **Typo** : Vérifier tailles, line-height, lisibilité
- [ ] **Images** : Optimisées, alt texts présents

---

## 🔧 Technique

- [ ] **Build local** : `npm run build` passe sans erreurs
- [ ] **Tests local** : `npm run dev` → visiter toutes les pages
- [ ] **Lighthouse** : Vérifier Performance 90+
- [ ] **TypeScript** : `npm run type-check` OK
- [ ] **SEO basique** :
  - [ ] Title tags présents
  - [ ] Meta descriptions
  - [ ] Canonical URLs
  - [ ] Open Graph images
- [ ] **Liens** : Tous les liens internes fonctionnent

---

## 📱 Mobile-first

- [ ] Tester sur vraiment téléphone (pas juste DevTools)
- [ ] Touches sont assez grandes (min 48px)
- [ ] Pas de texte qui dépasse en largeur
- [ ] Zoom sur images fonctionne
- [ ] Pas de scrolling horizontal involontaire

---

## 🚀 Déploiement

- [ ] **Vercel** : Projet créé et lié à Git
- [ ] **GitHub** : Repository créé, code pushé
- [ ] **Vercel** : Auto-deploy configuré (main branch)
- [ ] **Domain** : (optionnel) Custom domain pointé si déjà acheté
- [ ] **Environment** : Aucune variable d'env sensible en code

---

## 📊 Analytics & Monitoring

- [ ] **Vercel Analytics** : Activé
- [ ] **Email de notif** : Configuré si déploiement fail
- [ ] **Google Analytics** : Considérer après lancement (optionnel)

---

## 🔐 Sécurité & Privacy

- [ ] **HTTPS** : Automatique avec Vercel ✅
- [ ] **Cookies** : Aucun tracking non-consentis
- [ ] **Données** : Pas d'infos sensibles en cookies/localStorage
- [ ] **Meta** : Privacy policy (si nécessaire)

---

## 📝 Contenu final

- [ ] **README.md** : À jour
- [ ] **CLAUDE.md** : À jour pour prochaines sessions
- [ ] **Articles frontmatter** : Vérifier tous les champs
- [ ] **Links** : Tous les liens internes résolus

---

## 🎯 Avant d'appuyer sur "GO"

1. **Faire une relecture complète** du site comme un visiteur
2. **Partager avec 2-3 amis** pour feedback
3. **Corriger** les feedback critiques
4. **Final check** : tout marche en local et en staging Vercel
5. **Respirer** — tu es prêt! 🚀

---

## 📌 Notes importantes

- **Ne pas stresser sur la perfection** : tu peux itérer après lancement
- **MVP first** : les features fancy (newsletter, filtres) viendront plus tard
- **Focus sur le contenu** : c'est ça qui compte vraiment
- **Feedback sera précieux** : demander aux premiers lecteurs

