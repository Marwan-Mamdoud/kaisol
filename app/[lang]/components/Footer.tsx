"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Reveal from "./Reveal";
import AppBadges from "./AppBadges";

const LOGO_URL = "/LogoWide.svg";

const SUSTAINABILITY_URL =
  "https://support.kaisolhotels.com/Sustainability%20Report%202025%20and%20General%20Policy.pdf";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kaisolromanceresort/",
    path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/KaiSolRomanceResort",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@kaisolromanceresort",
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

  const companyLinks = [
    { label: t("careers"), href: "#" },
    { label: tNav("sustainability"), href: SUSTAINABILITY_URL },
    { label: "Responsibility", href: "#" },
    { label: t("faqs"), href: "#" },
    { label: t("contactUs"), href: "#" },
    { label: t("privacyPolicy"), href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: t("termsConditions"), href: "#" },
  ];

  const pageLinks = [
    { label: t("aboutUs"), href: `/${locale}/about` },
    { label: tNav("accommodation"), href: `/${locale}/accommodation` },
    { label: tNav("dining"), href: `/${locale}/dining` },
    { label: tNav("wellness"), href: `/${locale}/wellness` },
    { label: t("experiences"), href: "#" },
    { label: t("offers"), href: `/${locale}/offers` },
    { label: tNav("events"), href: `/${locale}/events` },
    { label: tNav("gallery"), href: `/${locale}/gallery` },
  ];

  return (
    <footer className="w-full bg-cream text-brand rounded-none overflow-hidden">
      {/* Top band: brand + newsletter */}
      <div className="w-full bg-cream ">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <Reveal variant="left" className="lg:col-span-5">
              <div className="space-y-4">
                <a href={`/${locale}`} className="inline-block group">
                  <Image
                    alt="KaiSol Hotels & Resorts"
                    src={LOGO_URL}
                    width={782}
                    height={227}
                    className="h-12 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </a>
                <p className="font-heading text-lg md:text-xl text-brand font-light italic leading-relaxed max-w-sm">
                  “{tLux("quote")}”
                </p>
                <p className="text-xs md:text-sm text-brand font-light leading-relaxed max-w-sm">
                  {tLux("desc")}
                </p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={150} className="lg:col-span-7">
              <div
                id="newsletter"
                className="relative scroll-mt-24 py-2"
              >
                <h4 className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-3">
                  Newsletter Signup
                </h4>
                <div className="relative group">
                  <form
                    className="flex flex-col min-[480px]:flex-row items-end gap-0"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="relative flex-1 w-full">
                      <input
                        aria-label="Email Address"
                        type="email"
                        required
                        placeholder={t("emailPlaceholder")}
                        className="w-full bg-transparent border-0 border-b border-gold px-1 py-3 text-sm text-brand placeholder:text-muted focus:outline-none focus:border-gold transition-colors rounded-none min-w-0"
                      />
                      <span
                        aria-hidden
                        className="absolute left-0 bottom-0 h-px w-0 bg-gold transition-all duration-500 group-focus-within:w-full"
                      />
                    </div>
                    <button
                      type="submit"
                      className="luxe-btn bg-transparent hover:bg-gold text-brand hover:text-cream text-[11px] uppercase tracking-[0.25em] px-4 py-3 border-0 border-b border-gold hover:border-gold transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                      {tButtons("subscribe")}
                    </button>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Middle band: link columns */}
      <div className="w-full bg-cream">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 py-10 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-6">

            {/* Pages */}
            <Reveal variant="up" delay={200}>
              <div className="space-y-4">
                <h4 className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-gold font-medium">
                  {tLux("explore")}
                </h4>
                <ul className="space-y-2.5 text-xs md:text-sm text-brand font-light">
                  {pageLinks.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="luxe-link-arrow inline-flex items-center gap-2 hover:text-gold hover:ps-1 transition-all duration-300"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

             {/* Company */}
            <Reveal variant="up" delay={100}>
              <div className="space-y-4">
                <h4 className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-gold font-medium">
                  {t("contactUs")}
                </h4>
                <ul className="space-y-2.5 text-xs md:text-sm text-brand font-light">
                  {companyLinks.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="luxe-link-arrow inline-flex items-center gap-2 hover:text-gold hover:ps-1 transition-all duration-300"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Contact */}
            <Reveal variant="up" delay={300}>
              <div className="space-y-4">
                <h4 className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-muted font-normal">
                  {tLux("contactTitle")}
                </h4>
                <ul className="space-y-2.5 text-xs md:text-sm text-brand font-normal">
                  <li className="flex items-start gap-1.5">
                    <svg className="w-4 h-4 text-brand shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    <span className=" transition-colors cursor-default">{tLux("address")}</span>
                  </li>
                  <li>
                    <a href={`mailto:${tLux("email")}`} className="flex items-center gap-1.5 text-brand hover:text-gold transition-colors break-all">
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
                      </svg>
                      {tLux("email")}
                    </a>
                  </li>
                  <li>
                    <a href="tel:+201273299991" className="flex items-center gap-1.5 text-brand hover:text-gold transition-colors font-normal">
                      <svg className="w-4 h-4 text-brand shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5c0 8 8 16 16 16l2-4-4-2-2 2c-2.5-1.2-5.8-4.5-7-7l2-2-2-4-5 1z" />
                      </svg>
                      <span dir="ltr">{t("phone")}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Follow + App */}
            <Reveal variant="up" className="ml-2" delay={400}>
              <div className="space-y-4">
                <h4 className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-gold font-medium">
                  {t("followUs")}
                </h4>
                <div className="flex items-center gap-2.5">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center text-brand hover:text-gold hover:-translate-y-0.5 transition-all duration-300 rounded-none"
                    >
                      <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
                <div className="pt-2 space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                    Download the app
                  </span>
                  <AppBadges compact />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full bg-cream border-t border-gold/20">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 py-5 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] md:text-xs text-brand text-center sm:text-start">
          <span>{t("copyright")}</span>
          <span className="text-brand">KaiSol Hotels & Resorts · Sahl Hasheesh</span>
        </div>
      </div>
    </footer>
  );
}
