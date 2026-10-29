"use client";

import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: "Is Bazaar AF available for customers living outside of Afghanistan?",
    a: "Yes, absolutely! Bazaar AF is specifically created for the Afghan diaspora living in the United States, Canada, Europe, Australia, and worldwide to easily send essentials, groceries, gifts, and mobile recharge to family members in Afghanistan."
  },
  {
    q: "Which cities in Afghanistan can you deliver to today?",
    a: "We deliver same-day to Kabul, Mazar-i-Sharif, Herat, Jalalabad, and Panjshir. Kandahar is scheduled next as our fulfillment hub network expands."
  },
  {
    q: "What does delivery cost?",
    a: "Delivery to the city center is 100% free on every order. For addresses located in outer suburbs or distant villages, a modest transparent fee ($3–$5) is calculated and displayed clearly before you pay — never added secretly afterwards."
  },
  {
    q: "How do I pay, and in which currency?",
    a: "You can pay using any debit or credit card issued anywhere in the world (Visa, Mastercard, American Express), as well as Apple Pay, Google Pay, and PayPal. You can view prices in USD, EUR, GBP, CAD, or AFN."
  },
  {
    q: "How do I know my order arrived safely?",
    a: "Every single order concludes with an authentic photo taken at the doorstep showing your family receiving the sealed box. This photo proof is immediately sent to your phone and saved in your order tracking dashboard."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(prev => prev === idx ? -1 : idx);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-pill">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Everything you need to know about ordering, currencies, delivery proof, and payments.
          </p>
        </div>

        <div className="faq-accordion-list">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="faq-trigger"
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-icon-cross">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer-body">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
