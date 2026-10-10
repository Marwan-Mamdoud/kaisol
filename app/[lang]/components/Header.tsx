"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const LOGO_URL = "/kaisol_hero_logo.svg";

const BOOKING_URL = "https://bookings.kaisolhotels.com/105902";

const navLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "suites", href: "#" },
  { key: "dining", href: "/dining" },
  { key: "wellness", href: "/wellness" },
  { key: "gallery", href: "/gallery" },
  { key: "accommodation", href: "#" },
  { key: "offers", href: "/offers" },
  { key: "events", href: "/events" },
];

export default function Header() {
  const t = useTranslations("Common.nav");
  const tButtons = useTranslations("Common.buttons");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  /* Full nav appears when it fits (Arabic labels need more room).
     Excess links collapse into a "More" menu measured live. */
  const deskBp = locale === "ar" ? 1280 : 1100;
  const deskNavOn = locale === "ar" ? "min-[1280px]:flex" : "min-[1100px]:flex";
  const deskNavOff =
    locale === "ar" ? "min-[1280px]:hidden" : "min-[1100px]:hidden";

  const linkCls =
    "whitespace-nowrap shrink-0 text-[10px] 2xl:text-[11px] uppercase tracking-[0.15em] 2xl:tracking-[0.2em] rtl:tracking-normal";

  const navRef = useRef<HTMLElement>(null);
  const sizerRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(navLinks.length);
  const [moreOpen, setMoreOpen] = useState(false);

  useLayoutEffect(() => {
    const compute = () => {
      const sizer = sizerRef.current;
      const nav = navRef.current;
      if (!sizer || !nav || nav.clientWidth === 0) return;
      const kids = Array.from(sizer.children) as HTMLElement[];
      const gap =
        parseFloat(getComputedStyle(sizer).columnGap || "16") || 16;
      const avail = nav.clientWidth;
      const widthOf = (k: HTMLElement) => k.offsetWidth + gap;
      // Pass 1: try to fit everything
      let used = 0;
      let n = 0;
      for (const k of kids) {
        if (used + widthOf(k) <= avail + gap) {
          used += widthOf(k);
          n++;
        } else break;
      }
      if (n < kids.length) {
        // Pass 2: reserve room for the "More" button and recount
        used = 90;
        n = 0;
        for (const k of kids) {
          if (used + widthOf(k) <= avail + gap) {
            used += widthOf(k);
            n++;
          } else break;
        }
        n = Math.max(n, 0);
      }
      setVisibleCount(n);
    };
    compute();
    window.addEventListener("resize", compute);
    document.fonts?.ready.then(compute).catch(() => {});
    const t = setTimeout(compute, 600);
    return () => {
      window.removeEventListener("resize", compute);
      clearTimeout(t);
    };
  }, [locale]);

  /* Close the "More" menu on outside click / Escape */
  useEffect(() => {
    if (!moreOpen) return;
    const onDown = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [moreOpen]);

  /* Close the mobile menu if resized up to desktop width */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= deskBp) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [deskBp]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/10 ${
          scrolled
            ? "bg-dark-bar/95 backdrop-blur-md shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
            : "bg-dark-bar/90 backdrop-blur-md"
        }`}
      >
        <div className="h-16 md:h-20 max-w-[1600px] mx-auto px-4 md:px-6 2xl:px-10 flex items-center justify-between gap-2 md:gap-4">
          {/* Brand */}
          <a
            href={`/${locale}`}
            className="flex items-center gap-3 md:gap-4 group py-2 min-w-0"
          >
            <Image
              alt="KaiSol Hotels & Resorts"
              src={LOGO_URL}
              width={120}
              height={94}
              className="h-8 md:h-10 w-auto object-contain brightness-110 transition-all duration-300 group-hover:opacity-90 group-hover:scale-[1.03] shrink-0"
            />
            <div className="hidden 2xl:flex flex-col border-s border-white/20 ps-4">
              <span className="font-heading text-base text-cream tracking-[0.3em] uppercase font-light leading-none">
                Romance Resort
              </span>
              <span className="text-[9px] text-sand-gold tracking-[0.35em] uppercase mt-1">
                Sahl Hasheesh · Red Sea
              </span>
            </div>
          </a>

          {/* Desktop nav — excess links collapse into "More" */}
          <nav
            ref={navRef}
            className={`hidden flex-1 min-w-0 items-center justify-center gap-4 2xl:gap-5 ${deskNavOn}`}
          >
            {navLinks.slice(0, visibleCount).map((link, i) => (
              <a
                key={link.key}
                href={`/${locale}${link.href}`}
                aria-current={i === 0 ? "page" : undefined}
                className={`${linkCls} transition-all duration-300 hover:text-white hover:-translate-y-px ${
                  i === 0
                    ? "text-cream border-b border-sand-gold pb-1"
                    : "text-cream/70"
                }`}
              >
                {t(link.key)}
              </a>
            ))}
            {visibleCount < navLinks.length && (
              <div className="relative shrink-0" ref={moreRef}>
                <button
                  type="button"
                  onClick={() => setMoreOpen((v) => !v)}
                  aria-expanded={moreOpen}
                  aria-haspopup="true"
                  className={`${linkCls} text-cream/70 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5 py-1`}
                >
                  <span>{locale === "ar" ? "المزيد" : "More"}</span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      moreOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {moreOpen && (
                  <div className="absolute end-0 top-full mt-3 min-w-56 bg-dark-bar/98 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] py-2 z-50">
                    {navLinks.slice(visibleCount).map((link) => (
                      <a
                        key={link.key}
                        href={`/${locale}${link.href}`}
                        onClick={() => setMoreOpen(false)}
                        className="block px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] rtl:tracking-normal text-cream/70 hover:text-sand-gold hover:bg-white/5 hover:ps-6 transition-all duration-300 whitespace-nowrap"
                      >
                        {t(link.key)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </nav>
          {/* Hidden sizer — mirrors link styles for overflow measurement */}
          <div
            ref={sizerRef}
            aria-hidden
            className="absolute invisible top-0 start-0 flex items-center gap-4 2xl:gap-5 pointer-events-none whitespace-nowrap"
          >
            {navLinks.map((link) => (
              <span key={link.key} className={linkCls}>
                {t(link.key)}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <div className="hidden sm:flex items-center text-[10px] tracking-[0.2em] text-cream/60">
              <button
                type="button"
                onClick={() => switchLocale("en")}
                className={`hover:text-cream transition-colors cursor-pointer ${
                  locale === "en" ? "text-cream font-semibold" : "font-normal"
                }`}
              >
                EN
              </button>
              <span className="mx-2 text-white/20">|</span>
              <button
                type="button"
                onClick={() => switchLocale("ar")}
                className={`hover:text-cream transition-colors cursor-pointer ${
                  locale === "ar" ? "text-cream font-semibold" : "font-normal"
                }`}
              >
                AR
              </button>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="luxe-btn hidden sm:inline-flex items-center justify-center bg-olive hover:bg-olive-hover text-white text-[10px] md:text-[11px] uppercase tracking-[0.2em] px-4 md:px-6 py-2.5 md:py-3.5 border border-sand-gold/40 hover:border-white rounded-none whitespace-nowrap"
            >
              <span>{tButtons("reserve")}</span>
            </a>
            <button
              aria-label="Toggle Mobile Menu"
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 text-cream hover:text-sand-gold hover:rotate-90 transition-all duration-300 cursor-pointer ${deskNavOff}`}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${deskNavOff} ${
            mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-5 py-4 space-y-1 bg-dark-bar/98 backdrop-blur-xl border-t border-white/10 overflow-y-auto max-h-[80vh]">
            {navLinks.map((link, i) => (
              <a
                key={link.key}
                href={`/${locale}${link.href}`}
                onClick={() => setMobileOpen(false)}
                style={{ transitionDelay: `${i * 40}ms` }}
                className={`block text-xs uppercase tracking-[0.22em] py-3 border-b border-white/5 transition-all duration-500 hover:text-sand-gold hover:ps-2 ${
                  mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                } ${i === 0 ? "text-cream" : "text-cream/70"}`}
              >
                {t(link.key)}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => switchLocale("en")}
                className={`text-xs tracking-[0.2em] cursor-pointer ${locale === "en" ? "text-sand-gold font-semibold" : "text-cream/60"}`}
              >
                EN
              </button>
              <span className="text-white/20">|</span>
              <button
                type="button"
                onClick={() => switchLocale("ar")}
                className={`text-xs tracking-[0.2em] cursor-pointer ${locale === "ar" ? "text-sand-gold font-semibold" : "text-cream/60"}`}
              >
                AR
              </button>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center px-6 py-3 bg-olive text-white text-[11px] uppercase tracking-[0.25em] rounded-none"
              >
                {tButtons("reserve")}
              </a>
            </div>
          </nav>
        </div>
      </header>
      {/* Spacer so fixed header doesn't overlap hero */}
      <div className="h-16 md:h-20 bg-dark-bar" />
    </>
  );
}
