"use client";

import React, { useState } from 'react';
import { MOBILE_CARRIERS, TOPUP_DENOMINATIONS } from '../data/catalog';
import { useApp } from '../context/AppContext';

export default function MobileTopup() {
  const { addToCart, formatPrice } = useApp();
  const [carrier, setCarrier] = useState(MOBILE_CARRIERS[0]);
  const [phone, setPhone] = useState('');
  const [denom, setDenom] = useState(TOPUP_DENOMINATIONS[1]); // $10 default

  const handleTopupSubmit = (e) => {
    e.preventDefault();
    const cleanNumber = phone.replace(/\D/g, '');
    if (cleanNumber.length < 9) {
      alert('Please enter a valid 9-digit Afghan mobile number (e.g. 700 123 456).');
      return;
    }

    const formattedPhone = `+93 ${cleanNumber}`;
    addToCart({
      id: `topup-${carrier.id}-${Date.now()}`,
      title: `${carrier.name} Mobile Top-up`,
      priceUSD: denom.amountUSD,
      image: '/images/hero-courier.jpg',
      type: 'topup',
      details: `${formattedPhone} • ${denom.afnValue} AFN Airtime (0% fee)`
    });

    setPhone('');
  };

  return (
    <section className="section" id="topup">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-pill">Instant Airtime Transfer</span>
          <h2 className="section-title">Send Mobile Credit with Zero Fees</h2>
          <p className="section-desc">
            Direct instant recharge to any Afghan SIM card. Recharges are delivered within seconds with no processing deductions.
          </p>
        </div>

        <div className="topup-console-card">
          <form onSubmit={handleTopupSubmit}>
            {/* 1. Carrier selection */}
            <h3 className="form-step-title">1. Select Network Carrier</h3>
            <div className="carrier-chip-row">
              {MOBILE_CARRIERS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCarrier(c)}
                  className={`carrier-chip-btn ${carrier.id === c.id ? 'active' : ''}`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* 2. Phone Input */}
            <h3 className="form-step-title">2. Enter Afghan Phone Number</h3>
            <div className="phone-input-group">
              <div className="afghan-flag-prefix">
                <span>🇦🇫</span>
                <span>+93</span>
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="700 123 456"
                className="afghan-phone-input"
                maxLength={12}
                required
              />
            </div>

            {/* 3. Denominations */}
            <h3 className="form-step-title">3. Choose Recharge Amount</h3>
            <div className="denom-grid">
              {TOPUP_DENOMINATIONS.map((d) => (
                <button
                  key={d.amountUSD}
                  type="button"
                  onClick={() => setDenom(d)}
                  className={`denom-chip-btn ${denom.amountUSD === d.amountUSD ? 'active' : ''}`}
                >
                  <span className="denom-val">{formatPrice(d.amountUSD)}</span>
                  <span className="denom-afn">{d.afnValue} AFN</span>
                </button>
              ))}
            </div>

            {/* Guarantee */}
            <div className="fee-guarantee-banner">
              <div className="fee-banner-text">
                <span className="shield-icon">🛡️</span>
                <div>
                  <strong>0% Service Fee Guaranteed</strong>
                  <div className="fee-sub">What you pay is what they receive. 100% credited to the SIM card.</div>
                </div>
              </div>
              <span className="free-tag">Free Transfer</span>
            </div>

            <button type="submit" className="btn btn-primary btn-lg full-width">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              Add Instant Top-Up to Cart
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
