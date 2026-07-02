/**
 * Injecte des données structurées Schema.org (JSON-LD) pour le SEO.
 * Rendu côté serveur, sans impact visuel.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}