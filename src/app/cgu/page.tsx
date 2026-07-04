import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation (CGU) — XOpus",
  description:
    "Conditions d'utilisation du logiciel XOpus. Règles, bonnes pratiques et engagements pour une utilisation optimale de notre plateforme de facturation.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CGUPage() {
  return (
    <>
      <SiteHeader />

      <main className="site-main">
        <div className="site-legal">
          <Reveal>
            <h1>Conditions Générales d'Utilisation ⚖️</h1>
          </Reveal>

          <Reveal>
            <div className="site-legal-meta">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Dernière mise à jour : 3 juillet 2026</span>
              <span>•</span>
              <span>Version 2.0</span>
            </div>
          </Reveal>

          <Reveal>
            <p className="site-legal-intro">
              Les présentes Conditions Générales d'Utilisation (CGU) déterminent
              les règles d'accès et de bonne utilisation du logiciel{" "}
              <strong>XOpus</strong>, édit par <strong>Fox Repair</strong>,
              représenté par <strong>Gabin NICAISE</strong>.
            </p>
          </Reveal>

          <Reveal>
            <div className="site-legal-block">
              <h2>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                1. Acceptation des CGU
              </h2>

              <p>
                L'accès et l'utilisation de la plateforme <strong>XOpus</strong>{" "}
                (disponible sur <strong>app.xopus.fr</strong>) impliquent
                l'acceptation pleine et entière des présentes CGU par
                l'utilisateur (ci-après "l'Utilisateur" ou "le Client").
              </p>

              <p>
                En créant un compte sur XOpus, l'Utilisateur reconnaît avoir pris
                connaissance de ces conditions et s'engage à les respecter.
              </p>

              <p>
                Si l'Utilisateur n'accepte pas ces CGU, il doit immédiatement
                cesser d'utiliser le service.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="site-legal-block">
              <h2>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                2. Description du service
              </h2>

              <p>
                <strong>XOpus</strong> est un logiciel SaaS (Software as a
                Service) de facturation et de gestion commerciale destiné aux
                artisans, indépendants et TPE.
              </p>

              <p>Le service propose notamment :</p>

              <ul className="site-list">
                <li>La création de devis et factures illimités</li>
                <li>
                  La génération automatique de Factur-X (e-facture 2026) conforme
                  à la loi anti-fraude TVA
                </li>
                <li>Le suivi des paiements et relances automatiques</li>
                <li>
                  L'intégration de paiements en ligne via Stripe (carte bancaire,
                  virement, prélèvement)
                </li>
                <li>Un tableau de bord de suivi de trésorerie</li>
                <li>Un espace client pour vos clients</li>
                <li>Des modules complémentaires (XPortail, XRepair, XPay, etc.)</li>
              </ul>

              <p>
                Fox Repair se réserve le droit de modifier, améliorer ou
                interrompre temporairement certaines fonctionnalités du service
                pour des raisons techniques ou d'amélioration.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="site-legal-block">
              <h2>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                3. Conditions d'accès au service
              </h2>

              <h3>3.1. Création de compte</h3>
              <p>
                Pour utiliser XOpus, l'Utilisateur doit créer un compte en
                fournissant :
              </p>
              <ul className="site-list">
                <li>Une adresse email valide</li>
                <li>Un mot de passe sécurisé (minimum 8 caractères)</li>
                <li>Ses informations professionnelles (nom, entreprise, SIRET)</li>
              </ul>

              <p>
                L'Utilisateur s'engage à fournir des informations exactes,
                complètes et à jour. Toute fausse déclaration peut entraîner la
                suspension ou la suppression immédiate du compte.
              </p>

              <h3>3.2. Sécurité du compte</h3>
              <p>
                L'Utilisateur est seul responsable de la confidentialité de ses
                identifiants de connexion (email et mot de passe). Il s'engage à
                :
              </p>
              <ul className="site-list">
                <li>Ne pas partager ses identifiants avec des tiers</li>
                <li>Utiliser un mot de passe robuste et unique</li>
                <li>Informer immédiatement Fox Repair en cas d'utilisation non autorisée de son compte</li>
              </ul>

              <p>
                Fox Repair ne pourra être tenue responsable des conséquences
                d'une utilisation frauduleuse du compte résultant d'un manque de
                vigilance de l'Utilisateur.
              </p>

              <h3>3.3. Prérequis techniques</h3>
              <p>
                L'accès à XOpus nécessite une connexion Internet et un navigateur
                web moderne (Chrome, Firefox, Safari, Edge) à jour.
              </p>

              <p>
                L'Utilisateur est responsable de son équipement informatique et de
                sa connexion Internet.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="site-legal-block">
              <h2>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                4. Utilisation du service
              </h2>

              <h3>4.1. Usage autorisé</h3>
              <p>
                XOpus est destiné à un usage professionnel dans le cadre de la
                gestion commerciale et de la facturation. L'Utilisateur s'engage à
                utiliser le service de manière conforme à sa destination et aux
                lois en vigueur.
              </p>

              <h3>4.2. Usages interdits</h3>
              <p>
                L'Utilisateur s'interdit formellement de :
              </p>
              <ul className="site-list">
                <li>Utiliser le service à des fins illégales ou frauduleuses</li>
                <li>
                  Tenter d'accéder à des comptes ou données appartenant à d'autres
                  utilisateurs
                </li>
                <li>
                  Introduire des virus, malwares ou tout code malveillant dans la
                  plateforme
                </li>
                <li>
                  Surcharger ou perturber le fonctionnement des serveurs (attaque
                  DDoS, spam, etc.)
                </li>
                <li>
                  Extraire, copier ou reproduire le code source ou la structure du
                  logiciel (reverse engineering)
                </li>
                <li>
                  Utiliser des robots, scrapers ou tout outil automatisé pour
                  extraire des données du service
                </li>
                <li>
                  Revendre, sous-licencier ou transférer son compte à un tiers
                  sans autorisation
                </li>
                <li>
                  Créer de fausses factures ou documents frauduleux
                </li>
              </ul>

              <p>
                Toute violation de ces interdictions peut entraîner la suspension
                immédiate du compte et des poursuites judiciaires.
              </p>

              <h3>4.3. Responsabilité du contenu</h3>
              <p>
                L'Utilisateur est seul responsable du contenu qu'il crée et
                diffuse via XOpus (factures, devis, emails, descriptions de
                produits, etc.).
              </p>

              <p>
                Fox Repair ne saurait être tenue responsable des erreurs,
                inexactitudes ou omissions présentes dans les documents générés
                par l'Utilisateur.
              </p>

              <p>
                L'Utilisateur s'engage à respecter la législation en vigueur,
                notamment en matière de TVA, facturation, protection des données
                personnelles et droit de la consommation.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="site-legal-block">
              <h2>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                5. Protection des données personnelles
              </h2>

              <p>
                Fox Repair s'engage à protéger les données personnelles de
                l'Utilisateur conformément au Règlement Général sur la Protection
                des Données (RGPD) et à la loi Informatique et Libertés.
              </p>

              <p>
                Les données collectées sont utilisées exclusivement pour la
                fourniture du service XOpus et ne sont jamais cédées à des tiers à
                des fins commerciales.
              </p>

              <p>
                Pour plus de détails sur la gestion de vos données, consultez
                notre{" "}
                <a href="/confidentialite">Politique de Confidentialité</a>.
              </p>

              <p>
                L'Utilisateur dispose d'un droit d'accès, de rectification, de
                suppression et d'opposition sur ses données personnelles, qu'il
                peut exercer à tout moment en contactant{" "}
                <a href="mailto:rgpd@xopus.fr">rgpd@xopus.fr</a>.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="site-legal-block">
              <h2>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                6. Propriété intellectuelle
              </h2>

              <p>
                Le logiciel XOpus, son code source, son interface utilisateur, son
                logo, ses textes, ses images et tous les éléments qui le composent
                sont la propriété exclusive de <strong>Fox Repair</strong> et sont
                protégés par le droit de la propriété intellectuelle.
              </p>

              <p>
                Toute reproduction, représentation, modification, distribution ou
                exploitation du logiciel, même partielle, sans autorisation écrite
                préalable de Fox Repair, est strictement interdite et constitue
                une contrefaçon passible de sanctions pénales.
              </p>

              <p>
                L'Utilisateur bénéficie uniquement d'un droit d'usage non
                exclusif et non transférable du logiciel, limité à la durée de son
                abonnement.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="site-legal-block">
              <h2>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
                7. Disponibilité et maintenance
              </h2>

              <p>
                Fox Repair s'engage à assurer la disponibilité du service{" "}
                <strong>24h/24 et 7j/7</strong>, sauf interruptions pour
                maintenance programmée ou urgente.
              </p>

              <p>
                Les maintenances programmées sont annoncées à l'avance par email
                et/ou notification dans l'application. Fox Repair s'efforce de
                planifier ces maintenances en dehors des heures de forte
                affluence.
              </p>

              <p>
                En cas d'incident technique majeur, Fox Repair met tout en œuvre
                pour rétablir le service dans les meilleurs délais et informer les
                utilisateurs de l'avancement de la résolution.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="site-legal-block">
              <h2>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                8. Limitation de responsabilité
              </h2>

              <p>
                Fox Repair met tout en œuvre pour fournir un service fiable,
                sécurisé et conforme à la législation. Cependant, sa
                responsabilité ne peut être engagée dans les cas suivants :
              </p>

              <ul className="site-list">
                <li>
                  Dommages directs ou indirects résultant de l'utilisation ou de
                  l'impossibilité d'utiliser XOpus
                </li>
                <li>
                  Perte de données due à une erreur de manipulation de
                  l'Utilisateur
                </li>
                <li>
                  Interruption de service due à un cas de force majeure (panne de
                  réseau, cyberattaque, catastrophe naturelle)
                </li>
                <li>
                  Inexactitudes ou erreurs dans les documents générés par
                  l'Utilisateur
                </li>
                <li>
                  Conséquences fiscales ou légales résultant d'une mauvaise
                  utilisation du logiciel par l'Utilisateur
                </li>
              </ul>

              <p>
                En tout état de cause, la responsabilité totale de Fox Repair,
                toutes causes confondues, est limitée au montant total versé par
                l'Utilisateur au cours des <strong>12 derniers mois</strong>{" "}
                précédant le litige.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="site-legal-block">
              <h2>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 20V10" />
                  <path d="M12 20V4" />
                  <path d="M6 20v-6" />
                </svg>
                9. Suspension et résiliation
              </h2>

              <h3>9.1. Résiliation par l'Utilisateur</h3>
              <p>
                L'Utilisateur peut résilier son compte à tout moment depuis son
                espace personnel, sans préavis ni justification.
              </p>

              <h3>9.2. Suspension ou résiliation par Fox Repair</h3>
              <p>
                Fox Repair se réserve le droit de suspendre ou résilier un compte
                utilisateur, sans préavis ni indemnité, en cas de :
              </p>
              <ul className="site-list">
                <li>Violation des présentes CGU</li>
                <li>Non-paiement de l'abonnement après relance</li>
                <li>Utilisation frauduleuse ou abusive du service</li>
                <li>Activité illégale ou préjudiciable à Fox Repair ou à d'autres utilisateurs</li>
                <li>Création de comptes multiples pour contourner les limitations</li>
              </ul>

              <h3>9.3. Conséquences de la résiliation</h3>
              <p>
                Après résiliation, l'Utilisateur dispose d'un délai de{" "}
                <strong>30 jours</strong> pour exporter ses données. Passé ce
                délai, toutes les données pourront être définitivement supprimées.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="site-legal-block">
              <h2>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                10. Modification des CGU
              </h2>

              <p>
                Fox Repair se réserve le droit de modifier les présentes CGU à
                tout moment pour les adapter aux évolutions du service ou de la
                législation.
              </p>

              <p>
                Toute modification sera communiquée aux Utilisateurs par email
                et/ou notification dans l'application au moins <strong>30 jours</strong> avant
                son entrée en vigueur.
              </p>

              <p>
                L'utilisation continue du service après l'entrée en vigueur des
                nouvelles CGU vaut acceptation de celles-ci.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="site-legal-block">
              <h2>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                11. Droit applicable et litiges
              </h2>

              <p>
                Les présentes CGU sont régies par le droit français. En cas de
                litige, les parties chercheront en priorité une solution amiable.
              </p>

              <p>
                À défaut d'accord, le litige sera porté devant les tribunaux
                français compétents.
              </p>
            </div>
          </Reveal>

          <div className="site-legal-divider" />

          <Reveal>
            <div className="site-legal-cta">
              <p className="site-legal-cta-text">
                Pour toute question concernant nos Conditions Générales d'Utilisation :
              </p>
              <div className="site-legal-cta-btns">
                <a
                  href="mailto:support@xopus.fr"
                  className="site-btn site-btn-primary"
                >
                  Contacter le support
                </a>
                <a href="/cgv" className="site-btn site-btn-ghost">
                  Consulter les CGV
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
