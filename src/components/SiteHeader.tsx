"use client";

import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/conformite", label: "Conformité" },
  { href: "/comparateur", label: "Comparateur" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header${scrolled ? " scrolled" : ""}`}
      >
        <div className="site-header-inner">
          {/* Logo */}
          <Link href="/" className="site-brand" aria-label="XOpus — Accueil">
            <img
              src="/logo-xopus.svg"
              alt=""
              className="site-brand-logo"
              width={36}
              height={36}
            />
            <span className="site-brand-text">XOpus</span>
          </Link>

          {/* Nav pill */}
          <nav className="site-nav-pill" aria-label="Navigation principale">
            <div className="site-nav-pill-bg" />
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`site-nav-pill-link${active ? " active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="site-header-actions">
            <Link
              href="https://app.xopus.fr"
              className="site-header-cta"
            >
              <span className="site-header-cta-text">
                Accéder à l'application
              </span>
            </Link>

            <button
              type="button"
              className={`site-menu-toggle${menuOpen ? " is-open" : ""}`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Ouvrir le menu"
              onClick={toggleMenu}
            >
              <span className="site-menu-bar" />
              <span className="site-menu-bar" />
              <span className="site-menu-bar" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu fullscreen ── */}
      <div
        id="mobile-menu"
        className={`site-mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div
          className="site-mobile-menu-panel"
          role="dialog"
          aria-label="Menu mobile"
        >
          <div className="site-mobile-menu-top">
            <Link
              href="/"
              className="site-brand site-mobile-brand"
              onClick={() => setMenuOpen(false)}
            >
              <img
                src="/logo-xopus.svg"
                alt=""
                className="site-brand-logo"
                width={36}
                height={36}
              />
              <span className="site-brand-text">XOpus</span>
            </Link>
            <button
              type="button"
              className="site-menu-toggle is-open"
              aria-label="Fermer le menu"
              onClick={toggleMenu}
            >
              <span className="site-menu-bar" />
              <span className="site-menu-bar" />
              <span className="site-menu-bar" />
            </button>
          </div>

          <div className="site-mobile-menu-links">
            {NAV.map((item, i) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`site-mobile-nav-link${active ? " active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms",
                  }}
                >
                  <span className="site-mobile-nav-num">0{i + 1}</span>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="site-mobile-menu-bottom">
            <Link
              href="https://app.xopus.fr"
              className="site-header-cta site-mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              <span className="site-header-cta-text">
                Accéder à l'application
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* Tiny helper to avoid importing AppLink just for one href */
function AppLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
