import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";


export const metadata: Metadata = {
  title: "Pourquoi choisir XOpus — Logiciel de facturation pour artisans",
  description:
    "Découvrez pourquoi 10 000+ artisans, indépendants et TPE choisissent XOpus : facturation 100% française, conforme loi anti-fraude TVA, 9,99€/mois tout inclus.",
  keywords: [
    "pourquoi choisir XOpus",
    "logiciel facturation artisan",
    "XOpus avis",
    "meilleur logiciel facturation",
    "facturation indépendant",
    "logiciel TPE",
    "facturation française",
    "loi anti-fraude TVA",
    "Factur-X",
  ],
  openGraph: {
    title: "Pourquoi choisir XOpus — Logiciel de facturation pour artisans",
    description:
      "10 000+ artisans font confiance à XOpus. Découvrez pourquoi : facturation rapide, conforme et 100% française.",
    url: "https://xopus.fr/pourquoi-xopus",
    type: "website",
    locale: "fr_FR",
    siteName: "XOpus",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://xopus.fr/pourquoi-xopus",
  },
};

const REASONS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Facturation ultra-rapide",
    desc: "Créez un devis en 30 secondes, une facture en 1 minute. L'interface a été conçue pour les gens qui ont du travail à faire, pas pour passer des heures devant un écran. Zéro formation requise, zéro complication.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "100% conforme, 0% stress",
    desc: "La loi anti-fraude TVA impose des exigences strictes aux logiciels de facturation. XOpus génère automatiquement les Factur-X, horodate chaque document et garantit l'intégrité des données. Vous êtes conforme sans y penser.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Un prix honnête, tout inclus",
    desc: "9,99 €/mois, c'est tout. Pas de frais cachés, pas de commission sur les paiements, pas de modules payants en plus. Tout est inclus : factures illimitées, Factur-X, paiements en ligne, espace client, relances, exports comptables.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Hébergé en France",
    desc: "Vos données restent en France, dans des datacenters certifiés ISO 27001. Aucun transfert hors UE. Chiffrement TLS 1.3 en transit, AES-256 au repos. Vos informations de facturation et celles de vos clients sont entre de bonnes mains.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    title: "Support humain, pas un bot",
    desc: "Quand vous avez une question, vous parlez à quelqu'un qui comprend votre métier. Notre équipe est basée en France, compose d'anciens artisans et indépendants qui savent ce que c'est de gérer une activité. Réponse sous 24h.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Fait pour durer",
    desc: "XOpus n'est pas un projet jetable. Nous construisons un outil durable, avec des mises à jour régulières, des améliorations continues et une vision long terme. Vos données sont exportables à tout moment. Vous n'êtes jamais prisonnier.",
  },
] as const;

const TESTIMONIALS = [
  {
    name: "Marc D.",
    role: "Électricien, Toulouse",
    text: "Avant XOpus, je passais 2 heures par semaine sur mes factures. Maintenant, ça prend 10 minutes. Le Factur-X se génère tout seul. Je recommande à 100%.",
  },
  {
    name: "Sophie L.",
    role: "Designer freelance, Paris",
    text: "Enfin un outil simple et pas cher qui fait tout ce dont j'ai besoin. Les paiements en ligne ont transformé mon business : mes clients paient en 2 clics.",
  },
  {
    name: "Thomas B.",
    role: "Plombier, Lyon",
    text: "La conformité anti-fraude TVA me terrifiait. XOpus gère tout automatiquement. Je dors sur mes deux oreilles.",
  },
];

const STATS = [
  { value: "10 000+", label: "Utilisateurs actifs" },
  { value: "99,9%", label: "Uptime garanti" },
  { value: "24h", label: "Support réactif" },
  { value: "100%", label: "Fait en France" },
];

