import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Politique de Confidentialité RGPD | XOpus",
  description:
    "Politique de confidentialité du logiciel de facturation XOpus. Collecte de données, droits RGPD, cookies, transferts Stripe (US), durée de conservation et réclamation CNIL.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://xopus.fr/politique-confidentialite" },
  openGraph: {
    title: "Politique de Confidentialité RGPD | XOpus",
    description:
      "Politique de confidentialité et RGPD du logiciel de facturation XOpus.",
    url: "https://xopus.fr/politique-confidentialite",
    siteName: "XOpus",
    locale: "fr_FR",
    type: "website",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <SiteHeader />
      <main className="site-main" style={{ paddingTop: 100 }}>
        {/* ── Hero ── */}
        <section
          style={{
            textAlign: "center",
            padding: "0 24px 4rem",
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <Reveal>
            <span className="site-eyebrow">RGPD</span>
            <h1 className="site-title" style={{ marginTop: 12 }}>
              Politique de{" "}
              <span className="site-title-accent">confidentialité</span>
            </h1>
            <div className="site-tricolor" style={{ margin: "20px auto 24px" }} />
            <p
              className="site-lead"
              style={{ maxWidth: 620, margin: "0 auto" }}
            >
              XOpus SAS s&apos;engage à protéger la vie privée de ses
              utilisateurs. Cette politique explique quelles données nous
              collectons, pourquoi et comment vous pouvez exercer vos
              droits.
            </p>
          </Reveal>
        </section>

        {/* ── Contenu ── */}
        <div
          style={{
            maxWidth: 780,
            margin: "0 auto",
            padding: "0 24px 6rem",
            lineHeight: 1.8,
            fontSize: 15,
          }}
        >
          {/* 1. Responsable du traitement */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                1. Responsable du traitement
              </h2>
              <p>
                Le responsable du traitement des données personnelles
                collectées dans le cadre de l&apos;utilisation du site{" "}
                <a href="https://xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>xopus.fr</a> et du
                logiciel XOpus est :
              </p>
              <div className="site-card" style={{ padding: 28, marginTop: 12 }}>
                <p><strong>XOpus SAS</strong></p>
                <p>42 Rue de la Facturation, 75008 Paris, France</p>
                <p>Email : <a href="mailto:contact@xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>contact@xopus.fr</a></p>
                <p>SIRET : 987 654 321 00012</p>
              </div>
              <p style={{ marginTop: 16 }}>
                XOpus SAS a désigné un Délégué à la Protection des
                Données (DPO) joignable à l&apos;adresse :{" "}
                <a href="mailto:dpo@xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>
                  dpo@xopus.fr
                </a>
                .
              </p>
            </section>
          </Reveal>

          {/* 2. Données collectées */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                2. Données collectées
              </h2>
              <p>
                Dans le cadre de l&apos;utilisation du Service, XOpus SAS
                collecte les catégories de données personnelles suivantes :
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Données d&apos;identification :</strong> nom, prénom,
                adresse email professionnelle, numéro de téléphone (facultatif),
                raison sociale, numéro SIRET, adresse du siège social.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Données de facturation :</strong> coordonnées
                bancaires (traitées par Stripe, non stockées par XOpus),
                historique des paiements, montants des abonnements.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Données d&apos;utilisation :</strong> données de
                navigation (pages visitées, durée de session, actions
                effectuées), logs de connexion (adresse IP, date et heure
                de connexion, type de navigateur et système
                d&apos;exploitation).
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Données du Service :</strong> factures créées,
                devis émis, contacts enregistrés, paramètres du compte.
                Ces données sont saisies et gérées par le Client dans le
                cadre de son activité professionnelle.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Données de support :</strong> échanges
                d&apos;emails ou de messages via le chat support, historique
                des demandes d&apos;assistance.
              </p>
            </section>
          </Reveal>

          {/* 3. Finalités du traitement */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                3. Finalités du traitement
              </h2>
              <p>
                Les données personnelles sont collectées et traitées pour
                les finalités suivantes :
              </p>
              <ul style={{ marginTop: 8, paddingLeft: 24 }}>
                <li><strong>Fourniture du Service :</strong> création et gestion du compte, délivraison des fonctionnalités de facturation, gestion des abonnements.</li>
                <li><strong>Facturation et paiement :</strong> encaissement des abonnements, émission des factures, gestion des impayés.</li>
                <li><strong>Support client :</strong> réponse aux demandes d&apos;assistance, résolution des incidents techniques.</li>
                <li><strong>Amélioration du Service :</strong> analyse statistique de l&apos;utilisation, détection et correction de bugs, développement de nouvelles fonctionnalités.</li>
                <li><strong>Communication :</strong> envoi de notifications relatives au Service (mises à jour, maintenance, changements tarifaires), et, avec votre consentement, de communications commerciales.</li>
                <li><strong>Obligations légales :</strong> respect des obligations fiscales et comptables, réponse aux demandes des autorités compétentes.</li>
                <li><strong>Sécurité :</strong> détection et prévention des fraudes, protection contre les attaques informatiques.</li>
              </ul>
            </section>
          </Reveal>

          {/* 4. Base légale */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                4. Base légale du traitement
              </h2>
              <p>
                Chaque traitement de données personnelles repose sur l&apos;une
                des bases légales suivantes, conformément à l&apos;article 6
                du RGPD :
              </p>
              <ul style={{ marginTop: 8, paddingLeft: 24 }}>
                <li><strong>Exécution du contrat</strong> (article 6.1.b) : le traitement est nécessaire à l&apos;exécution du contrat d&apos;abonnement au Service.</li>
                <li><strong>Consentement</strong> (article 6.1.a) : pour les finalités nécessitant votre accord exprès (newsletter, cookies analytiques).</li>
                <li><strong>Intérêt légitime</strong> (article 6.1.f) : pour l&apos;amélioration du Service, la sécurité et la prévention de la fraude.</li>
                <li><strong>Obligation légale</strong> (article 6.1.c) : pour le respect de nos obligations fiscales, comptables et judiciaires.</li>
              </ul>
            </section>
          </Reveal>

          {/* 5. Destinataires des données */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                5. Destinataires des données
              </h2>
              <p>
                Les données personnelles collectées sont destinées
                exclusivement à XOpus SAS et à ses sous-traitants
                intervenant dans la fourniture du Service :
              </p>
              <ul style={{ marginTop: 8, paddingLeft: 24 }}>
                <li><strong>Stripe, Inc.</strong> — traitement des paiements par carte bancaire (voir section 6 pour les transferts hors UE).</li>
                <li><strong>OVH SAS</strong> — hébergement des données sur des serveurs situés en France.</li>
                <li><strong>Services d&apos;emailing transactionnel</strong> — envoi des emails relatifs au Service (factures, notifications, relances).</li>
                <li><strong>Services d&apos;analyse web</strong> — mesure d&apos;audience anonymisée (Google Analytics ou équivalent).</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                XOpus ne vend jamais vos données personnelles à des tiers.
                Les données ne sont communiquées à des autorités publiques
                que sur demande judiciaire ou administrative, conformément
                à la législation en vigueur.
              </p>
            </section>
          </Reveal>

          {/* 6. Transferts hors UE */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                6. Transferts de données hors de l&apos;Union Européenne
              </h2>
              <p>
                L&apos;hébergement du site et du Service est assuré par OVH
                SAS, dont les serveurs sont exclusivement situés en France.
                Aucun transfert de données hors de l&apos;UE n&apos;est
                effectué pour l&apos;hébergement du Service.
              </p>
              <p style={{ marginTop: 12 }}>
                Toutefois, le traitement des paiements par carte bancaire
                est assuré par <strong>Stripe, Inc.</strong>, dont le siège
                social est situé aux États-Unis. Ce transfert vers un pays
                tiers est encadré par les{" "}
                <strong>Clauses Contractuelles Types (CCT)</strong> de la
                Commission Européennes (décision d&apos;exécution (UE)
                2021/914 du 4 juin 2021), que Stripe a adoptées. Ces
                clauses garantissent un niveau de protection adéquat de vos
                données personnelles.
              </p>
              <p style={{ marginTop: 12 }}>
                Vous pouvez obtenir une copie de ces clauses contractuelles
                en contactant{" "}
                <a href="mailto:dpo@xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>
                  dpo@xopus.fr
                </a>
                .
              </p>
            </section>
          </Reveal>

          {/* 7. Durée de conservation */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                7. Durée de conservation des données
              </h2>
              <p>
                Les données personnelles sont conservées pour des durées
                variables selon la nature des données et la finalité du
                traitement :
              </p>
              <ul style={{ marginTop: 8, paddingLeft: 24 }}>
                <li><strong>Données de compte :</strong> conservation pendant toute la durée de la relation contractuelle, puis pendant 3 ans après la dernière connexion active (prescription quinquennale).</li>
                <li><strong>Données de facturation :</strong> conservation pendant 10 ans conformément aux obligations légales comptables et fiscales (articles L. 123-22 et L. 102 B du Livre des Procédures Fiscales).</li>
                <li><strong>Données de navigation et logs :</strong> conservation pendant 13 mois maximum (durée recommandée par la CNIL pour les cookies et traceurs).</li>
                <li><strong>Données de support :</strong> conservation pendant 3 ans après la dernière interaction.</li>
                <li><strong>Données de consentement :</strong> conservation pendant 3 ans à compter de l&apos;expression du consentement.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                À l&apos;expiration de ces durées, les données sont
                supprimées ou anonymisées de manière irréversible.
              </p>
            </section>
          </Reveal>

          {/* 8. Droits RGPD */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                8. Vos droits RGPD
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des
                Données (UE) 2016/679, vous disposez des droits suivants
                sur vos données personnelles :
              </p>
              <div className="site-card" style={{ padding: 28, marginTop: 12 }}>
                <p><strong>Droit d&apos;accès</strong> (article 15 du RGPD) : obtenir la confirmation que vos données sont traitées et en obtenir une copie.</p>
                <p style={{ marginTop: 8 }}><strong>Droit de rectification</strong> (article 16) : corriger les données inexactes ou compléter les données incomplètes.</p>
                <p style={{ marginTop: 8 }}><strong>Droit à l&apos;effacement</strong> (article 17, « droit à l&apos;oubli ») : demander la suppression de vos données personnelles, sous réserve de nos obligations légales de conservation.</p>
                <p style={{ marginTop: 8 }}><strong>Droit à la limitation du traitement</strong> (article 18) : demander la suspension du traitement de vos données dans certaines circonstances.</p>
                <p style={{ marginTop: 8 }}><strong>Droit à la portabilité</strong> (article 20) : recevoir vos données dans un format structuré, couramment utilisé et lisible par machine, ou demander leur transmission à un autre responsable de traitement.</p>
                <p style={{ marginTop: 8 }}><strong>Droit d&apos;opposition</strong> (article 21) : vous opposer au traitement de vos données fondé sur l&apos;intérêt légitime, y compris le profilage.</p>
                <p style={{ marginTop: 8 }}><strong>Droit de retrait du consentement</strong> : à tout moment, sans affecter la licéité du traitement effectué avant le retrait.</p>
                <p style={{ marginTop: 8 }}><strong>Droit de définir des directives</strong> (article 21-1) : définir des directives relatives à la conservation et à la communication de vos données après votre décès.</p>
              </div>
              <p style={{ marginTop: 16 }}>
                Pour exercer vos droits, envoyez une demande accompagnée
                d&apos;une copie de votre pièce d&apos;identité à l&apos;adresse{" "}
                <a href="mailto:dpo@xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>
                  dpo@xopus.fr
                </a>
                . Nous nous engageons à répondre dans un délai maximum
                de 30 jours.
              </p>
            </section>
          </Reveal>

          {/* 9. Sécurité */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                9. Sécurité des données
              </h2>
              <p>
                XOpus SAS met en œuvre des mesures techniques et
                organisationnelles appropriées pour protéger les données
                personnelles contre la perte, l&apos;utilisation abusive,
                l&apos;accès non autorisé, la divulgation, l&apos;altération
                ou la destruction. Ces mesures comprennent notamment :
              </p>
              <ul style={{ marginTop: 8, paddingLeft: 24 }}>
                <li>Chiffrement TLS 1.3 de toutes les communications entre le navigateur et les serveurs.</li>
                <li>Chiffrement au repos des données sensibles (AES-256).</li>
                <li>Authentification sécurisée et gestion rigoureuse des accès.</li>
                <li>Sauvegardes régulières et testées des données.</li>
                <li>Surveillance continue des infrastructures et alertes en cas d&apos;incident de sécurité.</li>
                <li>Politique de mots de passe forte imposée aux utilisateurs.</li>
                <li>Audits de sécurité réguliers et tests de pénétration.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                En cas de violation de données personnelles présentant un
                risque pour vos droits et libertés, nous nous engageons à
                vous en informer dans les meilleurs délais et à notifier
                la CNIL conformément à l&apos;article 33 du RGPD.
              </p>
            </section>
          </Reveal>

          {/* 10. Cookies */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                10. Cookies et traceurs
              </h2>
              <p>
                Le site xopus.fr utilise des cookies et traceurs pour
                assurer son bon fonctionnement et améliorer
                l&apos;expérience utilisateur. Voici le détail de leur
                utilisation :
              </p>
              <div className="site-card" style={{ padding: 28, marginTop: 12 }}>
                <p><strong>Cookies strictement nécessaires :</strong> Ces cookies sont indispensables au fonctionnement du site et du service de connexion. Ils ne nécessitent pas de consentement. Exemples : cookie de session, cookie d&apos;authentification, cookie de panier.</p>
                <p style={{ marginTop: 12 }}><strong>Cookies analytiques :</strong> Ces cookies nous permettent de mesurer l&apos;audience du site et d&apos;analyser la navigation des utilisateurs. Les données collectées sont anonymisées et agrégées. Exemples : Google Analytics (avec anonymisation de l&apos;IP activée), Matomo.</p>
                <p style={{ marginTop: 12 }}><strong>Cookies de préférence :</strong> Ces cookies mémorisent vos choix (langue, paramètres d&apos;affichage) pour personnaliser votre expérience.</p>
              </div>
              <p style={{ marginTop: 16 }}>
                <strong>Gestion de vos préférences :</strong> Vous pouvez
                à tout moment modifier vos préférences en matière de
                cookies en accédant au panneau de gestion des cookies
                accessible depuis le bandeau affiché lors de votre première
                visite, ou en configurant les paramètres de votre
                navigateur.
              </p>
              <p style={{ marginTop: 12 }}>
                La désactivation de certains cookies peut affecter votre
                expérience de navigation. Les cookies strictement
                nécessaires ne peuvent pas être désactivés tant que le
                site est actif.
              </p>
            </section>
          </Reveal>

          {/* 11. Réclamation CNIL */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                11. Réclamation auprès de la CNIL
              </h2>
              <p>
                Si vous estimez que le traitement de vos données
                personnelles ne respecte pas la réglementation en
                vigueur, vous avez le droit d&apos;introduire une
                réclamation auprès de la Commission Nationale de
                l&apos;Informatique et des Libertés (CNIL) :
              </p>
              <div className="site-card" style={{ padding: 28, marginTop: 12 }}>
                <p><strong>CNIL</strong></p>
                <p>3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</p>
                <p>Téléphone : 01 53 73 22 22</p>
                <p>
                  Site web :{" "}
                  <a href="https://www.cnil.fr/fr/plaintes" style={{ color: "#0055FF", fontWeight: 700 }} target="_blank" rel="noopener noreferrer">
                    www.cnil.fr/fr/plaintes
                  </a>
                </p>
              </div>
              <p style={{ marginTop: 16 }}>
                Nous vous encourageons toutefois à nous contacter en
                priorité à l&apos;adresse{" "}
                <a href="mailto:dpo@xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>
                  dpo@xopus.fr
                </a>{" "}
                afin que nous puissions traiter votre réclamation dans les
                meilleurs délais.
              </p>
            </section>
          </Reveal>

          {/* 12. Mineurs */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                12. Mineurs
              </h2>
              <p>
                Le Service XOpus est destiné à un usage professionnel et
                n&apos;est pas conçu pour les personnes de moins de 18 ans.
                Nous ne collectons pas sciemment de données personnelles
                concernant des mineurs. Si nous apprenons qu&apos;une donnée
                personnelle relative à un mineur a été collectée sans le
                consentement d&apos;un parent ou tuteur légal, nous nous
                efforcerons de supprimer cette information dans les
                meilleurs délais.
              </p>
              <p style={{ marginTop: 12 }}>
                Si vous êtes parent ou tuteur légal et que vous pensez
                que votre enfant nous a communiqué des données
                personnelles, contactez-nous à{" "}
                <a href="mailto:dpo@xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>
                  dpo@xopus.fr
                </a>
                .
              </p>
            </section>
          </Reveal>

          {/* 13. Mise à jour */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                13. Mise à jour de la politique
              </h2>
              <p>
                La présente Politique de Confidentialité peut être
                modifiée à tout moment pour refléter les évolutions de
                notre pratique, de la réglementation ou de nos services.
                En cas de modification substantielle, nous nous
                efforcerons de vous en informer par email ou via une
                notification visible sur le site avant l&apos;entrée en
                vigueur des changements.
              </p>
              <p style={{ marginTop: 12 }}>
                Nous vous invitons à consulter régulièrement cette page
                afin de prendre connaissance des éventuelles modifications.
                La date de la dernière mise à jour est indiquée en bas de
                cette page.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Dernière mise à jour :</strong> 3 juillet 2026
              </p>
            </section>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
