"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useApp } from '../context/AppContext';
import { CITIES } from '../data/catalog';

export default function CartPage() {
  const router = useRouter();
  const {
    cart,
    updateCartQty,
    clearCart,
    subtotalUSD,
    totalUSD,
    formatPrice,
    selectedCity,
    setSelectedCity,
    user
  } = useApp();

  const [giftNote, setGiftNote] = useState('');
  const [deliveryType, setDeliveryType] = useState('same-day');

  const handleProceedToCheckout = () => {
    if (cart.length === 0) {
      alert('Your care box is empty! Please select a grocery package to continue.');
      return;
    }
    if (!user) {
      router.push('/login?redirect=checkout');
      return;
    }
    router.push('/checkout');
  };

  return (
    <div className="page-wrapper-padding">
      <div className="container">
        {/* Step Indicator Header */}
        <div className="cart-checkout-steps">
          <div className="step-badge active">
            <span className="step-num">1</span>
            <span>Review Care Box</span>
          </div>
          <div className="step-separator">→</div>
          <div className="step-badge">
            <span className="step-num">2</span>
            <span>Recipient & Checkout</span>
          </div>
          <div className="step-separator">→</div>
          <div className="step-badge">
            <span className="step-num">3</span>
            <span>Doorstep Photo Handover</span>
          </div>
        </div>

        <div className="page-header-banner" style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
          <span className="badge-pill">Your Care Box</span>
          <h1 className="page-headline">Review Your Afghanistan Care Package</h1>
          <p className="page-subline">
            Verify your selected pantry items, adjust quantities, choose your destination city in Afghanistan, and personalize your gift message.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="dedicated-cart-empty">
            <div className="empty-cart-icon">📦</div>
            <h2 className="empty-cart-title">Your Care Box is Currently Empty</h2>
            <p className="empty-cart-desc">
              Send a month of essential pantry staples, fresh fruits, or birthday celebration sweets to your beloved family in Afghanistan.
            </p>
            <div className="empty-cart-actions">
              <Link href="/packages" className="btn btn-primary btn-lg">
                Explore Grocery Packages →
              </Link>
              <Link href="/custom-box" className="btn btn-secondary btn-lg">
                Build a Custom Box
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart-two-column-layout">
            {/* Left: Cart Items & Customization */}
            <div className="cart-main-items-column">
              <div className="cart-card-container">
                <div className="cart-table-header">
                  <h2 className="cart-section-title">Selected Care Items ({cart.length})</h2>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="clear-cart-link"
                  >
                    Clear All
                  </button>
                </div>

                <div className="cart-items-table-view">
                  {cart.map((item, index) => {
                    const itemTotal = item.priceUSD * (item.quantity || 1);
                    return (
                      <div key={item.id || index} className="cart-table-row">
                        <div className="cart-row-thumb">
                          <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                        </div>

                        <div className="cart-row-info">
                          <h3 className="cart-row-title">{item.title}</h3>
                          {item.details && (
                            <div className="cart-row-meta">{item.details}</div>
                          )}
                          <div className="cart-row-unit-price">
                            Unit Price: {formatPrice(item.priceUSD)}
                          </div>
                        </div>

                        <div className="cart-row-qty-controls">
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, -1)}
                            className="cart-qty-pill-btn"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="cart-qty-number">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, 1)}
                            className="cart-qty-pill-btn"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <div className="cart-row-total-price">
                          {formatPrice(itemTotal)}
                        </div>

                        <button
                          type="button"
                          onClick={() => updateCartQty(item.id, -(item.quantity || 1))}
                          className="cart-remove-item-btn"
                          title="Remove item"
                        >
                          ✕
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Delivery Destination & Gift Note Box */}
              <div className="cart-card-container" style={{ marginTop: '2rem' }}>
                <h3 className="cart-section-title" style={{ marginBottom: '1.25rem' }}>
                  Destination City & Delivery Preference
                </h3>

                <div className="cart-options-grid">
                  <div className="form-field-group">
                    <label className="form-label">Destination City in Afghanistan *</label>
                    <select
                      value={selectedCity.name}
                      onChange={(e) => {
                        const found = CITIES.find(c => c.name === e.target.value) || CITIES[0];
                        setSelectedCity(found);
                      }}
                      className="select-input-field"
                      suppressHydrationWarning
                    >
                      {CITIES.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name} ({c.nameDari}) - {c.status}
                        </option>
                      ))}
                    </select>
                    <span className="field-hint-text">
                      ✓ Free city center courier delivery included
                    </span>
                  </div>

                  <div className="form-field-group">
                    <label className="form-label">Delivery Schedule Speed</label>
                    <select
                      value={deliveryType}
                      onChange={(e) => setDeliveryType(e.target.value)}
                      className="select-input-field"
                      suppressHydrationWarning
                    >
                      <option value="same-day">Same-Day Express (Before 2:00 PM AFT)</option>
                      <option value="tomorrow">Next Morning Dispatch (9:00 AM - 1:00 PM)</option>
                      <option value="scheduled">Specific Date (Specify in notes)</option>
                    </select>
                  </div>
                </div>

                <div className="form-field-group" style={{ marginTop: '1.5rem' }}>
                  <label className="form-label">
                    Personalized Greeting Note (Printed on Glossy Card Inside Box)
                  </label>
                  <textarea
                    rows={3}
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="e.g. Dearest Mom & Dad, sending you all our love and blessings from Toronto. May your home be filled with peace and abundance. Your son, Farhad."
                    className="textarea-input-field"
                  />
                  <span className="field-hint-text">
                    We print in beautiful calligraphy in Dari, Pashto, or English.
                  </span>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/packages" className="continue-shopping-link">
                  ← Add More Grocery Packages or Celebration Gifts
                </Link>
              </div>
            </div>

            {/* Right: Box Summary Sidebar */}
            <div className="cart-sidebar-summary-column">
              <div className="cart-summary-card">
                <div className="summary-card-header">
                  <span className="summary-icon">🧾</span>
                  <h3 className="summary-title">Order Summary</h3>
                </div>

                <div className="summary-breakdown-list">
                  <div className="summary-row">
                    <span>Selected Items Subtotal:</span>
                    <strong>{formatPrice(subtotalUSD)}</strong>
                  </div>
                  <div className="summary-row">
                    <span>City Center Delivery:</span>
                    <strong className="free-badge-text">FREE ($0.00)</strong>
                  </div>
                  <div className="summary-row">
                    <span>Doorstep Photo Proof:</span>
                    <strong className="free-badge-text">INCLUDED</strong>
                  </div>
                  <div className="summary-row">
                    <span>Packaging & Gift Card:</span>
                    <strong className="free-badge-text">FREE</strong>
                  </div>
                  <div className="summary-divider" />
                  <div className="summary-row total-highlight">
                    <span>Total Amount to Pay:</span>
                    <span className="summary-total-price">{formatPrice(totalUSD)}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleProceedToCheckout}
                  className="btn btn-primary btn-lg full-width"
                  style={{ marginTop: '1.5rem', padding: '1rem' }}
                >
                  Proceed to Dedicated Checkout →
                </button>

                <div className="summary-trust-bullets">
                  <div className="trust-bullet-row">
                    <span className="bullet-check">✓</span>
                    <span>100% WhatsApp Doorstep Photo Proof</span>
                  </div>
                  <div className="trust-bullet-row">
                    <span className="bullet-check">✓</span>
                    <span>Grade-A Afghan Sourced Staples</span>
                  </div>
                  <div className="trust-bullet-row">
                    <span className="bullet-check">✓</span>
                    <span>256-Bit Bank-Grade Card Encryption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
