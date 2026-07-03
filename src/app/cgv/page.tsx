import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV) | XOpus",
  description:
    "Conditions Générales de Vente du logiciel de facturation XOpus. Tarifs, paiements Stripe, essai gratuit 14 jours, résiliation, garanties et responsabilités.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://xopus.fr/cgv" },
  openGraph: {
    title: "Conditions Générales de Vente (CGV) | XOpus",
    description:
      "CGV du logiciel de facturation XOpus pour artisans, indépendants et TPE.",
    url: "https://xopus.fr/cgv",
    siteName: "XOpus",
    locale: "fr_FR",
    type: "website",
  },
};

export default function CGVPage() {
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
            <span className="site-eyebrow">Juridique</span>
            <h1 className="site-title" style={{ marginTop: 12 }}>
              Conditions Générales de{" "}
              <span className="site-title-accent">Vente</span>
            </h1>
            <div className="site-tricolor" style={{ margin: "20px auto 24px" }} />
            <p
              className="site-lead"
              style={{ maxWidth: 620, margin: "0 auto" }}
            >
              Les présentes Conditions Générales de Vente régissent les
              relations contractuelles entre XOpus SAS et ses clients dans le
              cadre de la fourniture du logiciel de facturation XOpus.
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
          {/* Article 1 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 1 — Objet
              </h2>
              <p>
                Les présentes Conditions Générales de Vente (ci-après les
                « CGV ») ont pour objet de définir les droits et obligations
                des parties dans le cadre de la vente en ligne des services
                d&apos;abonnement au logiciel de facturation XOpus, édité par
                la société XOpus SAS (ci-après le « Fournisseur » ou « XOpus
                »), proposés via le site{" "}
                <a href="https://xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>xopus.fr</a> et
                l&apos;application accessible à{" "}
                <a href="https://app.xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>app.xopus.fr</a>.
              </p>
              <p style={{ marginTop: 12 }}>
                Toute souscription à un abonnement XOpus implique
                l&apos;acceptation sans réserve par le client des présentes CGV.
                XOpus se réserve le droit de modifier ces CGV à tout moment.
                Les CGV applicables sont celles en vigueur à la date de la
                souscription par le client.
              </p>
            </section>
          </Reveal>

          {/* Article 2 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 2 — Définitions
              </h2>
              <p>
                <strong>« Client »</strong> : toute personne physique ou
                morale qui souscrit à un abonnement XOpus aux fins
                professionnelles, en tant qu&apos;artisan, indépendant, TPE
                ou profession libérale.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>« Service »</strong> : l&apos;ensemble des
                fonctionnalités du logiciel de facturation XOpus accessibles
                en ligne via l&apos;URL{" "}
                <a href="https://app.xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>app.xopus.fr</a>,
                telles que décrites sur la page{" "}
                <a href="/fonctionnalites" style={{ color: "#0055FF", fontWeight: 700 }}>Fonctionnalités</a>.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>« Abonnement »</strong> : le contrat commercial
                conclu entre le Client et XOpus donnant accès au Service pour
                la durée et au tarif convenus.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>« Essai gratuit »</strong> : la période
                d&apos;évaluation de 14 jours offrant un accès complet au
                Service sans engagement financier.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>« Données du Client »</strong> : l&apos;ensemble des
                données saisies, générées ou stockées par le Client dans le
                cadre de l&apos;utilisation du Service (factures, contacts,
                paramètres, etc.).
              </p>
            </section>
          </Reveal>

          {/* Article 3 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 3 — Inscription et compte utilisateur
              </h2>
              <p>
                Pour accéder au Service, le Client doit créer un compte
                utilisateur en fournissant des informations exactes et
                à jour : nom, prénom, adresse email professionnelle, raison
                sociale et numéro SIRET.
              </p>
              <p style={{ marginTop: 12 }}>
                Le Client s&apos;engage à maintenir la confidentialité de ses
                identifiants de connexion et à informer immédiatement XOpus
                de toute utilisation non autorisée de son compte. XOpus ne
                saurait être tenu responsable des dommages résultant d&apos;une
                utilisation non autorisée du compte du Client.
              </p>
              <p style={{ marginTop: 12 }}>
                Le Client garantit que les informations fournies lors de
                l&apos;inscription sont exactes et ne portent pas atteinte aux
                droits d&apos;un tiers. XOpus se réserve le droit de suspendre
                ou de supprimer le compte d&apos;un Client en cas de
                non-respect de cette obligation.
              </p>
            </section>
          </Reveal>

          {/* Article 4 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 4 — Services et fonctionnalités
              </h2>
              <p>
                Le Service XOpus comprend notamment les fonctionnalités
                suivantes, dont la liste n&apos;est pas exhaustive :
              </p>
              <ul style={{ marginTop: 8, paddingLeft: 24 }}>
                <li>Création et envoi de factures conformes à la législation française et à la loi anti-fraude TVA.</li>
                <li>Gestion des devis, avoirs et notes de crédit.</li>
                <li>Suivi des paiements et relances automatiques.</li>
                <li>Gestion de la TVA et déclarations mensuelles ou trimestrielles.</li>
                <li>Tableau de bord et statistiques de chiffre d&apos;affaires.</li>
                <li>Import et export de données au format CSV et PDF.</li>
                <li>Support client par email et chat.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                XOpus se réserve le droit de modifier, ajouter ou supprimer
                des fonctionnalités à tout moment, en s&apos;efforçant
                d&apos;informer le Client au préalable. Les évolutions
                majeures feront l&apos;objet d&apos;une communication
                spécifique.
              </p>
            </section>
          </Reveal>

          {/* Article 5 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 5 — Tarifs et facturation
              </h2>
              <p>
                Les tarifs du Service sont ceux en vigueur au jour de la
                souscription, tels qu&apos;indiqués sur la page{" "}
                <a href="/tarifs" style={{ color: "#0055FF", fontWeight: 700 }}>Tarifs</a>{" "}
                du site xopus.fr. Tous les prix sont indiqués en euros (€)
                toutes taxes comprises (TTC).
              </p>
              <p style={{ marginTop: 12 }}>
                L&apos;abonnement XOpus est facturé mensuellement à
                hauteur de <strong>9,99 €/mois TTC</strong>. Le premier
                prélèvement intervient à l&apos;issue de la période d&apos;essai
                gratuit de 14 jours, sauf résiliation anticipée par le
                Client.
              </p>
              <p style={{ marginTop: 12 }}>
                La facturation est automatique et récurrente. Chaque
                prélèvement fait l&apos;objet d&apos;une facture électronique
                transmise par email au Client et disponible dans son
                espace personnel.
              </p>
              <p style={{ marginTop: 12 }}>
                XOpus se réserve le droit de modifier ses tarifs à tout
                moment. En cas de hausse de tarif, le Client sera informé
                au minimum 30 jours avant l&apos;entrée en vigueur de la
                nouvelle tarification. Le Client disposera alors d&apos;un
                droit de résiliation anticipée sans frais.
              </p>
            </section>
          </Reveal>

          {/* Article 6 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 6 — Paiement et Stripe
              </h2>
              <p>
                Le paiement des abonnements s&apos;effectue par carte bancaire
                via la plateforme sécurisée{" "}
                <a href="https://stripe.com" style={{ color: "#0055FF", fontWeight: 700 }} target="_blank" rel="noopener noreferrer">
                  Stripe
                </a>
                . XOpus SAS ne stocke jamais les données bancaires du
                Client. Le traitement des paiements est entièrement
                assuré par Stripe, conforme aux normes PCI-DSS de niveau 1.
              </p>
              <p style={{ marginTop: 12 }}>
                Les cartes acceptées sont : Visa, Mastercard et American
                Express. Le prélèvement est effectué automatiquement à
                chaque échéance mensuelle.
              </p>
              <p style={{ marginTop: 12 }}>
                En cas de rejet de paiement, le Client est notifié par
                email. Un délai de 7 jours est accordé pour régulariser
                la situation. Passé ce délai, l&apos;accès au Service peut
                être suspendu. En cas de non-paiement après une relance
                de 14 jours, l&apos;abonnement est automatiquement
                résilié.
              </p>
              <p style={{ marginTop: 12 }}>
                Le Client autorise XOpus à effectuer les prélèvements
                récurrents sur la carte bancaire communiquée lors de
                l&apos;inscription.
              </p>
            </section>
          </Reveal>

          {/* Article 7 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 7 — Essai gratuit
              </h2>
              <p>
                XOpus offre un essai gratuit de{" "}
                <strong>14 jours</strong> permettant au Client de tester
                l&apos;ensemble des fonctionnalités du Service sans
                engagement financier.
              </p>
              <p style={{ marginTop: 12 }}>
                Aucune information de paiement n&apos;est requise pour
                démarrer l&apos;essai gratuit. À l&apos;issue de la période
                d&apos;essai, le Client sera invité à souscrire un
                abonnement payant pour continuer à utiliser le Service.
              </p>
              <p style={{ marginTop: 12 }}>
                Les Données du Client créées pendant la période d&apos;essai
                sont conservées pendant 30 jours après l&apos;expiration de
                l&apos;essai. Passé ce délai, elles seront supprimées
                définitivement, sauf si le Client a souscrit à un
                abonnement.
              </p>
              <p style={{ marginTop: 12 }}>
                XOpus se réserve le droit de limiter l&apos;essai gratuit à
                un seul compte par personne physique ou morale.
              </p>
            </section>
          </Reveal>

          {/* Article 8 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 8 — Résiliation
              </h2>
              <p>
                Le Client peut résilier son abonnement à tout moment depuis
                son espace personnel. La résiliation prend effet à la fin
                de la période d&apos;abonnement en cours, c&apos;est-à-dire
                au terme du mois civile en cours.
              </p>
              <p style={{ marginTop: 12 }}>
                En cas de résiliation, le Client continue d&apos;accéder au
                Service jusqu&apos;à la fin de la période payée. Aucun
                remboursement partiel ou total ne sera effectué pour les
                périodes en cours, sauf dans le cadre de l&apos;exercice du
                droit de rétractation ou en cas de manquement de XOpus à
                ses obligations.
              </p>
              <p style={{ marginTop: 12 }}>
                Le Client peut exporter l&apos;intégralité de ses données
                (factures, contacts, paramètres) en format CSV et PDF
                avant la date effective de résiliation. Passée cette date,
                les Données du Client sont conservées pendant 90 jours
                puis supprimées définitivement.
              </p>
              <p style={{ marginTop: 12 }}>
                XOpus se réserve le droit de résilier l&apos;abonnement du
                Client en cas de manquement grave à ses obligations
                (utilisation frauduleuse, non-paiement répété, atteinte
                aux droits des tiers), après mise en demeure restée
                sans réponse pendant 15 jours.
              </p>
            </section>
          </Reveal>

          {/* Article 9 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 9 — Droit de rétractation
              </h2>
              <p>
                Conformément à l&apos;article L. 221-18 du Code de la
                consommation, le Client, s&apos;il est consommateur au sens
                du Code, dispose d&apos;un délai de 14 jours à compter de la
                souscription de l&apos;abonnement pour exercer son droit de
                rétractation, sans avoir à motiver sa décision.
              </p>
              <p style={{ marginTop: 12 }}>
                Toutefois, conformément à l&apos;article L. 221-28 du Code
                de la consommation, le droit de rétractation ne peut être
                exercé si l&apos;exécution du service a commencé, avec
                l&apos;accord exprès du Client, avant la fin du délai de
                rétractation et que le Client a reconnu perdre son droit de
                rétractation.
              </p>
              <p style={{ marginTop: 12 }}>
                Pour exercer ce droit, le Client doit adresser à XOpus
                SAS une déclaration écrite à l&apos;adresse{" "}
                <a href="mailto:contact@xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>
                  contact@xopus.fr
                </a>
                , précisant sa volonté de se rétracter.
              </p>
            </section>
          </Reveal>

          {/* Article 10 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 10 — Disponibilité du service
              </h2>
              <p>
                XOpus s&apos;engage à assurer la disponibilité du Service
                24 heures sur 24, 7 jours sur 7, sous réserve des
                opérations de maintenance planifiée ou exceptionnelle.
              </p>
              <p style={{ marginTop: 12 }}>
                XOpus s&apos;efforce de limiter les interruptions de service
                au strict nécessaire et de les programmer de préférence
                entre 22h et 6h, du lundi au vendredi. Le Client sera
                informé des opérations de maintenance planifiées au
                minimum 48 heures à l&apos;avance par email.
              </p>
              <p style={{ marginTop: 12 }}>
                La disponibilité mensuelle du Service est garantie à
                <strong> 99,5 %</strong> (hors maintenance planifiée). En
                cas de dépassement de ce seuil, le Client pourra demander
                un avoir correspondant à la période d&apos;indisponibilité,
                sur Justificatif.
              </p>
              <p style={{ marginTop: 12 }}>
                XOpus ne saurait être tenu responsable des interruptions
                de service dues à des causes extérieures à son contrôle :
                panne internet chez le Client, force majeure, attaque
                informatique (DDoS), ou défaillance d&apos;un fournisseur
                tiers (hébergeur, Stripe).
              </p>
            </section>
          </Reveal>

          {/* Article 11 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 11 — Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble des éléments constituant le Service XOpus
                (logiciels, bases de données, interfaces, code source,
                algorithmes, documentation, marques, logos) sont la
                propriété exclusive de XOpus SAS ou de ses concédants de
                licence et sont protégés par les lois françaises et
                internationales relatives à la propriété intellectuelle.
              </p>
              <p style={{ marginTop: 12 }}>
                Le souscrit un abonnement XOpus confère au Client une
                licence d&apos;utilisation non exclusive, non cessible et
                révocable du Service, aux seules fins de son utilisation
                professionnelle conformément aux présentes CGV.
              </p>
              <p style={{ marginTop: 12 }}>
                Le Client ne peut en aucun cas copier, modifier,
                décompiler, redistribuer, revendre ou accorder des
                sous-licences concernant le Service ou tout élément
                propriétaire de XOpus.
              </p>
              <p style={{ marginTop: 12 }}>
                Les Données du Client restent la propriété exclusive du
                Client. XOpus ne revendique aucun droit de propriété sur
                les données saisies ou générées par le Client dans le
                cadre de l&apos;utilisation du Service.
              </p>
            </section>
          </Reveal>

          {/* Article 12 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 12 — Responsabilité et garanties
              </h2>
              <p>
                XOpus s&apos;efforce de fournir un Service fiable et
                performant. Toutefois, le Service est fourni « en l&apos;état
                » et « disponibles » (as is / as available). XOpus ne
                garantit pas que le Service sera exempt d&apos;erreurs ou
                d&apos;interruptions.
              </p>
              <p style={{ marginTop: 12 }}>
                En aucun cas, la responsabilité de XOpus ne saurait être
                engagée pour :
              </p>
              <ul style={{ marginTop: 8, paddingLeft: 24 }}>
                <li>Les dommages indirects, perte de données, perte de chiffre d&apos;affaires ou préjudice commercial.</li>
                <li>Les erreurs dans les déclarations fiscales ou sociales générées à partir du Service, le Client restant seul responsable de ses obligations légales.</li>
                <li>L&apos;utilisation du Service à des fins non conformes à la réglementation en vigueur.</li>
                <li>Les dommages résultant d&apos;une utilisation non autorisée ou frauduleuse du Service.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                La responsabilité totale de XOpus est limitée au montant
                des sommes versées par le Client au cours des douze (12)
                derniers mois précédant l&apos;événement ayant donné lieu à la
                responsabilité.
              </p>
            </section>
          </Reveal>

          {/* Article 13 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 13 — Protection des données personnelles
              </h2>
              <p>
                XOpus SAS traite les données personnelles du Client
                conformément au Règlement Général sur la Protection des
                Données (RGPD) et à la loi « Informatique et Libertés ».
                Les conditions détaillées du traitement des données
                personnelles sont décrites dans la{" "}
                <a href="/politique-confidentialite" style={{ color: "#0055FF", fontWeight: 700 }}>
                  Politique de Confidentialité
                </a>
                , qui fait partie intégrante des présentes CGV.
              </p>
              <p style={{ marginTop: 12 }}>
                Le Client dispose des droits prévus par le RGPD (accès,
                rectification, effacement, portabilité, opposition) et peut
                les exercer en contactant XOpus à l&apos;adresse{" "}
                <a href="mailto:contact@xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>
                  contact@xopus.fr
                </a>
                .
              </p>
              <p style={{ marginTop: 12 }}>
                XOpus s&apos;engage à mettre en œuvre des mesures techniques
                et organisationnelles appropriées pour assurer la sécurité
                des données personnelles et les protéger contre la perte,
                l&apos;utilisation abusive, l&apos;accès non autorisé ou la
                divulgation.
              </p>
            </section>
          </Reveal>

          {/* Article 14 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 14 — Force majeure
              </h2>
              <p>
                XOpus ne saurait être tenu responsable de
                l&apos;inexécution de ses obligations contractuelles si
                cette inexécution est due à un cas de force majeure au
                sens de l&apos;article 1218 du Code civil. Constituent
                notamment des cas de force majeure : les catastrophes
                naturelles, les incendies, les inondations, les pannes
                d&apos;électricité, les attaques informatiques majeures, les
                épidémies, les conflits armés, les grèves, les
                décisions gouvernementales ou les dysfonctionnements des
                réseaux de télécommunication.
              </p>
              <p style={{ marginTop: 12 }}>
                En cas de survenance d&apos;un cas de force majeure, les
                obligations de XOpus sont suspendues pendant la durée de
                l&apos;évènement. Si la force majeure perdure au-delà de
                30 jours, chacune des parties pourra résilier le contrat
                de plein droit, sans indemnité.
              </p>
            </section>
          </Reveal>

          {/* Article 15 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 15 — Modification des CGV
              </h2>
              <p>
                XOpus se réserve le droit de modifier les présentes CGV à
                tout moment. Le Client sera informé de toute modification
                substantielle par email au minimum 30 jours avant
                l&apos;entrée en vigueur des nouvelles dispositions.
              </p>
              <p style={{ marginTop: 12 }}>
                La poursuite de l&apos;utilisation du Service après
                l&apos;entrée en vigueur des modifications vaut acceptation
                des nouvelles CGV. Si le Client n&apos;accepte pas les
                modifications, il dispose d&apos;un droit de résiliation
                sans frais jusqu&apos;à la date d&apos;entrée en vigueur.
              </p>
            </section>
          </Reveal>

          {/* Article 16 */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                Article 16 — Droit applicable et juridiction
              </h2>
              <p>
                Les présentes CGV sont régies par le droit français. En
                cas de litige relatif à l&apos;interprétation ou à
                l&apos;exécution des présentes CGV, les parties s&apos;efforceront
                de trouver une solution amiable dans un délai de 30 jours
                à compter de la notification du litige par l&apos;une des
                parties.
              </p>
              <p style={{ marginTop: 12 }}>
                À défaut de résolution amiable, le litige sera porté
                devant les tribunaux judiciaires de Paris, qui seront seuls
                compétents, nonobstant pluralité de défendeurs ou appel en
                garantie.
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
