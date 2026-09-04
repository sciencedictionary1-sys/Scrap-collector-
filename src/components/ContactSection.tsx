import React from 'react';
import {
  getPhoneUrl,
  getWhatsAppUrl,
  getEmailUrl,
  getFacebookUrl,
  getLocationDisplay,
  getHoursDisplay,
} from '../config/businessConfig';
import { MapPin, Clock, ArrowUpRight, Sparkles, Phone, MessageCircle, Mail, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  onRequestPickup: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestPickup }) => {
  const { t, language, isBM } = useLanguage();
  const phone = getPhoneUrl();
  const whatsapp = getWhatsAppUrl(undefined, language);
  const email = getEmailUrl();
  const facebook = getFacebookUrl();
  const location = getLocationDisplay(language);
  const hours = getHoursDisplay(language);

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#f4f9f6] border-t border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('contact_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('contact_heading')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t('contact_subheading')}
          </p>
        </div>

        {/* Contact Grid with Individual Distinct Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* 1. WhatsApp Card -> Green */}
          <div className="bg-emerald-50/80 hover:bg-emerald-50/95 border border-emerald-200/90 hover:border-emerald-400 anim-card-emerald delay-stagger-1 interactive-card p-6 rounded-2xl shadow-2xs hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md text-2xl group-hover:scale-105 transition-transform anim-icon-glow">
                  💬
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-200">
                  {isBM ? 'Paling Pantas' : 'Fastest Response'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {t('contact_whatsapp_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-4 leading-relaxed">
                {t('contact_whatsapp_subtitle')}
              </p>
            </div>

            <div className="pt-4 border-t border-emerald-200/60">
              {whatsapp.isConfigured ? (
                <a
                  href={whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{isBM ? 'Buka WhatsApp' : 'Chat on WhatsApp'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                </a>
              ) : (
                <button
                  onClick={onRequestPickup}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{isBM ? 'Buka Borang WhatsApp' : 'Open WhatsApp Form'}</span>
                </button>
              )}
            </div>
          </div>

          {/* 2. Phone Card -> Blue */}
          <div className="bg-blue-50/80 hover:bg-blue-50/95 border border-blue-200/90 hover:border-blue-400 anim-card-blue delay-stagger-2 interactive-card p-6 rounded-2xl shadow-2xs hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform anim-icon-glow">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-blue-100 text-blue-900 border border-blue-200">
                  {isBM ? 'Panggilan Terus' : 'Direct Line'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {t('contact_call_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-4 leading-relaxed">
                {phone.display || t('contact_call_subtitle')}
              </p>
            </div>

            <div className="pt-4 border-t border-blue-200/60">
              {phone.isConfigured ? (
                <a
                  href={phone.url}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{isBM ? 'Hubungi Sekarang' : 'Call Now'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                </a>
              ) : (
                <button
                  onClick={onRequestPickup}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{isBM ? 'Atur Panggilan' : 'Request Call'}</span>
                </button>
              )}
            </div>
          </div>

          {/* 3. Email Card -> Purple */}
          <div className="bg-purple-50/80 hover:bg-purple-50/95 border border-purple-200/90 hover:border-purple-400 anim-card-purple delay-stagger-3 interactive-card p-6 rounded-2xl shadow-2xs hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform anim-icon-glow">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-purple-100 text-purple-900 border border-purple-200">
                  {isBM ? 'Inkuiri Rasmi' : 'Official Inquiries'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                {t('contact_email_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-4 leading-relaxed truncate">
                {email.display || t('contact_email_subtitle')}
              </p>
            </div>

            <div className="pt-4 border-t border-purple-200/60">
              {email.isConfigured ? (
                <a
                  href={email.url}
                  className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{isBM ? 'Hantar E-mel' : 'Send Email'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                </a>
              ) : (
                <button
                  onClick={onRequestPickup}
                  className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{isBM ? 'Hubungi Melalui Borang' : 'Send Form Message'}</span>
                </button>
              )}
            </div>
          </div>

          {/* 4. Location Card -> Orange */}
          <div className="bg-orange-50/80 hover:bg-orange-50/95 border border-orange-200/90 hover:border-orange-400 anim-card-orange delay-stagger-4 interactive-card p-6 rounded-2xl shadow-2xs hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform anim-icon-glow">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-orange-100 text-orange-900 border border-orange-200">
                  {isBM ? 'Kawasan Liputan' : 'Coverage Area'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                {t('contact_area_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-4 leading-relaxed">
                {location.text}
              </p>
            </div>

            <div className="pt-4 border-t border-orange-200/60">
              <button
                onClick={onRequestPickup}
                className="w-full py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isBM ? 'Semak Liputan Lokasi' : 'Check Pickup Availability'}</span>
              </button>
            </div>
          </div>

          {/* 5. Opening Hours Card -> Teal */}
          <div className="bg-teal-50/80 hover:bg-teal-50/95 border border-teal-200/90 hover:border-teal-400 anim-card-teal delay-stagger-5 interactive-card p-6 rounded-2xl shadow-2xs hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform anim-icon-glow">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-teal-100 text-teal-900 border border-teal-200">
                  {isBM ? 'Jadual Operasi' : 'Operating Schedule'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {t('contact_hours_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-4 leading-relaxed">
                {hours.text}
              </p>
            </div>

            <div className="pt-4 border-t border-teal-200/60">
              <button
                onClick={onRequestPickup}
                className="w-full py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>{isBM ? 'Tempah Waktu Pengambilan' : 'Book Pickup Slot'}</span>
              </button>
            </div>
          </div>

          {/* 6. Direct Quick Dialog Card -> Emerald / Dark Contrast */}
          <div className="bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 border border-emerald-700/50 p-6 rounded-2xl shadow-xl text-white flex flex-col justify-between group hover:-translate-y-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-900/80 text-emerald-300 border border-emerald-600/40">
                  {isBM ? 'Borang Segera' : 'Fast Request'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                {t('contact_service_overview_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 mb-4 leading-relaxed">
                {t('contact_service_overview_desc')}
              </p>
            </div>

            <div className="pt-4 border-t border-white/15">
              <button
                onClick={onRequestPickup}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                {t('contact_open_dialog_btn')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

