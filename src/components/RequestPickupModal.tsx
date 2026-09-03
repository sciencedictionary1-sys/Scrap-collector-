import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  X,
  ArrowLeft,
  Check,
  MessageCircle,
  Mail,
  Phone,
  Facebook,
  Copy,
  CheckCheck,
  Camera,
  Trash2,
  Sparkles,
  Info,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import {
  BUSINESS_NAME,
  getPhoneUrl,
  getWhatsAppUrl,
  getEmailUrl,
  getFacebookUrl,
} from '../config/businessConfig';
import { ScrapServiceOption } from '../types';
import {
  SERVICE_OPTIONS,
  MATERIAL_OPTIONS,
  QUANTITY_UNITS,
  generateWhatsAppMessage,
  generateEmailContent,
} from '../utils/smartContact';
import { useLanguage } from '../context/LanguageContext';

interface RequestPickupModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: ScrapServiceOption;
  materialName?: string;
  initialStep?: number;
}

export const RequestPickupModal: React.FC<RequestPickupModalProps> = ({
  isOpen,
  onClose,
  serviceType: initialService,
  materialName: initialMaterial,
  initialStep = 1,
}) => {
  const { t, language, isBM } = useLanguage();

  // Step State: 1 = Service, 2 = Materials & Quantity, 3 = Preview & Send
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // Selection State
  const [selectedService, setSelectedService] = useState<ScrapServiceOption>('sell');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [quantityValue, setQuantityValue] = useState<string>('');
  const [quantityUnit, setQuantityUnit] = useState<string>('kg');
  
  // Category Filter State for Step 2
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Local Photo Preview (Purely client-side preview, no server upload)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // UI States
  const [copied, setCopied] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Reset or initialize state when modal opens or initial props change
  useEffect(() => {
    if (isOpen) {
      setValidationError(null);
      setCopied(false);
      setSelectedCategory('all');

      if (initialService) {
        setSelectedService(initialService);
      } else {
        setSelectedService('sell');
      }

      if (initialMaterial) {
        setSelectedMaterials([initialMaterial]);
        // If a specific material is passed, start directly at step 2 or 3
        setCurrentStep(initialStep || 2);
      } else {
        setSelectedMaterials([]);
        setCurrentStep(initialStep || 1);
      }
    } else {
      // Clear photo preview memory on close
      setPhotoPreview(null);
    }
  }, [isOpen, initialService, initialMaterial, initialStep]);

  // Keyboard accessibility: Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Categories list for filter chips
  const categories = useMemo(() => {
    const cats = new Set<string>();
    MATERIAL_OPTIONS.forEach((m) => {
      if (m.category) cats.add(m.category);
    });
    return Array.from(cats);
  }, []);

  // Filtered materials by category
  const filteredMaterials = useMemo(() => {
    return MATERIAL_OPTIONS.filter((item) => {
      return selectedCategory === 'all' || item.category === selectedCategory;
    });
  }, [selectedCategory]);

  if (!isOpen) return null;

  // Toggle Material selection (Multiple selection supported)
  const handleToggleMaterial = (materialName: string) => {
    setValidationError(null);
    setSelectedMaterials((prev) => {
      if (prev.includes(materialName)) {
        return prev.filter((m) => m !== materialName);
      } else {
        return [...prev, materialName];
      }
    });
  };

  // Handle Photo File Select (purely local client-side preview)
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotoPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPhotoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Validation before advancing to next step or sending
  const validateStep2 = (): boolean => {
    if (selectedMaterials.length === 0) {
      setValidationError(t('smart_materials_required'));
      return false;
    }
    setValidationError(null);
    return true;
  };

  const handleNextToStep2 = () => {
    setValidationError(null);
    setCurrentStep(2);
  };

  const handleNextToStep3 = () => {
    if (validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    setValidationError(null);
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Generated dynamic messages matching current language
  const generatedWhatsAppMessage = generateWhatsAppMessage(
    selectedService,
    selectedMaterials,
    quantityValue,
    quantityUnit,
    language
  );

  const { subject: generatedEmailSubject, body: generatedEmailBody } = generateEmailContent(
    selectedService,
    selectedMaterials,
    quantityValue,
    quantityUnit,
    language
  );

  const whatsapp = getWhatsAppUrl(generatedWhatsAppMessage);
  const email = getEmailUrl(generatedEmailSubject, generatedEmailBody);
  const phone = getPhoneUrl();
  const facebook = getFacebookUrl();

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedWhatsAppMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const currentServiceItem = SERVICE_OPTIONS.find((s) => s.id === selectedService) || SERVICE_OPTIONS[0];
  const currentServiceTitle = isBM ? currentServiceItem.titleBm : currentServiceItem.title;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="smart-contact-title"
    >
      <div
        className="bg-white rounded-t-3xl sm:rounded-2xl max-w-xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Header */}
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2.5">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="p-1.5 -ml-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label={t('smart_step_back')}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-extrabold text-sm">
                  {t('smart_step_header')} {currentStep} {t('smart_step_of')} 3
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-xs font-semibold text-slate-500">
                  {currentStep === 1
                    ? t('smart_step_1_sub')
                    : currentStep === 2
                    ? t('smart_step_2_sub')
                    : t('smart_step_3_sub')}
                </span>
              </div>
              <h2 id="smart-contact-title" className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                {currentStep === 1
                  ? t('smart_step_1_title')
                  : currentStep === 2
                  ? t('smart_step_2_title')
                  : t('smart_step_3_title')}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar Indicator */}
        <div className="w-full bg-gray-100 h-1 shrink-0">
          <div
            className="bg-emerald-600 h-1 transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {/* ========================================================================= */}
          {/* STEP 1: CHOOSE SERVICE                                                    */}
          {/* ========================================================================= */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <p className="text-xs sm:text-sm text-slate-600">
                {t('smart_step_1_prompt')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_OPTIONS.map((service) => {
                  const isSelected = selectedService === service.id;
                  const title = isBM ? service.titleBm : service.title;
                  const description = isBM ? service.descriptionBm : service.description;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => {
                        setSelectedService(service.id);
                        setValidationError(null);
                      }}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 relative ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50/70 shadow-xs ring-2 ring-emerald-500/20'
                          : 'border-gray-200 bg-white hover:border-emerald-300 hover:bg-gray-50/50'
                      }`}
                    >
                      <div className="text-2xl sm:text-3xl shrink-0 select-none mt-0.5">
                        {service.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className={`text-sm sm:text-base font-bold ${isSelected ? 'text-emerald-900' : 'text-slate-900'}`}>
                            {title}
                          </h3>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-snug">
                          {description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Step 1 Action Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleNextToStep2}
                  className="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t('smart_step_1_continue')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: SELECT MATERIALS, QUANTITY & PHOTO                                */}
          {/* ========================================================================= */}
          {currentStep === 2 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              {/* Selected Service Badge */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{currentServiceItem.emoji}</span>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {t('smart_service_selected_label')}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {currentServiceTitle}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-800 underline cursor-pointer"
                >
                  {t('smart_service_change')}
                </button>
              </div>

              {/* 1. Materials Checklist with Search & Filter */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    {t('smart_materials_label')} <span className="text-emerald-600">*</span>
                  </label>
                  <span className="text-xs text-slate-400">
                    {selectedMaterials.length > 0
                      ? `${selectedMaterials.length} ${t('smart_materials_selected_count')}`
                      : t('smart_materials_prompt')}
                  </span>
                </div>

                {/* Selected Material Tags */}
                {selectedMaterials.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3 p-2 rounded-xl bg-emerald-50/50 border border-emerald-100">
                    {selectedMaterials.map((mat) => {
                      const item = MATERIAL_OPTIONS.find(
                        (m) => m.name === mat || m.nameBm === mat
                      );
                      const label = isBM && item?.nameBm ? item.nameBm : item?.name || mat;
                      const emoji = item?.emoji || '🔩';

                      return (
                        <span
                          key={mat}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-semibold shadow-2xs animate-in zoom-in-95 duration-150"
                        >
                          <span>{emoji}</span>
                          <span>{label}</span>
                          <button
                            type="button"
                            onClick={() => handleToggleMaterial(mat)}
                            className="hover:bg-emerald-700 rounded p-0.5 ml-0.5 cursor-pointer"
                            aria-label={`Remove ${label}`}
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      );
                    })}
                  </div>
                )}

                {/* Category Selection Filter Tabs */}
                <div className="mb-3">
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
                    <button
                      type="button"
                      onClick={() => setSelectedCategory('all')}
                      className={`px-2.5 py-1 rounded-full whitespace-nowrap font-semibold cursor-pointer transition-colors ${
                        selectedCategory === 'all'
                          ? 'bg-slate-900 text-white'
                          : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
                      }`}
                    >
                      {isBM ? `Semua (${MATERIAL_OPTIONS.length})` : `All (${MATERIAL_OPTIONS.length})`}
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-2.5 py-1 rounded-full whitespace-nowrap font-medium cursor-pointer transition-colors ${
                          selectedCategory === cat
                            ? 'bg-emerald-600 text-white font-semibold'
                            : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material Selection Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-56 overflow-y-auto p-1 border border-slate-100 rounded-xl bg-slate-50/50">
                  {filteredMaterials.map((material) => {
                    const isChecked =
                      selectedMaterials.includes(material.name) ||
                      selectedMaterials.includes(material.nameBm);
                    const displayName = isBM ? material.nameBm : material.name;

                    return (
                      <button
                        key={material.id}
                        type="button"
                        onClick={() => handleToggleMaterial(material.name)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2 ${
                          isChecked
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-500'
                            : 'border-gray-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-gray-50'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                            isChecked
                              ? 'bg-emerald-600 border-emerald-600 text-white'
                              : 'border-gray-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-base shrink-0 select-none">{material.emoji}</span>
                        <span className="text-xs truncate leading-tight">{displayName}</span>
                      </button>
                    );
                  })}
                </div>

                {validationError && (
                  <div className="mt-2.5 p-2.5 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-700 animate-in fade-in duration-200">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}
              </div>

              {/* 2. Estimated Quantity Input */}
              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="quantity-input" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    {t('smart_quantity_label')} <span className="text-slate-400 font-normal lowercase">{t('smart_optional_tag')}</span>
                  </label>
                  <span className="text-[11px] text-slate-400">{t('smart_quantity_hint')}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input
                      id="quantity-input"
                      type="text"
                      value={quantityValue}
                      onChange={(e) => setQuantityValue(e.target.value)}
                      placeholder={t('smart_quantity_placeholder')}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                    />
                  </div>

                  <select
                    value={quantityUnit}
                    onChange={(e) => setQuantityUnit(e.target.value)}
                    className="px-3 py-2.5 rounded-xl border border-gray-300 bg-gray-50 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                    aria-label="Quantity unit"
                  >
                    {QUANTITY_UNITS.map((u) => (
                      <option key={u.id} value={u.id}>
                        {isBM ? u.labelBm : u.labelEn}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 3. Optional Scrap Photo */}
              <div className="pt-2 border-t border-gray-100">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-1.5">
                  {t('smart_photo_label')} <span className="text-slate-400 font-normal lowercase">{t('smart_optional_tag')}</span>
                </label>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                  id="scrap-photo-input"
                />

                {photoPreview ? (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-200 shrink-0 border border-gray-300">
                      <img
                        src={photoPreview}
                        alt="Selected scrap preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{t('smart_photo_ready')}</span>
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                        {t('smart_photo_attached_hint')}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemovePhoto}
                      className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                      title={t('smart_photo_remove')}
                      aria-label={t('smart_photo_remove')}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full py-2.5 px-4 rounded-xl border border-dashed border-gray-300 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-xs sm:text-sm font-semibold text-slate-700 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Camera className="w-4 h-4 text-emerald-600" />
                    <span>{t('smart_photo_add_btn')}</span>
                  </button>
                )}

                <p className="text-[11px] text-slate-400 mt-1.5 leading-snug">
                  {t('smart_photo_privacy_note')}
                </p>
              </div>

              {/* Step 2 Actions */}
              <div className="pt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="py-3 px-4 rounded-xl border border-gray-300 text-slate-700 hover:bg-gray-100 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  {t('smart_step_back')}
                </button>

                <button
                  type="button"
                  onClick={handleNextToStep3}
                  className="flex-1 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t('smart_step_2_continue')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 3: MESSAGE PREVIEW & CONTACT CHANNELS                                */}
          {/* ========================================================================= */}
          {currentStep === 3 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              {/* Summary Pill Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-emerald-900">
                    {currentServiceItem.emoji} {currentServiceTitle}
                  </span>
                  <span className="text-emerald-300">•</span>
                  <span className="text-emerald-800 font-medium">
                    {selectedMaterials
                      .map((m) => {
                        if (isBM) {
                          const matched = MATERIAL_OPTIONS.find((opt) => opt.name.toLowerCase() === m.toLowerCase() || opt.nameBm.toLowerCase() === m.toLowerCase());
                          if (matched) return matched.nameBm;
                        }
                        return m;
                      })
                      .join(', ') || '—'}
                  </span>
                  {quantityValue && (
                    <>
                      <span className="text-emerald-300">•</span>
                      <span className="text-emerald-800 font-semibold">
                        {quantityValue} {isBM ? (QUANTITY_UNITS.find(u => u.id === quantityUnit)?.labelBm || quantityUnit) : quantityUnit}
                      </span>
                    </>
                  )}
                </div>

                <button
                  onClick={() => setCurrentStep(2)}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline cursor-pointer ml-auto"
                >
                  {t('smart_summary_edit')}
                </button>
              </div>

              {/* Customer Message Preview Card */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t('smart_preview_label')}</span>
                  </label>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-emerald-700 cursor-pointer"
                    title={t('smart_copy_btn')}
                  >
                    {copied ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">{t('smart_copied_btn')}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t('smart_copy_btn')}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed border border-slate-800 whitespace-pre-line shadow-inner max-h-48 overflow-y-auto">
                  {generatedWhatsAppMessage}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {t('smart_send_clarification')}
                </p>
              </div>

              {/* Primary Action Buttons: WhatsApp & Email */}
              <div className="space-y-2.5 pt-1">
                {/* 1. Large Primary WhatsApp Button */}
                <a
                  id="smart-whatsapp-send-btn"
                  href={whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-emerald-600/30 transition-all flex items-center justify-center gap-2.5 text-center"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>{t('smart_btn_whatsapp')}</span>
                </a>

                {/* 2. Email Button */}
                <a
                  id="smart-email-send-btn"
                  href={email.url}
                  className="w-full py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-[0.98] text-slate-800 font-bold text-xs sm:text-sm border border-gray-200 transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Mail className="w-4 h-4 text-slate-600" />
                  <span>{t('smart_btn_email')}</span>
                </a>
              </div>

              {/* Alternative Direct Channels */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-slate-500">
                <span>{t('smart_direct_channels_label')}</span>
                <div className="flex items-center gap-3 font-semibold">
                  {phone.isConfigured && (
                    <a
                      href={phone.url}
                      className="inline-flex items-center gap-1 text-slate-700 hover:text-emerald-700"
                    >
                      <Phone className="w-3.5 h-3.5 text-blue-600" />
                      <span>{t('nav_call')}</span>
                    </a>
                  )}
                  {facebook.isConfigured && (
                    <a
                      href={facebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-700 hover:text-indigo-700"
                    >
                      <Facebook className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Facebook</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Safety & Privacy Note */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 text-[11px] text-slate-500 flex items-center justify-between shrink-0">
          <span className="flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{t('smart_privacy_badge')}</span>
          </span>
          <span className="font-semibold text-slate-700">{BUSINESS_NAME}</span>
        </div>
      </div>
    </div>
  );
};
