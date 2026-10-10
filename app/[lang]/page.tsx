"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import Reveal from "./components/Reveal";

/* Real resort photography — public/home-page-images + public/room1..room10 */
const IMG = {
  hero: "/home-page-images/main-image-kaisol.png",
  essenceMain: "/home-page-images/see-from-out-side.png",
  essenceInset: "/home-page-images/main-pool.png",
  dining: "/home-page-images/dining.png",
  honeymoon: "/home-page-images/roof.png",
};

/* Base booking engine URL (room CTAs). Hero console appends live queries. */
const BOOKING_URL = "https://bookings.kaisolhotels.com/105902";

type Room = {
  name: string;
  desc: string;
  tag: string;
  meta: string;
  img: string;
  amenities: string[];
};

function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={`${className} rtl-flip`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  );
}

function Stepper({
  value,
  min,
  max,
  onChange,
  label,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  label: string;
}) {
  return (
    <div>
      <span className="text-[10px] uppercase tracking-[0.25em] text-sand-gold/90 block mb-2">
        {label}
      </span>
      <div className="flex items-center gap-3 md:gap-4">
        <button
          type="button"
          aria-label={`decrease ${label}`}
          onClick={() => onChange(Math.max(min, value - 1))}
          className="w-8 h-8 shrink-0 flex items-center justify-center border border-white/25 text-cream hover:bg-sand-gold hover:border-sand-gold hover:text-dark-bar active:scale-95 transition-all duration-300 rounded-none cursor-pointer text-lg leading-none"
        >
          −
        </button>
        <span className="font-heading text-2xl md:text-3xl text-cream min-w-[2ch] text-center tabular-nums">
          {value}
        </span>
        <button
          type="button"
          aria-label={`increase ${label}`}
          onClick={() => onChange(Math.min(max, value + 1))}
          className="w-8 h-8 shrink-0 flex items-center justify-center border border-white/25 text-cream hover:bg-sand-gold hover:border-sand-gold hover:text-dark-bar active:scale-95 transition-all duration-300 rounded-none cursor-pointer text-lg leading-none"
        >
          +
        </button>
      </div>
    </div>
  );
}

