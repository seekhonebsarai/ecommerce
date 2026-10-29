"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '../context/AppContext';

export default function CartDrawer() {
  const router = useRouter();
  const {
    cart,
    updateCartQty,
    isCartOpen,
    setIsCartOpen,
    subtotalUSD,
    totalUSD,
    formatPrice,
    t
  } = useApp();

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add a package to continue.');
      return;
    }
    setIsCartOpen(false);
    router.push('/checkout');
  };

  return (
    <>
      {/* Backdrop */}
      <div className="cart-backdrop" onClick={() => setIsCartOpen(false)} />

      {/* Slide-out Drawer */}
      <aside className="cart-drawer-panel" aria-label="Shopping Cart Drawer">
        <div className="cart-header">
          <div className="cart-title-row">
            <span className="cart-icon-emoji">🛍️</span>
            <h2 className="cart-title">{t('cartTitle')}</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="cart-close-btn"
            aria-label="Close Cart"
          >
            ✕
          </button>
        </div>

        {/* Items List */}
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <div className="empty-box-emoji">📦</div>
              <h3 className="empty-box-title">Your Cart is Empty</h3>
              <p className="empty-box-desc">
                Choose a grocery package or send a celebratory gift to your family in Afghanistan.
              </p>
            </div>
          ) : (
            cart.map((item, index) => {
              const itemTotal = item.priceUSD * (item.quantity || 1);
              return (
                <div key={item.id || index} className="cart-item-row">
                  <img src={item.image} alt={item.title} className="cart-item-img" loading="lazy" decoding="async" />
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.title}</h4>
                    {item.details && <span className="cart-item-meta">{item.details}</span>}
                    <div className="cart-item-price-tag">{formatPrice(itemTotal)}</div>
                  </div>
                  <div className="cart-item-qty">
                    <button
                      type="button"
                      onClick={() => updateCartQty(item.id, -1)}
                      className="qty-btn"
                    >
                      -
                    </button>
                    <span className="qty-val">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateCartQty(item.id, 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="cart-footer-bar">
            <div className="cart-subtotal-row">
              <span>Subtotal:</span>
              <strong>{formatPrice(subtotalUSD)}</strong>
            </div>
            <div className="cart-delivery-row">
              <span>City Center Delivery:</span>
              <strong className="free-text">FREE</strong>
            </div>
            <div className="cart-total-row">
              <span>Total:</span>
              <strong className="cart-total-val">{formatPrice(totalUSD)}</strong>
            </div>
            <button
              type="button"
              onClick={handleCheckoutClick}
              className="btn btn-primary full-width"
            >
              Proceed to Dedicated Checkout →
            </button>
            <button
              type="button"
              onClick={() => {
                setIsCartOpen(false);
                router.push('/cart');
              }}
              className="btn btn-outline full-width"
              style={{ marginTop: '0.65rem' }}
            >
              View Full Care Box ({cart.length})
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
