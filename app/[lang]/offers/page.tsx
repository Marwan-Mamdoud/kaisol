"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Reveal from "../components/Reveal";

const BOOKING_URL = "https://bookings.kaisolhotels.com/105902";

/* Where each "while you wait" card leads, index-aligned with Offers.experiences.items */
const EXPERIENCE_HREFS = ["/wellness", "/dining", "/accommodation"];
const EXPERIENCE_IMAGES = [
  "/site-images/wellness-page-3.png",
  "/dining/pavilon.png",
  "/room1/image.png",
];

export default function OffersPage() {
  const t = useTranslations("Offers");
  const tButtons = useTranslations("Common.buttons");
  const locale = useLocale();
  const items = t.raw("experiences.items") as { title: string; desc: string }[];

  return (
    <>
      <Header />
      <main className="w-full bg-surface overflow-x-clip">
        {/* ============ HERO ============ */}
        <section className="relative w-full min-h-[62vh] md:min-h-[68vh] flex flex-col justify-end overflow-hidden bg-dark-bar rounded-none">
          <div className="absolute inset-0">
            <Image
              src="/gallary/photo-24.png"
              alt="Private jacuzzi overlooking the KaiSol resort"
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

        {/* ============ NO OFFERS RIGHT NOW ============ */}
        <section className="w-full py-16 sm:py-20 md:py-28 bg-surface rounded-none">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="up">
              <div className="relative mx-auto max-w-3xl text-center bg-white border border-light-border/80 px-6 sm:px-10 md:px-16 py-12 sm:py-14 md:py-16 rounded-none">
                {/* Gold corner accents */}
                <span
                  aria-hidden
                  className="absolute top-0 start-0 w-10 h-10 border-t border-s border-sand-gold/70 pointer-events-none"
                />
                <span
                  aria-hidden
                  className="absolute bottom-0 end-0 w-10 h-10 border-b border-e border-sand-gold/70 pointer-events-none"
                />

                <div className="flex items-center justify-center gap-3 mb-5">
                  <span className="w-8 h-px bg-sand-gold" />
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                    {t("notice.overline")}
                  </span>
                  <span className="w-8 h-px bg-sand-gold" />
                </div>

                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                  {t("notice.heading")}
                </h2>

                <div className="w-12 h-px bg-sand-gold/70 mx-auto my-6" />

                <p className="text-sm sm:text-base md:text-lg text-body-gray font-light leading-relaxed max-w-2xl mx-auto">
                  {t("notice.description")}
                </p>

                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxe-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-olive hover:bg-olive-hover text-white text-xs uppercase tracking-[0.25em] px-10 py-4 rounded-none"
                  >
                    <span>{t("notice.cta")}</span>
                  </a>
                  <a
                    href="#newsletter"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-dark-brown/80 hover:text-olive text-xs uppercase tracking-[0.2em] border border-light-border hover:border-olive px-10 py-4 rounded-none transition-all duration-300"
                  >
                    {tButtons("subscribe")}
                  </a>
                </div>

                <p className="mt-6 text-[11px] md:text-xs text-body-gray/80 font-light italic">
                  {t("notice.note")}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ WHILE YOU WAIT ============ */}
        <section className="w-full py-16 sm:py-20 md:py-28 bg-cream border-y border-light-border/80 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="right">
              <div className="max-w-2xl mb-10 md:mb-14">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-olive font-semibold">
                    {t("experiences.overline")}
                  </span>
                  <span className="w-8 h-px bg-sand-gold" />
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-dark-brown leading-tight">
                  {t("experiences.heading")}
                </h2>
                <p className="text-sm sm:text-base text-body-gray font-light mt-3">
                  {t("experiences.sub")}
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              {items.map((item, i) => (
                <Reveal
                  key={item.title}
                  variant={(["left", "up", "right"] as const)[i % 3]}
                  delay={(i % 3) * 150}
                >
                  <a
                    href={`/${locale}${EXPERIENCE_HREFS[i] ?? "/"}`}
                    className="luxe-card group flex flex-col h-full bg-white border border-light-border/80 hover:border-sand-gold rounded-none overflow-hidden"
                  >
                    <div className="luxe-img-zoom relative h-60 sm:h-64 bg-warm-beige overflow-hidden shrink-0">
                      <Image
                        src={EXPERIENCE_IMAGES[i % EXPERIENCE_IMAGES.length]}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover rounded-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bar/45 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute top-4 start-4 bg-dark-bar/90 text-cream px-3 py-1 text-[9px] uppercase tracking-[0.25em] border border-white/20 rounded-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="p-6 sm:p-7 flex flex-col flex-1">
                      <h3 className="font-heading uppercase text-xl md:text-2xl text-dark-brown font-normal mb-3 group-hover:text-olive transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-body-gray leading-relaxed mb-6 font-light flex-1">
                        {item.desc}
                      </p>
                      <span className="luxe-link-arrow inline-flex items-center gap-2 pt-5 border-t border-light-border/60 text-[11px] md:text-xs uppercase tracking-[0.2em] text-dark-brown group-hover:text-olive transition-colors">
                        <span>{tButtons("explore")}</span>
                        <span className="arrow">→</span>
                      </span>
                    </div>
                  </a>
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