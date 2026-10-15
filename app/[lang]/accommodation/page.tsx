"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Reveal from "../components/Reveal";
import {
  BOOKING_URL,
  ROOM_SLUGS,
  LIST_ORDER,
  toDDMMYYYY,
  toISODate,
} from "./roomSlugs";

type Room = {
  name: string;
  desc: string;
  tag: string;
  meta: string;
  img: string;
  bed: string;
  occupancy: string;
  amenities: string[];
};

export default function AccommodationPage() {
  const t = useTranslations("Accommodation");
  const tRooms = useTranslations("Home.luxe.suites");
  const locale = useLocale();
  const rooms = tRooms.raw("rooms") as Room[];

  const todayISO = toISODate(new Date());
  const plusDays = (n: number) => {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return toISODate(d);
  };
  const [checkin, setCheckin] = useState(plusDays(1));
  const [checkout, setCheckout] = useState(plusDays(2));
  const [adults, setAdults] = useState(1);
  const [roomIdx, setRoomIdx] = useState(0);

  const formUrl = `${BOOKING_URL}?Adults=${adults}&DateIn=${toDDMMYYYY(
    checkin || plusDays(1)
  )}&Rooms=1#/guestsandrooms`;

  const policies = [
    { label: t("policies.checkin"), icon: "M8 2v3M16 2v3M3 8h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" },
    { label: t("policies.checkout"), icon: "M8 2v3M16 2v3M3 8h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" },
    { label: t("policies.pets"), icon: "M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11zM9 9l6 6M15 9l-6 6" },
    { label: t("policies.wifi"), icon: "M2 9c6-6 14-6 20 0M5 12.5c4-4 10-4 14 0M8.5 16c2-2 5-2 7 0M12 19.5h.01" },
  ];

  return (
    <>
      <Header />
      <main className="w-full bg-surface overflow-x-clip">
        {/* ============ HERO ============ */}
        <section className="relative w-full min-h-[62vh] md:min-h-[68vh] flex flex-col justify-end overflow-hidden bg-dark-bar rounded-none">
          <div className="absolute inset-0">
            <Image
              src="/room1/image.png"
              alt="Signature Suite"
              fill
              priority
              sizes="100vw"
              className="object-cover anim-hero-bg"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bar via-dark-bar/55 to-dark-bar/70 pointer-events-none" />
          <div className="relative z-10 max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 w-full text-center pb-12 md:pb-16 pt-32">
            <p
              className="anim-hero-rise text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.4em] text-sand-gold font-medium mb-4"
              style={{ animationDelay: "100ms" }}
            >
              {t("hero.eyebrow")}
            </p>
            <h1
              className="anim-hero-rise font-heading uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.02] drop-shadow-2xl"
              style={{ animationDelay: "200ms" }}
            >
              {t("hero.titleA")}{" "}
              <span className="font-heading italic font-light text-sand-gold">
                {t("hero.titleB")}
              </span>
            </h1>
            <p
              className="anim-hero-rise text-sm sm:text-base md:text-lg text-cream/85 max-w-2xl mx-auto font-light mt-5 leading-relaxed"
              style={{ animationDelay: "350ms" }}
            >
              {t("hero.subtitle")}
            </p>
            <div className="anim-hero-rise mt-8" style={{ animationDelay: "500ms" }}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="luxe-btn luxe-shimmer inline-flex items-center justify-center gap-3 bg-olive hover:bg-olive-hover text-white text-xs uppercase tracking-[0.25em] px-10 py-4 rounded-none"
              >
                <span>{t("hero.cta")}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============ BOOKING FORM BAR ============ */}
        <section className="w-full bg-dark-bar border-b border-sand-gold/25 rounded-none">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 py-8 md:py-10">
            <Reveal variant="up">
              <form
                className="grid grid-cols-2 md:grid-cols-12 gap-px bg-white/15 border border-white/15 rounded-none overflow-hidden"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="col-span-1 md:col-span-3 bg-black/40 p-4 md:p-5 hover:bg-black/60 transition-colors cursor-pointer">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-sand-gold/90 block mb-2">
                    {t("form.checkin")}
                  </span>
                  <input
                    type="date"
                    value={checkin}
                    min={todayISO}
                    onChange={(e) => setCheckin(e.target.value)}
                    className="w-full bg-transparent font-heading text-lg text-cream focus:outline-none rounded-none [color-scheme:dark] cursor-pointer"
                  />
                </label>
                <label className="col-span-1 md:col-span-3 bg-black/40 p-4 md:p-5 hover:bg-black/60 transition-colors cursor-pointer md:border-s md:border-white/15">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-sand-gold/90 block mb-2">
                    {t("form.checkout")}
                  </span>
                  <input
                    type="date"
                    value={checkout}
                    min={checkin || todayISO}
                    onChange={(e) => setCheckout(e.target.value)}
                    className="w-full bg-transparent font-heading text-lg text-cream focus:outline-none rounded-none [color-scheme:dark] cursor-pointer"
                  />
                </label>
                <div className="col-span-1 md:col-span-2 bg-black/40 p-4 md:p-5 md:border-s md:border-white/15">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-sand-gold/90 block mb-2">
                    {t("form.adults")}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="fewer adults"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-7 h-7 flex items-center justify-center border border-white/25 text-cream hover:bg-sand-gold hover:text-dark-bar hover:border-sand-gold active:scale-95 transition-all rounded-none cursor-pointer"
                    >
                      −
                    </button>
                    <span className="font-heading text-2xl text-cream tabular-nums">{adults}</span>
                    <button
                      type="button"
                      aria-label="more adults"
                      onClick={() => setAdults(Math.min(10, adults + 1))}
                      className="w-7 h-7 flex items-center justify-center border border-white/25 text-cream hover:bg-sand-gold hover:text-dark-bar hover:border-sand-gold active:scale-95 transition-all rounded-none cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 bg-black/40 p-4 md:p-5 md:border-s md:border-white/15">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-sand-gold/90 block mb-2">
                    {t("form.roomType")}
                  </span>
                  <select
                    value={roomIdx}
                    onChange={(e) => setRoomIdx(Number(e.target.value))}
                    className="w-full bg-transparent font-heading text-base md:text-lg text-cream focus:outline-none cursor-pointer truncate rounded-none"
                  >
                    {rooms.map((r, i) => (
                      <option key={ROOM_SLUGS[i]} value={i} className="bg-dark-bar text-cream">
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2 md:col-span-2 bg-olive flex">
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxe-btn w-full bg-olive hover:bg-olive-hover text-white text-[11px] uppercase tracking-[0.2em] p-4 flex items-center justify-center rounded-none"
                  >
                    {t("form.cta")}
                  </a>
                </div>
              </form>
            </Reveal>
          </div>
        </section>

        {/* ============ INTRO ============ */}
        <section className="w-full py-14 sm:py-18 md:py-24 bg-surface rounded-none">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
            <Reveal variant="down">
              <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                {t("intro.heading")}
              </h2>
            </Reveal>
            <Reveal variant="up" delay={150}>
              <p className="text-sm sm:text-base md:text-lg text-body-gray font-light mt-5 leading-relaxed">
                {t("intro.text")}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ ROOM LIST ============ */}
        <section className="w-full pb-16 sm:pb-20 md:pb-28 bg-surface rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 flex flex-col gap-10 md:gap-14">
            {LIST_ORDER.map((ri, n) => {
              const r = rooms[ri];
              const flip = n % 2 === 1;
              return (
                <Reveal
                  key={ROOM_SLUGS[ri]}
                  variant={flip ? "right" : "left"}
                  delay={100}
                >
                  <article className="luxe-card grid grid-cols-1 lg:grid-cols-2 bg-white border border-light-border/80 hover:border-sand-gold rounded-none overflow-hidden">
                    <div
                      className={`relative h-[260px] sm:h-[340px] lg:h-[440px] bg-warm-beige overflow-hidden group ${flip ? "lg:order-2" : ""}`}
                    >
                      <Image
                        src={r.img}
                        alt={r.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <span className="absolute top-4 start-4 bg-dark-bar/90 backdrop-blur-sm text-cream px-3 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-medium border border-white/20 rounded-none">
                        {r.tag}
                      </span>
                    </div>
                    <div className={`p-6 sm:p-8 md:p-10 flex flex-col justify-center ${flip ? "lg:order-1" : ""}`}>
                      <p className="text-[11px] uppercase tracking-[0.25em] text-olive font-semibold mb-3">
                        {r.meta}
                      </p>
                      <h3 className="font-heading uppercase text-2xl sm:text-3xl md:text-4xl font-normal text-dark-brown mb-4 leading-tight">
                        {r.name}
                      </h3>
                      <p className="text-sm md:text-[15px] text-body-gray leading-relaxed mb-5 font-light">
                        {r.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-7">
                        {r.amenities.slice(0, 4).map((a) => (
                          <span
                            key={a}
                            className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-dark-brown/80 border border-light-border px-3 py-1.5"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <a
                          href={`/${locale}/accommodation/${ROOM_SLUGS[ri]}`}
                          className="luxe-btn inline-flex items-center justify-center gap-2 bg-dark-brown hover:bg-olive text-white text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-none text-center"
                        >
                          {t("list.details")}
                        </a>
                        <a
                          href={BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs uppercase tracking-[0.18em] text-olive hover:text-dark-brown transition-colors rounded-none"
                        >
                          {t("list.book")}
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ============ POLICIES ============ */}
        <section className="w-full py-14 md:py-20 bg-cream border-y border-light-border/80 rounded-none">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="down">
              <h2 className="font-heading uppercase text-2xl sm:text-3xl md:text-4xl font-light text-dark-brown text-center mb-8 md:mb-12">
                {t("policies.heading")}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {policies.map((p, i) => (
                <Reveal key={p.label} variant="up" delay={i * 120}>
                  <div className="luxe-card bg-white border border-light-border/80 hover:border-sand-gold p-5 md:p-6 flex items-center gap-4 rounded-none h-full">
                    <span className="w-11 h-11 shrink-0 flex items-center justify-center bg-cream text-olive">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={p.icon} />
                      </svg>
                    </span>
                    <p className="text-xs md:text-sm text-dark-brown font-medium leading-snug">
                      {p.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal variant="fade" delay={200}>
              <p className="text-center text-xs md:text-sm text-body-gray font-light mt-8">
                {t("policies.note")}
              </p>
            </Reveal>
          </div>
        </section>

        <Partners />
      </main>
      <Footer />
    </>
  );
}
