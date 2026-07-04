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

const TRUST_BADGES = [
  { icon: "🔒", label: "Données hébergées en France" },
  { icon: "🛡️", label: "Conforme RGPD" },
  { icon: "🇫🇷", label: "Entreprise française" },
  { icon: "💳", label: "Paiement sécurisé Stripe" },
  { icon: "⚡", label: "Support réactif" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      {/* Gradient tricolore en haut */}
      <div className="site-footer-glow" />

      <div className="site-footer-inner">
        {/* ── Top : Bento grid ── */}
        <div className="site-footer-bento">
          {/* Brand */}
          <div className="site-footer-brand-box">
            <div className="site-footer-logo-row">
              <img
                src="/logo-xopus.svg"
                alt=""
                className="site-footer-logo-img"
                width={32}
                height={32}
              />
              <span className="site-footer-logo-text">XOpus</span>
            </div>
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
          <div className="site-footer-col">
            <h4 className="site-footer-col-title">Produit</h4>
            <div className="site-footer-col-links">
              {LINKS.produit.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="site-footer-col">
            <h4 className="site-footer-col-title">Support</h4>
            <div className="site-footer-col-links">
              {LINKS.support.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="site-footer-newsletter-box">
            <h4 className="site-footer-col-title">Newsletter</h4>
            <p className="site-footer-newsletter-text">
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

        {/* ── Trust badges ── */}
        <div className="site-footer-trust-row">
          {TRUST_BADGES.map((b) => (
            <span key={b.label} className="site-footer-trust-badge">
              <span>{b.icon}</span> {b.label}
            </span>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="site-footer-divider" />

        {/* ── Bottom ── */}
        <div className="site-footer-bottom">
          <div className="site-footer-copy">
            &copy; {new Date().getFullYear()} XOpus. Tous droits réservés.
            <span className="site-footer-dot">·</span>
            Made in France 🇫🇷
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
