import React from 'react';
import { QUICK_BENEFITS } from '../config/businessConfig';
import { useLanguage } from '../context/LanguageContext';

const emojiMap: Record<string, string> = {
  Recycle: '♻️',
  Truck: '🚚',
  Coins: '💰',
  Leaf: '🌱',
};

interface QuickBenefitsProps {
  onRequestPickup: () => void;
}

export const QuickBenefits: React.FC<QuickBenefitsProps> = ({ onRequestPickup }) => {
  const { isBM } = useLanguage();

  return (
    <section className="shrink-0 bg-white border-b border-gray-200 py-4 sm:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-gray-200 items-center">
          {QUICK_BENEFITS.map((benefit) => {
            const title = isBM && benefit.titleBm ? benefit.titleBm : benefit.title;
            const desc = isBM && benefit.descriptionBm ? benefit.descriptionBm : benefit.description;

            return (
              <div
                key={benefit.id}
                className="flex items-center justify-start lg:justify-center gap-3 px-2 sm:px-6"
              >
                <div className="text-2xl sm:text-3xl shrink-0">
                  {emojiMap[benefit.iconName] || '♻️'}
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
