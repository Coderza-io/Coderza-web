import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/Button';
import { GeometricArtwork } from '../components/GeometricArtwork';
import { TechStackStrip } from '../components/TechStackStrip';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { ProcessStep } from '../components/ProcessStep';
import { FAQAccordion } from '../components/FAQAccordion';
import { ContactCTA } from '../components/ContactCTA';
import {
  MaskedLine,
  Reveal,
  STUDIO_EASE,
  STUDIO_VIEWPORT,
} from '../components/MotionPrimitives';
import { FAQS, PROCESS_STEPS, SERVICES } from '../data/studioData';
import { useRouter, withBasePrefix } from '../context/RouterContext';

export function HomePage() {
  const { navigate } = useRouter();
  const prefersReduced = useReducedMotion();

  return (
    <>
      {/* Section 01 — Editorial Two-Column Hero (Full Initial Viewport Display) */}
      <section className="relative overflow-x-clip bg-[#17101F] min-h-[calc(100svh-68px)] sm:min-h-[calc(100svh-72px)] flex items-center py-8 sm:py-12 lg:py-14">
        {/* Step 1: Masked architectural grid fading gracefully toward viewport edges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: prefersReduced ? 0.15 : 0.45, ease: STUDIO_EASE }}
          className="pointer-events-none absolute inset-0 bg-coderza-hero-grid"
          aria-hidden="true"
        />

        {/* Controlled radial purple depth focused behind the right-hand geometric mark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: prefersReduced ? 0.15 : 0.65, delay: 0.05, ease: STUDIO_EASE }}
          className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[62%]"
          style={{
            background:
              'radial-gradient(circle at 68% 48%, rgba(64, 38, 92, 0.42) 0%, rgba(48, 32, 61, 0.2) 40%, rgba(23, 16, 31, 0) 72%)',
          }}
          aria-hidden="true"
        />

        <div className="relative w-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)] gap-7 sm:gap-10 lg:gap-12 xl:gap-14 items-center">
            {/* Left Column (~55%): Editorial Typography & Conversion */}
            <div>
              <motion.p
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 6 }}
                animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: prefersReduced ? 0.15 : 0.38, delay: 0.06, ease: STUDIO_EASE }}
                className="font-[family-name:var(--font-mono)] text-[11px] sm:text-xs font-medium tracking-[0.14em] uppercase text-[#BDB6C7]"
              >
                Independent Digital Studio · Sri Lanka
              </motion.p>

              {/* Step 2: Masked line-by-line headline reveal (fluid up to 92px on large desktops) */}
              <h1 className="mt-4 sm:mt-5 font-[family-name:var(--font-display)] text-[clamp(2.85rem,6.1vw,5.75rem)] font-extrabold tracking-[-0.038em] leading-[0.98] text-[#F7F6F3]">
                <MaskedLine delay={0.1} duration={0.58}>
                  Ideas into
                </MaskedLine>
                <MaskedLine delay={0.2} duration={0.58}>
                  <span className="text-[#C9F466]">impact.</span>
                </MaskedLine>
              </h1>

              {/* Step 3: Supporting copy & CTAs */}
              <motion.p
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: prefersReduced ? 0.15 : 0.45, delay: 0.3, ease: STUDIO_EASE }}
                className="mt-5 sm:mt-6 text-[15.5px] sm:text-[17px] lg:text-[18px] leading-[1.68] text-[#BDB6C7] max-w-[52ch]"
              >
                We build modern websites and practical software solutions that help businesses establish their presence, simplify their work, and connect with customers.
              </motion.p>

              <motion.div
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: prefersReduced ? 0.15 : 0.45, delay: 0.38, ease: STUDIO_EASE }}
                className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5"
              >
                <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                  <span>Start a Project</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Button>
                <Button href="/services" variant="secondary" size="lg" className="w-full sm:w-auto">
                  <span>Explore Services</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Button>
              </motion.div>

              {/* Discreet unboxed service line */}
              <motion.div
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: prefersReduced ? 0.15 : 0.45, delay: 0.46, ease: STUDIO_EASE }}
                className="mt-6 sm:mt-7 pt-4 border-t border-white/[0.08] max-w-[52ch]"
              >
                <p className="font-[family-name:var(--font-mono)] text-[11px] sm:text-[11.5px] tracking-[0.06em] text-[#BDB6C7]/80 leading-relaxed">
                  <span>Business Websites</span>
                  <span className="mx-2 text-[#C9F466]" aria-hidden="true">·</span>
                  <span>Web Applications</span>
                  <span className="mx-2 text-[#C9F466]" aria-hidden="true">·</span>
                  <span>Website Support</span>
                </p>
              </motion.div>
            </div>

            {/* Right Column (~45%): Signature Geometric Brand Artwork */}
            <div className="min-w-0">
              <GeometricArtwork />
            </div>
          </div>
        </div>
      </section>

      {/* Transition Band — Floating Tech & Cloud Icon Strip */}
      <TechStackStrip />

      {/* Section 02 — Studio Introduction (Solid Surface, No Grid) */}
      <section className="bg-[#1C1427] border-t border-white/10 py-16 sm:py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                index="01"
                label="Introduction"
                headline="Technology should work for your business."
              />
            </div>

            <div className="lg:col-span-7 lg:pt-7">
              <Reveal delay={0.05} y={22} duration={0.56}>
                <p className="text-[16px] sm:text-lg lg:text-[20px] leading-[1.68] text-[#F7F6F3]/90 max-w-2xl">
                  We focus on building digital products that are useful, considered, and designed around real business needs. From an initial idea to a working solution, our approach brings design and development together.
                </p>
              </Reveal>

              <div className="mt-8 sm:mt-10">
                <motion.div
                  initial={prefersReduced ? { scaleX: 1 } : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={STUDIO_VIEWPORT}
                  transition={{ duration: prefersReduced ? 0 : 0.65, ease: STUDIO_EASE }}
                  className="h-px w-full bg-white/15 origin-left"
                  aria-hidden="true"
                />
                <Reveal delay={0.08} y={16} duration={0.5}>
                  <div className="pt-5 grid grid-cols-3 gap-4 sm:gap-6">
                    {[
                      { code: 'A', label: 'Design', note: 'Structure & UI' },
                      { code: 'B', label: 'Development', note: 'Clean engineering' },
                      { code: 'C', label: 'Delivery', note: 'Launch & handover' },
                    ].map((pillar) => (
                      <div key={pillar.label} className="space-y-1">
                        <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[#C9F466]">
                          {pillar.label}
                        </p>
                        <p className="text-xs sm:text-[13px] text-[#BDB6C7]">
                          {pillar.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 — Services (Asymmetrical Split + Individual Card Scroll Reveals) */}
      <section className="bg-[#17101F] border-t border-white/10 py-16 sm:py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionHeading
                index="02"
                label="What We Do"
                headline="Built around what your business needs."
                description="Focused capabilities designed for clarity, performance, and reliable delivery—without bloated packages."
              />
              <Reveal delay={0.08} y={16} duration={0.5}>
                <div className="mt-6 sm:mt-8">
                  <a
                    href={withBasePrefix('/services')}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/services');
                    }}
                    className="group inline-flex items-center gap-2 py-1.5 text-sm font-[family-name:var(--font-display)] font-semibold text-[#F7F6F3] hover:text-[#C9F466] transition-colors whitespace-nowrap"
                  >
                    <span>View all service details</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {SERVICES.map((service, idx) => (
                <Reveal key={service.id} delay={idx * 0.06} y={24} duration={0.55}>
                  <ServiceCard service={service} layout="editorial" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 04 — Our Process (Connected Vertical Timeline on Mobile, Horizontal on Desktop) */}
      <section className="bg-[#1C1427] border-t border-white/10 py-16 sm:py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionHeading
            index="03"
            label="How We Work"
            headline="From the first conversation to the final detail."
            className="mb-10 sm:mb-14 lg:mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={idx}
                isLast={idx === PROCESS_STEPS.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 05 — About Coderza (Light Sage Contrast Moment) */}
      <section className="relative overflow-hidden bg-[#E7EBE3] bg-coderza-grid-light text-[#151817] py-16 sm:py-24 lg:py-32">
        {/* Cropped lime concentric target motif visible across mobile & desktop without overlapping copy */}
        <motion.svg
          viewBox="0 0 360 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
          whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          viewport={STUDIO_VIEWPORT}
          transition={{ duration: prefersReduced ? 0 : 0.75, ease: STUDIO_EASE }}
          className="pointer-events-none absolute -right-14 -bottom-14 w-36 h-36 sm:w-56 sm:h-56 md:w-[360px] md:h-[360px] md:-right-24 md:-bottom-24 opacity-90"
        >
          <circle cx="200" cy="200" r="180" fill="#C9F466" />
          <circle cx="200" cy="200" r="130" stroke="#151817" strokeOpacity="0.32" strokeWidth="1" />
          <circle cx="200" cy="200" r="82" stroke="#151817" strokeOpacity="0.32" strokeWidth="1" />
          <line x1="90" y1="200" x2="310" y2="200" stroke="#151817" strokeOpacity="0.28" strokeWidth="1" />
          <line x1="200" y1="90" x2="200" y2="310" stroke="#151817" strokeOpacity="0.28" strokeWidth="1" />
        </motion.svg>

        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-2xl pb-6 sm:pb-0">
            <SectionHeading
              index="04"
              label="About Coderza"
              headline="Independent by nature. Thoughtful by design."
              tone="light"
            />
            <Reveal delay={0.08} y={20} duration={0.56}>
              <p className="mt-5 sm:mt-6 text-[15.5px] sm:text-lg leading-[1.7] text-[#151817]/80">
                Coderza is an independent digital studio focused on turning business ideas into useful digital experiences. We combine modern development tools with a practical approach to design, usability, and functionality.
              </p>
            </Reveal>
            <Reveal delay={0.12} y={16} duration={0.52}>
              <div className="mt-8 sm:mt-9">
                <Button href="/about" variant="outline-light" size="lg">
                  <span>About Coderza</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 06 — Frequently Asked Questions */}
      <section className="bg-[#17101F] py-16 sm:py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                index="05"
                label="FAQ"
                headline="Practical answers before we start."
                description="Clear expectations around project types, timelines, quotations, and working together."
              />
            </div>

            <Reveal delay={0.06} y={20} duration={0.56} className="lg:col-span-7">
              <FAQAccordion items={FAQS} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 07 — Signature Final Call to Action */}
      <ContactCTA />
    </>
  );
}
