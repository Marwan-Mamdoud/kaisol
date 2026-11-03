"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Reveal from "../components/Reveal";
import ParallaxImage from "../components/ParallaxImage";
import CountUp from "../components/CountUp";

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
        {/* ============ HERO — light editorial gate ============ */}
        <section className="relative w-full bg-surface rounded-none overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(131,120,103,0.10),transparent_58%)]"
          />
          <div className="relative max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 pt-10 pb-14 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 anim-hero-rise">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <span className="w-10 h-px bg-gold" />
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                  {t("hero.eyebrow")}
                </span>
              </div>
              <h1 className="font-heading uppercase font-light text-brand leading-[0.92] text-[clamp(2.75rem,9vw,5.5rem)]">
                <span className="block">{t("hero.titleA")}</span>
                <span className="block text-gold">{t("hero.titleB")}</span>
              </h1>
              <p className="mt-7 md:mt-9 max-w-md text-sm sm:text-base text-body-gray font-light leading-relaxed">
                {t("hero.subtitle")}
              </p>
              <div className="mt-8 md:mt-10">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxe-btn inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-white text-xs uppercase tracking-[0.2em] px-9 py-4 rounded-none"
                >
                  {t("hero.cta")}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 anim-hero-rise [animation-delay:180ms]">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-3 sm:-inset-4 border border-gold/35 translate-x-3 translate-y-3 rtl:-translate-x-3"
                />
                <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-none bg-warm-beige">
                  <Image
                    src="/site-images/about-us-hero.png"
                    alt={t("hero.titleB")}
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 44vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ STORY — editorial spread ============ */}
        <section className="w-full py-16 sm:py-24 md:py-28 lg:py-32 bg-cream rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 grid lg:grid-cols-12 gap-10 md:gap-14 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <Reveal variant="down">
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                    {t("story.overline")}
                  </span>
                  <span className="w-8 h-px bg-gold" />
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-[1.05]">
                  {t("story.heading")}
                </h2>
              </Reveal>

              <Reveal variant="up" delay={120}>
                <p className="mt-6 md:mt-8 text-base md:text-lg text-body-gray font-light leading-relaxed">
                  {t("story.p1")}
                </p>
              </Reveal>

              <div className="mt-8 md:mt-10 grid sm:grid-cols-2 gap-px bg-light-border border border-light-border rounded-none">
                {[
                  { title: t("story.spec1title"), desc: t("story.spec1desc") },
                  { title: t("story.spec2title"), desc: t("story.spec2desc") },
                ].map((s, i) => (
                  <Reveal key={s.title} variant="fade" delay={180 + i * 120}>
                    <div className="h-full bg-surface px-5 py-6 md:px-6 md:py-7">
                      <h3 className="font-heading text-lg md:text-xl text-brand leading-snug">{s.title}</h3>
                      <p className="text-xs md:text-[13px] text-body-gray font-light mt-1 leading-relaxed">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <Reveal variant="right" y={48}>
                <div className="relative">
                  <ParallaxImage
                    src="/site-images/about-us-page-1.png"
                    alt={t("story.heading")}
                    strength={44}
                    sizes="(max-width: 1024px) 92vw, 54vw"
                    className="aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] w-full rounded-none bg-warm-beige"
                  />
                  <div className="absolute bottom-4 start-4 end-4 sm:bottom-6 sm:start-6 sm:end-auto sm:max-w-[17rem] bg-surface/95 backdrop-blur-sm border border-light-border px-5 py-5 md:px-6 md:py-6 rounded-none shadow-[0_18px_40px_-24px_rgba(71,69,68,0.45)]">
                    <span className="text-[9px] uppercase tracking-[0.26em] text-gold block">{t("story.plaqueLabel")}</span>
                    <p className="font-heading text-lg md:text-xl text-brand mt-1.5 leading-snug">{t("story.plaqueTitle")}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ STATS RIBBON — image backed ============ */}
        <section className="relative w-full bg-surface rounded-none overflow-hidden">
          <div className="relative min-h-[340px] sm:min-h-[380px] md:min-h-[420px] flex items-center">
            <Image src="/site-images/wellness-page-1.jpg" alt="" aria-hidden fill sizes="100vw" className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-cream/82" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-cream/70 via-transparent to-cream/70" />
            <div className="relative z-10 w-full max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 py-12 md:py-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-9 gap-x-6 md:gap-x-8">
                {stats.map((s, i) => (
                  <Reveal key={s.l} variant="up" delay={i * 110}>
                    <div className={`${i > 0 ? "lg:border-s lg:border-brand/15 lg:ps-6" : ""}`}>
                      <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-none tabular-nums">
                        <CountUp value={s.v} />
                      </p>
                      <p className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] md:tracking-[0.26em] text-gold mt-3 leading-relaxed">{s.l}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ RESPONSIBILITY ============ */}
        <section className="w-full py-16 sm:py-24 md:py-28 lg:py-32 bg-cream rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="max-w-xl mb-10 md:mb-14">
              <Reveal variant="down">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-gold" />
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                    {t("responsibility.overline")}
                  </span>
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-[1.05]">
                  {t("responsibility.heading")}
                </h2>
              </Reveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-light-border border border-light-border rounded-none">
              {items.map((item, i) => (
                <Reveal key={item.title} variant="fade" delay={i * 90} className="h-full">
                  <article className="group h-full bg-surface p-6 md:p-8 flex flex-col transition-colors duration-500 hover:bg-white">
                    <span className="w-11 h-11 md:w-12 md:h-12 shrink-0 border border-gold/35 text-gold flex items-center justify-center rounded-none transition-colors duration-500 group-hover:bg-gold group-hover:text-white group-hover:border-gold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d={RESP_ICONS[i]} />
                      </svg>
                    </span>
                    <div className="flex-1 flex flex-col mt-4">
                      <h3 className="font-heading text-xl md:text-2xl text-brand leading-snug">{item.title}</h3>
                      <p className="text-[13px] md:text-sm text-body-gray font-light leading-relaxed mt-2">{item.desc}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal variant="fade" delay={200}>
              <div className="mt-10 md:mt-12 flex justify-center">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxe-btn inline-flex items-center justify-center bg-brand hover:bg-gold text-white text-[11px] md:text-xs uppercase tracking-[0.22em] px-9 py-4 rounded-none"
                >
                  {t("responsibility.cta")}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ SUSTAINABILITY ============ */}
        <section className="w-full py-16 sm:py-24 md:py-28 lg:py-32 bg-surface rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 grid lg:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="lg:col-span-5">
              <Reveal variant="down">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                    {t("sustainability.overline")}
                  </span>
                  <span className="w-8 h-px bg-gold" />
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-[1.05]">
                  {t("sustainability.heading")}
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal variant="fade" delay={120}>
                <div className="divide-y divide-light-border border-y border-light-border">
                  {targets.map((tg) => (
                    <div key={tg.l} className="py-6 md:py-7 flex items-start gap-5 md:gap-8">
                      <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-gold leading-none tabular-nums w-[5.5rem] sm:w-32 shrink-0">
                        <CountUp value={tg.v} />
                      </p>
                      <div className="flex-1 min-w-0 pt-1">
                        <p className="text-xs md:text-[13px] uppercase tracking-[0.18em] text-brand/80 leading-relaxed">{tg.l}</p>
                        <div className="mt-3 h-px w-full bg-light-border overflow-hidden">
                          <div className="h-px w-full bg-gold bar-grow" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal variant="fade" delay={160}>
            <div className="mt-14 md:mt-20 border-y border-light-border bg-warm-beige">
              <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 py-8 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-5 md:gap-8">
                <div className="flex items-center gap-4 text-center sm:text-start">
                  <span aria-hidden className="hidden sm:block w-10 h-px bg-gold" />
                  <div>
                    <p className="font-heading text-xl md:text-2xl text-brand leading-snug">{t("sustainability.heading")}</p>
                  </div>
                </div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxe-btn inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-white text-[11px] md:text-xs uppercase tracking-[0.22em] px-8 py-3.5 rounded-none shrink-0"
                >
                  {t("sustainability.cta")}
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <Partners />
      </main>
      <Footer />
    </>
  );
}
