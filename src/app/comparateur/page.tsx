import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AppLink from "@/components/AppLink";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Comparateur logiciels de facturation",
  description:
    "Comparez XOpus avec les autres logiciels de facturation : Pennylane, Freebe, Indy, Holded. XOpus est le moins cher et le plus complet.",
};

const TABLE = [
  { crit: "Prix mensuel", xopus: "9,99 €", comp1: "49 €", comp2: "14,90 €", comp3: "22 €" },
  { crit: "Essai gratuit", xopus: "14 jours", comp1: "7 jours", comp2: "14 jours", comp3: "14 jours" },
  { crit: "Factur-X (e-facture)", xopus: true, comp1: false, comp2: false, comp3: false },
  { crit: "Loi anti-fraude TVA", xopus: true, comp1: true, comp2: true, comp3: true },
  { crit: "Paiements en ligne", xopus: true, comp1: true, comp2: true, comp3: true },
  { crit: "Espace client", xopus: true, comp1: false, comp2: false, comp3: false },
  { crit: "Site vitrine inclus", xopus: true, comp1: false, comp2: false, comp3: false },
  { crit: "Modules pro (XRepair, XPay…)", xopus: true, comp1: false, comp2: false, comp3: false },
  { crit: "Hébergement France", xopus: true, comp1: true, comp2: true, comp3: false },
  { crit: "Support en français", xopus: true, comp1: true, comp2: true, comp3: true },
  { crit: "Multi-utilisateurs", xopus: true, comp1: true, comp2: false, comp3: true },
  { crit: "Mode sombre", xopus: true, comp1: false, comp2: false, comp3: false },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="cell-win">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    ) : (
      <span style={{ color: "var(--muted-2)" }}>—</span>
    );
  }
  return <>{value}</>;
}

export default function ComparateurPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-main" style={{ paddingTop: 100 }}>
        {/* Hero */}
        <section style={{ textAlign: "center", padding: "0 24px 4rem", maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <span className="site-eyebrow">Comparateur</span>
            <h1 className="site-title" style={{ marginTop: 12 }}>
              Comparez et{" "}
              <span className="site-title-accent">choisissez malin.</span>
            </h1>
            <div className="site-tricolor" style={{ margin: "20px auto 24px" }} />
            <p className="site-lead" style={{ maxWidth: 560, margin: "0 auto" }}>
              XOpus offre plus de fonctionnalités à un tarif bien inférieur
              aux autres solutions du marché.
            </p>
          </Reveal>
        </section>

        {/* Table */}
        <section className="site-section">
          <Reveal>
            <div className="site-table-wrap">
              <table className="site-compare-table">
                <thead>
                  <tr>
                    <th>Fonctionnalité</th>
                    <th className="col-xopus">XOpus</th>
                    <th>Pennylane</th>
                    <th>Freebe</th>
                    <th>Indy</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE.map((row) => (
                    <tr key={row.crit}>
                      <td className="crit" data-label="Critère">{row.crit}</td>
                      <td className="cell-win" data-label="XOpus"><Cell value={row.xopus} /></td>
                      <td data-label="Pennylane"><Cell value={row.comp1} /></td>
                      <td data-label="Freebe"><Cell value={row.comp2} /></td>
                      <td data-label="Indy"><Cell value={row.comp3} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="site-cta-band site-cta-band--shimmer">
            <h2>Convinced ? 😏</h2>
            <p>Rejoignez XOpus et profitez du meilleur rapport qualité/prix du marché.</p>
            <div className="site-cta-row" style={{ justifyContent: "center" }}>
              <AppLink intent="register" className="site-btn site-btn-primary site-btn-lg">
                Essai gratuit 14 jours
              </AppLink>
              <Link href="/tarifs" className="site-btn site-btn-ghost site-btn-lg">
                Voir les tarifs
              </Link>
            </div>
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}