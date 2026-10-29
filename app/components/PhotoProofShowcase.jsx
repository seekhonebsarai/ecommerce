"use client";

import React from 'react';
import Link from 'next/link';

export default function PhotoProofShowcase() {

  return (
    <section className="section" id="photo-proof">
      <div className="container">
        <div className="proof-grid-wrapper">
          <div className="proof-text-side">
            <span className="badge-pill">100% Verification Guarantee</span>
            <h2 className="section-title">You Will See Your Family Holding the Box</h2>
            <p className="section-desc">
              Sending support from abroad should never feel uncertain. With Bazaar AF, every delivery is finalized with an authentic, timestamped photo taken directly at your family’s doorstep in Afghanistan.
            </p>

            <ul className="proof-features-list">
              <li>
                <span className="proof-check">✓</span>
                <div>
                  <strong>Delivered straight to their hands:</strong>
                  <p>Couriers phone your family beforehand to coordinate safe delivery at the door.</p>
                </div>
              </li>
              <li>
                <span className="proof-check">✓</span>
                <div>
                  <strong>High resolution photo sent to your phone:</strong>
                  <p>Receive the photo via WhatsApp and store it in your order history.</p>
                </div>
              </li>
              <li>
                <span className="proof-check">✓</span>
                <div>
                  <strong>Peace of mind for the diaspora:</strong>
                  <p>Over 15,000 doorstep deliveries successfully verified across Afghanistan.</p>
                </div>
              </li>
            </ul>

            <Link
              href="/track"
              className="btn btn-primary btn-lg"
            >
              View Live Tracking & Sample Proof
            </Link>
          </div>

          <div className="proof-media-side">
            <div className="proof-photo-frame">
              <img
                src="/images/proof-delivery.jpg"
                alt="Doorstep delivery verification with Afghan family receiving their package"
                className="proof-img"
                loading="lazy"
                decoding="async"
              />
              <div className="proof-photo-meta">
                <div>
                  <div className="meta-order-id">Order #KHD-8842 Verified</div>
                  <div className="meta-location">Kabul, Karte 3 • Delivered Today 11:20 AM</div>
                </div>
                <span className="meta-status-pill">DELIVERED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
