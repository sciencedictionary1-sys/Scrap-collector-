import React from 'react';
import { PackageCheck, MessageSquare, CalendarClock, Sparkles, Truck, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../config/businessConfig';
import { useLanguage } from '../context/LanguageContext';
import { CARD_PALETTES, getStaggerDelay } from '../utils/cardColorThemes';

interface HowItWorksProps {
  onRequestPickup: () => void;
}

const stepIcons: Record<string, (colorClass: string) => React.ReactNode> = {
  PackageCheck: (c) => <PackageCheck className={`w-7 h-7 ${c}`} />,
  MessageSquare: (c) => <MessageSquare className={`w-7 h-7 ${c}`} />,
  CalendarClock: (c) => <CalendarClock className={`w-7 h-7 ${c}`} />,
  Sparkles: (c) => <Sparkles className={`w-7 h-7 ${c}`} />,
  PhoneCall: (c) => <MessageSquare className={`w-7 h-7 ${c}`} />,
  Boxes: (c) => <PackageCheck className={`w-7 h-7 ${c}`} />,
  CalendarCheck: (c) => <CalendarClock className={`w-7 h-7 ${c}`} />,
  Truck: (c) => <Truck className={`w-7 h-7 ${c}`} />,
};

// Step 1 -> Green, Step 2 -> Blue, Step 3 -> Orange, Step 4 -> Purple
const stepThemes = [
  CARD_PALETTES.emerald,
  CARD_PALETTES.blue,
  CARD_PALETTES.orange,
  CARD_PALETTES.purple,
];

export const HowItWorks: React.FC<HowItWorksProps> = ({ onRequestPickup }) => {
  const { t, isBM } = useLanguage();

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-y border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('how_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('how_heading')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t('how_subheading')}
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const title = isBM && step.titleBm ? step.titleBm : step.title;
            const description = isBM && step.descriptionBm ? step.descriptionBm : step.description;
            const theme = stepThemes[idx % stepThemes.length];
            const staggerDelay = getStaggerDelay(idx);
            const renderIcon = stepIcons[step.iconName] || ((c) => <PackageCheck className={`w-7 h-7 ${c}`} />);

            return (
              <div
                key={step.stepNumber}
                className={`relative ${theme.bg} ${theme.bgHover} rounded-2xl p-6 border ${theme.border} ${theme.borderHover} ${theme.animClass} ${staggerDelay} interactive-card hover:shadow-lg flex flex-col justify-between group shadow-2xs`}
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${theme.iconBg} border shadow-2xs flex items-center justify-center transition-transform group-hover:scale-105 anim-icon-glow`}>
                    {renderIcon(theme.iconText)}
                  </div>
                  <span className={`text-xs font-black px-3 py-1 rounded-full ${theme.accentBg} text-white shadow-xs`}>
                    {t('how_step_label')} {step.stepNumber}
                  </span>
                </div>

                {/* Step Details */}
                <div className="space-y-2 mb-4">
                  <h3 className={`text-lg font-bold text-slate-900 group-hover:${theme.accent} transition-colors`}>
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Visual mini-step indicator */}
                <div className={`pt-3 border-t border-slate-200/60 text-xs font-bold ${theme.accent} flex items-center justify-between`}>
                  <span>{t('how_phase_label')}{step.stepNumber}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Flow Representation Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 text-white shadow-xl border border-emerald-800/40">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest block mb-1">
              {t('how_journey_badge')}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              {t('how_journey_heading')}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center max-w-4xl mx-auto text-center">
            {/* Stage 1 */}
            <div className="bg-emerald-900/40 backdrop-blur-xs rounded-2xl p-4 border border-emerald-700/40 hover:bg-emerald-900/60 transition-colors">
              <div className="text-2xl mb-1.5">♻️</div>
              <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider">{t('how_journey_1_title')}</p>
              <p className="text-xs text-slate-300 mt-0.5">{t('how_journey_1_desc')}</p>
            </div>

            {/* Stage 2 */}
            <div className="bg-blue-900/40 backdrop-blur-xs rounded-2xl p-4 border border-blue-700/40 hover:bg-blue-900/60 transition-colors">
              <div className="text-2xl mb-1.5">📞</div>
              <p className="text-xs font-bold text-blue-300 uppercase tracking-wider">{t('how_journey_2_title')}</p>
              <p className="text-xs text-slate-300 mt-0.5">{t('how_journey_2_desc')}</p>
            </div>

            {/* Stage 3 */}
            <div className="bg-amber-900/40 backdrop-blur-xs rounded-2xl p-4 border border-amber-700/40 hover:bg-amber-900/60 transition-colors">
              <div className="text-2xl mb-1.5">📅</div>
              <p className="text-xs font-bold text-amber-300 uppercase tracking-wider">{t('how_journey_3_title')}</p>
              <p className="text-xs text-slate-300 mt-0.5">{t('how_journey_3_desc')}</p>
            </div>

            {/* Stage 4 */}
            <div className="bg-purple-900/40 backdrop-blur-xs rounded-2xl p-4 border border-purple-700/40 hover:bg-purple-900/60 transition-colors">
              <div className="text-2xl mb-1.5">🚚</div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider">{t('how_journey_4_title')}</p>
              <p className="text-xs text-slate-300 mt-0.5">{t('how_journey_4_desc')}</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onRequestPickup}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-black text-sm shadow-md shadow-emerald-950/40 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Truck className="w-4 h-4 text-emerald-950" />
              <span>{t('how_cta_btn')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

