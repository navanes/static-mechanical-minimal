import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router doesn't manage scroll position on navigation by default:
// switching pages leaves you wherever you were scrolled to on the previous
// page, and #anchor links (e.g. footer service links → /services#mini-split-systems)
// don't reliably land on the right section. This fixes both: scroll to top on
// a plain route change, or to the target element (offset for the sticky header)
// when the URL has a hash.
const HEADER_OFFSET = 16;

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    let cancelled = false;
    let raf1;
    let raf2;

    const scrollToTarget = () => {
      if (cancelled) return;
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!el) return;
      const header = document.querySelector('header');
      const offset = (header?.getBoundingClientRect().height || 0) + HEADER_OFFSET;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top) });
    };

    // Wait two frames so the new page has actually painted before measuring —
    // measuring on the same tick as the route change can catch stale layout.
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(scrollToTarget);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [pathname, hash]);

  return null;
}
