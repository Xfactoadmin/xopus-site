import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Mentions Légales — XOpus",
  description:
    "Informations légales sur XOpus, logiciel de facturation créé par Fox Repair. Éditeur, hébergement, directeur de publication et mentions obligatoires.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <SiteHeader />

      <main className="site-main">
        <div className="site-legal">
          <Reveal>
            <h1>Mentions Légales 🇫🇷</h1>
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
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Éditeur du site
              </h2>

              <p>
                Le site <strong>xopus.fr</strong> et le logiciel{" "}
                <strong>XOpus</strong> sont édités par :
              </p>

              <p>
                <strong>Fox Repair</strong>
                <br />
                Président et Créateur : <strong>Mr NICAISE Gabin</strong>
                <br />
                Statut : Auto-entreprise
                <br />
                Siège social : [Adresse à compléter]
                <br />
                SIRET : [Numéro SIRET à compléter]
                <br />
                TVA Intracommunautaire : [Numéro TVA à compléter]
              </p>

              <p>
                <strong>Directeur de la publication :</strong> Gabin NICAISE
                <br />
                <strong>Email :</strong>{" "}
                <a href="mailto:support@xopus.fr">support@xopus.fr</a>
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
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
                Hébergement
              </h2>

              <p>
                Le site <strong>xopus.fr</strong> est hébergé par :
              </p>

              <div style={{ marginBottom: 24 }}>
                <p>
                  <strong>Nom de domaine :</strong>
                  <br />
                  <strong>Amen.fr</strong>
                  <br />
                  12-14 Rond-Point des Champs-Élysées
                  <br />
                  75008 Paris, France
                  <br />
                  Site web :{" "}
                  <a
                    href="https://www.amen.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.amen.fr
                  </a>
                </p>
              </div>

              <div style={{ marginBottom: 24 }}>
                <p>
                  <strong>Infrastructure technique et serveurs :</strong>
                  <br />
                  <strong>Vercel Inc.</strong>
                  <br />
                  340 S Lemon Ave #4133
                  <br />
                  Walnut, CA 91789, États-Unis
                  <br />
                  Site web :{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    vercel.com
                  </a>
                </p>
              </div>

              <div>
                <p>
                  <strong>Base de données et authentification :</strong>
                  <br />
                  <strong>Supabase Inc.</strong>
                  <br />
                  970 Toa Payoh North, #07-04
                  <br />
                  Singapore 318992
                  <br />
                  Site web :{" "}
                  <a
                    href="https://supabase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    supabase.com
                  </a>
                </p>
              </div>
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
                Webmaster et gestion technique
              </h2>

              <p>
                <strong>Webmaster :</strong> Gabin NICAISE
                <br />
                <strong>Email :</strong>{" "}
                <a href="mailto:support@xopus.fr">support@xopus.fr</a>
              </p>

              <p>
                Le webmaster assure la gestion, la maintenance et l'évolution
                technique du site <strong>xopus.fr</strong> et de la plateforme{" "}
                <strong>XOpus</strong>.
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
                Propriété intellectuelle
              </h2>

              <p>
                L'ensemble du contenu de ce site (structure, textes, logos,
                images, éléments graphiques, logiciels, bases de données, etc.)
                est la propriété exclusive de <strong>Fox Repair</strong> et de{" "}
                <strong>Gabin NICAISE</strong>, sauf mention contraire.
              </p>

              <p>
                Toute reproduction, représentation, modification, publication,
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite, sauf autorisation
                écrite préalable de Fox Repair.
              </p>

              <p>
                La marque <strong>XOpus</strong>, son logo et ses déclinaisons
                graphiques sont des marques déposées par Fox Repair. Toute
                utilisation non autorisée de ces marques constitue une
                contrefaçon passible de sanctions pénales.
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
                Données personnelles et RGPD
              </h2>

              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés, vous disposez d'un
                droit d'accès, de rectification, de suppression et d'opposition
                aux données vous concernant.
              </p>

              <p>
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse
                suivante :{" "}
                <a href="mailto:support@xopus.fr">support@xopus.fr</a>
              </p>

              <p>
                Pour plus d'informations sur la gestion de vos données
                personnelles, consultez notre{" "}
                <a href="/confidentialite">Politique de Confidentialité</a>.
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
                Limitation de responsabilité
              </h2>

              <p>
                <strong>Fox Repair</strong> s'efforce d'assurer l'exactitude et
                la mise à jour des informations diffusées sur ce site.
                Toutefois, elle ne peut garantir l'exactitude, la précision ou
                l'exhaustivité des informations mises à disposition.
              </p>

              <p>
                En conséquence, Fox Repair décline toute responsabilité pour
                toute imprécision, inexactitude ou omission portant sur des
                informations disponibles sur le site.
              </p>

              <p>
                Fox Repair ne saurait être tenue responsable des dommages
                directs ou indirects causés au matériel de l'utilisateur lors de
                l'accès au site, ou résultant de l'utilisation du site ou de
                services accessibles via le site.
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
                Droit applicable et juridiction
              </h2>

              <p>
                Les présentes mentions légales sont régies par le droit
                français. En cas de litige et à défaut d'accord amiable, le
                litige sera porté devant les tribunaux français conformément aux
                règles de compétence en vigueur.
              </p>
            </div>
          </Reveal>

          <div className="site-legal-divider" />

          <Reveal>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 15, marginBottom: 24 }}>
                Pour toute question concernant ces mentions légales, vous pouvez
                nous contacter :
              </p>
              <a
                href="mailto:support@xopus.fr"
                className="site-btn site-btn-primary"
                style={{ display: "inline-flex" }}
              >
                Nous contacter
              </a>
            </div>
          </Reveal>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
