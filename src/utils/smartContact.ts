import { ScrapServiceOption, Language } from '../types';
import { BUSINESS_NAME, ACCEPTED_MATERIALS } from '../config/businessConfig';

export interface ServiceOptionItem {
  id: ScrapServiceOption;
  title: string;
  titleBm: string;
  shortLabel: string;
  shortLabelBm: string;
  emoji: string;
  description: string;
  descriptionBm: string;
}

export const SERVICE_OPTIONS: ServiceOptionItem[] = [
  {
    id: 'sell',
    title: 'Sell Scrap',
    titleBm: 'Jual Barang Lusuh',
    shortLabel: 'Sell Scrap',
    shortLabelBm: 'Jual Barang Lusuh',
    emoji: '💰',
    description: 'Sell clean scrap metal & recyclables for cash/value.',
    descriptionBm: 'Jual besi buruk & barangan kitar semula untuk wang tunai atau nilai.',
  },
  {
    id: 'pickup',
    title: 'Request Scrap Pickup',
    titleBm: 'Mohon Pengambilan Barang Lusuh',
    shortLabel: 'Request Pickup',
    shortLabelBm: 'Mohon Pengambilan',
    emoji: '🚚',
    description: 'Schedule a prompt collection at your location.',
    descriptionBm: 'Jadualkan pengambilan pantas di lokasi rumah atau premis anda.',
  },
  {
    id: 'price',
    title: 'Check Scrap Price',
    titleBm: 'Semak Harga Barang Lusuh',
    shortLabel: 'Check Price',
    shortLabelBm: 'Semak Harga',
    emoji: '📊',
    description: "Get today's latest market rates for your scrap materials.",
    descriptionBm: 'Dapatkan kadar harga pasaran terkini untuk barangan lusuh anda.',
  },
  {
    id: 'bulk',
    title: 'Bulk / Business Scrap',
    titleBm: 'Barang Lusuh Pukal / Perniagaan',
    shortLabel: 'Bulk Scrap',
    shortLabelBm: 'Barang Lusuh Pukal',
    emoji: '🏭',
    description: 'Large commercial, industrial site, or warehouse volume.',
    descriptionBm: 'Kuantiti pukal komersial, tapak industri, atau pembersihan gudang.',
  },
];

export interface MaterialOptionItem {
  id: string;
  name: string;
  nameBm: string;
  emoji: string;
  category: string;
  categoryBm?: string;
  description: string;
  descriptionBm: string;
}

const materialEmojiMap: Record<string, string> = {
  'aluminium-profiles': '🪟',
  'aluminium-sheets': '📄',
  'aluminium-frames': '🖼️',
  'aluminium-pipes-tubes': '📐',
  'aluminium-pipes': '📐',
  'aluminium-wire': '⚡',
  'copper-scrap': '🥉',
  'copper-wire-cable': '🔌',
  'copper-wire': '🔌',
  'copper-strips-sheets': '🟫',
  'copper-strips': '🟫',
  'brass-scrap': '🎺',
  'iron-scrap': '⚓',
  'steel-scrap': '🔨',
  'stainless-steel-scrap': '✨',
  'stainless-steel': '✨',
  'metal-pipes-tubes': '🚰',
  'metal-pipes': '🚰',
  'metal-sheets-plates': '🛡️',
  'metal-sheets': '🛡️',
  'metal-rods-bars': '📏',
  'metal-rods': '📏',
  'mixed-metal-scrap': '🔩',
  'mixed-metal': '🔩',
  'electric-motors': '⚙️',
  'electric-cables': '🧵',
  'air-conditioner-scrap': '❄️',
  'ac-compressors': '🧰',
  'electrical-equipment': '⚡',
  'computer-parts': '💻',
  'printers-photocopiers': '🖨️',
  'fans-fan-motors': '💨',
  'metal-cans-containers': '🥫',
  'metal-cans': '🥫',
  'old-machinery-equipment': '🚜',
  'old-machinery': '🚜',
  'metal-frames-furniture': '🪑',
  'metal-furniture': '🪑',
  'mixed-electrical-scrap': '🔌',
  'e-waste': '📱',
  'other-mixed-scrap': '📦',
  'glass': '🍾',
  'cans': '🥫',
};

/**
 * Dynamically generated from ACCEPTED_MATERIALS so owner edits automatically propagate!
 */
