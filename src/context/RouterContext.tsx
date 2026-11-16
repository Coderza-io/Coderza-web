import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface RouterContextValue {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue>({
  path: '/',
  navigate: () => {},
});

const ROUTE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Coderza — Ideas into impact. | Independent Digital Studio',
    description:
      'Coderza is an independent software development and digital studio in Sri Lanka building thoughtful business websites, custom web applications, and ongoing care.',
  },
  '/services': {
    title: 'Services — Coderza Digital Studio',
    description:
      'Business websites, custom web applications, and practical website care & support tailored to real business needs.',
  },
  '/about': {
    title: 'About — Coderza Digital Studio',
    description:
      'Coderza is a founder-led independent digital studio based in Sri Lanka focused on clarity, craft, and ownership.',
  },
  '/contact': {
    title: 'Contact — Coderza Digital Studio',
    description:
      'Tell Coderza what you are building. Reach out directly by email or visit our official Facebook Page to discuss your website or web application.',
  },
  '/privacy': {
    title: 'Privacy Policy — Coderza Digital Studio',
    description:
      'Privacy information for the Coderza studio website.',
  },
};

function getBasePrefix(): string {
  const rawBase = import.meta.env.BASE_URL || '/';
  if (!rawBase || rawBase === '/') return '';
  return rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;
}

function stripBasePrefix(pathname: string): string {
  const basePrefix = getBasePrefix();
  if (basePrefix && (pathname === basePrefix || pathname.startsWith(`${basePrefix}/`))) {
    return pathname.slice(basePrefix.length) || '/';
  }
  return pathname;
}

export function withBasePrefix(routePath: string): string {
  const basePrefix = getBasePrefix();
  if (!basePrefix) return routePath;
  if (routePath === '/') return `${basePrefix}/`;
  return `${basePrefix}${routePath.startsWith('/') ? routePath : `/${routePath}`}`;
}

function normalizePath(raw: string): string {
  const withoutQueryAndHash = stripBasePrefix(raw.split('#')[0].split('?')[0]);
  if (!withoutQueryAndHash || withoutQueryAndHash === '/') return '/';
  const cleaned = withoutQueryAndHash.replace(/\/+$/, '');
  return cleaned.startsWith('/') ? cleaned : `/${cleaned}`;
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState<string>(() => normalizePath(window.location.pathname));
  const [pendingHash, setPendingHash] = useState<string>(() =>
    window.location.hash ? window.location.hash.slice(1) : ''
  );

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname));
      setPendingHash(window.location.hash ? window.location.hash.slice(1) : '');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const meta = ROUTE_META[path] || ROUTE_META['/'];

    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);
  }, [path]);

  useEffect(() => {
    if (!pendingHash) return;
    const timer = window.setTimeout(() => {
      const el = document.getElementById(pendingHash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setPendingHash('');
    }, 40);
    return () => window.clearTimeout(timer);
  }, [path, pendingHash]);

  const navigate = useCallback(
    (to: string) => {
      const [targetBeforeHash, hash] = to.split('#');
      const normalized = normalizePath(targetBeforeHash || '/');
      const browserUrl = `${withBasePrefix(normalized)}${hash ? `#${hash}` : ''}`;

      if (normalized !== path || browserUrl !== window.location.pathname + window.location.search + window.location.hash) {
        window.history.pushState({}, '', browserUrl);
        setPath(normalized);
      }

      if (hash) {
        setPendingHash(hash);
      } else {
        setPendingHash('');
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    },
    [path]
  );

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
