import React from 'react';
import { ArrowRight } from 'lucide-react';
import { STUDIO_VALUES } from '../data/studioData';
import { Button } from '../components/Button';
import { ContactCTA } from '../components/ContactCTA';

export function AboutPage() {
  return (
    <>
      <section className="bg-[#17101F] bg-coderza-grid pt-16 pb-20 sm:pt-20 sm:pb-24 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <p className="font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.14em] uppercase text-[#BDB6C7]">
            About · Coderza Studio
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.08] text-[#F7F6F3] max-w-3xl">
            Small studio. Focused thinking.
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-[1.7] text-[#BDB6C7] max-w-2xl">
            Coderza is an independent, founder-led software development and digital studio based in Sri Lanka. We build practical websites, custom web applications, and reliable post-launch support for businesses that value clarity over noise.
          </p>
        </div>
      </section>

      {/* Why Coderza Exists & Approach */}
      <section className="bg-[#17101F] py-20 sm:py-28 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-[-0.025em] leading-[1.15] text-[#F7F6F3]">
              Built for businesses that want direct, dependable work.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base leading-[1.75] text-[#BDB6C7]">
            <p>
              Many small and growing businesses face an awkward choice when building online: oversized agencies with steep retainers or rushed templates that break down as soon as real requirements appear.
            </p>
            <p>
              Coderza exists to offer a calmer alternative—direct collaboration with the person designing and engineering your project. Every site or web application is scoped around concrete business goals, structured clearly, and delivered cleanly without unnecessary complexity.
            </p>
            <p>
              Because the studio stays intentionally lean, communication remains straightforward from the initial discovery conversation through launch and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Values on Light Sage Surface */}
      <section className="bg-[#E7EBE3] text-[#151817] py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-2xl mb-14">
            <p className="font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.12em] uppercase text-[#151817]/75 mb-3">
              How We Operate
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-[-0.025em] leading-[1.15]">
              Three principles behind every deliverable.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STUDIO_VALUES.map((value, idx) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white/70 border border-[#151817]/12 p-7 sm:p-8"
              >
                <span className="font-[family-name:var(--font-mono)] text-xs font-semibold text-[#151817]/65 tabular-nums">
                  0{idx + 1}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.02em]">
                  {value.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[#151817]/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/services" variant="outline-light">
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
