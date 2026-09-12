// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import { StyleProvider } from "@/components/ui/StyleProvider";
import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import AboutSection from './HomePage/sections/About';
import ServicesSection from './HomePage/sections/Services';
import WhyUsSection from './HomePage/sections/WhyUs';
import TestimonialsSection from './HomePage/sections/Testimonials';
import FaqSection from './HomePage/sections/Faq';
import ContactSection from './HomePage/sections/Contact';

export default function HomePage(): React.JSX.Element {
  return (
    <StyleProvider heroBackground="none" siteBackground="none" buttonVariant="stagger">
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <WhyUsSection />

      <TestimonialsSection />

      <FaqSection />

      <ContactSection />
    </StyleProvider>
  );
}