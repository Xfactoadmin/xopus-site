const fs = require('fs');

// Read the file
const filePath = 'xopus-site/src/app/tarifs/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replacements for tarifs/page.tsx
const replacements = [
  // paddingTop: 100
  ['style={{ paddingTop: 100 }}', 'className="site-page-hero"'],
  
  // Hero section
  ['style={{\n            textAlign: "center",\n            padding: "0 24px 2rem",\n            maxWidth: 860,\n            margin: "0 auto",\n          }}', 'className="site-hero-section"'],
  
  // marginTop: 12
  ['style={{ marginTop: 12 }}', 'className="site-title site-section-head-mt"'],
  
  // margin: "20px auto 24px"
  ['style={{ margin: "20px auto 24px" }}', 'className="site-tricolor site-hero-tricolor"'],
  
  // maxWidth: 620, margin: "0 auto"
  ['style={{ maxWidth: 620, margin: "0 auto" }}', 'className="site-lead site-hero-lead"'],
  
  // Pricing grid
  ['style={{\n              display: "grid",\n              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",\n              gap: 28,\n              maxWidth: 1040,\n              margin: "0 auto",\n              padding: "0 24px",\n              alignItems: "start",\n            }}', 'className="site-pricing-grid"'],
  
  // marginBottom: 8 on eyebrow
  ['style={{ marginBottom: 8 }}', 'className="site-eyebrow site-pricing-label"'],
  
  // Pricing description
  ['style={{\n                    fontSize: 14,\n                    color: "var(--muted)",\n                    marginBottom: 24,\n                  }}', 'className="site-pricing-desc"'],
  
  // Pricing description text
  ['style={{\n                    fontSize: 14,\n                    lineHeight: 1.7,\n                    color: "var(--text)",\n                    marginBottom: 20,\n                  }}', 'className="site-pricing-desc-text"'],
  
  // marginTop: 24
  ['style={{ marginTop: 24 }}', 'className="site-pricing-cta"'],
  
  // width: "100%", justifyContent: "center"
  ['style={{ width: "100%", justifyContent: "center" }}', 'className="site-btn site-btn-ghost site-pricing-cta-btn"'],
  
  // alignSelf: "flex-start", marginBottom: 8
  ['style={{ alignSelf: "flex-start", marginBottom: 8 }}', 'className="site-badge-pulse site-pricing-label"'],
  
  // Section with maxWidth: 560
  ['style={{ maxWidth: 560, margin: "12px auto 0" }}', 'className="site-lead site-compare-subtitle"'],
  
  // CTA section
  ['<div style={{ textAlign: "center", padding: "3rem 24px" }}>', '<div className="site-center-block">'],
  
  // fontSize: 18, fontWeight: 600, marginBottom: 12
  ['<p style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>', '<p className="site-center-heading">'],
  
  // maxWidth: 480, margin: "0 auto 24px"
  ['style={{\n                color: "var(--muted)",\n                maxWidth: 480,\n                margin: "0 auto 24px",\n              }}', 'className="site-center-muted"'],
  
  // Flex buttons
  ['style={{\n                display: "flex",\n                gap: 12,\n                justifyContent: "center",\n                flexWrap: "wrap",\n              }}', 'className="site-center-btns"'],
  
  // maxWidth: 700, margin: "0 auto", padding: "0 24px"
  ['<div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px" }}>', '<div className="site-centered-block-lg">'],
  
  // display: "grid", gap: 24
  ['<div style={{ display: "grid", gap: 24 }}>', '<div className="site-why-xopus-grid">'],
  
  // Card with flex, gap, padding
  ['style={{\n                    display: "flex",\n                    gap: 16,\n                    alignItems: "flex-start",\n                    padding: 24,\n                  }}', 'className="site-card site-why-xopus-card"'],
  
  // Icon circle
  ['style={{\n                      flexShrink: 0,\n                      width: 44,\n                      height: 44,\n                      borderRadius: 12,\n                      background: "rgba(0,85,255,0.1)",\n                      display: "flex",\n                      alignItems: "center",\n                      justifyContent: "center",\n                    }}', 'className="site-icon-circle"'],
  
  // fontSize: 17, fontWeight: 600, marginBottom: 6
  ['<h3\n                      style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}\n                    >', '<h3 className="site-heading-md">'],
  
  // fontSize: 15, lineHeight: 1.7, color: "var(--muted)"
  ['style={{\n                        fontSize: 15,\n                        lineHeight: 1.7,\n                        color: "var(--muted)",\n                      }}', 'className="site-card-text"'],
  
  // CTA final
  ['<div className="site-cta-row" style={{ justifyContent: "center" }}>', '<div className="site-cta-row site-cta-row-center">'],
];

// Apply replacements
replacements.forEach(([old, replacement]) => {
  content = content.split(old).join(replacement);
});

fs.writeFileSync(filePath, content);
console.log('Done!');
