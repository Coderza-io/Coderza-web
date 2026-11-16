import React, { useState } from 'react';
import { Check, Copy, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/studioData';

export function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Business Website');
  const [budget, setBudget] = useState('');
  const [details, setDetails] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_CONTACT.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${STUDIO_CONTACT.email}`;
    }
  };

  const buildBriefText = () => {
    return [
      `Name: ${name.trim()}`,
      organization.trim() ? `Business / Organization: ${organization.trim()}` : null,
      `Reply Email: ${email.trim()}`,
      `Project Type: ${projectType}`,
      budget.trim() ? `Estimated Budget Range: ${budget.trim()}` : null,
      '',
      'Project Details:',
      details.trim(),
    ]
      .filter((line) => line !== null)
      .join('\n');
  };

  const validateBrief = () => {
    if (!name.trim()) {
      setErrorMsg('Please enter your name before preparing your inquiry.');
      return false;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg('Please enter a valid email address so we know where to reply.');
      return false;
    }
    if (!details.trim() || details.trim().length < 15) {
      setErrorMsg('Please share a brief description of your project (at least a sentence or two).');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleOpenEmailClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateBrief()) return;

    const subject = encodeURIComponent(
      `Project Inquiry — ${projectType}${organization.trim() ? ` (${organization.trim()})` : ''}`
    );
    const body = encodeURIComponent(buildBriefText());
    window.location.href = `mailto:${STUDIO_CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyBrief = async () => {
    if (!validateBrief()) return;
    try {
      await navigator.clipboard.writeText(buildBriefText());
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    } catch {
      setErrorMsg('Clipboard access was unavailable. Please use "Open in Email App" instead.');
    }
  };

  return (
    <section className="bg-[#17101F] bg-coderza-grid py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.14em] uppercase text-[#BDB6C7]">
            Contact · Start a Project
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.08] text-[#F7F6F3]">
            Tell us what you’re building.
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-[1.65] text-[#BDB6C7]">
            Reach out directly by email or visit our official Facebook Page to share your goals. We review every inquiry personally and follow up to arrange an initial conversation.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Direct Verified Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#241A2E] border border-[#30203D] p-7">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C9F466]" aria-hidden="true" />
                <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#F7F6F3]">
                  Direct Email
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#BDB6C7]">
                Best for detailed project scopes, redesign requests, and formal quotation inquiries.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${STUDIO_CONTACT.email}`}
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[#C9F466] text-[#151817] font-[family-name:var(--font-display)] font-semibold text-sm hover:bg-[#d5f784] transition-colors"
                >
                  <span>{STUDIO_CONTACT.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 h-11 px-4 rounded-xl bg-[#17101F] border border-white/15 text-[#F7F6F3] hover:border-[#C9F466]/60 text-sm font-medium transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-[#C9F466]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-[#241A2E] border border-[#30203D] p-7">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[#C9F466]" aria-hidden="true" />
                <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#F7F6F3]">
                  Facebook Page
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#BDB6C7]">
                Follow studio updates or reach out to us through our official Facebook Page.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={STUDIO_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[#17101F] border border-white/15 text-[#F7F6F3] hover:border-[#C9F466] hover:text-[#C9F466] font-[family-name:var(--font-display)] font-semibold text-sm transition-colors"
                >
                  <span>Visit Our Facebook Page</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-[#1B1426] border border-white/10 p-6">
              <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#F7F6F3]">
                What to expect next
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#BDB6C7]">
                Once you share your project outline, we review your goals, clarify any open questions, and arrange a call or written proposal with clear scope and next steps. We work with clients across Sri Lanka and remotely worldwide.
              </p>
            </div>
          </div>

          {/* Right: Project Brief Composer (Opens Email Client or Copies Formatted Brief) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleOpenEmailClient}
              noValidate
              className="rounded-2xl bg-[#241A2E] border border-[#30203D] p-7 sm:p-9 space-y-6"
            >
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#F7F6F3]">
                  Project Brief Composer
                </h2>
                <p className="mt-1.5 text-sm text-[#BDB6C7]">
                  Organize your inquiry below, then open it directly in your email app addressed to {STUDIO_CONTACT.email} or copy the formatted brief.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium uppercase tracking-wider text-[#BDB6C7] mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Kasun Perera"
                    className="w-full h-11 px-4 rounded-xl bg-[#17101F] border border-white/15 text-sm text-[#F7F6F3] placeholder:text-[#BDB6C7]/45 focus:border-[#C9F466]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-org"
                    className="block text-xs font-medium uppercase tracking-wider text-[#BDB6C7] mb-2"
                  >
                    Business / Organization
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Optional"
                    className="w-full h-11 px-4 rounded-xl bg-[#17101F] border border-white/15 text-sm text-[#F7F6F3] placeholder:text-[#BDB6C7]/45 focus:border-[#C9F466]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium uppercase tracking-wider text-[#BDB6C7] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full h-11 px-4 rounded-xl bg-[#17101F] border border-white/15 text-sm text-[#F7F6F3] placeholder:text-[#BDB6C7]/45 focus:border-[#C9F466]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-type"
                    className="block text-xs font-medium uppercase tracking-wider text-[#BDB6C7] mb-2"
                  >
                    Type of Project
                  </label>
                  <select
                    id="contact-type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full h-11 px-4 rounded-xl bg-[#17101F] border border-white/15 text-sm text-[#F7F6F3] focus:border-[#C9F466]"
                  >
                    <option value="Business Website">Business Website</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Custom Web Application">Custom Web Application</option>
                    <option value="Website Care & Support">Website Care &amp; Support</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-budget"
                  className="block text-xs font-medium uppercase tracking-wider text-[#BDB6C7] mb-2"
                >
                  Optional Budget Range
                </label>
                <input
                  id="contact-budget"
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. LKR / USD estimate or open to quotation"
                  className="w-full h-11 px-4 rounded-xl bg-[#17101F] border border-white/15 text-sm text-[#F7F6F3] placeholder:text-[#BDB6C7]/45 focus:border-[#C9F466]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-details"
                  className="block text-xs font-medium uppercase tracking-wider text-[#BDB6C7] mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="contact-details"
                  rows={4}
                  required
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Tell us what you want to build, key pages or features needed, and any target timeline."
                  className="w-full p-4 rounded-xl bg-[#17101F] border border-white/15 text-sm text-[#F7F6F3] placeholder:text-[#BDB6C7]/45 focus:border-[#C9F466]"
                />
              </div>

              {errorMsg && (
                <p role="alert" className="text-sm text-[#C9F466]">
                  {errorMsg}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[#C9F466] text-[#151817] font-[family-name:var(--font-display)] font-semibold text-sm hover:bg-[#d5f784] transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Open in Email App</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-xl bg-[#17101F] border border-white/15 text-[#F7F6F3] hover:border-[#C9F466]/60 text-sm font-medium transition-colors cursor-pointer"
                >
                  {copiedBrief ? (
                    <>
                      <Check className="w-4 h-4 text-[#C9F466]" aria-hidden="true" />
                      <span>Brief Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" aria-hidden="true" />
                      <span>Copy Formatted Brief</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
