"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PRODUCTS } from '../data/catalog';
import { useApp } from '../context/AppContext';

export default function ProductCatalog() {
  const router = useRouter();
  const { addToCart, formatPrice, lang, isRtl, t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      item.title.toLowerCase().includes(q) ||
      item.dariTitle.toLowerCase().includes(q) ||
      item.shortDesc.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  return (
    <section className="section section-muted" id="packages">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-pill">Curated Packages</span>
          <h2 className="section-title">Care Packages & Groceries Your Family Needs</h2>
          <p className="section-desc">
            Thoughtfully packed with premium staples, celebratory sweets, and farm-fresh produce. Custom greeting card included with every box.
          </p>
        </div>

        {/* Toolbar */}
        <div className="catalog-toolbar">
          <div className="category-pill-group">
            <button
              type="button"
              className={`cat-pill ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Items
            </button>
            <button
              type="button"
              className={`cat-pill ${selectedCategory === 'grocery' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('grocery')}
            >
              Grocery Boxes
            </button>
            <button
              type="button"
              className={`cat-pill ${selectedCategory === 'gift' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('gift')}
            >
              Gifts & Occasions
            </button>
            <button
              type="button"
              className={`cat-pill ${selectedCategory === 'produce' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('produce')}
            >
              Fresh Fruits
            </button>
            <button
              type="button"
              className={`cat-pill ${selectedCategory === 'staple' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('staple')}
            >
              Bulk Staples
            </button>
          </div>

          <div className="search-box-wrapper">
            <svg className="search-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search flour, rice, cake, gift..."
              className="search-input-field"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="empty-catalog-state">
            <p className="empty-title">No items found matching your search</p>
            <p className="empty-sub">Try searching for rice, flour, birthday gift, or choose another category tab.</p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-thumbnail">
                  <img src={product.image} alt={product.title} loading="lazy" decoding="async" />
                  <span className={`card-badge ${product.badgeType === 'gold' ? 'gold' : ''}`}>
                    {product.badge}
                  </span>
                </div>

                <div className="product-body">
                  <div className="product-meta-row">
                    <span>⭐ {product.rating} ({product.reviewsCount})</span>
                    <span>⚖️ {product.weightKg} kg</span>
                  </div>

                  <h3 className="product-card-title">
                    {isRtl ? product.dariTitle : product.title}
                  </h3>

                  <p className="product-card-desc">{product.shortDesc}</p>

                  <div className="product-includes-box">
                    <strong>Includes:</strong> {product.includes.slice(0, 3).join(', ')}
                    {product.includes.length > 3 ? '...' : ''}
                  </div>

                  <div className="product-card-footer">
                    <div className="product-price-val">
                      {formatPrice(product.priceUSD)}
                    </div>
                      <button
                        type="button"
                        onClick={() =>
                          addToCart(
                            {
                              id: product.id,
                              title: isRtl ? product.dariTitle : product.title,
                              priceUSD: product.priceUSD,
                              image: product.image,
                              type: 'product',
                              details: `${product.weightKg} kg care package`
                            },
                            router
                          )
                        }
                        className="btn btn-primary btn-sm"
                      >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                      {t('addCart')}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
