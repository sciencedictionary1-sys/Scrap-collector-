import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'pill' | 'compact' | 'footer';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'pill',
  className = '',
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center rounded-lg bg-gray-100 p-0.5 border border-gray-200 ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
            language === 'en'
              ? 'bg-white text-emerald-700 shadow-2xs font-extrabold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLanguage('bm')}
          className={`px-2 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
            language === 'bm'
              ? 'bg-emerald-600 text-white shadow-2xs font-extrabold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          aria-label="Tukar ke Bahasa Melayu"
        >
          BM
        </button>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center gap-2 text-xs text-slate-400 ${className}`}>
        <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span className="text-slate-300 font-semibold">Bahasa / Language:</span>
        <div className="inline-flex rounded-lg bg-slate-800 p-0.5 border border-slate-700">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
              language === 'en'
                ? 'bg-emerald-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLanguage('bm')}
            className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
              language === 'bm'
                ? 'bg-emerald-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Bahasa Melayu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-2xs backdrop-blur-xs ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <div className="pl-1.5 text-slate-400 hidden sm:flex items-center">
        <Globe className="w-3.5 h-3.5 text-emerald-600" />
      </div>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
          language === 'en'
            ? 'bg-emerald-600 text-white shadow-xs scale-102'
            : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
        }`}
        title="Switch to English"
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('bm')}
        className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
          language === 'bm'
            ? 'bg-emerald-600 text-white shadow-xs scale-102'
            : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
        }`}
        title="Tukar ke Bahasa Melayu"
        aria-pressed={language === 'bm'}
      >
        BM
      </button>
    </div>
  );
};
