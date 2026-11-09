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
      <main className="w-full bg-cream overflow-x-clip">
        {/* ============ HERO ============ */}
        <section className="relative w-full min-h-[62vh] md:min-h-[68vh] flex flex-col justify-end overflow-hidden bg-cream rounded-none hero-glow">
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

        {/* ============ INTRO ============ */}
        <section className="w-full py-16 sm:py-20 md:py-28 bg-cream rounded-none">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
            <Reveal variant="up">
              <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-tight">
                {t("intro.heading")}
              </h2>
            </Reveal>
            <Reveal variant="up" delay={300}>
              <p className="text-sm sm:text-base md:text-lg text-brand font-light mt-5 leading-relaxed">
                {t("intro.description")}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ SPA ============ */}
        {/* <section className="w-full py-16 sm:py-20 md:py-28 bg-cream border-y border-gold rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 xl:gap-24 items-center">
              <div className="lg:col-span-6 relative pb-8 sm:pb-0">
                <Reveal variant="left" y={40}>
                  <div className="luxe-img-zoom group relative w-full aspect-[4/5] max-h-[560px] lg:max-h-none border border-gold bg-cream rounded-none overflow-hidden">
                    <Image
                      src="/site-images/wellness-page-2.png"
                      alt="Indoor pool at the KaiSol spa"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </Reveal>
                <Reveal
                  variant="right"
                  delay={250}
                  className="absolute -bottom-4 sm:-bottom-10 end-0 sm:end-auto ltr:sm:-left-10 rtl:sm:-right-10 w-3/5 aspect-[4/3] border-4 border-cream hidden sm:block rounded-none overflow-hidden bg-brand luxe-img-zoom group"
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
              <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-7">
                <Reveal variant="right">
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                      {t("experiences.overline")}
                    </span>
                    <span className="w-12 h-px bg-gold" />
                  </div>
                </Reveal>
                <Reveal variant="right" delay={150}>
                  <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-tight tracking-tight">
                    {t("spa.heading")}
                  </h2>
                </Reveal>
                <Reveal variant="right" delay={300}>
                  <p className="text-brand text-[15px] sm:text-base md:text-lg font-light leading-relaxed">
                    {t("spa.description")}
                  </p>
                </Reveal>
                <Reveal variant="right" delay={450}>
                  <div className="pt-4 border-t border-gold flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                    {[
                      { l: t("experiences.items.0.title"), i: EXPERIENCE_ICONS[0] },
                      { l: t("experiences.items.2.title"), i: EXPERIENCE_ICONS[2] },
                      { l: t("experiences.items.1.title"), i: EXPERIENCE_ICONS[1] },
                    ].map((s) => (
                      <span
                        key={s.l}
                        className="inline-flex items-center gap-2.5 text-[11px] md:text-xs uppercase tracking-[0.2em] text-brand"
                      >
                        <svg
                          className="w-4 h-4 text-gold shrink-0"
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
        </section> */}

        

