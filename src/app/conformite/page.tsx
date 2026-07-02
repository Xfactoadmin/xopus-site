import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AppLink from "@/components/AppLink";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Conformité loi anti-fraude TVA",
  description:
    "XOpus est 100% conforme à la loi anti-fraude TVA française. Factur-X, horodatage, intégrité des données — tout est automatique.",
};

const TIMELINE = [
  {
    date: "1er juillet 2026",
    title: "Étape 3 — Toutes les entreprises",
    desc: "Toutes les entreprises assujetties à la TVA doivent émettre des factures conformes. XOpus vous y prépare dès maintenant.",
  },
  {
    date: "1er janvier 2026",
    title: "Étape 2 — Grandes entreprises",
    desc: "Obligation pour les entreprises de plus de 500 salariés et plus de 100M€ de CA de transmettre les e-factures via le Portail Public de Facturation (PPF).",
  },
  {
    date: "1er juillet 2024",
    title: "Étape 1 — Début du dispositif",
    desc: "Entrée en vigueur du dispositif anti-fraude TVA. Les logiciels de facturation doivent garantir la sécurité, la fiabilité et l'intégrité des données de facturation.",
  },
];

const REQUIREMENTS = [
  {
    title: "🔒 Sécurisation des données",
    desc: "Chaque facture est horodatée (date + heure précise) et stockée de manière sécurisée. Impossible de modifier ou supprimer une facture.",
  },
  {
    title: "📝 Intégrité des données",
    desc: "Le contenu des factures ne peut pas être altéré après émission. Chaque modification est tracée et conservée dans un journal d'audit.",
  },
  {
    title: "⏰ Horodatage certifié",
    desc: "Chaque facture reçoit un horodatage certifié qui atteste de la date et l'heure exactes de création. Conforme aux exigences légales.",
  },
  {
    title: "📁 Archivage sécurisé",
    desc: "Conservation des factures pendant 10 ans minimum, sur des serveurs certifiés hébergés en France. Export disponible à tout moment.",
  },
  {
    title: "📄 Format Factur-X",
    desc: "Génération automatique au format Factur-X (hybride PDF + XML), conforme aux normes européennes e-invoicing 2026.",
  },
  {
    title: "🛡️ Piste d'audit complète",
    desc: "Journal d'audit complet : qui a créé, modifié ou envoyé chaque facture, avec l'adresse IP et l'horodatage de chaque action.",
  },
] as const;

export default function ConformitePage() {
  return (
    <>
      <SiteHeader />
      <main className="site-main" style={{ paddingTop: 100 }}>
        {/* Hero */}
        <section style={{ textAlign: "center", padding: "0 24px 4rem", maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <span className="site-eyebrow">Conformité</span>
            <h1 className="site-title" style={{ marginTop: 12 }}>
              Conforme à la{" "}
              <span className="site-title-accent">loi anti-fraude TVA.</span>
            </h1>
            <div className="site-tricolor" style={{ margin: "20px auto 24px" }} />
            <p className="site-lead" style={{ maxWidth: 600, margin: "0 auto" }}>
              XOpus est un logiciel de facturation certifié conforme à la loi
              anti-fraude TVA française. Chaque facture est sécurisée,
              horodatée et intègre.
            </p>
          </Reveal>
        </section>

        {/* Requirements Grid */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <h2 className="site-section-title">
                Les exigences de la{" "}
                <span className="site-title-accent">loi.</span>
              </h2>
            </div>
          </Reveal>

          <div className="site-grid">
            {REQUIREMENTS.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="site-card site-glass">
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="site-section site-section--gradient">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Calendrier</span>
              <h2 className="site-section-title">
                Étapes de la{" "}
                <span className="site-title-accent">mise en conformité.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="site-timeline">
              {TIMELINE.map((item, i) => (
                <div key={item.date} className="site-timeline-item">
                  <div className="site-timeline-dot">{i + 1}</div>
                  <div className="site-timeline-date">{item.date}</div>
                  <h3 className="site-timeline-title">{item.title}</h3>
                  <p className="site-timeline-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="site-cta-band site-cta-band--shimmer">
            <h2>Restez conforme avec XOpus</h2>
            <p>
              XOpus gère toute la conformité automatiquement. Vous vous
              concentrez sur votre métier, on s'occupe du reste.
            </p>
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