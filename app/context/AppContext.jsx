"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CURRENCIES, CITIES, TRANSLATIONS, SAMPLE_ORDERS } from '../data/catalog';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Theme state
  const [theme, setTheme] = useState('light');
  
  // Language & Direction state
  const [lang, setLang] = useState('en');
  
  // Currency state
  const [currency, setCurrency] = useState('USD');

  // Selected City state
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);

  // User state
  const [user, setUser] = useState(null);
  const [pendingCartItem, setPendingCartItem] = useState(null);

  // Cart state
  const [cart, setCart] = useState([]);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [lastOrderId, setLastOrderId] = useState('KHD-8842');

  // Load persisted state from localStorage on client mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('kharid_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const savedLang = localStorage.getItem('kharid_lang') || 'en';
      const savedCurrency = localStorage.getItem('kharid_currency') || 'USD';
      const savedCart = localStorage.getItem('kharid_cart');
      const savedUser = localStorage.getItem('kharid_user');
      const savedPending = localStorage.getItem('kharid_pending_item');

      setTheme(savedTheme);
      setLang(savedLang);
      setCurrency(savedCurrency);
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart));
        } catch (e) {
          console.error("Failed to parse cart from localStorage", e);
        }
      }
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (e) {
          console.error("Failed to parse user from localStorage", e);
        }
      }
      if (savedPending) {
        try {
          setPendingCartItem(JSON.parse(savedPending));
        } catch (e) {
          console.error("Failed to parse pending item from localStorage", e);
        }
      }
    }
  }, []);

  // Update HTML tag when theme or lang changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      if (theme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
      localStorage.setItem('kharid_theme', theme);

      const isRtl = lang === 'fa' || lang === 'pa';
      html.setAttribute('lang', lang);
      html.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
      localStorage.setItem('kharid_lang', lang);
    }
  }, [theme, lang]);

  // Save cart changes to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('kharid_cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Save currency change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('kharid_currency', currency);
    }
  }, [currency]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const login = (userData) => {
    setUser(userData);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kharid_user', JSON.stringify(userData));
    }

    // If there was a pending item from clicking "Add to Box", add it now!
    const pending = pendingCartItem || (typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('kharid_pending_item') || 'null') : null);
    if (pending) {
      setCart(prev => {
        const existing = prev.find(i => i.id === pending.id);
        if (existing) {
          return prev.map(i => i.id === pending.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i);
        }
        return [...prev, { ...pending, quantity: 1 }];
      });
      setPendingCartItem(null);
      if (typeof window !== 'undefined') {
        localStorage.removeItem('kharid_pending_item');
      }
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('kharid_user');
    }
  };

  const formatPrice = (priceUSD) => {
    const curr = CURRENCIES[currency] || CURRENCIES.USD;
    const converted = priceUSD * curr.rate;
    if (currency === 'AFN') {
      return `${Math.round(converted).toLocaleString()} ${curr.symbol}`;
    }
    return `${curr.symbol}${converted.toFixed(2)}`;
  };

  const addToCart = (item, router = null) => {
    // If user is not logged in, require login first!
    if (!user) {
      setPendingCartItem(item);
      if (typeof window !== 'undefined') {
        localStorage.setItem('kharid_pending_item', JSON.stringify(item));
      }
      if (router) {
        router.push('/login?redirect=cart');
      } else if (typeof window !== 'undefined') {
        window.location.href = '/login?redirect=cart';
      }
      return { success: false, requireLogin: true };
    }

    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
    return { success: true, requireLogin: false };
  };

  const updateCartQty = (id, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = (item.quantity || 1) + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const subtotalUSD = cart.reduce((sum, item) => sum + (item.priceUSD * (item.quantity || 1)), 0);
  const deliveryFeeUSD = 0; // Free to city center!
  const totalUSD = subtotalUSD + deliveryFeeUSD;

  const isRtl = lang === 'fa' || lang === 'pa';
  const t = (key) => {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || key;
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        user,
        login,
        logout,
        pendingCartItem,
        lang,
        setLang,
        isRtl,
        t,
        currency,
        setCurrency,
        formatPrice,
        selectedCity,
        setSelectedCity,
        cart,
        addToCart,
        updateCartQty,
        clearCart,
        totalItems,
        subtotalUSD,
        deliveryFeeUSD,
        totalUSD,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isTrackingOpen,
        setIsTrackingOpen,
        isSuccessOpen,
        setIsSuccessOpen,
        lastOrderId,
        setLastOrderId
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
