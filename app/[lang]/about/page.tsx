"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Reveal from "../components/Reveal";

const BOOKING_URL = "https://bookings.kaisolhotels.com/105902";

type RespItem = { title: string; desc: string };

const RESP_ICONS = [
  "M12 21c-5 0-8-3-8-7 0-5 4-9 12-11-1 8-1 13-4 18z",
  "M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z",
  "M4 12h16M4 12c0-4 3.5-7 8-7s8 3 8 7M4 12c0 4 3.5 7 8 7s8-3 8-7M12 5v14",
  "M7 19a4 4 0 01-4-4c0-5 5-9 12-11-1 7-3 12-8 15zM17 5c5 2 7 6 7 11a4 4 0 01-4 4c-4-2-5-8-3-15z",
  "M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z",
];

export default function AboutPage() {
  const t = useTranslations("About");
  const items = t.raw("responsibility.items") as RespItem[];
  const stats = [
    { v: t("stats.s1value"), l: t("stats.s1label") },
    { v: t("stats.s2value"), l: t("stats.s2label") },
    { v: t("stats.s3value"), l: t("stats.s3label") },
    { v: t("stats.s4value"), l: t("stats.s4label") },
  ];
  const targets = [
    { v: t("sustainability.t1value"), l: t("sustainability.t1label") },
    { v: t("sustainability.t2value"), l: t("sustainability.t2label") },
    { v: t("sustainability.t3value"), l: t("sustainability.t3label") },
  ];

  return (
    <>
      <Header />
      <main className="w-full bg-surface overflow-x-clip">
        {/* ============ HERO ============ */}
        <section className="relative w-full min-h-[72vh] md:min-h-[78vh] flex flex-col justify-end overflow-hidden bg-dark-bar rounded-none">
          <div className="absolute inset-0">
            <Image
              src="/home-page-images/reservation1.png"
              alt="KaiSol Romance Resort grand lobby"
              fill
              priority
              sizes="100vw"
              className="object-cover anim-hero-bg"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bar via-dark-bar/55 to-dark-bar/70 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(21,20,19,0.7)_100%)] pointer-events-none" />
          <div className="relative z-10 max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 w-full text-center pb-14 md:pb-20 pt-32">
            <p
              className="anim-hero-rise text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.4em] text-sand-gold font-medium mb-4"
              style={{ animationDelay: "100ms" }}
            >
              {t("hero.eyebrow")}
            </p>
            <h1
              className="anim-hero-rise font-heading uppercase text-5xl sm:text-7xl md:text-8xl font-light text-white leading-[1.02] tracking-[-0.01em] drop-shadow-2xl"
              style={{ animationDelay: "200ms" }}
            >
              {t("hero.titleA")}{" "}
              <span className="font-heading italic font-light text-sand-gold">
                {t("hero.titleB")}
              </span>
            </h1>
            <p
              className="anim-hero-rise text-sm sm:text-base md:text-lg text-cream/85 max-w-2xl mx-auto font-light mt-5 md:mt-6 leading-relaxed"
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

        {/* ============ STORY ============ */}
        <section className="w-full py-16 sm:py-24 md:py-28 lg:py-36 bg-surface rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
              <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-8">
                <Reveal variant="down">
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                      {t("story.overline")}
                    </span>
                    <span className="w-12 h-px bg-sand-gold" />
                  </div>
                </Reveal>
                <Reveal variant="up" delay={150}>
                  <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light text-dark-brown leading-[1.12] md:leading-[1.08] tracking-tight">
                    {t("story.heading")}
                  </h2>
                </Reveal>
                <Reveal variant="left" delay={300}>
                  <div className="text-body-gray space-y-4 md:space-y-6 text-[15px] sm:text-base md:text-lg font-light leading-relaxed">
                    <p>{t("story.p1")}</p>
                    <p>{t("story.p2")}</p>
                  </div>
                </Reveal>
                <Reveal variant="up" delay={450}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-6 border-t border-light-border/80">
                    {[
                      { l: t("story.spec1label"), ti: t("story.spec1title"), d: t("story.spec1desc") },
                      { l: t("story.spec2label"), ti: t("story.spec2title"), d: t("story.spec2desc") },
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
                      className="luxe-btn inline-flex items-center justify-center gap-2 bg-dark-brown hover:bg-olive text-white text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-none"
                    >
                      <span>{t("story.cta")}</span>
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-6 relative mt-6 lg:mt-0 pb-8 sm:pb-0">
                <Reveal variant="right" delay={200} y={40}>
                  <div className="luxe-img-zoom relative w-full aspect-[4/5] max-h-[560px] lg:max-h-none border border-light-border shadow-2xl bg-warm-beige rounded-none overflow-hidden group">
                    <Image
                      src="/home-page-images/main-image-kaisol.png"
                      alt="KaiSol Romance Resort beachfront"
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
                      src="/home-page-images/roof.png"
                      alt="KaiSol rooftop terrace over the sea"
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
                      {t("story.plaqueLabel")}
                    </span>
                    <span className="font-heading text-sm md:text-base font-medium tracking-wide">
                      {t("story.plaqueTitle")}
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============ STATS BAND ============ */}
        <section className="w-full bg-dark-bar border-y border-sand-gold/25 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 py-12 md:py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {stats.map((s, i) => (
              <Reveal
                key={s.l}
                variant={["left", "up", "up", "right"][i] as "left" | "up" | "right"}
                delay={i * 150}
              >
                <div className="text-center group cursor-default px-2">
                  <p className="font-heading uppercase text-2xl sm:text-3xl md:text-4xl font-light text-cream group-hover:text-sand-gold transition-colors duration-500 leading-tight">
                    {s.v}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="w-6 h-px bg-sand-gold/60 group-hover:w-10 transition-all duration-500" />
                    <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-cream/60">
                      {s.l}
                    </span>
                    <span className="w-6 h-px bg-sand-gold/60 group-hover:w-10 transition-all duration-500" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ RESPONSIBILITY ============ */}
        <section className="w-full py-16 sm:py-24 md:py-28 lg:py-36 bg-cream rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="down">
              <div className="max-w-2xl mb-10 md:mb-14">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                    {t("responsibility.overline")}
                  </span>
                  <span className="w-8 h-px bg-sand-gold" />
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                  {t("responsibility.heading")}
                </h2>
                <p className="text-sm sm:text-base text-body-gray font-light mt-3">
                  {t("responsibility.sub")}
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              {items.map((item, i) => (
                <Reveal
                  key={item.title}
                  variant={["left", "up", "right", "left", "up"][i % 5] as "left" | "up" | "right"}
                  delay={(i % 3) * 150}
                >
                  <div className="luxe-card relative bg-white border border-light-border/80 hover:border-sand-gold p-6 sm:p-7 md:p-8 h-full rounded-none group overflow-hidden">
                    <span
                      aria-hidden
                      className="absolute -top-2 end-3 font-heading text-6xl md:text-7xl font-light text-dark-brown/[0.07] group-hover:text-sand-gold/25 transition-colors duration-500 select-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-11 h-11 flex items-center justify-center bg-cream text-olive group-hover:bg-olive group-hover:text-white transition-all duration-500 mb-5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={RESP_ICONS[i % RESP_ICONS.length]} />
                      </svg>
                    </span>
                    <h3 className="font-heading uppercase text-xl md:text-2xl text-dark-brown font-normal mb-2 group-hover:text-olive transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-body-gray leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
              <Reveal variant="zoom" delay={300}>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxe-card group relative bg-dark-bar border border-sand-gold/40 hover:border-sand-gold p-6 sm:p-7 md:p-8 h-full min-h-[220px] rounded-none flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-sand-gold mb-3">
                      {t("responsibility.overline")}
                    </p>
                    <p className="font-heading uppercase text-2xl md:text-3xl font-light text-cream leading-tight">
                      {t("responsibility.cta")}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sand-gold group-hover:text-white group-hover:gap-4 transition-all duration-300 mt-6">
                    <span>→</span>
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ SUSTAINABILITY FEATURE ============ */}
        <section className="relative w-full py-20 sm:py-24 md:py-32 bg-dark-bar rounded-none overflow-hidden">
          <Image
            src="/home-page-images/yellow-reservation.png"
            alt="KaiSol lobby at night"
            fill
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bar via-dark-bar/65 to-dark-bar" />
          <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-6 md:px-12 text-center">
            <Reveal variant="down">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-sand-gold" />
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-sand-gold font-semibold">
                  {t("sustainability.overline")}
                </span>
                <span className="w-8 h-px bg-sand-gold" />
              </div>
            </Reveal>
            <Reveal variant="up" delay={150}>
              <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                {t("sustainability.heading")}
              </h2>
            </Reveal>
            <Reveal variant="fade" delay={300}>
              <p className="text-sm sm:text-base md:text-lg text-cream/75 font-light mt-4 max-w-3xl mx-auto leading-relaxed">
                {t("sustainability.sub")}
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
              {targets.map((tg, i) => (
                <Reveal key={tg.l} variant="zoom" delay={350 + i * 150}>
                  <div className="border border-white/15 hover:border-sand-gold/70 bg-white/[0.04] backdrop-blur-sm px-6 py-7 md:py-8 rounded-none transition-all duration-500 hover:-translate-y-1 group cursor-default h-full">
                    <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-sand-gold group-hover:scale-105 transition-transform duration-500 tabular-nums">
                      {tg.v}
                    </p>
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-cream/65 mt-3 leading-relaxed">
                      {tg.l}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal variant="fade" delay={600}>
              <div className="mt-10 md:mt-12">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxe-btn luxe-shimmer inline-flex items-center justify-center gap-3 bg-olive hover:bg-olive-hover text-white text-xs uppercase tracking-[0.25em] px-10 py-4 rounded-none"
                >
                  <span>{t("sustainability.cta")}</span>
                </a>
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
