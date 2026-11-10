"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Header from "./components/Header";
import { ROOM_SLUGS } from "./accommodation/roomSlugs";
import { RESTAURANT_COUNT } from "./dining/diningSlugs";
import { VenueSlider, VenueHeader } from "./components/VenueSlider";
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
  honeymoon: "/site-images/honeymall.png",
};
const TESTIMONIAL_IMAGES = [
  "/gallary/photo-02.png",
  IMG.essenceMain,
  IMG.essenceInset,
];

/* Client / award imagery for the marquee band */
const CLIENT_LOGOS = [
  "/Award.jpg",
  "/Award2.jpg",
];

const BOOKING_URL = "https://bookings.kaisolhotels.com/105902";

type Room = {
  name: string;
  desc: string;
  tag: string;
  meta: string;
  img: string;
  amenities: string[];
  slug: string;
};

type Venue = {
  name: string;
  kind: string;
  desc: string;
  serving: string;
  type: string;
  dress: string;
  indoor: string;
  outdoor: string;
};

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
      <span className="mb-1.5 block text-sm uppercase tracking-[0.2em] text-gold">
        {label}
      </span>
      <div className="flex items-center gap-2 md:gap-3">
        <button
          type="button"
          aria-label={`decrease ${label}`}
          onClick={() => onChange(Math.max(min, value - 1))}
          className="w-6 h-6 md:w-6 md:h-6 shrink-0 flex items-center justify-center border border-gold bg-cream text-gold hover:bg-gold hover:text-cream active:scale-95 transition-all duration-300 rounded-none cursor-pointer text-sm leading-none"
        >
          −
        </button>
        <span className="min-w-[2ch] text-center text-sm tabular-nums text-brand">
          {value}
        </span>
        <button
          type="button"
          aria-label={`increase ${label}`}
          onClick={() => onChange(Math.min(max, value + 1))}
          className="w-6 h-6 md:w-6 md:h-6 shrink-0 flex items-center justify-center border border-gold bg-cream text-gold hover:bg-gold hover:text-cream active:scale-95 transition-all duration-300 rounded-none cursor-pointer text-sm leading-none"
        >
          +
        </button>
      </div>
    </div>
  );
}



