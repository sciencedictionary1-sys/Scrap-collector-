import React, { useState, useMemo } from 'react';
import { ACCEPTED_MATERIALS } from '../config/businessConfig';
import { AcceptedMaterial, ScrapServiceOption } from '../types';
import { MaterialModal } from './MaterialModal';
import { Check, Info, Coins, MessageCircle, Layers, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getMaterialCardTheme, getStaggerDelay } from '../utils/cardColorThemes';

const materialEmojis: Record<string, string> = {
  // Aluminium
  'aluminium-profiles': '🪟',
  'aluminium-sheets': '📄',
  'aluminium-frames': '🖼️',
  'aluminium-pipes': '📐',
  'aluminium-wire': '⚡',
  // Copper & Brass
  'copper-scrap': '🥉',
  'copper-wire': '🔌',
  'copper-strips': '🟫',
  'brass-scrap': '🎺',
  // Iron & Steel
  'iron-scrap': '⚓',
  'steel-scrap': '🔨',
  'stainless-steel': '✨',
  'stainless-steel-scrap': '✨',
  'metal-pipes': '🚰',
  'metal-sheets': '🛡️',
  'metal-rods': '📏',
  'mixed-metal': '🔩',
  // Motors & Electrical
  'electric-motors': '⚙️',
  'electric-cables': '🧵',
  'air-conditioner-scrap': '❄️',
  'ac-compressors': '🧰',
  'electrical-equipment': '⚡',
  'computer-parts': '💻',
  'printers-photocopiers': '🖨️',
  'fans-fan-motors': '💨',
  'mixed-electrical-scrap': '🔌',
  'e-waste': '📱',
  // Containers & Machinery
  'metal-cans': '🥫',
  'old-machinery': '🚜',
  'metal-furniture': '🪑',
  'other-mixed-scrap': '📦',
  'glass': '🍾',
  'cans': '🥫',
};

// Helper for dynamic category color badges
const getCategoryStyle = (category: string) => {
  const cat = category.toLowerCase();
  if (cat.includes('copper') || cat.includes('tembaga') || cat.includes('brass')) {
    return 'bg-amber-100/90 text-amber-800 border-amber-200';
  }
  if (cat.includes('aluminium')) {
    return 'bg-teal-100/90 text-teal-800 border-teal-200';
  }
  if (cat.includes('motor') || cat.includes('electrical') || cat.includes('elektrik')) {
    return 'bg-indigo-100/90 text-indigo-800 border-indigo-200';
  }
  if (cat.includes('e-waste') || cat.includes('elektronik')) {
    return 'bg-emerald-100/90 text-emerald-800 border-emerald-200';
  }
  return 'bg-slate-100 text-slate-700 border-slate-200';
};

interface WhatWeCollectProps {
  onRequestPickup: (serviceType?: ScrapServiceOption, materialName?: string) => void;
}

