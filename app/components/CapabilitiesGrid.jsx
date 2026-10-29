"use client";

import React from 'react';
import Link from 'next/link';

export default function CapabilitiesGrid() {
  const capabilities = [
    {
      icon: "🍚",
      title: "Monthly Pantry Food Boxes",
      tag: "Core Essential",
      desc: "Complete 1-month grocery supplies tailored for Afghan households. Packed with 50kg fine flour, 25kg aged Sella rice, 10L pure cooking oil, chickpeas, tea, and tomato paste.",
      link: "/packages",
      linkText: "Explore Grocery Boxes →"
    },
    {
      icon: "🎂",
      title: "Birthday & Occasion Surprises",
      tag: "Same-Day Delivery",
      desc: "Freshly baked customized cakes from Kabul’s finest bakeries, fresh hand-tied floral bouquets, and party candles with personalized calligraphy cards delivered on the exact day.",
      link: "/packages",
      linkText: "View Celebration Gifts →"
    },
    {
      icon: "⚡",
      title: "Instant Mobile Airtime & Data",
      tag: "0% Service Fee",
      desc: "Instant SIM recharge for AWCC, Roshan, MTN, Etisalat, and Salaam. Recharged in 60 seconds so your parents and siblings can stay connected with you on WhatsApp and video calls.",
      link: "/topup",
      linkText: "Send Mobile Credit →"
    },
    {
      icon: "📦",
      title: "Customized Grocery Hamper",
      tag: "Build Item by Item",
      desc: "Need specific brands, quantities, or special dietary items? Use our visual box builder to pick exact items, watch the weight capacity meter (up to 30kg), and pack your bespoke box.",
      link: "/custom-box",
      linkText: "Build Custom Box →"
    },
    {
      icon: "🍇",
      title: "Fresh Farm Fruit Baskets",
      tag: "Organic Orchards",
      desc: "Hand-picked Kandahar sweet red pomegranates, Shomali green grapes, crisp sweet figs, fresh mint, and organic melons sourced fresh every morning directly from local growers.",
      link: "/packages",
      linkText: "Shop Fresh Fruits →"
    },
    {
      icon: "🤝",
      title: "24/7 WhatsApp Concierge",
      tag: "Personal Support",
      desc: "Have a special delivery request or need to deliver to a remote village? Our bilingual English/Dari/Pashto concierge team assists you directly on WhatsApp from order to doorstep handover.",
      link: "https://wa.me/13079981368",
      linkText: "Chat on WhatsApp →",
      external: true
    }
  ];

  return (
    <section className="section" id="capabilities">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-pill">What We Can Do</span>
          <h2 className="section-title">Complete Support For Every Family Need</h2>
          <p className="section-desc">
            From daily dining essentials to memorable birthday surprises, see how Bazaar AF helps you care for family in Afghanistan from wherever you live in the world.
          </p>
        </div>

        <div className="capabilities-grid-cards">
          {capabilities.map((item, index) => (
            <div key={index} className="capability-card">
              <div className="cap-top-row">
                <span className="cap-emoji">{item.icon}</span>
                <span className="cap-tag">{item.tag}</span>
              </div>
              <h3 className="cap-title">{item.title}</h3>
              <p className="cap-desc">{item.desc}</p>
              <div className="cap-footer">
                {item.external ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cap-link-btn"
                  >
                    {item.linkText}
                  </a>
                ) : (
                  <Link href={item.link} className="cap-link-btn">
                    {item.linkText}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
