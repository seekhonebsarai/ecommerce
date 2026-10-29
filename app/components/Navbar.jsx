"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const {
    theme,
    toggleTheme,
    user,
    logout,
    lang,
    setLang,
    currency,
    setCurrency,
    totalItems,
    setIsCartOpen,
    t
  } = useApp();

  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/packages', label: t('packages') },
    { href: '/delivery-areas', label: t('deliveryAreas') },
    { href: '/topup', label: t('topup') },
    { href: '/custom-box', label: t('customBox') },
    { href: '/photo-proof', label: t('photoProof') },
    { href: '/faq', label: t('faq') },
  ];

  return (
    <header className="site-header-container">
      <div className="container">
        <div className="navbar-glass-bar">
          {/* Brand Logo */}
          <Link href="/" className="brand-logo-link" aria-label="Bazaar AF Home">
            <div className="brand-logo-emblem">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <div className="brand-text-block">
              <span className="brand-title">Bazaar AF</span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Single line with active pill indicator */}
          <nav className="navbar-links-menu" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link-pill ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="navbar-actions-group">
            {/* Currency Selector */}
            <div className="pill-select-wrapper">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="compact-select"
                aria-label="Select Currency"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="CAD">CAD ($)</option>
                <option value="AFN">AFN (؋)</option>
              </select>
            </div>

            {/* Language Selector */}
            <div className="pill-select-wrapper">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="compact-select"
                aria-label="Select Language"
              >
                <option value="en">EN</option>
                <option value="fa">فارسی</option>
                <option value="pa">پښتو</option>
              </select>
            </div>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="circle-icon-btn"
              aria-label="Toggle Dark/Light Mode"
              title="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            {/* Track Button (Dedicated Link) */}
            <Link
              href="/track"
              className={`track-nav-btn ${pathname === '/track' ? 'active' : ''}`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              <span className="track-label">{t('track')}</span>
            </Link>

            {/* Cart Button (Dedicated Link) */}
            <Link
              href="/cart"
              className={`cart-nav-btn ${pathname === '/cart' ? 'active' : ''}`}
              aria-label="View Shopping Cart"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className="cart-label">{t('cart')}</span>
              {totalItems > 0 && (
                <span className="cart-badge-pill">{totalItems}</span>
              )}
            </Link>

            {/* User Profile / Sign In Pill */}
            {user ? (
              <div className="user-nav-profile-badge">
                <span className="user-avatar-tag">👤</span>
                <span className="user-name-text">{user.name.split(' ')[0]}</span>
                <button
                  type="button"
                  onClick={logout}
                  className="user-logout-icon-btn"
                  title="Sign Out"
                >
                  ✕
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className={`login-nav-pill-btn ${pathname === '/login' ? 'active' : ''}`}
              >
                Sign In
              </Link>
            )}

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-hamburger-btn"
              aria-label="Toggle navigation menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Sheet */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <nav className="mobile-nav-links-list">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-nav-item ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/track"
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-item ${pathname === '/track' ? 'active' : ''}`}
              >
                🚚 {t('trackOrder')}
              </Link>
              {user ? (
                <div className="mobile-drawer-user-card">
                  <div className="mobile-drawer-user-info">
                    <span className="user-avatar-tag">👤</span>
                    <span className="mobile-drawer-user-name">{user.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="mobile-drawer-logout-btn"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-nav-item mobile-login-highlight ${pathname === '/login' ? 'active' : ''}`}
                >
                  🔑 Sign In
                </Link>
              )}
            </nav>

            <div className="mobile-drawer-selectors">
              <div className="mobile-drawer-select-item">
                <span className="mobile-select-label">Currency:</span>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="compact-select mobile-select-input"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="CAD">CAD ($)</option>
                  <option value="AFN">AFN (؋)</option>
                </select>
              </div>
              <div className="mobile-drawer-select-item">
                <span className="mobile-select-label">Language:</span>
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="compact-select mobile-select-input"
                >
                  <option value="en">English (EN)</option>
                  <option value="fa">فارسی (Dari)</option>
                  <option value="pa">پښتو (Pashto)</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
