import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from './Button';
import { STUDIO_CONTACT } from '../data/studioData';
import { Reveal, STUDIO_EASE, STUDIO_VIEWPORT } from './MotionPrimitives';

interface ContactCTAProps {
  headline?: string;
  accentLine?: string;
  subcopy?: string;
}

export function ContactCTA({
  headline = 'Have something in mind?',
  accentLine = 'Let’s make it happen.',
  subcopy = 'Tell us a little about your project. We’d be happy to explore what we can build together.',
}: ContactCTAProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#17101F] border-t border-white/10 py-16 sm:py-24 lg:py-32">
      {/* Restrained geometric atmosphere */}
      <div
        className="pointer-events-none absolute -right-24 -bottom-24 w-[420px] h-[420px] rounded-full opacity-45"
        style={{
          background:
            'radial-gradient(circle, rgba(48, 32, 61, 0.9) 0%, rgba(23, 16, 31, 0) 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="rounded-2xl bg-[#241A2E]/95 border border-[#30203D] p-7 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <Reveal y={22} duration={0.58}>
                <h2 className="font-[family-name:var(--font-display)] text-[32px] sm:text-[48px] lg:text-[62px] font-extrabold tracking-[-0.03em] leading-[1.08] text-[#F7F6F3]">
                  <span className="block">{headline}</span>
                  <span className="relative inline-block mt-1 text-[#C9F466]">
                    {accentLine}
                    <motion.span
                      aria-hidden="true"
                      initial={prefersReduced ? { scaleX: 1 } : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={STUDIO_VIEWPORT}
                      transition={{
                        duration: prefersReduced ? 0 : 0.7,
                        delay: prefersReduced ? 0 : 0.16,
                        ease: STUDIO_EASE,
                      }}
                      className="block h-[3px] w-full bg-[#C9F466]/75 origin-left mt-2 rounded-full"
                    />
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.08} y={16} duration={0.52}>
                <p className="mt-6 text-[15px] sm:text-lg leading-[1.65] text-[#BDB6C7] max-w-xl">
                  {subcopy}
                </p>
              </Reveal>
            </div>

            <Reveal
              delay={0.12}
              y={14}
              duration={0.52}
              className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-4 shrink-0"
            >
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                <span>Let’s Talk</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Button>
              <a
                href={`mailto:${STUDIO_CONTACT.email}`}
                className="inline-flex items-center gap-2 text-sm text-[#BDB6C7] hover:text-[#C9F466] transition-colors py-1.5"
              >
                <Mail className="w-4 h-4 text-[#C9F466]" aria-hidden="true" />
                <span>{STUDIO_CONTACT.email}</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
