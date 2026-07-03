import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "XOpus — Logiciel de Facturation N°1 en France",
    short_name: "XOpus",
    description:
      "XOpus est LE logiciel de facturation 100% français pour artisans, indépendants et TPE. Factur-X 2026, paiements en ligne Stripe.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0E1B",
    theme_color: "#3B82F6",
    orientation: "portrait-primary",
    lang: "fr",
    dir: "ltr",
    scope: "/",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["business", "finance", "productivity", "utilities"],
    screenshots: [
      {
        src: "/screenshot1.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Tableau de bord XOpus",
      },
      {
        src: "/screenshot2.png",
        sizes: "750x1334",
        type: "image/png",
        form_factor: "narrow",
        label: "Création de facture",
      },
    ],
  };
}
