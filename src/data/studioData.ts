export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  capabilities: string[];
  problemSolved: string;
  deliverables: string[];
  examples: string[];
  howItStarts: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StudioValue {
  title: string;
  description: string;
}

export const STUDIO_CONTACT = {
  email: 'hello.coderza@gmail.com',
  facebookUrl: 'https://www.facebook.com/share/1EDREWviFx/?mibextid=wwXIfr',
  location: 'Sri Lanka',
  tagline: 'Ideas into impact.',
  copyrightYear: 2026,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-websites',
    number: '01',
    title: 'Business Websites',
    summary:
      'Professional, responsive websites designed to communicate your brand, present your services, and help customers reach you.',
    capabilities: [
      'Company and business websites',
      'Landing pages',
      'Website redesign',
      'Responsive layouts',
      'Basic SEO setup',
    ],
    problemSolved:
      'Many businesses either have an outdated site that fails on mobile or rely solely on social pages where services, credibility, and contact paths get buried.',
    deliverables: [
      'Custom responsive design tailored to your brand identity',
      'Clear service pages, inquiry routes, and mobile-first layouts',
      'Clean semantic HTML, metadata, Open Graph setup, and sitemap',
      'Fast static or modern web deployment with clean handover',
    ],
    examples: [
      'Service-based company websites with clear quotation paths',
      'Focused product or campaign landing pages',
      'Modern redesigns for slow or hard-to-navigate existing sites',
    ],
    howItStarts:
      'We begin with a short conversation about your business, audience, and existing content, then outline the page structure and provide a clear quotation.',
  },
  {
    id: 'custom-web-applications',
    number: '02',
    title: 'Custom Web Applications',
    summary:
      'Purpose-built web solutions that simplify processes, organize information, and support business operations.',
    capabilities: [
      'Business dashboards',
      'Booking interfaces',
      'Internal management tools',
      'Custom web platforms',
      'API integrations',
    ],
    problemSolved:
      'Off-the-shelf spreadsheets and disconnected tools create manual work, scattered records, and friction for staff or customers.',
    deliverables: [
      'Role-aware user interfaces built for clear daily workflows',
      'Structured data views, booking flows, and interactive dashboards',
      'Backend API integration and reliable validation',
      'Clean documentation and structured codebase handover',
    ],
    examples: [
      'Appointment scheduling and client intake portals',
      'Internal operations dashboards for tracking records and tasks',
      'Custom multi-step quote or booking web interfaces',
    ],
    howItStarts:
      'We map your workflow step by step, agree on the essential features for a practical first release, and scope the build with transparent milestones.',
  },
  {
    id: 'website-care-support',
    number: '03',
    title: 'Website Care & Support',
    summary:
      'Practical support for keeping websites updated, functional, and maintained.',
    capabilities: [
      'Content updates',
      'Bug fixes',
      'Performance reviews',
      'Deployment assistance',
      'Agreed maintenance plans',
    ],
    problemSolved:
      'Websites often fall behind after launch—text becomes outdated, layout issues appear on new devices, or deployment changes feel risky without technical help.',
    deliverables: [
      'Scheduled or on-request text, service, and media updates',
      'UI bug fixes and cross-device layout checks',
      'Core Web Vitals, accessibility, and broken-link reviews',
      'Hosting, domain, and deployment configuration assistance',
    ],
    examples: [
      'Ongoing updates for growing service catalogs and announcements',
      'Technical cleanup and performance tuning on existing sites',
      'Reliable post-launch care on agreed support terms',
    ],
    howItStarts:
      'Share your current website URL and the kind of support you need. We review the setup first and propose an appropriate, straightforward arrangement.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business, goals, audience, and project requirements.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Define the structure, user journeys, and visual direction.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Implement, review, and test the agreed solution.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Launch the finished project and provide agreed handover or support.',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'kinds-of-websites',
    question: 'What kinds of websites do you build?',
    answer:
      'We build company and service websites, focused landing pages, website redesigns, and custom web applications such as booking interfaces, dashboards, and internal tools.',
  },
  {
    id: 'redesign-existing',
    question: 'Can you redesign my existing website?',
    answer:
      'Yes. We can review what is currently working, reorganize the content around your goals, improve mobile usability and page structure, and rebuild the site cleanly.',
  },
  {
    id: 'website-cost',
    question: 'How much does a website cost?',
    answer:
      'Pricing depends on the scope, number of pages, custom functionality, and content requirements. Once we understand what you need, we provide a clear written quotation before any work begins.',
  },
  {
    id: 'project-timeline',
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend on project scope, feedback turnaround, and how ready your text and brand materials are. After our initial discovery conversation, we agree on a realistic schedule together.',
  },
  {
    id: 'support-after-launch',
    question: 'Do you provide support after launch?',
    answer:
      'Yes. We offer practical post-launch support including content updates, bug fixes, performance checks, and agreed maintenance arrangements.',
  },
  {
    id: 'work-remotely',
    question: 'Can we work together remotely?',
    answer:
      'Yes. Coderza is based in Sri Lanka and works remotely with clients locally and internationally using clear written milestones, video or voice check-ins, and shared preview links.',
  },
];

export const STUDIO_VALUES: StudioValue[] = [
  {
    title: 'Clarity',
    description:
      'Clear communication, realistic scope, and practical solutions built around what your business actually needs.',
  },
  {
    title: 'Craft',
    description:
      'Careful attention to typography, responsive layout, usability, and clean, maintainable code.',
  },
  {
    title: 'Ownership',
    description:
      'Direct accountability from first conversation through testing, launch, and straightforward handover.',
  },
];
