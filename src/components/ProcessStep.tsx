import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ProcessStep as ProcessStepType } from '../data/studioData';
import { STUDIO_EASE, STUDIO_VIEWPORT } from './MotionPrimitives';

interface ProcessStepProps {
  step: ProcessStepType;
  isLast?: boolean;
  index?: number;
}

export function ProcessStep({ step, isLast = false, index = 0 }: ProcessStepProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={STUDIO_VIEWPORT}
      transition={{
        duration: prefersReduced ? 0.18 : 0.52,
        delay: prefersReduced ? 0 : index * 0.07,
        ease: STUDIO_EASE,
      }}
      className="relative flex lg:flex-col gap-5 lg:gap-0"
    >
      {/* Step Number + Responsive Connector (Vertical on mobile/tablet, Horizontal on desktop) */}
      <div className="flex flex-col lg:flex-row items-center lg:gap-4 lg:mb-5 shrink-0">
        <span className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#241A2E] border border-[#30203D] font-[family-name:var(--font-mono)] text-xs font-semibold text-[#C9F466] tabular-nums shrink-0">
          {step.number}
        </span>

        {!isLast && (
          <>
            {/* Mobile / Tablet vertical animated connector */}
            <div
              className="lg:hidden w-px flex-1 min-h-[28px] my-2 bg-white/10 overflow-hidden"
              aria-hidden="true"
            >
              <motion.div
                className="w-full h-full bg-[#C9F466]/45 origin-top"
                initial={prefersReduced ? { scaleY: 1 } : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={STUDIO_VIEWPORT}
                transition={{
                  duration: prefersReduced ? 0 : 0.55,
                  delay: prefersReduced ? 0 : 0.12 + index * 0.08,
                  ease: STUDIO_EASE,
                }}
              />
            </div>

            {/* Desktop horizontal animated connector */}
            <div
              className="hidden lg:block h-px flex-1 bg-white/10 overflow-hidden"
              aria-hidden="true"
            >
              <motion.div
                className="h-full w-full bg-[#C9F466]/45 origin-left"
                initial={prefersReduced ? { scaleX: 1 } : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={STUDIO_VIEWPORT}
                transition={{
                  duration: prefersReduced ? 0 : 0.6,
                  delay: prefersReduced ? 0 : 0.15 + index * 0.08,
                  ease: STUDIO_EASE,
                }}
              />
            </div>
          </>
        )}
      </div>

      {/* Step Content */}
      <div className={!isLast ? 'pb-8 lg:pb-0' : ''}>
        <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold tracking-[-0.015em] text-[#F7F6F3]">
          {step.title}
        </h3>
        <p className="mt-2 text-[15px] leading-[1.65] text-[#BDB6C7] max-w-md">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
