"use client";

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SAMPLE_ORDERS } from '../data/catalog';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    setIsSuccessOpen,
    setLastOrderId,
    cart,
    clearCart,
    selectedCity,
    totalUSD,
    formatPrice
  } = useApp();

  const [recipientName, setRecipientName] = useState('');
  const [city, setCity] = useState(selectedCity.name);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [greeting, setGreeting] = useState('');

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrderId = `KHD-${Math.floor(1000 + Math.random() * 9000)}`;

    // Store in sample orders for immediate live tracking demo
    SAMPLE_ORDERS[newOrderId] = {
      orderId: newOrderId,
      recipient: recipientName || 'Beloved Family',
      city: `${city} (Afghanistan)`,
      date: 'Just now',
      items: cart.map(c => `${c.title} x${c.quantity}`).join(', '),
      status: 'Order Placed & Confirmed',
      step: 1,
      courier: 'Assigned to Depot Courier Team',
      photoProof: null,
      note: greeting || 'Same-day delivery scheduled with doorstep photo proof.'
    };

    setLastOrderId(newOrderId);
    clearCart();
    setIsCheckoutOpen(false);
    setIsSuccessOpen(true);
  };

  return (
    <div className="modal-overlay-bg">
      <div className="modal-dialog-box">
        <div className="modal-title-bar">
          <h2 className="modal-main-title">Delivery & Recipient Details</h2>
          <button
            type="button"
            onClick={() => setIsCheckoutOpen(false)}
            className="modal-exit-btn"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-content-form">
          <div className="form-field-group">
            <label className="form-label">Recipient Full Name in Afghanistan *</label>
            <input
              type="text"
              required
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="e.g. Haji Mohammad / Zahra Jan"
              className="text-input-field"
            />
          </div>

          <div className="form-split-row">
            <div className="form-field-group">
              <label className="form-label">Destination City *</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="select-input-field"
              >
                <option value="Kabul">Kabul (کابل)</option>
                <option value="Mazar-i-Sharif">Mazar-i-Sharif (مزار شریف)</option>
                <option value="Herat">Herat (هرات)</option>
                <option value="Jalalabad">Jalalabad (جلال‌آباد)</option>
                <option value="Panjshir">Panjshir (پنجشیر)</option>
              </select>
            </div>

            <div className="form-field-group">
              <label className="form-label">Recipient Phone (+93) *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0700 123 456"
                className="text-input-field"
              />
            </div>
          </div>

          <div className="form-field-group">
            <label className="form-label">Neighborhood & Street Landmark (Afghanistan) *</label>
            <textarea
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. Karte 3, Street 4, near Habibia High School, Blue Gate"
              className="textarea-input-field"
            ></textarea>
          </div>

          <div className="form-field-group">
            <label className="form-label">Personal Message for Greeting Card (Printed inside box)</label>
            <input
              type="text"
              value={greeting}
              onChange={(e) => setGreeting(e.target.value)}
              placeholder="e.g. Dearest Mom & Dad, with all our love from California."
              className="text-input-field"
            />
          </div>

          {/* Review */}
          <div className="order-review-box">
            <div className="review-title">Order Review</div>
            <div className="review-items-list">
              {cart.map((c, i) => (
                <div key={i} className="review-item-row">
                  <span>{c.title} (x{c.quantity})</span>
                  <strong>{formatPrice(c.priceUSD * c.quantity)}</strong>
                </div>
              ))}
            </div>
            <div className="review-total-row">
              <span>Total to Pay:</span>
              <strong className="review-total-val">{formatPrice(totalUSD)}</strong>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-lg full-width">
            Confirm & Send Care Package
          </button>
        </form>
      </div>
    </div>
  );
}
