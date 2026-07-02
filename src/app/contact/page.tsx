"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-main" style={{ paddingTop: 100 }}>
        {/* Hero */}
        <section style={{ textAlign: "center", padding: "0 24px 4rem", maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <span className="site-eyebrow">Contact</span>
            <h1 className="site-title" style={{ marginTop: 12 }}>
              On en{" "}
              <span className="site-title-accent">parle ?</span>
            </h1>
            <div className="site-tricolor" style={{ margin: "20px auto 24px" }} />
            <p className="site-lead" style={{ maxWidth: 560, margin: "0 auto" }}>
              Une question, une démo ou simplement envie d'en savoir plus ?
              Notre équipe vous répond sous 24h.
            </p>
          </Reveal>
        </section>

        {/* Form */}
        <Reveal>
          <form className="site-form" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
            <div className="site-form-group">
              <label className="site-form-label" htmlFor="name">
                Nom
              </label>
              <input
                id="name"
                type="text"
                className="site-form-input"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="site-form-group">
              <label className="site-form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="site-form-input"
                placeholder="votre@email.com"
                required
              />
            </div>
            <div className="site-form-group">
              <label className="site-form-label" htmlFor="subject">
                Sujet
              </label>
              <input
                id="subject"
                type="text"
                className="site-form-input"
                placeholder="Objet de votre message"
                required
              />
            </div>
            <div className="site-form-group">
              <label className="site-form-label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="site-form-textarea"
                placeholder="Décrivez votre demande..."
                required
              />
            </div>
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <button type="submit" className="site-btn site-btn-primary site-btn-lg">
                Envoyer le message
              </button>
            </div>
          </form>
        </Reveal>

        {/* Contact info */}
        <section className="site-section">
          <Reveal>
            <div className="site-section-head site-section-head--centered">
              <h2 className="site-section-title" style={{ fontSize: "clamp(22px, 3vw, 30px)" }}>
                Autres moyens de nous contacter
              </h2>
            </div>
          </Reveal>

          <div className="site-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", maxWidth: 800 }}>
            <Reveal delay={0}>
              <div className="site-card site-glass" style={{ textAlign: "center" }}>
                <div className="site-card-icon" style={{ margin: "0 auto 16px" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 16 }}>Email</h3>
                <p style={{ fontSize: 14 }}>
                  <a href="mailto:support@xopus.fr" style={{ color: "var(--bleu)", fontWeight: 700 }}>
                    support@xopus.fr
                  </a>
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="site-card site-glass" style={{ textAlign: "center" }}>
                <div className="site-card-icon" style={{ margin: "0 auto 16px" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 16 }}>Chat en direct</h3>
                <p style={{ fontSize: 14 }}>
                  Disponible du lundi au vendredi, 9h-18h.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="site-card site-glass" style={{ textAlign: "center" }}>
                <div className="site-card-icon" style={{ margin: "0 auto 16px" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 16 }}>Temps de réponse</h3>
                <p style={{ fontSize: 14 }}>
                  Sous 24h en moyenne. Urgences : contactez-nous par chat.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}