import React from 'react';
import { CoderzaLogo } from './CoderzaLogo';
import { STUDIO_CONTACT } from '../data/studioData';
import { useRouter, withBasePrefix } from '../context/RouterContext';

export function Footer() {
  const { navigate } = useRouter();

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <footer className="bg-[#17101F] border-t border-white/10 text-[#BDB6C7]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-8">
          {/* 1. Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-3.5">
            <a
              href={withBasePrefix('/')}
              onClick={(e) => handleNav(e, '/')}
              className="inline-block"
              aria-label="Coderza home"
            >
              <CoderzaLogo variant="dark" size="md" />
            </a>
            <p className="text-[15px] text-[#F7F6F3] font-medium">
              {STUDIO_CONTACT.tagline}
            </p>
            <p className="text-sm leading-relaxed max-w-xs text-[#BDB6C7]">
              Independent software development and digital studio building thoughtful websites and custom web applications.
            </p>
          </div>

          {/* 2. Navigation */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <h3 className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.1em] text-[#F7F6F3]">
              Navigation
            </h3>
            <ul className="space-y-1 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={withBasePrefix(item.href)}
                    onClick={(e) => handleNav(e, item.href)}
                    className="inline-block py-1.5 hover:text-[#C9F466] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Connect */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <h3 className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.1em] text-[#F7F6F3]">
              Connect
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href={`mailto:${STUDIO_CONTACT.email}`}
                  className="inline-block py-1.5 break-all hover:text-[#C9F466] transition-colors"
                >
                  {STUDIO_CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={STUDIO_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1.5 hover:text-[#C9F466] transition-colors"
                >
                  Visit Our Facebook Page
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Information */}
          <div className="col-span-2 lg:col-span-2 pt-6 border-t border-white/10 lg:pt-0 lg:border-t-0 flex flex-wrap items-center justify-between gap-4 lg:block lg:space-y-3">
            <h3 className="sr-only lg:not-sr-only font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.1em] text-[#F7F6F3]">
              Information
            </h3>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 lg:block lg:space-y-1 text-sm">
              <li className="lg:py-1.5">{STUDIO_CONTACT.location}</li>
              <li>
                <a
                  href={withBasePrefix('/privacy')}
                  onClick={(e) => handleNav(e, '/privacy')}
                  className="inline-block py-1.5 hover:text-[#C9F466] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="text-[#BDB6C7]/75 tabular-nums lg:py-1.5">
                © {STUDIO_CONTACT.copyrightYear} Coderza
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
