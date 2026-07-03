import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation (CGU) | XOpus",
  description:
    "Conditions Générales d'Utilisation du logiciel de facturation XOpus. Règles d'utilisation acceptable, compte utilisateur, propriété intellectuelle et responsabilités.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://xopus.fr/cgu" },
  openGraph: {
    title: "Conditions Générales d'Utilisation (CGU) | XOpus",
    description:
      "CGU du logiciel de facturation XOpus pour artisans, indépendants et TPE.",
    url: "https://xopus.fr/cgu",
    siteName: "XOpus",
    locale: "fr_FR",
    type: "website",
  },
};

export default function CGUPage() {
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
              Conditions Générales{" "}
              <span className="site-title-accent">d&apos;Utilisation</span>
            </h1>
            <div className="site-tricolor" style={{ margin: "20px auto 24px" }} />
            <p
              className="site-lead"
              style={{ maxWidth: 620, margin: "0 auto" }}
            >
              Les présentes Conditions Générales d&apos;Utilisation définissent
              les règles applicables à l&apos;utilisation du logiciel de
              facturation XOpus par ses utilisateurs.
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
                Article 1 — Acceptation des CGU
              </h2>
              <p>
                Les présentes Conditions Générales d&apos;Utilisation (ci-après
                les « CGU ») régissent l&apos;utilisation du site{" "}
                <a href="https://xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>xopus.fr</a> et du
                logiciel de facturation en ligne XOpus (ci-après le «
                Service »), édité par la société XOpus SAS.
              </p>
              <p style={{ marginTop: 12 }}>
                En accédant au Site ou en utilisant le Service, l&apos;utilisateur
                (ci-après l&apos;« Utilisateur ») reconnaît avoir pris
                connaissance et accepté sans réserve les présentes CGU. Si
                l&apos;Utilisateur n&apos;accepte pas les CGU, il lui est demandé
                de ne pas utiliser le Service.
              </p>
              <p style={{ marginTop: 12 }}>
                XOpus se réserve le droit de modifier les CGU à tout moment.
                La version applicable est celle en vigueur à la date
                d&apos;utilisation du Service. L&apos;Utilisateur est invité à
                consulter régulièrement les CGU mises à jour.
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
                Article 2 — Description du Service
              </h2>
              <p>
                XOpus est un logiciel de facturation en ligne (SaaS —
                Software as a Service) conçu pour les artisans,
                indépendants, TPE et professions libérales. Le Service
                permet notamment de :
              </p>
              <ul style={{ marginTop: 8, paddingLeft: 24 }}>
                <li>Créer, envoyer et gérer des factures conformes à la législation française (loi anti-fraude TVA).</li>
                <li>Émettre des devis, avoirs et notes de crédit.</li>
                <li>Suivre les paiements et gérer les relances.</li>
                <li>Calculer et déclarer la TVA.</li>
                <li>Consulter un tableau de bord et des statistiques financières.</li>
                <li>Exporter les données au format CSV et PDF.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                Le Service est accessible via navigateur web sur
                l&apos;ensemble des appareils compatibles (ordinateurs,
                tablettes, smartphones). Aucun téléchargement logiciel
                n&apos;est nécessaire.
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
                L&apos;utilisation du Service nécessite la création d&apos;un
                compte utilisateur. L&apos;Utilisateur s&apos;engage à fournir des
                informations exactes, complètes et à jour lors de
                l&apos;inscription (nom, prénom, adresse email, raison
                sociale, numéro SIRET).
              </p>
              <p style={{ marginTop: 12 }}>
                L&apos;Utilisateur est responsable du maintien de la
                confidentialité de ses identifiants de connexion
                (adresse email et mot de passe) et s&apos;engage à ne pas les
                divulguer à des tiers. Toute utilisation du compte réalisée
                depuis l&apos;adresse email de l&apos;Utilisateur sera réputée
                émaner de celui-ci.
              </p>
              <p style={{ marginTop: 12 }}>
                L&apos;Utilisateur s&apos;engage à informer XOpus
                immédiatement de toute utilisation non autorisée de son
                compte ou de toute faille de sécurité suspectée, en
                contactant{" "}
                <a href="mailto:support@xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>
                  support@xopus.fr
                </a>
                .
              </p>
              <p style={{ marginTop: 12 }}>
                Un seul compte est autorisé par personne physique ou morale.
                La création de plusieurs comptes dans le but de contourner
                les limitations du Service est strictement interdite.
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
                Article 4 — Utilisation acceptable
              </h2>
              <p>
                L&apos;Utilisateur s&apos;engage à utiliser le Service de
                manière exclusive légale et conforme aux présentes CGU. Est
                strictement interdit :
              </p>
              <ul style={{ marginTop: 8, paddingLeft: 24 }}>
                <li>Utiliser le Service à des fins illicites, frauduleuses ou contraires à l&apos;ordre public.</li>
                <li>Violer les droits de propriété intellectuelle de XOpus ou de tiers.</li>
                <li>Introduire des virus, vers, chevaux de Troie ou tout autre code malveillant dans le Service.</li>
                <li>Tenter d&apos;accéder de manière non autorisée aux serveurs, bases de données ou tout autre composant du Service.</li>
                <li>Utiliser des robots, spiders ou tout autre outil automatisé pour extraire des données du Service, sauf autorisation préalable écrite de XOpus.</li>
                <li>Reproduire, copier, modifier ou créer des œuvres dérivées à partir du Service.</li>
                <li>Vendre, louer ou concéder en sous-licence l&apos;accès au Service.</li>
                <li>Utiliser le Service pour générer de fausses factures ou des documents contrefaisant la signature électronique qualifiée.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                En cas de manquement grave aux règles d&apos;utilisation
                acceptable, XOpus se réserve le droit de suspendre ou de
                supprimer le compte de l&apos;Utilisateur sans préavis et
                sans indemnité, sans préjudice de tout recours en
                dommages et intérêts.
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
                Article 5 — Contenu utilisateur
              </h2>
              <p>
                L&apos;Utilisateur est seul responsable du contenu qu&apos;il
                saisit, génère, stocke ou partage via le Service
                (factures, devis, contacts, notes, etc.), ci-après le «
                Contenu Utilisateur ».
              </p>
              <p style={{ marginTop: 12 }}>
                L&apos;Utilisateur garantit que :
              </p>
              <ul style={{ marginTop: 8, paddingLeft: 24 }}>
                <li>Il est titulaire de tous les droits nécessaires sur le Contenu Utilisateur.</li>
                <li>Le Contenu Utilisateur ne porte pas atteinte aux droits d&apos;un tiers (droit à l&apos;image, droit au respect de la vie privée, secret des affaires, etc.).</li>
                <li>Le Contenu Utilisateur est conforme à la réglementation en vigueur, y compris la législation fiscale et comptable.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                XOpus ne modifie pas le Contenu Utilisateur et n&apos;en
                assume aucune responsabilité quant à son contenu, sa
                légalité ou son exactitude. Le Client reste seul
                responsable de la conformité de ses factures et documents
                comptables aux exigences légales.
              </p>
              <p style={{ marginTop: 12 }}>
                L&apos;Utilisateur concède à XOpus une licence non
                exclusive, non transferable et limitée, nécessaire au
                stockage, à la mise en forme et à l&apos;affichage du
                Contenu Utilisateur dans le cadre du fonctionnement du
                Service. Cette licence prend fin avec la suppression du
                compte.
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
                Article 6 — Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble des éléments constituant le Service (code
                source, interfaces, bases de données, algorithmes,
                designs, marques, logos, documentation technique) est la
                propriété exclusive de XOpus SAS ou de ses concédants de
                licence et est protégé par le droit de la propriété
                intellectuelle.
              </p>
              <p style={{ marginTop: 12 }}>
                Toute reproduction, représentation, modification,
                publication, adaptation, totale ou partielle, du Service
                ou de l&apos;un de ses éléments, par quelque procédé que ce
                soit, sans autorisation préalable écrite de XOpus SAS, est
                interdite et constituerait une contrefaçon sanctionnée par
                les articles L. 335-2 et suivants du Code de la propriété
                intellectuelle.
              </p>
              <p style={{ marginTop: 12 }}>
                Les marques « XOpus » et le logo XOpus sont des marques
                déposées. Toute utilisation non autorisée de ces signes
                distinctifs est strictement prohibée.
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
                Article 7 — Liens externes
              </h2>
              <p>
                Le Site peut contenir des liens hypertextes pointant vers
                des sites web tiers. Ces liens sont fournis à titre
                informatif uniquement. XOpus SAS n&apos;exerce aucun contrôle
                sur le contenu de ces sites externes et ne saurait être
                tenu responsable de leur contenu, de leurs pratiques en
                matière de protection des données personnelles ou de tout
                dommage résultant de leur utilisation.
              </p>
              <p style={{ marginTop: 12 }}>
                L&apos;inclusion de liens vers des sites tiers ne
                constitue en aucun cas une approbation ou une recommandation
                de la part de XOpus. L&apos;Utilisateur est invité à
                consulter les conditions d&apos;utilisation et la politique
                de confidentialité de chaque site visité.
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
                Article 8 — Suspension et résiliation
              </h2>
              <p>
                XOpus se réserve le droit de suspendre l&apos;accès au
                Service de l&apos;Utilisateur, sans préavis, en cas de
                manquement aux présentes CGU ou de comportement
                susceptible de porter atteinte au bon fonctionnement du
                Service, à la sécurité des données ou aux droits des
                autres utilisateurs.
              </p>
              <p style={{ marginTop: 12 }}>
                En cas de résiliation du compte, que celle-ci soit
                initiée par l&apos;Utilisateur ou par XOpus :
              </p>
              <ul style={{ marginTop: 8, paddingLeft: 24 }}>
                <li>L&apos;accès au Service est immédiatement coupé.</li>
                <li>Les Données de l&apos;Utilisateur sont conservées pendant 90 jours, permettant à l&apos;Utilisateur de les exporter.</li>
                <li>Passé ce délai, les données sont supprimées définitivement de nos serveurs, conformément à notre Politique de Confidentialité.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                L&apos;Utilisateur peut à tout moment demander la
                suppression de son compte en contactant{" "}
                <a href="mailto:contact@xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>
                  contact@xopus.fr
                </a>
                . La suppression effective interviendra dans un délai
                maximum de 30 jours.
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
                Article 9 — Exclusion de garanties
              </h2>
              <p>
                Le Service est fourni « en l&apos;état » et « disponibles »
                (as is / as available). XOpus SAS ne formule aucune
                garantie, expresse ou implicite, concernant le Service, y
                compris, sans que cette liste soit limitative, les
                garanties de qualité marchande, d&apos;adéquation à un usage
                particulier, d&apos;absence de virus ou d&apos;erreurs, ou de
                non-contrefaçon.
              </p>
              <p style={{ marginTop: 12 }}>
                XOpus ne garantit pas que le Service sera continu,
                sécurisé ou exempt d&apos;erreurs, ni que les résultats
                obtenus par l&apos;utilisation du Service seront exacts ou
                fiables. L&apos;Utilisateur est seul responsable de
                l&apos;utilisation qu&apos;il fait du Service et des résultats
                obtenus.
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
                Article 10 — Responsabilité
              </h2>
              <p>
                Dans les limites autorisées par la loi applicable, la
                responsabilité de XOpus SAS ne saurait être engagée pour
                tout dommage indirect, accessoire, spécial ou consécutif,
                y compris, sans que cette liste soit limitative, la perte
                de données, la perte de profits, l&apos;interruption
                d&apos;activité, le préjudice commercial ou la perte de
                données, résultant de l&apos;utilisation ou de
                l&apos;impossibilité d&apos;utiliser le Service.
              </p>
              <p style={{ marginTop: 12 }}>
                La responsabilité totale de XOpus SAS, que ce soit en
                contrat, en délit ou autre, est limitée au montant total
                des sommes versées par l&apos;Utilisateur au cours des
                douze (12) mois précédant l&apos;événement à l&apos;origine de
                la réclamation.
              </p>
              <p style={{ marginTop: 12 }}>
                XOpus ne saurait être tenu responsable des décisions
                fiscales, sociales ou comptables prises par l&apos;Utilisateur
                sur la base des informations fournies par le Service. Le
                Client conserve l&apos;obligation de vérifier la conformité
                de ses documents avec la réglementation applicable.
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
                Article 11 — Données personnelles
              </h2>
              <p>
                XOpus SAS traite les données personnelles de
                l&apos;Utilisateur conformément au Règlement Général sur la
                Protection des Données (RGPD) et à la loi n° 78-17 du 6
                janvier 1978 modifiée, dite « Informatique et Libertés
                ». Les conditions détaillées du traitement figurent dans
                la{" "}
                <a href="/politique-confidentialite" style={{ color: "#0055FF", fontWeight: 700 }}>
                  Politique de Confidentialité
                </a>
                .
              </p>
              <p style={{ marginTop: 12 }}>
                L&apos;Utilisateur dispose des droits suivants : droit
                d&apos;accès, de rectification, d&apos;effacement, de
                limitation, de portabilité et d&apos;opposition. Il peut les
                exercer en écrivant à{" "}
                <a href="mailto:contact@xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>
                  contact@xopus.fr
                </a>
                .
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
                Article 12 — Droit applicable
              </h2>
              <p>
                Les présentes CGU sont régies par le droit français. En
                cas de litige, les parties s&apos;efforceront de trouver une
                solution amiable avant toute action judiciaire. À défaut
                de résolution amiable, les tribunaux judiciaires de Paris
                seront seuls compétents, nonobstant pluralité de
                défendeurs ou appel en garantie.
              </p>
              <p style={{ marginTop: 12 }}>
                Si l&apos;Utilisateur est un consommateur au sens du Code de
                la consommation, il peut également saisir le Médiateur de
                la consommation compétent, conformément aux dispositions
                des articles L. 616-1 et R. 616-1 du Code de la
                consommation.
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
