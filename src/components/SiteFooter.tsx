"use client";

import type React from "react";
import Link from "next/link";

const LINKS = {
  produit: [
    { href: "/fonctionnalites", label: "Fonctionnalités" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/comparateur", label: "Comparateur" },
    { href: "/conformite", label: "Conformité" },
  ],
  support: [
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: "mailto:support@xopus.fr", label: "support@xopus.fr" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/cgv", label: "CGV" },
    { href: "/cgu", label: "CGU" },
    { href: "/politique-confidentialite", label: "Confidentialité" },
    { href: "/securite-rgpd", label: "Sécurité & RGPD" },
  ],
} as const;

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-top">
          {/* Brand */}
          <div className="site-footer-brand">
            <div className="site-footer-logo">XOpus</div>
            <p className="site-footer-tagline">
              La plateforme de facturation 100% française pour artisans,
              indépendants et TPE. Conforme à la loi anti-fraude TVA.
            </p>
            <div className="site-footer-social">
              <a
                href="https://twitter.com/xopus_fr"
                className="site-social-btn"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/xopus"
                className="site-social-btn"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Produit */}
          <div>
            <h4 className="site-footer-links-title">Produit</h4>
            <div className="site-footer-links">
              {LINKS.produit.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="site-footer-links-title">Support</h4>
            <div className="site-footer-links">
              {LINKS.support.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="site-footer-newsletter">
            <h4 className="site-footer-links-title">Newsletter</h4>
            <p style={{ fontSize: 14, marginBottom: 14, lineHeight: 1.6 }}>
              Recevez nos conseils facturation et les dernières actualités.
            </p>
            <form
              className="site-newsletter-form"
              onSubmit={(e: React.FormEvent) => e.preventDefault()}
            >
              <input
                type="email"
                className="site-newsletter-input"
                placeholder="votre@email.com"
                aria-label="Adresse email"
                required
              />
              <button type="submit" className="site-newsletter-btn">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="site-footer-divider" />

        <div className="site-footer-bottom">
          <div className="site-footer-copy">
            <span>
              &copy; {new Date().getFullYear()} XOpus. Tous droits réservés.
            </span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>Made in France 🇫🇷</span>
          </div>
          <div className="site-footer-legal">
            {LINKS.legal.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
