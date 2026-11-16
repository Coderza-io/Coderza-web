import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { STUDIO_EASE } from './MotionPrimitives';

interface TechIconItem {
  name: string;
  renderIcon: () => React.ReactNode;
}

const TECH_ICONS: TechIconItem[] = [
  {
    name: 'React',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
        <circle cx="12" cy="12" r="2.05" fill="#C9F466" fillOpacity="0.88" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="3.9"
          stroke="currentColor"
          strokeWidth="1.35"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="3.9"
          stroke="currentColor"
          strokeWidth="1.35"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="3.9"
          stroke="currentColor"
          strokeWidth="1.35"
          transform="rotate(120 12 12)"
        />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
        <circle cx="12" cy="12" r="9.75" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M8.6 16.2V8.2L16.8 18.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.4 8.2V13.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
        <path
          d="M3.5 7.5H12.5M8 7.5V17.5"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M20.2 9.4C19.5 8.2 18.2 7.5 16.5 7.5C14.3 7.5 12.9 8.7 12.9 10.2C12.9 11.8 14.3 12.4 16.7 12.9C19.2 13.4 20.6 14.1 20.6 15.8C20.6 17.5 19 18.7 16.6 18.7C14.6 18.7 13.2 17.9 12.4 16.7"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
        <path
          d="M12 5.2C8.8 5.2 6.8 6.8 6 10C7.2 8.4 8.6 7.8 10.2 8.2C11.1 8.4 11.75 9.05 12.48 9.8C13.66 11 15.02 12.4 18 12.4C21.2 12.4 23.2 10.8 24 7.6C22.8 9.2 21.4 9.8 19.8 9.4C18.9 9.2 18.25 8.55 17.52 7.8C16.34 6.6 14.98 5.2 12 5.2ZM6 12.4C2.8 12.4 0.8 14 0 17.2C1.2 15.6 2.6 15 4.2 15.4C5.1 15.6 5.75 16.25 6.48 17C7.66 18.2 9.02 19.6 12 19.6C15.2 19.6 17.2 18 18 14.8C16.8 16.4 15.4 17 13.8 16.6C12.9 16.4 12.25 15.75 11.52 15C10.34 13.8 8.98 12.4 6 12.4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
        <path
          d="M12 2.4L20.3 7.2V16.8L12 21.6L3.7 16.8V7.2L12 2.4Z"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinejoin="round"
        />
        <path
          d="M12 7.2L16.2 9.6V14.4L12 16.8L7.8 14.4V9.6L12 7.2Z"
          stroke="#C9F466"
          strokeOpacity="0.72"
          strokeWidth="1.35"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: 'Java',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
        <path
          d="M6.5 11.2H15.5V14.6C15.5 16.9 13.6 18.8 11.3 18.8H10.7C8.4 18.8 6.5 16.9 6.5 14.6V11.2Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 12.2H17.1C18.2 12.2 19 13 19 14C19 15 18.2 15.8 17.1 15.8H15.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M5.5 20.8H16.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M9.2 8.8C9.2 7.6 10.4 7.2 10.4 5.9C10.4 4.9 9.6 4.2 9.6 3.4"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
        <path
          d="M12.8 8.8C12.8 7.6 14 7.2 14 5.9C14 4.9 13.2 4.2 13.2 3.4"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Spring Boot',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
        <path
          d="M12 2.6L20.1 7.3V16.7L12 21.4L3.9 16.7V7.3L12 2.6Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M12 7.5V11.8"
          stroke="#C9F466"
          strokeOpacity="0.88"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M8.8 9.2C7.4 10.4 7.1 12.6 8.2 14.3C9.3 16 11.6 16.7 13.6 15.9C15.5 15.1 16.7 13.1 16.3 11C16.1 10.1 15.7 9.5 15.1 9"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
        <path
          d="M16.5 5.4C14.8 4.2 12.6 4.4 12 5.4C11.4 4.4 9.2 4.2 7.5 5.4C5.4 6.9 4.8 9.9 5.6 12.8C6.1 14.7 7.1 15.8 8.3 15.8C8.9 15.8 9.3 15.4 9.5 14.7V17.4C9.5 19.2 10.6 20.4 12 20.4C13.4 20.4 14.3 19.3 14.3 17.8V14.7C14.5 15.4 15 15.8 15.7 15.8C16.9 15.8 17.9 14.7 18.4 12.8C19.2 9.9 18.6 6.9 16.5 5.4Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M12 13.5V18.8C12 19.8 12.9 20.6 14 20.6C15.1 20.6 16 19.8 16 18.7"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
        <circle cx="9.8" cy="9.6" r="0.9" fill="currentColor" />
        <circle cx="14.2" cy="9.6" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
        <path
          d="M12 2.8C12 2.8 17.2 7.4 17.2 13.1C17.2 16.7 14.7 19.2 12.6 20.1L12 21.8L11.4 20.1C9.3 19.2 6.8 16.7 6.8 13.1C6.8 7.4 12 2.8 12 2.8Z"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinejoin="round"
        />
        <path
          d="M12 7.5V20.2"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Docker',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
        <path
          d="M3.2 13.2H18.4C19.6 13.2 20.6 12.4 21.2 11.4C20.2 10.6 19.5 10.6 18.7 11C18.5 9.8 17.6 9 16.9 8.6C16.3 9.7 16.4 11 16.8 11.9H3.2V13.2ZM3.2 13.2C3.2 16.8 6.4 19.4 10.9 19.4C15.8 19.4 19.3 16.6 20.2 12.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="6" y="9.2" width="2.4" height="2.2" stroke="currentColor" strokeWidth="1.2" />
        <rect x="9.4" y="9.2" width="2.4" height="2.2" stroke="currentColor" strokeWidth="1.2" />
        <rect x="12.8" y="9.2" width="2.4" height="2.2" stroke="currentColor" strokeWidth="1.2" />
        <rect x="9.4" y="6.1" width="2.4" height="2.2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2.5C6.75 2.5 2.5 6.75 2.5 12C2.5 16.2 5.22 19.76 9 21.02C9.47 21.11 9.65 20.82 9.65 20.57C9.65 20.34 9.64 19.59 9.64 18.78C7.25 19.22 6.63 18.2 6.44 17.66C6.33 17.39 5.87 16.56 5.47 16.34C5.14 16.16 4.67 15.72 5.46 15.71C6.2 15.7 6.73 16.39 6.91 16.68C7.76 18.11 9.12 17.71 9.68 17.46C9.76 16.85 10.01 16.43 10.28 16.2C8.16 15.96 5.95 15.14 5.95 11.5C5.95 10.46 6.32 9.6 6.93 8.94C6.83 8.7 6.5 7.72 7.03 6.4C7.03 6.4 7.83 6.15 9.65 7.38C10.41 7.17 11.22 7.06 12.03 7.06C12.84 7.06 13.65 7.17 14.41 7.38C16.23 6.14 17.03 6.4 17.03 6.4C17.56 7.72 17.23 8.7 17.13 8.94C17.74 9.6 18.11 10.45 18.11 11.5C18.11 15.15 15.89 15.96 13.77 16.2C14.11 16.49 14.41 17.06 14.41 17.94C14.41 19.2 14.4 20.21 14.4 20.57C14.4 20.82 14.58 21.12 15.05 21.02C18.8 19.76 21.5 16.19 21.5 12C21.5 6.75 17.25 2.5 12 2.5Z"
        />
      </svg>
    ),
  },
  {
    name: 'Microsoft Azure',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
        <path
          d="M13.3 4.2L6.6 19.4H3.1L8.9 7.8L13.3 4.2Z"
          fill="currentColor"
          fillOpacity="0.88"
        />
        <path
          d="M14.1 5.2L10.8 13.4L15.4 18.6L8.2 19.8H20.9L14.1 5.2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export function TechStackStrip() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.section
      aria-label="Core technologies and cloud platforms"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReduced ? 0.15 : 0.6, delay: 0.45, ease: STUDIO_EASE }}
      className="relative bg-[#191222] border-t border-white/[0.08] py-7 sm:py-9 lg:py-10 overflow-hidden"
    >
      {prefersReduced ? (
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <ul className="flex flex-wrap items-center justify-center gap-x-9 gap-y-6 sm:gap-x-12">
            {TECH_ICONS.map((tech) => (
              <li
                key={tech.name}
                title={tech.name}
                className="flex items-center justify-center text-[#BDB6C7]/65 transition-colors duration-200 md:hover:text-[#F7F6F3]"
              >
                <span className="sr-only">{tech.name}</span>
                {tech.renderIcon()}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="max-w-[1320px] mx-auto px-2 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden mask-marquee-edges">
            <div className="flex w-max animate-coderza-marquee">
              {/* Primary accessible icon sequence */}
              <ul className="flex items-center shrink-0 gap-12 sm:gap-16 lg:gap-20 pr-12 sm:pr-16 lg:pr-20">
                {TECH_ICONS.map((tech) => (
                  <li
                    key={tech.name}
                    title={tech.name}
                    className="flex items-center justify-center text-[#BDB6C7]/60 transition-colors duration-200 md:hover:text-[#F7F6F3]"
                  >
                    <span className="sr-only">{tech.name}</span>
                    {tech.renderIcon()}
                  </li>
                ))}
              </ul>

              {/* Seamless clone track hidden from screen readers */}
              <ul
                aria-hidden="true"
                className="flex items-center shrink-0 gap-12 sm:gap-16 lg:gap-20 pr-12 sm:pr-16 lg:pr-20"
              >
                {TECH_ICONS.map((tech) => (
                  <li
                    key={`${tech.name}-clone`}
                    title={tech.name}
                    className="flex items-center justify-center text-[#BDB6C7]/60 transition-colors duration-200 md:hover:text-[#F7F6F3]"
                  >
                    {tech.renderIcon()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}
