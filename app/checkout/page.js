"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useApp } from '../context/AppContext';
import { SAMPLE_ORDERS, CITIES } from '../data/catalog';

export default function CheckoutPage() {
  const router = useRouter();
  const {
    cart,
    clearCart,
    subtotalUSD,
    totalUSD,
    formatPrice,
    selectedCity,
    setLastOrderId,
    user
  } = useApp();

  // Form State
  const [recipientName, setRecipientName] = useState('');
  const [city, setCity] = useState(selectedCity.name);
  const [recipientPhone, setRecipientPhone] = useState('');
  const [alternatePhone, setAlternatePhone] = useState('');
  const [addressLandmark, setAddressLandmark] = useState('');
  
  const [senderName, setSenderName] = useState(user ? user.name : '');
  const [senderEmail, setSenderEmail] = useState(user ? user.email : '');
  const [senderCountry, setSenderCountry] = useState(user?.country || 'United States');
  const [senderWhatsapp, setSenderWhatsapp] = useState('');

  const [giftNote, setGiftNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('884');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If cart is empty, show empty state or redirect
  if (cart.length === 0) {
    return (
      <div className="page-wrapper-padding">
        <div className="container text-center" style={{ padding: '4rem 1rem' }}>
          <div className="empty-cart-icon">📦</div>
          <h2 className="empty-cart-title">No Items in Your Care Box</h2>
          <p className="empty-cart-desc">
            You don't have any items to checkout. Please select a grocery package first.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/packages" className="btn btn-primary btn-lg">
              Browse Grocery Packages →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newOrderId = `KHD-${Math.floor(1000 + Math.random() * 9000)}`;

    // Create live tracking record
    SAMPLE_ORDERS[newOrderId] = {
      orderId: newOrderId,
      recipient: recipientName || 'Beloved Family',
      city: `${city} (Afghanistan)`,
      date: 'Just now (Same-Day Express)',
      items: cart.map(c => `${c.title} x${c.quantity || 1}`).join(', '),
      status: 'Order Placed & Dispatched to Local Depot',
      step: 1,
      courier: 'Assigned to Depot Courier Team',
      photoProof: null,
      note: giftNote || 'Personalized greeting card enclosed inside emerald box.'
    };

    setLastOrderId(newOrderId);
    clearCart();

    // Smooth transition to dedicated tracking page
    setTimeout(() => {
      setIsSubmitting(false);
      router.push(`/track?orderId=${newOrderId}`);
    }, 800);
  };

  return (
    <div className="page-wrapper-padding">
      <div className="container">
        {/* Step Indicator Header */}
        <div className="cart-checkout-steps">
          <Link href="/cart" className="step-badge" style={{ cursor: 'pointer' }}>
            <span className="step-num">1</span>
            <span>Review Care Box</span>
          </Link>
          <div className="step-separator">→</div>
          <div className="step-badge active">
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
          <span className="badge-pill">Secure Bank Gateway</span>
          <h1 className="page-headline">Recipient Details & Checkout</h1>
          <p className="page-subline">
            Enter your family’s delivery address in Afghanistan and your contact details abroad for real-time WhatsApp photo proof transmission.
          </p>
        </div>

        <form onSubmit={handleSubmitOrder} suppressHydrationWarning>
          <div className="cart-two-column-layout">
            {/* Left: Detailed Checkout Form */}
            <div className="cart-main-items-column">
              {/* Section 1: Recipient in Afghanistan */}
              <div className="cart-card-container">
                <div className="checkout-step-header">
                  <span className="checkout-step-circle">1</span>
                  <div>
                    <h2 className="cart-section-title">Recipient in Afghanistan</h2>
                    <p className="checkout-step-sub">Who should our courier deliver the package to?</p>
                  </div>
                </div>

                <div className="form-field-group" style={{ marginTop: '1.25rem' }}>
                  <label className="form-label">Recipient Full Name *</label>
                  <input
                    type="text"
                    required
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="e.g. Haji Abdul Qader Jan / Zahra Begum"
                    className="text-input-field"
                    suppressHydrationWarning
                  />
                </div>

                <div className="cart-options-grid" style={{ marginTop: '1rem' }}>
                  <div className="form-field-group">
                    <label className="form-label">Destination City *</label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="select-input-field"
                      suppressHydrationWarning
                    >
                      {CITIES.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name} ({c.nameDari})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label className="form-label">Recipient Afghan Mobile Phone (+93) *</label>
                    <input
                      type="tel"
                      required
                      value={recipientPhone}
                      onChange={(e) => setRecipientPhone(e.target.value)}
                      placeholder="070 123 4567 (AWCC/Roshan/MTN)"
                      className="text-input-field"
                    />
                    <span className="field-hint-text">Courier calls 30 mins before doorstep arrival.</span>
                  </div>
                </div>

                <div className="form-field-group" style={{ marginTop: '1rem' }}>
                  <label className="form-label">Alternate Family Phone Number (Optional)</label>
                  <input
                    type="tel"
                    value={alternatePhone}
                    onChange={(e) => setAlternatePhone(e.target.value)}
                    placeholder="079 987 6543 (Brother/Neighbor/Father)"
                    className="text-input-field"
                  />
                </div>

                <div className="form-field-group" style={{ marginTop: '1rem' }}>
                  <label className="form-label">
                    Neighborhood, Street & Nearby Landmark (Afghanistan) *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={addressLandmark}
                    onChange={(e) => setAddressLandmark(e.target.value)}
                    placeholder="e.g. Karte 3, Street 4, Behind Habibia High School, Near Bilal Mosque, Green Door Gate #12"
                    className="textarea-input-field"
                  />
                  <span className="field-hint-text">
                    In Afghanistan without zip codes, landmark descriptions ensure exact doorstep delivery.
                  </span>
                </div>
              </div>

              {/* Section 2: Sender Details (Abroad) */}
              <div className="cart-card-container" style={{ marginTop: '2rem' }}>
                <div className="checkout-step-header">
                  <span className="checkout-step-circle">2</span>
                  <div>
                    <h2 className="cart-section-title">Your Contact Details (Sender Abroad)</h2>
                    <p className="checkout-step-sub">Where we send the invoice and WhatsApp photo proof</p>
                  </div>
                </div>

                <div className="cart-options-grid" style={{ marginTop: '1.25rem' }}>
                  <div className="form-field-group">
                    <label className="form-label">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Ahmad Farhad"
                      className="text-input-field"
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="form-label">Your Email (For Receipt & Tracking) *</label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="farhad@example.com"
                      className="text-input-field"
                    />
                  </div>
                </div>

                <div className="cart-options-grid" style={{ marginTop: '1rem' }}>
                  <div className="form-field-group">
                    <label className="form-label">Country Where You Reside *</label>
                    <select
                      value={senderCountry}
                      onChange={(e) => setSenderCountry(e.target.value)}
                      className="select-input-field"
                      suppressHydrationWarning
                    >
                      <option value="United States">United States 🇺🇸</option>
                      <option value="Canada">Canada 🇨🇦</option>
                      <option value="Germany">Germany 🇩🇪</option>
                      <option value="United Kingdom">United Kingdom 🇬🇧</option>
                      <option value="Australia">Australia 🇦🇺</option>
                      <option value="France">France 🇫🇷</option>
                      <option value="Netherlands">Netherlands 🇳🇱</option>
                      <option value="Sweden">Sweden 🇸🇪</option>
                      <option value="Other">Other International 🌍</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label className="form-label">Your WhatsApp Phone Number (For Photo Proof) *</label>
                    <input
                      type="tel"
                      required
                      value={senderWhatsapp}
                      onChange={(e) => setSenderWhatsapp(e.target.value)}
                      placeholder="+1 (555) 019-2834 or +49 176 123456"
                      className="text-input-field"
                    />
                    <span className="field-hint-text">
                      Our courier will send the doorstep delivery photo directly here.
                    </span>
                  </div>
                </div>

                <div className="form-field-group" style={{ marginTop: '1rem' }}>
                  <label className="form-label">
                    Personalized Message for Greeting Card (Printed inside box)
                  </label>
                  <input
                    type="text"
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="e.g. May this food bring health and happiness to our family table."
                    className="text-input-field"
                  />
                </div>
              </div>

              {/* Section 3: Secure Payment Method */}
              <div className="cart-card-container" style={{ marginTop: '2rem' }}>
                <div className="checkout-step-header">
                  <span className="checkout-step-circle">3</span>
                  <div>
                    <h2 className="cart-section-title">Payment Method</h2>
                    <p className="checkout-step-sub">Encrypted 256-bit bank card gateway with zero fee surcharge</p>
                  </div>
                </div>

                <div className="payment-method-selector" style={{ marginTop: '1.25rem' }}>
                  <button
                    type="button"
                    className="pay-tab-btn active"
                    style={{ cursor: 'default' }}
                  >
                    💳 Credit / Debit Card
                  </button>
                </div>

                <div className="credit-card-inputs-box" style={{ marginTop: '1.5rem' }}>
                  <div className="form-field-group">
                    <label className="form-label">Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="text-input-field"
                      style={{ fontFamily: 'monospace', letterSpacing: '0.08em' }}
                    />
                  </div>

                  <div className="cart-options-grid" style={{ marginTop: '1rem' }}>
                    <div className="form-field-group">
                      <label className="form-label">Expiration Date</label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="text-input-field"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="form-field-group">
                      <label className="form-label">Security CVC / CVV</label>
                      <input
                        type="password"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="text-input-field"
                        maxLength={4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Sticky Order Summary & Submit Button */}
            <div className="cart-sidebar-summary-column">
              <div className="cart-summary-card">
                <div className="summary-card-header">
                  <span className="summary-icon">📦</span>
                  <h3 className="summary-title">Your Order ({cart.length} Items)</h3>
                </div>

                <div className="checkout-items-preview">
                  {cart.map((item, idx) => (
                    <div key={idx} className="checkout-item-compact-row">
                      <img src={item.image} alt={item.title} className="checkout-item-mini-thumb" loading="lazy" decoding="async" />
                      <div className="checkout-item-mini-info">
                        <div className="checkout-item-mini-title">{item.title}</div>
                        <div className="checkout-item-mini-sub">
                          Qty: {item.quantity || 1} • {formatPrice(item.priceUSD * (item.quantity || 1))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="summary-divider" style={{ margin: '1.25rem 0' }} />

                <div className="summary-breakdown-list">
                  <div className="summary-row">
                    <span>Subtotal:</span>
                    <strong>{formatPrice(subtotalUSD)}</strong>
                  </div>
                  <div className="summary-row">
                    <span>City Courier Delivery:</span>
                    <strong className="free-badge-text">FREE ($0.00)</strong>
                  </div>
                  <div className="summary-row">
                    <span>Doorstep Photo Proof:</span>
                    <strong className="free-badge-text">INCLUDED</strong>
                  </div>
                  <div className="summary-divider" />
                  <div className="summary-row total-highlight">
                    <span>Total Charged:</span>
                    <span className="summary-total-price">{formatPrice(totalUSD)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg full-width"
                  style={{ marginTop: '1.5rem', padding: '1.1rem' }}
                >
                  {isSubmitting ? 'Processing & Dispatching...' : `Pay ${formatPrice(totalUSD)} & Dispatch`}
                </button>

                <div className="summary-trust-bullets">
                  <div className="trust-bullet-row">
                    <span className="bullet-check">✓</span>
                    <span>100% WhatsApp Photo Proof Guaranteed</span>
                  </div>
                  <div className="trust-bullet-row">
                    <span className="bullet-check">✓</span>
                    <span>Live Tracking Code Generated Instantly</span>
                  </div>
                  <div className="trust-bullet-row">
                    <span className="bullet-check">✓</span>
                    <span>Free Delivery in 5 Major Afghan Cities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
