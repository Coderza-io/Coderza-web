import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CoderzaLogo } from './CoderzaLogo';
import { useRouter, withBasePrefix } from '../context/RouterContext';
import { STUDIO_EASE } from './MotionPrimitives';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const { path, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [path]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return path === '/';
    return path === href || path.startsWith(`${href}/`);
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    navigate(href);
  };

  return (
    <motion.header
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: prefersReduced ? 0.15 : 0.3, ease: STUDIO_EASE }}
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled || mobileOpen
          ? 'bg-[#17101F]/[0.98] backdrop-blur-md border-b border-white/15 shadow-[0_8px_24px_-14px_rgba(0,0,0,0.75)]'
          : 'bg-[#17101F]/95 border-b border-white/[0.06]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12 h-[68px] sm:h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href={withBasePrefix('/')}
          onClick={(e) => handleLinkClick(e, '/')}
          className="whitespace-nowrap shrink-0 py-1.5 rounded-md focus-visible:outline-2 focus-visible:outline-[#C9F466] focus-visible:outline-offset-2"
          aria-label="Coderza home"
        >
          <CoderzaLogo variant="dark" size="sm" />
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-9" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.href}
                href={withBasePrefix(link.href)}
                onClick={(e) => handleLinkClick(e, link.href)}
                aria-current={active ? 'page' : undefined}
                className={`group relative inline-flex items-center min-h-[40px] px-0.5 text-[14px] font-medium tracking-[0.005em] whitespace-nowrap shrink-0 transition-colors duration-200 rounded-sm ${
                  active
                    ? 'text-[#F7F6F3]'
                    : 'text-[#BDB6C7] hover:text-[#F7F6F3]'
                }`}
              >
                <span>{link.label}</span>
                {active ? (
                  <motion.span
                    layoutId={prefersReduced ? undefined : 'coderza-nav-underline'}
                    transition={{ duration: 0.22, ease: STUDIO_EASE }}
                    aria-hidden="true"
                    className="absolute left-0 right-0 bottom-1 h-[2px] rounded-full bg-[#C9F466]"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 bottom-1 h-[2px] rounded-full bg-[#C9F466]/55 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={withBasePrefix('/contact')}
            onClick={(e) => handleLinkClick(e, '/contact')}
            className="group hidden md:inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[#C9F466] text-[#151817] font-[family-name:var(--font-display)] font-semibold text-[14px] hover:bg-[#d6f889] active:scale-[0.985] transition-all duration-200 whitespace-nowrap shrink-0"
          >
            <span>Start a Project</span>
            <ArrowUpRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#241A2E]/70 border border-white/15 text-[#F7F6F3] hover:border-[#C9F466]/60 active:scale-[0.96] transition-all duration-150"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile"
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -4 }}
            transition={{ duration: prefersReduced ? 0.12 : 0.2, ease: STUDIO_EASE }}
            className="md:hidden border-t border-white/12 bg-[#17101F] px-5 pt-4 pb-6 space-y-1.5"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.href}
                  href={withBasePrefix(link.href)}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center justify-between px-4 min-h-[48px] rounded-xl text-[15px] font-medium transition-colors duration-150 ${
                    active
                      ? 'bg-[#241A2E] text-[#C9F466] border border-[#30203D]'
                      : 'text-[#F7F6F3] hover:bg-[#241A2E]/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#C9F466]">
                      Current
                    </span>
                  )}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href={withBasePrefix('/contact')}
                onClick={(e) => handleLinkClick(e, '/contact')}
                className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-[#C9F466] text-[#151817] font-[family-name:var(--font-display)] font-semibold text-[15px] active:scale-[0.985] transition-transform"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
