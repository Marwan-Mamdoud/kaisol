"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export type RevealVariant =
  | "up" /** rises from below (default) */
  | "down" /** drops from above */
  | "left" /** slides from inline-start side */
  | "right" /** slides from inline-end side */
  | "zoom" /** scales up from 0.9 */
  | "fade" /** opacity only, no movement */;

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "span" | "h2" | "p";
};

/** Scroll-triggered entrance animation. Respects prefers-reduced-motion. */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  y = 36,
  className = "",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    ["--reveal-y" as string]: `${y}px`,
  };

  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      style={style}
      className={`reveal reveal-${variant} ${
        visible ? "reveal-visible" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
