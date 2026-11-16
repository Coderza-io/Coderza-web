import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { STUDIO_EASE } from './MotionPrimitives';

type OrbitSlot = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface FloatingLabelItem {
  text: string;
  slot: OrbitSlot;
}

const KEYWORD_STEPS: FloatingLabelItem[][] = [
  [
    { text: 'Web Development', slot: 'top-right' },
    { text: 'UI / UX', slot: 'bottom-left' },
  ],
  [{ text: 'Digital Solutions', slot: 'top-left' }],
  [
    { text: 'Web Applications', slot: 'top-right' },
    { text: 'Website Support', slot: 'bottom-left' },
  ],
  [
    { text: 'UI / UX', slot: 'top-left' },
    { text: 'Web Development', slot: 'bottom-right' },
  ],
  [
    { text: 'Website Support', slot: 'top-right' },
    { text: 'Digital Solutions', slot: 'bottom-left' },
  ],
];

const MOBILE_KEYWORDS = [
  'Web Development',
  'Web Applications',
  'Digital Solutions',
  'UI / UX',
  'Website Support',
];

const SLOT_CONFIG: Record<
  OrbitSlot,
  { positionClass: string; driftOffset: { x: number; y: number } }
> = {
  'top-left': {
    positionClass: 'top-[4.5%] left-[1.5%]',
    driftOffset: { x: -4, y: -6 },
  },
  'top-right': {
    positionClass: 'top-[7%] right-[0.5%]',
    driftOffset: { x: 4, y: -6 },
  },
  'bottom-left': {
    positionClass: 'bottom-[8.5%] left-[0.5%]',
    driftOffset: { x: -4, y: 6 },
  },
  'bottom-right': {
    positionClass: 'bottom-[13%] right-[1.5%]',
    driftOffset: { x: 4, y: 6 },
  },
};

