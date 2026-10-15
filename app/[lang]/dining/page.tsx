"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Reveal from "../components/Reveal";
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
        <section className="relative w-full min-h-[62vh] md:min-h-[68vh] flex flex-col justify-end overflow-hidden bg-dark-bar rounded-none">
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
                href={RESERVE_TEL}
                className="luxe-btn luxe-shimmer inline-flex items-center justify-center gap-3 bg-olive hover:bg-olive-hover text-white text-xs uppercase tracking-[0.25em] px-10 py-4 rounded-none"
              >
                <span>{t("hero.cta")}</span>
              </a>
            </div>
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

        {/* ============ RESTAURANTS ============ */}
        <section className="w-full pb-16 sm:pb-20 md:pb-28 bg-surface rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="left">
              <div className="max-w-xl mb-10 md:mb-14">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                    {t("restaurants.overline")}
                  </span>
                  <span className="w-8 h-px bg-sand-gold" />
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                  {t("restaurants.heading")}
                </h2>
                <p className="text-sm sm:text-base text-body-gray font-light mt-3">
                  {t("restaurants.sub")}
                </p>
              </div>
            </Reveal>
            <div className="flex flex-col gap-10 md:gap-14">
              {restaurants.map((r, n) => {
                const flip = n % 2 === 1;
                const cover = venueGallery(n)[0];
                return (
                  <Reveal
                    key={VENUE_SLUGS[n]}
                    variant={flip ? "right" : "left"}
                    delay={100}
                  >
                    <article className="luxe-card grid grid-cols-1 lg:grid-cols-2 bg-white border border-light-border/80 hover:border-sand-gold rounded-none overflow-hidden">
                      <div
                        className={`relative h-[260px] sm:h-[340px] lg:h-[440px] bg-warm-beige overflow-hidden group ${flip ? "lg:order-2" : ""}`}
                      >
                        <Image
                          src={cover}
                          alt={r.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <span className="absolute top-4 start-4 bg-dark-bar/90 backdrop-blur-sm text-cream px-3 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-medium border border-white/20 rounded-none">
                          {r.type}
                        </span>
                      </div>
                      <div className={`p-6 sm:p-8 md:p-10 flex flex-col justify-center ${flip ? "lg:order-1" : ""}`}>
                        <p className="text-[11px] uppercase tracking-[0.25em] text-olive font-semibold mb-3">
                          {r.serving}
                          {r.serving && r.indoor !== "0" ? " · " : ""}
                          {r.indoor !== "0" || r.outdoor !== "0"
                            ? `${r.indoor !== "0" ? `${r.indoor} Indoor` : ""}${r.indoor !== "0" && r.outdoor !== "0" ? " · " : ""}${r.outdoor !== "0" ? `${r.outdoor} Outdoor` : ""}`
                            : ""}
                        </p>
                        <h3 className="font-heading uppercase text-2xl sm:text-3xl md:text-4xl font-normal text-dark-brown mb-4 leading-tight">
                          {r.name}
                        </h3>
                        <p className="text-sm md:text-[15px] text-body-gray leading-relaxed mb-7 font-light">
                          {r.desc}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <a
                            href={`/${locale}/dining/${VENUE_SLUGS[n]}`}
                            className="luxe-btn inline-flex items-center justify-center gap-2 bg-dark-brown hover:bg-olive text-white text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-none text-center"
                          >
                            {t("list.details")}
                          </a>
                          <a
                            href={RESERVE_TEL}
                            className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs uppercase tracking-[0.18em] text-olive hover:text-dark-brown transition-colors rounded-none"
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
        <section className="w-full py-16 sm:py-20 md:py-28 bg-cream border-y border-light-border/80 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="right">
              <div className="max-w-xl mb-10 md:mb-14">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                    {t("bars.overline")}
                  </span>
                  <span className="w-8 h-px bg-sand-gold" />
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                  {t("bars.heading")}
                </h2>
                <p className="text-sm sm:text-base text-body-gray font-light mt-3">
                  {t("bars.sub")}
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              {bars.map((r, k) => {
                const n = k + RESTAURANT_COUNT;
                const cover = venueGallery(n)[0];
                return (
                  <Reveal
                    key={VENUE_SLUGS[n]}
                    variant={["left", "up", "right"][k % 3] as "left" | "up" | "right"}
                    delay={(k % 3) * 150}
                  >
                    <article className="luxe-card bg-white border border-light-border/80 hover:border-sand-gold rounded-none overflow-hidden h-full flex flex-col">
                      <div className="relative h-56 sm:h-60 bg-warm-beige overflow-hidden group shrink-0">
                        <Image
                          src={cover}
                          alt={r.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <span className="absolute top-4 start-4 bg-dark-bar/90 text-cream px-3 py-1 text-[9px] uppercase tracking-[0.25em] border border-white/20 rounded-none">
                          {r.serving || r.type}
                        </span>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-heading uppercase text-xl md:text-2xl text-dark-brown font-normal mb-2">
                          {r.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-body-gray leading-relaxed mb-6 font-light flex-1">
                          {r.desc}
                        </p>
                        <div className="flex items-center gap-4 pt-4 border-t border-light-border/60">
                          <a
                            href={`/${locale}/dining/${VENUE_SLUGS[n]}`}
                            className="text-xs uppercase tracking-[0.18em] text-dark-brown hover:text-olive transition-colors font-medium"
                          >
                            {t("list.details")}
                          </a>
                          <span className="text-light-border">|</span>
                          <a
                            href={RESERVE_TEL}
                            className="text-xs uppercase tracking-[0.18em] text-olive hover:text-dark-brown transition-colors"
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

        <Partners />
      </main>
      <Footer />
    </>
  );
}