export const MATERIAL_OPTIONS: MaterialOptionItem[] = ACCEPTED_MATERIALS.map((m) => ({
  id: m.id,
  name: m.name,
  nameBm: m.nameBm || m.name,
  emoji: materialEmojiMap[m.id] || '🔩',
  category: m.category,
  categoryBm: m.categoryBm,
  description: m.shortDescription,
  descriptionBm: m.shortDescriptionBm || m.shortDescription,
}));

export const QUANTITY_UNITS = [
  { id: 'kg', labelEn: 'kg', labelBm: 'kg' },
  { id: 'tons', labelEn: 'tonnes', labelBm: 'tan' },
  { id: 'bags', labelEn: 'bags', labelBm: 'beg' },
  { id: 'boxes', labelEn: 'boxes', labelBm: 'kotak' },
  { id: 'pieces', labelEn: 'pieces', labelBm: 'unit/keping' },
  { id: 'lorry', labelEn: 'lorry loads', labelBm: 'muatan lori' },
  { id: 'other', labelEn: 'other', labelBm: 'lain-lain' },
];

/**
 * Helper to translate and join material names naturally
 */
export function formatMaterialsInSentence(materials: string[], lang: Language = 'en'): string {
  const isBm = lang === 'bm';
  if (!materials || materials.length === 0) {
    return isBm ? 'barang lusuh / besi buruk' : 'scrap materials';
  }

  const items = materials.map((m) => {
    const trimmed = m.trim();
    // Search in ACCEPTED_MATERIALS or MATERIAL_OPTIONS
    const matched = ACCEPTED_MATERIALS.find(
      (opt) =>
        opt.id.toLowerCase() === trimmed.toLowerCase() ||
        opt.name.toLowerCase() === trimmed.toLowerCase() ||
        (opt.nameBm && opt.nameBm.toLowerCase() === trimmed.toLowerCase())
    );

    if (matched) {
      if (isBm) {
        return matched.nameBm || matched.name;
      } else {
        return matched.name;
      }
    }

    return trimmed;
  });

  if (items.length === 1) return items[0];
  const joinWord = isBm ? ' dan ' : ' and ';
  if (items.length === 2) return `${items[0]}${joinWord}${items[1]}`;
  return `${items.slice(0, -1).join(', ')}${joinWord}${items[items.length - 1]}`;
}

export function formatMaterialsList(materials: string[], lang: Language = 'en'): string {
  const isBm = lang === 'bm';
  if (!materials || materials.length === 0) {
    return isBm ? '• Barang lusuh / besi buruk' : '• Scrap materials';
  }

  return materials
    .map((m) => {
      const trimmed = m.trim();
      const matched = ACCEPTED_MATERIALS.find(
        (opt) =>
          opt.id.toLowerCase() === trimmed.toLowerCase() ||
          opt.name.toLowerCase() === trimmed.toLowerCase() ||
          (opt.nameBm && opt.nameBm.toLowerCase() === trimmed.toLowerCase())
      );

      if (matched) {
        return isBm ? `• ${matched.nameBm || matched.name}` : `• ${matched.name}`;
      }
      return `• ${trimmed}`;
    })
    .join('\n');
}

/**
 * Generate formatted WhatsApp message based on selected service type, materials, and quantity
 */
export function generateWhatsAppMessage(
  service: ScrapServiceOption,
  materials: string[],
  quantityValue?: string,
  quantityUnit?: string,
  lang: Language = 'en'
): string {
  const brand = BUSINESS_NAME || 'Scrap Collector';
  const isBm = lang === 'bm';
  const matSentence = formatMaterialsInSentence(materials, lang);

  // Format quantity cleanly, defaulting to 20 kg if not entered
  let qtyFormatted = '20 kg';
  if (quantityValue && quantityValue.trim() !== '') {
    let unitLabel = quantityUnit || 'kg';
    if (isBm) {
      const matchedUnit = QUANTITY_UNITS.find((u) => u.id === quantityUnit);
      if (matchedUnit) unitLabel = matchedUnit.labelBm;
    }
    const val = quantityValue.trim();
    qtyFormatted = val.toLowerCase().includes(unitLabel.toLowerCase()) ? val : `${val} ${unitLabel}`;
  }

  if (isBm) {
    let intentLine = `Saya ingin menjual ${matSentence}.`;
    if (service === 'pickup') {
      intentLine = `Saya ingin memohon kutipan (pickup) untuk ${matSentence}.`;
    } else if (service === 'price') {
      intentLine = `Saya ingin menyemak harga semasa untuk ${matSentence}.`;
    } else if (service === 'bulk') {
      intentLine = `Saya mempunyai kuantiti pukal ${matSentence} untuk dijual.`;
    }

    return [
      `Hai ${brand}! 👋`,
      intentLine,
      `Anggaran kuantiti: ${qtyFormatted}.`,
      `Sila maklumkan harga hari ini dan sama ada kutipan tersedia.`,
      `Terima kasih. ♻️`,
    ].join('\n');
  }

  // English
  let intentLine = `I would like to sell ${matSentence}.`;
  if (service === 'pickup') {
    intentLine = `I would like to request scrap pickup for ${matSentence}.`;
  } else if (service === 'price') {
    intentLine = `I would like to check current prices for ${matSentence}.`;
  } else if (service === 'bulk') {
    intentLine = `I have a bulk quantity of ${matSentence} to sell.`;
  }

  return [
    `Hello ${brand}! 👋`,
    intentLine,
    `Estimated quantity: ${qtyFormatted}.`,
    `Please let me know today's price and available pickup slots.`,
    `Thank you. ♻️`,
  ].join('\n');
}

