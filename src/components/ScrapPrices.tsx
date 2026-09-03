import React from 'react';
import { AlertCircle, MessageCircle, Sparkles, Scale, TrendingUp, Layers, ArrowUpRight } from 'lucide-react';
import { SCRAP_PRICES_NOTE_EN, SCRAP_PRICES_NOTE_BM, getWhatsAppUrl, BUSINESS_NAME } from '../config/businessConfig';
import { ScrapServiceOption } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ScrapPricesProps {
  onRequestPickup: (serviceType?: ScrapServiceOption, materialName?: string) => void;
}

export const ScrapPrices: React.FC<ScrapPricesProps> = ({ onRequestPickup }) => {
  const { language, isBM } = useLanguage();

  const pricesNote = isBM ? SCRAP_PRICES_NOTE_BM : SCRAP_PRICES_NOTE_EN;

  const waInquiryUrl = getWhatsAppUrl(
    isBM
      ? `Hai ${BUSINESS_NAME}, saya ingin bertanyakan harga semasa / sebut harga pukal untuk bahan barang lusuh saya.`
      : `Hi ${BUSINESS_NAME}, I would like to inquire about the current scrap prices and get a quote for my materials.`,
    language
  );

  return (
    <section id="prices" className="py-16 sm:py-24 bg-[#f8faf8] border-y border-emerald-100/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isBM ? 'Panduan Pasaran & Sebut Harga' : 'Market Guidance & Pricing'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isBM ? 'Maklumat Harga Barang Lusuh' : 'Scrap Price Information'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {isBM
              ? 'Harga barang lusuh dan barangan kitar semula bergantung kepada jenis bahan, tahap kebersihan/kualiti (gred), jumlah kuantiti atau berat muatan, serta keadaan pasaran semasa.'
              : 'Scrap and recyclable material prices depend on the material type, quality grading, total volume/weight, and daily market conditions.'}
          </p>
        </div>

        {/* Pricing Factors Overview (Clean & Professional) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex flex-col items-start">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">
              {isBM ? 'Jenis & Gred Bahan' : 'Material Type & Grade'}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {isBM
                ? 'Logam bukan ferus (kuprum, aluminium, tembaga) dan ferus dinilai mengikut ketulenan dan pengasingan.'
                : 'Non-ferrous metals (copper, brass, aluminium) and ferrous steel are evaluated based on purity and sorting.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex flex-col items-start">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-3">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">
              {isBM ? 'Kuantiti & Berat Muatan' : 'Volume & Weight Scale'}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {isBM
                ? 'Penilaian harga pukal dan kadar komersial khas disediakan untuk kuantiti industri yang besar.'
                : 'Special bulk payout tiers and dedicated commercial logistics are available for large quantities.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex flex-col items-start">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">
              {isBM ? 'Turun Naik Pasaran' : 'Market Fluctuation'}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {isBM
                ? 'Kadar dikemas kini secara berkala mengikut indeks pasaran kitar semula global dan tempatan.'
                : 'Rates are updated periodically in line with local and international recycling index movements.'}
            </p>
          </div>
        </div>

        {/* Pricing Notice & Contact / WhatsApp Banner */}
        <div className="bg-white rounded-3xl border border-emerald-200/90 shadow-md overflow-hidden">
          {/* Price Variation Disclaimer Notice */}
          <div className="p-4 sm:p-5 bg-emerald-50/80 border-b border-emerald-100 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
              {pricesNote}
            </p>
          </div>

          {/* Large Volume / Unlisted Scrap Inquiry Action */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left flex-1">
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                {isBM
                  ? 'Mempunyai kuantiti besar atau bahan yang tidak tersenarai?'
                  : 'Have a large volume or unlisted scrap material?'}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200 mt-1.5 leading-relaxed max-w-xl">
                {isBM
                  ? 'Hubungi kami secara terus melalui WhatsApp untuk semakan sebut harga segera, kadar pukal, dan jadual lori pengangkut.'
                  : 'Contact us directly on WhatsApp to get the latest live rates, bulk evaluation, and collection scheduling.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              {waInquiryUrl.isConfigured ? (
                <a
                  id="whatsapp-price-inquiry-btn"
                  href={waInquiryUrl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-black text-sm shadow-md active:scale-[0.98] transition-all whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>{isBM ? 'Tanya di WhatsApp' : 'Inquire on WhatsApp'}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>
              ) : (
                <button
                  id="contact-for-current-prices-btn"
                  onClick={() => onRequestPickup('price')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-black text-sm shadow-md active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>{isBM ? 'Hubungi Kami' : 'Contact Us'}</span>
                </button>
              )}

              <button
                id="request-pickup-price-section-btn"
                onClick={() => onRequestPickup('standard')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>{isBM ? 'Borang Permohonan' : 'Request Pickup Form'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
