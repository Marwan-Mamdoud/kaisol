"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";

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

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href={`/${locale}`} className="flex-shrink-0">
            <div className="font-heading text-dark-brown">
              <div className="text-xl font-light tracking-wide">KaiSol</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-body-gray">
                Romance Resort
              </div>
              <div className="text-[8px] tracking-[0.15em] text-olive">
                — Sahl Hasheesh —
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={`/${locale}${link.href}`}
                className="text-sm font-medium text-nav-text hover:text-dark-brown transition-colors"
              >
                {t(link.key as string)}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() =>
                  switchLocale(locale === "en" ? "ar" : "en")
                }
                className="flex items-center gap-1 text-sm font-medium text-nav-text hover:text-dark-brown transition-colors"
              >
                {locale === "en" ? "EN" : "AR"}
                <svg
                  className="w-3 h-3"
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
            </div>

            {/* Reserve Button */}
            <a
              href="#"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-olive text-white text-xs font-semibold uppercase tracking-widest hover:bg-olive-hover transition-colors rounded-none"
            >
              {tButtons("reserve")}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-nav-text"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-light-border">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={`/${locale}${link.href}`}
                className="block text-sm font-medium text-nav-text hover:text-dark-brown transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {t(link.key as string)}
              </a>
            ))}
            <a
              href="#"
              className="block w-full text-center px-6 py-2.5 bg-olive text-white text-xs font-semibold uppercase tracking-widest hover:bg-olive-hover transition-colors rounded-none mt-4"
            >
              {tButtons("reserve")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
