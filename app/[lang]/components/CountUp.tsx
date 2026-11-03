"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Text whose leading number is animated, e.g. "45 kWh", "1.3 m³", "95%". */
  value: string;
  /** Animation length in ms. */
  duration?: number;
  className?: string;
};

const LEADING_NUMBER = /^(\d+(?:\.\d+)?)([\s\S]*)$/;

/**
 * Animates the leading numeric token of a label when it scrolls into view.
 * Values without a leading number (e.g. localized prose) render statically.
 * Fully disabled under prefers-reduced-motion; SSR always renders the final
 * value so there is never a mismatch or a "0" flash in static HTML.
 */
export default function CountUp({ value, duration = 1600, className = "" }: CountUpProps) {
  const match = value.match(LEADING_NUMBER);
  const target = match ? parseFloat(match[1]) : null;
  const rest = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState<number | null>(target);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let start = 0;

    const tick = (now: number) => {
      if (!start) start = now;
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setShown(target);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            io.disconnect();
            setShown(0);
            raf = requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  if (target === null) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {(shown ?? target).toFixed(decimals)}
      {rest}
    </span>
  );
}
