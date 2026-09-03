import React from 'react';
import { Truck, PhoneCall, Sparkles } from 'lucide-react';
import { getPhoneUrl, BUSINESS_NAME } from '../config/businessConfig';
import { useLanguage } from '../context/LanguageContext';

interface CallToActionProps {
  onRequestPickup: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onRequestPickup }) => {
  const { t } = useLanguage();
  const phone = getPhoneUrl();

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 text-white relative overflow-hidden border-y border-emerald-800/40">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10 space-y-6">
        {/* Eco pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>{t('cta_badge')}</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
          {t('cta_heading')}
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-emerald-100/90 max-w-xl mx-auto leading-relaxed">
          {t('cta_subheading')} {BUSINESS_NAME}.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRequestPickup}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-black text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 active:scale-[0.98] shadow-lg shadow-emerald-950/40 transition-all cursor-pointer whitespace-nowrap"
          >
            <Truck className="w-5 h-5 text-emerald-950" />
            <span>{t('cta_pickup_btn')}</span>
          </button>

          {phone.isConfigured ? (
            <a
              href={phone.url}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xs transition-all whitespace-nowrap"
            >
              <PhoneCall className="w-5 h-5 text-emerald-300" />
              <span>{t('cta_call_btn')}</span>
            </a>
          ) : (
            <button
              onClick={onRequestPickup}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xs transition-all cursor-pointer whitespace-nowrap"
            >
              <PhoneCall className="w-5 h-5 text-emerald-300" />
              <span>{t('cta_call_btn')}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

