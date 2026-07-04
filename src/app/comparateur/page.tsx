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
  title:
    "Comparateur logiciel facturation 2026 — XOpus vs Pennylane, Freebe, Indy, Holded",
  description:
    "Comparez XOpus avec Pennylane, Freebe, Indy, Holded, Henrri, Obat, Tolteck et Evoliz. Prix, fonctionnalités, Factur-X, conformité anti-fraude. Trouvez le meilleur logiciel de facturation en 2026.",
  keywords: [
    "comparateur logiciel facturation 2026",
    "meilleur logiciel facturation",
    "XOpus vs Pennylane",
    "XOpus vs Freebe",
    "XOpus vs Indy",
    "logiciel facturation artisan comparatif",
    "meilleur logiciel facturation auto-entrepreneur",
  ],
  openGraph: {
    title:
      "Comparateur logiciels de facturation 2026 — XOpus vs la concurrence",
    description:
      "Prix, fonctionnalités, conformité : comparatif complet de 9 logiciels de facturation pour artisans et indépendants.",
    url: "https://xopus.fr/comparateur",
    siteName: "XOpus",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://xopus.fr/comparateur",
  },
};

/* ------------------------------------------------------------------ */
/*  Comparison data — 9 competitors                                     */
/* ------------------------------------------------------------------ */
type Row = {
  crit: string;
  xopus: boolean | string;
  pennylane: boolean | string;
  freebe: boolean | string;
  indy: boolean | string;
  holded: boolean | string;
  henrri: boolean | string;
  obat: boolean | string;
  tolteck: boolean | string;
  evoliz: boolean | string;
};

