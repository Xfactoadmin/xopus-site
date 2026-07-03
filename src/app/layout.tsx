import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles/site-vitrine.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xopus.fr"),
  title: {
    default: "XOpus — Facturation intelligente pour artisans et indépendants",
    template: "%s | XOpus",
  },
  description:
    "XOpus est la plateforme de facturation 100% française pour artisans, indépendants et TPE. Devis, factures, paiements en ligne et conformité loi anti-fraude TVA.",
  keywords: [
    "facturation",
    "artisan",
    "indépendant",
    "facture",
    "devis",
    "loi anti-fraude TVA",
    "paiement en ligne",
    "TPE",
    "micro-entreprise",
    "🇫🇷",
  ],
  authors: [{ name: "XOpus" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://xopus.fr",
    siteName: "XOpus",
    title: "XOpus — Facturation intelligente pour artisans et indépendants",
    description:
      "Devis, factures, paiements en ligne et conformité loi anti-fraude TVA. 100% français, 9,99€/mois tout inclus.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "XOpus — Facturation intelligente",
    description:
      "La plateforme de facturation 100% française pour artisans et indépendants.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://xopus.fr",
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
        <link rel="icon" href="/favicon.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="site-wrapper">
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}
