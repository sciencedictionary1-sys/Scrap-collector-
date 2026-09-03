import React from 'react';
import { Trash2, Zap, CloudSun, Factory, Globe, Footprints, Leaf, Sparkles } from 'lucide-react';
import { ENVIRONMENTAL_IMPACT } from '../config/businessConfig';
import { useLanguage } from '../context/LanguageContext';
import { CARD_PALETTES, getStaggerDelay } from '../utils/cardColorThemes';

const environmentalImpactThemes = [
  {
    theme: CARD_PALETTES.emerald,
    icon: (c: string) => <Trash2 className={`w-6 h-6 ${c}`} />,
  },
  {
    theme: CARD_PALETTES.yellow,
    icon: (c: string) => <Zap className={`w-6 h-6 ${c}`} />,
  },
  {
    theme: CARD_PALETTES.cyan,
    icon: (c: string) => <CloudSun className={`w-6 h-6 ${c}`} />,
  },
  {
    theme: CARD_PALETTES.purple,
    icon: (c: string) => <Factory className={`w-6 h-6 ${c}`} />,
  },
  {
    theme: CARD_PALETTES.blue,
    icon: (c: string) => <Globe className={`w-6 h-6 ${c}`} />,
  },
  {
    theme: CARD_PALETTES.orange,
    icon: (c: string) => <Footprints className={`w-6 h-6 ${c}`} />,
  },
];

interface EnvironmentalImpactProps {
  onRequestPickup: () => void;
}

export const EnvironmentalImpact: React.FC<EnvironmentalImpactProps> = ({ onRequestPickup }) => {
  const { t, isBM } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f4f9f6] to-white border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 border border-emerald-200">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('impact_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('impact_heading')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t('impact_subheading')}
          </p>
        </div>

        {/* 6 Impact Pillars with Subtle Tinted Backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENVIRONMENTAL_IMPACT.map((item, idx) => {
            const title = isBM && item.titleBm ? item.titleBm : item.title;
            const description = isBM && item.descriptionBm ? item.descriptionBm : item.description;
            const config = environmentalImpactThemes[idx % environmentalImpactThemes.length];
            const theme = config.theme;
            const staggerDelay = getStaggerDelay(idx);

            return (
              <div
                key={item.id}
                className={`p-6 rounded-2xl ${theme.bg} ${theme.bgHover} border ${theme.border} ${theme.borderHover} ${theme.animClass} ${staggerDelay} interactive-card shadow-2xs hover:shadow-lg flex flex-col justify-between group`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${theme.iconBg} border flex items-center justify-center mb-4 transition-transform group-hover:scale-105 shadow-2xs anim-icon-glow`}>
                    {config.icon(theme.iconText)}
                  </div>
                  <h3 className={`text-lg font-bold text-slate-900 mb-2 group-hover:${theme.accent} transition-colors`}>
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className={`mt-5 pt-3.5 border-t border-slate-200/60 text-xs font-bold ${theme.accent} flex items-center gap-1.5`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('impact_card_tag')}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-800/40">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              {t('impact_banner_heading')}
            </h3>
            <p className="text-sm sm:text-base text-emerald-200">
              {t('impact_banner_subheading')}
            </p>
          </div>
          <button
            onClick={onRequestPickup}
            className="shrink-0 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-black text-sm active:scale-[0.98] shadow-md shadow-emerald-950/40 transition-all cursor-pointer whitespace-nowrap"
          >
            {t('impact_banner_btn')}
          </button>
        </div>
      </div>
    </section>
  );
};

