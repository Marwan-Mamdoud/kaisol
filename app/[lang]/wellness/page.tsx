"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Reveal from "../components/Reveal";

const BOOKING_URL = "https://bookings.kaisolhotels.com/105902";

/* Stroke icons for the spa menu cards, index-aligned with Wellness.experiences.items */
const EXPERIENCE_ICONS = [
  // massage — hands / care
  "M12 20.5s-7-4.6-7-9.4A4.1 4.1 0 0112 9a4.1 4.1 0 017 2.1c0 4.8-7 9.4-7 9.4z",
  // sauna — heat
  "M12 3a2 2 0 00-2 2v8.4a4 4 0 104 0V5a2 2 0 00-2-2zM12 8v6",
  // spa — droplet
  "M12 2.8l5.6 6.6a6.2 6.2 0 11-11.2 0z",
  // gym — dumbbell
  "M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11",
];

export default function WellnessPage() {
  const t = useTranslations("Wellness");
  const items = t.raw("experiences.items") as { title: string; desc: string }[];

  return (
    <>
      <Header />
      <main className="w-full bg-surface overflow-x-clip">
        {/* ============ HERO ============ */}
        <section className="relative w-full min-h-[62vh] md:min-h-[68vh] flex flex-col justify-end overflow-hidden bg-dark-bar rounded-none">
          <div className="absolute inset-0">
            <Image
              src="/site-images/wellness-page-1.jpg"
              alt="Infinity pool overlooking the Red Sea at KaiSol"
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

        {/* ============ INTRO ============ */}
        <section className="w-full py-16 sm:py-20 md:py-28 bg-surface rounded-none">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
            <Reveal variant="up">
              <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                {t("intro.heading")}
              </h2>
            </Reveal>
            <Reveal variant="up" delay={300}>
              <p className="text-sm sm:text-base md:text-lg text-body-gray font-light mt-5 leading-relaxed">
                {t("intro.description")}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ SPA ============ */}
        <section className="w-full py-16 sm:py-20 md:py-28 bg-cream border-y border-light-border/80 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 xl:gap-24 items-center">
              {/* Images */}
              <div className="lg:col-span-6 relative pb-8 sm:pb-0">
                <Reveal variant="left" y={40}>
                  <div className="luxe-img-zoom group relative w-full aspect-[4/5] max-h-[560px] lg:max-h-none border border-light-border shadow-2xl bg-warm-beige rounded-none overflow-hidden">
                    <Image
                      src="/site-images/wellness-page-2.png"
                      alt="Indoor pool at the KaiSol spa"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bar/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </Reveal>
                <Reveal
                  variant="right"
                  delay={250}
                  className="absolute -bottom-4 sm:-bottom-10 end-0 sm:end-auto ltr:sm:-left-10 rtl:sm:-right-10 w-3/5 aspect-[4/3] border-4 border-cream shadow-2xl hidden sm:block rounded-none overflow-hidden bg-dark-brown luxe-img-zoom group"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/site-images/wellness-page-3.png"
                      alt="Guest in a spa robe at KaiSol"
                      fill
                      sizes="60vw"
                      className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </Reveal>
              </div>

              {/* Text */}
              <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-7">
                <Reveal variant="right">
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                      {t("experiences.overline")}
                    </span>
                    <span className="w-12 h-px bg-sand-gold" />
                  </div>
                </Reveal>
                <Reveal variant="right" delay={150}>
                  <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight tracking-tight">
                    {t("spa.heading")}
                  </h2>
                </Reveal>
                <Reveal variant="right" delay={300}>
                  <p className="text-body-gray text-[15px] sm:text-base md:text-lg font-light leading-relaxed">
                    {t("spa.description")}
                  </p>
                </Reveal>
                <Reveal variant="right" delay={450}>
                  <div className="pt-4 border-t border-light-border/80 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                    {[
                      { l: t("experiences.items.0.title"), i: EXPERIENCE_ICONS[0] },
                      { l: t("experiences.items.2.title"), i: EXPERIENCE_ICONS[2] },
                      { l: t("experiences.items.1.title"), i: EXPERIENCE_ICONS[1] },
                    ].map((s) => (
                      <span
                        key={s.l}
                        className="inline-flex items-center gap-2.5 text-[11px] md:text-xs uppercase tracking-[0.2em] text-body-gray"
                      >
                        <svg
                          className="w-4 h-4 text-sand-gold shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d={s.i}
                          />
                        </svg>
                        {s.l}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============ GYM ============ */}
        <section className="w-full py-16 sm:py-20 md:py-28 bg-surface rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
              {/* Text */}
              <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-7">
                <Reveal variant="left">
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                      {t("gym.overline")}
                    </span>
                    <span className="w-12 h-px bg-sand-gold" />
                  </div>
                </Reveal>
                <Reveal variant="left" delay={150}>
                  <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight tracking-tight">
                    {t("gym.heading")}
                  </h2>
                </Reveal>
                <Reveal variant="left" delay={300}>
                  <p className="text-body-gray text-[15px] sm:text-base md:text-lg font-light leading-relaxed">
                    {t("gym.description")}
                  </p>
                </Reveal>
                <Reveal variant="left" delay={450}>
                  <div className="pt-4 border-t border-light-border/80 flex flex-wrap items-center gap-4">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="luxe-btn inline-flex items-center justify-center gap-2 bg-dark-brown hover:bg-olive text-white text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-none"
                    >
                      {t("gym.cta")}
                    </a>
                    <span className="inline-flex items-center gap-2.5 text-[11px] md:text-xs uppercase tracking-[0.2em] text-body-gray">
                      <svg
                        className="w-4 h-4 text-sand-gold shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={EXPERIENCE_ICONS[3]}
                        />
                      </svg>
                      {t("experiences.items.3.title")}
                    </span>
                  </div>
                </Reveal>
              </div>

              {/* Image */}
              <div className="lg:col-span-6">
                <Reveal variant="right" y={40}>
                  <div className="luxe-img-zoom group relative w-full aspect-[4/5] max-h-[560px] lg:max-h-none border border-light-border shadow-2xl bg-warm-beige rounded-none overflow-hidden">
                    <Image
                      src="/gallary/photo-12.png"
                      alt="KaiSol resort pool at night"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bar/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============ EXPERIENCES / SPA MENU ============ */}
        <section className="w-full py-16 sm:py-20 md:py-28 bg-cream border-t border-light-border/80 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="down">
              <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="w-8 h-px bg-sand-gold" />
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                    {t("intro.overline")}
                  </span>
                  <span className="w-8 h-px bg-sand-gold" />
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                  {t("experiences.heading")}
                </h2>
                <p className="text-sm sm:text-base text-body-gray font-light mt-4">
                  {t("experiences.sub")}
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
              {items.map((item, i) => (
                <Reveal
                  key={item.title}
                  variant={(["left", "up", "up", "right"] as const)[i % 4]}
                  delay={(i % 4) * 130}
                >
                  <article className="luxe-card relative h-full bg-white border border-light-border/80 hover:border-sand-gold p-6 md:p-7 rounded-none group text-center flex flex-col items-center">
                    <span className="absolute top-4 end-5 font-heading text-sm text-sand-gold/80 tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-12 h-12 flex items-center justify-center bg-cream text-olive group-hover:bg-olive group-hover:text-white transition-all duration-500 mb-5">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={EXPERIENCE_ICONS[i % EXPERIENCE_ICONS.length]}
                        />
                      </svg>
                    </span>
                    <h3 className="font-heading uppercase text-xl md:text-2xl text-dark-brown font-normal mb-3 group-hover:text-olive transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-body-gray leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </article>
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