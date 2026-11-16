import React from 'react';

interface CoderzaLogoProps {
  variant?: 'dark' | 'light';
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CoderzaLogo({
  variant = 'dark',
  showWordmark = true,
  size = 'md',
  className = '',
}: CoderzaLogoProps) {
  const cColor = variant === 'dark' ? '#F7F6F3' : '#151817';
  const wordmarkColor = variant === 'dark' ? 'text-[#F7F6F3]' : 'text-[#151817]';
  const limeColor = '#C9F466';

  const dimensions = {
    sm: { icon: 26, text: 'text-[20px] sm:text-[21px]', gap: 'gap-2.5' },
    md: { icon: 28, text: 'text-[22px]', gap: 'gap-3' },
    lg: { icon: 36, text: 'text-[28px]', gap: 'gap-3.5' },
  }[size];

  return (
    <span className={`inline-flex items-center ${dimensions.gap} select-none ${className}`}>
      <svg
        width={dimensions.icon}
        height={dimensions.icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Outer & Inner Geometric C Mark preserving official Coderza proportions */}
        <path
          d="M84 12H45C24.5655 12 8 28.5655 8 49V51C8 71.4345 24.5655 88 45 88H84V69.5H46.5C35.7304 69.5 27 60.7696 27 50C27 39.2304 35.7304 30.5 46.5 30.5H84V12Z"
          fill={cColor}
        />
        {/* Lime Rounded Square Accent inside C opening */}
        <rect x="65" y="40.5" width="19" height="19" rx="3.8" fill={limeColor} />
      </svg>

      {showWordmark && (
        <span
          className={`font-[family-name:var(--font-display)] font-extrabold tracking-[-0.04em] leading-none whitespace-nowrap ${dimensions.text} ${wordmarkColor}`}
        >
          coderza
          <span style={{ color: limeColor }}>.</span>
        </span>
      )}
    </span>
  );
}
