/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { MotionConfig } from 'motion/react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { Button } from './components/Button';

const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const PrivacyPage = lazy(() =>
  import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage }))
);

function NotFoundPage() {
  return (
    <section className="bg-[#17101F] py-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <p className="font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.14em] uppercase text-[#C9F466]">
          404 · Not Found
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[#F7F6F3]">
          That page could not be found.
        </h1>
        <p className="mt-4 text-base text-[#BDB6C7] max-w-lg">
          The URL you visited does not exist on this site. You can return to the homepage or browse our services.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/contact" variant="secondary">
            Contact Coderza
          </Button>
        </div>
      </div>
    </section>
  );
}

function RouteFallback() {
  return <div className="min-h-[60vh] bg-[#17101F]" aria-busy="true" />;
}

function AppRoutes() {
  const { path } = useRouter();

  const renderPage = () => {
    if (path === '/') return <HomePage />;
    if (path === '/services') return <ServicesPage />;
    if (path === '/about') return <AboutPage />;
    if (path === '/contact') return <ContactPage />;
    if (path === '/privacy') return <PrivacyPage />;
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#17101F] text-[#F7F6F3]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#C9F466] focus:text-[#151817] focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Suspense fallback={<RouteFallback />}>{renderPage()}</Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider>
        <AppRoutes />
      </RouterProvider>
    </MotionConfig>
  );
}
