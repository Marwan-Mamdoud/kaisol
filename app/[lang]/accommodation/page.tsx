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
      <main className="w-full bg-cream overflow-x-clip">
        {/* ============ HERO ============ */}
        <section className="relative w-full min-h-[62vh] md:min-h-[68vh] flex flex-col justify-end overflow-hidden bg-cream rounded-none hero-glow">
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
          <div className="relative z-10 max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 w-full text-center pb-12 md:pb-16 pt-32">
            <p
              className="anim-hero-rise text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.4em] text-gold font-medium mb-4"
              style={{ animationDelay: "100ms" }}
            >
              {t("hero.eyebrow")}
            </p>
            <h1
              className="anim-hero-rise font-heading uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-cream leading-[1.02]"
              style={{ animationDelay: "200ms" }}
            >
              {t("hero.titleA")}{" "}
              <span className="font-heading italic font-light text-gold">
                {t("hero.titleB")}
              </span>
            </h1>
            <p
              className="anim-hero-rise text-sm sm:text-base md:text-lg text-cream max-w-2xl mx-auto font-light mt-5 leading-relaxed"
              style={{ animationDelay: "350ms" }}
            >
              {t("hero.subtitle")}
            </p>
            <div className="anim-hero-rise mt-8" style={{ animationDelay: "500ms" }}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="luxe-btn luxe-shimmer inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-hover text-cream text-xs uppercase tracking-[0.25em] px-10 py-4 rounded-none"
              >
                <span>{t("hero.cta")}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============ BOOKING FORM BAR ============ */}
        <section className="w-full bg-cream border-b border-gold rounded-none">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 py-8 md:py-10">
            <Reveal variant="up">
              <form
                className="grid grid-cols-2 md:grid-cols-12 gap-px bg-cream border border-gold rounded-none overflow-hidden"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="col-span-1 md:col-span-3 bg-gold p-4 md:p-5 hover:bg-brand transition-colors cursor-pointer">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold block mb-2">
                    {t("form.checkin")}
                  </span>
                  <input
                    type="date"
                    value={checkin}
                    min={todayISO}
                    onChange={(e) => setCheckin(e.target.value)}
                    className="w-full bg-transparent font-heading text-lg text-brand focus:outline-none rounded-none [color-scheme:dark] cursor-pointer"
                  />
                </label>
                <label className="col-span-1 md:col-span-3 bg-gold p-4 md:p-5 hover:bg-brand transition-colors cursor-pointer md:border-s md:border-gold">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold block mb-2">
                    {t("form.checkout")}
                  </span>
                  <input
                    type="date"
                    value={checkout}
                    min={checkin || todayISO}
                    onChange={(e) => setCheckout(e.target.value)}
                    className="w-full bg-transparent font-heading text-lg text-brand focus:outline-none rounded-none [color-scheme:dark] cursor-pointer"
                  />
                </label>
                <div className="col-span-1 md:col-span-2 bg-gold p-4 md:p-5 md:border-s md:border-gold">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold block mb-2">
                    {t("form.adults")}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="fewer adults"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-7 h-7 flex items-center justify-center border border-gold text-brand hover:bg-gold hover:text-cream hover:border-gold active:scale-95 transition-all rounded-none cursor-pointer"
                    >
                      −
                    </button>
                    <span className="font-heading text-2xl text-brand tabular-nums">{adults}</span>
                    <button
                      type="button"
                      aria-label="more adults"
                      onClick={() => setAdults(Math.min(10, adults + 1))}
                      className="w-7 h-7 flex items-center justify-center border border-gold text-brand hover:bg-gold hover:text-cream hover:border-gold active:scale-95 transition-all rounded-none cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 bg-gold p-4 md:p-5 md:border-s md:border-gold">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold block mb-2">
                    {t("form.roomType")}
                  </span>
                  <select
                    value={roomIdx}
                    onChange={(e) => setRoomIdx(Number(e.target.value))}
                    className="w-full bg-transparent font-heading text-base md:text-lg text-brand focus:outline-none cursor-pointer truncate rounded-none"
                  >
                    {rooms.map((r, i) => (
                      <option key={ROOM_SLUGS[i]} value={i} className="bg-cream text-brand">
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2 md:col-span-2 bg-gold flex">
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxe-btn w-full bg-gold hover:bg-gold-hover text-cream text-[11px] uppercase tracking-[0.2em] p-4 flex items-center justify-center rounded-none"
                  >
                    {t("form.cta")}
                  </a>
                </div>
              </form>
            </Reveal>
          </div>
        </section>

        {/* ============ INTRO ============ */}
        <section className="w-full py-14 sm:py-18 md:py-24 bg-cream rounded-none">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
            <Reveal variant="down">
              <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-tight">
                {t("intro.heading")}
              </h2>
            </Reveal>
            <Reveal variant="up" delay={150}>
              <p className="text-sm sm:text-base md:text-lg text-brand font-light mt-5 leading-relaxed">
                {t("intro.text")}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ ROOM LIST ============ */}
        <section className="w-full pb-16 sm:pb-20 md:pb-28 bg-cream rounded-none overflow-hidden">
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
                  <article className="luxe-card grid grid-cols-1 lg:grid-cols-5 bg-cream rounded-none overflow-hidden">
                    <div
                      className={`relative h-[280px] sm:h-[360px] lg:h-[460px] bg-cream overflow-hidden group lg:col-span-3 ${flip ? "lg:order-2" : ""}`}
                    >
                      <Image
                        src={r.img}
                        alt={r.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <span className="absolute top-4 start-4 bg-brand backdrop-blur-sm text-cream px-3 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-medium border border-gold rounded-none">
                        {r.tag}
                      </span>
                    </div>
                    <div className={`p-6 sm:p-8 md:p-10 flex flex-col justify-center lg:col-span-2 ${flip ? "lg:order-1" : ""}`}>
                      <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold mb-3">
                        {r.meta}
                      </p>
                      <h3 className="font-heading uppercase text-2xl sm:text-3xl md:text-4xl font-normal text-brand mb-4 leading-tight">
                        {r.name}
                      </h3>
                      <p className="text-sm md:text-[15px] text-brand leading-relaxed mb-5 font-light">
                        {r.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-7">
                        {r.amenities.slice(0, 4).map((a) => (
                          <span
                            key={a}
                            className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-brand border border-gold px-3 py-1.5"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <a
                          href={`/${locale}/accommodation/${ROOM_SLUGS[ri]}`}
                          className="luxe-btn inline-flex items-center justify-center gap-2 bg-brand hover:bg-gold text-cream text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-none text-center"
                        >
                          {t("list.details")}
                        </a>
                        <a
                          href={BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs uppercase tracking-[0.18em] text-gold hover:text-brand transition-colors rounded-none"
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
        <section className="w-full py-14 md:py-20 bg-cream border-y border-gold rounded-none">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="down">
              <h2 className="font-heading uppercase text-2xl sm:text-3xl md:text-4xl font-light text-brand text-center mb-8 md:mb-12">
                {t("policies.heading")}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {policies.map((p, i) => (
                <Reveal key={p.label} variant="up" delay={i * 120}>
                  <div className="luxe-card bg-cream border border-gold hover:border-gold p-5 md:p-6 flex items-center gap-4 rounded-none h-full">
                    <span className="w-11 h-11 shrink-0 flex items-center justify-center bg-cream text-gold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={p.icon} />
                      </svg>
                    </span>
                    <p className="text-xs md:text-sm text-brand font-medium leading-snug">
                      {p.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal variant="fade" delay={200}>
              <p className="text-center text-xs md:text-sm text-brand font-light mt-8">
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
