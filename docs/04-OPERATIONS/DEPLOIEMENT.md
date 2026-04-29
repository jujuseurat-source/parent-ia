# Déploiement — Parent IA sur Vercel

Guide complet pour déployer le blog public.

---

## 1️⃣ Prérequis

- [ ] Repository GitHub créé et code pushé
- [ ] Compte Vercel créé (gratuit)
- [ ] Build local passe : `npm run build` OK
- [ ] Pas d'erreurs TypeScript

---

## 2️⃣ Connecter Vercel à GitHub

### Étape 1 : Créer projet Vercel

1. Va sur https://vercel.com
2. Login (ou crée compte)
3. Clique "New Project"
4. Sélectionne le repo GitHub `parent-ia`
5. Clique "Import"

### Étape 2 : Configurer le projet

**Nom du projet :** `parent-ia` (ou ton choix)  
**Root directory :** `/` (ou chemin si le repo n'est pas à la racine)  
**Framework preset :** Next.js (auto-détecté)  
**Build command :** `npm run build` (par défaut)  
**Output directory :** `.next` (par défaut)  
**Install command :** `npm install` (par défaut)

**Laisse les valeurs par défaut**, puis clique **"Deploy"**

---

## 3️⃣ Premier déploiement

Vercel va :
1. Clone le repo
2. Installer dépendances
3. Build le projet
4. Déployer sur CDN

**Attends 1-2 min**, puis tu verras :
```
✅ Preview URL active
https://parent-ia-abc123.vercel.app
```

### Tester le déploiement

1. Clique sur la URL pour vérifier le site
2. Teste toutes les pages (accueil, blog, article, à propos)
3. Vérifier que les articles s'affichent bien
4. Clique sur quelques liens

---

## 4️⃣ Auto-deploy sur push GitHub

Maintenant, chaque fois que tu push sur `main` :

```bash
git add .
git commit -m "Nouvel article"
git push origin main
```

Vercel détectera automatiquement et redéploiera (1-2 min).

**Vérifie** : À chaque push, Vercel crée une preview URL et upd la production.

---

## 5️⃣ Custom domain (optionnel)

Si tu as déjà un domaine (ex : parentblog.com) :

### Ajouter le domaine

1. Vercel Dashboard → Projet → Settings
2. Domains
3. Clique "Add Domain"
4. Entre ton domaine : `parentblog.com`
5. Vercel affiche les DNS records à mettre à jour

### Pointer DNS vers Vercel

Dépend où tu as acheté le domaine (GoDaddy, Namecheap, etc.) :

1. Vas sur ton registrar
2. Zone DNS
3. Ajoute les records que Vercel te donne
4. **Attends 24-48h** pour propagation

**Alternative :** Utiliser nameservers Vercel si possible (plus simple).

---

## 6️⃣ SSL/HTTPS (automatique)

Vercel active HTTPS automatiquement. ✅  
Pas besoin de faire quoi que ce soit.

---

## 7️⃣ Environment variables (si besoin futur)

Pour newsletter, analytics, etc.

### Ajouter une variable

1. Vercel Dashboard → Projet → Settings → Environment Variables
2. Add new
3. Nom : ex `NEXT_PUBLIC_ANALYTICS_ID`
4. Valeur : `abc123`
5. Select environment : Production, Preview, Development
6. Save

### Utiliser dans le code

```tsx
const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID
```

---

## 8️⃣ Monitoring & Logs

### Analytics Vercel

Dashboard → Analytics → voir traffic, perf, erreurs

### Logs

Dashboard → Deployments → sélectionner déploiement → Logs  
(utile si quelque chose a échoué)

---

## 9️⃣ Rollback (si problème)

Si tu déploies quelque chose qui casse :

1. Vercel Dashboard → Deployments
2. Cherche le dernier bon déploiement
3. Clique les trois points
4. "Promote to Production"

Ça rétablit la version précédente. 1 min.

---

## 🔟 Troubleshooting

### Build échoue
```
❌ Build failed
Check logs → voir l'erreur exacte
```

Solution :
1. Lire l'erreur
2. Fixer en local : `npm run build`
3. Test : `npm run dev`
4. Push et retry

### Site blanc / page blanche
- Vérifier les logs Vercel
- Vérifier les erreurs dans DevTools (F12)
- Peut être un issue MDX ou import

### Domaine ne pointe pas
- Attendre 24-48h (propagation DNS)
- Vérifier records DNS sont corrects
- Flush DNS local (ipconfig /flushdns sur Windows)

---

## 📊 Vérification post-déploiement

- [ ] Site accessible publiquement
- [ ] Toutes pages chargent
- [ ] Articles s'affichent bien
- [ ] Images chargent
- [ ] Liens internes marchent
- [ ] Performance OK (Lighthouse)
- [ ] Pas d'erreurs console (F12)

---

## 🚀 Prochaines étapes

1. **Annoncer** le lancement (LinkedIn, Twitter, copains)
2. **Partager** l'URL publique
3. **Monitorer** traffic et feedback (analytics Vercel)
4. **Itérer** basé sur feedback (articles, design)

---

## 📞 Support

- **Docs Vercel** : https://vercel.com/docs
- **Next.js Docs** : https://nextjs.org/docs
- **Discord Next.js** : https://discord.gg/nextjs

