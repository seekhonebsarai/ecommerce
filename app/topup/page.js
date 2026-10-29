"use client";

import React from 'react';
import MobileTopup from '../components/MobileTopup';

export default function TopupPage() {
  const carrierPrefixes = [
    {
      carrier: "Afghan Wireless (AWCC)",
      prefixes: "070, 071",
      strength: "Broadest 4G LTE coverage across Kabul, Balkh, Herat, and inter-city highways",
      recommended: "15GB Monthly Internet + Voice Bundle"
    },
    {
      carrier: "Roshan (روشن)",
      prefixes: "079, 072",
      strength: "High reliability in remote valleys, mountainous districts, and provincial centers",
      recommended: "10GB Data + Unlimited WhatsApp Pack"
    },
    {
      carrier: "MTN Afghanistan",
      prefixes: "077, 076",
      strength: "Ultra-fast urban mobile data speeds in Kabul, Herat, and Mazar-i-Sharif",
      recommended: "20GB Super Internet Data Bundle"
    },
    {
      carrier: "Etisalat Afghanistan",
      prefixes: "078, 073",
      strength: "Crystal-clear HD voice calling quality and affordable international connectivity",
      recommended: "25GB Full Month Streaming & Social Pack"
    },
    {
      carrier: "Salaam Telecom (سلام)",
      prefixes: "074",
      strength: "State-owned network offering the most economical domestic calling rates",
      recommended: "Monthly 500 AFN Universal Balance"
    }
  ];

  const dataGuide = [
    {
      usage: "1 Hour WhatsApp Video Call",
      consumption: "~250 MB to 350 MB",
      tip: "Enough for a hearty evening conversation with parents or siblings"
    },
    {
      usage: "Weekly Weekend Video Calls (4 Hours)",
      consumption: "~1.2 GB to 1.5 GB",
      tip: "Ideal for keeping up with family news every Friday afternoon"
    },
    {
      usage: "Daily 1-Hour Video Calls (Full Month)",
      consumption: "~8 GB to 10 GB",
      tip: "Recommended: Recharge $15 or $25 denomination for non-stop connectivity"
    },
    {
      usage: "Texting, Photos & Voice Notes Only",
      consumption: "~500 MB per month",
      tip: "Light usage for staying in touch on WhatsApp without video streams"
    }
  ];

  return (
    <div className="page-wrapper-padding">
      <div className="container">
        {/* Page Header */}
        <div className="page-header-banner">
          <span className="badge-pill">Zero Fee Airtime & Data</span>
          <h1 className="page-headline">Instant Afghan Mobile Recharge & Data</h1>
          <p className="page-subline">
            Send phone credit and internet bundles to your loved ones on AWCC, Roshan, MTN, Etisalat, and Salaam. Recharged in under 60 seconds with 100% of your money going to their balance — zero hidden fees.
          </p>
        </div>

        {/* Mobile Topup Interactive Console */}
        <MobileTopup />

        {/* 3 Core Benefits */}
        <div className="topup-benefits-grid" style={{ marginTop: '3.5rem' }}>
          <div className="topup-benefit-card">
            <div className="benefit-icon">⚡</div>
            <h3 className="benefit-title">Instant Electronic Credit</h3>
            <p className="benefit-desc">Our direct carrier API credits the SIM card within 60 seconds of payment confirmation.</p>
          </div>
          <div className="topup-benefit-card">
            <div className="benefit-icon">🛡️</div>
            <h3 className="benefit-title">0% Service Fee Guarantee</h3>
            <p className="benefit-desc">Traditional kiosks pocket 15% to 20% in fees. On Bazaar AF, $10 USD sent delivers full value in Afghani.</p>
          </div>
          <div className="topup-benefit-card">
            <div className="benefit-icon">📱</div>
            <h3 className="benefit-title">All 5 Afghan Carriers</h3>
            <p className="benefit-desc">Universal coverage for AWCC, Roshan, MTN Afghanistan, Etisalat, and Salaam government telecom.</p>
          </div>
        </div>

        {/* Unique Section 1: Carrier Prefix Directory & Guide */}
        <div className="topup-tables-grid">
          <div className="topup-card-block">
            <span className="badge-pill" style={{ marginBottom: '0.75rem' }}>SIM Identifier</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>
              Afghan Carrier Number Prefixes
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Not sure which network your family is using? Check the first three digits of their Afghan phone number:
            </p>
            <table className="topup-subtable">
              <thead>
                <tr>
                  <th>Carrier</th>
                  <th>Prefixes</th>
                  <th>Network Highlights</th>
                </tr>
              </thead>
              <tbody>
                {carrierPrefixes.map((c, i) => (
                  <tr key={i}>
                    <td><strong>{c.carrier}</strong></td>
                    <td style={{ color: 'var(--primary)', fontWeight: '700', fontFamily: 'monospace' }}>{c.prefixes}</td>
                    <td>{c.strength}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Unique Section 2: Data Consumption Guide */}
          <div className="topup-card-block">
            <span className="badge-pill" style={{ marginBottom: '0.75rem' }}>Data Calculator</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>
              WhatsApp Video Calling Data Guide
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              How much internet data does your family need in Afghanistan to video call you abroad without interruptions?
            </p>
            <table className="topup-subtable">
              <thead>
                <tr>
                  <th>Activity / Frequency</th>
                  <th>Data Needed</th>
                  <th>Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {dataGuide.map((d, i) => (
                  <tr key={i}>
                    <td><strong>{d.usage}</strong></td>
                    <td style={{ color: 'var(--primary)', fontWeight: '700' }}>{d.consumption}</td>
                    <td>{d.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Unique Section 3: Topup FAQs */}
        <div style={{ marginTop: '4rem' }}>
          <div className="section-head text-center">
            <span className="badge-pill">Top-Up Knowledge</span>
            <h2 className="section-title">Common Questions About Afghan SIM Top-Ups</h2>
          </div>

          <div className="quality-standards-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="quality-item-card" style={{ textAlign: 'left' }}>
              <h3 className="quality-title">Does the recipient get an SMS?</h3>
              <p className="quality-desc">Yes, the Afghan telecom operator sends an immediate system confirmation SMS in Dari and Pashto informing them of their new balance.</p>
            </div>
            <div className="quality-item-card" style={{ textAlign: 'left' }}>
              <h3 className="quality-title">Can I top-up if the phone is switched off?</h3>
              <p className="quality-desc">Absolutely. The credit is deposited directly into the carrier’s centralized account. When they turn on their phone, the credit will be ready to use.</p>
            </div>
            <div className="quality-item-card" style={{ textAlign: 'left' }}>
              <h3 className="quality-title">Can they convert airtime into data?</h3>
              <p className="quality-desc">Yes. Once airtime credit is deposited, the recipient can dial their carrier’s USSD activation code (e.g. *444# or *555#) to activate internet bundles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
