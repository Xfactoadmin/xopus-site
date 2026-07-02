"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
  style?: React.CSSProperties;
  direction?: "up" | "left" | "right" | "scale";
};

/**
 * Révèle son contenu avec une animation douce dès qu'il entre dans le viewport.
 * Respecte prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as,
  style,
  direction,
}: Props) {
  const Tag = (as ?? "div") as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const directionClass = direction ? ` site-reveal--${direction}` : "";

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`site-reveal${directionClass}${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{
        ...style,
        ...(delay ? { transitionDelay: `${delay}ms` } : {}),
      }}
    >
      {children}
    </Tag>
  );
}