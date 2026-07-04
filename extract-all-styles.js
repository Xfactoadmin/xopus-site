const fs = require('fs');

// Helper to process a file with replacements
function processFile(filePath, simpleReplacements, multiLineReplacements) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Apply simple single-line replacements
  for (const [old, replacement] of simpleReplacements) {
    content = content.split(old).join(replacement);
  }

  // Apply multi-line replacements
  for (const [old, replacement] of multiLineReplacements) {
    content = content.split(old).join(replacement);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed: ${filePath}`);
}

// Common patterns across all files
const commonSimple = [
  // paddingTop: 100
  ['style={{ paddingTop: 100 }}', 'className="site-page-hero"'],

  // marginTop: 12
  ['style={{ marginTop: 12 }}', 'className="site-title site-section-head-mt"'],

  // tricolor margin
  ['style={{ margin: "20px auto 24px" }}', 'className="site-tricolor site-hero-tricolor"'],

  // lead maxWidth: 620
  ['style={{ maxWidth: 620, margin: "0 auto" }}', 'className="site-lead site-hero-lead"'],

  // lead maxWidth: 600
  ['style={{ maxWidth: 600, margin: "12px auto 0" }}', 'className="site-lead site-section-head-desc"'],

  // lead maxWidth: 560
  ['style={{ maxWidth: 560, margin: "12px auto 0" }}', 'className="site-lead site-compare-subtitle"'],

  // lead maxWidth: 580
  ['style={{ maxWidth: 580, margin: "12px auto 0" }}', 'className="site-lead site-section-head-desc"'],

  // marginTop: 24
  ['<div style={{ marginTop: 24 }}>', '<div className="site-pricing-cta">'],

  // Width 100% justify center
  ['style={{ width: "100%", justifyContent: "center" }}', 'className="site-pricing-cta-btn"'],

  // alignSelf: "flex-start", marginBottom: 8
  ['style={{ alignSelf: "flex-start", marginBottom: 8 }}', 'className="site-pricing-card-label"'],

  // CTA row center
  ['<div className="site-cta-row" style={{ justifyContent: "center" }}>', '<div className="site-cta-row site-cta-row-center">'],
];

const commonMultiLine = [
  // Hero section
  [`style={{
            textAlign: "center",
            padding: "0 24px 4rem",
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

  // Center block
  [`<div style={{ textAlign: "center", padding: "3rem 24px" }}>`, '<div className="site-center-block">'],

  // Center heading
  [`<p style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>`, '<p className="site-center-heading">'],

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

  // Feature grid
  [`style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, maxWidth: 1040, margin: "0 auto", padding: "0 24px" }}`, 'className="site-feature-grid"'],

  // Feature grid lg
  [`style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 1040, margin: "0 auto", padding: "0 24px" }}`, 'className="site-feature-grid-lg"'],

  // Card content
  [`style={{ fontSize: 15, lineHeight: 1.85, color: "var(--muted)", display: "flex", flexDirection: "column", gap: 16 }}`, 'className="site-card-content"'],

  // Card icon small (red)
  [`style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,0,51,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}`, 'className="site-card-icon-sm"'],

  // Card icon blue
  [`style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(0,85,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}`, 'className="site-card-icon-blue"'],

  // Card heading
  [`style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}`, 'className="site-card-heading"'],

  // Card desc
  [`style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted)" }}`, 'className="site-card-desc"'],

  // Card heading lg
  [`style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}`, 'className="site-card-heading-lg"'],

  // Card desc sm
  [`style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)" }}`, 'className="site-card-desc-sm"'],

  // Centered block
  [`<div style={{ maxWidth: 740, margin: "0 auto", padding: "0 24px" }}>`, '<div className="site-centered-block">'],

  // Centered block lg
  [`<div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px" }}>`, '<div className="site-centered-block-lg">'],

  // Grid gap 24
  [`<div style={{ display: "grid", gap: 24 }}>`, '<div className="site-why-xopus-grid">'],

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

  // Heading md (with newline)
  [`<h3
                      style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}
                    >`, '<h3 className="site-heading-md">'],

  // Card text
  [`style={{
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "var(--muted)",
                      }}`, 'className="site-card-text"'],

  // Comparison grid
  [`style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
                maxWidth: 1040,
                margin: "0 auto",
                padding: "0 24px",
              }}`, 'className="site-comparison-grid"'],

  // Reason grid
  [`style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
                maxWidth: 1040,
                margin: "0 auto",
                padding: "0 24px",
              }}`, 'className="site-reason-grid"'],

  // Icon card header
  [`style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 12,
                    }}`, 'className="site-flex-center"'],

  // Hidden cost list
  [`style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}`, 'className="site-hidden-cost-list"'],

  // Hidden cost item
  [`style={{
                          fontSize: 14,
                          lineHeight: 1.6,
                          color: "var(--muted)",
                          display: "flex",
                          gap: 8,
                        }}`, 'className="site-hidden-cost-item"'],
];

// Process each file
const files = [
  'xopus-site/src/app/tarifs/page.tsx',
  'xopus-site/src/app/comparateur/page.tsx',
  'xopus-site/src/app/pourquoi-xopus/page.tsx',
  'xopus-site/src/app/securite-rgpd/page.tsx',
  'xopus-site/src/app/auto-entrepreneur/page.tsx',
  'xopus-site/src/app/contact/page.tsx',
  'xopus-site/src/app/faq/page.tsx',
  'xopus-site/src/app/conformite/page.tsx',
  'xopus-site/src/app/fonctionnalites/page.tsx',
];

for (const file of files) {
  try {
    processFile(file, commonSimple, commonMultiLine);
  } catch (e) {
    console.log(`Error processing ${file}: ${e.message}`);
  }
}

console.log('All files processed!');
