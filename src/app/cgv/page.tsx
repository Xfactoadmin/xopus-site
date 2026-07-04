import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV) — XOpus",
  description:
    "Conditions générales de vente du logiciel de facturation XOpus. Tarifs, abonnement, modalités de paiement et résiliation.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CGVPage() {
  return (
    <>
      <SiteHeader />

      <main className="site-main">
        <div className="site-legal">
          <Reveal>
            <h1>Conditions Générales de Vente 💼</h1>
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
              Les présentes Conditions Générales de Vente (CGV) régissent la
              souscription et l'utilisation du logiciel de facturation{" "}
              <strong>XOpus</strong>, édité par <strong>Fox Repair</strong>,
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                1. Objet
              </h2>

              <p>
                Les présentes CGV ont pour objet de définir les conditions dans
                lesquelles <strong>Fox Repair</strong> fournit l'accès au
                logiciel <strong>XOpus</strong>, une solution SaaS (Software as a
                Service) de facturation et gestion commerciale destinée aux
                artisans, indépendants et TPE.
              </p>

              <p>
                Toute souscription à XOpus implique l'acceptation sans réserve
                des présentes CGV par le Client.
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
                  <path d="M2 12h20" />
                </svg>
                2. Définitions
              </h2>

              <ul className="site-list">
                <li>
                  <strong>Client :</strong> Toute personne physique ou morale
                  utilisant le service XOpus
                </li>
                <li>
                  <strong>Abonnement :</strong> Engagement contractuel donnant
                  accès au logiciel XOpus
                </li>
                <li>
                  <strong>Service :</strong> L'ensemble des fonctionnalités
                  offertes par la plateforme XOpus
                </li>
                <li>
                  <strong>Éditeur :</strong> Fox Repair, représenté par Gabin
                  NICAISE
                </li>
                <li>
                  <strong>Plateforme :</strong> L'application web accessible via
                  app.xopus.fr
                </li>
              </ul>
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
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                3. Tarifs et paiement
              </h2>

              <h3>3.1. Tarification</h3>
              <p>
                L'abonnement à XOpus est facturé au tarif de{" "}
                <strong>9,99 € HT/mois</strong> (soit 11,99 € TTC avec TVA à 20%
                en France métropolitaine).
              </p>

              <p>
                Ce tarif inclut l'accès à toutes les fonctionnalités du logiciel
                :
              </p>
              <ul className="site-list">
                <li>Facturation illimitée conforme à la loi anti-fraude TVA</li>
                <li>Génération automatique de Factur-X (e-facture 2026)</li>
                <li>Devis et factures illimités</li>
                <li>Paiements en ligne (Stripe intégré)</li>
                <li>Tableau de bord et statistiques</li>
                <li>Espace client personnalisé</li>
                <li>Support client par email</li>
              </ul>

              <h3>3.2. Essai gratuit</h3>
              <p>
                Tout nouveau Client bénéficie d'une période d'essai gratuite de{" "}
                <strong>14 jours</strong>, sans engagement et sans nécessité de
                renseigner de moyen de paiement.
              </p>

              <p>
                À l'issue de cette période, le Client peut souscrire à un
                abonnement payant ou cesser d'utiliser le service sans
                pénalité.
              </p>

              <h3>3.3. Modalités de paiement</h3>
              <p>
                Les abonnements sont payables mensuellement par prélèvement
                automatique via carte bancaire. Le paiement est effectué par le
                biais de notre prestataire de paiement sécurisé{" "}
                <strong>Stripe</strong>.
              </p>

              <p>
                La première facturation intervient à la fin de la période
                d'essai gratuit. Les facturations suivantes sont effectuées
                automatiquement chaque mois à la date anniversaire de
                souscription.
              </p>

              <h3>3.4. Modification des tarifs</h3>
              <p>
                Fox Repair se réserve le droit de modifier ses tarifs à tout
                moment. Toute modification tarifaire sera communiquée au Client
                par email au moins <strong>30 jours avant</strong> son entrée en
                vigueur.
              </p>

              <p>
                En cas de désaccord, le Client peut résilier son abonnement avant
                l'entrée en vigueur du nouveau tarif, conformément aux conditions
                de l'article 6.
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
                4. Inscription et activation du compte
              </h2>

              <h3>4.1. Inscription</h3>
              <p>
                L'inscription à XOpus se fait directement en ligne via le
                formulaire disponible sur <strong>app.xopus.fr/register</strong>.
              </p>

              <p>Le Client doit fournir les informations suivantes :</p>
              <ul className="site-list">
                <li>Nom et prénom (ou raison sociale)</li>
                <li>Adresse email valide</li>
                <li>Mot de passe sécurisé</li>
                <li>
                  Informations d'entreprise (SIRET, adresse, statut juridique)
                </li>
              </ul>

              <h3>4.2. Validation du compte</h3>
              <p>
                Une fois l'inscription effectuée, le Client reçoit un email de
                confirmation contenant un lien d'activation. Le compte est activé
                dès que le Client clique sur ce lien.
              </p>

              <h3>4.3. Responsabilité du Client</h3>
              <p>
                Le Client s'engage à fournir des informations exactes,
                complètes et à jour. Il est seul responsable de la
                confidentialité de ses identifiants de connexion (email et mot de
                passe).
              </p>

              <p>
                Toute utilisation du compte avec les identifiants du Client est
                présumée être effectuée par le Client lui-même.
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                5. Obligations de l'Éditeur
              </h2>

              <h3>5.1. Disponibilité du service</h3>
              <p>
                Fox Repair s'engage à fournir un accès au service disponible{" "}
                <strong>24h/24 et 7j/7</strong>, sauf en cas de :
              </p>
              <ul className="site-list">
                <li>Maintenance programmée (communiquée à l'avance)</li>
                <li>Maintenance d'urgence en cas de panne</li>
                <li>Force majeure ou événements indépendants de notre volonté</li>
              </ul>

              <p>
                Fox Repair s'efforce de garantir un taux de disponibilité
                supérieur à <strong>99,5%</strong> sur une base mensuelle.
              </p>

              <h3>5.2. Sécurité des données</h3>
              <p>
                Fox Repair met en œuvre toutes les mesures techniques et
                organisationnelles nécessaires pour assurer la sécurité et la
                confidentialité des données du Client, notamment :
              </p>
              <ul className="site-list">
                <li>Chiffrement SSL/TLS des communications</li>
                <li>Hébergement sécurisé chez Vercel et Supabase</li>
                <li>Sauvegardes automatiques quotidiennes</li>
                <li>Authentification sécurisée des comptes</li>
              </ul>

              <h3>5.3. Support client</h3>
              <p>
                Fox Repair fournit un support client par email à l'adresse{" "}
                <a href="mailto:support@xopus.fr">support@xopus.fr</a>.
              </p>
              <p>
                Les demandes sont traitées dans un délai de{" "}
                <strong>48 heures ouvrées</strong> maximum (hors week-ends et
                jours fériés).
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
                6. Résiliation et suspension
              </h2>

              <h3>6.1. Résiliation par le Client</h3>
              <p>
                Le Client peut résilier son abonnement à tout moment, sans
                préavis et sans frais, depuis son espace personnel dans les
                paramètres du compte.
              </p>

              <p>
                La résiliation prend effet à la fin de la période d'abonnement en
                cours. Aucun remboursement au prorata n'est effectué pour la
                période déjà payée.
              </p>

              <h3>6.2. Résiliation par l'Éditeur</h3>
              <p>
                Fox Repair se réserve le droit de résilier ou suspendre un
                compte en cas de :
              </p>
              <ul className="site-list">
                <li>Non-paiement de l'abonnement après rappel</li>
                <li>Utilisation frauduleuse ou abusive du service</li>
                <li>Violation des CGV ou des CGU</li>
                <li>Activité illégale ou contraire à la législation en vigueur</li>
              </ul>

              <p>
                En cas de résiliation pour faute du Client, aucun remboursement
                ne sera effectué.
              </p>

              <h3>6.3. Accès aux données après résiliation</h3>
              <p>
                Après la résiliation de l'abonnement, le Client dispose d'un
                délai de <strong>30 jours</strong> pour exporter ses données
                (factures, clients, produits). Passé ce délai, les données
                pourront être supprimées de nos serveurs.
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
                7. Limitation de responsabilité
              </h2>

              <p>
                Fox Repair met tout en œuvre pour fournir un service fiable et
                sécurisé. Toutefois, sa responsabilité ne saurait être engagée
                en cas de :
              </p>

              <ul className="site-list">
                <li>
                  Dommages indirects résultant de l'utilisation ou de
                  l'impossibilité d'utiliser le service
                </li>
                <li>Perte de données due à une erreur du Client</li>
                <li>
                  Interruption due à un cas de force majeure ou à un événement
                  indépendant de notre volonté
                </li>
                <li>
                  Erreurs ou inexactitudes dans les documents générés par le
                  Client lui-même
                </li>
              </ul>

              <p>
                En tout état de cause, la responsabilité de Fox Repair est
                limitée au montant total payé par le Client au cours des{" "}
                <strong>12 derniers mois</strong> précédant le sinistre.
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
                8. Propriété intellectuelle
              </h2>

              <p>
                Le logiciel XOpus, son code source, son interface, sa structure,
                son contenu et tous les éléments qui le composent sont la
                propriété exclusive de <strong>Fox Repair</strong>.
              </p>

              <p>
                Le Client bénéficie uniquement d'un droit d'usage personnel et
                non exclusif du logiciel, limité à la durée de son abonnement.
                Ce droit ne peut en aucun cas être cédé, sous-licencié ou
                transféré à un tiers.
              </p>

              <p>
                Toute reproduction, représentation, modification, distribution ou
                exploitation du logiciel ou de ses composants sans autorisation
                écrite préalable de Fox Repair est strictement interdite et
                constitue une contrefaçon passible de sanctions pénales.
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
                9. Droit applicable et litiges
              </h2>

              <p>
                Les présentes CGV sont régies par le droit français. En cas de
                litige, et à défaut d'accord amiable, le différend sera porté
                devant les tribunaux compétents français.
              </p>

              <p>
                Conformément à l'article L.612-1 du Code de la consommation, en
                cas de litige, le Client peut recourir gratuitement à un
                médiateur de la consommation.
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
                10. Évolution des CGV
              </h2>

              <p>
                Fox Repair se réserve le droit de modifier les présentes CGV à
                tout moment. Toute modification sera communiquée au Client par
                email et/ou notification dans l'application.
              </p>

              <p>
                Les nouvelles CGV entreront en vigueur <strong>30 jours</strong>{" "}
                après leur notification. L'utilisation continue du service après
                cette date vaut acceptation des nouvelles CGV.
              </p>
            </div>
          </Reveal>

          <div className="site-legal-divider" />

          <Reveal>
            <div className="site-legal-cta">
              <p className="site-legal-cta-text">
                Pour toute question concernant nos Conditions Générales de Vente
                :
              </p>
              <div className="site-legal-cta-btns">
                <a
                  href="mailto:support@xopus.fr"
                  className="site-btn site-btn-primary"
                >
                  Contacter le support
                </a>
                <a href="/cgu" className="site-btn site-btn-ghost">
                  Consulter les CGU
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
