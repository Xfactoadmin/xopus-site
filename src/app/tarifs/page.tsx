import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tarifs — XOpus",
  description:
    "XOpus à 9,99€/mois tout inclus. Essai gratuit 14 jours, sans CB. Factures, devis, Factur-X, paiements Stripe, espace client. Pas de frais cachés.",
  alternates: { canonical: "https://xopus.fr/tarifs" },
};

const FEATURES_FREE = [
  "14 jours d'essai gratuit",
  "Toutes les fonctionnalités incluses",
  "Pas de carte bancaire requise",
  "Support par email",
];

const FEATURES_PRO = [
  "Factures & devis illimités",
  "Factur-X automatique (loi anti-fraude)",
  "Paiements en ligne (Stripe)",
  "Espace client personnalisé",
  "Factures récurrentes",
  "Relances automatiques",
  "Tableau de bord et statistiques",
  "Multi-utilisateurs",
  "Export comptable CSV / PDF",
  "Mode sombre",
  "Support prioritaire",
  "Mises à jour gratuites",
];

const FEATURES_BUSINESS = [
  "Tout le plan Pro inclus",
  "API REST complète",
  "Branding blanc (votre marque)",
  "Multi-sociétés",
  "Comptable dédié",
  "SLA 99,9 % garanti",
  "Support téléphonique",
  "Onboarding dédié",
  "Audit mensuel de conformité",
];

const COMPARE = [
  {
    feature: "Factures & devis illimités",
    free: "14j",
    pro: true,
    business: true,
  },
  { feature: "Factur-X automatique", free: "14j", pro: true, business: true },
  {
    feature: "Paiements en ligne (Stripe)",
    free: "14j",
    pro: true,
    business: true,
  },
  { feature: "Espace client", free: "—", pro: true, business: true },
  { feature: "Factures récurrentes", free: "—", pro: true, business: true },
  { feature: "Relances automatiques", free: "—", pro: true, business: true },
  { feature: "Dashboard & stats", free: "—", pro: true, business: true },
  { feature: "Multi-utilisateurs", free: "—", pro: true, business: true },
  { feature: "Export CSV / PDF", free: "—", pro: true, business: true },
  { feature: "Mode sombre", free: "—", pro: true, business: true },
  { feature: "API REST", free: "—", pro: "—", business: true },
  { feature: "Branding blanc", free: "—", pro: "—", business: true },
  { feature: "Multi-sociétés", free: "—", pro: "—", business: true },
  { feature: "Comptable dédié", free: "—", pro: "—", business: true },
  { feature: "SLA 99,9 %", free: "—", pro: "—", business: true },
  { feature: "Support téléphonique", free: "—", pro: "—", business: true },
];

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#22c55e"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Cross() {
  return (
    <span style={{ color: "var(--color-text-muted)", fontSize: 14 }}>—</span>
  );
}

