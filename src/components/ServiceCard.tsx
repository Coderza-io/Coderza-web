import React from 'react';
import { ArrowRight, Globe, Layers, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../data/studioData';
import { useRouter, withBasePrefix } from '../context/RouterContext';
import { InteractiveCard } from './MotionPrimitives';

interface ServiceCardProps {
  service: ServiceItem;
  layout?: 'editorial' | 'grid';
}

export function ServiceCard({ service, layout = 'editorial' }: ServiceCardProps) {
  const { navigate } = useRouter();

  const Icon =
    service.id === 'business-websites'
      ? Globe
      : service.id === 'custom-web-applications'
        ? Layers
        : ShieldCheck;

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/services#${service.id}`);
  };

  if (layout === 'editorial') {
    return (
      <InteractiveCard>
        <article className="group rounded-2xl bg-[#241A2E]/90 border border-[#30203D] hover:border-[#C9F466]/55 p-5 sm:p-7 transition-colors duration-200">
          {/* Header Row: Prominent Service Number + Icon + Desktop Link */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-[#C9F466] tabular-nums tracking-wider">
                {service.number}
              </span>
              <span className="h-3.5 w-px bg-white/15" aria-hidden="true" />
              <div className="w-9 h-9 rounded-lg bg-[#30203D]/70 border border-white/10 flex items-center justify-center text-[#F7F6F3] group-hover:text-[#C9F466] group-hover:border-[#C9F466]/35 transition-all duration-200">
                <Icon
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </div>

            <a
              href={withBasePrefix(`/services#${service.id}`)}
              onClick={handleNavigate}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-[family-name:var(--font-display)] font-semibold text-[#F7F6F3] group-hover:text-[#C9F466] transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              <span>Learn More</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Content Hierarchy */}
          <div className="mt-4">
            <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[#F7F6F3]">
              {service.title}
            </h3>

            <p className="mt-2.5 text-[15px] leading-[1.65] text-[#BDB6C7] max-w-xl">
              {service.summary}
            </p>

            {/* Clean two-column capability list on mobile, compact inline divider on larger screens */}
            <ul className="mt-5 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[13px] text-[#BDB6C7]/90">
              {service.capabilities.map((cap) => (
                <li key={cap} className="flex items-baseline gap-2">
                  <span className="text-[#C9F466]/85 text-xs" aria-hidden="true">
                    —
                  </span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Touch-Friendly Footer Action */}
          <div className="sm:hidden mt-5 pt-3 border-t border-white/10">
            <a
              href={withBasePrefix(`/services#${service.id}`)}
              onClick={handleNavigate}
              className="flex items-center justify-between min-h-[44px] text-sm font-[family-name:var(--font-display)] font-semibold text-[#F7F6F3] active:text-[#C9F466] transition-colors"
            >
              <span>Explore {service.title}</span>
              <ArrowRight className="w-4 h-4 text-[#C9F466]" aria-hidden="true" />
            </a>
          </div>
        </article>
      </InteractiveCard>
    );
  }

  return (
    <InteractiveCard className="h-full">
      <article className="group h-full rounded-2xl bg-[#241A2E] border border-[#30203D] hover:border-[#C9F466]/55 p-7 sm:p-8 flex flex-col justify-between transition-colors duration-200">
        <div>
          <div className="flex items-center justify-between mb-8">
            <span className="font-[family-name:var(--font-mono)] text-xs font-medium text-[#C9F466] tabular-nums">
              {service.number}
            </span>
            <div className="w-10 h-10 rounded-xl bg-[#30203D]/70 border border-white/10 flex items-center justify-center text-[#F7F6F3] group-hover:text-[#C9F466] transition-colors duration-200">
              <Icon
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
          </div>

          <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[#F7F6F3]">
            {service.title}
          </h3>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#BDB6C7]">
            {service.summary}
          </p>

          <ul className="mt-6 pt-5 border-t border-white/10 space-y-2 text-sm text-[#BDB6C7]">
            {service.capabilities.map((cap) => (
              <li key={cap} className="flex items-baseline gap-2.5">
                <span className="text-[#C9F466] text-xs" aria-hidden="true">
                  —
                </span>
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-2">
          <a
            href={withBasePrefix(`/services#${service.id}`)}
            onClick={handleNavigate}
            className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-display)] font-semibold text-[#F7F6F3] group-hover:text-[#C9F466] transition-colors duration-200"
          >
            <span>Learn More</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </article>
    </InteractiveCard>
  );
}
