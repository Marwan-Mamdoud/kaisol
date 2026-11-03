"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  /** Parallax travel in px (positive = moves slower / drifts down). */
  strength?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Extra classes applied to the <img>. */
  imgClassName?: string;
  objectPosition?: string;
};

/**
 * Image with a gentle scroll parallax. The wrapper clips (overflow-hidden)
 * and the image is slightly over-scaled so drift never reveals edges.
 * Fully disabled under prefers-reduced-motion.
 */
export default function ParallaxImage({
  src,
  alt,
  strength = 40,
  className = "",
  sizes = "100vw",
  priority = false,
  imgClassName = "",
  objectPosition,
}: ParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const wrap = imgWrapRef.current;
    if (!frame || !wrap) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let active = false;

    const update = () => {
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 (below viewport) → 1 (above viewport)
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const clamped = Math.max(-1, Math.min(1, progress));
      wrap.style.setProperty("--parallax-y", `${clamped * strength}px`);
    };

    const onScroll = () => {
      if (!active) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      (entries) => {
        active = entries[0]?.isIntersecting ?? false;
        if (active) update();
      },
      { rootMargin: "120px 0px" }
    );
    io.observe(frame);

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div ref={frameRef} className={`relative overflow-hidden ${className}`}>
      <div ref={imgWrapRef} className="parallax-slow absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
    </div>
  );
}
