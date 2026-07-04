import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title:
    "Fonctionnalités — Logiciel de facturation 100% français pour artisans et indépendants | XOpus",
  description:
    "Découvrez XOpus : devis, factures Factur-X, paiements Stripe, espace client, conformité loi anti-fraude TVA. Le logiciel de facturation tout-en-un pour artisans, auto-entrepreneurs et TPE. 9,99€/mois.",
  alternates: { canonical: "https://xopus.fr/fonctionnalites" },
};

const GROUPS = [
  {
    title: "Facturation intelligente",
    icon: "📄",
    desc: "Créez, envoyez et suivez vos factures en un clin d'œil.",
    features: [
      {
        title: "Devis & Factures pro",
        desc: "Générez des devis et factures professionnels en quelques clics. Personnalisez-les avec votre logo, vos couleurs et vos mentions légales.",
      },
      {
        title: "Factur-X automatique",
        desc: "Conformité garantie : chaque facture est automatiquement au format Factur-X (e-facture 2026), conforme à la loi anti-fraude TVA française.",
      },
      {
        title: "Factures récurrentes",
        desc: "Programmez la génération automatique de vos factures mensuelles. Zéro intervention manuelle, zéro oubli.",
      },
      {
        title: "Relances automatiques",
        desc: "XOpus envoie des relances courtoises à vos clients en retard de paiement, avec vos propres messages et délais.",
      },
    ],
  },
  {
    title: "Paiements en ligne",
    icon: "💳",
    desc: "Encaissez vite, en toute sécurité via Stripe.",
    features: [
      {
        title: "Stripe intégré",
        desc: "Acceptez cartes bancaires (Visa, Mastercard, Amex), virements et prélèvements SEPA. Encaissez en ligne en 2 clics.",
      },
      {
        title: "Lien de paiement",
        desc: "Envoyez un lien de paiement unique à vos clients par email ou SMS. Paiement sécurisé sans compte à créer.",
      },
      {
        title: "Suivi en temps réel",
        desc: "Tableau de bord live : qui a payé, qui doit encore, montant total en attente. Tout est visible d'un coup d'œil.",
      },
      {
        title: "Multi-devises",
        desc: "Recevez des paiements en euros et dans d'autres devises, idéal pour les clients internationaux.",
      },
    ],
  },
  {
    title: "Espace client",
    icon: "👥",
    desc: "Un portail dédié pour vos clients.",
    features: [
      {
        title: "Portail client",
        desc: "Un espace personnalisé où vos clients consultent leurs factures, téléchargent leurs documents et paient en ligne.",
      },
      {
        title: "Multi-utilisateurs",
        desc: "Ajoutez des membres à votre équipe avec des droits d'accès granulaires (admin, comptable, membre).",
      },
      {
        title: "Base clients",
        desc: "Gérez votre portefeuille clients avec historique complet, notes, statistiques et import/export.",
      },
      {
        title: "Documents partagés",
        desc: "Partagez devis, factures et bons de commande directement depuis l'application, par email ou lien direct.",
      },
    ],
  },
  {
    title: "Tableau de bord & analytics",
    icon: "📊",
    desc: "Tout voir d'un coup d'œil.",
    features: [
      {
        title: "Vue d'ensemble",
        desc: "Chiffre d'affaires, factures en attente, paiements reçus — tout est synthétisé en un tableau de bord clair.",
      },
      {
        title: "Graphiques & KPIs",
        desc: "Visualisez l'évolution de votre activité avec des graphiques interactifs et des indicateurs pertinents.",
      },
      {
        title: "Export comptable",
        desc: "Exportez vos données en CSV ou PDF pour les transmettre directement à votre comptable.",
      },
      {
        title: "Mode sombre",
        desc: "Interface en mode sombre pour travailler confortablement, même tard le soir.",
      },
    ],
  },
  {
    title: "Modules pro",
    icon: "🔧",
    desc: "Des extensions pour aller plus loin.",
    features: [
      {
        title: "XPortail",
        desc: "Portail client avancé avec gestion de projets, messagerie intégrée et suivi des interventions.",
      },
      {
        title: "XRepair",
        desc: "Module de gestion des réparations : bons de commande, suivi des appareils, gestion de stock pour techniciens.",
      },
      {
        title: "XPay",
        desc: "Terminal de paiement intégré avec SumUp et Stripe. Encaissez en magasin et en ligne, depuis une seule app.",
      },
      {
        title: "XSite",
        desc: "Créez un site vitrine professionnel avec votre nom de domaine .xopus.fr inclus et hébergement SSL.",
      },
    ],
  },
] as const;

export default function FonctionnalitesPage() {
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
            <span className="site-eyebrow">Fonctionnalités</span>
            <h1 className="site-title" style={{ marginTop: 12 }}>
              Tout pour{" "}
              <span className="site-title-accent">facturer serein.</span>
            </h1>
            <div
              className="site-tricolor"
              style={{ margin: "20px auto 24px" }}
            />
            <p
              className="site-lead"
              style={{ maxWidth: 600, margin: "0 auto" }}
            >
              XOpus combine facturation, paiements, conformité et suivi client
              dans une seule application pensée pour les artisans et
              indépendants.
            </p>
          </Reveal>
        </section>

        {/* Feature Groups */}
        {GROUPS.map((group, gi) => (
          <section
            key={group.title}
            className="site-feature-group"
            style={gi % 2 === 1 ? { background: "var(--color-bg-card)" } : {}}
          >
            <Reveal>
              <div className="site-section-head site-section-head--centered">
                <span
                  style={{ fontSize: 40, display: "block", marginBottom: 12 }}
                >
                  {group.icon}
                </span>
                <h2 className="site-feature-group-title">{group.title}</h2>
                <p
                  className="site-lead"
                  style={{
                    textAlign: "center",
                    maxWidth: 560,
                    margin: "0 auto",
                  }}
                >
                  {group.desc}
                </p>
              </div>
            </Reveal>

            <div
              className="site-grid"
              style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              {group.features.map((f, fi) => (
                <Reveal key={f.title} delay={fi * 80}>
                  <div className="site-card site-glass">
                    <h3
                      style={{ marginBottom: 8, fontWeight: 600, fontSize: 17 }}
                    >
                      {f.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <Reveal>
          <div className="site-cta-band site-cta-band--shimmer">
            <h2>Envie d&apos;essayer ?</h2>
            <p>
              14 jours gratuits, sans carte bancaire. Résiliation en 1 clic.
            </p>
            <div className="site-cta-row" style={{ justifyContent: "center" }}>
              <Link href='https://app.xopus.fr'>
                Commencer gratuitement
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
