import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '../config/businessConfig';
import { GalleryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface GalleryProps {
  onRequestPickup: (materialName?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onRequestPickup }) => {
  const { t, isBM } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categoryOptions = [
    { id: 'All', labelEn: 'All', labelBm: 'Semua' },
    { id: 'Aluminium', labelEn: 'Aluminium', labelBm: 'Aluminium' },
    { id: 'E-Waste', labelEn: 'E-Waste', labelBm: 'Sisa Elektronik' },
    { id: 'Copper', labelEn: 'Copper', labelBm: 'Tembaga' },
    { id: 'Iron & Steel', labelEn: 'Iron & Steel', labelBm: 'Besi & Keluli' },
    { id: 'Motors', labelEn: 'Motors', labelBm: 'Motor' },
    { id: 'Collection', labelEn: 'Collection', labelBm: 'Operasi Pengambilan' },
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#f4f9f6] border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3">
            <span>{t('gallery_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('gallery_heading')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t('gallery_subheading')}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categoryOptions.map((cat) => {
            const label = isBM ? cat.labelBm : cat.labelEn;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20'
                    : 'bg-white text-slate-700 hover:bg-emerald-50/60 hover:text-emerald-800 border border-emerald-100/90'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const title = isBM && item.titleBm ? item.titleBm : item.title;
            const category = isBM && item.categoryBm ? item.categoryBm : item.category;
            const desc = isBM && item.descriptionBm ? item.descriptionBm : item.description;

            return (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-emerald-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img
                    src={item.imageUrl}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/90 text-slate-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-xs text-[11px] font-bold text-emerald-800 shadow-xs border border-emerald-100">
                    {category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-slate-900">
              <img
                src={activeImage.imageUrl}
                alt={isBM && activeImage.titleBm ? activeImage.titleBm : activeImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  {isBM && activeImage.categoryBm ? activeImage.categoryBm : activeImage.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  {isBM && activeImage.titleBm ? activeImage.titleBm : activeImage.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {isBM && activeImage.descriptionBm ? activeImage.descriptionBm : activeImage.description}
                </p>
              </div>

              <button
                onClick={() => {
                  const cat = activeImage.category !== 'Collection' ? (isBM && activeImage.categoryBm ? activeImage.categoryBm : activeImage.category) : undefined;
                  setActiveImage(null);
                  onRequestPickup(cat);
                }}
                className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors cursor-pointer"
              >
                {t('gallery_lightbox_btn')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
