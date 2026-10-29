"use client";

import React from "react";
import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";

// Lazy loading below-the-fold components with dynamic imports
const HowWeWork = dynamic(() => import("./components/HowWeWork"), {
  loading: () => <div className="lazy-section-placeholder" />
});
const ExperienceStories = dynamic(() => import("./components/ExperienceStories"), {
  loading: () => <div className="lazy-section-placeholder" />
});
const CapabilitiesGrid = dynamic(() => import("./components/CapabilitiesGrid"), {
  loading: () => <div className="lazy-section-placeholder" />
});
const ProductCatalog = dynamic(() => import("./components/ProductCatalog"), {
  loading: () => <div className="lazy-section-placeholder" />
});
const DeliveryCities = dynamic(() => import("./components/DeliveryCities"), {
  loading: () => <div className="lazy-section-placeholder" />
});
const PhotoProofShowcase = dynamic(() => import("./components/PhotoProofShowcase"), {
  loading: () => <div className="lazy-section-placeholder" />
});
const Testimonials = dynamic(() => import("./components/Testimonials"), {
  loading: () => <div className="lazy-section-placeholder" />
});
const FAQ = dynamic(() => import("./components/FAQ"), {
  loading: () => <div className="lazy-section-placeholder" />
});

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. 4 Pillars of Bazaar AF */}
      <Pillars />

      {/* 3. The Working Process - How we work from abroad to door */}
      <HowWeWork />

      {/* 4. The Experience - Why direct care beats cash remittances */}
      <ExperienceStories />

      {/* 5. What We Can Do - Full capabilities & services */}
      <CapabilitiesGrid />

      {/* 6. Product Catalog Showcase */}
      <ProductCatalog />

      {/* 7. Delivery Cities Coverage */}
      <DeliveryCities />

      {/* 8. Photo Proof of Delivery Showcase */}
      <PhotoProofShowcase />

      {/* 9. Customer Reviews & Testimonials */}
      <Testimonials />

      {/* 10. FAQ Accordion */}
      <FAQ />
    </>
  );
}

