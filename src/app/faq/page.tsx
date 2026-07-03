import type { Metadata } from "next";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes sur XOpus",
  description:
    "Questions fréquentes sur XOpus : tarifs, essai gratuit, conformité loi anti-fraude TVA, Factur-X, paiements en ligne, RGPD, sécurité des données. Tout ce que vous devez savoir.",
  keywords: [
    "FAQ XOpus",
    "questions fréquentes facturation",
    "loi anti-fraude TVA",
    "Factur-X",
    "tarif XOpus",
    "essai gratuit facturation",
    "RGPD facturation",
    "sécurité données facturation",
  ],
  openGraph: {
    title: "FAQ — Questions fréquentes sur XOpus",
    description:
      "Trouvez les réponses à toutes vos questions sur XOpus : tarifs, conformité, sécurité, fonctionnalités et support.",
    url: "https://xopus.fr/faq",
    type: "website",
    locale: "fr_FR",
    siteName: "XOpus",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://xopus.fr/faq",
  },
};

const FAQ_ITEMS = [
  {
    q: "C'est quoi XOpus ?",
    a: "XOpus est une plateforme de facturation 100% française conçue pour les artisans, indépendants et TPE. Elle permet de créer des devis et factures professionnels, de générer automatiquement des Factur-X conformes à la loi anti-fraude TVA, d'accepter des paiements en ligne via Stripe et de gérer votre portefeuille clients — le tout dans une seule application simple et rapide.",
  },
  {
    q: "Combien ça coûte ?",
    a: "XOpus coûte 9,99 €/mois tout inclus. Il n'y a aucun frais caché, aucune commission sur les paiements et aucune surprise. Vous bénéficiez de toutes les fonctionnalités : devis, factures illimitées, Factur-X, paiements en ligne, espace client, relances automatiques, export comptable et support prioritaire. Un renouvellement mensuel, sans engagement.",
  },
  {
    q: "Y a-t-il un essai gratuit ?",
    a: "Oui, XOpus propose un essai gratuit de 14 jours avec accès à toutes les fonctionnalités. Aucune carte bancaire n'est requise pour démarrer. Vous pouvez tester sans limite et décider si XOpus vous convient avant de souscrire. Pas de surprise : si vous ne continuez pas, rien ne vous est facturé.",
  },
  {
    q: "XOpus est-il conforme à la loi anti-fraude TVA ?",
    a: "Oui, XOpus est entièrement conforme à la loi anti-fraude TVA française entrée en vigueur le 1er juillet 2024. Chaque facture est horodatée, sécurisée et stockée de manière intègre. Le format Factur-X est généré automatiquement, garantissant la conformité pour toutes les échéances du dispositif, y compris celle du 1er juillet 2026 concernant toutes les entreprises assujetties à la TVA.",
  },
  {
    q: "Qu'est-ce que le Factur-X et pourquoi est-ce important ?",
    a: "Le Factur-X est un format de facturation électronique hybride (PDF + XML) imposé par la réglementation européenne et la loi anti-fraude TVA française. Il garantit l'authenticité, l'intégrité et la lisibilité des factures. Avec XOpus, chaque facture émise génère automatiquement un Factur-X conforme, sans effort de votre part. Vous êtes prêt pour l'e-invoicing 2026 dès aujourd'hui.",
  },
  {
    q: "Acceptez-vous les paiements en ligne ?",
    a: "Oui, XOpus intègre Stripe pour accepter les paiements en ligne. Vos clients peuvent payer leurs factures par carte bancaire (Visa, Mastercard, American Express), par virement bancaire ou par prélèvement SEPA. Vous pouvez également envoyer des liens de paiement par email ou SMS. Tout est sécurisé et les fonds sont directement versés sur votre compte bancaire.",
  },
  {
    q: "Puis-je exporter mes données comptables ?",
    a: "Oui, XOpus permet d'exporter vos données en format CSV et PDF, prêtes à être transmises à votre comptable. Vous pouvez exporter l'ensemble de vos factures, devis, notes de crédit et données clients. L'export comptable inclut les champs nécessaires pour la saisie comptable et la déclaration de TVA. Vos données sont toujours accessibles et portables.",
  },
  {
    q: "XOpus est-il multi-utilisateurs ?",
    a: "Oui, XOpus supporte les équipes. Vous pouvez ajouter plusieurs utilisateurs à votre compte avec des droits d'accès granulaires. Chaque membre peut avoir un rôle spécifique : administrateur, comptable, commercial, etc. Vous gardez le contrôle total sur ce que chaque personne peut voir et modifier. Idéal pour les TPE qui grandissent.",
  },
  {
    q: "Comment mes données sont-elles sécurisées ?",
    a: "La sécurité de vos données est notre priorité absolue. Toutes les données sont chiffrées en transit (TLS 1.3) et au repos (AES-256). Nos serveurs sont hébergés en France, dans des datacenters certifiés ISO 27001 et SOC 2 Type II. Des sauvegardes automatiques quotidiennes sont effectuées. Nous appliquons les meilleures pratiques de sécurité informatique et nous soumettons à des audits réguliers.",
  },
  {
    q: "XOpus est-il conforme au RGPD ?",
    a: "Oui, XOpus est pleinement conforme au Règlement Général sur la Protection des Données (RGPD). Nous collectons uniquement les données strictement nécessaires au fonctionnement du service. Vous pouvez exercer vos droits (accès, rectification, suppression, portabilité) à tout moment depuis votre espace personnel ou en nous contactant. Aucune donnée n'est vendue ou partagée à des fins publicitaires.",
  },
  {
    q: "Puis-je résilier mon abonnement à tout moment ?",
    a: "Oui, vous pouvez résilier votre abonnement à tout moment, sans engagement et sans frais. La résiliation s'effectue en 1 clic depuis votre espace XOpus. Votre compte reste actif jusqu'à la fin de la période en cours. Vous pouvez exporter toutes vos données avant la clôture. Aucune pénalité, aucun tracas.",
  },
  {
    q: "Quel type de support proposez-vous ?",
    a: "XOpus offre un support par email avec des réponses rapides et compétentes. Les abonnés bénéficient d'un support prioritaire. Nous proposons également une base de connaissances complète avec des tutoriels, des guides et des FAQ pour vous accompagner dans l'utilisation de l'application. Notre équipe est basée en France.",
  },
  {
    q: "XOpus convient-il aux auto-entrepreneurs ?",
    a: "Absolument ! XOpus est idéal pour les auto-entrepreneurs (micro-entrepreneurs). Il simplifie la création de devis et factures conformes, gère les seuils de franchise de TVA, et propose des exports comptables adaptés au régime micro. Le tarif de 9,99 €/mois est accessible même pour les petits revenus.",
  },
  {
    q: "XOpus est-il adapté aux TPE et PME ?",
    a: "XOpus a été pensé et conçu spécifiquement pour les TPE et PME françaises. Que vous soyez plombier, électricien, informaticien, consultant, photographe ou chef d'entreprise, XOpus s'adapte à votre activité. L'interface est intuitive et ne nécessite aucune formation. Les fonctionnalités couvrent 100% des besoins de facturation des petites structures.",
  },
  {
    q: "XOpus fonctionne-t-il sur mobile ?",
    a: "Oui, XOpus est entièrement responsive et fonctionne parfaitement sur smartphone et tablette. Vous pouvez créer des devis et factures, suivre vos paiements et gérer vos clients depuis n'importe quel appareil, n'importe où. Pas besoin d'installer une application : XOpus est accessible directement depuis votre navigateur mobile.",
  },
  {
    q: "Comment créer ma première facture avec XOpus ?",
    a: "Créer votre première facture prend moins de 2 minutes. Connectez-vous à XOpus, cliquez sur « Nouvelle facture », sélectionnez votre client (ou créez-en un nouveau), ajoutez vos prestations avec les montants, et validez. XOpus génère automatiquement le PDF professionnel et le Factur-X conforme. Vous pouvez l'envoyer directement par email à votre client.",
  },
  {
    q: "XOpus gère-t-il la TVA automatiquement ?",
    a: "Oui, XOpus gère la TVA automatiquement. Vous pouvez configurer vos taux de TVA (20%, 10%, 5,5%, 2,1% ou franchise), et XOpus les applique automatiquement sur vos factures. Les mentions légales obligatoires sont générées automatiquement, y compris le numéro SIRET et le numéro de TVA intracommunautaire.",
  },
  {
    q: "Puis-je personnaliser mes factures ?",
    a: "Oui, vous pouvez entièrement personnaliser vos factures avec votre identité visuelle : logo, couleurs, mentions personnalisées, conditions de paiement, etc. XOpus propose des modèles professionnels que vous pouvez adapter à votre image de marque. Chaque facture reflète votre professionnalisme et renforce la confiance de vos clients.",
  },
] as const;

export default function FaqPage() {
  return <FaqAccordion items={FAQ_ITEMS} />;
}
