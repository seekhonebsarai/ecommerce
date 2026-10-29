"use client";

import React from 'react';
import Link from 'next/link';
import ProductCatalog from '../components/ProductCatalog';

export default function PackagesPage() {
  const rationPlans = [
    {
      size: "Small Household (1–3 Persons)",
      box: "Weekly Essentials Pantry Box",
      rations: "25kg Fine Wheat Flour, 10kg Sella Rice, 5L Pure Sunflower Oil, 2kg Sugar, 1kg Green Tea",
      duration: "15 to 20 Days",
      ideal: "Elderly parents, single-parent homes, or couples"
    },
    {
      size: "Standard Family (4–7 Persons)",
      box: "Full Month Family Food Basket",
      rations: "50kg Premium Stone-Ground Flour, 25kg Aged Super Sella Rice, 10L Cooking Oil, 5kg Sugar, 2kg Chickpeas, 2kg Tea",
      duration: "30 Full Days",
      ideal: "Core Afghan family monthly pantry sustenance"
    },
    {
      size: "Large / Extended Family (8–14 Persons)",
      box: "Diaspora Mega Care Box",
      rations: "100kg Flour (2 bags), 50kg Rice, 20L Cooking Oil, 10kg Sugar, Pulses, Dry Fruits & Spices",
      duration: "35 to 45 Days",
      ideal: "Multi-generation joint family households"
    },
    {
      size: "Celebration / Special Occasion",
      box: "Birthday & Occasion Sweet Hamper",
      rations: "2kg Fresh Bakery Buttercream Cake, 12 Fresh Red Roses, 1kg Sheer Pira & Candies, Handwritten Card",
      duration: "Same-Day Celebration",
      ideal: "Mothers' birthdays, Eid greetings, wedding congratulations"
    }
  ];

  return (
    <div className="page-wrapper-padding">
      <div className="container">
        {/* Page Header */}
        <div className="page-header-banner">
          <span className="badge-pill">Store Catalogue & Care Boxes</span>
          <h1 className="page-headline">Monthly Grocery Packages & Celebration Gifts</h1>
          <p className="page-subline">
            Every package is hand-selected at our local depots in Kabul, Mazar-i-Sharif, and Herat. Inspected Grade-A staples, sealed with tamper-proof emerald security tape, and couriered straight to their doorstep with photo proof.
          </p>
        </div>

        {/* Product Catalog Component */}
        <ProductCatalog />

        {/* Unique Section 1: Family Size & Ration Planning Guide */}
        <div className="packages-guide-section">
          <div className="section-head text-center">
            <span className="badge-pill">Ration Planning Guide</span>
            <h2 className="section-title">How to Choose the Right Package for Your Family</h2>
            <p className="section-desc">
              Not sure how much flour or rice your household in Afghanistan consumes? Here is our curated consumption breakdown based on average Afghan family dining habits.
            </p>
          </div>

          <div className="package-guide-table-wrap">
            <table className="package-guide-table">
              <thead>
                <tr>
                  <th>Family Size</th>
                  <th>Recommended Package</th>
                  <th>Included Staples Breakdown</th>
                  <th>Estimated Duration</th>
                  <th>Ideal For</th>
                </tr>
              </thead>
              <tbody>
                {rationPlans.map((plan, index) => (
                  <tr key={index}>
                    <td><strong>{plan.size}</strong></td>
                    <td style={{ color: 'var(--primary)', fontWeight: '700' }}>{plan.box}</td>
                    <td>{plan.rations}</td>
                    <td><span className="badge-pill" style={{ padding: '0.2rem 0.6rem' }}>{plan.duration}</span></td>
                    <td>{plan.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Unique Section 2: Quality & Sourcing Standards */}
        <div style={{ marginTop: '4rem' }}>
          <div className="section-head text-center">
            <span className="badge-pill">Our Quality Promise</span>
            <h2 className="section-title">Only Clean, Grade-A Afghan Staples</h2>
            <p className="section-desc">
              We never compromise on the quality of food your family eats. Every item goes through stringent depot checks.
            </p>
          </div>

          <div className="quality-standards-grid">
            <div className="quality-item-card">
              <div className="quality-icon">🌾</div>
              <h3 className="quality-title">Triple-Cleaned Flour</h3>
              <p className="quality-desc">Fine stone-ground Afghan and Kazakh wheat flour, free from husks or debris, perfect for fresh home tandoor naan.</p>
            </div>
            <div className="quality-item-card">
              <div className="quality-icon">🍚</div>
              <h3 className="quality-title">Aged Super Sella Rice</h3>
              <p className="quality-desc">Long-grain aromatic rice, aged naturally for at least 12 months for elongated grains and fluffy Qabili Palaw.</p>
            </div>
            <div className="quality-item-card">
              <div className="quality-icon">🫒</div>
              <h3 className="quality-title">100% Pure Cooking Oil</h3>
              <p className="quality-desc">Triple-refined sunflower and vegetable oil in factory-sealed, heavy-duty tin containers to prevent leakage during transit.</p>
            </div>
            <div className="quality-item-card">
              <div className="quality-icon">💌</div>
              <h3 className="quality-title">Personalized Greeting Card</h3>
              <p className="quality-desc">We print your custom love note or prayer in Dari, Pashto, or English on glossy cardstock placed on top of the box.</p>
            </div>
          </div>
        </div>

        {/* Unique Section 3: Custom Box Callout */}
        <div className="process-bottom-banner" style={{ marginTop: '4rem' }}>
          <div className="banner-left">
            <h3 className="banner-title">Need Exact Brands or Custom Weights?</h3>
            <p className="banner-sub">
              If our standard monthly boxes don't match your family’s specific grocery routine, you can build your own custom hamper item-by-item with live weight tracking up to 30kg.
            </p>
          </div>
          <div className="banner-actions">
            <Link href="/custom-box" className="btn btn-primary btn-lg">
              Launch Custom Box Builder →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
