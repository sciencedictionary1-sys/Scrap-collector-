import React from 'react';
import { Headphones, ShieldCheck, Leaf, HeartHandshake, Recycle, Coins, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_NAME } from '../config/businessConfig';
import { useLanguage } from '../context/LanguageContext';
import { CARD_PALETTES, getStaggerDelay } from '../utils/cardColorThemes';

const whyChooseThemes = [
  {
    theme: CARD_PALETTES.emerald,
    icon: (c: string) => <Headphones className={`w-6 h-6 ${c}`} />,
  },
  {
    theme: CARD_PALETTES.blue,
    icon: (c: string) => <ShieldCheck className={`w-6 h-6 ${c}`} />,
  },
  {
    theme: CARD_PALETTES.purple,
    icon: (c: string) => <Leaf className={`w-6 h-6 ${c}`} />,
  },
  {
    theme: CARD_PALETTES.yellow,
    icon: (c: string) => <HeartHandshake className={`w-6 h-6 ${c}`} />,
  },
  {
    theme: CARD_PALETTES.teal,
    icon: (c: string) => <Recycle className={`w-6 h-6 ${c}`} />,
  },
  {
    theme: CARD_PALETTES.orange,
    icon: (c: string) => <Coins className={`w-6 h-6 ${c}`} />,
  },
];

export const WhyChooseUs: React.FC = () => {
  const { t, isBM } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('why_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('why_heading_prefix')} {BUSINESS_NAME}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t('why_subheading')}
          </p>
        </div>

        {/* 6 Grid Cards with Distinct Subtle Tinted Backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const title = isBM && item.titleBm ? item.titleBm : item.title;
            const description = isBM && item.descriptionBm ? item.descriptionBm : item.description;
            const config = whyChooseThemes[idx % whyChooseThemes.length];
            const theme = config.theme;
            const staggerDelay = getStaggerDelay(idx);

            return (
              <div
                key={item.id}
                className={`p-6 rounded-2xl ${theme.bg} ${theme.bgHover} border ${theme.border} ${theme.borderHover} ${theme.animClass} ${staggerDelay} interactive-card hover:shadow-lg flex flex-col justify-between group shadow-2xs`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${theme.iconBg} border flex items-center justify-center shadow-2xs mb-4 transition-transform group-hover:scale-105 anim-icon-glow`}>
                    {config.icon(theme.iconText)}
                  </div>
                  <h3 className={`text-lg font-bold text-slate-900 mb-2 group-hover:${theme.accent} transition-colors`}>
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className={`mt-5 pt-3.5 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold ${theme.accent}`}>
                  <CheckCircle2 className={`w-4 h-4 ${theme.iconText} shrink-0`} />
                  <span>{t('why_verified_principle')}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

