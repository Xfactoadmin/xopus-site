"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

import JsonLd from "@/components/JsonLd";

type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }}
      />

      <SiteHeader />
      <main className="site-main" style={{ paddingTop: 100 }}>
        {/* Hero */}
        <section
          style={{
            textAlign: "center",
            padding: "0 24px 3rem",
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <Reveal>
            <span className="site-eyebrow">Aide & Support</span>
            <h1 className="site-title" style={{ marginTop: 12 }}>
              Questions <span className="site-title-accent">fréquentes.</span>
            </h1>
            <div
              className="site-tricolor"
              style={{ margin: "20px auto 24px" }}
            />
            <p
              className="site-lead"
              style={{ maxWidth: 600, margin: "0 auto" }}
            >
              Tout ce que vous devez savoir sur XOpus. Vous ne trouvez pas votre
              réponse ?{" "}
              <a
                href="mailto:support@xopus.fr"
                style={{ color: "#0055FF", textDecoration: "underline" }}
              >
                Contactez-nous
              </a>
              .
            </p>
          </Reveal>
        </section>

        {/* Accordion */}
        <section
          className="site-section"
          style={{ maxWidth: 740, margin: "0 auto", padding: "0 24px 4rem" }}
        >
          {items.map((item, i) => (
            <Reveal key={i} delay={Math.min(i * 40, 300)}>
              <div
                className="site-card"
                style={{
                  marginBottom: 12,
                  cursor: "pointer",
                  border: openIndex === i ? "1px solid #0055FF" : undefined,
                  transition: "border-color 0.2s",
                }}
                onClick={() => toggle(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(i);
                  }
                }}
                aria-expanded={openIndex === i}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 17,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      color: openIndex === i ? "#0055FF" : undefined,
                      transition: "color 0.2s",
                    }}
                  >
                    {item.q}
                  </h3>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      flexShrink: 0,
                      transform:
                        openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                    aria-hidden
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <div
                  style={{
                    maxHeight: openIndex === i ? 600 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s ease, opacity 0.3s ease",
                    opacity: openIndex === i ? 1 : 0,
                  }}
                >
                  <p
                    style={{
                      marginTop: 14,
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "var(--muted, #6b7280)",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Still have questions */}
        <section
          className="site-section"
          style={{
            maxWidth: 740,
            margin: "0 auto",
            padding: "0 24px 4rem",
            textAlign: "center",
          }}
        >
          <Reveal>
            <div
              className="site-card site-glass"
              style={{ padding: "3rem 2rem" }}
            >
              <h2 className="site-section-title" style={{ marginBottom: 12 }}>
                Encore une question ?
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "var(--muted, #6b7280)",
                  maxWidth: 480,
                  margin: "0 auto 24px",
                }}
              >
                Notre équipe est disponible pour répondre à toutes vos
                questions. Nous vous répondons sous 24h en jours ouvrés.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link href="https://app.xopus.fr">Démarrer gratuitement</Link>
                <a
                  href="mailto:support@xopus.fr"
                  className="site-btn site-btn-ghost"
                >
                  Écrire au support
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="site-cta-band site-cta-band--shimmer">
            <h2>Prêt à essayer XOpus ?</h2>
            <p>
              14 jours gratuits, sans carte bancaire. Résiliation en 1 clic.
            </p>
            <div className="site-cta-row" style={{ justifyContent: "center" }}>
              <Link href="https://app.xopus.fr">Commencer gratuitement</Link>
            </div>
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
