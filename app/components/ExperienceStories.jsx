"use client";

import React from 'react';
import Link from 'next/link';

export default function ExperienceStories() {
  return (
    <section className="section section-muted" id="experience">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-pill">The Experience</span>
          <h2 className="section-title">Why Sending Care Directly Changes Everything</h2>
          <p className="section-desc">
            For decades, Afghans abroad had only one painful choice: send cash wire remittances and hope for the best. Bazaar AF transforms money into tangible love, fresh food, and joyful surprises.
          </p>
        </div>

        {/* Comparison: The Old Way vs The Bazaar AF Experience */}
        <div className="comparison-table-wrapper">
          <div className="comparison-side old-way">
            <div className="comp-badge old">The Old Way: Cash Remittance</div>
            <ul className="comp-list">
              <li>
                <span className="cross-bullet">✕</span>
                <div>
                  <strong>Hefty Kiosk Fees (10–20%):</strong>
                  <p>Exchange rates are manipulated and remittance companies take a cut at both ends.</p>
                </div>
              </li>
              <li>
                <span className="cross-bullet">✕</span>
                <div>
                  <strong>Dangerous Bank Lines in Kabul:</strong>
                  <p>Family members often queue for hours or days in the heat/cold just to collect cash.</p>
                </div>
              </li>
              <li>
                <span className="cross-bullet">✕</span>
                <div>
                  <strong>Heavy Burden of Buying in Bulk:</strong>
                  <p>Elderly parents or mothers must hire local carts to haul 50kg flour and 25kg rice sacks from the bazaar.</p>
                </div>
              </li>
              <li>
                <span className="cross-bullet">✕</span>
                <div>
                  <strong>Zero Visibility & Anxiety:</strong>
                  <p>You never know if the money arrived or if it was spent on essentials until a delayed phone call.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="comparison-side kharid-way">
            <div className="comp-badge new">The Bazaar AF Experience: Direct Care</div>
            <ul className="comp-list">
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>100% Value Delivered to Their Door:</strong>
                  <p>Transparent pricing in USD, EUR, or CAD. Free city delivery and $0 fees on mobile top-ups.</p>
                </div>
              </li>
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Delivered Directly to Their Doorstep:</strong>
                  <p>No queuing, no travel, and no danger. Our courier carries the heavy sacks right to their doorway.</p>
                </div>
              </li>
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Inspected Grade-A Pantry Food:</strong>
                  <p>Only authentic aged sella rice, premium triple-refined cooking oil, and clean stone-ground flour.</p>
                </div>
              </li>
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Instant Photo Proof of Delivery:</strong>
                  <p>A high-resolution photograph of your smiling family holding the sealed box is sent right to your phone.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Diaspora Story Quote Card */}
        <div className="diaspora-spotlight-card">
          <div className="spotlight-quote-mark">“</div>
          <div className="spotlight-content">
            <h3 className="spotlight-title">“My mother cried tears of joy when the birthday cake and groceries arrived.”</h3>
            <p className="spotlight-text">
              “I live in Frankfurt and haven't been able to visit my family in Herat for three years. Last month was my mother's 65th birthday. Through Bazaar AF, I ordered a fresh chocolate cake, a jasmine bouquet, and a monthly family pantry box. When the courier sent me the photo on WhatsApp with my mother holding my handwritten card, my whole family in Germany was moved to tears. You aren't just delivering food; you are delivering our heartbeat back home.”
            </p>
            <div className="spotlight-author-row">
              <span className="spotlight-flag">🇩🇪</span>
              <div>
                <strong>Ahmad Farhad & Family</strong>
                <div className="spotlight-sub">Frankfurt, Germany • Sending to Herat, Afghanistan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
