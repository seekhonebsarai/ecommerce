"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '../context/AppContext';

export default function Hero() {
  const { t } = useApp();

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="hero-rating-badge">
              <span className="stars-gold">★★★★★</span>
              <span>4.9/5 • 2,500+ Afghan Diaspora Families Trust Bazaar AF</span>
            </div>

            <h1 className="hero-title">
              <span>{t('heroTitle')} </span>
              <span className="hero-highlight">{t('heroHighlight')}</span>
            </h1>

            <p className="hero-subtitle">
              {t('heroSubtitle')}
            </p>

            <div className="hero-cta-group">
              <Link href="/packages" className="btn btn-primary btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
                {t('exploreBoxes')}
              </Link>
              <Link href="/topup" className="btn btn-secondary btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
                {t('sendTopup')}
              </Link>
              <Link
                href="/track"
                className="btn btn-outline btn-lg"
              >
                {t('trackOrder')}
              </Link>
            </div>

            {/* Trust points */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <span className="check-bullet">✓</span>
                <span>Free Delivery in 5 Cities</span>
              </div>
              <div className="trust-item">
                <span className="check-bullet">✓</span>
                <span>Doorstep Photo Proof</span>
              </div>
              <div className="trust-item">
                <span className="check-bullet">✓</span>
                <span>All Global Cards & Apple Pay</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Right */}
          <div className="hero-visual-wrapper">
            {/* Top Floating Badge */}
            <div className="floating-card float-top">
              <div className="badge-icon-emerald">⚡</div>
              <div>
                <div className="badge-heading">Kabul Express Courier</div>
                <div className="badge-sub">Delivered in 1h 45m</div>
              </div>
            </div>

            {/* Courier Image */}
            <div className="hero-image-frame">
              <img
                src="/images/hero-courier.jpg"
                alt="Friendly Bazaar AF courier in Kabul holding groceries delivery box"
                className="hero-img"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>

            {/* Bottom Floating Badge */}
            <div className="floating-card float-bottom">
              <div className="badge-icon-emerald">📸</div>
              <div>
                <div className="badge-heading">100% Photo Proof Included</div>
                <div className="badge-sub">Sent straight to your WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
