import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AppLink from "@/components/AppLink";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description:
    "Découvrez toutes les fonctionnalités de XOpus : facturation, devis, paiements en ligne, espace client, conformité loi anti-fraude TVA et plus encore.",
};

const GROUPS = [
  {
    title: "📄 Facturation intelligente",
    desc: "Créez, envoyez et suivez vos factures en un clin d'œil.",
    features: [
      {
        title: "Devis & Factures",
        desc: "Créez des devis et factures professionnels en quelques clics. Personnalisez-les avec votre logo et vos couleurs.",
      },
      {
        title: "Factur-X automatique",
        desc: "Générez automatiquement des factures conformes au format Factur-X (e-facture 2026) pour la loi anti-fraude TVA.",
      },
      {
        title: "Factures récurrentes",
        desc: "Programmez la génération automatique de vos factures mensuelles. Zéro intervention manuelle.",
      },
      {
        title: "Relances automatiques",
        desc: "XOpus envoie des relances courtoises à vos clients en retard de paiement, avec vos propres messages.",
      },
    ],
  },
  {
    title: "💳 Paiements en ligne",
    desc: "Encaissez vite, en toute sécurité.",
    features: [
      {
        title: "Stripe intégré",
        desc: "Acceptez les cartes bancaires (Visa, Mastercard, Amex), les virements et prélèvements SEPA.",
      },
      {
        title: "Lien de paiement",
        desc: "Envoyez un lien de paiement unique à vos clients par email ou SMS.",
      },
      {
        title: "Suivi des paiements",
        desc: "Tableau de bord en temps réel : qui a payé, qui doit encore, montant total en attente.",
      },
      {
        title: "Multi-devises",
        desc: "Recevez des paiements en euros et dans d'autres devises, idéal pour les clients internationaux.",
      },
    ],
  },
  {
    title: "👥 Espace client",
    desc: "Un portail dédié pour vos clients.",
    features: [
      {
        title: "Portail client",
        desc: "Un espace personnalisé où vos clients peuvent consulter leurs factures, télécharger leurs documents et payer en ligne.",
      },
      {
        title: "Multi-utilisateurs",
        desc: "Ajoutez des membres à votre équipe avec des droits d'accès granulaires.",
      },
      {
        title: "Base clients",
        desc: "Gérez votre portefeuille clients avec historique complet, notes et statistiques.",
      },
      {
        title: "Documents partagés",
        desc: "Partagez devis, factures et bons de commande directement depuis l'application.",
      },
    ],
  },
  {
    title: "📊 Tableau de bord",
    desc: "Tout voir d'un coup d'œil.",
    features: [
      {
        title: "Vue d'ensemble",
        desc: "Chiffre d'affaires, factures en attente, paiements reçus — tout est synthétisé en un tableau de bord clair.",
      },
      {
        title: "Graphiques et stats",
        desc: "Visualisez l'évolution de votre activité avec des graphiques interactifs et des KPIs pertinents.",
      },
      {
        title: "Export comptable",
        desc: "Exportez vos données en CSV ou PDF pour les transmettre à votre comptable.",
      },
      {
        title: "Mode sombre",
        desc: "Interface en mode sombre pour travailler confortablement, même tard le soir.",
      },
    ],
  },
  {
    title: "🔧 Modules pro",
    desc: "Des extensions pour aller plus loin.",
    features: [
      {
        title: "XPortail",
        desc: "Portail client avancé avec gestion de projets, messagerie intégrée et suivi des interventions.",
      },
      {
        title: "XRepair",
        desc: "Module de gestion des réparations pour les techniciens et réparateurs : bons de commande, suivi des appareils, stock.",
      },
      {
        title: "XPay",
        desc: "Terminal de paiement intégré avec SumUp et Stripe. Encaissez en magasin et en ligne.",
      },
      {
        title: "XSite",
        desc: "Créez un site vitrine professionnel avec votre nom de domaine .xopus.fr inclus.",
      },
    ],
  },
] as const;

export default function FonctionnalitesPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-main site-page-hero">
        {/* Hero */}
        <section className="site-hero-page">
          <Reveal>
            <span className="site-eyebrow">Fonctionnalités</span>
            <h1 className="site-title site-section-head-mt">
              Tout pour{" "}
              <span className="site-title-accent">facturer serein.</span>
            </h1>
            <div className="site-tricolor site-hero-tricolor" />
            <p className="site-lead site-lead-narrow">
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
            className={`site-feature-group${gi % 2 === 1 ? " site-feature-group-alt" : ""}`}
          >
            <Reveal>
              <div className="site-section-head site-section-head--centered">
                <h2 className="site-feature-group-title">{group.title}</h2>
                <p className="site-lead site-lead-narrow">{group.desc}</p>
              </div>
            </Reveal>

            <div className="site-grid site-grid-2">
              {group.features.map((f, fi) => (
                <Reveal key={f.title} delay={fi * 80}>
                  <div className="site-card site-glass">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <Reveal>
          <div className="site-cta-band site-cta-band--shimmer">
            <h2>Envie d'essayer ?</h2>
            <p>
              14 jours gratuits, sans carte bancaire. Résiliation en 1 clic.
            </p>
            <div className="site-cta-row site-cta-row-center">
              <AppLink
                intent="register"
                className="site-btn site-btn-primary site-btn-lg"
              >
                Commencer gratuitement
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
