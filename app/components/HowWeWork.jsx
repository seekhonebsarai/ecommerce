"use client";

import React from 'react';
import Link from 'next/link';

export default function HowWeWork() {
  const steps = [
    {
      num: "01",
      icon: "🌍",
      title: "Order Online from Anywhere",
      subtitle: "USA, Canada, Europe, Australia & Worldwide",
      desc: "Browse our curated grocery boxes, celebration cakes, and fresh fruit hampers, or send mobile credit. Pay securely with any international bank card, Apple Pay, or Google Pay with zero currency friction."
    },
    {
      num: "02",
      icon: "📦",
      title: "Hand-Packed at Local Afghan Depot",
      subtitle: "Kabul, Mazar-i-Sharif, Herat & Jalalabad Hubs",
      desc: "Our local warehouse team selects fresh, Grade-A staples: aged super sella rice, clean stone-ground flour, fresh bakery cakes, and pure cooking oil. We print your personalized greeting card inside the box."
    },
    {
      num: "03",
      icon: "🛵",
      title: "Same-Day Doorstep Courier Dispatch",
      subtitle: "Direct Contact Before Delivery",
      desc: "Our friendly local couriers call your family member in advance to coordinate the best delivery time, navigating city neighborhoods and village routes safely."
    },
    {
      num: "04",
      icon: "📸",
      title: "Photo Proof Sent Directly to Your Phone",
      subtitle: "Instant WhatsApp & Dashboard Confirmation",
      desc: "The moment your family receives the sealed box at their doorway, our courier captures a verified delivery photo and sends it straight to your WhatsApp. You see their smile with your own eyes."
    }
  ];

  return (
    <section className="section" id="how-we-work">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-pill">The Bazaar AF Process</span>
          <h2 className="section-title">How It Works: From Your Screen to Their Door</h2>
          <p className="section-desc">
            We bridge the thousands of miles between you and your loved ones in Afghanistan through a fast, transparent, and dignified 4-step delivery system.
          </p>
        </div>

        <div className="how-it-works-grid">
          {steps.map((step) => (
            <div key={step.num} className="process-journey-card">
              <div className="process-card-header">
                <span className="process-step-num">{step.num}</span>
                <span className="process-icon-bubble">{step.icon}</span>
              </div>
              <h3 className="process-step-title">{step.title}</h3>
              <div className="process-step-sub">{step.subtitle}</div>
              <p className="process-step-text">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="process-bottom-banner">
          <div className="banner-left">
            <h4 className="banner-title">Need Same-Day Delivery Today?</h4>
            <p className="banner-sub">Orders placed before 2:00 PM Afghanistan local time arrive the very same afternoon.</p>
          </div>
          <div className="banner-actions">
            <Link href="/packages" className="btn btn-primary btn-lg">
              Choose a Grocery Box
            </Link>
            <Link href="/delivery-areas" className="btn btn-secondary btn-lg">
              Check Delivery Cities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
