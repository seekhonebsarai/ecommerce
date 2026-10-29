"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SAMPLE_ORDERS } from '../data/catalog';
import { useApp } from '../context/AppContext';

function TrackContent() {
  const searchParams = useSearchParams();
  const queryOrderId = searchParams.get('orderId');
  const { lastOrderId } = useApp();

  const initialCode = queryOrderId || lastOrderId || 'KHD-8842';
  const [trackingCode, setTrackingCode] = useState(initialCode);
  const [orderResult, setOrderResult] = useState(
    SAMPLE_ORDERS[initialCode] || SAMPLE_ORDERS['KHD-8842']
  );

  useEffect(() => {
    if (queryOrderId) {
      const code = queryOrderId.trim().toUpperCase();
      if (SAMPLE_ORDERS[code]) {
        setTrackingCode(code);
        setOrderResult(SAMPLE_ORDERS[code]);
      }
    }
  }, [queryOrderId]);

  const handleTrack = (e) => {
    e.preventDefault();
    const code = trackingCode.trim().toUpperCase();
    const found = SAMPLE_ORDERS[code];
    setOrderResult(found || null);
  };

  const handleSampleClick = (code) => {
    setTrackingCode(code);
    setOrderResult(SAMPLE_ORDERS[code]);
  };

  return (
    <div className="page-wrapper-padding">
      <div className="container">
        {/* Page Header */}
        <div className="page-header-banner">
          <span className="badge-pill">Live Courier Status & Dispatch</span>
          <h1 className="page-headline">Track Your Afghanistan Delivery</h1>
          <p className="page-subline">
            Monitor real-time progress from local depot preparation to doorstep handover. View your verified recipient delivery photo once delivered.
          </p>
        </div>

        <div className="track-page-card">
          <form onSubmit={handleTrack} className="track-input-row">
            <input
              type="text"
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              placeholder="Enter Order Code (e.g. KHD-8842)"
              className="track-text-field"
              required
            />
            <button type="submit" className="btn btn-primary btn-lg">
              Track Order
            </button>
          </form>

          {/* Quick Sample Buttons */}
          <div className="sample-codes-bar">
            <span>Try sample tracking numbers:</span>
            <button
              type="button"
              onClick={() => handleSampleClick('KHD-8842')}
              className="sample-code-chip"
            >
              KHD-8842 (Delivered with Photo Proof)
            </button>
            <button
              type="button"
              onClick={() => handleSampleClick('KHD-9210')}
              className="sample-code-chip"
            >
              KHD-9210 (In Transit / Courier Bike)
            </button>
          </div>

          {/* Tracking Result View */}
          {orderResult === null ? (
            <div className="track-not-found-box">
              <h3>Order Not Found</h3>
              <p>We couldn’t find an order matching "{trackingCode}". Please verify your confirmation email code or try one of the samples above.</p>
            </div>
          ) : orderResult ? (
            <div className="track-details-display">
              <div className="track-header-meta">
                <div>
                  <span className="track-kicker">Order ID</span>
                  <h2 className="track-id-heading">{orderResult.orderId}</h2>
                </div>
                <span className={`status-pill ${orderResult.step === 4 ? 'green' : 'amber'}`}>
                  {orderResult.status}
                </span>
              </div>

              <div className="track-info-grid">
                <div><strong>Recipient:</strong> {orderResult.recipient} ({orderResult.city})</div>
                <div><strong>Package:</strong> {orderResult.items}</div>
                <div><strong>Courier:</strong> {orderResult.courier}</div>
                <div><strong>Order Time:</strong> {orderResult.date}</div>
              </div>

              {/* Stepper */}
              <div className="tracking-stepper-view">
                <div className={`step-point ${orderResult.step >= 1 ? 'completed' : ''}`}>
                  <div className="step-point-title">1. Order Placed & Confirmed</div>
                  <div className="step-point-sub">Payment verified via secure card gateway</div>
                </div>
                <div className={`step-point ${orderResult.step >= 2 ? 'completed' : (orderResult.step === 1 ? 'active' : '')}`}>
                  <div className="step-point-title">2. Packed at Local Depot</div>
                  <div className="step-point-sub">Fresh groceries inspected and sealed in green box</div>
                </div>
                <div className={`step-point ${orderResult.step >= 3 ? 'completed' : (orderResult.step === 2 ? 'active' : '')}`}>
                  <div className="step-point-title">3. Out for Delivery with Courier</div>
                  <div className="step-point-sub">Courier en route to recipient street in Afghanistan</div>
                </div>
                <div className={`step-point ${orderResult.step >= 4 ? 'completed' : (orderResult.step === 3 ? 'active' : '')}`}>
                  <div className="step-point-title">4. Delivered with Photo Proof</div>
                  <div className="step-point-sub">Handed to family and confirmation photo taken</div>
                </div>
              </div>

              {/* Photo Proof */}
              {orderResult.photoProof && (
                <div className="order-photo-proof-frame" style={{ marginTop: '2.5rem' }}>
                  <div className="photo-proof-header-badge">
                    📸 Verified Doorstep Delivery Photo Confirmation
                  </div>
                  <img
                    src={orderResult.photoProof}
                    alt="Doorstep Delivery Verification Proof"
                    className="photo-proof-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div style={{ padding: '0.85rem 1rem', background: 'var(--bg-surface)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Photo timestamped upon doorstep delivery in Kabul. Stored permanently in your order history.
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>

        {/* Unique Section 1: Milestone Details Guide */}
        <div style={{ marginTop: '4rem' }}>
          <div className="section-head text-center">
            <span className="badge-pill">Milestone Guide</span>
            <h2 className="section-title">What Happens at Each Delivery Stage?</h2>
            <p className="section-desc">
              Here is the exact operational sequence that occurs from the moment you click pay to doorstep delivery.
            </p>
          </div>

          <div className="quality-standards-grid">
            <div className="quality-item-card">
              <div className="quality-icon">💳</div>
              <h3 className="quality-title">Stage 1: Verification</h3>
              <p className="quality-desc">Our automated payment engine verifies international funds and transmits the order payload immediately to our local Afghan depot.</p>
            </div>
            <div className="quality-item-card">
              <div className="quality-icon">📦</div>
              <h3 className="quality-title">Stage 2: Hand-Packing</h3>
              <p className="quality-desc">Depot workers pull Grade-A fresh flour, aged rice, and oil, place your customized greeting card inside, and apply the green security seal.</p>
            </div>
            <div className="quality-item-card">
              <div className="quality-icon">🛵</div>
              <h3 className="quality-title">Stage 3: Courier Call</h3>
              <p className="quality-desc">The courier calls your recipient, verifies their presence at home, and loads the insulated cargo box onto their delivery motorcycle or van.</p>
            </div>
            <div className="quality-item-card">
              <div className="quality-icon">📸</div>
              <h3 className="quality-title">Stage 4: Photo Handover</h3>
              <p className="quality-desc">The package is handed over at their doorway, a delivery confirmation photo is snapped, and it appears on your dashboard and WhatsApp.</p>
            </div>
          </div>
        </div>

        {/* Unique Section 2: Need Assistance Banner */}
        <div className="process-bottom-banner" style={{ marginTop: '3.5rem' }}>
          <div className="banner-left">
            <h3 className="banner-title">Can't Find Your Order Number?</h3>
            <p className="banner-sub">
              If you didn’t receive your order code via email or misplaced it, send your name or recipient phone number to our WhatsApp support team for instant order lookup.
            </p>
          </div>
          <div className="banner-actions">
            <a
              href="https://wa.me/13079981368"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ backgroundColor: '#25D366', color: 'white' }}
            >
              Order Lookup on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TrackPage() {
  return (
    <Suspense fallback={<div className="page-wrapper-padding text-center">Loading tracker...</div>}>
      <TrackContent />
    </Suspense>
  );
}

