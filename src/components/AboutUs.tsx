import React from 'react';
import { Target, Compass, ShieldCheck } from 'lucide-react';
import {
  BUSINESS_NAME,
  BUSINESS_DESCRIPTION_EN,
  BUSINESS_DESCRIPTION_BM,
  MISSION_EN,
  MISSION_BM,
  VISION_EN,
  VISION_BM,
} from '../config/businessConfig';
import { useLanguage } from '../context/LanguageContext';

interface AboutUsProps {
  onRequestPickup: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onRequestPickup }) => {
  const { t, isBM } = useLanguage();

  const description = isBM ? BUSINESS_DESCRIPTION_BM : BUSINESS_DESCRIPTION_EN;
  const mission = isBM ? MISSION_BM : MISSION_EN;
  const vision = isBM ? VISION_BM : VISION_EN;

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Visual representation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src="/assets/scrap_value_hero.jpg"
                alt="Scrap Collector collection and sustainable recycling operations"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider">
                    {t('about_community_badge')}
                  </span>
                  <p className="text-white text-lg font-bold mt-2">
                    {t('about_image_tagline')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Vision, Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3">
                <span>{t('about_badge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {t('about_heading_prefix')} {BUSINESS_NAME}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Mission */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-3 shadow-xs">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {t('about_mission_title')}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {mission}
                </p>
              </div>

              {/* Vision */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 mb-3 shadow-xs">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {t('about_vision_title')}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {vision}
                </p>
              </div>
            </div>

            {/* Commitments */}
            <div className="pt-2">
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0" />
                <p className="text-xs sm:text-sm text-emerald-900 font-medium">
                  {t('about_commitment')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
