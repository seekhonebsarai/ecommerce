"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useApp } from '../context/AppContext';

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTarget = searchParams.get('redirect') || 'cart';

  const { user, login, pendingCartItem } = useApp();

  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('United States');

  // If already logged in, redirect
  useEffect(() => {
    if (user) {
      router.push(`/${redirectTarget}`);
    }
  }, [user, redirectTarget, router]);

  const handleDemoLogin = () => {
    login({
      name: 'Ahmad Farhad',
      email: 'ahmad.farhad@example.com',
      country: 'Germany',
      phone: '+49 176 1234567'
    });
    router.push(`/${redirectTarget}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      name: fullName || email.split('@')[0] || 'Afghan Diaspora Member',
      email: email,
      country: country,
      phone: '+1 555 019 2834'
    });
    router.push(`/${redirectTarget}`);
  };

  return (
    <div className="page-wrapper-padding">
      <div className="container" style={{ maxWidth: '960px', width: '100%', boxSizing: 'border-box' }}>
        {/* Pending Item Banner */}
        {pendingCartItem && (
          <div className="login-pending-alert-banner">
            <span className="pending-icon">📦</span>
            <div>
              <strong>Item Saved: "{pendingCartItem.title}"</strong>
              <p>Sign in below or click 1-Click Demo to instantly add this package to your care box and proceed to checkout.</p>
            </div>
          </div>
        )}

        <div className="login-grid-card">
          {/* Left Form */}
          <div className="login-form-side">
            <div className="login-header-group">
              <span className="badge-pill">Member Access</span>
              <h1 className="login-title">
                {mode === 'signin' ? 'Sign In to Your Account' : 'Create Your Bazaar AF Account'}
              </h1>
              <p className="login-subline">
                Send groceries, fresh cakes, and mobile credit to loved ones in Afghanistan with verified doorstep photo proof.
              </p>
            </div>

            {/* Quick 1-Click Demo Button */}
            <div className="demo-login-box">
              <div className="demo-badge-row">
                <span className="demo-kicker">Quick Evaluation / Pair-Programming</span>
              </div>
              <button
                type="button"
                onClick={handleDemoLogin}
                className="btn btn-secondary btn-lg full-width login-demo-btn"
                aria-label="1-Click Demo Login as Ahmad Farhad"
              >
                <span className="demo-btn-main">🚀 1-Click Demo Login</span>
                <span className="demo-btn-sub">(Ahmad Farhad · Diaspora Member)</span>
              </button>
            </div>

            <div className="or-divider">
              <span>OR ENTER CREDENTIALS</span>
            </div>

            {/* Tab switch */}
            <div className="login-tab-switch" role="tablist" aria-label="Sign In or Create Account">
              <button
                type="button"
                role="tab"
                aria-selected={mode === 'signin'}
                onClick={() => setMode('signin')}
                className={`login-tab-btn ${mode === 'signin' ? 'active' : ''}`}
              >
                Sign In
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === 'signup'}
                onClick={() => setMode('signup')}
                className={`login-tab-btn ${mode === 'signup' ? 'active' : ''}`}
              >
                Create Account
              </button>
            </div>

            <form onSubmit={handleSubmit} className="auth-form-body" suppressHydrationWarning>
              {mode === 'signup' && (
                <>
                  <div className="form-field-group">
                    <label className="form-label" htmlFor="register-fullname">Full Name *</label>
                    <input
                      id="register-fullname"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Zahra Farhad"
                      className="text-input-field"
                      autoComplete="name"
                      suppressHydrationWarning
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="form-label" htmlFor="register-country">Country Where You Reside *</label>
                    <select
                      id="register-country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="select-input-field"
                      autoComplete="country-name"
                      suppressHydrationWarning
                    >
                      <option value="United States">United States 🇺🇸</option>
                      <option value="Canada">Canada 🇨🇦</option>
                      <option value="Germany">Germany 🇩🇪</option>
                      <option value="United Kingdom">United Kingdom 🇬🇧</option>
                      <option value="Australia">Australia 🇦🇺</option>
                      <option value="Other">Other Country 🌍</option>
                    </select>
                  </div>
                </>
              )}

              <div className="form-field-group">
                <label className="form-label" htmlFor="auth-email">Email Address *</label>
                <input
                  id="auth-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="text-input-field"
                  autoComplete="email"
                  inputMode="email"
                  suppressHydrationWarning
                />
              </div>

              <div className="form-field-group">
                <label className="form-label" htmlFor="auth-password">Password *</label>
                <input
                  id="auth-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="text-input-field"
                  autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                  suppressHydrationWarning
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg full-width login-submit-btn"
              >
                {mode === 'signin' ? 'Sign In & View Care Box →' : 'Create Account & Continue →'}
              </button>

              <div className="login-switch-prompt">
                {mode === 'signin' ? (
                  <span>
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('signup')}
                      className="login-switch-inline-link"
                    >
                      Create one now
                    </button>
                  </span>
                ) : (
                  <span>
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('signin')}
                      className="login-switch-inline-link"
                    >
                      Sign in
                    </button>
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Right Benefits Column */}
          <div className="login-benefits-side">
            <h3 className="benefits-side-title">Why Create a Bazaar AF Account?</h3>
            <ul className="benefits-side-list">
              <li>
                <span className="benefit-icon-badge">📸</span>
                <div>
                  <strong>Permanent Photo Proof Gallery</strong>
                  <p>Access your family's doorstep delivery photos from anywhere at any time.</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon-badge">⚡</span>
                <div>
                  <strong>1-Click Monthly Reorder</strong>
                  <p>Send standard 50kg flour and 25kg rice rations to your parents with one single tap.</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon-badge">📍</span>
                <div>
                  <strong>Saved Afghan Landmark Addresses</strong>
                  <p>Never re-enter complex street descriptions or local phone numbers again.</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon-badge">💬</span>
                <div>
                  <strong>WhatsApp Courier Updates</strong>
                  <p>Receive milestone notifications directly on your phone when the courier leaves the depot.</p>
                </div>
              </li>
            </ul>

            <div className="login-secure-footer">
              <span className="secure-lock-icon">🔒</span>
              <span>256-Bit Bank-Grade Card Security & Modesty Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="page-wrapper-padding text-center">Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
