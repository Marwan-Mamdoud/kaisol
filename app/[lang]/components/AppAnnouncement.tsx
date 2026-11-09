"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import AppBadges from "./AppBadges";

const STORAGE_KEY = "kaisol_app_announce_seen";

export default function AppAnnouncement() {
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  const isAr = locale === "ar";
  const title = isAr ? "خصم 10% على إقامتك الأولى" : "10% off your first stay";
  const body = isAr
    ? "سجّل الدخول عبر تطبيق KaiSol للاستفادة من خصم الترحيب."
    : "Sign in through the KaiSol app to unlock your welcome discount.";

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY) === "1") return;
    const timer = window.setTimeout(() => setVisible(true), 30000);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = (persist = false) => {
    setVisible(false);
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {}
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-8 end-4 z-[60] w-[calc(100vw-2rem)] max-w-sm animate-announce-in"
    >
      <div className="relative bg-cream border border-gold rounded-none overflow-hidden">
        <span aria-hidden className="absolute top-0 inset-x-0 h-1 bg-gold" />
        <button
          type="button"
          aria-label="Close"
          onClick={() => dismiss(true)}
          className="absolute top-4 end-4 w-8 h-8 flex items-center justify-center text-brand hover:text-gold transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="p-6 md:p-7">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold font-semibold">
              {isAr ? "عرض خاص" : "Special offer"}
            </span>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl text-brand leading-tight mb-3">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-brand font-light leading-relaxed mb-5 max-w-[28ch]">
            {body}
          </p>
          <AppBadges compact />
          <label className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brand cursor-pointer">
            <input
              type="checkbox"
              className="w-3.5 h-3.5 accent-gold cursor-pointer"
              onChange={(e) => {
                if (e.target.checked) dismiss(true);
              }}
            />
            {isAr ? "عدم الإظهار مجدداً" : "Don't show again"}
          </label>
        </div>
      </div>
    </div>
  );
}