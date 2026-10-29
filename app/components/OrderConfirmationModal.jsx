"use client";

import React from 'react';
import Link from 'next/link';
import { useApp } from '../context/AppContext';

export default function OrderConfirmationModal() {
  const { isSuccessOpen, setIsSuccessOpen, lastOrderId } = useApp();

  if (!isSuccessOpen) return null;

  return (
    <div className="modal-overlay-bg">
      <div className="modal-dialog-box text-center" style={{ maxWidth: '480px' }}>
        <div className="success-check-circle">✓</div>
        <h2 className="success-heading">Order Confirmed!</h2>
        <p className="success-desc">
          Your care package has been dispatched to our local Afghanistan fulfillment depot for same-day packing and courier delivery.
        </p>

        <div className="tracking-code-highlight">
          <div className="tracking-code-sub">Your Tracking Code</div>
          <div className="tracking-code-num">{lastOrderId}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Link
            href={`/track?orderId=${lastOrderId}`}
            onClick={() => setIsSuccessOpen(false)}
            className="btn btn-primary full-width"
          >
            Track Order Live
          </Link>
          <button
            type="button"
            onClick={() => setIsSuccessOpen(false)}
            className="btn btn-outline full-width"
          >
            Done & Return to Store
          </button>
        </div>
      </div>
    </div>
  );
}
