"use client";

import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

const NAV = [
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/conformite", label: "Conformité" },
  { href: "/comparateur", label: "Comparateur" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header${scrolled ? " scrolled" : ""}`}
      >
        <div className="site-header-inner">
          <Link href="/" className="site-brand" aria-label="XOpus — Accueil">
            <span
              style={{
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #002395 0%, #1A4CFF 50%, #3B82F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              XOpus
            </span>
          </Link>

          <nav className="site-nav" aria-label="Navigation principale">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header-actions">
            <Link
              href="https://app.xopus.fr/login"
              className="site-link-ghost"
            >
              Connexion
            </Link>
            <Link
              href="https://app.xopus.fr/register"
              className="site-btn site-btn-primary"
              style={{ padding: "10px 22px", fontSize: 13 }}
            >
              Essai gratuit
            </Link>

            <button
              type="button"
              className="site-menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Ouvrir le menu"
              onClick={toggleMenu}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <div
        id="mobile-menu"
        className={`site-mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="site-mobile-menu-panel" role="dialog" aria-label="Menu mobile">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="site-mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="site-mobile-actions">
            <Link
              href="https://app.xopus.fr/login"
              className="site-mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Connexion
            </Link>
            <Link
              href="https://app.xopus.fr/register"
              className="site-btn site-btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Essai gratuit 14 jours
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}