<section className="relative w-full overflow-hidden bg-[#474544] text-[#EAE4D8]">
  <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:min-h-[620px] lg:grid-cols-12">

    {/* Main spa photograph */}
    <Reveal
      variant="zoom"
      className="relative min-h-[320px] sm:min-h-[420px] lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:min-h-[620px]"
    >
      <div className="group absolute inset-0 overflow-hidden">
        <Image
          src="/site-images/wellness-page-2.png"
          alt="Indoor pool at the KaiSol spa"
          fill
          priority={false}
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-brand/30 lg:via-transparent lg:to-transparent" />
      </div>
    </Reveal>

    {/* Editorial content */}
    <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:px-12 lg:py-16 xl:px-16">

      <Reveal variant="up">
        <div className="mb-7 flex items-center gap-3">
          <span className="h-px w-9 bg-gold" />
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#837867]">
            {t("experiences.overline")}
          </span>
        </div>
      </Reveal>

      <Reveal variant="left" delay={100}>
        <h2 className="max-w-[12ch] font-heading text-4xl font-normal uppercase leading-[1.08] tracking-normal text-[#EAE4D8] sm:text-5xl lg:text-5xl xl:text-6xl">
          {t("spa.heading")}
        </h2>
      </Reveal>

      <Reveal variant="left" delay={200}>
        <p className="mt-6 max-w-md text-sm font-light leading-7 text-[#8C9791] sm:text-base sm:leading-8">
          {t("spa.description")}
        </p>
      </Reveal>

      {/* Wellness features */}
      <Reveal variant="up" delay={300}>
        <div className="mt-9 border-t border-cream">
          {[
            { l: t("experiences.items.0.title"), i: EXPERIENCE_ICONS[0] },
            { l: t("experiences.items.2.title"), i: EXPERIENCE_ICONS[2] },
            { l: t("experiences.items.1.title"), i: EXPERIENCE_ICONS[1] },
          ].map((s, index) => (
            <div
              key={s.l}
              className="flex items-center gap-4 border-b border-cream py-4"
            >
              <span className="w-5 shrink-0 font-heading text-sm text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>

              <svg
                className="h-[18px] w-[18px] shrink-0 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.4}
                  d={s.i}
                />
              </svg>

              <span className="text-[10px] font-light uppercase leading-relaxed tracking-[0.16em] text-[#EAE4D8] sm:text-[11px]">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal variant="up" delay={400}>
        <div className="mt-7 flex items-center gap-3 text-[9px] uppercase tracking-[0.24em] text-[#8C9791]">
          <span className="h-px w-7 bg-gold" />
          <span>KaiSol Wellness</span>
        </div>
      </Reveal>
    </div>
  </div>
</section>

        {/* ============ GYM ============ */}
        <section className="w-full py-16 sm:py-20 md:py-28 bg-cream rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
              {/* Text */}
              <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-7">
                <Reveal variant="left">
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                      {t("gym.overline")}
                    </span>
                    <span className="w-12 h-px bg-gold" />
                  </div>
                </Reveal>
                <Reveal variant="left" delay={150}>
                  <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-tight tracking-tight">
                    {t("gym.heading")}
                  </h2>
                </Reveal>
                <Reveal variant="left" delay={300}>
                  <p className="text-brand text-[15px] sm:text-base md:text-lg font-light leading-relaxed">
                    {t("gym.description")}
                  </p>
                </Reveal>
                <Reveal variant="left" delay={450}>
                  <div className="pt-4 border-t border-gold flex flex-wrap items-center gap-4">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="luxe-btn inline-flex items-center justify-center gap-2 bg-brand hover:bg-gold text-cream text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-none"
                    >
                      {t("gym.cta")}
                    </a>
                    <span className="inline-flex items-center gap-2.5 text-[11px] md:text-xs uppercase tracking-[0.2em] text-brand">
                      <svg
                        className="w-4 h-4 text-gold shrink-0"
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
                  <div className="luxe-img-zoom group relative w-full aspect-[4/5] max-h-[560px] lg:max-h-none border border-gold bg-cream rounded-none overflow-hidden">
                    <Image
                      src="/gallary/photo-12.png"
                      alt="KaiSol resort pool at night"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============ EXPERIENCES / SPA MENU ============ */}
        {/* <section className="w-full py-16 sm:py-20 md:py-28 bg-cream border-t border-gold rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="down">
              <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="w-8 h-px bg-gold" />
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                    {t("intro.overline")}
                  </span>
                  <span className="w-8 h-px bg-gold" />
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-tight">
                  {t("experiences.heading")}
                </h2>
                <p className="text-sm sm:text-base text-brand font-light mt-4">
                  {t("experiences.sub")}
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {items.map((item, i) => {
                const imgs = [
                  "/site-images/wellness-page-2.png",
                  "/site-images/wellness-page-4.jpg",
                  "/site-images/wellness-page-3.png",
                  "/gallary/photo-12.png",
                ];
                const src = imgs[i % imgs.length];
                return (
                  <Reveal
                    key={item.title}
                    variant={(["left", "up", "up", "right"] as const)[i % 4]}
                    delay={(i % 4) * 130}
                  >
                    <article className="group relative aspect-[3/4] overflow-hidden bg-cream rounded-none">
                      <Image
                        src={src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-brand/30 via-brand/30 to-transparent" />
                      <div className="absolute inset-0 p-5 md:p-6 flex flex-col items-start text-cream">
                        <span className="font-heading text-sm text-cream tracking-[0.2em] mb-3">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="w-9 h-9 flex items-center justify-center bg-cream backdrop-blur-sm text-gold mb-4 group-hover:bg-gold group-hover:text-cream transition-all duration-500">
                          <svg
                            className="w-5 h-5"
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
                        <h3 className="font-heading uppercase text-xl md:text-2xl font-normal leading-tight mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-cream font-light leading-relaxed max-w-[24ch]">
                          {item.desc}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section> */}

<section className="relative w-full overflow-hidden bg-cream py-16 sm:py-20 md:py-24">
  <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12">

    {/* Section introduction */}
    <Reveal variant="up" y={20}>
      <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-12">
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold">
              {t("intro.overline")}
            </span>
          </div>

          <h2 className="max-w-[15ch] font-heading text-3xl font-normal uppercase leading-[1.12] text-brand sm:text-4xl md:text-5xl lg:text-6xl">
            {t("experiences.heading")}
          </h2>
        </div>

        <p className="max-w-md pb-1 text-sm leading-7 text-brand sm:text-base sm:leading-8 md:max-w-sm">
          {t("experiences.sub")}
        </p>
      </div>
    </Reveal>

    {/* Asymmetrical image gallery */}
    <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-12">
      {items.map((item, i) => {
        const imgs = [
          "/site-images/wellness-page-2.png",
          "/site-images/wellness-page-4.jpg",
          "/site-images/wellness-page-3.png",
          "/gallary/photo-12.png",
        ];

        const src = imgs[i % imgs.length];
        const featured = i === 0 || i === 3;

        return (
          <Reveal
            key={item.title}
            variant={(["left", "up", "right", "up"] as const)[i % 4]}
            delay={(i % 2) * 120}
            className={
              i === 0
                ? "sm:col-span-2 lg:col-span-7"
                : i === 1
                  ? "lg:col-span-5 lg:pt-16"
                  : i === 2
                    ? "lg:col-span-5 lg:pb-12"
                    : "lg:col-span-7"
            }
          >
            <article className="group">
              {/* Photography */}
              <div
                className={`relative overflow-hidden bg-cream ${
                  featured
                    ? "aspect-[5/3] sm:aspect-[16/9]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt={item.title}
                  fill
                  sizes={
                    i === 0 || i === 3
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 58vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                  }
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Image caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-heading text-sm text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
                  </div>

                  <h3 className="max-w-[18ch] font-heading text-xl font-normal uppercase leading-tight text-cream sm:text-2xl md:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Description below the image */}
              <div className="flex items-start justify-between gap-5 border-b border-gold py-4 sm:py-5">
                <p className="max-w-md text-xs leading-6 text-brand sm:text-sm sm:leading-7">
                  {item.desc}
                </p>

                <svg
                  className="mt-1 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.4}
                  />
                </svg>
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