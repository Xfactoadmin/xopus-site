# TODO — XOpus

Liste des tâches à accomplir pour finaliser le site XOpus.

---

## 🎨 Assets Graphiques (PRIORITÉ HAUTE)

- [ ] **Créer l'image Open Graph** (`/public/og-image.png`)
  - Dimensions : 1200x630 px
  - Format : PNG
  - Contenu : Logo XOpus + slogan + visuel moderne
  - Utilisé sur : Facebook, LinkedIn, Twitter, WhatsApp

- [ ] **Créer les icônes PWA**
  - `/public/icon-192x192.png` (192x192 px)
  - `/public/icon-512x512.png` (512x512 px)
  - Format : PNG avec fond transparent ou couleur marque
  - Utilisé pour : Installation sur mobile/desktop

- [ ] **Créer les screenshots PWA**
  - `/public/screenshot1.png` (1280x720 px) — Vue desktop
  - `/public/screenshot2.png` (750x1334 px) — Vue mobile
  - Contenu : Captures d'écran de l'application XOpus

- [ ] **Créer le favicon**
  - `/public/favicon.png` (32x32 px)
  - Cohérent avec le logo XOpus

- [ ] **Créer l'apple-touch-icon**
  - `/public/apple-touch-icon.png` (180x180 px)
  - Pour iOS/macOS

---

## 📝 Informations Légales à Compléter (PRIORITÉ HAUTE)

### Mentions Légales
- [ ] Ajouter l'**adresse complète** de Fox Repair
- [ ] Ajouter le **numéro SIRET**
- [ ] Ajouter le **numéro de TVA intracommunautaire**
- [ ] Vérifier les coordonnées de contact

### Contact
- [ ] Ajouter un **numéro de téléphone** support (facultatif)
- [ ] Configurer un **formulaire de contact** fonctionnel
- [ ] Mettre en place un système de ticketing support

---

## 🚀 SEO & Référencement (PRIORITÉ HAUTE)

### Google
- [ ] **Créer un compte Google Search Console**
  - Vérifier la propriété du site avec le meta tag
  - Soumettre le sitemap XML
  - Surveiller les erreurs d'indexation

- [ ] **Configurer Google Analytics 4**
  - Suivre le trafic du site
  - Analyser le comportement des utilisateurs
  - Mesurer les conversions

- [ ] **Créer une fiche Google My Business**
  - Pour le référencement local
  - Ajouter logo, photos, horaires

### Bing
- [ ] **Créer un compte Bing Webmaster Tools**
  - Soumettre le sitemap
  - Optimiser pour Bing

### Autres
- [ ] **Créer des backlinks de qualité**
  - Annuaires professionnels français
  - Forums artisans/indépendants
  - Partenariats avec CCI, CMA
  - Articles de blog invités

- [ ] **Compléter le code de vérification Google**
  - Remplacer `YOUR_GOOGLE_VERIFICATION_CODE` dans `layout.tsx`

---

## 🎯 Contenu & Marketing

### Pages à Créer
- [ ] **Page Blog**
  - Articles sur la facturation
  - Conseils pour artisans
  - Actualités réglementaires

- [ ] **Page Témoignages détaillée**
  - Études de cas clients
  - Vidéos témoignages
  - Logos clients

- [ ] **Page À propos / Notre histoire**
  - Histoire de Fox Repair
  - Présentation de Gabin NICAISE
  - Valeurs et mission

- [ ] **Page Aide / Documentation**
  - Guides d'utilisation
  - FAQ avancée
  - Vidéos tutoriels

### Contenu SEO
- [ ] **Rédiger 10+ articles de blog SEO**
  - "Comment créer une facture conforme en 2026 ?"
  - "Loi anti-fraude TVA : tout ce qu'il faut savoir"
  - "Factur-X : le guide complet"
  - etc.

- [ ] **Créer des landing pages par métier**
  - Facturation pour plombiers
  - Facturation pour électriciens
  - Facturation pour artisans du bâtiment
  - etc.

---

## 🔒 Sécurité & Conformité

### RGPD
- [ ] **Finaliser la politique cookies**
  - Banner de consentement cookies
  - Outil de gestion des préférences

- [ ] **Mettre en place un registre des traitements**
  - Documenter tous les traitements de données

- [ ] **Tester les demandes RGPD**
  - Droit d'accès
  - Droit de rectification
  - Droit à l'effacement

### Sécurité
- [ ] **Configurer un WAF (Web Application Firewall)**
  - Protection contre les attaques DDoS
  - Filtrage des requêtes malveillantes

