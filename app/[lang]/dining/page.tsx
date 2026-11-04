"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Reveal from "../components/Reveal";
import AppBadges from "../components/AppBadges";
import {
  RESERVE_TEL,
  VENUE_SLUGS,
  venueGallery,
  RESTAURANT_COUNT,
} from "./diningSlugs";

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

export default function DiningPage() {
  const t = useTranslations("Dining");
  const locale = useLocale();
  const venues = t.raw("venues") as Venue[];
  const restaurants = venues.slice(0, RESTAURANT_COUNT);
  const bars = venues.slice(RESTAURANT_COUNT);

  return (
    <>
      <Header />
      <main className="w-full bg-surface overflow-x-clip">
        {/* ============ HERO ============ */}
        <section className="relative w-full min-h-[62vh] md:min-h-[68vh] flex flex-col justify-end overflow-hidden bg-cream rounded-none hero-glow">
          <div className="absolute inset-0">
            <Image
              src="/home-page-images/dining.png"
              alt="KaiSol restaurant hall"
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
              className="anim-hero-rise font-heading uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.02] drop-shadow-[0_2px_4px_rgba(71,69,68,0.5)]"
              style={{ animationDelay: "200ms" }}
            >
              {t("hero.titleA")}{" "}
              <span className="font-heading italic font-light text-gold">
                {t("hero.titleB")}
              </span>
            </h1>
            <div
              className="anim-hero-rise mt-6 md:mt-8"
              style={{ animationDelay: "350ms" }}
            >
              <a
                href={RESERVE_TEL}
                className="luxe-btn luxe-shimmer inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-hover text-white text-[11px] uppercase tracking-[0.22em] px-8 py-3.5 rounded-none"
              >
                <span>{t("hero.cta")}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============ APP STRIP ============ */}
        <section className="w-full bg-cream border-y border-gold/20 rounded-none">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 py-5 md:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">
              Download the KaiSol app for dining offers
            </span>
            <AppBadges compact />
          </div>
        </section>

        {/* ============ RESTAURANTS ============ */}
        <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-surface rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="left">
              <div className="flex items-center gap-3 mb-10 md:mb-14">
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                  {t("restaurants.overline")}
                </span>
                <span className="w-8 h-px bg-gold" />
                <h2 className="font-heading uppercase text-2xl sm:text-3xl md:text-4xl font-light text-dark-brown leading-tight">
                  {t("restaurants.heading")}
                </h2>
              </div>
            </Reveal>
            {/* <div className="flex flex-col gap-8 md:gap-10">
              {restaurants.map((r, n) => {
                const flip = n % 2 === 1;
                const cover = venueGallery(n)[0];
                const note = [r.serving, r.type].filter(Boolean).join(" · ");
                return (
                  <Reveal
                    key={VENUE_SLUGS[n]}
                    variant={flip ? "right" : "left"}
                    delay={100}
                  >
                    <article className="grid grid-cols-1 lg:grid-cols-5 bg-white border border-light-border/80 hover:border-gold rounded-none overflow-hidden group transition-colors duration-500">
                      <div
                        className={`relative h-[280px] sm:h-[360px] lg:h-[420px] bg-warm-beige overflow-hidden lg:col-span-3 ${
                          flip ? "lg:order-2" : ""
                        }`}
                      >
                        <Image
                          src={cover}
                          alt={r.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <span className="absolute top-4 start-4 bg-white/90 backdrop-blur-sm text-brand px-3 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-medium border border-gold/30 rounded-none">
                          {r.type}
                        </span>
                      </div>
                      <div
                        className={`p-6 sm:p-8 md:p-10 flex flex-col justify-center lg:col-span-2 ${
                          flip ? "lg:order-1" : ""
                        }`}
                      >
                        <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-3">
                          {note}
                        </p>
                        <h3 className="font-heading uppercase text-2xl sm:text-3xl md:text-4xl font-normal text-dark-brown mb-6 leading-tight">
                          {r.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4">
                          <a
                            href={`/${locale}/dining/${VENUE_SLUGS[n]}`}
                            className="luxe-btn inline-flex items-center justify-center gap-2 bg-dark-brown hover:bg-gold text-white text-[11px] uppercase tracking-[0.2em] px-7 py-3 rounded-none text-center"
                          >
                            {t("list.details")}
                          </a>
                          <a
                            href={RESERVE_TEL}
                            className="text-[11px] uppercase tracking-[0.18em] text-gold hover:text-dark-brown transition-colors"
                          >
                            {t("list.reserve")}
                          </a>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div> */}

<div className="flex flex-col gap-14 md:gap-20 lg:gap-28">
  {restaurants.map((r, n) => {
    const flip = n % 2 === 1;
    const cover = venueGallery(n)[0];
    const note = [r.serving, r.type].filter(Boolean).join(" · ");
    const href = `/${locale}/dining/${VENUE_SLUGS[n]}`;

    return (
      <Reveal
        key={VENUE_SLUGS[n]}
        variant={flip ? "right" : "left"}
        delay={100}
      >
        <article className="group grid grid-cols-1 lg:grid-cols-12 items-center gap-0 lg:gap-12 xl:gap-16">
          {/* Image */}
          <div
            className={`relative h-[300px] sm:h-[400px] lg:h-[440px] xl:h-[500px] overflow-hidden bg-warm-beige lg:col-span-7 ${
              flip ? "lg:col-start-6 lg:row-start-1" : "lg:col-start-1"
            }`}
          >
            <Image
              src={cover}
              alt={r.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/5" />

            <span className="absolute bottom-5 start-5 text-[10px] uppercase tracking-[0.25em] text-white drop-shadow-md">
              {String(n + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Editorial content */}
          <div
            className={`relative flex flex-col justify-center py-8 sm:py-10 lg:py-12 lg:col-span-5 ${
              flip
                ? "lg:col-start-1 lg:row-start-1 lg:pe-4"
                : "lg:col-start-8 lg:ps-4"
            }`}
          >
            <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.24em] text-gold">
              <span className="h-px w-8 bg-gold" />
              {note}
            </p>

            <h3 className="max-w-[15ch] font-heading text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal uppercase leading-[1.12] text-dark-brown">
              {r.name}
            </h3>

            <div className="my-6 h-px w-12 bg-gold transition-all duration-500 group-hover:w-20" />

            <p className="max-w-sm text-sm leading-7 text-dark-brown/65">
              {r.serving}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={href}
                className="group/link inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-dark-brown transition-colors hover:text-gold"
              >
                {t("list.details")}
                <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                  →
                </span>
              </a>

              <a
                href={RESERVE_TEL}
                className="border-b border-gold/60 pb-1 text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:border-dark-brown hover:text-dark-brown"
              >
                {t("list.reserve")}
              </a>
            </div>
          </div>
        </article>
      </Reveal>
    );
  })}
</div>

          </div>
        </section>

        {/* ============ BARS ============ */}
        <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-cream border-y border-light-border/80 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="right">
              <div className="flex items-center gap-3 mb-10 md:mb-14">
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                  {t("bars.overline")}
                </span>
                <span className="w-8 h-px bg-gold" />
                <h2 className="font-heading uppercase text-2xl sm:text-3xl md:text-4xl font-light text-dark-brown leading-tight">
                  {t("bars.heading")}
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              {bars.map((r, k) => {
                const n = k + RESTAURANT_COUNT;
                const cover = venueGallery(n)[0];
                const href = `/${locale}/dining/${VENUE_SLUGS[n]}`;

                return (
                  <Reveal
                    key={VENUE_SLUGS[n]}
                    variant={
                      ["left", "up", "right"][k % 3] as "left" | "up" | "right"
                    }
                    delay={(k % 3) * 120}
                  >
                    <article className="group relative isolate h-[420px] sm:h-[460px] lg:h-[500px] overflow-hidden bg-brand">
                      {/* Venue image */}
                      <Image
                        src={cover}
                        alt={r.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      />

                      {/* Image overlays */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/85 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-gold/70" />

                      {/* Main card link */}
                      <a
                        href={href}
                        aria-label={r.name}
                        className="absolute inset-0 z-0"
                      />

                      {/* Content */}
                      <div className="pointer-events-none absolute inset-0 flex flex-col items-start p-6 md:p-8 text-white">
                        <span className="inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-white/80">
                          <span className="h-px w-7 bg-gold" />
                          {r.type || r.serving}
                        </span>

                        <div className="mt-auto w-full translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
                          <h3 className="max-w-[15ch] font-heading text-3xl md:text-4xl font-normal uppercase leading-[1.12] tracking-wide drop-shadow-md">
                            {r.name}
                          </h3>

                          <div className="mt-5 mb-5 h-px w-10 bg-gold transition-all duration-500 group-hover:w-16" />

                          <div className="flex items-center justify-between gap-4">
                            <a
                              href={href}
                              className="pointer-events-auto relative z-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/90 transition-colors hover:text-gold"
                            >
                              Explore Venue
                              <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                              </span>
                            </a>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.location.href = RESERVE_TEL;
                              }}
                              className="pointer-events-auto relative z-10 border border-white/40 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-gold hover:bg-gold hover:text-brand sm:px-4"
                            >
                              {t("list.reserve")}
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <Partners />
      </main>
      <Footer />
    </>
  );
}
