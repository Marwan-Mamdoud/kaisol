"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Full-screen loader shown on the initial page load only.
 * Fades the KaiSol logo in, holds briefly, then fades out and unmounts.
 */
export default function PageLoader() {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "done">("in");

  useEffect(() => {
    // Respect reduced motion: skip the animation entirely.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const id = window.setTimeout(() => setPhase("done"), 0);
      return () => window.clearTimeout(id);
    }

    const t1 = window.setTimeout(() => setPhase("hold"), 300);
    const t2 = window.setTimeout(() => setPhase("out"), 1100);
    const t3 = window.setTimeout(() => setPhase("done"), 1700);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-cream transition-opacity duration-700 ease-out ${
        phase === "out" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`flex flex-col items-center gap-6 transition-all duration-700 ease-out ${
          phase === "in"
            ? "opacity-0 scale-95"
            : "opacity-100 scale-100"
        }`}
      >
        <Image
          src="/kaisol_hero_logo.svg"
          alt=""
          width={120}
          height={94}
          priority
          className="h-16 md:h-20 w-auto object-contain brightness-0"
        />
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-medium">
          KaiSol
        </span>
      </div>
    </div>
  );
}