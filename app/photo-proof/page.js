"use client";

import React from 'react';
import Link from 'next/link';
import PhotoProofShowcase from '../components/PhotoProofShowcase';

export default function PhotoProofPage() {
  const privacyProtocols = [
    {
      icon: "🧕",
      title: "Cultural Dignity & Face Shielding",
      desc: "We strictly honor Afghan cultural and Islamic modesty norms. If female relatives, mothers, or sisters prefer not to have their faces shown, the courier respectfully photographs only the sealed box and doorstep handover."
    },
    {
      icon: "🔒",
      title: "100% Private Transmission",
      desc: "Your delivery photo is delivered exclusively to your private WhatsApp number and your secure Bazaar AF account. We never publish recipient photos publicly on social media without explicit family permission."
    },
    {
      icon: "📍",
      title: "Timestamped GPS Verification",
      desc: "Every photo is stamped with the exact delivery time in Afghanistan (AFT) and the courier's GPS neighborhood check-in coordinates, confirming the exact residence."
    }
  ];

  const verificationHallmarks = [
    {
      num: "01",
      title: "Intact Emerald Security Tape",
      desc: "Verifies the package was sealed at our depot and has never been opened or tampered with along the road."
    },
    {
      num: "02",
      title: "Personalized Card Visible",
      desc: "Your Dari, Pashto, or English greeting note is placed right on top of the box for immediate recognition."
    },
    {
      num: "03",
      title: "Doorstep Architecture Landmark",
      desc: "The picture captures their home courtyard, entrance, or doorway, giving you immediate reassurance of home."
    },
    {
      num: "04",
      title: "Signed Delivery Dispatch Slip",
      desc: "Along with the photo, the courier logs the recipient’s contact verification on the local route sheet."
    }
  ];

  return (
    <div className="page-wrapper-padding">
      <div className="container">
        {/* Page Header */}
        <div className="page-header-banner">
          <span className="badge-pill">Unrivaled Transparency & Peace of Mind</span>
          <h1 className="page-headline">100% Doorstep Photo Proof Guarantee</h1>
          <p className="page-subline">
            Every single Bazaar AF delivery concludes with an authentic, verified photograph of your family receiving their package in Afghanistan. Sent directly to your phone via WhatsApp so you can see their joy with your own eyes.
          </p>
        </div>

        {/* Live Photo Proof Showcase Component */}
        <PhotoProofShowcase />

        {/* Unique Section 1: The 3-Step Verification Journey */}
        <div className="proof-process-section" style={{ marginTop: '4rem' }}>
          <div className="section-head text-center">
            <span className="badge-pill">The Workflow</span>
            <h2 className="section-title">How Photo Verification Works in Practice</h2>
            <p className="section-desc">
              From our fulfillment depot to your WhatsApp notifications in 3 seamless steps.
            </p>
          </div>

          <div className="process-steps-row">
            <div className="process-card">
              <div className="step-circle-badge">1</div>
              <h3 className="process-heading">Packed at Depot</h3>
              <p className="process-body">
                Our depot team inspects every grocery item, places your printed greeting card inside, and seals the emerald box with high-security tamper tape.
              </p>
            </div>
            <div className="process-card">
              <div className="step-circle-badge">2</div>
              <h3 className="process-heading">Doorstep Handover</h3>
              <p className="process-body">
                Our courteous courier calls your recipient in advance, navigates to their home in Kabul, Herat, or Mazar, and hands over the heavy package.
              </p>
            </div>
            <div className="process-card">
              <div className="step-circle-badge">3</div>
              <h3 className="process-heading">Live Photo to WhatsApp</h3>
              <p className="process-body">
                The courier takes the confirmation photograph with recipient approval and automatically sends it to your phone within minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Unique Section 2: Privacy & Dignity Protocol */}
        <div style={{ marginTop: '4.5rem' }}>
          <div className="section-head text-center">
            <span className="badge-pill">Respect & Modesty</span>
            <h2 className="section-title">Our Strict Dignity & Cultural Privacy Protocol</h2>
            <p className="section-desc">
              We understand Afghan family traditions deeply. Our photo protocol is built on utmost respect and discretion.
            </p>
          </div>

          <div className="photo-guarantee-grid">
            {privacyProtocols.map((item, index) => (
              <div key={index} className="guarantee-card">
                <div className="guarantee-icon">{item.icon}</div>
                <h3 className="guarantee-title">{item.title}</h3>
                <p className="guarantee-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Unique Section 3: 4 Hallmarks of Tamper-Proof Delivery */}
        <div style={{ marginTop: '4.5rem' }}>
          <div className="section-head text-center">
            <span className="badge-pill">Verification Standards</span>
            <h2 className="section-title">4 Hallmarks of Every Bazaar AF Delivery Photo</h2>
          </div>

          <div className="quality-standards-grid">
            {verificationHallmarks.map((h, i) => (
              <div key={i} className="quality-item-card" style={{ textAlign: 'left' }}>
                <span className="process-step-num" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>{h.num}</span>
                <h3 className="quality-title">{h.title}</h3>
                <p className="quality-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="process-bottom-banner" style={{ marginTop: '4rem' }}>
          <div className="banner-left">
            <h3 className="banner-title">Ready to Experience Guaranteed Delivery?</h3>
            <p className="banner-sub">
              Choose a monthly food box or surprise birthday hamper today and receive your family’s delivery photo this afternoon.
            </p>
          </div>
          <div className="banner-actions">
            <Link href="/packages" className="btn btn-primary btn-lg">
              Send a Care Box Now →
            </Link>
            <Link href="/track" className="btn btn-secondary btn-lg">
              View Sample Tracking Photo →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
