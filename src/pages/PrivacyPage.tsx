import React from 'react';
import { STUDIO_CONTACT } from '../data/studioData';
import { Button } from '../components/Button';

export function PrivacyPage() {
  return (
    <section className="bg-[#17101F] py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-12">
        <p className="font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.14em] uppercase text-[#BDB6C7]">
          Information · Privacy Policy
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-[#F7F6F3]">
          Privacy Policy
        </h1>

        <div className="mt-10 space-y-6 text-base leading-[1.75] text-[#BDB6C7]">
          <p>
            This website is operated by Coderza, an independent software development and digital studio based in Sri Lanka.
          </p>
          <p>
            We keep data collection minimal. This website does not run advertising trackers, behavioral profiling scripts, or third-party marketing cookies.
          </p>
          <p>
            When you contact us directly via email ({STUDIO_CONTACT.email}) or our official Facebook Page, the information you choose to share—such as your name, organization, email address, and project requirements—is used solely to respond to your inquiry and prepare a quotation or project discussion.
          </p>
          <p>
            We do not sell, rent, or distribute inquiry details to third parties. If you would like any previous correspondence deleted, please write to{' '}
            <a
              href={`mailto:${STUDIO_CONTACT.email}`}
              className="text-[#C9F466] underline underline-offset-4"
            >
              {STUDIO_CONTACT.email}
            </a>
            .
          </p>
        </div>

        <div className="mt-12">
          <Button href="/" variant="secondary">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
