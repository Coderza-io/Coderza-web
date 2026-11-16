import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../data/studioData';
import { STUDIO_EASE } from './MotionPrimitives';

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const prefersReduced = useReducedMotion();

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="divide-y divide-white/10 border-t border-b border-white/10">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="w-full py-4 sm:py-5 min-h-[56px] flex items-center justify-between gap-4 sm:gap-6 text-left group cursor-pointer"
              >
                <span
                  className={`font-[family-name:var(--font-display)] text-[16px] sm:text-lg font-semibold leading-snug tracking-[-0.01em] transition-colors duration-200 ${
                    isOpen
                      ? 'text-[#C9F466]'
                      : 'text-[#F7F6F3] group-hover:text-[#C9F466]'
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 transition-colors duration-200 ${
                    isOpen
                      ? 'border-[#C9F466]/60 bg-[#241A2E] text-[#C9F466]'
                      : 'border-white/12 text-[#BDB6C7] group-hover:border-[#C9F466]/40 group-hover:text-[#F7F6F3]'
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={prefersReduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: prefersReduced ? 0.12 : 0.24, ease: STUDIO_EASE }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-[14.5px] sm:text-[15.5px] leading-[1.68] text-[#BDB6C7] max-w-2xl pr-6 sm:pr-10">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
