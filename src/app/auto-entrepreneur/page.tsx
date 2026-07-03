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
    "Logiciel facturation auto-entrepreneur — Micro-entreprise simplifiée | XOpus",
  description:
    "XOpus, le logiciel de facturation pensé pour les auto-entrepreneurs et micro-entreprises. Factures conformes, Factur-X, franchise TVA, espace client. Gratuit 14 jours, puis 9,99 €/mois.",
  keywords: [
    "logiciel facturation auto-entrepreneur",
    "micro-entreprise facturation",
    "facture auto-entrepreneur conforme",
    "logiciel facturation micro-entreprise pas cher",
    "obligation facturation auto-entrepreneur",
    "facture sans TVA auto-entrepreneur",
    "logiciel facturation indépendant",
  ],
  openGraph: {
    title: "Logiciel facturation auto-entrepreneur — XOpus",
    description:
      "Factures conformes, Factur-X, espace client. Gratuit 14 jours, puis 9,99 €/mois.",
    url: "https://xopus.fr/auto-entrepreneur",
    siteName: "XOpus",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://xopus.fr/auto-entrepreneur",
  },
};

/* ------------------------------------------------------------------ */
/*  Avantages data                                                      */
/* ------------------------------------------------------------------ */
const ADVANTAGES = [
  {
    title: "Créez votre première facture en 2 minutes",
    desc: "Interface intuitive pensée pour les non-comptables. Renseignez votre client, décrivez la prestation, validez : la facture est générée automatiquement avec tous les mentions légales requises.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "100 % conforme à la législation française",
    desc: "Numérotation automatique, mentions obligatoires, Factur-X pour la loi anti-fraude. XOpus veille à la conformité de vos factures, même si vous n&apos;êtes pas assujetti à la TVA.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Gérez la franchise en base de TVA",
    desc: "XOpus détecte automatiquement votre régime de TVA et affiche les bonnes mentions sur vos factures. Pas besoin d&apos;être expert-comptable pour être en règle.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Envoyez vos factures par email en 1 clic",
    desc: "Générez le PDF, personnalisez le message et envoyez directement depuis XOpus. Vos clients reçoivent une facture professionnelle et conforme.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "Recevez vos paiements en ligne",
    desc: "Intégration Stripe pour accepter les cartes bancaires, virements et prélèvements SEPA. Vos clients paient en ligne, vous êtes crédité automatiquement.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Suivez votre activité en temps réel",
    desc: "Dashboard avec chiffre d&apos;affaires, factures en attente, taux de recouvrement. Visualisez votre activité en un clin d&apos;œil, sans passer des heures sur des tableaux Excel.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Témoignages                                                         */
/* ------------------------------------------------------------------ */
const TESTIMONIALS = [
  {
    name: "Sophie M.",
    role: "Graphiste freelance, Paris",
    text: "Avant XOpus, je passais des heures sur Excel pour mes factures. Maintenant, je crée une facture en 2 minutes et je l'envoie directement par email. Le mode sombre est un vrai plus pour travailler le soir !",
  },
  {
    name: "Thomas R.",
    role: "Développeur web indépendant, Lyon",
    text: "Le fait d'avoir un espace client où mes clients peuvent suivre leurs factures m'a fait gagner un temps fou. Plus besoin de relancer manuellement, les relances automatiques s'en occupent.",
  },
  {
    name: "Claire D.",
    role: "Coach certifiée, Bordeaux",
    text: "En tant qu'auto-entrepreneur, je voulais un outil simple mais complet. XOpus coche toutes les cases : factures conformes, espace client, paiements en ligne. Et à 9,99 €/mois, c'est imbattable.",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ data                                                            */
/* ------------------------------------------------------------------ */
const FAQ = [
  {
    q: "Un auto-entrepreneur est-il obligé d'émettre des factures ?",
    a: "Oui. Depuis 2022, tous les auto-entrepreneurs doivent émettre une facture pour toute prestation supérieure à 25 € TTC (ou 1 € pour les ventes de biens). Cette obligation concerne toutes les transactions, qu'elles soient avec des professionnels ou des particuliers.",
  },
  {
    q: "Faut-il mentionner la TVA sur mes factures d'auto-entrepreneur ?",
    a: "Si vous bénéficiez de la franchise en base de TVA (chiffre d'affaires inférieur aux seuils), vous devez mentionner « TVA non applicable, article 293 B du CGI » sur vos factures. XOpus ajoute cette mention automatiquement.",
  },
  {
    q: "Le Factur-X est-il obligatoire pour les auto-entrepreneurs ?",
    a: "La loi anti-fraude TVA impose le Factur-X aux entreprises assujetties à la TVA. Même si les auto-entrepreneurs en franchise de TVA ne sont pas directement concernés, générer des factures conformes au format Factur-X est recommandé pour anticiper les évolutions réglementaires.",
  },
  {
    q: "Puis-je utiliser XOpus si je dépasse le seuil de franchise en TVA ?",
    a: "Oui, absolument. XOpus gère automatiquement la transition entre le régime en franchise de TVA et le régime réel. La TVA est alorscalculée et affichée sur vos factures de manière conforme.",
  },
  {
    q: "Comment fonctionne l'espace client pour mes clients ?",
    a: "Chaque clientdispose d'un espace personnel où il peut consulter ses devis et factures, télécharger les PDF et effectuer des paiements en ligne. Vous gardez le contrôle total sur les informations visibles.",
  },
  {
    q: "XOpus fonctionne-t-il sur mobile ?",
    a: "Oui, XOpus est 100 % responsive et fonctionne parfaitement sur smartphone et tablette. Vous pouvez créer, envoyer et suivre vos factures depuis n'importe quel appareil, même en déplacement.",
  },
  {
    q: "Puis-je exporter mes données pour mon comptable ?",
    a: "Oui, XOpus propose des exports comptables en CSV et PDF, conformes aux standards du Plan Comptable Français. Votre comptable recevra les informations dans un format prêt à l'emploi.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */
export default function AutoEntrepreneurPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-main" style={{ paddingTop: 100 }}>

        {/* ===== HERO ===== */}
        <section style={{ textAlign: "center", padding: "0 24px 4rem", maxWidth: 860, margin: "0 auto" }}>
          <Reveal>
            <span className="site-eyebrow">Auto-Entrepreneur</span>
            <h1 className="site-title" style={{ marginTop: 12 }}>
              Facturation{" "}
              <span className="site-title-accent">auto-entrepreneur</span>{" "}
              simplifiée.
            </h1>
            <div className="site-tricolor" style={{ margin: "20px auto 24px" }} />
            <p className="site-lead" style={{ maxWidth: 620, margin: "0 auto" }}>
              XOpus est le logiciel de facturation pensé pour les
              auto-entrepreneurs et micro-entreprises. Créez vos factures
              conformes en 2 minutes, sans expertise comptable requise.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
              <AppLink intent="register" className="site-btn site-btn-primary site-btn-lg">
                Créez votre première facture
              </AppLink>
              <Link href="/tarifs" className="site-btn site-btn-ghost site-btn-lg">
                Voir les tarifs
              </Link>
            </div>
          </Reveal>
        </section>

        {/* ===== DÉFINITION AUTO-ENTREPRENEUR ===== */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Comprendre</span>
              <h2 className="site-section-title">
                Qu&apos;est-ce qu&apos;un{" "}
                <span className="site-title-accent">auto-entrepreneur ?</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ maxWidth: 740, margin: "0 auto", padding: "0 24px" }}>
              <div className="site-card" style={{ padding: 32 }}>
                <div style={{ fontSize: 15, lineHeight: 1.85, color: "var(--muted)", display: "flex", flexDirection: "column", gap: 16 }}>
                  <p>
                    Le statut d&apos;auto-entrepreneur — officiellement appelé
                    &quot;micro-entrepreneur&quot; depuis la loi du 18 octobre
                    2015 — est un régime simplifié de création d&apos;entreprise.
                    Il est particulièrement adapté aux indépendants, freelances,
                    artisans et professions libérales qui souhaitent lancer
                    leur activité avec un minimum de contraintes administratives.
                  </p>
                  <p>
                    Ce statut offre plusieurs avantages : déclaration simplifiée
                    du chiffre d&apos;affaires, cotisations sociales proportionnelles
                    à l&apos;activité, franchise en base de TVA (sous certains seuils)
                    et comptabilité allégée. Cependant, il ne dispense pas
                    d&apos;obligations essentielles, notamment en matière de
                    facturation.
                  </p>
                  <p>
                    En 2026, avec le durcissement de la loi anti-fraude et
                    l&apos;obligation progressive duFactur-X, même les
                    auto-entrepreneurs doivent porter une attention particulière
                    à la conformité de leurs factures. C&apos;est exactement là
                    qu&apos;un outil comme XOpus fait la différence.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== OBLIGATIONS FACTURATION ===== */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Obligations légales</span>
              <h2 className="site-section-title">
                Vos obligations de{" "}
                <span className="site-title-accent">facturation.</span>
              </h2>
              <p className="site-lead" style={{ maxWidth: 600, margin: "12px auto 0" }}>
                Même en micro-entreprise, la facturation obéit à des règles
                strictes. Voici ce que la loi vous impose.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, maxWidth: 1040, margin: "0 auto", padding: "0 24px" }}>
              <div className="site-card" style={{ padding: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,0,51,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF0033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Obligation de facturation</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted)" }}>
                  Toute prestation supérieure à 25 € TTC (1 € pour les ventes
                  de biens) doit faire l&apos;objet d&apos;une facture. Cette obligation
                  concerne les transactions avec des professionnels comme avec
                  des particuliers.
                </p>
              </div>

              <div className="site-card" style={{ padding: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,0,51,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF0033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Mentions obligatoires</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted)" }}>
                  Chaque facture doit comporter : numéro, date, identité du
                  client et du prestataire, SIRET, n° de TVA ou mention de
                  franchise, désignation de la prestation, montant HT et TTC,
                  conditions de paiement et mention « TVA non applicable ».
                </p>
              </div>

              <div className="site-card" style={{ padding: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,0,51,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF0033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Loi anti-fraude TVA</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted)" }}>
                  La loi impose la sécurisation des factures pour lutter
                  contre la fraude. Le Factur-X (PDF + XML) est le format
                  recommandé. Même en franchise de TVA, anticiper cette
                  obligation est un gage de sérieux et de conformité.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== COMMENT XOPUS AIDE ===== */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Solution</span>
              <h2 className="site-section-title">
                Comment XOpus{" "}
                <span className="site-title-accent">vous aide.</span>
              </h2>
              <p className="site-lead" style={{ maxWidth: 580, margin: "12px auto 0" }}>
                XOpus est conçu pour simplifier la vie des auto-entrepreneurs.
                Pas besoin d&apos;expertise comptable — l&apos;outil s&apos;occupe de tout.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 1040, margin: "0 auto", padding: "0 24px" }}>
              {ADVANTAGES.map((a) => (
                <div key={a.title} className="site-card" style={{ padding: 28 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(0,85,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    {a.icon}
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{a.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted)" }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ===== CONFORMITÉ DÉTAILLÉE ===== */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Conformité</span>
              <h2 className="site-section-title">
                Des factures{" "}
                <span className="site-title-accent">toujours conformes.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ maxWidth: 740, margin: "0 auto", padding: "0 24px" }}>
              <div className="site-card" style={{ padding: 32 }}>
                <div style={{ fontSize: 15, lineHeight: 1.85, color: "var(--muted)", display: "flex", flexDirection: "column", gap: 16 }}>
                  <p>
                    La conformité fiscale est un enjeu majeur pour les
                    auto-entrepreneurs. Les erreurs de facturation — mentions
                    manquantes, numérotation incorrecte, absence de Factur-X
                    — peuvent entraîner des redressements fiscaux et des
                    pénalités.
                  </p>
                  <p>
                    <strong style={{ color: "var(--text)" }}>XOpus élimine ces risques.</strong> Chaque facture générée est automatiquement conforme à la législation française :
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#0055FF", flexShrink: 0, marginTop: 2 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span><strong style={{ color: "var(--text)" }}>Numérotation séquentielle</strong> — chaque facture reçoit un numéro unique et chronologique</span>
                    </li>
                    <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#0055FF", flexShrink: 0, marginTop: 2 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span><strong style={{ color: "var(--text)" }}>Mentions TVA automatiques</strong> — franchise en base ou régime réel, XOpus détecte et affiche la mention correcte</span>
                    </li>
                    <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#0055FF", flexShrink: 0, marginTop: 2 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span><strong style={{ color: "var(--text)" }}>Factur-X intégré</strong> — format hybride PDF + XML conforme à la norme EN 16931</span>
                    </li>
                    <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#0055FF", flexShrink: 0, marginTop: 2 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span><strong style={{ color: "var(--text)" }}>Horodatage certifié</strong> — chaque facture est horodatée pour preuve en cas de contrôle</span>
                    </li>
                    <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#0055FF", flexShrink: 0, marginTop: 2 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span><strong style={{ color: "var(--text)" }}>Archive sécurisée</strong> — vos factures sont conservées 10 ans, conformément à la réglementation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== TÉMOIGNAGES ===== */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">Témoignages</span>
              <h2 className="site-section-title">
                Ils utilisent{" "}
                <span className="site-title-accent">XOpus.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 1040, margin: "0 auto", padding: "0 24px" }}>
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="site-card" style={{ padding: 28, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFB800" stroke="none" aria-hidden>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted)", flex: 1, marginBottom: 16 }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</p>
                    <p style={{ fontSize: 13, color: "var(--muted)" }}>{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ===== FAQ AUTO-ENTREPRENEUR ===== */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <span className="site-eyebrow">FAQ</span>
              <h2 className="site-section-title">
                Questions fréquentes{" "}
                <span className="site-title-accent">auto-entrepreneur.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="site-faq">
              {FAQ.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ===== TEXTE SEO LONG ===== */}
        <section className="site-section">
          <Reveal>
            <div style={{ maxWidth: 740, margin: "0 auto", padding: "0 24px" }}>
              <h2 className="site-section-title" style={{ textAlign: "center", marginBottom: 24 }}>
                Pourquoi{" "}
                <span className="site-title-accent">XOpus</span>{" "}
                est le meilleur choix pour les auto-entrepreneurs
              </h2>
              <div style={{ fontSize: 15, lineHeight: 1.85, color: "var(--muted)", display: "flex", flexDirection: "column", gap: 16 }}>
                <p>
                  L&apos;auto-entrepreneur fait face à un paradoxe : il bénéficie
                  d&apos;un statut simplifié, mais ses obligations de facturation
                  sont aussi strictes que celles d&apos;une société classique. La
                  loi PACTE de 2019, le durcissement de la lutte contre la
                  fraude TVA et l&apos;obligation progressive du Factur-X ont
                  considérablement renforcé ces exigences.
                </p>
                <p>
                  Les solutions existantes ne répondent pas toujours aux
                  besoins spécifiques des micro-entreprises. Les logiciels
                  grand public sont souvent trop complexes ou trop chers. Les
                  outils gratuits manquent de fonctionnalités essentielles
                  comme le Factur-X ou l&apos;espace client. XOpus a été conçu
                  pour combler ce vide.
                </p>
                <p>
                  Avec un tarif de 9,99 €/mois — le plus bas du marché pour
                  un outil aussi complet — XOpus est accessible même aux
                  auto-entrepreneurs qui démarrent. L&apos;essai gratuit de
                  14 jours permet de tester toutes les fonctionnalités sans
                  engagement, sans carte bancaire.
                </p>
                <p>
                  Au-delà de la facturation, XOpus offre un écosystème pensé
                  pour l&apos;indépendant : espace client pour le suivi des devis
                  et factures, paiements en ligne via Stripe, relances
                  automatiques pour améliorer le recouvrement, et un tableau
                  de bord pour visualiser l&apos;activité en temps réel. C&apos;est
                  bien plus qu&apos;un outil de facturation — c&apos;est un partenaire
                  au quotidien.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== CTA FINAL ===== */}
        <Reveal>
          <div className="site-cta-band site-cta-band--shimmer">
            <h2>Créez votre première facture</h2>
            <p>
              14 jours gratuits, sans carte bancaire. Rejoignez des milliers
              d&apos;auto-entrepreneurs qui facturent malin avec XOpus.
            </p>
            <div className="site-cta-row" style={{ justifyContent: "center" }}>
              <AppLink intent="register" className="site-btn site-btn-primary site-btn-lg">
                Commencer gratuitement
              </AppLink>
              <Link href="/tarifs" className="site-btn site-btn-ghost site-btn-lg">
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
