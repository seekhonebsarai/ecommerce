"use client";

import React from 'react';
import CustomBoxBuilder from '../components/CustomBoxBuilder';

export default function CustomBoxPage() {
  const presets = [
    {
      badge: "Festive Cooking",
      title: "The Qabili Palaw Chef Kit",
      desc: "Everything needed to prepare Afghanistan’s national dish for festive weekend family gatherings.",
      items: [
        "10kg Aged Super Sella Rice",
        "5L Pure Sunflower Cooking Oil",
        "1kg Black Kishmish Raisins",
        "500g Afghan Sliced Almonds",
        "100g Aromatic Green Cardamom"
      ]
    },
    {
      badge: "Daily Tradition",
      title: "Traditional Afghan Tea & Sweets",
      desc: "For the cherished afternoon Chai gathering with family, guests, and neighbors.",
      items: [
        "1kg High-Grown Green Cardamom Tea",
        "1kg Assam Strong Black Tea",
        "5kg Refined White Sugar",
        "1kg Mixed Walnuts & Almonds",
        "1kg Fresh Kabul Sheer Pira Sweets"
      ]
    },
    {
      badge: "Wellness & Elders",
      title: "Elders & Health Care Hamper",
      desc: "Nourishing, nutrient-dense pantry staples tailored for beloved elderly parents.",
      items: [
        "1kg Pure Hindu Kush Mountain Honey",
        "1L Extra Virgin Cold-Pressed Olive Oil",
        "1kg Kandahar Dried Figs (Anjeer)",
        "500g Native Pine Nuts (Chilgoza)",
        "500g Green Tea with Cardamom"
      ]
    }
  ];

  return (
    <div className="page-wrapper-padding">
      <div className="container">
        {/* Page Header */}
        <div className="page-header-banner">
          <span className="badge-pill">Bespoke Grocery Hamper</span>
          <h1 className="page-headline">Custom Care Box Builder</h1>
          <p className="page-subline">
            Build your family’s delivery box item-by-item. Choose exactly what your household loves, observe the live 30kg capacity gauge, and our local depot team will hand-pack everything securely in our emerald box.
          </p>
        </div>

        {/* Custom Box Builder Interactive Tool */}
        <CustomBoxBuilder />

        {/* Unique Section 1: Curated Recipe Presets */}
        <div style={{ marginTop: '4rem' }}>
          <div className="section-head text-center">
            <span className="badge-pill">Inspiration & Presets</span>
            <h2 className="section-title">Popular Pantry Combinations</h2>
            <p className="section-desc">
              Looking for inspiration? Here are three time-tested pantry staple mixes loved by diaspora customers.
            </p>
          </div>

          <div className="preset-recipes-grid">
            {presets.map((preset, index) => (
              <div key={index} className="preset-card">
                <span className="preset-badge">{preset.badge}</span>
                <h3 className="preset-title">{preset.title}</h3>
                <p className="preset-desc">{preset.desc}</p>
                <ul className="preset-items-list">
                  {preset.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Unique Section 2: How We Pack Custom Boxes */}
        <div style={{ marginTop: '4rem' }}>
          <div className="section-head text-center">
            <span className="badge-pill">Packing Protocol</span>
            <h2 className="section-title">Our 4-Stage Custom Packing Standard</h2>
            <p className="section-desc">
              Every custom order is treated like a gift for our own families.
            </p>
          </div>

          <div className="quality-standards-grid">
            <div className="quality-item-card">
              <div className="quality-icon">⚖️</div>
              <h3 className="quality-title">1. Precision Digital Scale</h3>
              <p className="quality-desc">Every bulk staple is weighed on certified digital depot scales so you always get exact or surplus grammage.</p>
            </div>
            <div className="quality-item-card">
              <div className="quality-icon">🛡️</div>
              <h3 className="quality-title">2. Double-Lined Packaging</h3>
              <p className="quality-desc">Flour, rice, and sugar are placed in heavy-duty food-grade plastic liners before entering the outer box to prevent moisture or dust.</p>
            </div>
            <div className="quality-item-card">
              <div className="quality-icon">🫧</div>
              <h3 className="quality-title">3. Cushioning for Liquids</h3>
              <p className="quality-desc">Honey jars, tea tins, and cooking oil cans are wrapped in shock-absorbing air cushions to withstand transit vibrations.</p>
            </div>
            <div className="quality-item-card">
              <div className="quality-icon">🔒</div>
              <h3 className="quality-title">4. Tamper-Proof Seal</h3>
              <p className="quality-desc">The green Bazaar AF box is sealed with high-adhesion security tape with your recipient’s name and your greeting card on top.</p>
            </div>
          </div>
        </div>

        {/* Unique Section 3: Special Item Sourcing Assistance */}
        <div className="process-bottom-banner" style={{ marginTop: '4rem' }}>
          <div className="banner-left">
            <h3 className="banner-title">Need a Special Grocery Brand or Baby Formula?</h3>
            <p className="banner-sub">
              If an item you need is not in the builder list (such as specialized infant milk formula, medical supplements, or a specific local spice), our concierge can source it directly from the bazaar for you.
            </p>
          </div>
          <div className="banner-actions">
            <a
              href="https://wa.me/13079981368"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ backgroundColor: '#25D366', color: 'white' }}
            >
              Request Custom Item on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
