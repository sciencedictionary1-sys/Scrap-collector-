import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickBenefits } from './components/QuickBenefits';
import { AboutUs } from './components/AboutUs';
import { WhatWeCollect } from './components/WhatWeCollect';
import { HowItWorks } from './components/HowItWorks';
import { ScrapPrices } from './components/ScrapPrices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EnvironmentalImpact } from './components/EnvironmentalImpact';
import { Gallery } from './components/Gallery';
import { CallToAction } from './components/CallToAction';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RequestPickupModal } from './components/RequestPickupModal';
import { FloatingPickupButton } from './components/FloatingPickupButton';
import { ContactModalState, ScrapServiceOption } from './types';

export default function App() {
  const [contactModal, setContactModal] = useState<ContactModalState>({
    isOpen: false,
    serviceType: 'sell',
    materialName: undefined,
  });

  const handleOpenPickupModal = (
    serviceType: ScrapServiceOption = 'pickup',
    materialName?: string,
    initialStep?: number
  ) => {
    setContactModal({
      isOpen: true,
      serviceType,
      materialName,
      initialStep,
    });
  };

  const handleClosePickupModal = () => {
    setContactModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white pb-24 sm:pb-0">
      {/* Top Navigation */}
      <Navbar onRequestPickup={(mat) => handleOpenPickupModal('pickup', mat)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onRequestPickup={() => handleOpenPickupModal('pickup')}
          onExploreMaterials={() => handleScrollToSection('what-we-collect')}
        />

        {/* 2. Quick Benefits */}
        <QuickBenefits onRequestPickup={() => handleOpenPickupModal('pickup')} />

        {/* 3. About Us */}
        <AboutUs onRequestPickup={() => handleOpenPickupModal('pickup')} />

        {/* 4. What We Collect (with Quick Price & Sell Material actions) */}
        <WhatWeCollect
          onRequestPickup={(service, mat) => handleOpenPickupModal(service || 'sell', mat, mat ? 2 : 1)}
        />

        {/* 5. How It Works */}
        <HowItWorks onRequestPickup={() => handleOpenPickupModal('pickup')} />

        {/* 6. Scrap Prices */}
        <ScrapPrices
          onRequestPickup={(service, mat) => handleOpenPickupModal(service || 'price', mat, 2)}
        />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Environmental Impact */}
        <EnvironmentalImpact onRequestPickup={() => handleOpenPickupModal('pickup')} />

        {/* 9. Gallery */}
        <Gallery onRequestPickup={(mat) => handleOpenPickupModal('pickup', mat, mat ? 2 : 1)} />

        {/* 10. Call to Action Banner */}
        <CallToAction onRequestPickup={() => handleOpenPickupModal('sell')} />

        {/* 11. Location & Coverage Section */}
        <LocationSection onRequestPickup={() => handleOpenPickupModal('pickup')} />

        {/* 12. Contact Section */}
        <ContactSection onRequestPickup={() => handleOpenPickupModal('pickup')} />
      </main>

      {/* Footer */}
      <Footer onRequestPickup={(mat) => handleOpenPickupModal('pickup', mat)} />

      {/* Permanent Fixed / Floating 3-Button Action Bar (Sell, Pickup, Chat WhatsApp) */}
      <FloatingPickupButton
        onSell={() => handleOpenPickupModal('sell')}
        onPickup={() => handleOpenPickupModal('pickup')}
      />

      {/* Smart Scrap Selling & Pickup Contact Modal */}
      <RequestPickupModal
        isOpen={contactModal.isOpen}
        onClose={handleClosePickupModal}
        serviceType={contactModal.serviceType}
        materialName={contactModal.materialName}
        initialStep={contactModal.initialStep}
      />
    </div>
  );
}