export default function PourquoiXopusPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-main" style={{ paddingTop: 100 }}>
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
            <span className="site-eyebrow">Pourquoi XOpus</span>
            <h1 className="site-title" style={{ marginTop: 12 }}>
              Pourquoi{" "}
              <span className="site-title-accent">
                10 000+ artisans
              </span>{" "}
              choisissent XOpus
            </h1>
            <div className="site-tricolor" style={{ margin: "20px auto 24px" }} />
            <p className="site-lead" style={{ maxWidth: 620, margin: "0 auto" }}>
              Les artisans et indépendants méritent un outil de facturation
              simple, fiable et conforme. Pas un logiciel complexe conçu pour
              les grandes entreprises. XOpus est né de cette conviction.
            </p>
          </Reveal>
        </section>

        {/* Stats */}
        <section className="site-section" style={{ paddingBottom: "3rem" }}>
          <Reveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 24,
                maxWidth: 700,
                margin: "0 auto",
                padding: "0 24px",
                textAlign: "center",
              }}
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: 800,
                      color: "#0055FF",
                      lineHeight: 1.2,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "var(--muted, #6b7280)",
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Problem Section */}
        <section
          className="site-section site-section--gradient"
          style={{ padding: "4rem 24px" }}
        >
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Le problème</span>
              <h2 className="site-section-title" style={{ marginTop: 12 }}>
                La facturation{" "}
                <span className="site-title-accent">
                  n&apos;est pas votre métier.
                </span>
              </h2>
              <p
                className="site-lead"
                style={{
                  maxWidth: 600,
                  margin: "16px auto 0",
                  textAlign: "center",
                }}
              >
                Vous êtes artisans, plombiers, électriciens, consultants,
                développeurs, photographes. Vous savez faire votre métier.
                Mais la paperasse ? Les factures ? La conformité TVA ? Les
                relances ? Tout ça, vous n&apos;avez pas le temps de vous en
                occuper.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div
              className="site-grid"
              style={{
                gridTemplateColumns: "repeat(3, 1fr)",
                maxWidth: 900,
                margin: "3rem auto 0",
              }}
            >
              {[
                {
                  emoji: "⏰",
                  title: "Vous perdez du temps",
                  desc: "Des heures à créer des factures Word ou Excel, à formater des PDF, à envoyer des emails de relance. Du temps que vous pourriez passer sur des missions rémunératrices.",
                },
                {
                  emoji: "😰",
                  title: "Vous risquez des amendes",
                  desc: "La loi anti-fraude TVA est stricte. Un logiciel non conforme peut coûter 7 500 € d'amende par facture non conforme. Sans parler du risque de redressement fiscal.",
                },
                {
                  emoji: "💸",
                  title: "Vous perdez de l'argent",
                  desc: "Les factures impayées, les relances oubliées, les devis qui ne se transforment jamais en factures. Chaque jour sans un bon outil de facturation, c'est du chiffre d'affaires perdu.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="site-card site-glass"
                  style={{ textAlign: "center", padding: "2rem 1.5rem" }}
                >
                  <div style={{ fontSize: 36, marginBottom: 12 }}>
                    {item.emoji}
                  </div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "var(--muted, #6b7280)",
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Solution / 6 Reasons */}
        <section className="site-section" style={{ padding: "4rem 24px" }}>
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">La solution</span>
              <h2 className="site-section-title" style={{ marginTop: 12 }}>
                6 raisons de choisir{" "}
                <span className="site-title-accent">XOpus.</span>
              </h2>
              <p
                className="site-lead"
                style={{
                  maxWidth: 560,
                  margin: "16px auto 0",
                  textAlign: "center",
                }}
              >
                XOpus a été conçu pour résoudre exactement ces problèmes.
                Voici ce qui fait la différence.
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
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div
                  className="site-card site-glass"
                  style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: "rgba(0, 85, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {r.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        marginBottom: 6,
                        marginTop: 0,
                      }}
                    >
                      {r.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "var(--muted, #6b7280)",
                        margin: 0,
                      }}
                    >
                      {r.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="site-section site-section--gradient"
          style={{ padding: "4rem 24px" }}
        >
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Témoignages</span>
              <h2 className="site-section-title" style={{ marginTop: 12 }}>
                Ils en parlent{" "}
                <span className="site-title-accent">mieux que nous.</span>
              </h2>
            </div>
          </Reveal>

          <div
            className="site-grid"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              maxWidth: 960,
              margin: "3rem auto 0",
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div
                  className="site-card site-glass"
                  style={{ padding: "2rem 1.5rem" }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      fontStyle: "italic",
                      color: "var(--text, #1f2937)",
                      marginBottom: 16,
                      marginTop: 0,
                    }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #0055FF, #0033CC)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: 14,
                        }}
                      >
                        {t.name}
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: "var(--muted, #6b7280)",
                        }}
                      >
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="site-section" style={{ padding: "4rem 24px" }}>
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Comparatif</span>
              <h2 className="site-section-title" style={{ marginTop: 12 }}>
                XOpus vs{" "}
                <span className="site-title-accent">les autres.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ maxWidth: 700, margin: "3rem auto 0", overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 15,
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px 16px",
                        borderBottom: "2px solid #e5e7eb",
                        fontWeight: 600,
                        color: "var(--muted, #6b7280)",
                      }}
                    >
                      Critère
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "14px 16px",
                        borderBottom: "2px solid #0055FF",
                        fontWeight: 700,
                        color: "#0055FF",
                      }}
                    >
                      XOpus
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "14px 16px",
                        borderBottom: "2px solid #e5e7eb",
                        fontWeight: 600,
                        color: "var(--muted, #6b7280)",
                      }}
                    >
                      Concurrents
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { critere: "Tarif mensuel", xopus: "9,99 €", autre: "15-50 €" },
                    { critere: "Essai gratuit", xopus: "14 jours", autre: "7-30 jours" },
                    { critere: "Factur-X automatique", xopus: "✓", autre: "✗ / payant" },
                    { critere: "Paiements en ligne", xopus: "✓ Inclus", autre: "Modules payants" },
                    { critere: "Hébergement France", xopus: "✓", autre: "Souvent non" },
                    { critere: "Support en français", xopus: "✓ Réactif", autre: "Variable" },
                    { critere: "Frais cachés", xopus: "Aucun", autre: "Fréquents" },
                    { critere: "Conformité anti-fraude", xopus: "✓ Automatique", autre: "Partielle" },
                  ].map((row, i) => (
                    <tr
                      key={row.critere}
                      style={{
                        background:
                          i % 2 === 0 ? "rgba(0,85,255,0.03)" : "transparent",
                      }}
                    >
                      <td
                        style={{
                          padding: "12px 16px",
                          borderBottom: "1px solid #f3f4f6",
                        }}
                      >
                        {row.critere}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          borderBottom: "1px solid #f3f4f6",
                          textAlign: "center",
                          fontWeight: 600,
                          color: "#0055FF",
                        }}
                      >
                        {row.xopus}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          borderBottom: "1px solid #f3f4f6",
                          textAlign: "center",
                          color: "var(--muted, #6b7280)",
                        }}
                      >
                        {row.autre}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* How it works */}
        <section
          className="site-section site-section--gradient"
          style={{ padding: "4rem 24px" }}
        >
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Comment ça marche</span>
              <h2 className="site-section-title" style={{ marginTop: 12 }}>
                Opérationnel en{" "}
                <span className="site-title-accent">3 minutes.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 32,
                maxWidth: 800,
                margin: "3rem auto 0",
              }}
            >
              {[
                {
                  step: "1",
                  title: "Créez votre compte",
                  desc: "Inscrivez-vous en 30 secondes. Aucune carte bancaire requise. Votre espace XOpus est immédiatement accessible.",
                },
                {
                  step: "2",
                  title: "Créez votre première facture",
                  desc: "Ajoutez votre logo, vos informations et votre premier client. Le reste est automatique : TVA, mentions légales, Factur-X.",
                },
                {
                  step: "3",
                  title: "Envoyez et encaissez",
                  desc: "Envoyez la facture par email. Votre client peut payer en ligne en 2 clics. Vous suivez tout en temps réel.",
                },
              ].map((s, i) => (
                <div
                  key={s.step}
                  style={{ textAlign: "center", position: "relative" }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #0055FF, #0033CC)",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    {s.step}
                  </div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "var(--muted, #6b7280)",
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="site-cta-band site-cta-band--shimmer">
            <h2>Rejoignez les 10 000+ artisans qui facturent avec XOpus</h2>
            <p>
              14 jours gratuits, sans carte bancaire. Résiliation en 1 clic.
              Zéro risque, zéro engagement.
            </p>
            <div className="site-cta-row" style={{ justifyContent: "center" }}>
              <Link href='https://app.xopus.fr'>
                Accéder à l'application
              </Link>
              <Link
                href="/tarifs"
                className="site-btn site-btn-ghost site-btn-lg"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