function RoomsCarousel({ rooms }: { rooms: Room[]; }) {
  const locale = useLocale();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState<1 | -1>(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translatePx, setTranslatePx] = useState(0);

  const advance = useCallback((dir: 1 | -1) => {
    if (sliding || rooms.length < 2) return;
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.children[0] as HTMLElement;
    const gap = parseInt(getComputedStyle(track).gap || "16", 10);
    const px = (firstCard?.offsetWidth || 0) + gap;
    setSlideDir(dir);
    setTranslatePx(dir > 0 ? -px : px);
    setSliding(true);
    setTimeout(() => {
      setIdx((i) => (i + dir + rooms.length) % rooms.length);
      setSliding(false);
      setTranslatePx(0);
    }, 700);
  }, [sliding, rooms.length]);

  useEffect(() => {
    if (paused || rooms.length < 2) return;
    const id = setInterval(() => advance(1), 4500);
    return () => clearInterval(id);
  }, [paused, rooms.length, advance]);

  const cards =
    slideDir > 0
      ? [
          rooms[idx % rooms.length],
          rooms[(idx + 1) % rooms.length],
          rooms[(idx + 2) % rooms.length],
          rooms[(idx + 3) % rooms.length],
        ]
      : [
          rooms[(idx - 1 + rooms.length) % rooms.length],
          rooms[idx % rooms.length],
          rooms[(idx + 1) % rooms.length],
          rooms[(idx + 2) % rooms.length],
        ];

  const widthClass = (pos: number, isSliding: boolean, dir: 1 | -1) => {
    if (dir > 0) {
      if (pos === 0) return isSliding ? "w-0 opacity-0" : "w-[52%] opacity-100";
      if (pos === 1) return isSliding ? "w-[52%] opacity-100" : "w-[28%] opacity-60";
      if (pos === 2) return isSliding ? "w-[28%] opacity-60" : "w-[20%] opacity-30";
      if (pos === 3) return isSliding ? "w-[20%] opacity-30" : "w-0 opacity-0";
    } else {
      if (pos === 0) return isSliding ? "w-[52%] opacity-100" : "w-0 opacity-0";
      if (pos === 1) return isSliding ? "w-[28%] opacity-60" : "w-[52%] opacity-100";
      if (pos === 2) return isSliding ? "w-[20%] opacity-30" : "w-[28%] opacity-60";
      if (pos === 3) return isSliding ? "w-0 opacity-0" : "w-[20%] opacity-30";
    }
    return "w-0 opacity-0";
  };

  const zClass = (pos: number) => {
    if (pos === 0) return "z-30";
    if (pos === 1) return "z-20";
    if (pos === 2) return "z-10";
    return "z-0";
  };

  const smallPos = slideDir > 0 ? 2 : 3;

  return (
    <>
      {/* Mobile / tablet: single-card slider */}
      <div className="md:hidden">
        <div className="relative w-full h-[420px] overflow-hidden">
          <div className="relative h-full w-full bg-cream border border-gold rounded-none overflow-hidden group">
            <Image
              src={rooms[idx % rooms.length].img}
              alt={rooms[idx % rooms.length].name}
              fill
              sizes="100vw"
              className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000 animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand/30 via-brand/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
              <h3 className="font-heading uppercase text-lg sm:text-2xl font-normal leading-tight text-cream mb-4">
                {rooms[idx % rooms.length].name}
              </h3>
              <a
                href={`/${locale}/accommodation/${rooms[idx % rooms.length].slug}`}
                className="luxe-btn inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-cream text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-none text-center"
              >
                Show Details
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-5">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => advance(-1)}
            className="w-10 h-10 shrink-0 flex items-center justify-center bg-cream border border-gold text-brand hover:bg-gold hover:border-gold hover:text-cream active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
          >
            <svg className="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => advance(1)}
            className="w-10 h-10 shrink-0 flex items-center justify-center bg-cream border border-gold text-brand hover:bg-gold hover:border-gold hover:text-cream active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
          >
            <svg className="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop: directional slide carousel with variable widths */}
      <div
        className="hidden md:block relative w-full h-[500px] lg:h-[620px] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(${translatePx}px)` }}
        >
          {cards.map((r, i) => {
            const wc = widthClass(i, sliding, slideDir);
            const zc = zClass(i);
            return (
              <div
                key={`${r.img}-${i}`}
                className={`flex-shrink-0 h-full relative transition-all duration-700 ease-out ${wc} ${zc} ${i === smallPos ? "cursor-pointer" : ""}`}
                onClick={i === smallPos ? () => advance(1) : undefined}
              >
                <div className="relative h-full w-full bg-cream border border-gold rounded-none overflow-hidden group mx-2">
                  <Image
                    src={r.img}
                    alt={r.name}
                    fill
                    sizes="(max-width: 1024px) 33vw, 33vw"
                    className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-brand/30 via-brand/30 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">
                    <h3 className="font-heading uppercase text-lg sm:text-2xl md:text-3xl font-normal leading-tight text-cream mb-4">
                      {r.name}
                    </h3>
                    <a
                      href={`/${locale}/accommodation/${r.slug}`}
                      className="luxe-btn inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-cream text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-none text-center"
                    >
                      Show Details
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-4 mt-5 md:mt-6">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => advance(-1)}
            className="w-10 h-10 md:w-11 md:h-11 shrink-0 flex items-center justify-center bg-cream border border-gold text-brand hover:bg-gold hover:border-gold hover:text-cream active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
          >
            <svg className="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => advance(1)}
            className="w-10 h-10 md:w-11 md:h-11 shrink-0 flex items-center justify-center bg-cream border border-gold text-brand hover:bg-gold hover:border-gold hover:text-cream active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
          >
            <svg className="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default function HomePage() {
  const t = useTranslations("Home.luxe");
  const diningT = useTranslations("Dining");
  const locale = useLocale();
  const venues = diningT.raw("venues") as Venue[];
  const restaurants = venues.slice(0, RESTAURANT_COUNT);
  const bars = venues.slice(RESTAURANT_COUNT);
  const heroRef = useRef<HTMLElement>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
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
    checkin || tomorrowISO,
  )}&Rooms=${roomsCount}#/guestsandrooms`;

  const rooms = (t.raw("suites.rooms") as Room[]).map((r, i) => ({ ...r, slug: ROOM_SLUGS[i] }));

  useEffect(() => {
    const id = setInterval(
      () => setTestimonialIdx((i) => (i + 1) % TESTIMONIAL_IMAGES.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

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
      <main className="w-full bg-cream overflow-x-clip">
        {/* ============ CINEMATIC HERO ============ */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden bg-cream rounded-none hero-glow"
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

          <div className="relative z-10 flex justify-center items-start pt-36 flex-1">
            <Image
              src="/LogoWide.svg"
              alt="KaiSol Hotels & Resorts"
              width={800}
              height={227}
              className="h-36 md:h-32 w-auto object-contain brightness-0 invert"
            />
          </div>

          {/* Compact floating booking strip */}
          <div
            id="booking-console"
            className="anim-hero-rise relative z-20 mx-auto w-full max-w-[900px] px-4 pb-6 sm:px-6 md:pb-8"
            style={{ animationDelay: "450ms" }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_auto] items-center border border-gold bg-cream"
            >
              {/* Check-in */}
              <div className="min-w-0 border-b border-gold px-3 py-3 sm:border-b-0 sm:border-e sm:px-4">
                <label
                  htmlFor="checkin-date"
                  className="mb-1 block text-sm uppercase tracking-[0.16em] text-gold"
                >
                  Arrival & Departure
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
              <div className="min-w-0 border-b border-gold px-3 py-3 sm:border-b-0 sm:border-e sm:px-4">
                <Stepper
                  label={t("booking.nightsLabel")}
                  value={roomsCount}
                  min={1}
                  max={10}
                  onChange={setRoomsCount}
                />
              </div>

              {/* Adults */}
              <div className="min-w-0 border-b border-gold px-3 py-3 sm:border-b-0 sm:border-e sm:px-4">
                <Stepper
                  label={t("booking.adultsLabel")}
                  value={adults}
                  min={1}
                  max={10}
                  onChange={setAdults}
                />
              </div>

              {/* Booking action */}
              <div className="w-full h-full sm:col-span-2 md:col-span-1">
                <a
                  href={heroBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxe-btn luxe-shimmer group flex min-h-full w-full items-center justify-center gap-2 bg-gold px-5 py-3 text-sm uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-gold-hover md:min-w-[145px]"
                >
                  <span>{t("booking.cta")}</span>
                </a>
              </div>
            </form>
          </div>
        </section>

        {/* ============ ESSENCE / INTRO ============ */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gold/15 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
              <div className="lg:col-span-5 flex flex-col space-y-5 md:space-y-6">
                <Reveal variant="down">
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                      {t("essence.overline")}
                    </span>
                  </div>
                </Reveal>
                <Reveal variant="up" delay={150}>
                  <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-[1.12] md:leading-[1.08] tracking-tight">
                    {t("essence.heading")}
                  </h2>
                </Reveal>
                <Reveal variant="up" delay={280}>
                  <p className="text-brand text-[15px] sm:text-base md:text-lg font-light leading-relaxed">
                    {t("essence.p1")}
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7 relative mt-6 lg:mt-0">
                <Reveal variant="right" delay={200} y={40}>
                  <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] bg-cream rounded-none overflow-hidden">
                    <div
                      className="flex flex-nowrap h-full w-[300%] transition-transform duration-700 ease-out"
                      style={{
                        transform: `translateX(${locale === "ar" ? testimonialIdx * (100 / 3) : -(testimonialIdx * (100 / 3))}%)`,
                      }}
                    >
                      {TESTIMONIAL_IMAGES.map((src) => (
                        <div
                          key={src}
                          className="flex-shrink-0 h-full w-1/3 relative"
                        >
                          <Image
                            src={src}
                            alt="KaiSol Romance Resort testimonial"
                            fill
                            sizes="(max-width: 1024px) 100vw, 58vw"
                            className="object-cover rounded-none"
                          />
                        </div>
                      ))}
                    </div>
                     {/* Brown (gold) navigation balls */}
                     <div className="absolute bottom-4 end-4 flex gap-1.5 z-10">
                       {TESTIMONIAL_IMAGES.map((_, i) => (
                         <button
                           key={i}
                           type="button"
                           aria-label={`Testimonial ${i + 1}`}
                           onClick={() => setTestimonialIdx(i)}
                           className={`!h-2 !w-2 !min-w-0 !rounded-full shrink-0
       appearance-none border-0 p-0
       transition-all duration-300 cursor-pointer ${
         i === testimonialIdx ? "bg-gold scale-125" : "bg-gold/50 hover:bg-gold"
       }`}
                         />
                       ))}
                     </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============ ACCOMMODATIONS SLIDER ============ */}
        <section className="w-full py-16 sm:py-24 md:py-28 lg:py-36 bg-cream rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="left">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-5 md:gap-6">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                      {t("suites.overline")}
                    </span>
                  </div>
                  <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-tight">
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
              <RoomsCarousel rooms={rooms} />
            </Reveal>
          </div>
        </section>

        {/* ============ DINING ============ */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gold/15 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            {/* Section header */}
            <Reveal variant="right">
              <div className="max-w-2xl mb-8 md:mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                    {diningT("hero.eyebrow")}
                  </span>
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-tight">
                  {diningT("hero.titleA")}{" "}
                  <span className="font-heading italic font-light text-gold">
                    {diningT("hero.titleB")}
                  </span>
                </h2>
                <p className="text-[15px] sm:text-base md:text-lg text-brand font-light mt-4">
                  {diningT("hero.subtitle")}
                </p>
              </div>
            </Reveal>

            {/* Restaurants */}
            <Reveal variant="right">
              <VenueHeader label={diningT("restaurants.overline")} />
            </Reveal>
            <VenueSlider venues={restaurants} startIndex={0} />

            {/* Bars */}
            <Reveal variant="right" className="mt-6">
              <VenueHeader label={diningT("bars.overline")} />
            </Reveal>
            <VenueSlider venues={bars} startIndex={RESTAURANT_COUNT} />

            {/* View all dining CTA */}
            <Reveal variant="fade" delay={200}>
              <div className="mt-10 md:mt-14 flex justify-center">
                <a
                  href={`/${locale}/dining`}
                  className="luxe-btn inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-cream text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-none"
                >
                  <span>{diningT("list.details")}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ HONEYMOON HAVEN ============ */}
        <section className="w-full py-16 sm:py-24 md:py-28 lg:py-36 bg-cream rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 relative order-2 lg:order-1">
                <Reveal variant="left" delay={150} y={40}>
                  <ParallaxImage
                    src={IMG.honeymoon}
                    alt="KaiSol honeymoon experience"
                    strength={36}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="luxe-img-zoom relative w-full aspect-[4/5] max-h-[560px] lg:max-h-none bg-cream border border-gold rounded-none"
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
                      </div>
                    <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-tight">
                      {t("honeymoon.heading")}
                    </h2>
                  </div>
                </Reveal>
                <Reveal variant="right" delay={250}>
                  <p className="text-[15px] sm:text-base md:text-lg text-brand font-light leading-relaxed">
                    {t("honeymoon.sub")}
                  </p>
                </Reveal>
                <Reveal variant="fade" delay={400}>
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <a
                      href={`/${locale}/about`}
                      className="luxe-btn bg-brand hover:bg-gold text-cream text-xs uppercase tracking-[0.2em] px-9 py-4 transition-colors text-center border border-brand hover:border-gold rounded-none"
                    >
                      {t("honeymoon.cta1")}
                    </a>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-[0.2em] text-brand hover:text-gold transition-colors text-center py-2 border-b border-brand hover:border-gold rounded-none w-fit mx-auto sm:mx-0"
                    >
                      {t("honeymoon.cta2")}
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>



        {/* ============ WORLD LUXURY HOTEL AWARDS ============ */}
        <section className="w-full py-14 sm:py-18 md:py-24 bg-gold/15 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="down">
              <h2 className="text-center font-heading uppercase text-2xl sm:text-3xl md:text-4xl font-light text-brand leading-tight mb-8 md:mb-12">
                {t("reviews.a1")}
              </h2>
            </Reveal>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {CLIENT_LOGOS.map((src) => (
                <Reveal key={src} variant="fade">
                  <div className="relative w-[320px] sm:w-[300px] md:w-[300px] aspect-[3/2] shrink-0 rounded-none p-4 md:p-6">
                    <Image
                      src={src}
                      alt="KaiSol Romance Resort award"
                      fill
                      sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 220px"
                      className="object-contain p-2 md:p-3 rounded-none"
                    />
                  </div>
                </Reveal>
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
