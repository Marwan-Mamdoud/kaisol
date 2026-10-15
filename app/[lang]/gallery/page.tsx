"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Reveal from "../components/Reveal";

const PHOTOS: string[] = Array.from(
  { length: 33 },
  (_, i) => `/gallary/photo-${String(i + 1).padStart(2, "0")}.png`
);

const HERO_BG = "/gallary/photo-08.png";
const FEATURE = "/gallary/photo-01.png";

function Frame({
  src,
  index,
  onOpen,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  eager = false,
}: {
  src: string;
  index: number;
  onOpen: () => void;
  className?: string;
  sizes?: string;
  eager?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open photo ${index + 1}`}
      className={`luxe-img-zoom group relative block w-full overflow-hidden bg-warm-beige border border-light-border/60 hover:border-sand-gold rounded-none transition-all duration-500 hover:shadow-[0_24px_50px_-20px_rgba(21,20,19,0.35)] cursor-pointer ${className}`}
    >
      <span className="relative block w-full h-full">
        <Image
          src={src}
          alt={`KaiSol resort — photo ${index + 1}`}
          fill
          sizes={sizes}
          loading={eager ? undefined : "lazy"}
          priority={eager}
          className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000"
        />
      </span>
      <span className="absolute inset-0 bg-gradient-to-t from-dark-bar/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <span className="absolute top-3 start-3 bg-cream/90 backdrop-blur-sm text-dark-brown px-2.5 py-1 text-[10px] tracking-[0.25em] font-medium rounded-none opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-500">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="absolute bottom-3 end-3 w-9 h-9 hidden group-hover:flex items-center justify-center bg-dark-bar/80 backdrop-blur-sm text-sand-gold rounded-none transition-all duration-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v14M5 12h14" />
        </svg>
      </span>
    </button>
  );
}

export default function GalleryPage() {
  const t = useTranslations("Gallery");
  const [selected, setSelected] = useState<number | null>(null);
  const [touchX, setTouchX] = useState<number | null>(null);
  const total = PHOTOS.length;

  const close = useCallback(() => setSelected(null), []);
  const step = useCallback(
    (d: number) =>
      setSelected((s) => (s === null ? s : (s + d + total) % total)),
    [total]
  );

  /* Keyboard nav + scroll lock while viewer is open */
  useEffect(() => {
    if (selected === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [selected, close, step]);

  /* Editorial rhythm: repeating wide → duo → trio */
  const rows: { kind: "wide" | "duo" | "trio"; photos: number[] }[] = [];
  for (let i = 1; i < total; i += 6) {
    rows.push({ kind: "wide", photos: [i] });
    if (i + 1 < total)
      rows.push({ kind: "duo", photos: [i + 1, i + 2].filter((n) => n < total) });
    if (i + 3 < total)
      rows.push({
        kind: "trio",
        photos: [i + 3, i + 4, i + 5].filter((n) => n < total),
      });
  }

  const variants = ["left", "up", "right"] as const;

  return (
    <>
      <Header />
      <main className="w-full bg-surface overflow-x-clip">
        {/* ============ HERO (light & airy) ============ */}
        <section className="relative w-full overflow-hidden bg-cream">
          <div className="absolute inset-0">
            <Image
              src={HERO_BG}
              alt=""
              aria-hidden
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/80 to-cream" />
          </div>
          <div className="relative z-10 max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 pt-28 md:pt-36 pb-12 md:pb-16 text-center">
            <p
              className="anim-hero-rise text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.4em] text-olive font-semibold mb-4"
              style={{ animationDelay: "100ms" }}
            >
              {t("hero.eyebrow")}
            </p>
            <h1
              className="anim-hero-rise font-heading uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-dark-brown leading-[1.02] tracking-tight"
              style={{ animationDelay: "200ms" }}
            >
              {t("hero.titleA")}{" "}
              <span className="font-heading italic font-light text-sand-gold">
                {t("hero.titleB")}
              </span>
            </h1>
            <p
              className="anim-hero-rise text-sm sm:text-base md:text-lg text-body-gray font-light mt-5 max-w-2xl mx-auto"
              style={{ animationDelay: "350ms" }}
            >
              {t("hero.subtitle")}
            </p>
            <div
              className="anim-hero-rise inline-flex items-center gap-3 mt-6 text-body-gray"
              style={{ animationDelay: "500ms" }}
            >
              <span className="font-heading text-2xl md:text-3xl text-dark-brown tabular-nums">
                {total}
              </span>
              <span className="text-[11px] uppercase tracking-[0.3em]">
                {t("hero.frames")}
              </span>
              <span className="w-8 h-px bg-sand-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-olive animate-bounce">
                {t("hero.scroll")} ↓
              </span>
            </div>
          </div>
        </section>

        {/* ============ FEATURE OPENER ============ */}
        <section className="w-full pb-14 md:pb-20 bg-cream rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="zoom" y={50}>
              <div className="group relative h-[320px] sm:h-[440px] md:h-[560px] overflow-hidden border border-light-border shadow-[0_30px_70px_-25px_rgba(21,20,19,0.35)] rounded-none">
                <Image
                  src={FEATURE}
                  alt="KaiSol Romance Resort beachfront"
                  fill
                  sizes="100vw"
                  className="object-cover anim-hero-bg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bar/55 via-transparent to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelected(0)}
                  className="absolute inset-0 cursor-zoom-in"
                  aria-label="Open featured photo"
                />
                <p className="absolute bottom-5 start-6 md:bottom-7 md:start-9 font-heading italic font-light text-cream text-lg sm:text-xl md:text-2xl drop-shadow-lg pointer-events-none">
                  {t("feature.caption")}
                </p>
                <span className="absolute top-4 end-4 md:top-6 md:end-6 bg-cream/90 backdrop-blur-sm text-dark-brown px-3 py-1.5 text-[10px] tracking-[0.25em] font-medium rounded-none pointer-events-none">
                  01 / {total}
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ RHYTHM FLOW ============ */}
        <section className="w-full pb-16 sm:pb-20 md:pb-28 bg-surface rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="down">
              <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="w-8 h-px bg-sand-gold" />
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                    {t("flow.overline")}
                  </span>
                  <span className="w-8 h-px bg-sand-gold" />
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                  {t("flow.heading")}
                </h2>
                <p className="text-sm sm:text-base text-body-gray font-light mt-3">
                  {t("flow.sub")}
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col gap-4 md:gap-6">
              {rows.map((row, ri) => (
                <div
                  key={ri}
                  className={
                    row.kind === "wide"
                      ? "grid grid-cols-1"
                      : row.kind === "duo"
                        ? "grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
                        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                  }
                >
                  {row.photos.map((pi, k) => (
                    <Reveal
                      key={PHOTOS[pi]}
                      variant={variants[(ri + k) % 3]}
                      delay={k * 140}
                    >
                      <Frame
                        src={PHOTOS[pi]}
                        index={pi}
                        onOpen={() => setSelected(pi)}
                        sizes={
                          row.kind === "wide"
                            ? "100vw"
                            : row.kind === "duo"
                              ? "(max-width: 640px) 100vw, 50vw"
                              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        }
                        className={
                          row.kind === "wide"
                            ? "aspect-[16/8] sm:aspect-[21/9]"
                            : "aspect-[4/3]"
                        }
                      />
                    </Reveal>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Partners />
      </main>
      <Footer />

      {/* ============ LIGHTBOX VIEWER ============ */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[70] bg-cream/97 backdrop-blur-md flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${selected + 1} of ${total}`}
          onTouchStart={(e) =>
            setTouchX(e.touches[0].clientX)
          }
          onTouchEnd={(e) => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
            setTouchX(null);
          }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 sm:px-8 md:px-12 py-4 md:py-5 border-b border-light-border/70 shrink-0">
            <span className="font-heading text-xl md:text-2xl text-dark-brown tabular-nums">
              {String(selected + 1).padStart(2, "0")}
              <span className="text-body-gray text-base md:text-lg">
                {" "}
                {t("viewer.of")} {total}
              </span>
            </span>
            <button
              type="button"
              onClick={close}
              aria-label={t("viewer.close")}
              className="w-11 h-11 flex items-center justify-center border border-dark-brown/20 text-dark-brown hover:bg-dark-brown hover:text-cream hover:border-dark-brown active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Stage */}
          <div
            className="relative flex-1 min-h-0 flex items-center justify-center px-3 sm:px-16 md:px-24 py-4"
            onClick={close}
          >
            <div
              key={PHOTOS[selected]}
              className="relative h-full w-full max-w-6xl border border-light-border shadow-[0_40px_90px_-30px_rgba(21,20,19,0.4)] rounded-none overflow-hidden viewer-enter"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={PHOTOS[selected]}
                alt={`KaiSol resort — photo ${selected + 1}`}
                fill
                sizes="100vw"
                className="object-contain bg-surface-container"
              />
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label={t("viewer.prev")}
              className="absolute start-3 sm:start-6 md:start-10 top-1/2 -translate-y-1/2 w-11 h-11 md:w-13 md:h-13 flex items-center justify-center bg-white/80 backdrop-blur border border-dark-brown/15 text-dark-brown hover:bg-dark-brown hover:text-cream active:scale-95 transition-all duration-300 rounded-none cursor-pointer z-10"
            >
              <svg className="w-5 h-5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label={t("viewer.next")}
              className="absolute end-3 sm:end-6 md:end-10 top-1/2 -translate-y-1/2 w-11 h-11 md:w-13 md:h-13 flex items-center justify-center bg-white/80 backdrop-blur border border-dark-brown/15 text-dark-brown hover:bg-dark-brown hover:text-cream active:scale-95 transition-all duration-300 rounded-none cursor-pointer z-10"
            >
              <svg className="w-5 h-5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumb rail */}
          <div className="shrink-0 border-t border-light-border/70 bg-cream/60">
            <div className="flex items-center gap-2 overflow-x-auto px-5 sm:px-8 md:px-12 py-3">
              {PHOTOS.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-label={`Photo ${i + 1}`}
                  className={`relative h-12 md:h-14 aspect-[4/3] shrink-0 overflow-hidden rounded-none cursor-pointer transition-all duration-300 ${
                    i === selected
                      ? "ring-2 ring-olive opacity-100"
                      : "opacity-45 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
