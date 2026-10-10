"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

const BOOKING_URL = "https://bookings.kaisolhotels.com/105902";

export default function Partners() {
  const t = useTranslations("Home.luxe.ctaBand");

  return (
    <section className="relative w-full py-20 sm:py-24 md:py-32 bg-dark-bar rounded-none overflow-hidden">
      <Image
        src="/home-page-images/yellow-reservation.png"
        alt="KaiSol lobby at night"
        fill
        sizes="100vw"
        loading="eager"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bar via-dark-bar/60 to-dark-bar" />
      <div className="relative z-10 max-w-[900px] mx-auto px-5 sm:px-6 text-center">
        <Reveal variant="down">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-sand-gold" />
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-sand-gold font-semibold">
              {t("overline")}
            </span>
            <span className="w-8 h-px bg-sand-gold" />
          </div>
        </Reveal>
        <Reveal variant="up" delay={150}>
          <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            {t("heading")}
          </h2>
        </Reveal>
        <Reveal variant="fade" delay={300}>
          <p className="text-sm sm:text-base md:text-lg text-cream/75 font-light mt-4 max-w-2xl mx-auto">
            {t("sub")}
          </p>
        </Reveal>
        <Reveal variant="zoom" delay={450}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="luxe-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-olive hover:bg-olive-hover text-white text-xs uppercase tracking-[0.25em] px-10 py-4 rounded-none"
            >
              <span>{t("cta")}</span>
            </a>
            <a
              href={`tel:${t("phone").replace(/\s/g, "")}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-cream/85 hover:text-sand-gold text-xs uppercase tracking-[0.2em] border border-white/25 hover:border-sand-gold px-10 py-4 rounded-none transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5c0 8 8 16 16 16l2-4-4-2-2 2c-2.5-1.2-5.8-4.5-7-7l2-2-2-4-5 1z" />
              </svg>
              <span dir="ltr">{t("phone")}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
