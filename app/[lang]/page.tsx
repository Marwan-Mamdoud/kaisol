"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import Reveal from "./components/Reveal";
import ParallaxImage from "./components/ParallaxImage";

/* Real resort photography */
const IMG = {
  hero: "/home-page-images/main-image-kaisol.png",
  essenceMain: "/home-page-images/see-from-out-side.png",
  essenceInset: "/home-page-images/main-pool.png",
  dining: "/home-page-images/dining.png",
  honeymoon: "/home-page-images/roof.png",
};

const GALLERY = [
  "/gallary/photo-02.png",
  "/gallary/photo-07.png",
  "/gallary/photo-11.png",
  "/gallary/photo-16.png",
  "/gallary/photo-21.png",
  "/gallary/photo-26.png",
  "/gallary/photo-30.png",
  "/gallary/photo-33.png",
];

const GALLERY_ALT = [
  "/gallary/photo-03.png",
  "/gallary/photo-09.png",
  "/gallary/photo-14.png",
  "/gallary/photo-19.png",
  "/gallary/photo-24.png",
  "/gallary/photo-28.png",
];

const DINING_THUMBS = [
  "/dining/cedar.png",
  "/dining/masala.png",
  "/dining/reefs.png",
  "/dining/fusion.png",
];

const DINING_ALT = [
  "/dining/cedar_1.png",
  "/dining/masla_1.png",
  "/dining/reefs1.png",
  "/dining/fusion1.png",
];

const HONEYMOON_TILES = [
  "/gallary/photo-05.png",
  "/gallary/photo-18.png",
];

