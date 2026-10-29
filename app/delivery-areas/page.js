"use client";

import React from 'react';
import DeliveryCities from '../components/DeliveryCities';

export default function DeliveryAreasPage() {
  const dispatchSchedules = [
    {
      city: "Kabul (کابل)",
      cutoff: "2:00 PM AFT",
      window: "2 to 4 Hours",
      vehicles: "Insulated Moto-Couriers & Minivans",
      hub: "Shahr-e Naw Central Logistics Depot",
      status: "Same-Day Active"
    },
    {
      city: "Mazar-i-Sharif (مزار شریف)",
      cutoff: "1:00 PM AFT",
      window: "3 to 5 Hours",
      vehicles: "Express Courier Bikes",
      hub: "Rawza Central Balkh Hub",
      status: "Same-Day Active"
    },
    {
      city: "Herat (هرات)",
      cutoff: "1:30 PM AFT",
      window: "3 to 4 Hours",
      vehicles: "Covered Cargo Bikes & Vans",
      hub: "Darband-e Iraq Express Hub",
      status: "Same-Day Active"
    },
    {
      city: "Jalalabad (جلال آباد)",
      cutoff: "12:00 PM AFT",
      window: "4 to 6 Hours",
      vehicles: "Local Courier Tricycles & Bikes",
      hub: "Zone 2 Jalalabad Terminal",
      status: "Same-Day Active"
    },
    {
      city: "Panjshir Valley (پنجشیر)",
      cutoff: "5:00 PM Prev. Day",
      window: "Next Morning (9 AM - 1 PM)",
      vehicles: "All-Terrain Transit Vans",
      hub: "Bazarak Regional Transit Point",
      status: "Next-Day Scheduled"
    }
  ];

  return (
    <div className="page-wrapper-padding">
      <div className="container">
        {/* Page Header */}
        <div className="page-header-banner">
          <span className="badge-pill">Coverage, Depots & Dispatch</span>
          <h1 className="page-headline">Cities & Delivery Schedules We Serve</h1>
          <p className="page-subline">
            We operate local fulfillment depots and dedicated couriers across Afghanistan. Enjoy 100% free delivery to city centers, real-time dispatch tracking, and guaranteed doorstep photo verification.
          </p>
        </div>

        {/* City Selector Component */}
        <DeliveryCities />

        {/* Unique Section 1: Detailed District Coverage Info */}
        <div className="districts-info-section" style={{ marginTop: '3.5rem' }}>
          <div className="section-head text-center">
            <span className="badge-pill">Neighborhood Directory</span>
            <h2 className="section-title">Supported Districts & Neighborhoods</h2>
            <p className="section-desc">
              Our couriers know every street, alley, and residential quarter in Afghanistan’s major metropolitan centers.
            </p>
          </div>

          <div className="districts-grid-cards">
            <div className="district-card">
              <div className="district-badge-row">
                <h3 className="district-city-name">Kabul (کابل)</h3>
                <span className="coverage-badge active">Active Now</span>
              </div>
              <p className="district-desc">Same-day delivery within 2–4 hours for orders placed before 2:00 PM local time.</p>
              <ul className="neighborhoods-list">
                <li>• Shahr-e Naw & Wazir Akbar Khan</li>
                <li>• Karte 3, Karte 4, Habibia & Deh Bori</li>
                <li>• Khair Khana (1st, 2nd, 3rd Parwan)</li>
                <li>• Taimani, Kolola Pushta & Qala-e Fathullah</li>
                <li>• Dasht-e Barchi & Macrorayan (1 to 4)</li>
              </ul>
              <div className="fee-note">City Center Delivery: <strong>FREE ($0.00)</strong></div>
            </div>

            <div className="district-card">
              <div className="district-badge-row">
                <h3 className="district-city-name">Mazar-i-Sharif (مزار شریف)</h3>
                <span className="coverage-badge active">Active Now</span>
              </div>
              <p className="district-desc">Daily dispatch from our central Balkh depot with temperature-controlled courier bikes.</p>
              <ul className="neighborhoods-list">
                <li>• Rawza & City Center</li>
                <li>• Karte Ariana & Karte Zahiruddin</li>
                <li>• Balkh Gate & Dehdadi Route</li>
                <li>• Khadim Town & Khalid Ibn Walid</li>
              </ul>
              <div className="fee-note">City Center Delivery: <strong>FREE ($0.00)</strong></div>
            </div>

            <div className="district-card">
              <div className="district-badge-row">
                <h3 className="district-city-name">Herat (هرات)</h3>
                <span className="coverage-badge active">Active Now</span>
              </div>
              <p className="district-desc">Same-day delivery for fresh groceries and sweets across central Herat districts.</p>
              <ul className="neighborhoods-list">
                <li>• Darband-e Iraq & Darwaza-e Qandahar</li>
                <li>• Karte Setara & Baghi Nazargah</li>
                <li>• Jada-e Welayat & Majidi Town</li>
                <li>• Minarets Historic Quarter</li>
              </ul>
              <div className="fee-note">City Center Delivery: <strong>FREE ($0.00)</strong></div>
            </div>

            <div className="district-card">
              <div className="district-badge-row">
                <h3 className="district-city-name">Jalalabad & Panjshir</h3>
                <span className="coverage-badge active">Active Now</span>
              </div>
              <p className="district-desc">Jalalabad central zones (Same-Day) and Panjshir valley (Next morning dispatch).</p>
              <ul className="neighborhoods-list">
                <li>• Jalalabad: Zones 1, 2, 3, & Surkh Rod</li>
                <li>• Panjshir: Bazarak, Rokha & Darah</li>
                <li>• Dedicated local van delivery</li>
              </ul>
              <div className="fee-note">City Center Delivery: <strong>FREE ($0.00)</strong></div>
            </div>
          </div>
        </div>

        {/* Unique Section 2: Dispatch Schedules Table */}
        <div style={{ marginTop: '4rem' }}>
          <div className="section-head text-center">
            <span className="badge-pill">Daily Dispatch Timetable</span>
            <h2 className="section-title">Depot Timelines & Courier Cut-Offs</h2>
            <p className="section-desc">
              All times are in Afghanistan Time (AFT = UTC+4:30). Orders placed after cut-off are prioritized first thing the next morning.
            </p>
          </div>

          <div className="dispatch-schedule-table-wrap">
            <table className="dispatch-schedule-table">
              <thead>
                <tr>
                  <th>City / Region</th>
                  <th>Order Cut-Off</th>
                  <th>Avg Delivery Time</th>
                  <th>Transport Type</th>
                  <th>Central Depot</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {dispatchSchedules.map((row, index) => (
                  <tr key={index}>
                    <td><strong>{row.city}</strong></td>
                    <td style={{ color: 'var(--primary)', fontWeight: '700' }}>{row.cutoff}</td>
                    <td>{row.window}</td>
                    <td>{row.vehicles}</td>
                    <td>{row.hub}</td>
                    <td>
                      <span className="coverage-badge active">{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Unique Section 3: How We Deliver Without Zip Codes */}
        <div className="address-guide-box">
          <div className="section-head text-center" style={{ marginBottom: '1.5rem' }}>
            <span className="badge-pill">Afghan Address Guide</span>
            <h2 className="section-title" style={{ fontSize: '1.5rem' }}>No Postal Codes? No Problem!</h2>
            <p className="section-desc">
              In Afghanistan, standard postal codes do not exist. Here is the exact 3-step navigation protocol our local couriers use to find your recipient’s doorway smoothly:
            </p>
          </div>

          <div className="address-steps-grid">
            <div className="address-step-item">
              <div className="address-step-title">1. Nearby Landmark or Mosque</div>
              <p className="address-step-desc">
                Simply mention a recognizable neighborhood landmark — such as a local mosque, school, clinic, or prominent bakery (e.g., "Behind Habibia High School, near Bilal Mosque").
              </p>
            </div>
            <div className="address-step-item">
              <div className="address-step-title">2. Recipient Afghan Phone Number</div>
              <p className="address-step-desc">
                Provide your recipient’s active Afghan mobile number. Our local courier calls them 30 minutes in advance to confirm they are home and confirm their specific street corner.
              </p>
            </div>
            <div className="address-step-item">
              <div className="address-step-title">3. WhatsApp Live Location Pin</div>
              <p className="address-step-desc">
                If the house is located in a winding alley, the recipient can simply send a one-tap WhatsApp GPS pin to our courier, ensuring the delivery arrives without any confusion.
              </p>
            </div>
          </div>
        </div>

        {/* Unique Section 4: Remote Provincial Inquiries */}
        <div className="process-bottom-banner" style={{ marginTop: '3.5rem' }}>
          <div className="banner-left">
            <h3 className="banner-title">Need Delivery to Another Province or Remote Village?</h3>
            <p className="banner-sub">
              We frequently arrange special chartered deliveries for bulk food aid boxes to Ghazni, Wardak, Bamyan, Parwan, and Kunduz. Talk directly to our logistics team on WhatsApp.
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
              Request Provincial Route on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
