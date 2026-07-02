import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AppLink from "@/components/AppLink";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "XOpus : 9,99€/mois tout inclus. Essai gratuit 14 jours, sans engagement. Devis, factures, Factur-X, paiements en ligne, espace client.",
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
  "Export comptable CSV/PDF",
  "Mode sombre",
  "Support prioritaire",
  "Mises à jour gratuites",
];

export default function TarifsPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-main" style={{ paddingTop: 100 }}>
        {/* Hero */}
        <section style={{ textAlign: "center", padding: "0 24px 2rem", maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <span className="site-eyebrow">Tarifs</span>
            <h1 className="site-title" style={{ marginTop: 12 }}>
              Un tarif{" "}
              <span className="site-title-accent">simple et clair.</span>
            </h1>
            <div className="site-tricolor" style={{ margin: "20px auto 24px" }} />
            <p className="site-lead" style={{ maxWidth: 560, margin: "0 auto" }}>
              9,99 €/mois tout inclus. Pas de frais cachés, pas de commission
              sur les paiements. Essai gratuit de 14 jours.
            </p>
          </Reveal>
        </section>

        {/* Pricing Cards */}
        <section className="site-section">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28, maxWidth: 820, margin: "0 auto", padding: "0 24px", alignItems: "start" }}>
            {/* Free Trial */}
            <Reveal delay={0}>
              <div className="site-pricing-card">
                <span className="site-eyebrow" style={{ marginBottom: 8 }}>Essai gratuit</span>
                <div className="site-pricing-card__price">0 €</div>
                <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24 }}>
                  14 jours · sans engagement
                </p>
                <ul className="site-pricing-card__features">
                  {FEATURES_FREE.map((f) => (
                    <li key={f}>
                      <span className="site-pricing-card__check">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <AppLink intent="register" className="site-btn site-btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
                  Commencer gratuitement
                </AppLink>
              </div>
            </Reveal>

            {/* Pro */}
            <Reveal delay={100}>
              <div className="site-pricing-card site-pricing-card--highlighted">
                <span className="site-badge-pulse" style={{ alignSelf: "flex-start", marginBottom: 8 }}>
                  <span className="site-badge-dot" />
                  Populaire
                </span>
                <div className="site-pricing-card__price">9,99 €</div>
                <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24 }}>
                  /mois · tout inclus
                </p>
                <ul className="site-pricing-card__features">
                  {FEATURES_PRO.map((f) => (
                    <li key={f}>
                      <span className="site-pricing-card__check">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <AppLink intent="register" className="site-btn site-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Essai gratuit 14 jours
                </AppLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Questions tarifs</span>
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
                  Non, aucun frais caché. Le tarif de 9,99 €/mois couvre toutes
                  les fonctionnalités. Pas de commission sur les paiements Stripe.
                </p>
              </details>
              <details>
                <summary>Peut-on résilier à tout moment ?</summary>
                <p>
                  Oui, aucuns frais de résiliation. Vous pouvez annuler votre
                  abonnement en 1 clic depuis votre espace. Vos données restent
                  exportables.
                </p>
              </details>
              <details>
                <summary>Le renouvellement est-il automatique ?</summary>
                <p>
                  Oui, l'abonnement se renouvelle automatiquement chaque mois.
                  Vous pouvez désactiver le renouvellement automatique à tout
                  moment.
                </p>
              </details>
              <details>
                <summary>Acceptez-vous les paiements par virement ?</summary>
                <p>
                  Oui, via Stripe nous acceptons les cartes bancaires (Visa,
                  Mastercard, Amex), les virements et les prélèvements SEPA.
                </p>
              </details>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="site-cta-band site-cta-band--shimmer">
            <h2>Prêt à commencer ?</h2>
            <p>14 jours gratuits, sans carte bancaire. Découvrez XOpus en toute sérénité.</p>
            <div className="site-cta-row" style={{ justifyContent: "center" }}>
              <AppLink intent="register" className="site-btn site-btn-primary site-btn-lg">
                Essai gratuit 14 jours
              </AppLink>
              <Link href="/contact" className="site-btn site-btn-ghost site-btn-lg">
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