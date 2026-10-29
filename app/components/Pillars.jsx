"use client";

import React from 'react';

export default function Pillars() {
  return (
    <section className="section section-muted" id="pillars">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-pill">The Bazaar AF Guarantee</span>
          <h2 className="section-title">Four reasons your family will feel the difference</h2>
          <p className="section-desc">
            We built Bazaar AF to fix what other services get wrong: hidden delivery fees, agonizing waiting times, and silence after you pay.
          </p>
        </div>

        <div className="pillars-layout">
          {/* Card 1 */}
          <div className="pillar-item featured">
            <div className="pillar-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h3 className="pillar-heading">Free Delivery. Always.</h3>
            <p className="pillar-body">
              No hidden fuel charges, no handling fees, no checkout surprises. The price you see is the final price delivered to the city center.
            </p>
            <div className="pillar-tag">Every Order • Every City We Serve</div>
          </div>

          {/* Card 2 */}
          <div className="pillar-item">
            <div className="pillar-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="pillar-heading">Ordered Today. Delivered Today.</h3>
            <p className="pillar-body">
              Orders placed before 2:00 PM local time are packed from fresh depots and delivered the very same day in Kabul, Mazar, Herat & Jalalabad.
            </p>
            <div className="pillar-tag secondary">Hours, not weeks.</div>
          </div>

          {/* Card 3 */}
          <div className="pillar-item">
            <div className="pillar-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <h3 className="pillar-heading">You Will See It Arrive.</h3>
            <p className="pillar-body">
              Every delivery concludes with an authentic photo of your family receiving the package, sent to your phone and saved in your order history.
            </p>
            <div className="pillar-tag secondary">Trust needs evidence, not promises.</div>
          </div>

          {/* Card 4 */}
          <div className="pillar-item">
            <div className="pillar-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <h3 className="pillar-heading">Zero Service Fee on Top-Ups.</h3>
            <p className="pillar-body">
              Others charge 15-20% on every mobile recharge. We charge $0. AWCC, Roshan, MTN, Etisalat, Salaam — what you pay is what they get.
            </p>
            <div className="pillar-tag secondary">0% Service Fee Always</div>
          </div>
        </div>
      </div>
    </section>
  );
}
