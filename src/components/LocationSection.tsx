import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  ExternalLink,
  Navigation,
  Sparkles,
  Building2,
  Home,
  Store,
  Factory,
  HardHat,
  Briefcase,
  Warehouse,
  Truck,
  Copy,
  Check,
  Compass,
} from 'lucide-react';
import { GOOGLE_MAPS_SHOP_URL, SHOP_NAME, BUSINESS_ADDRESS } from '../config/businessConfig';
import { useLanguage } from '../context/LanguageContext';

interface LocationSectionProps {
  onRequestPickup?: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onRequestPickup }) => {
  const { t, isBM } = useLanguage();
  const [copied, setCopied] = useState(false);

  const fullAddress = `${SHOP_NAME}\nLorong PJS 6/1e, Bandar Sunway,\n46000 Petaling Jaya, Selangor, Malaysia.`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const collectionSites = [
    { icon: Home, label: t('loc_sites_homes'), desc: isBM ? 'Rumah teres, banglo, kondominium' : 'Landed houses & condos' },
    { icon: Store, label: t('loc_sites_shops'), desc: isBM ? 'Kedai runcit, restoran, bengkel' : 'Retail outlets & workshops' },
    { icon: Factory, label: t('loc_sites_factories'), desc: isBM ? 'Zon perindustrian & kilang' : 'Industrial manufacturing yards' },
    { icon: HardHat, label: t('loc_sites_construction'), desc: isBM ? 'Tapak projek & renovasi' : 'Construction & renovation lots' },
    { icon: Briefcase, label: t('loc_sites_offices'), desc: isBM ? 'Pejabat swasta & agensi' : 'Corporate IT & office suites' },
    { icon: Warehouse, label: t('loc_sites_warehouses'), desc: isBM ? 'Gudang simpanan logistik' : 'Logistics hubs & depots' },
    { icon: Building2, label: t('loc_sites_businesses'), desc: isBM ? 'Premis komersial & SME' : 'Commercial premises & SMEs' },
  ];

  return (
    <section id="location" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-emerald-100/70">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-teal-50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 border border-emerald-200 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('loc_badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t('loc_heading')}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t('loc_subheading')}
          </p>
        </motion.div>

        {/* Main Grid: Coverage Visual Card & Physical Shop Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Nationwide Coverage Visual Card (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-gradient-to-br from-slate-900 via-teal-950 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-slate-950/10 border border-emerald-800/40 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background Geometric Map Rings */}
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full border border-emerald-500/20 pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-48 h-48 rounded-full border border-teal-400/20 pointer-events-none" />
            <div className="absolute top-1/2 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Coverage Badge & State Indicators */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold backdrop-blur-xs">
                  <Compass className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
                  <span>{isBM ? 'Liputan Seluruh Malaysia' : 'All States & Territories'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200/90 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  <Truck className="w-3.5 h-3.5 text-emerald-300" />
                  <span>{isBM ? 'Lori Bergerak Disediakan' : 'Mobile Fleets Ready'}</span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {t('loc_coverage_card_title')}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-emerald-100/85 leading-relaxed">
                  {t('loc_coverage_desc')}
                </p>
              </div>

              {/* Malaysia Map Graphic & Location Target Visual */}
              <div className="bg-slate-900/70 border border-emerald-500/25 rounded-2xl p-4 sm:p-5 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between border-b border-emerald-800/40 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🇲🇾</span>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {isBM ? 'Kawasan Pengumpulan Aktif' : 'Active Collection Locations'}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    KL • SELANGOR • PENINSULAR
                  </span>
                </div>

                {/* Pickup Sites Grid */}
                <div>
                  <p className="text-xs font-bold text-emerald-300 mb-2.5">
                    {t('loc_pickup_tagline')}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {collectionSites.map((site, index) => {
                      const Icon = site.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                        >
                          <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                            <Icon className="w-3.5 h-3.5 text-emerald-300" />
                          </div>
                          <span className="text-xs font-medium text-slate-100 truncate">
                            {site.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Pickup Prompt CTA */}
            {onRequestPickup && (
              <div className="pt-6 mt-6 border-t border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <div className="text-xs text-emerald-200/90 text-center sm:text-left">
                  {isBM
                    ? 'Ada barang di tapak anda? Kami hantar kenderaan terus ke lokasi anda.'
                    : 'Have scrap on your site? We dispatch our collection team directly to you.'}
                </div>
                <button
                  onClick={onRequestPickup}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <Truck className="w-4 h-4" />
                  <span>{isBM ? 'Tempah Lori Pengambilan' : 'Book Doorstep Pickup'}</span>
                </button>
              </div>
            )}
          </motion.div>

          {/* Card 2: Physical Shop Location Card & Google Maps (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-200 shadow-xl shadow-emerald-950/5 flex flex-col justify-between relative"
          >
            <div className="space-y-6">
              {/* Card Title & Live Status */}
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300/80 text-xs font-bold">
                  <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{t('loc_shop_card_title')}</span>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-300/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                  {isBM ? 'Buka Hari Ini' : 'Open for Drop-offs'}
                </span>
              </div>

              {/* Shop Name & Pin Visual */}
              <div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-md shadow-emerald-900/20 shrink-0 text-xl font-bold">
                    📍
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                      {SHOP_NAME}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                      {isBM ? 'Pusat Pengumpulan & Timbangan Besi Buruk' : 'Scrap Metal Collection & Recycling Hub'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Exact Address Box */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-200/90 shadow-2xs space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1 text-slate-800">
                    <p className="font-bold text-sm sm:text-base text-slate-950">
                      {SHOP_NAME}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                      Lorong PJS 6/1e, Bandar Sunway,
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">
                      46000 Petaling Jaya, Selangor, Malaysia.
                    </p>
                  </div>

                  {/* Copy Address Button */}
                  <button
                    onClick={handleCopyAddress}
                    title={isBM ? 'Salin alamat' : 'Copy address'}
                    aria-label="Copy address"
                    className="p-2 rounded-xl bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-800 transition-colors border border-slate-200 cursor-pointer shrink-0"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Bandar Sunway / Petaling Jaya</span>
                  <span className="text-emerald-700 font-semibold">{copied ? (isBM ? 'Alamat disalin!' : 'Address copied!') : (isBM ? 'Klik ikon untuk salin' : 'Click to copy')}</span>
                </div>
              </div>

              {/* Interactive Visual Map Preview Card */}
              <a
                href={GOOGLE_MAPS_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-2xl overflow-hidden border border-emerald-300/80 bg-slate-900 shadow-sm transition-all hover:shadow-md"
              >
                {/* Map Graphics Overlay */}
                <div className="h-32 sm:h-36 w-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] bg-slate-900 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40" />

                  {/* Map Roads & Pulse Accent */}
                  <div className="absolute w-40 h-0.5 bg-emerald-500/40 rotate-12" />
                  <div className="absolute h-32 w-0.5 bg-teal-500/30 -rotate-45" />

                  {/* Pin Pulse Center */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/30 animate-ping absolute -inset-0" />
                      <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg border-2 border-white text-base group-hover:scale-110 transition-transform">
                        📍
                      </div>
                    </div>
                    <span className="mt-1.5 px-2.5 py-0.5 rounded-md bg-slate-900/90 border border-emerald-500/40 text-[11px] font-bold text-white shadow-xs">
                      Kedai Besi Buruk (Sunway)
                    </span>
                  </div>

                  <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[10px] text-emerald-300/90 font-mono bg-slate-950/80 px-2 py-0.5 rounded">
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>
            </div>

            {/* Primary Action Button: View Our Shop on Google Maps */}
            <div className="pt-6 mt-6 border-t border-emerald-200/80">
              <a
                href={GOOGLE_MAPS_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/25 transition-all group cursor-pointer"
              >
                <span className="text-lg">📍</span>
                <span>{t('loc_view_maps_btn')}</span>
                <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
