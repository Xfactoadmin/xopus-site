import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AppLink from "@/components/AppLink";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import HeroBackground from "@/components/HeroBackground";

export const metadata: Metadata = {
  title: "XOpus — Facturation intelligente pour artisans et indépendants",
  description:
    "La plateforme de facturation 100% française pour artisans, indépendants et TPE. Devis, factures, paiements en ligne et conformité loi anti-fraude TVA. 9,99€/mois tout inclus.",
};

const HOME_FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Factures & Devis",
    desc: "Créez et envoyez vos factures et devis en quelques clics. Génération automatique des Factur-X conformes à la loi anti-fraude.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Paiements en ligne",
    desc: "Encaissez par carte bancaire, virement ou prélèvement. Stripe intégré, sans commission supplémentaire.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "100% Conforme",
    desc: "Passez à la caisse enregistreuse de 2026 sans stress. Chaque facture est horodatée et sécurisée.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Suivi en temps réel",
    desc: "Tableau de bord intuitif pour suivre vos paiements, relances et trésorerie en un coup d'œil.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Espace client",
    desc: "Un portail dédié pour vos clients : consultation de factures, paiements en ligne et historique.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Modules pro",
    desc: "XPortail, XRepair, XPay, XSite… des modules complémentaires pour gérer toute votre activité.",
  },
] as const;

const STEPS = [
  {
    title: "Créez votre compte",
    desc: "Inscription en deux minutes, sans carte bancaire. Votre espace est prêt immédiatement.",
  },
  {
    title: "Personnalisez votre activité",
    desc: "Ajoutez votre logo, vos clients et votre catalogue. XOpus s'adapte à votre métier.",
  },
  {
    title: "Facturez et encaissez",
    desc: "Envoyez devis et factures, recevez les paiements en ligne et suivez votre trésorerie.",
  },
] as const;

const PROOF = [
  { value: "9,99 €", label: "Tout inclus · par mois" },
  { value: "14 jours", label: "D'essai gratuit" },
  { value: "Factur-X", label: "E-facture 2026 prête" },
  { value: "100 %", label: "Français 🇫🇷" },
] as const;

