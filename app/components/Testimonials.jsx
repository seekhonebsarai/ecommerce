"use client";

import React from 'react';
import { TESTIMONIALS } from '../data/catalog';

export default function Testimonials() {
  return (
    <section className="section section-muted" id="reviews">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-pill">Community Trust</span>
          <h2 className="section-title">Loved by Afghan Families Abroad</h2>
          <p className="section-desc">
            Real words from customers in the USA, Canada, Germany, and the UK who use Bazaar AF to support family back home.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, index) => (
            <figure key={index} className="testimonial-card">
              <div className="stars-row">★★★★★</div>
              <blockquote className="testimonial-quote">
                “{t.quote}”
              </blockquote>
              <figcaption className="testimonial-author">
                <span className="author-avatar">{t.avatar}</span>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-location">{t.city}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
