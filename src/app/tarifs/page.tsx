import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AppLink from "@/components/AppLink";
import Reveal from "@/components/Reveal";

/* ------------------------------------------------------------------ */
/*  SEO Metadata                                                        */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Tarifs XOpus — Logiciel de facturation à 9,99 €/mois tout inclus",
  description:
    "Découvrez les tarifs XOpus : plan gratuit 14 jours, Pro à 9,99 €/mois, Business à 29,99 €/mois. Devis, factures, Factur-X, paiements Stripe, espace client. Sans frais cachés, sans commission.",
  keywords: [
    "tarif logiciel facturation pas cher 9.99€",
    "logiciel facturation prix",
    "facturation artisan pas cher",
    "devis facture pas cher",
    "tarif micro-entreprise facturation",
    "logiciel facturation TPE pas cher",
  ],
  openGraph: {
    title: "Tarifs XOpus — Logiciel de facturation à 9,99 €/mois",
    description:
      "Plan gratuit 14 jours · Pro 9,99 €/mois · Business 29,99 €/mois. Tout inclus, sans frais cachés.",
    url: "https://xopus.fr/tarifs",
    siteName: "XOpus",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://xopus.fr/tarifs",
  },
};

/* ------------------------------------------------------------------ */
/*  Feature lists                                                       */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/*  Comparison table data                                               */
/* ------------------------------------------------------------------ */
const COMPARE = [
  {
    feature: "Factures & devis illimités",
    free: "14 jours",
    pro: true,
    business: true,
  },
  {
    feature: "Factur-X automatique",
    free: "14 jours",
    pro: true,
    business: true,
  },
  {
    feature: "Paiements en ligne (Stripe)",
    free: "14 jours",
    pro: true,
    business: true,
  },
  { feature: "Espace client", free: "—", pro: true, business: true },
  { feature: "Factures récurrentes", free: "—", pro: true, business: true },
  { feature: "Relances automatiques", free: "—", pro: true, business: true },
  { feature: "Dashboard & statistiques", free: "—", pro: true, business: true },
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

/* ------------------------------------------------------------------ */
/*  Helper: check / cross icon                                          */
/* ------------------------------------------------------------------ */
function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <span style={{ color: "#0055FF" }}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    ) : (
      <span style={{ color: "var(--muted-2)" }}>—</span>
    );
  }
  return <span style={{ fontSize: 14 }}>{value}</span>;
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */
export default function TarifsPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-main" style={{ paddingTop: 100 }}>
        {/* ===== HERO ===== */}
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
              Choisissez le plan qui correspond à votre activité et commencez à
              facturer en quelques minutes.
            </p>
          </Reveal>
        </section>

        {/* ===== PRICING CARDS ===== */}
        <section className="site-section">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 28,
              maxWidth: 1040,
              margin: "0 auto",
              padding: "0 24px",
              alignItems: "start",
            }}
          >
            {/* --- Essai gratuit --- */}
            <Reveal delay={0}>
              <div className="site-pricing-card">
                <span className="site-eyebrow" style={{ marginBottom: 8 }}>
                  Essai gratuit
                </span>
                <div className="site-pricing-card__price">0 €</div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--muted)",
                    marginBottom: 24,
                  }}
                >
                  14 jours · sans engagement
                </p>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--text)",
                    marginBottom: 20,
                  }}
                >
                  Testez XOpus pendant 14 jours avec accès à toutes les
                  fonctionnalités du plan Pro. Aucune carte bancaire demandée,
                  résiliation automatique à la fin de la période.
                </p>
                <ul className="site-pricing-card__features">
                  {FEATURES_FREE.map((f) => (
                    <li key={f}>
                      <span className="site-pricing-card__check">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 24 }}>
                  <AppLink
                    intent="register"
                    className="site-btn site-btn-ghost"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Commencer gratuitement
                  </AppLink>
                </div>
              </div>
            </Reveal>

            {/* --- Pro --- */}
            <Reveal delay={100}>
              <div className="site-pricing-card site-pricing-card--highlighted">
                <span
                  className="site-badge-pulse"
                  style={{ alignSelf: "flex-start", marginBottom: 8 }}
                >
                  <span className="site-badge-dot" />
                  Populaire
                </span>
                <div className="site-pricing-card__price">9,99 €</div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--muted)",
                    marginBottom: 24,
                  }}
                >
                  /mois · tout inclus
                </p>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--text)",
                    marginBottom: 20,
                  }}
                >
                  Le plan idéal pour les artisans, indépendants et TPE qui
                  veulent un outil complet sans se ruiner. Factures, devis,
                  Factur-X, paiements en ligne et espace client inclus.
                </p>
                <ul className="site-pricing-card__features">
                  {FEATURES_PRO.map((f) => (
                    <li key={f}>
                      <span className="site-pricing-card__check">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 24 }}>
                  <AppLink
                    intent="register"
                    className="site-btn site-btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Essai gratuit 14 jours
                  </AppLink>
                </div>
              </div>
            </Reveal>

            {/* --- Business --- */}
            <Reveal delay={200}>
              <div className="site-pricing-card">
                <span className="site-eyebrow" style={{ marginBottom: 8 }}>
                  Business
                </span>
                <div className="site-pricing-card__price">29,99 €</div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--muted)",
                    marginBottom: 24,
                  }}
                >
                  /mois · tout inclus
                </p>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--text)",
                    marginBottom: 20,
                  }}
                >
                  Pour les structures en croissance qui ont besoin d&apos;API,
                  de branding blanc, de multi-sociétés et d&apos;un
                  accompagnement sur mesure avec un comptable dédié.
                </p>
                <ul className="site-pricing-card__features">
                  {FEATURES_BUSINESS.map((f) => (
                    <li key={f}>
                      <span className="site-pricing-card__check">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 24 }}>
                  <AppLink
                    intent="register"
                    className="site-btn site-btn-ghost"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Contacter l&apos;équipe
                  </AppLink>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== COMPARAISON DÉTAILLÉE ===== */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Comparaison détaillée</span>
              <h2 className="site-section-title">
                Comparez chaque{" "}
                <span className="site-title-accent">fonctionnalité.</span>
              </h2>
              <p
                className="site-lead"
                style={{ maxWidth: 560, margin: "12px auto 0" }}
              >
                Visualisez ce que chaque plan inclut pour choisir celui qui
                correspond exactement à vos besoins.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="site-table-wrap">
              <table className="site-compare-table">
                <thead>
                  <tr>
                    <th>Fonctionnalité</th>
                    <th>Gratuit (essai)</th>
                    <th className="col-xopus">Pro — 9,99 €</th>
                    <th>Business — 29,99 €</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row) => (
                    <tr key={row.feature}>
                      <td className="crit" data-label="Fonctionnalité">
                        {row.feature}
                      </td>
                      <td data-label="Gratuit">
                        <Cell value={row.free} />
                      </td>
                      <td className="cell-win" data-label="Pro">
                        <Cell value={row.pro} />
                      </td>
                      <td data-label="Business">
                        <Cell value={row.business} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* ===== CTA intermédiaire ===== */}
        <Reveal>
          <div style={{ textAlign: "center", padding: "3rem 24px" }}>
            <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
              Encore des questions sur les tarifs ?
            </p>
            <p
              style={{
                color: "var(--muted)",
                maxWidth: 480,
                margin: "0 auto 24px",
              }}
            >
              Notre équipe est disponible pour vous accompagner dans le choix du
              plan adapté à votre activité.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact" className="site-btn site-btn-ghost">
                Nous contacter
              </Link>
              <AppLink intent="register" className="site-btn site-btn-primary">
                Essai gratuit 14 jours
              </AppLink>
            </div>
          </div>
        </Reveal>

        {/* ===== FAQ TARIFS ===== */}
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
                <summary>
                  Y a-t-il des frais cachés ou des commissions ?
                </summary>
                <p>
                  Non, aucun frais caché. Le tarif affiché est le prix que vous
                  payez. Nous ne prélevons aucune commission sur les paiements
                  en ligne via Stripe. Vous bénéficiez de l&apos;intégralité des
                  fonds versés par vos clients.
                </p>
              </details>
              <details>
                <summary>Peut-on résilier à tout moment ?</summary>
                <p>
                  Oui, aucun frais de résiliation. Vous pouvez annuler votre
                  abonnement en 1 clic depuis votre espace personnel. Vos
                  données restent exportables pendant 30 jours après la
                  résiliation.
                </p>
              </details>
              <details>
                <summary>Le renouvellement est-il automatique ?</summary>
                <p>
                  Oui, l&apos;abonnement se renouvelle automatiquement chaque
                  mois. Vous pouvez désactiver le renouvellement automatique à
                  tout moment depuis les paramètres de votre compte.
                </p>
              </details>
              <details>
                <summary>Acceptez-vous les paiements par virement ?</summary>
                <p>
                  Oui, via Stripe nous acceptons les cartes bancaires (Visa,
                  Mastercard, Amex), les virements bancaires et les prélèvements
                  SEPA. Tous les moyens de paiement sont sécurisés et conformes
                  aux normes PCI-DSS.
                </p>
              </details>
              <details>
                <summary>Puis-je changer de plan à tout moment ?</summary>
                <p>
                  Oui. Vous pouvez passer du plan Gratuit au Pro, du Pro au
                  Business, ou revenir à un plan inférieur. Le changement est
                  effectif immédiatement et le tarif est ajusté au prorata.
                </p>
              </details>
            </div>
          </Reveal>
        </section>

        {/* ===== POURQUOI CE PRIX ===== */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Transparence</span>
              <h2 className="site-section-title">
                Pourquoi <span className="site-title-accent">9,99 € ?</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px" }}>
              <div style={{ display: "grid", gap: 24 }}>
                <div
                  className="site-card"
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(0,85,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0055FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}
                    >
                      Un prix pensé pour les indépendants
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "var(--muted)",
                      }}
                    >
                      XOpus est conçu par des entrepreneurs, pour des
                      entrepreneurs. Nous savons que chaque euro compte quand on
                      lance son activité. C&apos;est pourquoi nous avons fixé un
                      tarif accessible à tous, sans compromis sur la qualité.
                    </p>
                  </div>
                </div>

                <div
                  className="site-card"
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(0,85,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0055FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}
                    >
                      Pas de piège, pas de upsell agressif
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "var(--muted)",
                      }}
                    >
                      Contrairement à d&apos;autres solutions qui affichent un
                      prix bas puis facturent chaque fonctionnalité en
                      supplément, XOpus inclut tout dans un seul forfait. Ce que
                      vous voyez est ce que vous payez.
                    </p>
                  </div>
                </div>

                <div
                  className="site-card"
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(0,85,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0055FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}
                    >
                      Des mises à jour gratuites et continues
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "var(--muted)",
                      }}
                    >
                      Chaque mise à jour — nouvelles fonctionnalités,
                      améliorations de conformité, optimisations — est incluse
                      dans votre abonnement. Vous n&apos;aurez jamais à payer
                      pour une nouvelle version.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== CTA FINAL ===== */}
        <Reveal>
          <div className="site-cta-band site-cta-band--shimmer">
            <h2>Prêt à commencer ?</h2>
            <p>
              14 jours gratuits, sans carte bancaire. Découvrez XOpus en toute
              sérénité.
            </p>
            <div className="site-cta-row" style={{ justifyContent: "center" }}>
              <AppLink
                intent="register"
                className="site-btn site-btn-primary site-btn-lg"
              >
                Essai gratuit 14 jours
              </AppLink>
              <Link
                href="/contact"
                className="site-btn site-btn-ghost site-btn-lg"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