const TABLE: Row[] = [
  {
    crit: "Prix mensuel",
    xopus: "9,99 €",
    pennylane: "49 €",
    freebe: "14,90 €",
    indy: "22 €",
    holded: "49 €",
    henrri: "19 €",
    obat: "15 €",
    tolteck: "14,90 €",
    evoliz: "23 €",
  },
  {
    crit: "Essai gratuit",
    xopus: "14 jours",
    pennylane: "7 jours",
    freebe: "14 jours",
    indy: "14 jours",
    holded: "14 jours",
    henrri: "14 jours",
    obat: "14 jours",
    tolteck: "14 jours",
    evoliz: "14 jours",
  },
  {
    crit: "Factur-X (e-facture)",
    xopus: true,
    pennylane: false,
    freebe: false,
    indy: false,
    holded: false,
    henrri: false,
    obat: false,
    tolteck: false,
    evoliz: false,
  },
  {
    crit: "Loi anti-fraude TVA",
    xopus: true,
    pennylane: true,
    freebe: true,
    indy: true,
    holded: true,
    henrri: true,
    obat: true,
    tolteck: true,
    evoliz: true,
  },
  {
    crit: "Paiements en ligne",
    xopus: true,
    pennylane: true,
    freebe: true,
    indy: true,
    holded: true,
    henrri: false,
    obat: false,
    tolteck: true,
    evoliz: true,
  },
  {
    crit: "Espace client",
    xopus: true,
    pennylane: false,
    freebe: false,
    indy: false,
    holded: false,
    henrri: false,
    obat: false,
    tolteck: false,
    evoliz: false,
  },
  {
    crit: "Site vitrine inclus",
    xopus: true,
    pennylane: false,
    freebe: false,
    indy: false,
    holded: false,
    henrri: false,
    obat: false,
    tolteck: false,
    evoliz: false,
  },
  {
    crit: "Modules pro (XRepair, XPay…)",
    xopus: true,
    pennylane: false,
    freebe: false,
    indy: false,
    holded: false,
    henrri: false,
    obat: false,
    tolteck: false,
    evoliz: false,
  },
  {
    crit: "Hébergement France",
    xopus: true,
    pennylane: true,
    freebe: true,
    indy: false,
    holded: false,
    henrri: true,
    obat: true,
    tolteck: true,
    evoliz: true,
  },
  {
    crit: "Support en français",
    xopus: true,
    pennylane: true,
    freebe: true,
    indy: true,
    holded: true,
    henrri: true,
    obat: true,
    tolteck: true,
    evoliz: true,
  },
  {
    crit: "Multi-utilisateurs",
    xopus: true,
    pennylane: true,
    freebe: false,
    indy: true,
    holded: true,
    henrri: false,
    obat: false,
    tolteck: false,
    evoliz: true,
  },
  {
    crit: "Mode sombre",
    xopus: true,
    pennylane: false,
    freebe: false,
    indy: false,
    holded: false,
    henrri: false,
    obat: false,
    tolteck: false,
    evoliz: false,
  },
  {
    crit: "API REST",
    xopus: true,
    pennylane: true,
    freebe: false,
    indy: false,
    holded: true,
    henrri: false,
    obat: false,
    tolteck: false,
    evoliz: true,
  },
  {
    crit: "Branding blanc",
    xopus: true,
    pennylane: false,
    freebe: false,
    indy: false,
    holded: true,
    henrri: false,
    obat: false,
    tolteck: false,
    evoliz: false,
  },
  {
    crit: "Export comptable",
    xopus: true,
    pennylane: true,
    freebe: true,
    indy: true,
    holded: true,
    henrri: true,
    obat: true,
    tolteck: true,
    evoliz: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Hidden costs data                                                   */
/* ------------------------------------------------------------------ */
const HIDDEN_COSTS = [
  {
    name: "Pennylane",
    base: "49 €/mois",
    extras: [
      "Comptable connecté : 29 €/mois supplémentaires",
      "Modules avancés (stock, projet) : à la carte",
      "Pas de Factur-X inclus dans l&apos;offre de base",
    ],
  },
  {
    name: "Holded",
    base: "49 €/mois",
    extras: [
      "Modules CRM, projet, stock en supplément",
      "Pas d&apos;hébergement en France",
      "Support téléphonique réservé au plan Enterprise",
    ],
  },
  {
    name: "Indy",
    base: "22 €/mois",
    extras: [
      "Pas de multi-utilisateurs",
      "Pas de Factur-X",
      "Pas d&apos;espace client ni de site vitrine",
    ],
  },
  {
    name: "Freebe / Tolteck",
    base: "~15 €/mois",
    extras: [
      "Pas de multi-utilisateurs",
      "Pas de Factur-X",
      "Fonctionnalités limitées par rapport à XOpus",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Reasons data                                                        */
/* ------------------------------------------------------------------ */
const REASONS = [
  {
    title: "100 % français et hébergé en France",
    desc: "Vos données ne quittent jamais le territoire. Conformité RGPD maximale, serveurs certifiés ISO 27001.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0055FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" />
      </svg>
    ),
  },
  {
    title: "Le tarif le plus bas du marché",
    desc: "À 9,99 €/mois, XOpus coûte 2 à 5 fois moins cher que la concurrence, sans frais cachés ni commissions.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0055FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Seul logiciel avec Factur-X natif",
    desc: "XOpus est le seul logiciel du marché à proposer la génération automatique de Factur-X, obligatoire pour la loi anti-fraude TVA.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0055FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Un écosystème complet, pas juste une appli",
    desc: "Espace client, site vitrine, modules XRepair et XPay : XOpus est un véritable écosystème pensé pour votre activité.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0055FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Cell helper                                                         */
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
  return <span style={{ fontSize: 13, whiteSpace: "nowrap" }}>{value}</span>;
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */
export default function ComparateurPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-main site-page-hero">
        {/* ===== HERO ===== */}
        <section
          style={{
            textAlign: "center",
            padding: "0 24px 4rem",
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          <Reveal>
            <span className="site-eyebrow">Comparateur 2026</span>
            <h1 className="site-title site-section-head-mt">
              XOpus vs{" "}
              <span className="site-title-accent">la concurrence.</span>
            </h1>
            <div className="site-tricolor site-hero-tricolor" />
            <p className="site-lead site-hero-lead">
              Comparez XOpus avec les 8 autres logiciels de facturation les plus
              utilisés en France. Prix, fonctionnalités, conformité : tout est
              passé au crible pour vous aider à faire le bon choix.
            </p>
          </Reveal>
        </section>

        {/* ===== TABLEAU COMPARATIF ===== */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Comparatif détaillé</span>
              <h2 className="site-section-title">
                Tableau comparatif{" "}
                <span className="site-title-accent">complet.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="site-table-wrap">
              <table className="site-compare-table">
                <thead>
                  <tr>
                    <th>Critère</th>
                    <th className="col-xopus">XOpus</th>
                    <th>Pennylane</th>
                    <th>Freebe</th>
                    <th>Indy</th>
                    <th>Holded</th>
                    <th>Henrri</th>
                    <th>Obat</th>
                    <th>Tolteck</th>
                    <th>Evoliz</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE.map((row) => (
                    <tr key={row.crit}>
                      <td className="crit" data-label="Critère">
                        {row.crit}
                      </td>
                      <td className="cell-win" data-label="XOpus">
                        <Cell value={row.xopus} />
                      </td>
                      <td data-label="Pennylane">
                        <Cell value={row.pennylane} />
                      </td>
                      <td data-label="Freebe">
                        <Cell value={row.freebe} />
                      </td>
                      <td data-label="Indy">
                        <Cell value={row.indy} />
                      </td>
                      <td data-label="Holded">
                        <Cell value={row.holded} />
                      </td>
                      <td data-label="Henrri">
                        <Cell value={row.henrri} />
                      </td>
                      <td data-label="Obat">
                        <Cell value={row.obat} />
                      </td>
                      <td data-label="Tolteck">
                        <Cell value={row.tolteck} />
                      </td>
                      <td data-label="Evoliz">
                        <Cell value={row.evoliz} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* ===== VRAIS COÛTS CACHÉS ===== */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Transparence</span>
              <h2 className="site-section-title">
                Les vrais coûts{" "}
                <span className="site-title-accent">
                  cachés des concurrents.
                </span>
              </h2>
              <p className="site-lead site-section-head-desc">
                Le prix affiché n&apos;est pas toujours le prix réel. Découvrez
                les suppléments que d&apos;autres logiciels facturent en plus de
                leur forfait de base.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
                maxWidth: 1040,
                margin: "0 auto",
                padding: "0 24px",
              }}
            >
              {HIDDEN_COSTS.map((item) => (
                <div
                  key={item.name}
                  className="site-card"
                  style={{ padding: 24 }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 12,
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FF0033"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                    <h3 style={{ fontSize: 16, fontWeight: 600 }}>
                      {item.name}
                    </h3>
                    <span
                      style={{
                        fontSize: 13,
                        color: "var(--muted)",
                        marginLeft: "auto",
                      }}
                    >
                      {item.base}
                    </span>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {item.extras.map((e, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: 14,
                          lineHeight: 1.6,
                          color: "var(--muted)",
                          display: "flex",
                          gap: 8,
                        }}
                      >
                        <span style={{ color: "#FF0033", flexShrink: 0 }}>
                          +
                        </span>
                        <span dangerouslySetInnerHTML={{ __html: e }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div
              className="site-card"
              style={{
                maxWidth: 700,
                margin: "28px auto 0",
                padding: 24,
                textAlign: "center",
                border: "1px solid rgba(0,85,255,0.2)",
              }}
            >
              <p className="site-card-heading">
                <span style={{ color: "#0055FF" }}>XOpus</span> — 9,99 €/mois,
                tout inclus, sans surprise.
              </p>
              <p style={{ fontSize: 14, color: "var(--muted)" }}>
                Pas de modules en supplément, pas de frais de comptable
                connecté, pas de commission sur les paiements. Vous payez 9,99 €
                et vous avez accès à tout.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ===== POURQUOI LES ARTISANS NOUS PRÉFÈRENT ===== */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Pourquoi XOpus ?</span>
              <h2 className="site-section-title">
                Pourquoi les artisans{" "}
                <span className="site-title-accent">nous préfèrent.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
                maxWidth: 1040,
                margin: "0 auto",
                padding: "0 24px",
              }}
            >
              {REASONS.map((r) => (
                <div
                  key={r.title}
                  className="site-card"
                  style={{ padding: 28 }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(0,85,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    {r.icon}
                  </div>
                  <h3 className="site-card-heading-lg">{r.title}</h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "var(--muted)",
                    }}
                  >
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ===== TEXTE SEO LONG ===== */}
        <section className="site-section">
          <Reveal>
            <div className="site-centered-block">
              <h2
                className="site-section-title"
                style={{ textAlign: "center", marginBottom: 24 }}
              >
                Le <span className="site-title-accent">meilleur logiciel</span>{" "}
                de facturation en 2026
              </h2>
              <div
                style={{
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: "var(--muted)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <p>
                  Choisir un logiciel de facturation en 2026 n&apos;est pas une
                  décision anodine. Pour un artisan, un indépendant ou une TPE,
                  l&apos;outil de facturation est au cœur de l&apos;activité :
                  c&apos;est lui qui génère les devis, les factures, qui gère
                  les paiements et qui assure la conformité avec la législation
                  en vigueur.
                </p>
                <p>
                  La loi anti-fraude TVA, entrée en vigueur en 2018 pour les
                  entreprises assujetties et étendue progressivement, impose
                  désormais à toutes les entreprises de sécuriser leurs
                  factures. Le Factur-X — format hybride combinant PDF et XML —
                  est devenu le standard pour répondre à cette obligation. Or,
                  la plupart des logiciels concurrents ne proposent pas encore
                  la génération automatique de Factur-X, ou la facturent en
                  supplément.
                </p>
                <p>
                  XOpus se distingue en proposant la génération automatique de
                  Factur-X dans tous ses plans, y compris l&apos;essai gratuit.
                  C&apos;est un avantage konkurrentiel majeur pour les
                  professionnels qui souhaitent être en conformité sans effort
                  supplémentaire.
                </p>
                <p>
                  Au-delà de la conformité, XOpus offre un écosystème complet
                  qui dépasse la simple facturation. L&apos;espace client permet
                  à vos clients de suivre leurs devis et factures en ligne. Le
                  site vitrine inclus vous donne une présence web
                  professionnelle sans avoir à créer un site séparé. Les modules
                  XRepair et XPay s&apos;adaptent à des besoins métier
                  spécifiques.
                </p>
                <p>
                  Enfin, le tarif de 9,99 €/mois — le plus bas du marché pour un
                  outil aussi complet — fait de XOpus le choix logique pour tout
                  professionnel qui veut allier qualité, conformité et
                  economies. Pas de frais cachés, pas de commissions sur les
                  paiements, pas de piège tarifaire : juste un excellent outil à
                  un prix juste.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== CTA ===== */}
        <Reveal>
          <div className="site-cta-band site-cta-band--shimmer">
            <h2>Convinced ?</h2>
            <p>
              Rejoignez XOpus et profitez du meilleur rapport qualité/prix du
              marché. 14 jours gratuits, sans carte bancaire.
            </p>
            <div className="site-cta-row site-cta-row-center">
              <AppLink
                intent="register"
                className="site-btn site-btn-primary site-btn-lg"
              >
                Essai gratuit 14 jours
              </AppLink>
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
