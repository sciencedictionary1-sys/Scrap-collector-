import React from 'react';
import { Truck, Recycle, CheckCircle2, ShieldCheck, Clock, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_NAME } from '../config/businessConfig';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onRequestPickup: () => void;
  onExploreMaterials: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestPickup, onExploreMaterials }) => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="shrink-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white pt-24 pb-14 sm:pt-28 sm:pb-16 lg:py-20 relative overflow-hidden"
    >
      {/* Background Decorative Lighting & Geometric Grids */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-cyan-500/10 blur-2xl" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            {/* Eco Pill with Amber & Emerald Accents */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/70 text-emerald-200 text-xs sm:text-sm font-bold shadow-xs backdrop-blur-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('hero_badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {t('hero_headline')}
            </h1>

            {/* Subheadline */}
            <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t('hero_subheadline')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-request-pickup-btn"
                onClick={onRequestPickup}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 text-emerald-950 px-7 py-4 rounded-xl font-extrabold shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm sm:text-base border border-emerald-200/60"
              >
                <Truck className="w-5 h-5 text-emerald-900" />
                <span>{t('hero_cta_pickup')}</span>
              </button>

              <button
                id="hero-what-we-collect-btn"
                onClick={onExploreMaterials}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-emerald-400/40 text-white px-6 py-4 rounded-xl font-bold backdrop-blur-xs transition-all cursor-pointer text-sm sm:text-base"
              >
                <Recycle className="w-5 h-5 text-emerald-300" />
                <span>{t('hero_cta_materials')}</span>
              </button>
            </div>

            {/* Trust Pillars */}
            <div className="pt-6 border-t border-emerald-800/60 grid grid-cols-2 sm:grid-cols-3 gap-3.5 text-left">
              <div className="flex items-center gap-2 text-emerald-100 text-xs sm:text-sm font-medium bg-emerald-900/40 p-2 rounded-lg border border-emerald-700/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('hero_pillar_direct')}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-100 text-xs sm:text-sm font-medium bg-emerald-900/40 p-2 rounded-lg border border-emerald-700/30">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('hero_pillar_fair')}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-100 text-xs sm:text-sm font-medium col-span-2 sm:col-span-1 bg-emerald-900/40 p-2 rounded-lg border border-emerald-700/30">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('hero_pillar_prompt')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-md p-3.5 border border-emerald-500/30 shadow-2xl">
                {/* Floating Location Badge */}
                <div className="absolute top-6 left-6 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-xs font-bold shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Malaysia Wide Collection</span>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-emerald-950 shadow-inner">
                  <img
                    src="/assets/scrap_value_hero.jpg"
                    alt="Turn your scrap into value with sorted copper, aluminium, and metals"
                    className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/30 to-transparent flex items-end p-5">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        {BUSINESS_NAME}
                      </p>
                      <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                        {t('hero_card_tagline')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Categories strip inside card */}
                <div className="grid grid-cols-3 gap-2 mt-3.5 text-center">
                  <div className="bg-emerald-900/60 hover:bg-emerald-800/80 transition-colors rounded-xl p-2.5 border border-emerald-700/40">
                    <span className="text-lg block">🏗️</span>
                    <span className="text-[11px] font-bold text-emerald-100">{t('hero_card_aluminium')}</span>
                  </div>
                  <div className="bg-emerald-900/60 hover:bg-emerald-800/80 transition-colors rounded-xl p-2.5 border border-emerald-700/40">
                    <span className="text-lg block">⚡</span>
                    <span className="text-[11px] font-bold text-emerald-100">{t('hero_card_copper')}</span>
                  </div>
                  <div className="bg-emerald-900/60 hover:bg-emerald-800/80 transition-colors rounded-xl p-2.5 border border-emerald-700/40">
                    <span className="text-lg block">⚙️</span>
                    <span className="text-[11px] font-bold text-emerald-100">{t('hero_card_metal')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

