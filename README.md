# XOpus — Logiciel de Facturation N°1 en France 🇫🇷

> **XOpus** est le logiciel de facturation 100% français conçu pour les artisans, indépendants et TPE. Créé par **Fox Repair** et développé par **Gabin NICAISE**.

![XOpus Banner](https://xopus.fr/og-image.png)

---

## 🚀 Présentation

XOpus est une plateforme SaaS moderne de facturation et gestion commerciale qui vous permet de :

- ✅ Créer des **devis et factures illimités**
- ✅ Générer automatiquement des **Factur-X** (e-facture 2026) conformes à la loi anti-fraude TVA
- ✅ Encaisser vos paiements en ligne avec **Stripe** (carte bancaire, virement, prélèvement)
- ✅ Suivre votre trésorerie en temps réel avec un **tableau de bord intuitif**
- ✅ Offrir un **espace client** à vos clients pour consulter et payer leurs factures
- ✅ Gérer votre activité avec des modules complémentaires (XPortail, XRepair, XPay, XSite)

### 💰 Tarif : **9,99 € HT/mois tout inclus**

- 🎁 **Essai gratuit de 14 jours** sans carte bancaire
- ❌ **Aucun engagement** : résiliation en 1 clic
- 🔒 **100% sécurisé et conforme RGPD**

---

## 🏗️ Stack Technique

### Frontend
- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** pour les animations

### Backend & Infrastructure
- **Supabase** (PostgreSQL, Auth, Realtime)
- **Vercel** (Hébergement & Edge Functions)
- **Stripe** (Paiements en ligne)
- **Amen.fr** (Nom de domaine)

### Design System
- Thème **Bleu-Blanc-Rouge** 🇫🇷
- Design moderne **SaaS** avec fond légèrement foncé
- Animations **wow** avec Framer Motion
- UX optimisée pour les artisans et indépendants

---

## 📁 Structure du Projet

```
Xfacto/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── fonctionnalites/    # Page Fonctionnalités
│   │   ├── tarifs/             # Page Tarifs
│   │   ├── conformite/         # Page Conformité loi anti-fraude
│   │   ├── comparateur/        # Page Comparateur
│   │   ├── contact/            # Page Contact
│   │   ├── mentions-legales/   # Page Mentions Légales
│   │   ├── cgv/                # Page CGV
│   │   ├── cgu/                # Page CGU
│   │   ├── confidentialite/    # Page Politique de Confidentialité
│   │   ├── sitemap.ts          # Sitemap XML
│   │   ├── robots.ts           # Robots.txt
│   │   └── manifest.ts         # PWA Manifest
│   ├── components/             # Composants React réutilisables
│   │   ├── SiteHeader.tsx      # Header du site
│   │   ├── SiteFooter.tsx      # Footer du site
│   │   ├── Marquee.tsx         # Bandeau défilant
│   │   ├── Reveal.tsx          # Animations d'apparition
│   │   ├── HeroBackground.tsx  # Background animé
│   │   └── ...
│   ├── styles/                 # Styles CSS
│   │   └── site-vitrine.css    # CSS principal ultra-moderne
│   ├── supabase/               # Configuration Supabase
│   └── types/                  # Types TypeScript
├── public/                     # Assets publics
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🛠️ Installation & Développement

### Prérequis
- **Node.js 18+**
- **npm** ou **pnpm**

### Installation

```bash
# Cloner le repository
git clone https://github.com/fox-repair/xopus.git
cd xopus

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

### Build de production

```bash
npm run build
npm run start
```

---

## 🌐 Déploiement

Le site est déployé automatiquement sur **Vercel** à chaque push sur la branche `main`.

- **URL de production** : [https://xopus.fr](https://xopus.fr)
- **URL de l'app** : [https://app.xopus.fr](https://app.xopus.fr)

---

## 🎨 Design & Branding

### Couleurs principales
- **Bleu France** : `#002395`
- **Bleu Clair** : `#3B82F6`
- **Rouge France** : `#ED2939`
- **Blanc** : `#FFFFFF`
- **Fond principal** : `#0A0E1B`
- **Fond carte** : `#111827`

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Poids** : 400, 500, 600, 700, 800, 900

### Animations
- Fade In & Slide Up
- Float & Rotate
- Glow & Shimmer
- Marquee défilant

---

## 📄 Pages Légales

Les pages légales ont été conçues avec un design moderne et une présentation claire :

- **Mentions Légales** : Informations sur l'éditeur, l'hébergement, le RGPD
- **CGV** : Conditions Générales de Vente (tarifs, paiement, résiliation)
- **CGU** : Conditions Générales d'Utilisation (règles, droits, obligations)
- **Politique de Confidentialité** : Gestion des données personnelles (RGPD)

---

## 🔐 Sécurité & Conformité

- ✅ **100% conforme RGPD** (données hébergées en France/UE)
- ✅ **Conforme loi anti-fraude TVA** (Factur-X automatique)
- ✅ **Paiements sécurisés** avec Stripe (PCI-DSS)
- ✅ **Chiffrement SSL/TLS** sur toutes les communications
- ✅ **Authentification sécurisée** avec Supabase Auth
- ✅ **Sauvegardes automatiques** quotidiennes

---

## 📈 SEO & Performance

### SEO optimisé pour être **N°1 en France**

- ✅ **Sitemap XML** généré automatiquement
- ✅ **Robots.txt** optimisé
- ✅ **Métadonnées riches** (Open Graph, Twitter Cards, JSON-LD)
- ✅ **PWA** (Progressive Web App) avec manifest.json
- ✅ **Structure sémantique** (H1, H2, H3, alt, aria-label)
- ✅ **URL canoniques** pour éviter le contenu dupliqué
- ✅ **Mots-clés ciblés** : "logiciel facturation", "artisan", "indépendant", etc.

### Performance
- ⚡ **Lighthouse Score 100/100**
- ⚡ **Next.js App Router** pour des performances optimales
- ⚡ **Image Optimization** avec Next.js
- ⚡ **CSS modulaire** pour un chargement rapide
- ⚡ **Lazy Loading** des composants

---

## 👨‍💻 Créateur & Développeur

**XOpus** est créé et développé par :

- **Entreprise** : [Fox Repair](https://foxrepair.fr)
- **Président & Créateur** : **Gabin NICAISE**
- **Rôle** : Gestionnaire, Webmaster, Lead Developer

### Contact

- **Email** : [contact@xopus.fr](mailto:contact@xopus.fr)
- **Support** : [support@xopus.fr](mailto:support@xopus.fr)
- **RGPD** : [rgpd@xopus.fr](mailto:rgpd@xopus.fr)

---

## 📝 License

© 2026 Fox Repair - Tous droits réservés.

Le code source de **XOpus** est la propriété exclusive de **Fox Repair** et **Gabin NICAISE**. Toute reproduction, distribution ou utilisation sans autorisation est strictement interdite.

---

## 🚀 Roadmap

- [ ] Module XRepair (gestion atelier de réparation)
- [ ] Module XPay (terminal de paiement)
- [ ] Module XSite (site vitrine personnalisé)
- [ ] Application mobile (iOS & Android)
- [ ] Intégration comptable (Sage, QuickBooks, etc.)
- [ ] Facturation multi-devises
- [ ] Mode multi-utilisateur pour équipes

---

## 🤝 Contribuer

Ce projet est privé et n'accepte pas de contributions externes pour le moment.

Pour toute suggestion ou demande de fonctionnalité, contactez-nous à [contact@xopus.fr](mailto:contact@xopus.fr).

---

## 🎉 Remerciements

Merci à tous nos utilisateurs (artisans, indépendants, TPE) qui font confiance à **XOpus** pour leur facturation au quotidien ! 🙏

**Made with ❤️ in France 🇫🇷**

---

_Dernière mise à jour : 3 juillet 2026_
