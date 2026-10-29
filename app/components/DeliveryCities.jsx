"use client";

import React from 'react';
import { CITIES } from '../data/catalog';
import { useApp } from '../context/AppContext';

export default function DeliveryCities() {
  const { selectedCity, setSelectedCity } = useApp();

  return (
    <section className="section" id="cities">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-pill">Coverage & Dispatch</span>
          <h2 className="section-title">Cities We Serve Across Afghanistan</h2>
          <p className="section-desc">
            Free same-day delivery to central districts. Remote villages and outskirts carry a small, transparent fee shown upfront before you pay.
          </p>
        </div>

        <div className="city-coverage-card">
          <div className="city-card-header">
            <div>
              <h3 className="city-card-title">Select Destination City</h3>
              <p className="city-eta-highlight">
                {selectedCity.name} — {selectedCity.eta} | Free City Center Delivery
              </p>
            </div>
            <div className="active-city-pill">
              <span>Selected: <strong>{selectedCity.name} ({selectedCity.native})</strong></span>
            </div>
          </div>

          <div className="cities-grid">
            {CITIES.map((city) => {
              const isActive = city.id === selectedCity.id;
              return (
                <button
                  key={city.id}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  className={`city-pill-btn ${isActive ? 'active' : ''}`}
                >
                  <div>
                    <div className="city-name-row">
                      <strong>{city.name}</strong>
                      <span className="city-native">({city.native})</span>
                    </div>
                    <div className="city-sub-eta">{city.eta}</div>
                  </div>
                  <span className={`city-status-badge ${city.status === 'active' ? 'active' : 'soon'}`}>
                    {city.status === 'active' ? 'Free Center' : 'Coming Soon'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
