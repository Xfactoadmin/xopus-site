const fs = require('fs');
const path = require('path');

// Helper to read file
function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

// Helper to write file
function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

// Process tarifs/page.tsx
function processTarifs() {
  const filePath = 'xopus-site/src/app/tarifs/page.tsx';
  let content = readFile(filePath);

  // Simple single-line replacements
  const simpleReplacements = [
    // paddingTop: 100
    ['style={{ paddingTop: 100 }}', 'className="site-page-hero"'],

    // marginTop: 12
    ['style={{ marginTop: 12 }}', 'className="site-title site-section-head-mt"'],

    // tricolor margin
    ['style={{ margin: "20px auto 24px" }}', 'className="site-tricolor site-hero-tricolor"'],

    // lead maxWidth
    ['style={{ maxWidth: 620, margin: "0 auto" }}', 'className="site-lead site-hero-lead"'],

    // marginTop: 24
    ['<div style={{ marginTop: 24 }}>', '<div className="site-pricing-cta">'],

    // Center block
    ['<div style={{ textAlign: "center", padding: "3rem 24px" }}>', '<div className="site-center-block">'],

    // Centered block lg
    ['<div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px" }}>', '<div className="site-centered-block-lg">'],

    // Grid gap 24
    ['<div style={{ display: "grid", gap: 24 }}>', '<div className="site-why-xopus-grid">'],

    // maxWidth: 560 subtitle
    ['style={{ maxWidth: 560, margin: "12px auto 0" }}', 'className="site-lead site-compare-subtitle"'],

    // Width 100% justify center
    ['style={{ width: "100%", justifyContent: "center" }}', 'className="site-btn site-btn-ghost site-pricing-cta-btn"'],

    // eyebrow marginBottom
    ['className="site-eyebrow" style={{ marginBottom: 8 }}', 'className="site-eyebrow site-pricing-label"'],

    // Heading with marginBottom
    ['<p style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>', '<p className="site-center-heading">'],

    // CTA row center
    ['<div className="site-cta-row" style={{ justifyContent: "center" }}>', '<div className="site-cta-row site-cta-row-center">'],
  ];

  for (const [old, replacement] of simpleReplacements) {
    content = content.split(old).join(replacement);
  }

  // Multi-line replacements
  const multiLineReplacements = [
    // Hero section
    [`style={{
            textAlign: "center",
            padding: "0 24px 2rem",
            maxWidth: 860,
            margin: "0 auto",
          }}`, 'className="site-hero-section"'],

    // Pricing grid
    [`style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 28,
              maxWidth: 1040,
              margin: "0 auto",
              padding: "0 24px",
              alignItems: "start",
            }}`, 'className="site-pricing-grid"'],

    // Pricing desc
    [`style={{
                    fontSize: 14,
                    color: "var(--muted)",
                    marginBottom: 24,
                  }}`, 'className="site-pricing-desc"'],

    // Pricing desc text
    [`style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--text)",
                    marginBottom: 20,
                  }}`, 'className="site-pricing-desc-text"'],

    // Center muted
    [`style={{
                color: "var(--muted)",
                maxWidth: 480,
                margin: "0 auto 24px",
              }}`, 'className="site-center-muted"'],

    // Center btns
    [`style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}`, 'className="site-center-btns"'],

    // Card row
    [`style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    padding: 24,
                  }}`, 'className="site-card site-why-xopus-card"'],

    // Icon circle
    [`style={{
                      flexShrink: 0,
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(0,85,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}`, 'className="site-icon-circle"'],

    // Heading md
    [`<h3
                      style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}
                    >`, '<h3 className="site-heading-md">'],

    // Card text
    [`style={{
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "var(--muted)",
                      }}`, 'className="site-card-text"'],
  ];

  for (const [old, replacement] of multiLineReplacements) {
    content = content.split(old).join(replacement);
  }

  writeFile(filePath, content);
  console.log('Processed tarifs/page.tsx');
}

// Process其他文件类似...

// Execute
processTarifs();
