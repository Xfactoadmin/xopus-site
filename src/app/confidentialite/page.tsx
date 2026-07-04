import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — XOpus",
  description:
    "Politique de confidentialité et protection des données personnelles de XOpus, conforme au RGPD. Transparence totale sur la collecte et l'utilisation de vos données.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConfidentialitePage() {
  return (
    <>
      <SiteHeader />

      <main className="site-main">
        <div className="site-legal">
          <Reveal>
            <h1>Politique de Confidentialité 🔒</h1>
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
              <span>Conforme RGPD 🇪🇺</span>
            </div>
          </Reveal>

          <Reveal>
            <p style={{ fontSize: 18, marginBottom: 40 }}>
              Chez <strong>Fox Repair</strong>, créateur de{" "}
              <strong>XOpus</strong>, nous accordons une importance primordiale
              à la protection de vos données personnelles. Cette politique de
              confidentialité vous explique comment nous collectons, utilisons,
              stockons et protégeons vos informations conformément au{" "}
              <strong>RGPD</strong> (Règlement Général sur la Protection des
              Données) et à la loi Informatique et Libertés.
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
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                1. Responsable du traitement des données
              </h2>

              <p>Le responsable du traitement des données personnelles est :</p>

              <p>
                <strong>Fox Repair</strong>
                <br />
                Représenté par : <strong>Gabin NICAISE</strong>
                <br />
                Adresse email :{" "}
                <a href="mailto:support@xopus.fr">support@xopus.fr</a>
              </p>

              <p>
                Pour toute question concernant la protection de vos données,
                vous pouvez nous contacter directement à l'adresse ci-dessus.
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
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
                2. Données personnelles collectées
              </h2>

              <p>
                Nous collectons uniquement les données nécessaires au
                fonctionnement du service XOpus et à l'amélioration de votre
                expérience utilisateur.
              </p>

              <h3>2.1. Données collectées lors de l'inscription</h3>
              <ul className="site-list">
                <li>
                  <strong>Identité :</strong> Nom, prénom, raison sociale
                </li>
                <li>
                  <strong>Contact :</strong> Adresse email, numéro de téléphone
                </li>
                <li>
                  <strong>Entreprise :</strong> SIRET, TVA intracommunautaire,
                  adresse professionnelle
                </li>
                <li>
                  <strong>Mot de passe :</strong> Crypté de manière irréversible
                </li>
              </ul>

              <h3>2.2. Données générées par l'utilisation du service</h3>
              <ul className="site-list">
                <li>
                  <strong>Facturation :</strong> Factures, devis, produits,
                  clients, montants
                </li>
                <li>
                  <strong>Paiements :</strong> Données de transaction (via
                  Stripe), mais jamais vos coordonnées bancaires complètes
                </li>
                <li>
                  <strong>Activité :</strong> Connexions, actions dans
                  l'application, logs techniques
                </li>
                <li>
                  <strong>Support :</strong> Échanges par email avec notre
                  équipe
                </li>
              </ul>

              <h3>2.3. Données techniques automatiquement collectées</h3>
              <ul className="site-list">
                <li>
                  <strong>Connexion :</strong> Adresse IP, type de navigateur,
                  système d'exploitation
                </li>
                <li>
                  <strong>Navigation :</strong> Pages consultées, durée de
                  visite
                </li>
                <li>
                  <strong>Cookies :</strong> Cookies de session, préférences
                  utilisateur (voir section 8)
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                3. Finalités et bases légales du traitement
              </h2>

              <p>
                Vos données personnelles sont collectées et traitées pour les
                finalités suivantes :
              </p>

              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginTop: 20,
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px 0",
                        fontWeight: 700,
                      }}
                    >
                      Finalité
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px 0",
                        fontWeight: 700,
                      }}
                    >
                      Base légale
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td style={{ padding: "12px 0" }}>
                      Fourniture du service XOpus
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      Exécution du contrat
                    </td>
                  </tr>
                  <tr
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td style={{ padding: "12px 0" }}>
                      Gestion des paiements et facturation
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      Exécution du contrat
                    </td>
                  </tr>
                  <tr
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td style={{ padding: "12px 0" }}>
                      Support client et assistance technique
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      Exécution du contrat
                    </td>
                  </tr>
                  <tr
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td style={{ padding: "12px 0" }}>
                      Respect des obligations légales (TVA, archivage)
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      Obligation légale
                    </td>
                  </tr>
                  <tr
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td style={{ padding: "12px 0" }}>
                      Amélioration du service et statistiques anonymisées
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      Intérêt légitime
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 0" }}>
                      Envoi d'emails marketing (newsletter, nouveautés)
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      Consentement (opt-in)
                    </td>
                  </tr>
                </tbody>
              </table>
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                4. Destinataires de vos données
              </h2>

              <p>
                Vos données personnelles sont destinées aux seuls services
                internes de Fox Repair dans le cadre de la fourniture du service
                XOpus.
              </p>

              <h3>4.1. Sous-traitants techniques</h3>
              <p>
                Nous faisons appel à des prestataires techniques de confiance
                pour héberger et sécuriser vos données :
              </p>

              <ul className="site-list">
                <li>
                  <strong>Vercel Inc.</strong> — Hébergement des serveurs et
                  infrastructure cloud (USA, avec transfert sécurisé RGPD)
                </li>
                <li>
                  <strong>Supabase Inc.</strong> — Base de données et
                  authentification (Singapour, avec transfert sécurisé RGPD)
                </li>
                <li>
                  <strong>Stripe Inc.</strong> — Processeur de paiement sécurisé
                  (USA, conforme PCI-DSS)
                </li>
                <li>
                  <strong>Amen.fr</strong> — Registrar du nom de domaine
                  (France)
                </li>
              </ul>

              <p>
                Ces prestataires agissent en qualité de sous-traitants et sont
                tenus par contrat de respecter la confidentialité et la sécurité
                de vos données.
              </p>

              <h3>4.2. Transferts hors Union Européenne</h3>
              <p>
                Certains de nos prestataires (Vercel, Supabase, Stripe) sont
                situés hors de l'Union Européenne. Ces transferts sont encadrés
                par des garanties appropriées conformes au RGPD :
              </p>
              <ul className="site-list">
                <li>
                  Clauses contractuelles types de la Commission européenne
                </li>
                <li>Certifications "Privacy Shield" ou équivalent</li>
                <li>Mécanismes de protection renforcée des données</li>
              </ul>

              <h3>4.3. Pas de revente de données</h3>
              <p>
                <strong>
                  Nous ne vendons jamais vos données personnelles à des tiers.
                </strong>{" "}
                Vos informations ne sont pas utilisées à des fins publicitaires
                par des sociétés tierces.
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
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                5. Durée de conservation des données
              </h2>

              <p>
                Nous conservons vos données uniquement pendant la durée
                nécessaire aux finalités pour lesquelles elles ont été
                collectées.
              </p>

              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginTop: 20,
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px 0",
                        fontWeight: 700,
                      }}
                    >
                      Type de données
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px 0",
                        fontWeight: 700,
                      }}
                    >
                      Durée de conservation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td style={{ padding: "12px 0" }}>
                      Données de compte (email, nom, entreprise)
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      Durée de l'abonnement + 30 jours après résiliation
                    </td>
                  </tr>
                  <tr
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td style={{ padding: "12px 0" }}>
                      Factures et documents comptables
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      10 ans (obligation légale)
                    </td>
                  </tr>
                  <tr
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td style={{ padding: "12px 0" }}>Données de paiement</td>
                    <td
                      style={{
                        padding: "12px 0",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      13 mois (recommandation PCI-DSS)
                    </td>
                  </tr>
                  <tr
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td style={{ padding: "12px 0" }}>
                      Logs techniques et statistiques
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      12 mois maximum
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 0" }}>Cookies et traceurs</td>
                    <td
                      style={{
                        padding: "12px 0",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      13 mois maximum
                    </td>
                  </tr>
                </tbody>
              </table>

              <p style={{ marginTop: 20 }}>
                À l'issue de ces durées, vos données sont soit supprimées, soit
                anonymisées de manière irréversible.
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
                6. Sécurité de vos données
              </h2>

              <p>
                Nous mettons en œuvre toutes les mesures techniques et
                organisationnelles appropriées pour protéger vos données
                personnelles contre tout accès non autorisé, perte, destruction
                ou altération.
              </p>

              <h3>6.1. Mesures techniques</h3>
              <ul className="site-list">
                <li>
                  <strong>Chiffrement SSL/TLS :</strong> Toutes les
                  communications entre votre navigateur et nos serveurs sont
                  chiffrées (HTTPS)
                </li>
                <li>
                  <strong>Chiffrement des mots de passe :</strong> Hachage
                  irréversible avec bcrypt (impossible de retrouver votre mot de
                  passe en clair)
                </li>
                <li>
                  <strong>Authentification sécurisée :</strong> Gestion des
                  sessions via Supabase Auth avec tokens JWT
                </li>
                <li>
                  <strong>Sauvegardes automatiques :</strong> Sauveg ardes
                  quotidiennes des données avec redondance géographique
                </li>
                <li>
                  <strong>Pare-feu et protection DDoS :</strong> Infrastructure
                  protégée contre les attaques réseau
                </li>
              </ul>

              <h3>6.2. Mesures organisationnelles</h3>
              <ul className="site-list">
                <li>
                  Accès aux données limité aux seuls membres de l'équipe Fox
                  Repair ayant besoin d'y accéder
                </li>
                <li>
                  Politique stricte de gestion des accès avec authentification à
                  deux facteurs (2FA)
                </li>
                <li>
                  Audits de sécurité réguliers et mises à jour des systèmes
                </li>
                <li>
                  Sensibilisation de l'équipe aux bonnes pratiques de sécurité
                  et RGPD
                </li>
              </ul>

              <h3>6.3. En cas de violation de données</h3>
              <p>
                En cas de violation de données personnelles susceptible
                d'engendrer un risque élevé pour vos droits et libertés, nous
                nous engageons à :
              </p>
              <ul className="site-list">
                <li>
                  Notifier la CNIL dans les <strong>72 heures</strong>
                </li>
                <li>Vous informer dans les meilleurs délais</li>
                <li>
                  Prendre toutes les mesures nécessaires pour limiter les
                  impacts
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                7. Vos droits sur vos données personnelles
              </h2>

              <p>
                Conformément au RGPD et à la loi Informatique et Libertés, vous
                disposez des droits suivants sur vos données personnelles :
              </p>

              <h3>7.1. Droit d'accès</h3>
              <p>
                Vous pouvez demander une copie de l'ensemble des données
                personnelles vous concernant que nous détenons.
              </p>

              <h3>7.2. Droit de rectification</h3>
              <p>
                Vous pouvez demander la correction de vos données si elles sont
                inexactes ou incomplètes. Vous pouvez également les modifier
                directement depuis votre espace personnel.
              </p>

              <h3>7.3. Droit à l'effacement ("droit à l'oubli")</h3>
              <p>
                Vous pouvez demander la suppression de vos données personnelles,
                sauf si nous sommes légalement tenus de les conserver (ex :
                factures pour obligations comptables).
              </p>

              <h3>7.4. Droit à la limitation du traitement</h3>
              <p>
                Vous pouvez demander de geler temporairement le traitement de
                vos données dans certaines circonstances (ex : contestation de
                l'exactitude des données).
              </p>

              <h3>7.5. Droit à la portabilité</h3>
              <p>
                Vous pouvez récupérer vos données dans un format structuré et
                couramment utilisé (JSON, CSV) pour les transférer vers un autre
                service.
              </p>

              <h3>7.6. Droit d'opposition</h3>
              <p>
                Vous pouvez vous opposer au traitement de vos données pour des
                motifs légitimes, notamment pour les emails marketing (lien de
                désinscription dans chaque email).
              </p>

              <h3>7.7. Retrait du consentement</h3>
              <p>
                Pour les traitements basés sur votre consentement (ex :
                newsletter), vous pouvez retirer ce consentement à tout moment.
              </p>

              <h3>7.8. Comment exercer vos droits ?</h3>
              <p>Pour exercer l'un de ces droits, vous pouvez :</p>
              <ul className="site-list">
                <li>
                  Nous contacter par email :{" "}
                  <a href="mailto:support@xopus.fr">support@xopus.fr</a>
                </li>
                <li>
                  Accéder aux paramètres de votre compte sur{" "}
                  <strong>app.xopus.fr</strong>
                </li>
              </ul>

              <p>
                Nous nous engageons à vous répondre dans un délai de{" "}
                <strong>30 jours</strong> maximum.
              </p>

              <h3>7.9. Droit de réclamation</h3>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous
                pouvez déposer une réclamation auprès de la CNIL (Commission
                Nationale de l'Informatique et des Libertés) :
              </p>
              <p>
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cnil.fr
                </a>
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
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                8. Cookies et traceurs
              </h2>

              <h3>8.1. Qu'est-ce qu'un cookie ?</h3>
              <p>
                Un cookie est un petit fichier texte stocké sur votre appareil
                lorsque vous visitez un site web. Les cookies permettent de
                mémoriser vos préférences et d'améliorer votre expérience de
                navigation.
              </p>

              <h3>8.2. Cookies utilisés sur XOpus</h3>
              <ul className="site-list">
                <li>
                  <strong>Cookies strictement nécessaires :</strong> Permettent
                  le fonctionnement de l'authentification et des sessions (durée
                  : 7 jours)
                </li>
                <li>
                  <strong>Cookies de préférences :</strong> Mémorisent vos choix
                  (langue, thème, etc.) (durée : 12 mois)
                </li>
                <li>
                  <strong>Cookies analytiques :</strong> Nous aident à
                  comprendre comment vous utilisez le site pour l'améliorer (si
                  vous avez donné votre consentement)
                </li>
              </ul>

              <p>
                <strong>
                  Nous n'utilisons pas de cookies publicitaires ou de cookies
                  tiers à des fins de tracking.
                </strong>
              </p>

              <h3>8.3. Gestion des cookies</h3>
              <p>
                Vous pouvez à tout moment refuser ou supprimer les cookies via
                les paramètres de votre navigateur. Cependant, cela peut
                affecter certaines fonctionnalités du site.
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
                9. Modifications de la politique de confidentialité
              </h2>

              <p>
                Nous pouvons être amenés à modifier cette politique de
                confidentialité pour refléter les évolutions de nos pratiques ou
                de la législation.
              </p>

              <p>
                Toute modification substantielle vous sera notifiée par email
                et/ou via une notification dans l'application au moins{" "}
                <strong>30 jours</strong> avant son entrée en vigueur.
              </p>

              <p>
                Nous vous encourageons à consulter régulièrement cette page pour
                rester informé de la manière dont nous protégeons vos données.
              </p>
            </div>
          </Reveal>

          <div className="site-legal-divider" />

          <Reveal>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 16, marginBottom: 24 }}>
                Pour toute question concernant la protection de vos données
                personnelles :
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="mailto:support@xopus.fr"
                  className="site-btn site-btn-primary"
                >
                  Contacter le DPO
                </a>
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-btn site-btn-ghost"
                >
                  Site de la CNIL
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
