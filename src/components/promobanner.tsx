import React, { useState } from 'react';

interface PromoBannerProps {
  defaultPromoCode?: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ defaultPromoCode = 'test123' }) => {
  const searchParams = new URLSearchParams(window.location.search);
  const promoCode = searchParams.get('promocode') || defaultPromoCode;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promoCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div style={{backgroundColor: 'purple', padding: '10px', textAlign: 'center'}}>
      <p style={{color: 'white'}}>
        Use promo code: <span style={{fontWeight: 'bold', cursor: 'pointer'}} onClick={handleCopy}>{promoCode}</span>
      </p>
    </div>
  );
};

export default PromoBanner;
