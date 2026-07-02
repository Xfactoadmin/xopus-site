"use client";

import type React from "react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AppLink from "@/components/AppLink";
import JsonLd from "@/components/JsonLd";
import HeroBackground from "@/components/HeroBackground";
import Marquee from "@/components/Marquee";

/* ── Easing personnalisé ── */
const easeLuxe = [0.22, 1, 0.36, 1] as const;

/* ── Variants d'animation ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeLuxe, delay: i * 0.1 },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeLuxe } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeLuxe } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeLuxe } },
};

/* ── Section wrapper with InView ── */
function Section({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
    >
      {children}
    </motion.div>
  );
}

/* ── Données ── */
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

/* ── Counter animé ── */
function AnimatedCounter({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  return (
    <motion.div
      className="site-counter"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: easeLuxe }}
    >
      <strong>{value}</strong>
      <span>{label}</span>
    </motion.div>
  );
}

/* ── Compteur de visite (fun) ── */
function LiveCounter() {
  const [count, setCount] = useState(1247);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.span
      className="site-badge"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 }}
      style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", fontSize: 12 }}
    >
      <span className="site-badge-dot" />
      {count} artisans nous ont rejoints
    </motion.span>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd} />
      <JsonLd data={FAQ_JSON_LD} />

      <SiteHeader />

      <main className="site-main">
        {/* ════════════════════════════════════════════════════
            HERO — Nouveau design tricolore avec particules LED
           ════════════════════════════════════════════════════ */}
        <section className="site-hero">
          <HeroBackground />

          {/* Bandeau LED défilant */}
          <motion.div
            className="site-led-banner"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 5 }}
          >
            <div className="site-led-banner-text">
              <span>✨ NOUVEAU : Factur-X automatique généré !</span>
              <span>🇫🇷 100% Français et hébergé en France</span>
              <span>🔒 Conforme loi anti-fraude TVA 2026</span>
              <span>💳 Paiement Stripe intégré</span>
              <span>⚡ Facturation en 2 clics</span>
            </div>
          </motion.div>

          <div className="site-hero-split">
            <div className="site-hero-copy">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeLuxe }}
              >
                <span className="site-badge-pulse">
                  <span className="site-badge-dot" />
                  🚀 Lancement 2026
                </span>
              </motion.div>

              <motion.h1
                className="site-title"
                style={{ marginTop: 20 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: easeLuxe }}
              >
                La facturation{" "}
                <span className="site-title-accent">tricolore</span>
                <br />
                pour les pros.
              </motion.h1>

              <motion.div
                className="site-tricolor"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 100, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />

              <motion.p
                className="site-lead"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                Le logiciel de facturation <strong>100% français</strong>,
                conforme à la loi anti-fraude TVA 2026. Devis, factures
                électroniques Factur-X, paiements en ligne.{" "}
                <strong>9,99 €/mois tout inclus.</strong>
              </motion.p>

              <motion.div
                className="site-hero-cta-group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: easeLuxe }}
              >
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
              </motion.div>

              <motion.p
                className="site-hero-note"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Sans carte bancaire · Résiliation en 1 clic
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <LiveCounter />
              </motion.div>
            </div>

            <motion.div
              className="site-hero-visual"
              initial={{ opacity: 0, x: 60, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: easeLuxe }}
            >
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
                  <span className="site-btn" style={{ fontSize: 13, padding: "10px 24px" }}>
                    Payer maintenant
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── MARQUEE LED ── */}
        <Marquee />

        {/* ── TRUST BAR ── */}
        <motion.div
          className="site-trust-bar"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        {/* ── PROOF STATS ── */}
        <Section className="site-section">
          <div className="site-proof">
            {PROOF.map((p, i) => (
              <AnimatedCounter key={p.label} value={p.value} label={p.label} delay={i * 0.15} />
            ))}
          </div>
        </Section>

        {/* ── FEATURES ── */}
        <section className="site-section site-section--gradient">
          <div className="site-mesh-bg" />
          <Section>
            <div className="site-section-head site-section-head--centered">
              <FadeUp>
                <span className="site-eyebrow">Fonctionnalités</span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="site-section-title">
                  Tout ce dont vous avez besoin,{" "}
                  <span className="site-title-accent">rien de plus.</span>
                </h2>
              </FadeUp>
            </div>
          </Section>

          <div className="site-grid">
            {HOME_FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="site-card site-glass"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: easeLuxe }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="site-card-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── STEPS ── */}
        <Section className="site-section">
          <div className="site-section-head site-section-head--centered">
            <FadeUp>
              <span className="site-eyebrow">Comment ça marche</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="site-section-title">
                En marche en{" "}
                <span className="site-title-accent">3 étapes.</span>
              </h2>
            </FadeUp>
          </div>

          <div className="site-steps">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                className="site-step"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: easeLuxe }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="site-step-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── PROMO ── */}
        <Section className="site-section">
          <FadeUp>
            <motion.div
              className="site-promo site-promo--glow"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
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
            </motion.div>
          </FadeUp>
        </Section>

        {/* ── TESTIMONIALS ── */}
        <section className="site-section site-section--gradient">
          <Section>
            <div className="site-section-head site-section-head--centered">
              <FadeUp>
                <span className="site-eyebrow">Témoignages</span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="site-section-title">
                  Ils font confiance à{" "}
                  <span className="site-title-accent">XOpus.</span>
                </h2>
              </FadeUp>
            </div>
          </Section>

          <div className="site-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                className="site-testimonial site-glass"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: easeLuxe }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="site-stars" style={{ marginBottom: 12 }}>
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--muted)" }}>{t.text}</p>
                <div className="site-testimonial-author">
                  <div className="site-testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="site-testimonial-name">{t.name}</div>
                    <div className="site-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <Section className="site-section">
          <div className="site-section-head site-section-head--centered">
            <FadeUp>
              <span className="site-eyebrow">Questions fréquentes</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="site-section-title">
                Vous avez des{" "}
                <span className="site-title-accent">questions ?</span>
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
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
          </FadeUp>
        </Section>

        {/* ── CTA BAND ── */}
        <FadeUp>
          <motion.div
            className="site-cta-band site-cta-band--shimmer"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
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
          </motion.div>
        </FadeUp>
      </main>

      <SiteFooter />
    </>
  );
}