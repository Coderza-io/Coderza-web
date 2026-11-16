import React from 'react';
import { motion, useReducedMotion, type Transition } from 'motion/react';

export const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Permissive viewport threshold ensures reliable triggering on iPhone / Mobile Safari
// and inside embedded preview iframes without leaving elements invisible.
export const STUDIO_VIEWPORT = {
  once: true,
  amount: 0.08,
} as const;

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.56,
  y = 24,
  className = '',
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={STUDIO_VIEWPORT}
      transition={{
        duration: prefersReduced ? 0.18 : duration,
        delay: prefersReduced ? 0 : delay,
        ease: STUDIO_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  stagger?: number;
  delayChildren?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  stagger = 0.08,
  delayChildren = 0.02,
  className = '',
}: StaggerContainerProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReduced ? 0 : stagger,
            delayChildren: prefersReduced ? 0 : delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  y?: number;
  className?: string;
}

export function StaggerItem({ children, y = 22, className = '' }: StaggerItemProps) {
  const prefersReduced = useReducedMotion();

  const transition: Transition = {
    duration: prefersReduced ? 0.18 : 0.54,
    ease: STUDIO_EASE,
  };

  return (
    <motion.div
      variants={{
        hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MaskedLineProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function MaskedLine({
  children,
  delay = 0.12,
  duration = 0.65,
  className = '',
}: MaskedLineProps) {
  const prefersReduced = useReducedMotion();

  return (
    <span className={`block overflow-hidden pb-[0.08em] -mb-[0.08em] ${className}`}>
      <motion.span
        className="block"
        initial={prefersReduced ? { opacity: 0 } : { y: '105%', opacity: 0 }}
        animate={prefersReduced ? { opacity: 1 } : { y: '0%', opacity: 1 }}
        transition={{
          duration: prefersReduced ? 0.18 : duration,
          delay: prefersReduced ? 0 : delay,
          ease: STUDIO_EASE,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedSection({ children, className = '', id }: AnimatedSectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

interface AnimatedHeadingProps {
  index: string;
  label: string;
  headline: string;
  description?: string;
  tone?: 'dark' | 'light';
  className?: string;
}

export function AnimatedHeading({
  index,
  label,
  headline,
  description,
  tone = 'dark',
  className = '',
}: AnimatedHeadingProps) {
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
          className={`mt-4 sm:mt-5 text-[15px] sm:text-[17px] leading-[1.65] ${
            isDark ? 'text-[#BDB6C7]' : 'text-[#151817]/80'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

export function InteractiveCard({ children, className = '' }: InteractiveCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReduced ? undefined : { y: -2 }}
      whileTap={prefersReduced ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.18, ease: STUDIO_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