/**
 * Generate formatted email subject and body
 */
export function generateEmailContent(
  service: ScrapServiceOption,
  materials: string[],
  quantityValue?: string,
  quantityUnit?: string,
  lang: Language = 'en'
): { subject: string; body: string } {
  const brand = BUSINESS_NAME || 'Scrap Collector';
  const isBm = lang === 'bm';
  const matSentence = formatMaterialsInSentence(materials, lang);

  let qtyFormatted = '20 kg';
  if (quantityValue && quantityValue.trim() !== '') {
    let unitLabel = quantityUnit || 'kg';
    if (isBm) {
      const matchedUnit = QUANTITY_UNITS.find((u) => u.id === quantityUnit);
      if (matchedUnit) unitLabel = matchedUnit.labelBm;
    }
    const val = quantityValue.trim();
    qtyFormatted = val.toLowerCase().includes(unitLabel.toLowerCase()) ? val : `${val} ${unitLabel}`;
  }

  if (isBm) {
    const serviceLabelsBm: Record<ScrapServiceOption, string> = {
      sell: 'Jual Barang Lusuh',
      pickup: 'Kutipan Barang Lusuh',
      price: 'Semak Harga Barang Lusuh',
      bulk: 'Barang Lusuh Pukal',
    };

    let intentLine = `Saya ingin menjual ${matSentence}.`;
    if (service === 'pickup') {
      intentLine = `Saya ingin memohon kutipan (pickup) untuk ${matSentence}.`;
    } else if (service === 'price') {
      intentLine = `Saya ingin menyemak harga semasa untuk ${matSentence}.`;
    } else if (service === 'bulk') {
      intentLine = `Saya mempunyai kuantiti pukal ${matSentence} untuk dijual.`;
    }

    const subject = `Permohonan Barang Lusuh - ${serviceLabelsBm[service] || 'Pertanyaan'}`;
    const body = [
      `Hai ${brand}! 👋`,
      intentLine,
      `Anggaran kuantiti: ${qtyFormatted}.`,
      `Sila maklumkan harga hari ini dan sama ada kutipan tersedia.`,
      `Terima kasih. ♻️`,
    ].join('\n');

    return { subject, body };
  }

  const serviceLabels: Record<ScrapServiceOption, string> = {
    sell: 'Sell Scrap Inquiry',
    pickup: 'Scrap Pickup Request',
    price: 'Scrap Price Inquiry',
    bulk: 'Bulk Scrap Request',
  };

  let intentLine = `I would like to sell ${matSentence}.`;
  if (service === 'pickup') {
    intentLine = `I would like to request pickup for ${matSentence}.`;
  } else if (service === 'price') {
    intentLine = `I would like to check current prices for ${matSentence}.`;
  } else if (service === 'bulk') {
    intentLine = `I have a bulk quantity of ${matSentence} to sell.`;
  }

  const subject = `Scrap Request - ${serviceLabels[service] || 'Inquiry'}`;
  const body = [
    `Hello ${brand}! 👋`,
    intentLine,
    `Estimated quantity: ${qtyFormatted}.`,
    `Please let me know today's price and whether pickup is available.`,
    `Thank you. ♻️`,
  ].join('\n');

  return { subject, body };
}
