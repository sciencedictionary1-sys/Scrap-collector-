export type Language = 'en' | 'bm';

export interface AcceptedMaterial {
  id: string;
  name: string;
  nameBm?: string;
  iconName: string;
  category: string;
  categoryBm?: string;
  shortDescription: string;
  shortDescriptionBm?: string;
  fullDescription: string;
  fullDescriptionBm?: string;
  acceptedExamples: string[];
  acceptedExamplesBm?: string[];
  notAcceptedExamples?: string[];
  notAcceptedExamplesBm?: string[];
  prepTips?: string;
  prepTipsBm?: string;
  image: string;
  price?: string;
  priceBm?: string;
  unit?: string;
  unitBm?: string;
}

export interface ScrapPriceItem {
  id: string;
  material: string;
  materialBm?: string;
  category: string;
  categoryBm?: string;
  price: string;
  priceBm?: string;
  unit: string;
  unitBm?: string;
  note?: string;
  noteBm?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleBm?: string;
  category: string;
  categoryBm?: string;
  description: string;
  descriptionBm?: string;
  imageUrl: string;
  aspectRatio?: string;
}

export interface BenefitCard {
  id: string;
  title: string;
  titleBm?: string;
  description: string;
  descriptionBm?: string;
  iconName: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  titleBm?: string;
  description: string;
  descriptionBm?: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  titleBm?: string;
  description: string;
  descriptionBm?: string;
  iconName: string;
}

export interface EnvironmentalImpactItem {
  id: string;
  title: string;
  titleBm?: string;
  description: string;
  descriptionBm?: string;
  iconName: string;
}

export type ScrapServiceOption = 'sell' | 'pickup' | 'price' | 'bulk';

export interface ContactModalState {
  isOpen: boolean;
  serviceType?: ScrapServiceOption;
  materialName?: string;
  materials?: string[];
  initialStep?: number;
  customNote?: string;
}
