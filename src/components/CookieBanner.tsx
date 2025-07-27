// src/components/CookieBanner.tsx
'use client';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white text-sm text-gray-700 border-t border-gray-300 shadow z-50 px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between">
      <p className="mb-2 md:mb-0">
        We use basic cookies to understand how people use our site (e.g., Google Analytics).
        <br className="block md:hidden" />
        {' '}
        By continuing to browse, you agree to our use of cookies.{" "}
        <a href="/privacy" className="underline text-olive">Learn more</a>.
      </p>
      <button
        onClick={handleAccept}
        className="bg-olive text-white px-4 py-2 rounded hover:bg-olive-dark mt-2 md:mt-0 md:ml-4"
      >
        Accept
      </button>
    </div>
  );
}
