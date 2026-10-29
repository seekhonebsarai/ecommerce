"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { useApp } from '../context/AppContext';

// Lazily load global modals/drawers only when needed
const CartDrawer = dynamic(() => import('./CartDrawer'), { ssr: false });
const CheckoutModal = dynamic(() => import('./CheckoutModal'), { ssr: false });
const OrderConfirmationModal = dynamic(() => import('./OrderConfirmationModal'), { ssr: false });
const TrackingModal = dynamic(() => import('./TrackingModal'), { ssr: false });

export default function ClientModals() {
  const { isCartOpen, isCheckoutOpen, isSuccessOpen, isTrackingOpen } = useApp();

  return (
    <>
      {isCartOpen && <CartDrawer />}
      {isCheckoutOpen && <CheckoutModal />}
      {isSuccessOpen && <OrderConfirmationModal />}
      {isTrackingOpen && <TrackingModal />}
    </>
  );
}
