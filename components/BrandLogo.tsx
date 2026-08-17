import React from 'react';

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

const BrandLogo: React.FC<BrandLogoProps> = ({ compact = false, className = '' }) => (
  <span className={`inline-flex items-center gap-3 ${className}`} aria-label="ArioLabs">
    <svg className="h-10 w-10 shrink-0" viewBox="0 0 40 40" role="img" aria-hidden="true">
      <rect x="1" y="1" width="38" height="38" rx="10" fill="#06B6D4" />
      <path d="M10 29 19.8 9 30 29M14.5 23h10.8" fill="none" stroke="#071426" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="29" r="2.4" fill="#F8FAFC" />
      <circle cx="19.8" cy="9" r="2.4" fill="#F8FAFC" />
      <circle cx="30" cy="29" r="2.4" fill="#F8FAFC" />
      <path d="m25.7 16.4 3 2.4-3 2.4" fill="none" stroke="#F8FAFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    {!compact && (
      <span className="leading-none">
        <span className="block font-heading text-xl font-bold tracking-tight text-white">ArioLabs</span>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-light-teal">Workflow systems</span>
      </span>
    )}
  </span>
);

export default BrandLogo;
