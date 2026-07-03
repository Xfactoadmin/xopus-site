# Commandes Utiles — XOpus

Liste des commandes fréquemment utilisées pour le développement du site XOpus.

---

## 🚀 Développement

### Lancer le serveur de développement
```bash
npm run dev
```
Ouvre le site sur [http://localhost:3000](http://localhost:3000)

### Build de production
```bash
npm run build
```
Génère un build optimisé dans `.next/`

### Lancer en mode production
```bash
npm run start
```
Lance le serveur de production (après `npm run build`)

### Linter le code
```bash
npm run lint
```
Vérifie les erreurs ESLint

---

## 📦 Installation & Mises à Jour

### Installer les dépendances
```bash
npm install
```

### Mettre à jour Next.js
```bash
npm install next@latest react@latest react-dom@latest
```

### Mettre à jour toutes les dépendances
```bash
npm update
```

### Vérifier les packages obsolètes
```bash
npm outdated
```

---

## 🧹 Nettoyage

### Nettoyer le cache Next.js
```bash
rm -rf .next
npm run build
```

### Nettoyer node_modules et réinstaller
```bash
rm -rf node_modules package-lock.json
npm install
```

### Nettoyer tous les caches
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

---

## 🔍 Analyse & Debug

### Analyser la taille du bundle
```bash
npm run build
```
Puis consulter `.next/analyze/`

### Voir les logs de build détaillés
```bash
npm run build -- --debug
```

### Tester le build localement
```bash
npm run build
npm run start
```

---

## 🚢 Déploiement Vercel

### Déployer en preview
```bash
vercel
```

### Déployer en production
```bash
vercel --prod
```

### Pull des variables d'environnement Vercel
```bash
vercel env pull .env.local
```

---

## 🎨 Git

### Commit standard
```bash
git add .
git commit -m "feat: description du changement"
git push
```

### Voir l'historique
```bash
git log --oneline --graph --all
```

### Créer une nouvelle branche
```bash
git checkout -b feature/nouvelle-fonctionnalite
```

### Revenir à main
```bash
git checkout main
```

---

## 📊 Supabase

### Lancer Supabase localement (si configuré)
```bash
npx supabase start
```

### Arrêter Supabase local
```bash
npx supabase stop
```

### Générer les types TypeScript
```bash
npx supabase gen types typescript --project-id your-project-id > src/types/database.types.ts
```

### Appliquer les migrations
```bash
npx supabase db push
```

---

## 🧪 Tests

### Lancer les tests (si configurés)
```bash
npm test
```

### Tests en mode watch
```bash
npm test -- --watch
```

### Coverage des tests
```bash
npm test -- --coverage
```

---

## 📈 Performance

### Analyser avec Lighthouse
```bash
npm run build
npm run start
```
Puis ouvrir Chrome DevTools > Lighthouse

### Vérifier la vitesse de chargement
```bash
# Ouvrir https://pagespeed.web.dev/
# Tester avec l'URL de production
```

---

## 🔐 Sécurité

### Auditer les vulnérabilités npm
```bash
npm audit
```

### Corriger automatiquement les vulnérabilités
```bash
npm audit fix
```

### Forcer les corrections (attention!)
```bash
npm audit fix --force
```

---

## 📝 Documentation

### Générer la documentation TypeScript (si configuré)
```bash
npx typedoc --out docs src
```

### Lancer Storybook (si configuré)
```bash
npm run storybook
```

---

## 🌐 SEO

### Vérifier le sitemap
```bash
curl https://xopus.fr/sitemap.xml
```

### Vérifier robots.txt
```bash
curl https://xopus.fr/robots.txt
```

### Tester les métadonnées Open Graph
```bash
# Ouvrir https://www.opengraph.xyz/
# Entrer l'URL à tester
```

---

## 🖼️ Images

### Optimiser une image avec Sharp (si installé)
```bash
npx sharp -i input.png -o output.webp --webp
```

### Compresser toutes les images PNG
```bash
# Utiliser TinyPNG, Squoosh, ou ImageOptim
```

---

## 📱 PWA

### Tester le manifest
```bash
# Ouvrir Chrome DevTools > Application > Manifest
```

### Tester le service worker (si configuré)
```bash
# Ouvrir Chrome DevTools > Application > Service Workers
```

---

## 🐛 Dépannage

### Port 3000 déjà utilisé
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Erreur de cache
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Problème de TypeScript
```bash
npx tsc --noEmit
```

---

## 📚 Ressources Utiles

- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/

---

_Maintenu par Fox Repair — Gabin NICAISE_
