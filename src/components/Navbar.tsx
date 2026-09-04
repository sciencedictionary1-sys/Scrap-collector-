import React, { useState, useEffect } from 'react';
import { Menu, X, Truck, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_NAME, getPhoneUrl, getWhatsAppUrl } from '../config/businessConfig';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  onRequestPickup: (materialName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestPickup }) => {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav_home'), href: '#home' },
    { label: t('nav_about'), href: '#about' },
    { label: t('nav_materials'), href: '#what-we-collect' },
    { label: t('nav_how_it_works'), href: '#how-it-works' },
    { label: t('nav_prices'), href: '#prices' },
    { label: t('nav_gallery'), href: '#gallery' },
    { label: t('nav_contact'), href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const phone = getPhoneUrl();
  const whatsapp = getWhatsAppUrl(undefined, language);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'h-16 bg-white/95 backdrop-blur-md border-b border-emerald-100/80 shadow-xs'
          : 'h-16 bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full gap-2">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none rounded-lg min-w-0 shrink"
            aria-label={`${BUSINESS_NAME} Home`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0 ring-2 ring-emerald-500/30 bg-white">
              <img
                src="/assets/brand_logo.jpg"
                alt={`${BUSINESS_NAME} Logo`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs min-[360px]:text-sm sm:text-base md:text-lg font-black tracking-tight text-slate-900 leading-none truncate max-w-[135px] min-[360px]:max-w-[170px] min-[420px]:max-w-[240px] sm:max-w-none group-hover:text-emerald-700 transition-colors">
                {BUSINESS_NAME.toUpperCase()}
              </span>
              <span className="hidden sm:inline-block text-[10px] font-bold text-emerald-600 tracking-wider uppercase">
                {t('nav_brand_subtitle')}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (1024px+) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative py-1 px-1.5 hover:text-emerald-700 transition-colors cursor-pointer group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-1.5 right-1.5 h-0.5 bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </button>
            ))}
          </nav>

          {/* Desktop Actions (1024px+) */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* EN / BM Language Switcher */}
            <LanguageSwitcher variant="pill" />

            {whatsapp.isConfigured && (
              <a
                href={whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-full border border-emerald-200/80 transition-all hover:scale-102"
                title={t('nav_whatsapp')}
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t('nav_whatsapp')}</span>
              </a>
            )}

            {phone.isConfigured && (
              <a
                href={phone.url}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-all hover:scale-102"
                title={t('nav_call')}
              >
                <Phone className="w-3.5 h-3.5 text-slate-600" />
                <span>{t('nav_call')}</span>
              </a>
            )}

            {/* Prominent CTA */}
            <button
              id="nav-request-pickup-btn"
              onClick={() => onRequestPickup()}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-xs hover:shadow-emerald-glow active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Truck className="w-4 h-4 text-emerald-100" />
              <span>{t('nav_request_pickup')}</span>
            </button>
          </div>

          {/* Mobile & Tablet Actions (<1024px) */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Language Switcher */}
            <LanguageSwitcher variant="compact" />

            {/* Tablet-only Quick Pickup CTA button (768px–1023px) */}
            <button
              onClick={() => onRequestPickup()}
              className="hidden sm:inline-flex md:inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-xs hover:from-emerald-500 hover:to-emerald-600 cursor-pointer whitespace-nowrap"
              aria-label={t('nav_pickup_short')}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>{t('nav_pickup_short')}</span>
            </button>

            {/* Guaranteed-fit Hamburger Menu Button with 44px min touch target */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-slate-700 hover:text-emerald-700 bg-emerald-50/60 hover:bg-emerald-100/80 active:bg-emerald-200/80 rounded-xl border border-emerald-200/80 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer shrink-0 transition-colors"
              aria-label={mobileMenuOpen ? t('nav_menu_close') : t('nav_menu_open')}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-800" /> : <Menu className="w-5 h-5 text-emerald-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-emerald-100 shadow-xl px-5 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('lang_switcher_title')}</span>
            </span>
            <LanguageSwitcher variant="compact" />
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3.5 py-2.5 text-sm font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800 rounded-xl transition-colors cursor-pointer flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-emerald-600 font-semibold opacity-0 group-hover:opacity-100">→</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestPickup();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 rounded-xl shadow-md shadow-emerald-700/20 cursor-pointer"
            >
              <Truck className="w-4 h-4" />
              <span>{t('floating_btn_text')}</span>
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {whatsapp.isConfigured && (
                <a
                  href={whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              )}

              {phone.isConfigured && (
                <a
                  href={phone.url}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-600" />
                  <span>{t('nav_call')}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