export default function TarifsPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-main" style={{ paddingTop: 100 }}>
        {/* Hero */}
        <section
          style={{
            textAlign: "center",
            padding: "0 24px 2rem",
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          <Reveal>
            <span className="site-eyebrow">Tarifs</span>
            <h1 className="site-title" style={{ marginTop: 12 }}>
              Un tarif{" "}
              <span className="site-title-accent">simple, tout inclus.</span>
            </h1>
            <div
              className="site-tricolor"
              style={{ margin: "20px auto 24px" }}
            />
            <p
              className="site-lead"
              style={{ maxWidth: 620, margin: "0 auto" }}
            >
              Pas de frais cachés, pas de commission sur les paiements.
              Choisissez le plan qui correspond à votre activité.
            </p>
          </Reveal>
        </section>

        {/* Pricing Cards — equal height grid */}
        <section className="site-section">
          <div className="site-pricing-grid">
            {/* Free trial */}
            <Reveal delay={0}>
              <div className="site-pricing-card">
                <span className="site-pricing-card__badge">Essai gratuit</span>
                <div className="site-pricing-card__price">0 €</div>
                <p className="site-pricing-card__period">
                  14 jours · sans engagement
                </p>
                <p className="site-pricing-card__desc">
                  Testez XOpus pendant 14 jours avec accès à toutes les
                  fonctionnalités du plan Pro. Aucune carte bancaire.
                </p>
                <ul className="site-pricing-card__features">
                  {FEATURES_FREE.map((f) => (
                    <li key={f}>
                      <Check /> {f}
                    </li>
                  ))}
                </ul>
                <div className="site-pricing-card__cta">
                  <Link
                    href="https://app.xopus.fr"
                    className="site-btn site-btn-ghost"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Commencer gratuitement
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Pro — highlighted */}
            <Reveal delay={100}>
              <div className="site-pricing-card site-pricing-card--highlighted">
                <span className="site-pricing-card__badge site-pricing-card__badge--hot">
                  <span className="site-badge-dot" /> Populaire
                </span>
                <div className="site-pricing-card__price">9,99 €</div>
                <p className="site-pricing-card__period">/mois · tout inclus</p>
                <p className="site-pricing-card__desc">
                  Le plan idéal pour artisans et indépendants. Factures, devis,
                  Factur-X, paiements en ligne et espace client.
                </p>
                <ul className="site-pricing-card__features">
                  {FEATURES_PRO.map((f) => (
                    <li key={f}>
                      <Check /> {f}
                    </li>
                  ))}
                </ul>
                <div className="site-pricing-card__cta">
                  <Link
                    href="https://app.xopus.fr"
                    className="site-btn site-btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Accéder à l&apos;application
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Business */}
            <Reveal delay={200}>
              <div className="site-pricing-card">
                <span className="site-pricing-card__badge">Business</span>
                <div className="site-pricing-card__price">29,99 €</div>
                <p className="site-pricing-card__period">/mois · tout inclus</p>
                <p className="site-pricing-card__desc">
                  Pour les structures en croissance : API, branding blanc,
                  multi-sociétés et comptable dédié.
                </p>
                <ul className="site-pricing-card__features">
                  {FEATURES_BUSINESS.map((f) => (
                    <li key={f}>
                      <Check /> {f}
                    </li>
                  ))}
                </ul>
                <div className="site-pricing-card__cta">
                  <Link
                    href="/contact"
                    className="site-btn site-btn-ghost"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Contacter l&apos;équipe
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Comparison table */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Comparaison</span>
              <h2 className="site-section-title">
                Comparez chaque{" "}
                <span className="site-title-accent">fonctionnalité.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="site-table-wrap">
              <table className="site-compare-table">
                <thead>
                  <tr>
                    <th>Fonctionnalité</th>
                    <th>Gratuit</th>
                    <th className="col-xopus">Pro — 9,99 €</th>
                    <th>Business — 29,99 €</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row) => (
                    <tr key={row.feature}>
                      <td>{row.feature}</td>
                      <td>
                        {typeof row.free === "boolean" ? (
                          row.free ? (
                            <Check />
                          ) : (
                            <Cross />
                          )
                        ) : row.free === "—" ? (
                          <Cross />
                        ) : (
                          row.free
                        )}
                      </td>
                      <td className="cell-win">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <Check />
                          ) : (
                            <Cross />
                          )
                        ) : row.pro === "—" ? (
                          <Cross />
                        ) : (
                          row.pro
                        )}
                      </td>
                      <td>
                        {typeof row.business === "boolean" ? (
                          row.business ? (
                            <Check />
                          ) : (
                            <Cross />
                          )
                        ) : row.business === "—" ? (
                          <Cross />
                        ) : (
                          row.business
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="site-cta-band site-cta-band--shimmer">
            <h2>Prêt à facturer ?</h2>
            <p>Accédez à l&apos;application et commencez en 2 minutes.</p>
            <div className="site-cta-row" style={{ justifyContent: "center" }}>
              <Link
                href="https://app.xopus.fr"
                className="site-btn site-btn-primary site-btn-lg"
              >
                Accéder à l&apos;application
              </Link>
              <Link
                href="/contact"
                className="site-btn site-btn-ghost site-btn-lg"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </Reveal>

        {/* FAQ */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">FAQ Tarifs</span>
              <h2 className="site-section-title">
                Des questions sur les{" "}
                <span className="site-title-accent">prix ?</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="site-faq">
              <details>
                <summary>Y a-t-il des frais cachés ?</summary>
                <p>
                  Non, aucun frais caché. Le tarif affiché est le prix final.
                  Aucune commission sur les paiements Stripe.
                </p>
              </details>
              <details>
                <summary>Peut-on résilier à tout moment ?</summary>
                <p>
                  Oui, en 1 clic depuis votre espace. Vos données restent
                  exportables 30 jours.
                </p>
              </details>
              <details>
                <summary>Le renouvellement est-il automatique ?</summary>
                <p>
                  Oui, chaque mois. Désactivez-le à tout moment depuis vos
                  paramètres.
                </p>
              </details>
              <details>
                <summary>Puis-je changer de plan ?</summary>
                <p>
                  Oui. Le changement est immédiat et le tarif est ajusté au
                  prorata.
                </p>
              </details>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
