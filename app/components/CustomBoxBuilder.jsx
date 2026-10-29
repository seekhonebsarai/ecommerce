"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BUILDER_STAPLES } from '../data/catalog';
import { useApp } from '../context/AppContext';

export default function CustomBoxBuilder() {
  const router = useRouter();
  const { addToCart, formatPrice } = useApp();
  const [quantities, setQuantities] = useState({});
  const maxCapacityKg = 30;

  const handleQtyChange = (id, delta) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  let totalWeight = 0;
  let totalPriceUSD = 0;
  const selectedList = [];

  for (const [id, qty] of Object.entries(quantities)) {
    const item = BUILDER_STAPLES.find(b => b.id === id);
    if (item) {
      totalWeight += item.weightKg * qty;
      totalPriceUSD += item.priceUSD * qty;
      selectedList.push(`${item.name} (x${qty})`);
    }
  }

  const weightPercent = Math.min(100, (totalWeight / maxCapacityKg) * 100);

  const handlePackBox = () => {
    if (selectedList.length === 0) {
      alert('Please add at least 1 item to your custom box before packing!');
      return;
    }

    addToCart(
      {
        id: `custom-box-${Date.now()}`,
        title: 'Custom Curated Care Box',
        priceUSD: totalPriceUSD,
        image: '/images/box-groceries.jpg',
        type: 'custom',
        details: `${totalWeight.toFixed(1)} kg • ${selectedList.slice(0, 3).join(', ')}${selectedList.length > 3 ? '...' : ''}`
      },
      router
    );

    setQuantities({});
  };

  return (
    <section className="section section-muted" id="custom-builder">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-pill">Build Your Own</span>
          <h2 className="section-title">Need Something Specific? Build a Custom Box</h2>
          <p className="section-desc">
            Select essential groceries, adjust item quantities, and watch your package weight gauge and pricing update in real time.
          </p>
        </div>

        <div className="builder-layout-grid">
          {/* Items selection */}
          <div className="builder-items-list">
            {BUILDER_STAPLES.map((item) => {
              const qty = quantities[item.id] || 0;
              return (
                <div key={item.id} className="builder-card">
                  <div>
                    <h4 className="builder-item-name">{item.name}</h4>
                    <span className="builder-item-weight">Weight: {item.weightKg} kg</span>
                  </div>
                  <div className="builder-card-action">
                    <span className="builder-item-price">{formatPrice(item.priceUSD)}</span>
                    <div className="qty-picker">
                      <button
                        type="button"
                        onClick={() => handleQtyChange(item.id, -1)}
                        className="qty-btn"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="qty-number">{qty}</span>
                      <button
                        type="button"
                        onClick={() => handleQtyChange(item.id, 1)}
                        className="qty-btn"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Box Summary */}
          <div className="builder-summary-sticky">
            <div className="summary-box-icon">📦</div>
            <h3 className="summary-title">Your Custom Bazaar AF Box</h3>
            <p className="summary-sub">Max capacity: 30 kg per standard delivery box</p>

            <div className="weight-row">
              <span>Box Weight:</span>
              <strong>{totalWeight.toFixed(1)} / {maxCapacityKg} kg</strong>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${weightPercent}%` }}
              ></div>
            </div>

            <div className="box-price-row">
              <span>Total Price:</span>
              <strong className="box-price-value">{formatPrice(totalPriceUSD)}</strong>
            </div>

            <button
              type="button"
              onClick={handlePackBox}
              className="btn btn-primary full-width"
            >
              Pack Box & Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
