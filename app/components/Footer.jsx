"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cols-grid">
          <div>
            <div className="brand-logo" style={{ color: 'white', marginBottom: '1rem' }}>
              <div className="brand-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <span className="brand-name">Bazaar AF</span>
            </div>
            <p className="footer-mission-text">
              Built for Afghan families everywhere. Send groceries, gifts, care packages, and mobile top-ups home with same-day delivery and doorstep photo proof.
            </p>
            <div className="whatsapp-help">
              WhatsApp Support:{' '}
              <a href="https://wa.me/13079981368" target="_blank" rel="noopener noreferrer" className="wa-link">
                +1 (307) 998-1368
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Services</h4>
            <div className="footer-nav-list">
              <a href="#packages">Grocery Boxes</a>
              <a href="#packages">Occasion Gifts</a>
              <a href="#topup">Mobile Top-Up</a>
              <a href="#custom-builder">Custom Package</a>
              <a href="#photo-proof">Photo Proof</a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Cities Served</h4>
            <div className="footer-nav-list">
              <a href="#cities">Kabul (کابل)</a>
              <a href="#cities">Mazar-i-Sharif (مزار شریف)</a>
              <a href="#cities">Herat (هرات)</a>
              <a href="#cities">Jalalabad (جلال‌آباد)</a>
              <a href="#cities">Panjshir (پنجشیر)</a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Get the App</h4>
            <p className="footer-app-desc">
              Download Bazaar AF for iOS and Android. Reorder groceries in seconds.
            </p>
            <div className="app-badges-group">
              <a
                href="#"
                className="store-pill-btn"
              >
                 Download on App Store
              </a>
              <a
                href="#"
                className="store-pill-btn"
              >
                ▶ Get it on Google Play
              </a>
            </div>
          </div>
        </div>

        <div className="footer-legal-bar">
          <div>© 2026 Bazaar AF. Built with love for Afghan families everywhere.</div>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="mailto:support@bazaaraf.com">support@bazaaraf.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
