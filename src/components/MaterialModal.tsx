import React from 'react';
import { X, CheckCircle2, Sparkles, Coins, MessageCircle, AlertTriangle } from 'lucide-react';
import { AcceptedMaterial, ScrapServiceOption } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface MaterialModalProps {
  material: AcceptedMaterial | null;
  onClose: () => void;
  onRequestPickup: (serviceType?: ScrapServiceOption, materialName?: string) => void;
}

export const MaterialModal: React.FC<MaterialModalProps> = ({
  material,
  onClose,
  onRequestPickup,
}) => {
  const { t, isBM } = useLanguage();

  if (!material) return null;

  const name = isBM && material.nameBm ? material.nameBm : material.name;
  const category = isBM && material.categoryBm ? material.categoryBm : material.category;
  const fullDesc = isBM && material.fullDescriptionBm ? material.fullDescriptionBm : material.fullDescription;
  const acceptedItems = isBM && material.acceptedExamplesBm ? material.acceptedExamplesBm : material.acceptedExamples;
  const notAcceptedItems = isBM && material.notAcceptedExamplesBm ? material.notAcceptedExamplesBm : material.notAcceptedExamples;
  const prepTips = isBM && material.prepTipsBm ? material.prepTipsBm : material.prepTips;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="material-modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with close button */}
        <div className="relative h-48 sm:h-56 bg-slate-100 overflow-hidden">
          <img
            src={material.image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-500/90 text-white text-xs font-semibold uppercase tracking-wider mb-1.5">
              {category}
            </span>
            <h3 id="material-modal-title" className="text-2xl font-bold flex items-center gap-2">
              <span>{name}</span>
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              {t('modal_overview_title')}
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {fullDesc}
            </p>
          </div>

          {/* Accepted Items */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t('modal_accepted_title')}</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {acceptedItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 p-2 rounded-lg bg-emerald-50/60 border border-emerald-100 text-xs sm:text-sm text-slate-800 font-medium"
                >
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Accepted Items if available */}
          {notAcceptedItems && notAcceptedItems.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-700 flex items-center gap-1.5 mb-2">
                <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                <span>{t('modal_not_accepted_title')}</span>
              </h4>
              <ul className="grid grid-cols-1 gap-1.5">
                {notAcceptedItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 p-2 rounded-lg bg-red-50/60 border border-red-100 text-xs text-red-900"
                  >
                    <span className="text-red-500 font-bold shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Preparation tips */}
          {prepTips && (
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-900">
              <span className="font-bold flex items-center gap-1.5 mb-1">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{t('modal_tips_title')}</span>
              </span>
              <p className="text-amber-800">{prepTips}</p>
            </div>
          )}

          {/* Action CTAs: Sell & Check Price */}
          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onRequestPickup('sell', name);
              }}
              className="w-full flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-[0.98] shadow-md shadow-emerald-700/20 transition-all cursor-pointer text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('modal_btn_sell')} {name}</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestPickup('price', name);
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors cursor-pointer text-sm"
            >
              <Coins className="w-4 h-4 text-amber-600" />
              <span>{t('modal_btn_price')}</span>
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-3 rounded-xl font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors text-sm cursor-pointer"
            >
              {t('modal_btn_close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
