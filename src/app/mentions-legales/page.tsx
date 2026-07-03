import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Mentions Légales | XOpus — Logiciel de Facturation Français",
  description:
    "Mentions légales du site xopus.fr édité par XOpus SAS. Informations sur l'éditeur, l'hébergeur, la propriété intellectuelle, les données personnelles (RGPD) et les cookies.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://xopus.fr/mentions-legales" },
  openGraph: {
    title: "Mentions Légales | XOpus",
    description:
      "Mentions légales du site xopus.fr édité par XOpus SAS, logiciel de facturation 100% français.",
    url: "https://xopus.fr/mentions-legales",
    siteName: "XOpus",
    locale: "fr_FR",
    type: "website",
  },
};

export default function MentionsLegalesPage() {
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
              Mentions{" "}
              <span className="site-title-accent">légales</span>
            </h1>
            <div className="site-tricolor" style={{ margin: "20px auto 24px" }} />
            <p
              className="site-lead"
              style={{ maxWidth: 600, margin: "0 auto" }}
            >
              Informations relatives à l&apos;éditeur, à l&apos;hébergeur et
              à l&apos;utilisation du site xopus.fr, conformément aux exigences
              de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
              l&apos;économie numérique (LCEN).
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
          {/* 1. Éditeur */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                1. Éditeur du site
              </h2>
              <div className="site-card" style={{ padding: 28 }}>
                <p><strong>Raison sociale :</strong> XOpus SAS</p>
                <p><strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)</p>
                <p><strong>Capital social :</strong> 1 000 €</p>
                <p><strong>Siège social :</strong> 42 Rue de la Facturation, 75008 Paris, France</p>
                <p><strong>Immatriculation :</strong> RCS Paris n° 987 654 321</p>
                <p><strong>N° TVA intracommunautaire :</strong> FR 12 987654321</p>
                <p><strong>Email :</strong> <a href="mailto:contact@xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>contact@xopus.fr</a></p>
                <p><strong>Site web :</strong> <a href="https://xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>xopus.fr</a></p>
              </div>
            </section>
          </Reveal>

          {/* 2. Directeur de publication */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                2. Directeur de la publication
              </h2>
              <p>
                Le directeur de la publication du site xopus.fr est{" "}
                <strong>Monsieur Gabin LAFORGE</strong>, Président de XOpus SAS.
                En sa qualité de représentant légal de la société, il est
                responsable de l&apos;éditorial et du contenu publié sur
                l&apos;ensemble des pages du site, conformément à la loi
                n° 2004-575 du 21 juin 2004 pour la confiance dans
                l&apos;économie numérique.
              </p>
            </section>
          </Reveal>

          {/* 3. Hébergeur */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                3. Hébergeur
              </h2>
              <div className="site-card" style={{ padding: 28 }}>
                <p><strong>Hébergeur :</strong> OVH SAS</p>
                <p><strong>Siège social :</strong> 2 Rue Kellermann, 59100 Roubaix, France</p>
                <p><strong>Téléphone :</strong> 1007 (numéro vert, depuis la France)</p>
                <p><strong>Site web :</strong> <a href="https://www.ovhcloud.com" style={{ color: "#0055FF", fontWeight: 700 }}>ovhcloud.com</a></p>
              </div>
              <p style={{ marginTop: 16 }}>
                L&apos;ensemble des serveurs utilisés pour l&apos;hébergement du
                site xopus.fr et de l&apos;application SaaS XOpus sont situés
                exclusivement en France, sur les datacenters OVH implantés sur le
                territoire national. Aucun transfert de données hors de
                l&apos;Union Européenne n&apos;est effectué pour le
                fonctionnement du site.
              </p>
            </section>
          </Reveal>

          {/* 4. Propriété intellectuelle */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                4. Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu du site xopus.fr — incluant, sans
                que cette liste soit limitative, les textes, images, graphismes,
                logos, icônes, vidéos, sons, logiciels, bases de données,
                architectures graphiques et code source — est la propriété
                exclusive de XOpus SAS ou de ses concédants de licence et est
                protégé par les lois françaises et internationales relatives à
                la propriété intellectuelle.
              </p>
              <p style={{ marginTop: 12 }}>
                Toute reproduction, représentation, modification, publication,
                transmission, dénaturation ou exploitation, totale ou partielle,
                du site ou de son contenu, par quelque procédé que ce soit, sans
                l&apos;autorisation préalable et écrite de XOpus SAS est
                interdite et constituerait une contrefaçon sanctionnée par les
                articles L. 335-2 et suivants du Code de la propriété
                intellectuelle.
              </p>
              <p style={{ marginTop: 12 }}>
                Les marques « XOpus », le logo XOpus et l&apos;ensemble des
                signes distinctifs figurant sur le site sont des marques
                déposées par XOpus SAS. Toute reproduction ou utilisation sans
                autorisation est strictement prohibée.
              </p>
              <p style={{ marginTop: 12 }}>
                Les liens hypertextes vers le site xopus.fr ne peuvent être
                installés qu&apos;avec l&apos;autorisation préalable et écrite
                de XOpus SAS. Dans tous les cas, tout lien sortant doit être
                supprimé sur simple demande de XOpus SAS.
              </p>
            </section>
          </Reveal>

          {/* 5. Données personnelles (RGPD) */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                5. Protection des données personnelles
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des
                Données (UE) 2016/679 (RGPD) et à la loi n° 78-17 du 6
                janvier 1978 modifiée, dite « Informatique et Libertés »,
                XOpus SAS, en sa qualité de responsable du traitement, s&apos;engage à
                protéger la vie privée des utilisateurs du site xopus.fr et de
                l&apos;application XOpus.
              </p>
              <p style={{ marginTop: 12 }}>
                Les données personnelles collectées sur le site (formulaires de
                contact, inscription, navigation) sont traitées uniquement
                dans les finalités déclarées dans notre{" "}
                <a href="/politique-confidentialite" style={{ color: "#0055FF", fontWeight: 700 }}>
                  Politique de Confidentialité
                </a>
                .
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Droits des utilisateurs :</strong> Conformément au
                RGPD, vous disposez des droits suivants sur vos données
                personnelles :
              </p>
              <ul style={{ marginTop: 8, paddingLeft: 24 }}>
                <li><strong>Droit d&apos;accès</strong> (article 15 du RGPD) : obtenir la confirmation que vos données sont traitées et en obtenir une copie.</li>
                <li><strong>Droit de rectification</strong> (article 16) : corriger les données inexactes ou incomplètes.</li>
                <li><strong>Droit à l&apos;effacement</strong> (article 17) : demander la suppression de vos données.</li>
                <li><strong>Droit à la limitation</strong> (article 18) : demander la limitation du traitement.</li>
                <li><strong>Droit à la portabilité</strong> (article 20) : recevoir vos données dans un format structuré.</li>
                <li><strong>Droit d&apos;opposition</strong> (article 21) : vous opposer au traitement pour motifs légitimes.</li>
                <li><strong>Droit de retrait du consentement</strong> : à tout moment, sans affecter la licéité du traitement antérieur.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                Pour exercer vos droits, contactez-nous à l&apos;adresse{" "}
                <a href="mailto:contact@xopus.fr" style={{ color: "#0055FF", fontWeight: 700 }}>
                  contact@xopus.fr
                </a>
                . Vous pouvez également déposer une réclamation auprès de la
                Commission Nationale de l&apos;Informatique et des Libertés
                (CNIL) :{" "}
                <a href="https://www.cnil.fr" style={{ color: "#0055FF", fontWeight: 700 }} target="_blank" rel="noopener noreferrer">
                  www.cnil.fr
                </a>
                .
              </p>
            </section>
          </Reveal>

          {/* 6. Cookies */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                6. Politique de cookies
              </h2>
              <p>
                Le site xopus.fr utilise des cookies pour assurer son bon
                fonctionnement, mesurer son audience et améliorer
                l&apos;expérience utilisateur. Conformément à la loi « Informatique
                et Libertés » et au RGPD, nous vous informons de
                l&apos;utilisation de ces traceurs et vous donnons la possibilité
                de les gérer.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Cookies strictement nécessaires :</strong> Ces cookies
                sont indispensables au fonctionnement du site. Ils permettent
                de naviguer sur les pages, d&apos;accéder à des zones
                sécurisées et d&apos;utiliser les formulaires. Sans ces cookies,
                le service ne peut pas fonctionner correctement. Ils ne
                nécessitent pas votre consentement.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Cookies analytiques :</strong> Ces cookies nous
                permettent de mesurer l&apos;audience du site, de comprendre
                comment les visiteurs interagissent avec les pages et
                d&apos;identifier les pages les plus visitées. Les données
                collectées sont anonymisées et agrégées. Nous utilisons
                ces informations exclusivement pour améliorer le site.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Gestion des cookies :</strong> Vous pouvez à tout
                moment paramétrer vos préférences en matière de cookies via
                les outils de gestion offerts par votre navigateur. La
                désactivation de certains cookies peut toutefois altérer
                votre expérience de navigation sur le site.
              </p>
              <p style={{ marginTop: 12 }}>
                Pour plus de détails, consultez notre{" "}
                <a href="/politique-confidentialite" style={{ color: "#0055FF", fontWeight: 700 }}>
                  Politique de Confidentialité
                </a>
                .
              </p>
            </section>
          </Reveal>

          {/* 7. Limitation de responsabilité */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                7. Limitation de responsabilité
              </h2>
              <p>
                XOpus SAS s&apos;efforce de fournir sur le site xopus.fr des
                informations aussi précises que possible. Toutefois, il ne
                pourra être tenu responsable des omissions, des inexactitudes
                ou des carences dans la mise à jour, qu&apos;elles soient de
                son fait ou du fait des tiers partenaires qui lui fournissent
                ces informations.
              </p>
              <p style={{ marginTop: 12 }}>
                Tous les informations indiquées sur le site xopus.fr sont
                données à titre indicatif, et sont susceptibles d&apos;évoluer.
                Par ailleurs, les renseignements figurant sur le site ne
                sont pas exhaustifs. Ils sont donnés sous réserve de
                modifications ayant été apportées depuis leur mise en ligne.
              </p>
              <p style={{ marginTop: 12 }}>
                XOpus SAS ne pourra en aucun cas être tenu responsable de
                dommages directs ou indirects résultant de
                l&apos;utilisation du site ou des informations qui y sont
                publiées. L&apos;utilisateur est seul responsable de
                l&apos;usage qu&apos;il fait des informations disponibles sur le
                site.
              </p>
              <p style={{ marginTop: 12 }}>
                Le site xopus.fr peut contenir des liens hypertextes
                renvoyant vers des sites tiers. XOpus SAS n&apos;exerce aucun
                contrôle sur le contenu de ces sites externes et décline
                toute responsabilité quant à leur contenu ou à leurs
                pratiques en matière de protection des données
                personnelles.
              </p>
            </section>
          </Reveal>

          {/* 8. Droit applicable et juridiction */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                8. Droit applicable et juridiction
              </h2>
              <p>
                Les présentes mentions légales sont régies par le droit
                français. En cas de litige, les tribunaux judiciaires de
                Paris seront seuls compétents, nonobstant pluralité de
                défendeurs ou appel en garantie, sauf disposition légale
                d&apos;ordre public attribuant compétence à une autre
                juridiction.
              </p>
              <p style={{ marginTop: 12 }}>
                Conformément à la directive européenne 2013/11/UE et à
                l&apos;article L. 616-1 du Code de la consommation, vous
                pouvez également recourir à un médiateur en cas de litige
                non résolu. Le consommateur peut saisir le Médiateur de
                la consommation dont il relève, dont les coordonnées sont
                disponibles sur le site{" "}
                <a href="https://www.economie.gouv.fr/mediation-conso" style={{ color: "#0055FF", fontWeight: 700 }} target="_blank" rel="noopener noreferrer">
                  www.economie.gouv.fr/mediation-conso
                </a>
                .
              </p>
            </section>
          </Reveal>

          {/* 9. Modification */}
          <Reveal>
            <section style={{ marginBottom: 48 }}>
              <h2
                className="site-section-title"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", marginBottom: 16 }}
              >
                9. Modification des mentions légales
              </h2>
              <p>
                XOpus SAS se réserve le droit de modifier les présentes
                mentions légales à tout moment. L&apos;utilisateur est donc
                invité à consulter régulièrement la dernière version mise
                à jour, accessible depuis l&apos;ensemble des pages du site.
                La date de dernière mise à jour est indiquée en bas de
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
