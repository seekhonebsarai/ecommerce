"use client";

import React, { useState } from 'react';
import FAQ from '../components/FAQ';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "payments", label: "💳 Payments & Currencies" },
    { id: "delivery", label: "🚚 Delivery & Cities" },
    { id: "groceries", label: "🌾 Food & Quality" },
    { id: "topup", label: "⚡ Mobile Top-Up" }
  ];

  const categoryFAQs = {
    payments: [
      {
        q: "Which international payment methods do you accept?",
        a: "We accept all major international credit and debit cards (Visa, MasterCard, American Express, Discover), as well as Apple Pay, Google Pay, and European SEPA cards. All payments are encrypted with 256-bit bank-grade SSL security."
      },
      {
        q: "Are there hidden currency exchange markups or kiosk fees?",
        a: "None whatsoever. Traditional money transfer kiosks frequently charge 10% to 20% in hidden fees and poor exchange rates. With Bazaar AF, the total shown in USD, EUR, GBP, or CAD at checkout is 100% final."
      },
      {
        q: "Will I receive an official invoice for my order?",
        a: "Yes! As soon as your payment is processed, a PDF receipt and itemized order invoice is instantly sent to your email address with your unique tracking reference code."
      }
    ],
    delivery: [
      {
        q: "How does the courier locate the house without postal codes in Afghanistan?",
        a: "Our couriers are locals who know their cities inside out. When placing the order, you provide a neighborhood name, a nearby mosque or school landmark, and the recipient’s Afghan phone number. Our courier always calls them 30 minutes in advance to confirm their exact street entrance."
      },
      {
        q: "Can I request delivery on a specific date for a birthday or Eid?",
        a: "Yes! During checkout, simply write the desired delivery date in the 'Special Instructions' box. We will hold and prepare the fresh cake, flowers, or groceries for delivery on that exact morning."
      },
      {
        q: "What happens if my family is not home when the courier arrives?",
        a: "If the recipient is temporarily away, our courier will coordinate directly with them by phone to re-deliver later that afternoon at no extra charge."
      }
    ],
    groceries: [
      {
        q: "Where do you source your flour, rice, and cooking oil?",
        a: "We procure our staples directly from verified agricultural millers and certified distributors. Our flour is premium triple-sifted stone wheat flour, our rice is naturally aged Grade-A Super Sella, and our cooking oil is 100% pure sunflower or corn oil in sealed tin containers."
      },
      {
        q: "How are fresh birthday cakes and floral bouquets handled?",
        a: "Cakes are baked fresh on the very morning of delivery by Kabul and Mazar's premier bakeries, decorated with your custom message, and transported in temperature-controlled boxes so they arrive pristine."
      }
    ],
    topup: [
      {
        q: "How fast is mobile phone credit delivered to their SIM?",
        a: "Our carrier API credits Afghan Wireless, Roshan, MTN, Etisalat, and Salaam phone numbers in under 60 seconds. The recipient immediately receives an automated carrier SMS notification."
      },
      {
        q: "Are there deductions from the mobile recharge?",
        a: "We charge $0 service fee. In Afghanistan, telecommunications operators apply the mandatory government telecom tax (10%) mandated by the Afghan Telecom Regulatory Authority (ATRA), and the remainder is deposited directly into your recipient’s balance."
      }
    ]
  };

  return (
    <div className="page-wrapper-padding">
      <div className="container">
        {/* Page Header */}
        <div className="page-header-banner">
          <span className="badge-pill">Knowledge Base & Diaspora Support</span>
          <h1 className="page-headline">Frequently Asked Questions</h1>
          <p className="page-subline">
            Have questions about payment methods from abroad, city delivery times, photo proof protocols, or Afghan carrier recharges? Find detailed answers below, or talk to our 24/7 team on WhatsApp.
          </p>
        </div>

        {/* Category Pills */}
        <div className="faq-category-pills">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`category-filter-btn ${activeCategory === c.id ? 'active' : ''}`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Filtered FAQs if specific category selected */}
        {activeCategory !== "all" ? (
          <div className="faq-accordion-container" style={{ margin: '2rem auto 3rem' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              {categories.find(c => c.id === activeCategory)?.label}
            </h3>
            {categoryFAQs[activeCategory]?.map((faq, idx) => (
              <div key={idx} className="faq-accordion-item open" style={{ marginBottom: '1.25rem' }}>
                <div className="faq-question-btn" style={{ cursor: 'default' }}>
                  <span>{faq.q}</span>
                </div>
                <div className="faq-answer-pane" style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Main FAQ Component */
          <FAQ />
        )}

        {/* Global Timezones & Direct Concierge Card */}
        <div className="address-guide-box" style={{ marginTop: '3.5rem' }}>
          <div className="section-head text-center" style={{ marginBottom: '1.5rem' }}>
            <span className="badge-pill">24/7 Global Diaspora Support</span>
            <h2 className="section-title" style={{ fontSize: '1.5rem' }}>We Are Awake When You Are Awake</h2>
            <p className="section-desc">
              Whether you are ordering late at night from California, during work lunch in London, or early morning in Sydney, our bilingual customer support is always online.
            </p>
          </div>

          <div className="address-steps-grid">
            <div className="address-step-item">
              <div className="address-step-title">🇺🇸 North America (USA & Canada)</div>
              <p className="address-step-desc">
                EST / PST Support: Direct assistance for morning or evening orders from New York, Toronto, California, and Virginia.
              </p>
            </div>
            <div className="address-step-item">
              <div className="address-step-title">🇪🇺 Europe (UK, Germany, France)</div>
              <p className="address-step-desc">
                GMT / CET Support: Synchronized daytime dispatch for our large diaspora community in London, Frankfurt, and Paris.
              </p>
            </div>
            <div className="address-step-item">
              <div className="address-step-title">🇦🇺 Australia & Pacific</div>
              <p className="address-step-desc">
                AEST Support: Convenient ordering hours for our valued families in Sydney, Melbourne, and Brisbane.
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Help Banner */}
        <div className="whatsapp-help-banner" style={{ marginTop: '3.5rem' }}>
          <div className="wa-banner-content">
            <span className="wa-icon-large">💬</span>
            <div>
              <h3 className="wa-title">Still have a question or custom request?</h3>
              <p className="wa-desc">Our bilingual Dari, Pashto, and English concierge is available right now on WhatsApp to assist you.</p>
            </div>
          </div>
          <a
            href="https://wa.me/13079981368"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ backgroundColor: '#25D366', color: 'white' }}
          >
            Chat with Concierge on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
