import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles/site-vitrine.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xopus.fr"),
  title: {
    default:
      "XOpus — Logiciel de Facturation N°1 en France 🇫🇷 | Artisans & Indépendants",
    template: "%s | XOpus — Logiciel Facturation N°1",
  },
  description:
    "XOpus est LE logiciel de facturation 100% français n°1 pour artisans, indépendants et TPE. Devis illimités, factures Factur-X conformes 2026, paiements en ligne Stripe. Conforme loi anti-fraude TVA. 9,99€/mois tout inclus. Essai gratuit 14 jours sans CB.",
  keywords: [
    "logiciel facturation",
    "logiciel facturation artisan",
    "logiciel facturation indépendant",
    "logiciel facturation TPE",
    "logiciel facturation français",
    "facturation conforme loi anti-fraude TVA",
    "Factur-X",
    "e-facture 2026",
    "logiciel facturation en ligne",
    "logiciel devis facture",
    "paiement en ligne Stripe",
    "logiciel facturation pas cher",
    "logiciel facturation 9.99 euros",
    "meilleur logiciel facturation France",
    "XOpus",
    "Fox Repair",
    "Gabin NICAISE",
    "auto-entrepreneur facturation",
    "micro-entreprise facturation",
    "plombier facturation",
    "électricien facturation",
    "artisan bâtiment facturation",
    "RGPD conforme",
    "🇫🇷",
  ],
  authors: [{ name: "Fox Repair" }, { name: "Gabin NICAISE" }],
  creator: "Fox Repair",
  publisher: "Fox Repair",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://xopus.fr",
    siteName: "XOpus — Logiciel de Facturation N°1 en France",
    title:
      "XOpus — Logiciel Facturation N°1 France 🇫🇷 | Artisans & Indépendants",
    description:
      "Devis illimités, factures Factur-X 2026, paiements en ligne Stripe. Conforme loi anti-fraude TVA. 100% français, RGPD. 9,99€/mois tout inclus. Essai gratuit 14 jours.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "XOpus - Logiciel de Facturation N°1 en France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@xopus_fr",
    creator: "@xopus_fr",
    title: "XOpus — Logiciel Facturation N°1 France",
    description:
      "Le logiciel de facturation 100% français pour artisans et indépendants. Factur-X, paiements en ligne, conforme loi anti-fraude TVA. 9,99€/mois.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://xopus.fr",
  },
  category: "Business Software",
  classification: "Logiciel de facturation pour artisans et indépendants",
  other: {
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/logo-xopus.svg" />
      </head>
      <body className="site-wrapper">
        <div className="site-shell">{children}</div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "XOpus",
              legalName: "Fox Repair",
              url: "https://xopus.fr",
              url: "https://xopus.fr/logo-xopus.svg",
              foundingDate: "2025",
              founders: [
                {
                  "@type": "Person",
                  name: "Gabin NICAISE",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "FR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33-X-XX-XX-XX-XX",
                contactType: "customer service",
                email: "contact@xopus.fr",
                availableLanguage: "French",
              },
              sameAs: [
                "https://twitter.com/xopus_fr",
                "https://linkedin.com/company/xopus",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