export const WhatWeCollect: React.FC<WhatWeCollectProps> = ({ onRequestPickup }) => {
  const { t, isBM } = useLanguage();
  const [selectedMaterial, setSelectedMaterial] = useState<AcceptedMaterial | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleScrollToPrices = () => {
    const el = document.getElementById('prices');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Group distinct categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    ACCEPTED_MATERIALS.forEach((m) => {
      cats.add(isBM && m.categoryBm ? m.categoryBm : m.category);
    });
    return Array.from(cats);
  }, [isBM]);

  // Filter materials directly by category
  const filteredMaterials = useMemo(() => {
    return ACCEPTED_MATERIALS.filter((material) => {
      const category = isBM && material.categoryBm ? material.categoryBm : material.category;
      return selectedCategory === 'all' || category.toLowerCase() === selectedCategory.toLowerCase();
    });
  }, [selectedCategory, isBM]);

  return (
    <section id="what-we-collect" className="py-14 sm:py-20 bg-[#f4f9f6] border-y border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isBM ? 'Katalog Bahan' : 'Material Catalog'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {t('collect_heading')}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-2xl">
              {t('collect_subheading')}
            </p>
          </div>

          <button
            onClick={handleScrollToPrices}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-100/80 hover:bg-emerald-200/90 transition-colors self-start sm:self-auto cursor-pointer border border-emerald-200"
          >
            <Coins className="w-4 h-4 text-emerald-700" />
            <span>{t('collect_view_pricing')}</span>
          </button>
        </div>

        {/* Direct Category Filter Chips with Material Count */}
        <div className="mb-8 space-y-3 bg-white p-4 rounded-2xl border border-emerald-100 shadow-2xs">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              {isBM ? 'Pilih Kategori Bahan:' : 'Filter by Category:'}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                {filteredMaterials.length} / {ACCEPTED_MATERIALS.length} {isBM ? 'jenis bahan' : 'materials'}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-xs scale-102'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-emerald-50 hover:border-emerald-200'
              }`}
            >
              {isBM ? `Semua Bahan (${ACCEPTED_MATERIALS.length})` : `All Materials (${ACCEPTED_MATERIALS.length})`}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-emerald-600 text-white shadow-xs scale-102'
                    : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-emerald-50 hover:border-emerald-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Material Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMaterials.map((material, idx) => {
            const name = isBM && material.nameBm ? material.nameBm : material.name;
            const category = isBM && material.categoryBm ? material.categoryBm : material.category;
            const shortDesc = isBM && material.shortDescriptionBm ? material.shortDescriptionBm : material.shortDescription;
            const examples = isBM && material.acceptedExamplesBm ? material.acceptedExamplesBm : material.acceptedExamples;
            const emoji = materialEmojis[material.id] || '🔩';
            const theme = getMaterialCardTheme(material.id, idx);
            const staggerDelay = getStaggerDelay(idx);

            return (
              <div
                key={material.id}
                className={`${theme.bg} ${theme.bgHover} border ${theme.border} ${theme.borderHover} ${theme.animClass} ${staggerDelay} interactive-card p-5 rounded-2xl hover:shadow-lg group flex flex-col justify-between shadow-2xs`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <div className={`text-3xl sm:text-4xl group-hover:scale-110 transition-transform origin-left select-none p-2 rounded-xl ${theme.iconBg} border inline-flex items-center justify-center shadow-2xs anim-icon-glow`}>
                      {emoji}
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder} shrink-0`}>
                      {category}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold text-slate-900 group-hover:${theme.accent} transition-colors mt-2`}>
                    {name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3 mt-1.5 line-clamp-2">
                    {shortDesc}
                  </p>

                  {/* Quick Examples */}
                  <div className="space-y-1.5 pt-2.5 border-t border-slate-200/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {t('collect_common_items')}
                    </span>
                    <ul className="space-y-1">
                      {examples.slice(0, 2).map((example, exampleIdx) => (
                        <li key={exampleIdx} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                          <Check className={`w-3.5 h-3.5 ${theme.iconText} shrink-0 stroke-[2.5]`} />
                          <span className="truncate">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons: Check Price & Sell This Material */}
                <div className="pt-4 mt-3.5 border-t border-slate-200/60 space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onRequestPickup('sell', name)}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold ${theme.buttonPrimary || 'bg-emerald-600 hover:bg-emerald-700 text-white'} active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer`}
                      title={`${t('collect_btn_sell')} (${name})`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{t('collect_btn_sell')}</span>
                    </button>

                    <button
                      onClick={() => onRequestPickup('price', name)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold ${theme.buttonSecondary || 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'} border transition-all flex items-center justify-center gap-1 cursor-pointer`}
                      title={`${t('collect_btn_price')} (${name})`}
                    >
                      <Coins className="w-3.5 h-3.5" />
                      <span>{t('collect_btn_price')}</span>
                    </button>

                    <button
                      onClick={() => setSelectedMaterial(material)}
                      className="p-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white/80 hover:bg-white transition-colors cursor-pointer border border-slate-200/80 shadow-2xs"
                      title={`${t('collect_btn_details')} ${name}`}
                      aria-label={`${t('collect_btn_details')} ${name}`}
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Material Detail Modal */}
        <MaterialModal
          material={selectedMaterial}
          onClose={() => setSelectedMaterial(null)}
          onRequestPickup={onRequestPickup}
        />
      </div>
    </section>
  );
};


