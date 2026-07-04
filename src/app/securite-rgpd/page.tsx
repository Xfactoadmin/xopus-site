import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import AppLink from "@/components/AppLink";

export const metadata: Metadata = {
  title: "Sécurité & RGPD — Hébergement France, Chiffrement, Conformité",
  description:
    "XOpus sécurise vos données de facturation avec un hébergement 100% français, chiffrement TLS 1.3 / AES-256, conformité RGPD et certifications ISO 27001. Vos données ne quittent jamais la France.",
  keywords: [
    "sécurité facturation",
    "RGPD facturation",
    "hébergement France",
    "chiffrement données",
    "ISO 27001",
    "sécurité données professionnelles",
    "protection données client",
    "conformité RGPD logiciel",
  ],
  openGraph: {
    title: "Sécurité & RGPD — XOpus",
    description:
      "Hébergement 100% français, chiffrement bout en bout, conformité RGPD. La sécurité de vos données est notre priorité.",
    url: "https://xopus.fr/securite-rgpd",
    type: "website",
    locale: "fr_FR",
    siteName: "XOpus",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://xopus.fr/securite-rgpd",
  },
};

const SECURITY_POINTS = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0055FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Chiffrement bout en bout",
    desc: "Toutes les données sont chiffrées en transit grâce au protocole TLS 1.3 (le plus récent et le plus sécurisé) et au repos grâce au chiffrement AES-256. Que vous enviez une facture par email, que vous consultiez votre tableau de bord ou que vous effectuiez un paiement, chaque octet est protégé. Personne — pas même nos propres ingénieurs — ne peut accéder à vos données en clair.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0055FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Hébergement 100% en France",
    desc: "Vos données ne quittent jamais le territoire français. Nos serveurs sont hébergés dans des datacenters situés en Île-de-France et en région parisienne, certifiés ISO 27001, SOC 2 Type II et HDS (Hébergement de Données de Santé). Aucun transfert hors de l'Union européenne. Conformité totale avec la réglementation française et européenne sur la localisation des données.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0055FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Conformité RGPD totale",
    desc: "XOpus respecte intégralement le Règlement Général sur la Protection des Données (RGPD). Nous collectons uniquement les données strictement nécessaires au fonctionnement du service. Vous pouvez exercer vos droits — accès, rectification, suppression, portabilité — à tout moment. Notre Délégué à la Protection des Données (DPO) est joignable à tout moment. Chaque traitement de données est documenté et traceable.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0055FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Surveillance 24/7",
    desc: "Notre infrastructure est monitorée en permanence par des outils de surveillance automatisés qui détectent toute anomalie en temps réel. Accès non autorisés, tentatives d'intrusion, pics de trafic suspects — tout est surveillé et chaque incident déclenche une alerte immédiate. Nous appliquons les protocoles de sécurité les plus stricts du secteur.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0055FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Sauvegardes automatiques",
    desc: "Des sauvegardes complètes de vos données sont effectuées automatiquement chaque jour, stockées dans un lieu différent de celui des serveurs principaux (principe du 3-2-1). En cas de problème majeur, la restauration est possible en quelques minutes. Vous pouvez également exporter l'intégralité de vos données à tout moment, en format standard et lisible.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0055FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Piste d'audit complète",
    desc: "Chaque action dans XOpus est tracée : qui a fait quoi, quand, depuis quelle adresse IP. La piste d'audit est immuable et ne peut être modifiée, même par un administrateur. C'est une exigence de la loi anti-fraude TVA et un gage de transparence totale. Vous pouvez consulter l'historique complet de votre compte à tout moment.",
  },
] as const;

const CERTIFICATIONS = [
  {
    name: "ISO 27001",
    desc: "Gestion de la sécurité de l'information",
  },
  {
    name: "SOC 2 Type II",
    desc: "Contrôles de sécurité et de confidentialité",
  },
  {
    name: "RGPD",
    desc: "Conformité européenne sur la protection des données",
  },
  {
    name: "HDS",
    desc: "Hébergement de Données de Santé",
  },
];

