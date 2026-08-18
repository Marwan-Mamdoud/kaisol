"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Common.footer");
  const tButtons = useTranslations("Common.buttons");

  return (
    <footer className="bg-cream">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo and Tagline */}
          <div className="max-w-md">
            <div className="font-heading text-dark-brown mb-6">
              <div className="text-2xl font-light tracking-wide">KaiSol</div>
              <div className="text-xs tracking-[0.2em] text-body-gray">
                — Sahl Hasheesh —
              </div>
            </div>
            <p className="font-heading text-xl font-light text-body-gray leading-relaxed italic">
              {t("tagline")}
            </p>
          </div>

          {/* Newsletter */}
          <div className="max-w-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-dark-brown mb-4">
              {t("newsletter")}
            </h3>
            <div className="flex items-end border-b border-light-border">
              <svg className="w-4 h-4 text-body-gray mr-2 mb-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1 py-3 bg-transparent text-sm font-body text-dark-brown placeholder:text-body-gray focus:outline-none border-0"
              />
              <button className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-dark-brown hover:text-olive transition-colors bg-transparent whitespace-nowrap">
                {tButtons("subscribe")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="border-t border-light-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-dark-brown mb-4">
                {t("accommodations")}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-body-gray hover:text-dark-brown transition-colors">
                    {t("dining")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-body-gray hover:text-dark-brown transition-colors">
                    {t("experiences")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-body-gray hover:text-dark-brown transition-colors">
                    {t("offers")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-dark-brown mb-4">
                {t("aboutUs")}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-body-gray hover:text-dark-brown transition-colors">
                    {t("careers")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-body-gray hover:text-dark-brown transition-colors">
                    {t("contact")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-dark-brown mb-4">
                {t("faqs")}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-body-gray hover:text-dark-brown transition-colors">
                    {t("privacyPolicy")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-body-gray hover:text-dark-brown transition-colors">
                    {t("termsConditions")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Social */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-dark-brown mb-4">
                {t("followUs")}
              </h4>
              <div className="flex gap-3">
                {/* Facebook */}
                <a href="#" className="text-body-gray hover:text-dark-brown transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="text-body-gray hover:text-dark-brown transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                {/* TikTok */}
                <a href="#" className="text-body-gray hover:text-dark-brown transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="text-body-gray hover:text-dark-brown transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 5 - Contact */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-dark-brown mb-4">
                {t("contactUs")}
              </h4>
              <a
                href="tel:+201273299991"
                className="text-sm font-semibold text-dark-brown hover:text-olive transition-colors"
              >
                {t("phone")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-dark-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-xs text-body-gray/70">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
