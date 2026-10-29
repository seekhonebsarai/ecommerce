"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '../context/AppContext';

export default function TrackingModal() {
  const { isTrackingOpen, setIsTrackingOpen, lastOrderId } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (isTrackingOpen) {
      setIsTrackingOpen(false);
      router.push(`/track${lastOrderId ? `?orderId=${lastOrderId}` : ''}`);
    }
  }, [isTrackingOpen, lastOrderId, router, setIsTrackingOpen]);

  return null;
}