const SECURITY_FAQ = [
  {
    q: "Où sont hébergées mes données ?",
    a: "Vos données sont hébergées dans des datacenters situés en France (Île-de-France et région parisienne), certifiés ISO 27001 et SOC 2 Type II. Aucune donnée ne quitte le territoire français ni l'Union européenne.",
  },
  {
    q: "Qui peut accéder à mes données ?",
    a: "Seul vous et les personnes que vous autorisez explicitement peuvent accéder à vos données via votre compte XOpus. Nos équipes techniques n'ont pas accès au contenu de vos factures. En cas de besoin technique urgent, un accès strictement encadré et tracé peut être accordé avec votre autorisation préalable.",
  },
  {
    q: "Puis-je supprimer toutes mes données ?",
    a: "Oui. Vous pouvez supprimer votre compte et toutes les données associées à tout moment depuis vos paramètres. La suppression est définitive et irréversible. Conformément au RGPD, nous procédons à la suppression effective sous 30 jours maximum.",
  },
  {
    q: "Comment signaler une faille de sécurité ?",
    a: "Si vous constatez ou suspectez une faille de sécurité, contactez immédiatement notre équipe à security@xopus.fr. Nous disposons d'une procédure d'incident documentée et nous répondons dans l'heure suivant la notification.",
  },
];

