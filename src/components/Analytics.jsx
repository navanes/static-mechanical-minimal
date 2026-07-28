import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, trackPageview } from '../lib/analytics';

// Loads Google Analytics (once a real Measurement ID is set in src/lib/analytics.js)
// and sends a pageview on every route change, since this is a client-rendered SPA —
// there's no full page load for GA to detect on its own.
export default function Analytics() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageview(pathname + hash);
  }, [pathname, hash]);

  return null;
}
