"use client";

const APP_STORE = "https://apps.apple.com/eg/app/kaisol-hotels-resorts/id6740333413";
const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.upsell.mobileapp.kai&hl=en&pli=1";

function AppleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.75 7.22-.58 1.5-1.34 2.98-2.8 4zm-3.1-16.3c.73-.88 1.22-2.1 1.09-3.32-1.05.04-2.32.7-3.07 1.58-.67.78-1.26 2.03-1.1 3.22 1.16.09 2.36-.58 3.08-1.48z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.61 2.81A1.9 1.9 0 0 0 3 4.22v15.56c0 .53.18 1.02.48 1.41l9.18-9.19L3.61 2.81zm10.4 8.46l2.57-2.57L6.3 2.79c-.4-.23-.84-.34-1.28-.34l8.99 8.82zm0 1.46l-8.99 8.82c.44 0 .88-.11 1.28-.34l10.28-5.91-2.57-2.57zm1.24-1.24l2.96 2.96c.52-.29.89-.84.89-1.45s-.37-1.16-.89-1.45l-2.96-2.96-2.48 2.48 2.48 2.48-.48.48.48-.48z" />
    </svg>
  );
}

export default function AppBadges({ compact = false }: { compact?: boolean }) {
  const base =
    "group inline-flex items-center gap-3 bg-brand text-cream px-4 py-2.5 rounded-none border border-brand hover:bg-gold hover:border-gold transition-all duration-300 min-w-[150px]";

  return (
    <div className={`flex flex-wrap gap-2 ${compact ? "" : "mt-3"}`}>
      <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className={base}>
        <AppleIcon />
        <div className="flex flex-col leading-none">
          <span className="text-[8px] uppercase tracking-[0.2em] text-cream/70">Download on the</span>
          <span className="text-sm font-medium tracking-wide">App Store</span>
        </div>
      </a>
      <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className={base}>
        <GoogleIcon />
        <div className="flex flex-col leading-none">
          <span className="text-[8px] uppercase tracking-[0.2em] text-cream/70">Get it on</span>
          <span className="text-sm font-medium tracking-wide">Google Play</span>
        </div>
      </a>
    </div>
  );
}