export default function SecuriteRgpdPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-main site-page-hero">
        {/* Hero */}
        <section
          style={{
            textAlign: "center",
            padding: "0 24px 4rem",
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <Reveal>
            <span className="site-eyebrow">Sécurité & RGPD</span>
            <h1 className="site-title site-section-head-mt">
              Votre sécurité,{" "}
              <span className="site-title-accent">notre priorité.</span>
            </h1>
            <div className="site-tricolor site-hero-tricolor" />
            <p className="site-lead site-hero-lead">
              Les données de vos clients et de votre activité sont précieuses.
              XOpus les protège avec les standards de sécurité les plus élevés
              du secteur, hébergés exclusivement en France.
            </p>
          </Reveal>
        </section>

        {/* Trust badges */}
        <section className="site-section" style={{ paddingBottom: "3rem" }}>
          <Reveal>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 32,
                flexWrap: "wrap",
                maxWidth: 800,
                margin: "0 auto",
                padding: "0 24px",
              }}
            >
              {CERTIFICATIONS.map((c) => (
                <div
                  key={c.name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    minWidth: 140,
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 16,
                      background: "rgba(0, 85, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 10,
                      border: "2px solid rgba(0, 85, 255, 0.15)",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0055FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{c.name}</div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--muted, #6b7280)",
                      marginTop: 2,
                    }}
                  >
                    {c.desc}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 6 Security Points */}
        <section
          className="site-section site-section--gradient"
          style={{ padding: "4rem 24px" }}
        >
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Nos engagements</span>
              <h2
                className="site-section-title site-title site-section-head-mt"
              >
                6 piliers de{" "}
                <span className="site-title-accent">sécurité.</span>
              </h2>
              <p
                className="site-lead"
                style={{
                  maxWidth: 560,
                  margin: "16px auto 0",
                  textAlign: "center",
                }}
              >
                Chaque aspect de l&apos;infrastructure XOpus a été conçu avec la
                sécurité comme préoccupation n°1. Voici nos engagements
                concrets.
              </p>
            </div>
          </Reveal>

          <div
            className="site-grid"
            style={{
              gridTemplateColumns: "repeat(2, 1fr)",
              maxWidth: 900,
              margin: "3rem auto 0",
            }}
          >
            {SECURITY_POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div
                  className="site-card site-glass"
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: "rgba(0, 85, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        marginBottom: 6,
                        marginTop: 0,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "var(--muted, #6b7280)",
                        margin: 0,
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* RGPD Section */}
        <section className="site-section" style={{ padding: "4rem 24px" }}>
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">RGPD</span>
              <h2
                className="site-section-title site-title site-section-head-mt"
              >
                Vos données,{" "}
                <span className="site-title-accent">vos droits.</span>
              </h2>
              <p
                className="site-lead"
                style={{
                  maxWidth: 580,
                  margin: "16px auto 0",
                  textAlign: "center",
                }}
              >
                XOpus respecte le Règlement Général sur la Protection des
                Données. Vous gardez le contrôle total sur vos informations.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="site-grid"
              style={{
                gridTemplateColumns: "repeat(2, 1fr)",
                maxWidth: 800,
                margin: "3rem auto 0",
              }}
            >
              {[
                {
                  title: "Droit d'accès",
                  desc: "Vous pouvez consulter à tout moment l'intégralité des données que nous détenons à votre sujet, en un clic depuis votre espace personnel.",
                },
                {
                  title: "Droit de rectification",
                  desc: "Vous pouvez modifier vos informations personnelles directement depuis votre profil. Pas besoin de nous écrire.",
                },
                {
                  title: "Droit à l'effacement",
                  desc: "Vous pouvez supprimer votre compte et toutes vos données de manière définitive. La suppression est effective sous 30 jours.",
                },
                {
                  title: "Droit à la portabilité",
                  desc: "Vous pouvez exporter l'intégralité de vos données dans des formats standards (CSV, PDF) pour les迁移 vers un autre service.",
                },
              ].map((r, i) => (
                <div
                  key={r.title}
                  className="site-card site-glass"
                  style={{ padding: "1.5rem" }}
                >
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      marginBottom: 6,
                      marginTop: 0,
                      color: "#0055FF",
                    }}
                  >
                    {r.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "var(--muted, #6b7280)",
                      margin: 0,
                    }}
                  >
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Security FAQ */}
        <section
          className="site-section site-section--gradient"
          style={{ padding: "4rem 24px" }}
        >
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Questions sécurité</span>
              <h2
                className="site-section-title site-title site-section-head-mt"
              >
                Sécurité,
                <br />
                <span className="site-title-accent">
                  les questions essentielles.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              style={{
                maxWidth: 700,
                margin: "3rem auto 0",
              }}
            >
              {SECURITY_FAQ.map((item, i) => (
                <details
                  key={i}
                  className="site-card"
                  style={{
                    marginBottom: 12,
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <summary
                    style={{
                      fontWeight: 600,
                      fontSize: 16,
                      cursor: "pointer",
                      listStyle: "none",
                    }}
                  >
                    {item.q}
                  </summary>
                  <p
                    style={{
                      marginTop: 12,
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "var(--muted, #6b7280)",
                    }}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Transparency Section */}
        <section className="site-section" style={{ padding: "4rem 24px" }}>
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Transparence</span>
              <h2
                className="site-section-title site-title site-section-head-mt"
              >
                Nous croyons en la{" "}
                <span className="site-title-accent">transparence totale.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div
              style={{
                maxWidth: 680,
                margin: "2rem auto 0",
                fontSize: 15,
                lineHeight: 1.8,
                color: "var(--text, #1f2937)",
              }}
            >
              <p style={{ marginBottom: 16 }}>
                Contrairement à de nombreux logiciels de facturation, XOpus ne
                vend pas vos données. Nous ne les revendons pas à des tiers.
                Nous ne les utilisons pas à des fins publicitaires. Vos
                informations sont utilisées uniquement pour le fonctionnement du
                service que vous payez.
              </p>
              <p style={{ marginBottom: 16 }}>
                Notre modèle économique est simple : vous payez 9,99 €/mois, et
                en échange, vous bénéficiez d&apos;un service de facturation
                complet, sécurisé et conforme. Point final. Pas de monétisation
                cachée, pas de revente de données.
              </p>
              <p>
                Si vous avez la moindre question sur la sécurité de vos données,
                vous pouvez contacter directement notre Délégué à la Protection
                des Données à{" "}
                <a
                  href="mailto:dpo@xopus.fr"
                  style={{ color: "#0055FF", textDecoration: "underline" }}
                >
                  dpo@xopus.fr
                </a>
                . Nous vous répondons sous 48h.
              </p>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="site-cta-band site-cta-band--shimmer">
            <h2>Une question sur la sécurité ?</h2>
            <p>
              Notre équipe technique est disponible pour répondre à toutes vos
              questions. Vous pouvez également lire notre politique de
              confidentialité complète.
            </p>
            <div className="site-cta-row site-cta-row-center">
              <AppLink
                intent="register"
                className="site-btn site-btn-primary site-btn-lg"
              >
                Essai gratuit 14 jours
              </AppLink>
              <Link
                href="/politique-confidentialite"
                className="site-btn site-btn-ghost site-btn-lg"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
