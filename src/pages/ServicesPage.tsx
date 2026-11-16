import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../data/studioData';
import { Button } from '../components/Button';
import { ContactCTA } from '../components/ContactCTA';

export function ServicesPage() {
  return (
    <>
      {/* Services Header */}
      <section className="bg-[#17101F] bg-coderza-grid pt-16 pb-20 sm:pt-20 sm:pb-24 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <p className="font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.14em] uppercase text-[#BDB6C7]">
            Services · Coderza Studio
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.08] text-[#F7F6F3] max-w-3xl">
            Focused digital services built for real business outcomes.
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-[1.65] text-[#BDB6C7] max-w-2xl">
            Every engagement is scoped clearly around what your business actually needs—with transparent deliverables and quotation-based pricing rather than inflated packages.
          </p>
        </div>
      </section>

      {/* Alternating Service Detail Sections */}
      {SERVICES.map((service, index) => {
        const isLight = index % 2 === 1;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-20 py-20 sm:py-24 lg:py-28 border-b ${
              isLight
                ? 'bg-[#E7EBE3] text-[#151817] border-[#151817]/10'
                : 'bg-[#17101F] text-[#F7F6F3] border-white/10'
            }`}
          >
            <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
                {/* Left Overview */}
                <div className="lg:col-span-5">
                  <p
                    className={`font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.12em] uppercase ${
                      isLight ? 'text-[#151817]/75' : 'text-[#C9F466]'
                    }`}
                  >
                    Service {service.number}
                  </p>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-[-0.025em] leading-[1.15]">
                    {service.title}
                  </h2>
                  <p
                    className={`mt-5 text-base leading-[1.7] ${
                      isLight ? 'text-[#151817]/80' : 'text-[#BDB6C7]'
                    }`}
                  >
                    {service.summary}
                  </p>

                  <div
                    className={`mt-8 p-6 rounded-2xl border ${
                      isLight
                        ? 'bg-white/60 border-[#151817]/12'
                        : 'bg-[#241A2E] border-[#30203D]'
                    }`}
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.06em]">
                      The problem it solves
                    </h3>
                    <p
                      className={`mt-2.5 text-sm leading-[1.65] ${
                        isLight ? 'text-[#151817]/80' : 'text-[#BDB6C7]'
                      }`}
                    >
                      {service.problemSolved}
                    </p>
                  </div>

                  <div className="mt-8">
                    <Button
                      href="/contact"
                      variant={isLight ? 'outline-light' : 'primary'}
                      size="md"
                    >
                      <span>Request a Quotation</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>

                {/* Right Deliverables, Examples, Engagement */}
                <div className="lg:col-span-7 space-y-8">
                  <div
                    className={`p-7 sm:p-8 rounded-2xl border ${
                      isLight
                        ? 'bg-white/70 border-[#151817]/12'
                        : 'bg-[#241A2E] border-[#30203D]'
                    }`}
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.01em]">
                      What can be delivered
                    </h3>
                    <ul className="mt-5 space-y-3.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed">
                          <Check
                            className={`w-4 h-4 mt-1 shrink-0 ${
                              isLight ? 'text-[#151817]' : 'text-[#C9F466]'
                            }`}
                            aria-hidden="true"
                          />
                          <span className={isLight ? 'text-[#151817]/85' : 'text-[#BDB6C7]'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div
                      className={`p-6 sm:p-7 rounded-2xl border ${
                        isLight
                          ? 'bg-white/70 border-[#151817]/12'
                          : 'bg-[#241A2E] border-[#30203D]'
                      }`}
                    >
                      <h3 className="font-[family-name:var(--font-display)] text-base font-bold">
                        Common project examples
                      </h3>
                      <ul
                        className={`mt-4 space-y-2.5 text-sm leading-relaxed ${
                          isLight ? 'text-[#151817]/80' : 'text-[#BDB6C7]'
                        }`}
                      >
                        {service.examples.map((ex) => (
                          <li key={ex} className="flex items-baseline gap-2">
                            <span
                              className={isLight ? 'text-[#151817]' : 'text-[#C9F466]'}
                              aria-hidden="true"
                            >
                              ·
                            </span>
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`p-6 sm:p-7 rounded-2xl border ${
                        isLight
                          ? 'bg-white/70 border-[#151817]/12'
                          : 'bg-[#241A2E] border-[#30203D]'
                      }`}
                    >
                      <h3 className="font-[family-name:var(--font-display)] text-base font-bold">
                        How the engagement begins
                      </h3>
                      <p
                        className={`mt-4 text-sm leading-relaxed ${
                          isLight ? 'text-[#151817]/80' : 'text-[#BDB6C7]'
                        }`}
                      >
                        {service.howItStarts}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Transparent Quotation Note + CTA */}
      <ContactCTA
        headline="Need a custom quotation?"
        accentLine="Let’s scope it clearly."
        subcopy="Every website or web application has different requirements. Tell us what you need and we will prepare a clear, itemized quotation."
      />
    </>
  );
}
