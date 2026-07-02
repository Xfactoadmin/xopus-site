/**
 * Fond décoratif animé pour le hero : blobs de lumière flottants
 * + grille subtile + particules scintillantes. Rendu purement décoratif,
 * aria-hidden, sans interaction.
 */
export default function HeroBackground() {
  return (
    <div className="site-hero-bg" aria-hidden>
      {/* Grille subtile */}
      <div className="site-hero-grid" />

      {/* Blobs colorés */}
      <div className="site-hero-blob site-hero-blob--bleu" />
      <div className="site-hero-blob site-hero-blob--rouge" />
      <div className="site-hero-blob site-hero-blob--cyan" />

      {/* Particules scintillantes */}
      <div className="site-hero-particles">
        <span className="site-hero-particle" />
        <span className="site-hero-particle" />
        <span className="site-hero-particle" />
        <span className="site-hero-particle" />
        <span className="site-hero-particle" />
        <span className="site-hero-particle" />
        <span className="site-hero-particle" />
        <span className="site-hero-particle" />
      </div>
    </div>
  );
}