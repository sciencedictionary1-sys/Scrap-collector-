import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl } from '../config/businessConfig';
import { Coins, Truck, MessageCircle } from 'lucide-react';

interface FloatingPickupButtonProps {
  onSell: () => void;
  onPickup: () => void;
}

export const FloatingPickupButton: React.FC<FloatingPickupButtonProps> = ({
  onSell,
  onPickup,
}) => {
  const { t, isBM } = useLanguage();
  const whatsapp = getWhatsAppUrl(undefined, isBM);

  return (
    <>
      {/* Mobile Fixed Bottom Action Bar (Fixed across all screens on mobile) */}
      <aside
        id="mobile-fixed-action-bar"
        aria-label="Scrap Collection Actions"
        className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2.5 py-2 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
      >
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* 1. Sell Button */}
          <button
            id="mobile-bar-sell-btn"
            type="button"
            onClick={onSell}
            className="flex flex-col sm:flex-row items-center justify-center gap-1 py-2 px-1.5 rounded-xl font-bold text-xs text-slate-900 bg-amber-50 hover:bg-amber-100 active:bg-amber-200 border border-amber-300/80 active:scale-[0.98] transition-all cursor-pointer shadow-xs min-h-[46px]"
            title={t('bar_sell')}
            aria-label={t('bar_sell')}
          >
            <span className="text-base leading-none">💰</span>
            <span className="leading-tight truncate text-[11px] sm:text-xs font-bold text-slate-800">
              {t('bar_sell')}
            </span>
          </button>

          {/* 2. Pickup Button */}
          <button
            id="mobile-bar-pickup-btn"
            type="button"
            onClick={onPickup}
            className="flex flex-col sm:flex-row items-center justify-center gap-1 py-2 px-1.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 active:scale-[0.98] transition-all cursor-pointer shadow-xs shadow-emerald-700/20 min-h-[46px]"
            title={t('bar_pickup')}
            aria-label={t('bar_pickup')}
          >
            <span className="text-base leading-none">🚚</span>
            <span className="leading-tight truncate text-[11px] sm:text-xs font-bold text-white">
              {t('bar_pickup')}
            </span>
          </button>

          {/* 3. Chat WhatsApp Button */}
          <a
            id="mobile-bar-whatsapp-btn"
            href={whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center justify-center gap-1 py-2 px-1.5 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] active:scale-[0.98] transition-all cursor-pointer shadow-xs shadow-emerald-700/20 min-h-[46px]"
            title={t('bar_chat_whatsapp')}
            aria-label={t('bar_chat_whatsapp')}
          >
            <span className="text-base leading-none">💬</span>
            <span className="leading-tight truncate text-[11px] sm:text-xs font-bold text-white">
              {t('bar_chat_whatsapp')}
            </span>
          </a>
        </div>
      </aside>

      {/* Desktop Fixed / Floating Action Area (Compact cluster near bottom-right) */}
      <aside
        id="desktop-fixed-action-bar"
        aria-label="Desktop Quick Actions"
        className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-2 p-2 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xl shadow-slate-900/15"
      >
        {/* 1. Sell Button */}
        <button
          id="desktop-bar-sell-btn"
          type="button"
          onClick={onSell}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 active:bg-amber-200 border border-amber-300/80 active:scale-95 text-slate-800 font-bold text-sm transition-all cursor-pointer shadow-xs"
          title={t('bar_sell')}
        >
          <span className="text-base leading-none group-hover:scale-110 transition-transform">💰</span>
          <span>{t('bar_sell')}</span>
        </button>

        {/* 2. Pickup Button */}
        <button
          id="desktop-bar-pickup-btn"
          type="button"
          onClick={onPickup}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 active:scale-95 text-white font-bold text-sm shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all cursor-pointer"
          title={t('bar_pickup')}
        >
          <span className="text-base leading-none group-hover:scale-110 transition-transform">🚚</span>
          <span>{t('bar_pickup')}</span>
        </button>

        {/* 3. Chat WhatsApp Button */}
        <a
          id="desktop-bar-whatsapp-btn"
          href={whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] active:scale-95 text-white font-bold text-sm shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all cursor-pointer"
          title={t('bar_chat_whatsapp')}
        >
          <span className="text-base leading-none group-hover:scale-110 transition-transform">💬</span>
          <span>{t('bar_chat_whatsapp')}</span>
        </a>
      </aside>
    </>
  );
};