export function GeometricArtwork() {
  const prefersReduced = useReducedMotion();
  const [stepIndex, setStepIndex] = useState(0);
  const [labelsReady, setLabelsReady] = useState(Boolean(prefersReduced));

  useEffect(() => {
    if (prefersReduced) {
      setLabelsReady(true);
      return;
    }

    const startTimeout = window.setTimeout(() => {
      setLabelsReady(true);
    }, 1050);

    const cycleInterval = window.setInterval(() => {
      setStepIndex((prev) => (prev + 1) % KEYWORD_STEPS.length);
    }, 4800);

    return () => {
      window.clearTimeout(startTimeout);
      window.clearInterval(cycleInterval);
    };
  }, [prefersReduced]);

  const activeDesktopLabels = prefersReduced
    ? KEYWORD_STEPS[0]
    : labelsReady
      ? KEYWORD_STEPS[stepIndex]
      : [];

  const activeMobileKeyword = prefersReduced
    ? MOBILE_KEYWORDS[0]
    : MOBILE_KEYWORDS[stepIndex % MOBILE_KEYWORDS.length];

  return (
    <>
      {/* Mobile Architectural Composition: compact wide geometric frame integrated right below Hero CTAs */}
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
        animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: prefersReduced ? 0.18 : 0.55, delay: 0.36, ease: STUDIO_EASE }}
        className="lg:hidden relative w-full h-[132px] sm:h-[156px] rounded-2xl bg-[#241A2E]/85 border border-white/15 overflow-hidden select-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 80% 50%, rgba(72, 44, 102, 0.55) 0%, rgba(23, 16, 31, 0) 70%)',
          }}
        />
        <svg
          viewBox="0 0 360 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="relative w-full h-full"
        >
          {/* Architectural grid */}
          <g stroke="#F7F6F3" strokeOpacity="0.08" strokeWidth="1">
            <line x1="45" y1="0" x2="45" y2="140" />
            <line x1="90" y1="0" x2="90" y2="140" />
            <line x1="135" y1="0" x2="135" y2="140" />
            <line x1="180" y1="0" x2="180" y2="140" />
            <line x1="225" y1="0" x2="225" y2="140" />
            <line x1="270" y1="0" x2="270" y2="140" />
            <line x1="315" y1="0" x2="315" y2="140" />
            <line x1="0" y1="35" x2="360" y2="35" />
            <line x1="0" y1="70" x2="360" y2="70" />
            <line x1="0" y1="105" x2="360" y2="105" />
          </g>

          {/* Concentric orbital arcs */}
          <motion.circle
            cx="276"
            cy="70"
            r="84"
            stroke="#F7F6F3"
            strokeOpacity="0.18"
            strokeWidth="1.1"
            initial={prefersReduced ? { opacity: 0 } : { pathLength: 0, opacity: 0 }}
            animate={prefersReduced ? { opacity: 1 } : { pathLength: 1, opacity: 1 }}
            transition={{ duration: prefersReduced ? 0.18 : 0.75, delay: 0.35, ease: STUDIO_EASE }}
          />
          <motion.circle
            cx="276"
            cy="70"
            r="52"
            stroke="#C9F466"
            strokeOpacity="0.42"
            strokeWidth="1.2"
            initial={prefersReduced ? { opacity: 0 } : { pathLength: 0, opacity: 0 }}
            animate={prefersReduced ? { opacity: 1 } : { pathLength: 1, opacity: 1 }}
            transition={{ duration: prefersReduced ? 0.18 : 0.7, delay: 0.45, ease: STUDIO_EASE }}
          />

          {/* Subtle orbiting lime dots around mobile circular geometry */}
          <g transform="rotate(30 276 70)">
            <motion.g
              animate={prefersReduced ? undefined : { rotate: 360 }}
              transition={
                prefersReduced
                  ? undefined
                  : { duration: 26, repeat: Infinity, ease: 'linear' }
              }
              style={{ transformOrigin: '276px 70px', transformBox: 'view-box' }}
            >
              <circle cx="276" cy="-14" r="2.8" fill="#C9F466" />
            </motion.g>
          </g>
          <g transform="rotate(200 276 70)">
            <motion.g
              animate={prefersReduced ? undefined : { rotate: -360 }}
              transition={
                prefersReduced
                  ? undefined
                  : { duration: 19, repeat: Infinity, ease: 'linear' }
              }
              style={{ transformOrigin: '276px 70px', transformBox: 'view-box' }}
            >
              <circle cx="276" cy="18" r="2.4" fill="#C9F466" fillOpacity="0.88" />
            </motion.g>
          </g>

          {/* Official geometric C lockup */}
          <g transform="translate(26, 32) scale(0.76)">
            <path
              d="M84 12H45C24.5655 12 8 28.5655 8 49V51C8 71.4345 24.5655 88 45 88H84V69.5H46.5C35.7304 69.5 27 60.7696 27 50C27 39.2304 35.7304 30.5 46.5 30.5H84V12Z"
              fill="#F7F6F3"
            />
            <motion.rect
              x="65"
              y="40.5"
              width="19"
              height="19"
              rx="3.8"
              fill="#C9F466"
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: 10 }}
              animate={prefersReduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
              transition={{ duration: prefersReduced ? 0.18 : 0.45, delay: 0.65, ease: STUDIO_EASE }}
            />
          </g>

          <text
            x="116"
            y="65"
            fill="#F7F6F3"
            fillOpacity="0.92"
            fontSize="11"
            fontFamily="JetBrains Mono, monospace"
            letterSpacing="1.6"
          >
            DESIGN · BUILD
          </text>
          <text
            x="116"
            y="84"
            fill="#BDB6C7"
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
            letterSpacing="1.1"
          >
            WEB &amp; APPLICATIONS
          </text>

          <rect x="272" y="66" width="8" height="8" rx="1.5" fill="#C9F466" />
        </svg>

        {/* Discreet mobile floating studio keyword chip */}
        {labelsReady && (
          <div className="pointer-events-none absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMobileKeyword}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -4 }}
                transition={{ duration: prefersReduced ? 0.15 : 0.55, ease: STUDIO_EASE }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#17101F]/85 backdrop-blur-sm border border-white/15 text-[10.5px] font-medium text-[#F7F6F3] whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9F466] shrink-0" />
                <span>{activeMobileKeyword}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </motion.div>

      {/* Desktop Architectural Composition */}
      <div
        className="hidden lg:block relative w-full max-w-[500px] aspect-square ml-auto select-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 480 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full"
        >
          <defs>
            <radialGradient id="coderza-depth-halo" cx="52%" cy="48%" r="50%">
              <stop offset="0%" stopColor="#3C2850" stopOpacity="0.72" />
              <stop offset="55%" stopColor="#241A2E" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#17101F" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="coderza-tile-surface" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D203B" stopOpacity="0.96" />
              <stop offset="100%" stopColor="#1F162A" stopOpacity="0.94" />
            </linearGradient>
          </defs>

          {/* Controlled radial purple depth */}
          <motion.circle
            cx="240"
            cy="240"
            r="232"
            fill="url(#coderza-depth-halo)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.55, delay: 0.05, ease: STUDIO_EASE }}
          />

          {/* Crisp architectural grid lines & corner framing brackets */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.45, delay: 0.12, ease: STUDIO_EASE }}
          >
            <g stroke="#F7F6F3" strokeOpacity="0.085" strokeWidth="1">
              <line x1="40" y1="30" x2="40" y2="450" />
              <line x1="90" y1="30" x2="90" y2="450" />
              <line x1="140" y1="30" x2="140" y2="450" />
              <line x1="190" y1="30" x2="190" y2="450" />
              <line x1="290" y1="30" x2="290" y2="450" />
              <line x1="340" y1="30" x2="340" y2="450" />
              <line x1="390" y1="30" x2="390" y2="450" />
              <line x1="440" y1="30" x2="440" y2="450" />

              <line x1="30" y1="40" x2="450" y2="40" />
              <line x1="30" y1="90" x2="450" y2="90" />
              <line x1="30" y1="140" x2="450" y2="140" />
              <line x1="30" y1="190" x2="450" y2="190" />
              <line x1="30" y1="290" x2="450" y2="290" />
              <line x1="30" y1="340" x2="450" y2="340" />
              <line x1="30" y1="390" x2="450" y2="390" />
              <line x1="30" y1="440" x2="450" y2="440" />
            </g>

            {/* Primary crosshair axes */}
            <g stroke="#F7F6F3" strokeOpacity="0.15" strokeWidth="1">
              <line x1="240" y1="24" x2="240" y2="456" />
              <line x1="24" y1="240" x2="456" y2="240" />
            </g>

            {/* Corner architectural tick brackets */}
            <g stroke="#BDB6C7" strokeOpacity="0.34" strokeWidth="1.2">
              <path d="M40 58V40H58" />
              <path d="M422 40H440V58" />
              <path d="M40 422V440H58" />
            </g>
          </motion.g>

          {/* Cropped background architectural block (top-left balance) */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.6, delay: 0.22, ease: STUDIO_EASE }}
          >
            <rect
              x="40"
              y="40"
              width="124"
              height="124"
              rx="22"
              fill="#241A2E"
              fillOpacity="0.62"
              stroke="#BDB6C7"
              strokeOpacity="0.16"
              strokeWidth="1"
            />
            <path
              d="M40 164 A124 124 0 0 1 164 40"
              stroke="#BDB6C7"
              strokeOpacity="0.24"
              strokeWidth="1"
            />
          </motion.g>

          {/* Cropped quarter-circle geometric surface & arcs (bottom-right signature) */}
          <motion.path
            d="M440 296 A144 144 0 0 0 296 440 L440 440 Z"
            fill="#30203D"
            fillOpacity="0.72"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.6, delay: 0.28, ease: STUDIO_EASE }}
          />
          <motion.path
            d="M440 296 A144 144 0 0 0 296 440"
            stroke="#F7F6F3"
            strokeOpacity="0.28"
            strokeWidth="1.2"
            initial={prefersReduced ? { opacity: 0 } : { pathLength: 0, opacity: 0 }}
            animate={prefersReduced ? { opacity: 1 } : { pathLength: 1, opacity: 1 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.75, delay: 0.3, ease: STUDIO_EASE }}
          />
          <motion.path
            d="M440 344 A96 96 0 0 0 344 440"
            stroke="#C9F466"
            strokeOpacity="0.58"
            strokeWidth="1.25"
            initial={prefersReduced ? { opacity: 0 } : { pathLength: 0, opacity: 0 }}
            animate={prefersReduced ? { opacity: 1 } : { pathLength: 1, opacity: 1 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.7, delay: 0.42, ease: STUDIO_EASE }}
          />

          {/* Circular orbital geometry via SVG path drawing */}
          <motion.circle
            cx="240"
            cy="240"
            r="210"
            stroke="#F7F6F3"
            strokeOpacity="0.18"
            strokeWidth="1.2"
            initial={prefersReduced ? { opacity: 0 } : { pathLength: 0, opacity: 0 }}
            animate={prefersReduced ? { opacity: 1 } : { pathLength: 1, opacity: 1 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.85, delay: 0.22, ease: STUDIO_EASE }}
          />

          <motion.circle
            cx="240"
            cy="240"
            r="168"
            stroke="#BDB6C7"
            strokeOpacity="0.3"
            strokeWidth="1.15"
            strokeDasharray="5 7"
            initial={{ opacity: 0, rotate: prefersReduced ? 0 : -14 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.9, delay: 0.3, ease: STUDIO_EASE }}
            style={{ transformOrigin: '240px 240px' }}
          />

          <motion.circle
            cx="240"
            cy="240"
            r="130"
            stroke="#C9F466"
            strokeOpacity="0.44"
            strokeWidth="1.25"
            initial={prefersReduced ? { opacity: 0 } : { pathLength: 0, opacity: 0 }}
            animate={prefersReduced ? { opacity: 1 } : { pathLength: 1, opacity: 1 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.75, delay: 0.38, ease: STUDIO_EASE }}
          />

          {/* Subtle continuous orbiting lime dots (28s CW outer pair, 21s CCW middle ring) */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.6, delay: 0.9, ease: STUDIO_EASE }}
          >
            {/* Outer orbital dot 1 (r = 210, clockwise 28s) */}
            <g transform="rotate(36 240 240)">
              <motion.g
                animate={prefersReduced ? undefined : { rotate: 360 }}
                transition={
                  prefersReduced
                    ? undefined
                    : { duration: 28, repeat: Infinity, ease: 'linear' }
                }
                style={{ transformOrigin: '240px 240px', transformBox: 'view-box' }}
              >
                <circle
                  cx="240"
                  cy="30"
                  r="7.5"
                  stroke="#C9F466"
                  strokeOpacity="0.28"
                  strokeWidth="1"
                />
                <circle cx="240" cy="30" r="3.4" fill="#C9F466" />
              </motion.g>
            </g>

            {/* Outer orbital dot 2 (r = 210 opposite pole, clockwise 28s) */}
            <g transform="rotate(216 240 240)">
              <motion.g
                animate={prefersReduced ? undefined : { rotate: 360 }}
                transition={
                  prefersReduced
                    ? undefined
                    : { duration: 28, repeat: Infinity, ease: 'linear' }
                }
                style={{ transformOrigin: '240px 240px', transformBox: 'view-box' }}
              >
                <circle cx="240" cy="30" r="2.7" fill="#C9F466" fillOpacity="0.82" />
              </motion.g>
            </g>

            {/* Middle orbital dot 3 (r = 168, counter-clockwise 21s) */}
            <g transform="rotate(142 240 240)">
              <motion.g
                animate={prefersReduced ? undefined : { rotate: -360 }}
                transition={
                  prefersReduced
                    ? undefined
                    : { duration: 21, repeat: Infinity, ease: 'linear' }
                }
                style={{ transformOrigin: '240px 240px', transformBox: 'view-box' }}
              >
                <circle
                  cx="240"
                  cy="72"
                  r="6"
                  stroke="#C9F466"
                  strokeOpacity="0.24"
                  strokeWidth="1"
                />
                <circle cx="240" cy="72" r="3" fill="#C9F466" />
              </motion.g>
            </g>
          </motion.g>

          {/* Central C mark settles cleanly into place and remains completely stable */}
          <g transform="translate(128, 128)">
            <motion.g
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: prefersReduced ? 0.15 : 0.58, delay: 0.48, ease: STUDIO_EASE }}
              style={{ transformOrigin: '112px 112px' }}
            >
              {/* Framing architectural surface */}
              <rect
                x="0"
                y="0"
                width="224"
                height="224"
                rx="34"
                fill="url(#coderza-tile-surface)"
                stroke="#F7F6F3"
                strokeOpacity="0.24"
                strokeWidth="1.25"
              />
              {/* Subtle inner precision hairline */}
              <rect
                x="8"
                y="8"
                width="208"
                height="208"
                rx="27"
                stroke="#C9F466"
                strokeOpacity="0.14"
                strokeWidth="1"
              />

              {/* Official Coderza C mark scaled accurately inside centered 152x152 zone */}
              <g transform="translate(36, 36) scale(1.52)">
                <path
                  d="M84 12H45C24.5655 12 8 28.5655 8 49V51C8 71.4345 24.5655 88 45 88H84V69.5H46.5C35.7304 69.5 27 60.7696 27 50C27 39.2304 35.7304 30.5 46.5 30.5H84V12Z"
                  fill="#F7F6F3"
                />
                {/* Lime square completes short, crisp lock-in */}
                <motion.rect
                  x="65"
                  y="40.5"
                  width="19"
                  height="19"
                  rx="3.8"
                  fill="#C9F466"
                  initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: 11 }}
                  animate={prefersReduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  transition={{ duration: prefersReduced ? 0.15 : 0.44, delay: 0.78, ease: STUDIO_EASE }}
                />
              </g>
            </motion.g>
          </g>

          {/* Precision intersection anchors on architectural grid */}
          <motion.rect
            x="85.5"
            y="135.5"
            width="9"
            height="9"
            rx="2"
            fill="#C9F466"
            initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.35, delay: 0.86, ease: STUDIO_EASE }}
            style={{ transformOrigin: '90px 140px' }}
          />
          <motion.rect
            x="385.5"
            y="185.5"
            width="9"
            height="9"
            rx="2"
            fill="#C9F466"
            fillOpacity="0.85"
            initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.35, delay: 0.92, ease: STUDIO_EASE }}
            style={{ transformOrigin: '390px 190px' }}
          />
          <motion.rect
            x="386"
            y="386"
            width="8"
            height="8"
            rx="1.5"
            fill="#C9F466"
            fillOpacity="0.55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.35, delay: 0.98, ease: STUDIO_EASE }}
          />
          <motion.rect
            x="136.5"
            y="386.5"
            width="7"
            height="7"
            rx="1.5"
            fill="#F7F6F3"
            fillOpacity="0.45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.35, delay: 0.98, ease: STUDIO_EASE }}
          />
        </svg>

        {/* Floating keyword chips along outer orbital perimeter (1–2 visible at a time, never overlapping central logo) */}
        <div className="pointer-events-none absolute inset-0">
          <AnimatePresence mode="sync">
            {activeDesktopLabels.map((item) => {
              const slotStyle = SLOT_CONFIG[item.slot];
              return (
                <motion.div
                  key={`${stepIndex}-${item.slot}-${item.text}`}
                  initial={
                    prefersReduced
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: 0,
                          y: slotStyle.driftOffset.y > 0 ? -4 : 6,
                        }
                  }
                  animate={
                    prefersReduced
                      ? { opacity: 1 }
                      : {
                          opacity: 1,
                          x: slotStyle.driftOffset.x,
                          y: slotStyle.driftOffset.y,
                        }
                  }
                  exit={
                    prefersReduced
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: slotStyle.driftOffset.x * 1.4,
                          y: slotStyle.driftOffset.y - 5,
                        }
                  }
                  transition={{
                    duration: prefersReduced ? 0.18 : 0.72,
                    ease: STUDIO_EASE,
                  }}
                  className={`absolute ${slotStyle.positionClass}`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#241A2E]/90 backdrop-blur-md border border-white/14 shadow-[0_8px_22px_-10px_rgba(0,0,0,0.65)] text-[11.5px] font-medium tracking-[0.01em] text-[#F7F6F3] whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9F466] shrink-0" />
                    <span>{item.text}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
