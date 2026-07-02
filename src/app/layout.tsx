import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles/site-vitrine.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xopus.fr"),
  title: {
    default: "XOpus — Logiciel de facturation français pour artisans et TPE | 9,99€/mois",
    template: "%s | XOpus — Facturation intelligente",
  },
  description:
    "XOpus est le logiciel de facturation 100% français, conforme loi anti-fraude TVA 2026. Devis, factures électroniques Factur-X, paiements en ligne, tableau de bord. 9,99€/mois tout inclus. Essai gratuit 14 jours.",
  keywords: [
    "logiciel facturation français",
    "facturation artisan",
    "logiciel devis facture",
    "facture électronique",
    "loi anti-fraude TVA 2026",
    "Factur-X",
    "facturation TPE",
    "micro entreprise facturation",
    "payer facture en ligne",
    "devis facture auto entrepreneur",
    "facturation conforme France",
    "alternative à Facture.net",
    "logiciel caisse 2026",
    "XOpus facturation",
    "outil facturation pro",
    "RGPD facturation",
    "facturation cloud France",
    "logiciel gratuit facture",
    "comparateur logiciel facturation",
    "meilleur logiciel facturation 2026",
    "facturation en ligne français",
    "facture numérique obligatoire",
    "e-facture 2026 obligatoire",
    "solution facturation artisan",
    "application facture pro",
  ],
  authors: [
    { name: "XOpus", url: "https://xopus.fr" },
    { name: "XOpus SAS" },
  ],
  creator: "XOpus SAS",
  publisher: "XOpus SAS",
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://xopus.fr",
    siteName: "XOpus",
    title: "XOpus — Logiciel de facturation français pour artisans et TPE",
    description:
      "Devis, factures électroniques Factur-X, paiements en ligne et conformité loi anti-fraude TVA. 100% français, 9,99€/mois tout inclus. Essai gratuit 14 jours.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "XOpus — Logiciel de facturation français",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XOpus — Facturation intelligente pour artisans 🇫🇷",
    description:
      "Le logiciel de facturation 100% français. Conforme loi anti-fraude TVA. Devis, Factur-X, paiements en ligne. 9,99€/mois.",
    images: ["/og-image.png"],
    site: "@xopus_fr",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://xopus.fr",
    languages: {
      "fr-FR": "https://xopus.fr",
    },
  },
  category: "business",
  classification: "Logiciel de facturation SaaS",
  other: {
    "business:contact_data:country": "France",
    "business:contact_data:region": "France",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Preconnect Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Google Fonts - Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Favicon & Icons */}
        <link rel="icon" href="/favicon.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#002395" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#002395" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://app.xopus.fr" />

        {/* Preload */}
        <link rel="preload" href="/og-image.png" as="image" />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="fr-FR" href="https://xopus.fr" />
        <link rel="alternate" hrefLang="x-default" href="https://xopus.fr" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "XOpus",
              url: "https://xopus.fr",
              logo: "https://xopus.fr/favicon.png",
              description:
                "Logiciel de facturation 100% français pour artisans et indépendants",
              foundingDate: "2025",
              legalName: "XOpus SAS",
              location: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "FR",
                },
              },
              sameAs: [
                "https://twitter.com/xopus_fr",
                "https://linkedin.com/company/xopus",
              ],
            }),
          }}
        />
      </head>
      <body className="site-wrapper">
        {/* Bandeau LED fixe en haut */}
        <div className="site-top-led" aria-hidden="true" />
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}