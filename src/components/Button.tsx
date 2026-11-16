import React from 'react';
import { useRouter, withBasePrefix } from '../context/RouterContext';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline-dark' | 'outline-light';
  size?: 'md' | 'lg';
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const { navigate } = useRouter();

  const baseStyles =
    'group inline-flex items-center justify-center gap-2.5 font-[family-name:var(--font-display)] font-semibold tracking-[-0.01em] rounded-xl transition-all duration-200 ease-out whitespace-nowrap shrink-0 cursor-pointer active:scale-[0.985]';

  const sizeStyles = {
    md: 'h-12 px-6 text-[15px]',
    lg: 'h-[52px] px-7 text-[15px]',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#C9F466] text-[#151817] hover:bg-[#d6f889]',
    secondary:
      'bg-[#241A2E] text-[#F7F6F3] border border-[#30203D] hover:border-[#C9F466]/65 hover:bg-[#30203D]/70',
    'outline-dark':
      'bg-transparent text-[#F7F6F3] border border-[#F7F6F3]/20 hover:border-[#C9F466] hover:text-[#C9F466]',
    'outline-light':
      'bg-[#151817] text-[#F7F6F3] hover:bg-[#241A2E]',
  }[variant];

  const combined = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    if (external || href.startsWith('mailto:') || href.startsWith('http')) {
      return (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={combined}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }

    return (
      <a
        href={withBasePrefix(href)}
        onClick={(e) => {
          e.preventDefault();
          navigate(href);
        }}
        className={combined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combined}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