/* Client / award imagery for the marquee band */
const CLIENT_LOGOS = [
  "https://marketing.kaisolhotels.com/IMG-5486.jpg",
  "https://marketing.kaisolhotels.com/IMG-8589.jpg",
];

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
    <svg className={`${className} rtl-flip`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
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
      <span className="text-[9px] uppercase tracking-[0.2em] text-gold/90 block mb-1.5">{label}</span>
      <div className="flex items-center gap-2 md:gap-3">
        <button
          type="button"
          aria-label={`decrease ${label}`}
          onClick={() => onChange(Math.max(min, value - 1))}
          className="w-7 h-7 md:w-8 md:h-8 shrink-0 flex items-center justify-center border border-brand/25 text-brand hover:bg-gold hover:border-gold hover:text-cream active:scale-95 transition-all duration-300 rounded-none cursor-pointer text-lg leading-none"
        >
          −
        </button>
        <span className="font-heading text-xl md:text-2xl text-brand min-w-[2ch] text-center tabular-nums">{value}</span>
        <button
          type="button"
          aria-label={`increase ${label}`}
          onClick={() => onChange(Math.min(max, value + 1))}
          className="w-7 h-7 md:w-8 md:h-8 shrink-0 flex items-center justify-center border border-brand/25 text-brand hover:bg-gold hover:border-gold hover:text-cream active:scale-95 transition-all duration-300 rounded-none cursor-pointer text-lg leading-none"
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
  prevLabel,
  nextLabel,
}: {
  rooms: Room[];
  bookLabel: string;
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
        className="relative overflow-hidden bg-warm-beige border border-light-border/80 shadow-xl rounded-none h-[420px] sm:h-[500px] lg:h-[620px]"
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
        <div className="grid h-full">
          {rooms.map((r, i) => (
            <div
              key={r.img}
              className={`col-start-1 row-start-1 h-full transition-all duration-700 ease-out ${
                i === idx
                  ? "opacity-100 translate-y-0 relative z-10"
                  : "opacity-0 translate-y-6 pointer-events-none"
              }`}
              aria-hidden={i !== idx}
            >
              <div className="relative h-full w-full">
                <Image
                  src={r.img}
                  alt={r.name}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-brand/55 via-brand/15 to-transparent" />
                <div className="absolute inset-x-0 top-0 p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col items-start text-cream">
                  <span className="bg-brand/70 backdrop-blur-sm text-cream px-3 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-medium border border-gold/30 rounded-none mb-4">
                    {r.tag}
                  </span>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-2 drop-shadow-[0_1px_3px_rgba(71,69,68,0.5)]">
                    {r.meta}
                  </p>
                  <h3 className="font-heading uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal max-w-2xl leading-tight drop-shadow-[0_2px_4px_rgba(71,69,68,0.5)]">
                    {r.name}
                  </h3>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxe-btn inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-cream text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-none text-center mt-6"
                  >
                    {bookLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-5 md:mt-6 gap-3">
        <button
          type="button"
          aria-label={prevLabel}
          onClick={() => go(-1)}
          className="w-10 h-10 md:w-11 md:h-11 shrink-0 flex items-center justify-center bg-cream border border-light-border/80 text-brand hover:bg-gold hover:border-gold hover:text-cream active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
        >
          <svg className="w-5 h-5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-2 overflow-x-auto py-1 flex-1 px-2">
          {rooms.map((r, i) => (
            <button
              key={r.img}
              type="button"
              aria-label={r.name}
              onClick={() => setIdx(i)}
              className={`h-2 shrink-0 rounded-none cursor-pointer transition-all duration-500 ${
                i === idx ? "w-8 bg-gold" : "w-2 bg-dark-brown/20 hover:bg-gold"
              }`}
            />
          ))}
        </div>
        <span className="font-heading text-xl md:text-2xl text-dark-brown tabular-nums shrink-0">
          {String(idx + 1).padStart(2, "0")}
          <span className="text-body-gray text-base md:text-lg"> / {rooms.length}</span>
        </span>
        <button
          type="button"
          aria-label={nextLabel}
          onClick={() => go(1)}
          className="w-10 h-10 md:w-11 md:h-11 shrink-0 flex items-center justify-center bg-cream border border-light-border/80 text-brand hover:bg-gold hover:border-gold hover:text-cream active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
        >
          <svg className="w-5 h-5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <span className="sr-only" aria-live="polite">{room.name}</span>
    </div>
  );
}

export default function HomePage() {
  const t = useTranslations("Home.luxe");
  const locale = useLocale();
  const heroRef = useRef<HTMLElement>(null);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [parallax, setParallax] = useState(0);
  const toISODate = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
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

  useEffect(() => {
    const id = setInterval(() => setReviewIdx((i) => (i + 1) % 2), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Header />
      <main className="w-full bg-surface overflow-x-clip">
        {/* ============ CINEMATIC HERO ============ */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden bg-cream rounded-none hero-glow"
        >
          <div className="absolute inset-0 will-change-transform" style={{ transform: `translateY(${parallax * 120}px)` }}>
            <Image
              src={IMG.hero}
              alt="KaiSol Romance Resort beachfront, Sahl Hasheesh"
              fill
              priority
              sizes="100vw"
              className="object-cover anim-hero-bg"
            />
          </div>

          <svg aria-hidden className="absolute top-[18%] start-[12%] w-3 h-3 anim-float-slow pointer-events-none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" r="3" fill="currentColor" className="text-gold/50" />
          </svg>
          <svg aria-hidden className="absolute top-[32%] end-[16%] w-2.5 h-2.5 anim-float-slow pointer-events-none" style={{ animationDelay: "1.5s" }} viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="2.5" fill="currentColor" className="text-gold/40" />
          </svg>
          <svg aria-hidden className="absolute bottom-[28%] start-[22%] w-2 h-2 anim-gold-dot pointer-events-none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="2" fill="currentColor" className="text-gold/50" />
          </svg>

          <div className="relative z-10 max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 w-full text-center flex flex-col items-center my-auto py-10 sm:py-12 md:py-16">
            <p
              className="anim-hero-rise text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.4em] text-gold font-medium mb-4 md:mb-5"
              style={{ animationDelay: "100ms" }}
            >
              {t("hero.eyebrow")}
            </p>
            <h1
              className="anim-hero-rise font-heading uppercase text-[2.6rem] leading-[1.05] sm:text-7xl md:text-8xl lg:text-[96px] font-light text-cream max-w-6xl md:leading-[1.02] tracking-[-0.01em] drop-shadow-[0_2px_4px_rgba(71,69,68,0.5)]"
              style={{ animationDelay: "150ms" }}
            >
              {t("hero.titleA")}{" "}
              <span className="font-heading italic font-light text-gold">{t("hero.titleB")}</span>
            </h1>
            <p
              className="anim-hero-rise text-sm sm:text-lg md:text-xl text-cream/90 max-w-3xl font-light tracking-wide mt-5 md:mt-7 leading-relaxed drop-shadow-[0_2px_4px_rgba(71,69,68,0.5)]"
              style={{ animationDelay: "300ms" }}
            >
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Compact floating booking strip */}
          
<div
  id="booking-console"
  className="anim-hero-rise relative z-20 mx-auto w-full max-w-[900px] px-4 pb-6 sm:px-6 md:pb-8"
  style={{ animationDelay: "450ms" }}
>
  <form
    onSubmit={(e) => e.preventDefault()}
    className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_auto] items-center border border-gold/30 bg-cream/95 shadow-[0_10px_30px_-16px_rgba(71,69,68,0.2)]"
  >
    {/* Check-in */}
    <div className="min-w-0 border-b border-e border-brand/10 px-3 py-3 sm:px-4 md:border-b-0">
      <label
        htmlFor="checkin-date"
        className="mb-1 block text-[9px] uppercase tracking-[0.16em] text-gold"
      >
        {t("booking.checkinLabel")}
      </label>
      <input
        id="checkin-date"
        type="date"
        value={checkin}
        min={todayISO}
        onChange={(e) => setCheckin(e.target.value)}
        className="w-full min-w-0 bg-transparent text-sm text-brand outline-none [color-scheme:light] cursor-pointer"
      />
    </div>

    {/* Nights */}
    <div className="min-w-0 border-b border-brand/10 px-3 py-3 sm:px-4 md:border-b-0 md:border-e">
      <Stepper
        label={t("booking.nightsLabel")}
        value={roomsCount}
        min={1}
        max={10}
        onChange={setRoomsCount}
      />
    </div>

    {/* Adults */}
    <div className="min-w-0 border-e border-brand/10 px-3 py-3 sm:px-4 md:border-e">
      <Stepper
        label={t("booking.adultsLabel")}
        value={adults}
        min={1}
        max={10}
        onChange={setAdults}
      />
    </div>

    {/* Booking action */}
    <div className="col-span-2 w-full h-full md:col-span-1 -1.5">
      <a
        href={heroBookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="luxe-btn luxe-shimmer group flex min-h-full w-full items-center justify-center gap-2 bg-gold px-5 text-[10px] uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-gold-hover md:min-w-[145px]"
      >
        <span>{t("booking.cta")}</span>
        <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
      </a>
    </div>
  </form>
</div>

        </section>

        {/* ============ ESSENCE / INTRO ============ */}
        <section className="w-full py-16 sm:py-24 md:py-28 lg:py-36 bg-surface rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
              <div className="lg:col-span-5 flex flex-col space-y-5 md:space-y-6">
                <Reveal variant="down">
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                      {t("essence.overline")}
                    </span>
                    <span className="w-12 h-px bg-gold" />
                  </div>
                </Reveal>
                <Reveal variant="up" delay={150}>
                  <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-[1.12] md:leading-[1.08] tracking-tight">
                    {t("essence.heading")}
                  </h2>
                </Reveal>
                <Reveal variant="up" delay={280}>
                  <p className="text-body-gray text-[15px] sm:text-base md:text-lg font-light leading-relaxed">
                    {t("essence.p1")}
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7 relative mt-6 lg:mt-0 pb-8 sm:pb-0">
                <Reveal variant="right" delay={200} y={40}>
                  <div className="luxe-img-zoom relative w-full aspect-[4/3] lg:aspect-[16/10] border border-light-border shadow-2xl bg-warm-beige rounded-none overflow-hidden group">
                    <Image
                      src={IMG.essenceMain}
                      alt="KaiSol Romance Resort beach, Sahl Hasheesh"
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </Reveal>
                <Reveal
                  variant="left"
                  delay={400}
                  className="absolute -bottom-8 sm:-bottom-10 start-0 sm:start-auto ltr:sm:-left-10 rtl:sm:-right-10 w-3/5 aspect-[4/3] border-4 border-surface shadow-2xl hidden sm:block rounded-none overflow-hidden bg-cream luxe-img-zoom group"
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
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                      {t("suites.overline")}
                    </span>
                    <span className="w-8 h-px bg-gold" />
                  </div>
                  <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                    {t("suites.heading")}
                  </h2>
                </div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxe-btn inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-cream text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-none w-fit shrink-0"
                >
                  <span>{t("suites.cta")}</span>
                </a>
              </div>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <RoomsSlider rooms={rooms} bookLabel={t("suites.cta")} prevLabel={t("suites.prev")} nextLabel={t("suites.next")} />
            </Reveal>
          </div>
        </section>

        {/* ============ DINING ============ */}
        <section className="w-full py-16 sm:py-24 md:py-28 lg:py-36 bg-surface rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="right">
              <div className="max-w-2xl mb-10 md:mb-16">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                    {t("gastronomy.overline")}
                  </span>
                  <span className="w-8 h-px bg-gold" />
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                  {t("gastronomy.heading")}
                </h2>
                <p className="text-[15px] sm:text-base md:text-lg text-body-gray font-light mt-4">
                  {t("gastronomy.sub")}
                </p>
              </div>
            </Reveal>
            <Reveal variant="right" delay={150}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
                {DINING_THUMBS.map((src, i) => (
                  <a
                    key={src}
                    href={`/${locale}/dining`}
                    className="hover-swap group relative aspect-[4/5] overflow-hidden bg-cream border border-light-border/80 hover:border-gold transition-colors duration-500 rounded-none"
                  >
                    <Image
                      src={src}
                      alt=""
                      aria-hidden
                      fill
                      sizes="(max-width: 640px) 45vw, 22vw"
                      className="hover-swap-main object-cover rounded-none"
                    />
                    <Image
                      src={DINING_ALT[i]}
                      alt=""
                      aria-hidden
                      fill
                      sizes="(max-width: 640px) 45vw, 22vw"
                      className="hover-swap-alt object-cover rounded-none"
                    />
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal variant="fade" delay={200}>
              <div className="mb-10 md:mb-14 flex justify-center">
                <a
                  href={`/${locale}/dining`}
                  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-dark-brown hover:text-gold transition-colors group"
                >
                  <span className="w-8 h-px bg-gold transition-all duration-300 group-hover:w-12" />
                  <span>{t("gastronomy.r2cta")}</span>
                  <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" />
                  <span className="w-8 h-px bg-gold transition-all duration-300 group-hover:w-12" />
                </a>
              </div>
            </Reveal>
            {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
              <Reveal variant="zoom" className="lg:col-span-7" delay={150}>
                <div className="bg-cream relative min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] h-full flex flex-col justify-start p-6 sm:p-8 md:p-14 group text-cream border border-gold/30 hover:border-gold/70 transition-colors duration-500 rounded-none overflow-hidden">
                  <Image
                    src={IMG.dining}
                    alt="KaiSol restaurant"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 rounded-none"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-brand/55 via-brand/15 to-transparent" />
                  <div className="relative z-10 space-y-3 max-w-lg">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-cream bg-brand/70 border border-gold/40 px-3 py-1 inline-block rounded-none">
                      {t("gastronomy.featureTag")}
                    </span>
                    <h3 className="font-heading uppercase text-2xl sm:text-4xl lg:text-5xl font-light leading-tight drop-shadow-[0_2px_4px_rgba(71,69,68,0.5)]">
                      {t("gastronomy.featureTitle")}
                    </h3>
                  </div>
                </div>
              </Reveal>
              <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
                {[
                  { ti: t("gastronomy.r1title"), c: t("gastronomy.r1cta"), href: "tel:+201273299991" },
                  { ti: t("gastronomy.r2title"), c: t("gastronomy.r2cta"), href: `/${locale}/dining` },
                ].map((r, i) => (
                  <Reveal key={r.ti} variant={i === 0 ? "left" : "right"} delay={300 + i * 200}>
                    <div className="luxe-card bg-cream p-6 sm:p-8 md:p-10 border border-light-border/80 hover:border-gold rounded-none group">
                      <h4 className="font-heading uppercase text-xl sm:text-2xl md:text-3xl text-dark-brown font-normal group-hover:text-gold transition-colors duration-300">
                        {r.ti}
                      </h4>
                      <a
                        href={r.href}
                        className="luxe-link-arrow inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-dark-brown hover:text-gold transition-colors pt-4 mt-4 border-t border-light-border/60 rounded-none"
                      >
                        <span>{r.c}</span>
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div> */}


<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
  <Reveal variant="zoom" className="lg:col-span-7" delay={150}>
    <div className="relative isolate min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] h-full overflow-hidden group">
      <Image
        src={IMG.dining}
        alt="KaiSol restaurant"
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover transition-transform duration-1000 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-brand/50 via-brand/10 to-brand/70" />

      <div className="relative z-10 flex h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] flex-col items-start p-6 sm:p-8 md:p-14 text-cream">
        <span className="inline-block border border-gold/50 bg-brand/30 px-3 py-1 text-[10px] uppercase tracking-[0.25em] backdrop-blur-sm">
          {t("gastronomy.featureTag")}
        </span>

        <h3 className="mt-auto max-w-lg font-heading text-2xl sm:text-4xl lg:text-5xl font-light uppercase leading-tight drop-shadow-md">
          {t("gastronomy.featureTitle")}
        </h3>

        <div className="mt-5 h-px w-14 bg-gold" />
      </div>
    </div>
  </Reveal>

  <div className="lg:col-span-5 grid grid-rows-2 gap-6 md:gap-8">
    {[
      {
        ti: t("gastronomy.r1title"),
        c: t("gastronomy.r1cta"),
        href: "tel:+201273299991",
      },
      {
        ti: t("gastronomy.r2title"),
        c: t("gastronomy.r2cta"),
        href: `/${locale}/dining`,
      },
    ].map((r, i) => (
      <Reveal
        key={r.ti}
        variant={i === 0 ? "left" : "right"}
        delay={300 + i * 200}
      >
        <div className="relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden border border-light-border/80 bg-cream p-6 sm:p-8 md:p-9 transition-colors duration-500 hover:border-gold group">
          <span className="font-heading text-5xl font-light text-gold/30">
            0{i + 1}
          </span>

          <div>
            <h4 className="font-heading text-xl sm:text-2xl md:text-3xl font-normal uppercase leading-tight text-dark-brown transition-colors duration-300 group-hover:text-gold">
              {r.ti}
            </h4>

            <a
              href={r.href}
              className="luxe-link-arrow mt-5 inline-flex items-center gap-2 border-t border-light-border/70 pt-4 text-xs uppercase tracking-[0.18em] text-dark-brown transition-colors hover:text-gold"
            >
              <span>{r.c}</span>
            </a>
          </div>

          <div className="absolute bottom-0 start-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
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
                  <ParallaxImage
                    src={IMG.honeymoon}
                    alt="Honeymoon terrace over the Red Sea"
                    strength={36}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="luxe-img-zoom relative w-full aspect-[4/5] max-h-[560px] lg:max-h-none shadow-2xl bg-surface border border-light-border/80 rounded-none"
                  />
                </Reveal>
              </div>
              <div className="lg:col-span-6 lg:ps-6 space-y-5 md:space-y-6 order-1 lg:order-2">
                <Reveal variant="down">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                        {t("honeymoon.overline")}
                      </span>
                      <span className="w-8 h-px bg-gold" />
                    </div>
                    <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                      {t("honeymoon.heading")}
                    </h2>
                  </div>
                </Reveal>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {HONEYMOON_TILES.map((src, i) => (
                    <Reveal key={src} variant={i === 0 ? "left" : "right"} delay={200 + i * 150}>
                      <div className="luxe-img-zoom relative aspect-[4/3] overflow-hidden bg-surface border border-light-border/80 rounded-none">
                        <Image
                          src={src}
                          alt=""
                          aria-hidden
                          fill
                          sizes="(max-width: 1024px) 45vw, 24vw"
                          className="object-cover rounded-none"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
                <Reveal variant="right" delay={250}>
                  <p className="text-[15px] sm:text-base md:text-lg text-body-gray font-light leading-relaxed">
                    {t("honeymoon.sub")}
                  </p>
                </Reveal>
                <Reveal variant="fade" delay={400}>
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <a
                      href={`/${locale}/about`}
                      className="luxe-btn bg-dark-brown hover:bg-gold text-cream text-xs uppercase tracking-[0.2em] px-9 py-4 transition-colors text-center border border-dark-brown hover:border-gold rounded-none"
                    >
                      {t("honeymoon.cta1")}
                    </a>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-[0.2em] text-dark-brown hover:text-gold transition-colors text-center py-2 border-b border-dark-brown hover:border-gold rounded-none w-fit mx-auto sm:mx-0"
                    >
                      {t("honeymoon.cta2")}
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============ GALLERY MARQUEE (image-only) ============ */}
        <section
          aria-hidden
          className="w-full bg-cream border-t border-b border-light-border/80 py-6 md:py-10 overflow-hidden rounded-none"
        >
          <div className="marquee-mask overflow-hidden mb-4 md:mb-6">
            <div className="flex w-max animate-marquee marquee-slow">
              {[0, 1].map((group) => (
                <div
                  key={group}
                  aria-hidden={group === 1}
                  className="flex shrink-0 gap-4 md:gap-6 pe-4 md:pe-6"
                >
                  {GALLERY.map((src) => (
                    <div
                      key={src}
                      className="relative w-[180px] sm:w-[240px] md:w-[300px] lg:w-[340px] aspect-[4/5] shrink-0 overflow-hidden bg-surface border border-light-border/60 rounded-none luxe-img-zoom"
                    >
                      <Image src={src} alt="" fill sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 340px" className="object-cover rounded-none" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="marquee-mask overflow-hidden">
            <div className="flex w-max animate-marquee marquee-slow marquee-row-reverse">
              {[0, 1].map((group) => (
                <div
                  key={group}
                  aria-hidden={group === 1}
                  className="flex shrink-0 gap-4 md:gap-6 pe-4 md:pe-6"
                >
                  {GALLERY_ALT.map((src) => (
                    <div
                      key={src}
                      className="relative w-[140px] sm:w-[200px] md:w-[260px] lg:w-[300px] aspect-[5/4] shrink-0 overflow-hidden bg-surface border border-light-border/60 rounded-none luxe-img-zoom"
                    >
                      <Image src={src} alt="" fill sizes="(max-width: 640px) 140px, (max-width: 1024px) 200px, 300px" className="object-cover rounded-none" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ REVIEWS ============ */}
        <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-surface rounded-none">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-12 text-center">
            <Reveal variant="up">
              <span className="font-heading text-6xl md:text-7xl text-gold/30 leading-none block mb-4 select-none font-light">
                &ldquo;
              </span>
              <p
                key={reviewIdx}
                className="font-heading text-xl sm:text-2xl md:text-3xl text-dark-brown italic font-light leading-relaxed mb-8 animate-fade-in"
              >
                {reviewIdx === 0 ? t("reviews.q1") : t("reviews.q2")}
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="w-8 h-px bg-gold" />
                <div>
                  <h5 className="text-sm font-medium text-dark-brown">
                    {reviewIdx === 0 ? t("reviews.q1name") : t("reviews.q2name")}
                  </h5>
                  <p className="text-xs text-body-gray">
                    {reviewIdx === 0 ? t("reviews.q1meta") : t("reviews.q2meta")}
                  </p>
                </div>
                <span className="w-8 h-px bg-gold" />
              </div>
              <div className="flex items-center justify-center gap-2 mt-8">
                {[0, 1].map((i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Review ${i + 1}`}
                    onClick={() => setReviewIdx(i)}
                    className={`h-1.5 rounded-none transition-all duration-500 cursor-pointer ${
                      i === reviewIdx ? "w-8 bg-gold" : "w-2 bg-dark-brown/20 hover:bg-gold"
                    }`}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
        {/* ============ CLIENTS / AWARDS MARQUEE ============ */}
        <section className="w-full py-14 sm:py-18 md:py-24 bg-cream border-t border-b border-light-border/80 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 mb-8 md:mb-12">
            <Reveal variant="down">
              <div className="text-center max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-8 h-px bg-gold" />
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                    {t("reviews.a1")}
                  </span>
                  <span className="w-8 h-px bg-gold" />
                </div>
                <h2 className="font-heading uppercase text-2xl sm:text-3xl md:text-4xl font-light text-dark-brown leading-tight">
                  {t("hero.titleB")}
                </h2>
              </div>
            </Reveal>
          </div>
          <div className="marquee-mask overflow-hidden">
            <div
              className="flex w-max animate-marquee"
              style={{ animationDuration: "12s" }}
            >
              {[0, 1].map((group) => (
                <div
                  key={group}
                  aria-hidden={group === 1}
                  className="flex shrink-0 gap-6 md:gap-10 pe-6 md:pe-10 items-center"
                >
                  {Array.from({ length: 10 }).map((_, i) => {
                    const src = CLIENT_LOGOS[i % CLIENT_LOGOS.length];
                    return (
                      <div
                        key={`${group}-${i}`}
                        className="relative w-[120px] sm:w-[150px] md:w-[180px] h-[70px] sm:h-[85px] md:h-[100px] shrink-0 flex items-center justify-center bg-cream border border-light-border/60 rounded-none p-4 md:p-6 hover:border-gold transition-colors duration-500 grayscale hover:grayscale-0"
                      >
                        <Image
                          src={src}
                          alt="KaiSol Romance Resort"
                          fill
                          sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
                          className="object-contain p-3 md:p-4 rounded-none"
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>
        <Partners />
      </main>
      <Footer />
    </>
  );
}