function RoomsSlider({
  rooms,
  bookLabel,
  learnLabel,
  prevLabel,
  nextLabel,
}: {
  rooms: Room[];
  bookLabel: string;
  learnLabel: string;
  prevLabel: string;
  nextLabel: string;
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchX, setTouchX] = useState<number | null>(null);

  useEffect(() => {
    if (paused || rooms.length < 2) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % rooms.length), 6500);
    return () => clearInterval(id);
  }, [paused, rooms.length]);

  const go = (d: number) => setIdx((i) => (i + d + rooms.length) % rooms.length);
  const room = rooms[idx];

  return (
    <div>
      <div
        className="relative overflow-hidden bg-white border border-light-border/80 shadow-xl rounded-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX === null) return;
          const dx = e.changedTouches[0].clientX - touchX;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          setTouchX(null);
        }}
      >
        {/* Slides */}
        <div className="grid">
          {rooms.map((r, i) => (
            <div
              key={r.img}
              className={`col-start-1 row-start-1 grid grid-cols-1 lg:grid-cols-2 transition-all duration-700 ease-out ${
                i === idx
                  ? "opacity-100 translate-y-0 relative z-10"
                  : "opacity-0 translate-y-6 pointer-events-none"
              }`}
              aria-hidden={i !== idx}
            >
              <div className="relative h-[300px] sm:h-[380px] lg:h-[520px] bg-warm-beige overflow-hidden">
                <Image
                  src={r.img}
                  alt={r.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={i === 0}
                  className="object-cover"
                />
                <span className="absolute top-4 start-4 bg-dark-bar/90 backdrop-blur-sm text-cream px-3 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-medium border border-white/20 rounded-none">
                  {r.tag}
                </span>
              </div>
              <div className="p-6 sm:p-8 md:p-10 xl:p-12 flex flex-col justify-center">
                <p className="text-[11px] uppercase tracking-[0.25em] text-olive font-semibold mb-3">
                  {r.meta}
                </p>
                <h3 className="font-heading uppercase text-2xl sm:text-3xl md:text-4xl font-normal text-dark-brown mb-4 leading-tight">
                  {r.name}
                </h3>
                <p className="text-sm md:text-[15px] text-body-gray leading-relaxed mb-6 font-light">
                  {r.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {r.amenities.map((a) => (
                    <span
                      key={a}
                      className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-dark-brown/80 border border-light-border px-3 py-1.5 hover:border-sand-gold hover:text-olive transition-colors duration-300"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxe-btn inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-hover text-white text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-none text-center"
                  >
                    {bookLabel}
                  </a>
                  <a
                    href="tel:+201273299991"
                    className="luxe-link-arrow inline-flex items-center justify-center sm:justify-start gap-2 text-xs uppercase tracking-[0.18em] text-olive hover:text-dark-brown transition-colors rounded-none"
                  >
                    <span>{learnLabel}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          type="button"
          aria-label={prevLabel}
          onClick={() => go(-1)}
          className="absolute top-[150px] sm:top-[190px] lg:top-1/2 lg:-translate-y-1/2 start-3 md:start-5 z-20 w-11 h-11 flex items-center justify-center bg-dark-bar/70 backdrop-blur-md border border-white/25 text-cream hover:bg-sand-gold hover:border-sand-gold hover:text-dark-bar active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
        >
          <svg className="w-5 h-5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label={nextLabel}
          onClick={() => go(1)}
          className="absolute top-[150px] sm:top-[190px] lg:top-1/2 lg:-translate-y-1/2 end-3 md:end-5 z-20 w-11 h-11 flex items-center justify-center bg-dark-bar/70 backdrop-blur-md border border-white/25 text-cream hover:bg-sand-gold hover:border-sand-gold hover:text-dark-bar active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
        >
          <svg className="w-5 h-5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots + counter */}
      <div className="flex items-center justify-between mt-6 md:mt-8 gap-4">
        <div className="flex items-center gap-2 overflow-x-auto py-1 flex-1">
          {rooms.map((r, i) => (
            <button
              key={r.img}
              type="button"
              aria-label={`${r.name}`}
              onClick={() => setIdx(i)}
              className={`h-2 shrink-0 rounded-none cursor-pointer transition-all duration-500 ${
                i === idx
                  ? "w-8 bg-sand-gold"
                  : "w-2 bg-dark-brown/20 hover:bg-olive"
              }`}
            />
          ))}
        </div>
        <span className="font-heading text-xl md:text-2xl text-dark-brown tabular-nums shrink-0">
          {String(idx + 1).padStart(2, "0")}
          <span className="text-body-gray text-base md:text-lg"> / {rooms.length}</span>
        </span>
      </div>
      {/* Hidden SEO / a11y name for current room */}
      <span className="sr-only" aria-live="polite">{room.name}</span>
    </div>
  );
}

export default function HomePage() {
  const t = useTranslations("Home.luxe");
  const locale = useLocale();
  const heroRef = useRef<HTMLElement>(null);
  const [parallax, setParallax] = useState(0);
  const toISODate = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate()
    ).padStart(2, "0")}`;
  const todayISO = toISODate(new Date());
  const tomorrowISO = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return toISODate(d);
  })();
  const [checkin, setCheckin] = useState(tomorrowISO);
  const [roomsCount, setRoomsCount] = useState(1);
  const [adults, setAdults] = useState(1);

  const toDDMMYYYY = (iso: string) => {
    const parts = iso.split("-");
    return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : "";
  };
  const heroBookingUrl = `${BOOKING_URL}?Adults=${adults}&DateIn=${toDDMMYYYY(
    checkin || tomorrowISO
  )}&Rooms=${roomsCount}#/guestsandrooms`;

  const rooms = t.raw("suites.rooms") as Room[];

  /* Hero scroll parallax (disabled for reduced motion) */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = heroRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0) return;
        setParallax(Math.min(1, Math.max(0, -rect.top / rect.height)));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="w-full bg-surface overflow-x-clip">
        {/* ============ CINEMATIC HERO ============ */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden bg-dark-bar rounded-none"
        >
          <div
            className="absolute inset-0 will-change-transform"
            style={{ transform: `translateY(${parallax * 120}px)` }}
          >
            <Image
              src={IMG.hero}
              alt="KaiSol Romance Resort beachfront, Sahl Hasheesh"
              fill
              priority
              sizes="100vw"
              className="object-cover anim-hero-bg"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bar via-dark-bar/50 to-dark-bar/80 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(21,20,19,0.75)_100%)] pointer-events-none" />

          {/* Coordinates bar */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full pt-6 md:pt-12 hidden md:flex items-center justify-center gap-6 xl:gap-8 text-cream/70 border-b border-white/10 pb-4 text-[11px] uppercase tracking-[0.3em]">
            <span>{t("hero.coordsRight1")}</span>
            <span className="w-1.5 h-1.5 bg-sand-gold anim-gold-dot hidden lg:inline-block shrink-0" />
            <span className="hidden lg:inline">{t("hero.coordsRight2")}</span>
            <span className="w-1.5 h-1.5 bg-sand-gold anim-gold-dot shrink-0" />
            <span className="text-sand-gold">{t("hero.coordsRight3")}</span>
          </div>

          {/* Center piece */}
          <div className="relative z-10 max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 w-full text-center flex flex-col items-center my-auto py-10 sm:py-12 md:py-16">
            <p
              className="anim-hero-rise text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.4em] text-sand-gold font-medium mb-4 md:mb-5"
              style={{ animationDelay: "100ms" }}
            >
              {t("hero.eyebrow")}
            </p>
            <h1
              className="anim-hero-rise font-heading uppercase text-[2.6rem] leading-[1.05] sm:text-7xl md:text-8xl lg:text-[96px] font-light text-white max-w-6xl md:leading-[1.02] tracking-[-0.01em] drop-shadow-2xl"
              style={{ animationDelay: "150ms" }}
            >
              {t("hero.titleA")}{" "}
              <span className="font-heading italic font-light text-sand-gold">
                {t("hero.titleB")}
              </span>
            </h1>
            <p
              className="anim-hero-rise text-sm sm:text-lg md:text-xl text-cream/90 max-w-3xl font-light tracking-wide mt-5 md:mt-7 leading-relaxed"
              style={{ animationDelay: "300ms" }}
            >
              {t("hero.subtitle")}
            </p>
            <div
              className="anim-hero-rise grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-12 mt-8 md:mt-12 max-w-3xl w-full border-t border-b border-white/15 py-4 px-4 sm:px-6 text-cream/80 text-[10px] md:text-[11px] uppercase tracking-[0.25em]"
              style={{ animationDelay: "450ms" }}
            >
              {[t("hero.pillar1"), t("hero.pillar2"), t("hero.pillar3")].map((p, i) => (
                <div
                  key={p}
                  className={`flex items-center justify-center gap-2.5 group cursor-default hover:text-cream transition-colors duration-300 ${
                    i === 1 ? "border-y sm:border-y-0 sm:border-x border-white/10 py-2 sm:py-0" : ""
                  }`}
                >
                  <span className="w-1.5 h-1.5 bg-sand-gold shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking console */}
          <div
            className="anim-hero-rise relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 w-full pb-10 md:pb-20"
            id="booking-console"
            style={{ animationDelay: "600ms" }}
          >
            <div className="text-center mb-4 md:mb-5">
              <p className="font-heading italic font-light text-cream text-xl sm:text-2xl md:text-[28px] leading-tight drop-shadow-lg">
                {t("booking.headline")}
              </p>
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-sand-gold/80" />
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-sand-gold/90">
                  {t("booking.headlineSub")}
                </span>
                <span className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-sand-gold/80" />
              </div>
            </div>
            <div className="relative bg-dark-bar/95 backdrop-blur-2xl border border-sand-gold/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] p-3 sm:p-4 md:p-6 rounded-none hover:border-sand-gold/70 hover:shadow-[0_30px_90px_-18px_rgba(197,178,153,0.35)] transition-all duration-500">
              <span aria-hidden className="absolute -top-px -left-px w-7 h-7 border-t-2 border-l-2 border-sand-gold" />
              <span aria-hidden className="absolute -top-px -right-px w-7 h-7 border-t-2 border-r-2 border-sand-gold" />
              <span aria-hidden className="absolute -bottom-px -left-px w-7 h-7 border-b-2 border-l-2 border-sand-gold" />
              <span aria-hidden className="absolute -bottom-px -right-px w-7 h-7 border-b-2 border-r-2 border-sand-gold" />
              <form
                className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-white/15 rounded-none"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="md:col-span-5 bg-black/40 p-4 sm:p-5 md:p-6 border-b md:border-b-0 md:border-e border-white/15 group hover:bg-black/60 transition-colors duration-300 rounded-none">
                  <label
                    htmlFor="checkin-date"
                    className="text-[10px] uppercase tracking-[0.25em] text-sand-gold/90 block mb-2"
                  >
                    {t("booking.checkinLabel")}
                  </label>
                  <input
                    id="checkin-date"
                    type="date"
                    value={checkin}
                    min={todayISO}
                    onChange={(e) => setCheckin(e.target.value)}
                    className="w-full bg-transparent font-heading text-lg md:text-xl text-cream focus:outline-none rounded-none [color-scheme:dark] cursor-pointer"
                  />
                </div>
                <div className="md:col-span-2 bg-black/40 p-4 sm:p-5 md:p-6 border-b md:border-b-0 md:border-e border-white/15 hover:bg-black/60 transition-colors duration-300 rounded-none">
                  <Stepper
                    label={t("booking.nightsLabel")}
                    value={roomsCount}
                    min={1}
                    max={10}
                    onChange={setRoomsCount}
                  />
                </div>
                <div className="md:col-span-2 bg-black/40 p-4 sm:p-5 md:p-6 border-b md:border-b-0 md:border-e border-white/15 hover:bg-black/60 transition-colors duration-300 rounded-none">
                  <Stepper
                    label={t("booking.adultsLabel")}
                    value={adults}
                    min={1}
                    max={10}
                    onChange={setAdults}
                  />
                </div>
                <div className="md:col-span-3 bg-olive flex rounded-none">
                  <a
                    href={heroBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxe-btn luxe-shimmer w-full bg-olive hover:bg-olive-hover text-white text-[11px] uppercase tracking-[0.25em] p-4 md:p-5 flex items-center justify-center gap-3 duration-300 border-none rounded-none cursor-pointer group"
                  >
                    <span>{t("booking.cta")}</span>
                    <ArrowIcon className="w-[18px] h-[18px] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </form>
              <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-wrap items-center justify-between text-cream/70 text-[11px] gap-3 md:gap-4">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {[t("booking.note2"), t("booking.note3")].map((n) => (
                    <span key={n} className="flex items-center gap-2 hover:text-cream transition-colors duration-300">
                      <span className="w-1.5 h-1.5 bg-sand-gold shrink-0" />
                      {n}
                    </span>
                  ))}
                </div>
                <a
                  href="tel:+201273299991"
                  className="luxe-link-arrow text-sand-gold hover:text-white uppercase text-[10px] tracking-[0.2em] transition-colors border-b border-sand-gold/40 hover:border-white pb-0.5 flex items-center gap-1"
                >
                  {t("booking.concierge")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ ESSENCE / INTRO ============ */}
        <section className="w-full py-16 sm:py-24 md:py-28 lg:py-36 bg-surface rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
              <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-8">
                <Reveal variant="down">
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                      {t("essence.overline")}
                    </span>
                    <span className="w-12 h-px bg-sand-gold" />
                  </div>
                </Reveal>
                <Reveal variant="up" delay={150}>
                  <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-light text-dark-brown leading-[1.12] md:leading-[1.08] tracking-tight">
                    {t("essence.heading")}
                  </h2>
                </Reveal>
                <Reveal variant="left" delay={300}>
                  <div className="text-body-gray space-y-4 md:space-y-6 text-[15px] sm:text-base md:text-lg font-light leading-relaxed">
                    <p>{t("essence.p1")}</p>
                    <p>{t("essence.p2")}</p>
                  </div>
                </Reveal>
                <Reveal variant="up" delay={450}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-6 border-t border-light-border/80">
                    {[
                      { l: t("essence.spec1label"), ti: t("essence.spec1title"), d: t("essence.spec1desc") },
                      { l: t("essence.spec2label"), ti: t("essence.spec2title"), d: t("essence.spec2desc") },
                    ].map((s) => (
                      <div key={s.ti} className="space-y-2 group cursor-default">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-sand-gold block group-hover:text-olive transition-colors duration-300">
                          {s.l}
                        </span>
                        <span className="font-heading uppercase text-xl md:text-2xl text-dark-brown font-normal block">
                          {s.ti}
                        </span>
                        <p className="text-xs text-body-gray leading-relaxed">{s.d}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal variant="fade" delay={600}>
                  <div className="pt-2 md:pt-4">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="luxe-link-arrow inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-dark-brown hover:text-olive transition-colors group pb-1 border-b border-dark-brown hover:border-olive rounded-none"
                    >
                      <span>{t("essence.cta")}</span>
                      <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-6 relative mt-6 lg:mt-0 pb-8 sm:pb-0">
                <Reveal variant="right" delay={200} y={40}>
                  <div className="luxe-img-zoom relative w-full aspect-[4/5] max-h-[560px] lg:max-h-none border border-light-border shadow-2xl bg-warm-beige rounded-none overflow-hidden group">
                    <Image
                      src={IMG.essenceMain}
                      alt="KaiSol Romance Resort beach, Sahl Hasheesh"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bar/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </Reveal>
                <Reveal
                  variant="left"
                  delay={400}
                  className="absolute -bottom-8 sm:-bottom-10 start-0 sm:start-auto ltr:sm:-left-10 rtl:sm:-right-10 w-3/5 aspect-[4/3] border-4 border-surface shadow-2xl hidden sm:block rounded-none overflow-hidden bg-dark-brown luxe-img-zoom group"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={IMG.essenceInset}
                      alt="KaiSol main pool"
                      fill
                      sizes="(max-width: 1024px) 60vw, 30vw"
                      className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </Reveal>
                <Reveal
                  variant="zoom"
                  delay={550}
                  className="absolute top-4 md:top-6 end-4 md:end-6 bg-dark-bar/90 backdrop-blur-md px-4 md:px-6 py-3 md:py-4 border border-sand-gold/40 shadow-xl flex items-center gap-3 md:gap-4 rounded-none text-cream hover:border-sand-gold hover:bg-dark-bar transition-all duration-500 anim-float-slow"
                >
                  <svg className="w-5 h-5 md:w-[22px] md:h-[22px] text-sand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z" />
                  </svg>
                  <div>
                    <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-sand-gold block">
                      {t("essence.plaqueLabel")}
                    </span>
                    <span className="font-heading text-sm md:text-base font-medium tracking-wide">
                      {t("essence.plaqueTitle")}
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============ ACCOMMODATIONS SLIDER ============ */}
        <section className="w-full py-16 sm:py-24 md:py-28 lg:py-36 bg-cream border-t border-b border-light-border/80 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="left">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-5 md:gap-6">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                      {t("suites.overline")}
                    </span>
                    <span className="w-8 h-px bg-sand-gold" />
                  </div>
                  <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                    {t("suites.heading")}
                  </h2>
                  <p className="text-sm sm:text-base text-body-gray font-light mt-3">
                    {t("suites.sub")}
                  </p>
                </div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxe-btn inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-hover text-white text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-none w-fit shrink-0"
                >
                  <span>{t("suites.cta")}</span>
                </a>
              </div>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <RoomsSlider
                rooms={rooms}
                bookLabel={t("suites.cta")}
                learnLabel={t("suites.viewLabel")}
                prevLabel={t("suites.prev")}
                nextLabel={t("suites.next")}
              />
            </Reveal>
          </div>
        </section>

        {/* ============ DINING ============ */}
        <section className="w-full py-16 sm:py-24 md:py-28 lg:py-36 bg-surface rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="right">
              <div className="max-w-2xl mb-10 md:mb-16">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                    {t("gastronomy.overline")}
                  </span>
                  <span className="w-8 h-px bg-sand-gold" />
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                  {t("gastronomy.heading")}
                </h2>
                <p className="text-[15px] sm:text-base md:text-lg text-body-gray font-light mt-4">
                  {t("gastronomy.sub")}
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
              <Reveal variant="zoom" className="lg:col-span-7" delay={150}>
                <div className="bg-dark-bar relative min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] h-full flex flex-col justify-end p-6 sm:p-8 md:p-14 group text-white border border-sand-gold/30 hover:border-sand-gold/70 transition-colors duration-500 rounded-none overflow-hidden">
                  <Image
                    src={IMG.dining}
                    alt="KaiSol restaurant"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-75 rounded-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bar via-dark-bar/50 to-transparent" />
                  <div className="relative z-10 space-y-4 max-w-lg">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-sand-gold bg-black/60 border border-sand-gold/40 px-3 py-1 inline-block rounded-none">
                      {t("gastronomy.featureTag")}
                    </span>
                    <h3 className="font-heading uppercase text-2xl sm:text-4xl lg:text-5xl font-light leading-tight">
                      {t("gastronomy.featureTitle")}
                    </h3>
                    <p className="text-xs sm:text-sm text-cream/80 font-light leading-relaxed">
                      {t("gastronomy.featureDesc")}
                    </p>
                    <div className="pt-2">
                      <a
                        href="tel:+201273299991"
                        className="luxe-link-arrow inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-cream hover:text-sand-gold border-b border-sand-gold/60 hover:border-sand-gold pb-1 rounded-none transition-colors group/link"
                      >
                        <span>{t("gastronomy.featureCta")}</span>
                        <ArrowIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
              <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 justify-between">
                {[
                  {
                    l: t("gastronomy.r1label"),
                    ti: t("gastronomy.r1title"),
                    d: t("gastronomy.r1desc"),
                    c: t("gastronomy.r1cta"),
                    href: "tel:+201273299991",
                  },
                  {
                    l: t("gastronomy.r2label"),
                    ti: t("gastronomy.r2title"),
                    d: t("gastronomy.r2desc"),
                    c: t("gastronomy.r2cta"),
                    href: `/${locale}/dining`,
                  },
                ].map((r, i) => (
                  <Reveal
                    key={r.ti}
                    variant={i === 0 ? "left" : "right"}
                    delay={300 + i * 200}
                    className="flex-1"
                  >
                    <div className="luxe-card bg-cream p-6 sm:p-8 md:p-10 flex flex-col justify-between border border-light-border/80 hover:border-sand-gold h-full rounded-none group">
                      <div>
                        <div className="flex items-center justify-between mb-4 gap-2">
                          <span className="text-[10px] uppercase tracking-[0.25em] text-olive font-semibold">
                            {r.l}
                          </span>
                          <svg className="w-5 h-5 text-olive group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18M7 7c0 3 2 5 5 5s5-2 5-5M7 7h10" />
                          </svg>
                        </div>
                        <h4 className="font-heading uppercase text-xl sm:text-2xl md:text-3xl text-dark-brown font-normal mb-2 group-hover:text-olive transition-colors duration-300">
                          {r.ti}
                        </h4>
                        <p className="text-xs sm:text-sm text-body-gray leading-relaxed mb-4 font-light">
                          {r.d}
                        </p>
                      </div>
                      <a
                        href={r.href}
                        className="luxe-link-arrow inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-dark-brown hover:text-olive transition-colors pt-2 rounded-none"
                      >
                        <span>{r.c}</span>
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ HONEYMOON HAVEN ============ */}
        <section className="w-full py-16 sm:py-24 md:py-28 lg:py-36 bg-warm-beige/40 border-t border-light-border/80 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 relative order-2 lg:order-1">
                <Reveal variant="left" delay={150} y={40}>
                  <div className="luxe-img-zoom relative w-full aspect-[4/5] max-h-[560px] lg:max-h-none shadow-2xl bg-surface border border-light-border/80 rounded-none overflow-hidden group">
                    <Image
                      src={IMG.honeymoon}
                      alt="Honeymoon terrace over the Red Sea"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </Reveal>
                <Reveal
                  variant="zoom"
                  delay={400}
                  className="absolute -bottom-6 end-0 sm:end-auto ltr:sm:-right-6 rtl:sm:-left-6 bg-white p-5 md:p-6 shadow-xl max-w-[240px] md:max-w-xs border border-light-border/80 hover:border-sand-gold hover:shadow-2xl transition-all duration-500 hidden sm:block rounded-none"
                >
                  <div className="flex items-center gap-2 text-olive mb-1.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21c-5 0-8-3-8-7 0-5 4-9 12-11-1 8-1 13-4 18z" />
                    </svg>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">
                      {t("honeymoon.floatLabel")}
                    </span>
                  </div>
                  <p className="text-xs text-body-gray leading-relaxed font-light">
                    {t("honeymoon.floatDesc")}
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-6 lg:ps-6 space-y-6 md:space-y-8 order-1 lg:order-2">
                <Reveal variant="down">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                        {t("honeymoon.overline")}
                      </span>
                      <span className="w-8 h-px bg-sand-gold" />
                    </div>
                    <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                      {t("honeymoon.heading")}
                    </h2>
                  </div>
                </Reveal>
                <Reveal variant="right" delay={250}>
                  <p className="text-[15px] sm:text-base md:text-lg text-body-gray font-light leading-relaxed">
                    {t("honeymoon.sub")}
                  </p>
                </Reveal>
                <div className="space-y-3 md:space-y-4 pt-2">
                  {[
                    { ti: t("honeymoon.f1title"), d: t("honeymoon.f1desc") },
                    { ti: t("honeymoon.f2title"), d: t("honeymoon.f2desc") },
                    { ti: t("honeymoon.f3title"), d: t("honeymoon.f3desc") },
                  ].map((f, i) => (
                    <Reveal
                      key={f.ti}
                      variant={["right", "left", "zoom"][i % 3] as "right" | "left" | "zoom"}
                      delay={300 + i * 200}
                    >
                      <div className="luxe-card bg-white p-4 sm:p-5 border border-light-border/80 hover:border-sand-gold flex items-start gap-4 rounded-none group cursor-default">
                        <span className="w-10 h-10 shrink-0 flex items-center justify-center bg-cream text-olive group-hover:bg-olive group-hover:text-white transition-all duration-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21c-4 0-7-2.5-7-6 0-4 3.5-7.5 9-9-.8 6-.8 10-2 15z" />
                          </svg>
                        </span>
                        <div>
                          <h4 className="font-heading uppercase text-xl md:text-2xl text-dark-brown font-normal group-hover:text-olive transition-colors duration-300">
                            {f.ti}
                          </h4>
                          <p className="text-xs text-body-gray mt-1 leading-relaxed font-light">
                            {f.d}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <Reveal variant="fade" delay={700}>
                  <div className="pt-2 md:pt-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <a
                      href={`/${locale}/about`}
                      className="luxe-btn bg-dark-brown hover:bg-olive text-white text-xs uppercase tracking-[0.2em] px-9 py-4 transition-colors text-center border border-dark-brown hover:border-olive rounded-none"
                    >
                      {t("honeymoon.cta1")}
                    </a>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-[0.2em] text-dark-brown hover:text-olive transition-colors text-center py-2 border-b border-dark-brown hover:border-olive rounded-none w-fit mx-auto sm:mx-0"
                    >
                      {t("honeymoon.cta2")}
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============ REVIEWS ============ */}
        <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-surface rounded-none">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 mb-12 md:mb-20">
              {[
                { q: t("reviews.q1"), n: t("reviews.q1name"), m: t("reviews.q1meta"), init: "E&M" },
                { q: t("reviews.q2"), n: t("reviews.q2name"), m: t("reviews.q2meta"), init: "D&L" },
              ].map((r, i) => (
                <Reveal
                  key={r.n}
                  variant={i === 0 ? "left" : "right"}
                  delay={150 + i * 250}
                >
                  <div className="luxe-card bg-white p-7 sm:p-10 md:p-12 relative border border-light-border/80 hover:border-sand-gold flex flex-col justify-between shadow-sm rounded-none h-full group">
                    <div>
                      <span className="font-heading text-6xl md:text-7xl text-sand-gold/40 leading-none block -mb-4 md:-mb-6 select-none font-light group-hover:text-sand-gold/70 transition-colors duration-500">
                        &ldquo;
                      </span>
                      <p className="font-heading text-xl sm:text-2xl md:text-3xl text-dark-brown italic font-light leading-relaxed mb-6 md:mb-8">
                        {r.q}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-light-border/60">
                      <div className="w-11 h-11 bg-warm-beige text-dark-brown font-heading text-lg flex items-center justify-center font-medium border border-light-border/80 rounded-none group-hover:bg-olive group-hover:text-white transition-all duration-500 shrink-0">
                        {r.init}
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-sm font-semibold text-dark-brown truncate">{r.n}</h5>
                        <p className="text-xs text-body-gray truncate">{r.m}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal variant="up" delay={200}>
              <div className="border-t border-b border-light-border/80 py-6 md:py-8 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 md:gap-6 text-body-gray text-[11px] md:text-xs uppercase tracking-[0.2em] rounded-none">
                {[t("reviews.a1"), t("reviews.a2"), t("reviews.a3")].map((a) => (
                  <span key={a} className="flex items-center gap-2 hover:text-dark-brown transition-colors duration-300 text-center">
                    <svg className="w-[18px] h-[18px] text-olive shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z" />
                    </svg>
                    {a}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
        <Partners />
      </main>
      <Footer />
    </>
  );
}
