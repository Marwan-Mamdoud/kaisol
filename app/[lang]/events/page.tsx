"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Reveal from "../components/Reveal";

const RESERVE_TEL = "tel:+201273299991";
const GALLERY = [
  "/event/image.png",
  "/event/image-2.png",
  "/event/image-3.png",
  "/event/image-4.png",
  "/event/image-5.png",
  "/event/image-6.png",
];

const OCC_ICONS = [
  "M4 8h16v11a1 1 0 01-1 1H5a1 1 0 01-1-1V8zM8 8V5h8v3",
  "M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z",
  "M4 5h16v10H8l-4 4V5zM8 10h8M8 13h5",
  "M12 4L2 9l10 5 10-5-10-5zM6 11.5V16M18 11.5V16M9 16.5h6",
];

export default function EventsPage() {
  const t = useTranslations("Events");
  const items = t.raw("occasions.items") as { title: string; desc: string }[];

  return (
    <>
      <Header />
      <main className="w-full bg-surface overflow-x-clip">
        {/* ============ HERO ============ */}
        <section className="relative w-full min-h-[62vh] md:min-h-[68vh] flex flex-col justify-end overflow-hidden bg-dark-bar rounded-none">
          <div className="absolute inset-0">
            <Image
              src="/event/image.png"
              alt="KaiSol Romance Conference hall"
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

        {/* ============ INTRO / VENUE ============ */}
        <section className="w-full py-16 sm:py-24 md:py-28 lg:py-36 bg-surface rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
              <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-8">
                <Reveal variant="down">
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                      {t("intro.overline")}
                    </span>
                    <span className="w-12 h-px bg-sand-gold" />
                  </div>
                </Reveal>
                <Reveal variant="up" delay={150}>
                  <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight tracking-tight">
                    {t("intro.heading")}
                  </h2>
                </Reveal>
                <Reveal variant="left" delay={300}>
                  <p className="text-body-gray text-[15px] sm:text-base md:text-lg font-light leading-relaxed">
                    {t("intro.text")}
                  </p>
                </Reveal>
                <Reveal variant="up" delay={450}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-6 border-t border-light-border/80">
                    {[
                      { l: t("intro.spec1label"), ti: t("intro.spec1title"), d: t("intro.spec1desc") },
                      { l: t("intro.spec2label"), ti: t("intro.spec2title"), d: t("intro.spec2desc") },
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
                      href={RESERVE_TEL}
                      className="luxe-btn inline-flex items-center justify-center gap-2 bg-dark-brown hover:bg-olive text-white text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-none"
                    >
                      <span>{t("intro.cta")}</span>
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-6 relative mt-6 lg:mt-0 pb-8 sm:pb-0">
                <Reveal variant="right" delay={200} y={40}>
                  <div className="luxe-img-zoom relative w-full aspect-[4/5] max-h-[560px] lg:max-h-none border border-light-border shadow-2xl bg-warm-beige rounded-none overflow-hidden group">
                    <Image
                      src="/event/image-2.png"
                      alt="Conference hall seating"
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
                      src="/event/image-3.png"
                      alt="Conference hall detail"
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

        {/* ============ OCCASIONS ============ */}
        <section className="w-full py-16 sm:py-20 md:py-28 bg-cream border-y border-light-border/80 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="down">
              <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="w-8 h-px bg-sand-gold" />
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                    {t("occasions.overline")}
                  </span>
                  <span className="w-8 h-px bg-sand-gold" />
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                  {t("occasions.heading")}
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
              {items.map((item, i) => (
                <Reveal
                  key={item.title}
                  variant={["left", "up", "up", "right"][i] as "left" | "up" | "right"}
                  delay={i * 130}
                >
                  <div className="luxe-card bg-white border border-light-border/80 hover:border-sand-gold p-6 md:p-7 h-full rounded-none group text-center">
                    <span className="w-12 h-12 mx-auto flex items-center justify-center bg-cream text-olive group-hover:bg-olive group-hover:text-white transition-all duration-500 mb-5">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={OCC_ICONS[i % OCC_ICONS.length]} />
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
            </div>
          </div>
        </section>

        {/* ============ GALLERY ============ */}
        <section className="w-full py-16 sm:py-20 md:py-28 bg-surface rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="left">
              <div className="max-w-xl mb-10 md:mb-14">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                    {t("gallery.overline")}
                  </span>
                  <span className="w-8 h-px bg-sand-gold" />
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                  {t("gallery.heading")}
                </h2>
                <p className="text-sm sm:text-base text-body-gray font-light mt-3">
                  {t("gallery.sub")}
                </p>
              </div>
            </Reveal>
            {/* Editorial collage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
              {/* Feature */}
              <Reveal variant="left" className="lg:col-span-7" delay={100}>
                <div className="luxe-img-zoom group relative h-[320px] sm:h-[420px] md:h-[540px] lg:h-[600px] bg-warm-beige border border-light-border/60 hover:border-sand-gold rounded-none overflow-hidden transition-colors duration-500">
                  <Image
                    src={GALLERY[0]}
                    alt="KaiSol conference hall — grand view"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bar/45 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 start-4 bg-dark-bar/80 backdrop-blur-sm text-sand-gold px-3 py-1 text-[10px] tracking-[0.25em] font-medium border border-sand-gold/40 rounded-none">
                    01
                  </span>
                  <span className="absolute bottom-4 start-5 font-heading italic font-light text-cream text-lg md:text-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {t("gallery.heading")}
                  </span>
                </div>
              </Reveal>
              {/* Stacked pair */}
              <div className="lg:col-span-5 grid grid-rows-2 gap-4 md:gap-5 lg:h-[600px]">
                {[GALLERY[1], GALLERY[2]].map((src, k) => (
                  <Reveal key={src} variant="right" delay={200 + k * 150} className="h-full">
                    <div className="luxe-img-zoom group relative h-[240px] sm:h-[280px] lg:h-full bg-warm-beige border border-light-border/60 hover:border-sand-gold rounded-none overflow-hidden transition-colors duration-500">
                      <Image
                        src={src}
                        alt={`KaiSol conference hall — photo ${k + 2}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bar/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute top-3 start-3 bg-dark-bar/80 backdrop-blur-sm text-sand-gold px-2.5 py-1 text-[10px] tracking-[0.25em] font-medium border border-sand-gold/40 rounded-none">
                        {String(k + 2).padStart(2, "0")}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            {/* Bottom trio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 mt-4 md:mt-5">
              {[GALLERY[3], GALLERY[4], GALLERY[5]].map((src, k) => (
                <Reveal
                  key={src}
                  variant={["left", "up", "right"][k] as "left" | "up" | "right"}
                  delay={k * 150}
                  className={k === 0 ? "lg:col-span-5" : k === 1 ? "lg:col-span-4" : "lg:col-span-3 sm:col-span-2"}
                >
                  <div className="luxe-img-zoom group relative h-[240px] md:h-[280px] bg-warm-beige border border-light-border/60 hover:border-sand-gold rounded-none overflow-hidden transition-colors duration-500">
                    <Image
                      src={src}
                      alt={`KaiSol conference hall — photo ${k + 4}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bar/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-3 start-3 bg-dark-bar/80 backdrop-blur-sm text-sand-gold px-2.5 py-1 text-[10px] tracking-[0.25em] font-medium border border-sand-gold/40 rounded-none">
                      {String(k + 4).padStart(2, "0")}
                    </span>
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
