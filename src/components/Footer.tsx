import React from 'react';
import { Recycle, Phone, MessageCircle, Mail, Facebook, ArrowUp, Heart } from 'lucide-react';
import {
  BUSINESS_NAME,
  getPhoneUrl,
  getWhatsAppUrl,
  getEmailUrl,
  getFacebookUrl,
} from '../config/businessConfig';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onRequestPickup: (materialName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestPickup }) => {
  const { t, language } = useLanguage();
  const phone = getPhoneUrl();
  const whatsapp = getWhatsAppUrl(undefined, language);
  const email = getEmailUrl();
  const facebook = getFacebookUrl();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-emerald-900/40 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-950/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-950/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-900/30">
                <Recycle className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="font-black text-xl tracking-tight text-white block">
                  {BUSINESS_NAME.toUpperCase()}
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold tracking-wider uppercase">
                  Recycling & Collection Service
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {t('footer_tagline')} ♻️
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t('footer_description')}
            </p>

            <div className="pt-2">
              <button
                onClick={() => onRequestPickup()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs shadow-md transition-all cursor-pointer"
              >
                <span>{t('footer_pickup_btn')}</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest">
              {t('footer_quick_links')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('#home')}
                  className="text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer text-left"
                >
                  {t('nav_home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#about')}
                  className="text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer text-left"
                >
                  {t('nav_about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#what-we-collect')}
                  className="text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer text-left"
                >
                  {t('nav_materials')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#how-it-works')}
                  className="text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer text-left"
                >
                  {t('nav_how_it_works')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#prices')}
                  className="text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer text-left"
                >
                  {t('nav_prices')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#gallery')}
                  className="text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer text-left"
                >
                  {t('nav_gallery')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer text-left"
                >
                  {t('nav_contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Channels Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest">
              {t('footer_direct_contact')}
            </h4>
            <p className="text-xs text-slate-400">
              {t('footer_direct_desc')}
            </p>

            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                {phone.isConfigured ? (
                  <a href={phone.url} className="hover:text-emerald-300 transition-colors font-medium">
                    {phone.display}
                  </a>
                ) : (
                  <span className="text-slate-500">{phone.display}</span>
                )}
              </li>

              <li className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                {whatsapp.isConfigured ? (
                  <a href={whatsapp.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors font-medium">
                    {t('footer_whatsapp_chat')}
                  </a>
                ) : (
                  <span className="text-slate-500">WhatsApp</span>
                )}
              </li>

              <li className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-teal-900/60 border border-teal-700/50 flex items-center justify-center text-teal-400 shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                {email.isConfigured ? (
                  <a href={email.url} className="hover:text-teal-300 transition-colors font-medium">
                    {email.display}
                  </a>
                ) : (
                  <span className="text-slate-500">{email.display}</span>
                )}
              </li>

              <li className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-blue-900/60 border border-blue-700/50 flex items-center justify-center text-blue-400 shrink-0">
                  <Facebook className="w-3.5 h-3.5" />
                </div>
                {facebook.isConfigured ? (
                  <a href={facebook.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors font-medium">
                    {t('footer_facebook_page')}
                  </a>
                ) : (
                  <span className="text-slate-500">{facebook.display}</span>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {BUSINESS_NAME}. {t('footer_rights')}</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">{t('footer_tagline')}</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500 transition-all cursor-pointer"
            >
              <span>{t('footer_back_to_top')}</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

