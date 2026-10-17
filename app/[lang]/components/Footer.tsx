"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Reveal from "./Reveal";

const LOGO_URL = "/kaisol_hero_logo.svg";

const socials = [
  {
    label: "Instagram",
    href:"https://www.instagram.com/kaisolromanceresort/",
    path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
  },
  {
    label: "Facebook",
    href:"https://www.facebook.com/KaiSolRomanceResort",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "TikTok",
    href:"https://www.tiktok.com/@kaisolromanceresort",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/kaisol-hotels-resorts/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

export default function Footer() {
  const t = useTranslations("Common.footer");
  const tLux = useTranslations("Common.footerLuxe");
  const tNav = useTranslations("Common.nav");
  const tButtons = useTranslations("Common.buttons");
  const locale = useLocale();

  const exploreLinks = [
    { key: "about", href: "/about" },
    { key: "dining", href: "/dining" },
    { key: "wellness", href: "/wellness" },
    { key: "gallery", href: "/gallery" },
    { key: "events", href: "/events" },
  ];
  const sanctuaryLinks = [
    { key: "accommodation", href: "/accommodation" },
    { key: "offers", href: "/offers" },
    { key: "home", href: "/" },
  ];

  return (
    <footer className="w-full bg-dark-bar text-cream rounded-none overflow-hidden">
      {/* Giant wordmark */}
      <Reveal variant="fade">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 pt-12 md:pt-16 select-none" aria-hidden>
          <div className="footer-giant font-heading font-light uppercase text-center leading-none tracking-[0.08em] text-[19vw] lg:text-[240px] cursor-default">
            {tLux("giantWord")}
          </div>
        </div>
      </Reveal>

      <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 pb-10 md:pb-14">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-4 md:pt-8 pb-12 md:pb-16 border-b border-white/10">
          {/* Brand */}
          <Reveal variant="left" className="lg:col-span-4">
            <div className="space-y-5">
              <a href={`/${locale}`} className="inline-block group">
                <Image
                  alt="KaiSol Hotels & Resorts"
                  src={LOGO_URL}
                  width={140}
                  height={109}
                  className="h-14 md:h-16 w-auto object-contain brightness-110 transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </a>
              <p className="font-heading text-xl md:text-2xl text-cream/90 font-light italic leading-relaxed max-w-xs">
                “{tLux("quote")}”
              </p>
              <p className="text-xs md:text-sm text-cream/55 font-light leading-relaxed max-w-xs">
                {tLux("desc")}
              </p>
              <div className="flex items-center gap-3 pt-1">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="blank"
                    className="w-10 h-10 flex items-center justify-center border border-white/15 text-cream/60 hover:text-dark-bar hover:bg-sand-gold hover:border-sand-gold hover:-translate-y-1 transition-all duration-300 rounded-none"
                  >
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right column: link columns on top, concierge block below */}
          <div className="lg:col-span-8 flex flex-col gap-10 md:gap-12">
            <div className="grid grid-cols-2 gap-8 md:gap-10">
          {/* Explore */}
          <Reveal variant="up" delay={150}>
            <div className="space-y-4 md:space-y-5">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-sand-gold font-medium flex items-center gap-2">
                <span className="w-5 h-px bg-sand-gold/60 inline-block" />
                {tLux("explore")}
              </h4>
              <ul className="space-y-3 text-xs md:text-sm text-cream/65 font-light">
                {exploreLinks.map((l) => (
                  <li key={l.key}>
                    <a
                      href={`/${locale}${l.href}`}
                      className="luxe-link-arrow inline-flex items-center gap-2 hover:text-white hover:ps-1 transition-all duration-300"
                    >
                      {tNav(l.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Sanctuaries */}
          <Reveal variant="up" delay={300}>
            <div className="space-y-4 md:space-y-5">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-sand-gold font-medium flex items-center gap-2">
                <span className="w-5 h-px bg-sand-gold/60 inline-block" />
                {tLux("sanctuaries")}
              </h4>
              <ul className="space-y-3 text-xs md:text-sm text-cream/65 font-light">
                {sanctuaryLinks.map((l) => (
                  <li key={l.key}>
                    <a
                      href={`/${locale}${l.href}`}
                      className="luxe-link-arrow inline-flex items-center gap-2 hover:text-white hover:ps-1 transition-all duration-300"
                    >
                      {tNav(l.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
            </div>

          {/* Concierge Atelier — full width below the link columns */}
          <Reveal variant="up" delay={200}>
            <div className="pt-10 md:pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <div>
                <h4 className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-sand-gold font-medium flex items-center gap-2 mb-4">
                  <span className="w-5 h-px bg-sand-gold/60 inline-block" />
                  {tLux("contactTitle")}
                </h4>
                <ul className="space-y-2.5 text-xs md:text-sm text-cream/65 font-light">
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-sand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    {tLux("address")}
                  </li>
                  <li>
                    <a href={`mailto:${tLux("email")}`} className="flex items-center gap-2.5 text-sand-gold hover:text-white transition-colors break-all">
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
                      </svg>
                      {tLux("email")}
                    </a>
                  </li>
                  <li>
                    <a href="tel:+201273299991" className="flex items-center gap-2.5 hover:text-white transition-colors font-medium text-cream/90">
                      <svg className="w-4 h-4 text-sand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5c0 8 8 16 16 16l2-4-4-2-2 2c-2.5-1.2-5.8-4.5-7-7l2-2-2-4-5 1z" />
                      </svg>
                      <span dir="ltr">{t("phone")}</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="newsletter" className="bg-white/[0.04] border border-white/12 p-4 md:p-5 rounded-none hover:border-sand-gold/50 transition-colors duration-500 scroll-mt-24">
                <span className="text-[11px] uppercase tracking-[0.25em] text-sand-gold font-semibold block">
                  {tLux("circleTitle")}
                </span>
                <p className="font-heading text-lg text-cream font-light mt-1 mb-3">
                  {tLux("circleSub")}
                </p>
                <form
                  className="flex flex-col min-[480px]:flex-row gap-0 border border-white/20 rounded-none focus-within:border-sand-gold/60 transition-colors"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    aria-label="Email Address"
                    type="email"
                    required
                    placeholder={t("emailPlaceholder")}
                    className="flex-1 bg-white/5 border-none px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none rounded-none min-w-0"
                  />
                  <button
                    type="submit"
                    className="luxe-btn bg-olive hover:bg-olive-hover text-white text-[11px] uppercase tracking-[0.25em] px-6 py-3 border-none rounded-none cursor-pointer whitespace-nowrap"
                  >
                    {tButtons("subscribe")}
                  </button>
                </form>
              </div>
            </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom bar */}
        <Reveal variant="fade">
          <div className="pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] md:text-xs text-cream/40 gap-4 text-center md:text-start">
            <span>{t("copyright")}</span>
            <div className="flex items-center gap-4 md:gap-6">
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                {t("privacyPolicy")}
              </a>
              <span className="text-white/20">|</span>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                {t("termsConditions")}
              </a>
              <span className="text-white/20 hidden sm:inline">|</span>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hidden sm:inline-flex items-center gap-2 text-sand-gold hover:text-white uppercase tracking-[0.2em] text-[10px] transition-colors cursor-pointer group"
              >
                {tLux("backToTop")}
                <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5M6 11l6-6 6 6" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