- [ ] **Mettre en place un système de monitoring**
  - Uptime monitoring (UptimeRobot, Pingdom)
  - Alertes en cas de panne

---

## ⚡ Performance & Optimisation

### Images
- [ ] **Convertir toutes les images en WebP**
  - Gain de poids ~30%
  - Fallback PNG pour anciens navigateurs

- [ ] **Optimiser les images**
  - Compresser avec TinyPNG ou Squoosh
  - Lazy loading activé partout

### Code
- [ ] **Analyser avec Lighthouse**
  - Score 100/100 Performance
  - Score 100/100 SEO
  - Score 100/100 Accessibilité
  - Score 100/100 Best Practices

- [ ] **Minifier le CSS/JS**
  - Vérifier que la minification est active en prod

- [ ] **Activer la compression Brotli**
  - Sur Vercel : compression automatique

---

## 📱 Réseaux Sociaux

### Créer les comptes
- [ ] **Twitter/X** : @xopus_fr
- [ ] **LinkedIn** : /company/xopus
- [ ] **Facebook** : /xopusfr (facultatif)
- [ ] **Instagram** : @xopus.fr (facultatif)
- [ ] **YouTube** : Chaîne XOpus (tutoriels vidéo)

### Contenu Social
- [ ] **Créer un calendrier éditorial**
  - 3-5 posts par semaine
  - Conseils facturation
  - Actualités réglementaires
  - Témoignages clients

---

## 🧪 Tests & QA

### Tests Fonctionnels
- [ ] **Tester tous les liens**
  - Liens internes
  - Liens externes
  - Liens d'ancrage

- [ ] **Tester le formulaire de contact**
  - Envoi d'email
  - Validation des champs
  - Messages d'erreur

- [ ] **Tester le responsive**
  - Mobile (320px à 768px)
  - Tablet (768px à 1024px)
  - Desktop (1024px+)

### Tests Cross-Browser
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (Mac/iOS)
- [ ] Opera

### Tests Accessibilité
- [ ] **Tester avec un screen reader**
  - NVDA (Windows)
  - JAWS (Windows)
  - VoiceOver (Mac/iOS)

- [ ] **Tester la navigation au clavier**
  - Tab, Shift+Tab
  - Enter, Space
  - Esc pour fermer les modals

---

## 🚢 Déploiement & Monitoring

### Vercel
- [ ] **Configurer les variables d'environnement**
  - Clés API Supabase
  - Clés API Stripe
  - Secrets divers

- [ ] **Activer les Analytics Vercel**
  - Web Analytics (gratuit)
  - Speed Insights

### Monitoring
- [ ] **Mettre en place Sentry** (monitoring erreurs)
- [ ] **Configurer des alertes email** en cas de panne
- [ ] **Dashboard de santé du site** (status page)

---

## 📧 Email Marketing

- [ ] **Configurer un service d'emailing**
  - Mailchimp, Sendinblue, ou Brevo
  - Intégrer le formulaire newsletter

- [ ] **Créer des templates d'emails**
  - Email de bienvenue
  - Newsletter mensuelle
  - Email de relance

- [ ] **Automatiser les emails**
  - Inscription → Email de bienvenue
  - Fin d'essai → Email de conversion

---

## 🎓 Documentation Interne

- [ ] **Documenter l'architecture technique**
- [ ] **Créer un guide de contribution** (si équipe)
- [ ] **Documenter les processus métier**

---

## 🔮 Roadmap Future

### Fonctionnalités à Venir
- [ ] Module XRepair (gestion atelier réparation)
- [ ] Module XPay (terminal de paiement)
- [ ] Module XSite (site vitrine personnalisé)
- [ ] Application mobile (iOS & Android)
- [ ] Intégration comptable (Sage, QuickBooks)
- [ ] Facturation multi-devises
- [ ] Mode multi-utilisateur (équipes)
- [ ] API publique pour développeurs

---

## ✅ Checklist Avant Lancement Public

- [ ] Tous les assets graphiques créés
- [ ] Informations légales complètes
- [ ] Google Search Console configuré
- [ ] Google Analytics 4 installé
- [ ] Sitemap soumis à Google/Bing
- [ ] Tests fonctionnels passés
- [ ] Tests accessibilité OK
- [ ] Performance Lighthouse 90+
- [ ] Réseaux sociaux créés
- [ ] Formulaire de contact fonctionnel
- [ ] Monitoring et alertes actifs
- [ ] Sauvegardes automatiques testées

---

_Liste maintenue par Fox Repair — Gabin NICAISE_
_Dernière mise à jour : 3 juillet 2026_