const TESTIMONIALS = [
  {
    name: "Marie L.",
    role: "Auto-entrepreneur · Lyon",
    text: "XOpus m'a permis de passer moins de temps sur ma facturation et plus sur mon cœur de métier. L'interface est claire et le paiement en ligne est un vrai plus pour mes clients.",
  },
  {
    name: "Thomas B.",
    role: "Artisan électricien · Bordeaux",
    text: "Enfin un logiciel français qui respecte la loi anti-fraude TVA sans me prendre la tête. Les Factur-X sont générées automatiquement et le support est réactif.",
  },
  {
    name: "Sophie M.",
    role: "Gérante de boutique · Paris",
    text: "Le site vitrine inclus avec mon nom de domaine .xopus.fr a boosté ma visibilité. Tout est inclus, sans mauvaise surprise au moment de payer.",
  },
] as const;

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "XOpus",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Plateforme de facturation française pour artisans et indépendants. Devis, factures, paiements en ligne et conformité loi anti-fraude TVA.",
  url: "https://xopus.fr",
  offers: {
    "@type": "Offer",
    price: "9.99",
    priceCurrency: "EUR",
    priceValidUntil: "2026-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "XOpus est-il conforme à la loi anti-fraude TVA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, XOpus est 100% conforme à la loi anti-fraude TVA. Chaque facture est horodatée, sécurisée et générée en format Factur-X (e-facture 2026).",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte XOpus ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "XOpus coûte 9,99€/mois tout inclus. Essai gratuit de 14 jours, sans engagement et sans carte bancaire.",
      },
    },
    {
      "@type": "Question",
      name: "XOpus est-il fait en France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, XOpus est une solution 100% française, hébergée en France, qui respecte le RGPD.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd} />
      <JsonLd data={FAQ_JSON_LD} />

      <SiteHeader />

      <main className="site-main">
        {/* ── HERO ── */}
        <section className="site-hero">
          <HeroBackground />
          <div className="site-hero-split">
            <div className="site-hero-copy">
              <Reveal>
                <span className="site-badge-pulse">
                  <span className="site-badge-dot" />
                  🚀 Lancement
                </span>
              </Reveal>

              <h1 className="site-title" style={{ marginTop: 20 }}>
                Facturez comme
                <br />
                <span className="site-title-accent">un pro.</span>
              </h1>

              <div className="site-tricolor" />

              <p className="site-lead">
                La plateforme de facturation <strong>100% française</strong> pour
                artisans, indépendants et TPE. Devis, factures, paiements en ligne
                et conformité loi anti-fraude TVA.{" "}
                <strong>9,99 €/mois tout inclus.</strong>
              </p>

              <div className="site-hero-cta-group">
                <AppLink
                  intent="register"
                  className="site-btn site-btn-primary site-btn-lg"
                >
                  Essai gratuit 14 jours
                </AppLink>
                <Link
                  href="/fonctionnalites"
                  className="site-btn site-btn-ghost site-btn-lg"
                >
                  Découvrir XOpus
                </Link>
              </div>

              <p className="site-hero-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Sans carte bancaire · Résiliation en 1 clic
              </p>
            </div>

            <div className="site-hero-visual">
              <div className="site-mockup-glow" />
              <div className="site-mockup">
                <div className="site-mockup-head">
                  <strong>Facture #2026-042</strong>
                  <span className="site-mockup-chip">Payée</span>
                </div>
                <div className="site-mockup-row">
                  <span>Installation plomberie</span>
                  <span>480,00 €</span>
                </div>
                <div className="site-mockup-row">
                  <span>Pièces détachées</span>
                  <span>65,00 €</span>
                </div>
                <div className="site-mockup-total">
                  <span>Total TTC</span>
                  <strong>654,00 €</strong>
                </div>
                <div className="site-mockup-pay">
                  <span className="site-btn site-btn-primary" style={{ fontSize: 13, padding: "10px 24px" }}>
                    Payer maintenant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <div className="site-trust-bar">
          <span className="site-trust-item">
            <span className="site-trust-icon">🔒</span> Données hébergées en France
          </span>
          <span className="site-trust-item">
            <span className="site-trust-icon">🛡️</span> Conforme RGPD
          </span>
          <span className="site-trust-item">
            <span className="site-trust-icon">🇫🇷</span> Entreprise française
          </span>
          <span className="site-trust-item">
            <span className="site-trust-icon">💳</span> Paiement sécurisé Stripe
          </span>
          <span className="site-trust-item">
            <span className="site-trust-icon">📧</span> Support réactif
          </span>
        </div>

        {/* ── PROOF STATS ── */}
        <section className="site-section">
          <Reveal>
            <div className="site-proof">
              {PROOF.map((p) => (
                <div key={p.label} className="site-counter">
                  <strong>{p.value}</strong>
                  <span>{p.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── FEATURES ── */}
        <section className="site-section site-section--gradient">
          <div className="site-mesh-bg" />
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Fonctionnalités</span>
              <h2 className="site-section-title">
                Tout ce dont vous avez besoin,{" "}
                <span className="site-title-accent">rien de plus.</span>
              </h2>
            </div>
          </Reveal>

          <div className="site-grid">
            {HOME_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="site-card site-glass">
                  <div className="site-card-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── STEPS ── */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Comment ça marche</span>
              <h2 className="site-section-title">
                En marche en{" "}
                <span className="site-title-accent">3 étapes.</span>
              </h2>
            </div>
          </Reveal>

          <div className="site-steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="site-step">
                  <div className="site-step-num">{i + 1}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── PROMO ── */}
        <section className="site-section">
          <Reveal>
            <div className="site-promo site-promo--glow">
              <span className="site-badge-pulse">
                <span className="site-badge-dot" />
                Offre de lancement
              </span>
              <div className="site-price" style={{ marginTop: 20 }}>
                <span className="site-price-old">19,99 €</span>
                9,99 €
              </div>
              <p style={{ color: "var(--muted)", fontSize: 15, marginTop: 8 }}>
                /mois · tout inclus · sans engagement
              </p>
              <div className="site-cta-row" style={{ justifyContent: "center", marginTop: 28 }}>
                <AppLink
                  intent="register"
                  className="site-btn site-btn-primary site-btn-lg"
                >
                  Commencer maintenant
                </AppLink>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="site-section site-section--gradient">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Témoignages</span>
              <h2 className="site-section-title">
                Ils font confiance à{" "}
                <span className="site-title-accent">XOpus.</span>
              </h2>
            </div>
          </Reveal>

          <div className="site-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="site-testimonial site-glass">
                  <div className="site-stars" style={{ marginBottom: 12 }}>
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--muted)" }}>
                    {t.text}
                  </p>
                  <div className="site-testimonial-author">
                    <div className="site-testimonial-avatar">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="site-testimonial-name">{t.name}</div>
                      <div className="site-testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Questions fréquentes</span>
              <h2 className="site-section-title">
                Vous avez des{" "}
                <span className="site-title-accent">questions ?</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="site-faq">
              <details>
                <summary>XOpus est-il conforme à la loi anti-fraude TVA ?</summary>
                <p>
                  Oui, XOpus est 100% conforme. Chaque facture est horodatée,
                  sécurisée et générée en format Factur-X (e-facture 2026). Vous
                  êtes en règle automatiquement.
                </p>
              </details>
              <details>
                <summary>Combien coûte XOpus ?</summary>
                <p>
                  XOpus coûte 9,99 €/mois tout inclus. Essai gratuit de 14 jours,
                  sans engagement et sans carte bancaire.
                </p>
              </details>
              <details>
                <summary>Y a-t-il un engagement ?</summary>
                <p>
                  Aucun engagement. Vous pouvez résilier à tout moment en 1 clic
                  depuis votre espace. Vos données restent exportables.
                </p>
              </details>
              <details>
                <summary>XOpus est-il fait en France ?</summary>
                <p>
                  Oui, XOpus est une solution 100% française, hébergée en France
                  sur des serveurs certifiés. Les données sont stockées dans l'UE
                  et conformes au RGPD.
                </p>
              </details>
              <details>
                <summary>Quels modes de paiement acceptez-vous ?</summary>
                <p>
                  XOpus accepte les cartes bancaires (Visa, Mastercard, Amex),
                  les virements et les prélèvements SEPA, via Stripe.
                </p>
              </details>
            </div>
          </Reveal>
        </section>

        {/* ── CTA BAND ── */}
        <Reveal>
          <div className="site-cta-band site-cta-band--shimmer">
            <h2>Prêt à facturer comme un pro ?</h2>
            <p>
              Rejoignez les milliers d'artisans et indépendants qui font
              confiance à XOpus. Essai gratuit de 14 jours, sans carte bancaire.
            </p>
            <div className="site-cta-row" style={{ justifyContent: "center" }}>
              <AppLink
                intent="register"
                className="site-btn site-btn-primary site-btn-lg"
              >
                Commencer gratuitement
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