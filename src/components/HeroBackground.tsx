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

      {/* Gradient tricolore principal */}
      <div className="site-hero-gradient-tricolor" />

      {/* Blobs colorés plus grands et plus visibles */}
      <div className="site-hero-blob site-hero-blob--bleu" />
      <div className="site-hero-blob site-hero-blob--rouge" />
      <div className="site-hero-blob site-hero-blob--cyan" />
      <div className="site-hero-blob site-hero-blob--violet" />
      <div className="site-hero-blob site-hero-blob--gold" />

      {/* Cercles décoratifs animés */}
      <div className="site-hero-ring site-hero-ring--1" />
      <div className="site-hero-ring site-hero-ring--2" />
      <div className="site-hero-ring site-hero-ring--3" />

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
        <span className="site-hero-particle" />
        <span className="site-hero-particle" />
        <span className="site-hero-particle" />
        <span className="site-hero-particle" />
      </div>

      {/* Lignes de flux */}
      <div className="site-hero-lines">
        <span className="site-hero-line" />
        <span className="site-hero-line" />
        <span className="site-hero-line" />
      </div>
    </div>
  );
}
