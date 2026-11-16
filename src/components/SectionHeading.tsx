import React from 'react';
import { Reveal } from './MotionPrimitives';

interface SectionHeadingProps {
  index: string;
  label: string;
  headline: string;
  description?: string;
  tone?: 'dark' | 'light';
  className?: string;
}

export function SectionHeading({
  index,
  label,
  headline,
  description,
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  const isDark = tone === 'dark';

  return (
    <Reveal y={24} duration={0.58} className={`max-w-2xl ${className}`}>
      <p
        className={`font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.12em] uppercase mb-3 sm:mb-4 ${
          isDark ? 'text-[#BDB6C7]' : 'text-[#151817]/75'
        }`}
      >
        <span className={isDark ? 'text-[#C9F466]' : 'text-[#151817] font-semibold'}>
          {index}.
        </span>{' '}
        {label}
      </p>
      <h2
        className={`font-[family-name:var(--font-display)] text-[28px] sm:text-4xl lg:text-[46px] font-bold tracking-[-0.028em] leading-[1.12] ${
          isDark ? 'text-[#F7F6F3]' : 'text-[#151817]'
        }`}
      >
        {headline}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base sm:text-[17px] leading-[1.65] ${
            isDark ? 'text-[#BDB6C7]' : 'text-[#151817]/80'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
