"use client";

import type React from "react";
import { motion } from "framer-motion";

type MarqueeItem = {
  icon: string;
  label: string;
};

const ITEMS: MarqueeItem[] = [
  { icon: "🇫🇷", label: "100% Français" },
  { icon: "🔒", label: "Données hébergées en France" },
  { icon: "🛡️", label: "Conforme RGPD" },
  { icon: "💳", label: "Paiement sécurisé Stripe" },
  { icon: "📄", label: "Factur-X automatique" },
  { icon: "⚡", label: "Facturation en 2 clics" },
  { icon: "📊", label: "Tableau de bord temps réel" },
  { icon: "👥", label: "Espace client inclus" },
  { icon: "🔧", label: "Modules pro XRepair, XPay" },
  { icon: "🌐", label: "Site vitrine inclus" },
  { icon: "📧", label: "Support réactif" },
  { icon: "💰", label: "9,99€/mois tout inclus" },
];

export default function Marquee() {
  return (
    <motion.div
      className="site-marquee"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      aria-hidden
    >
      <div className="site-marquee-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="site-marquee-item">
            <span style={{ fontSize: 18 }}>{item.icon}</span>
            {item.label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}