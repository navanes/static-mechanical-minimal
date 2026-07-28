// ─── Google Analytics 4 ───────────────────────────────────────────────────────
// 1. Go to https://analytics.google.com → Admin → Create Property → Web
// 2. Copy the Measurement ID (looks like "G-XXXXXXXXXX")
// 3. Paste it in below
// Until a real ID is set, this is entirely inert — no script loads, no
// tracking runs, nothing is sent anywhere.
const MEASUREMENT_ID = 'G-XXXXXXXXXX';
// ───────────────────────────────────────────────────────────────────────────

let initialized = false;

function isEnabled() {
  return MEASUREMENT_ID && MEASUREMENT_ID !== 'G-XXXXXXXXXX';
}

export function initAnalytics() {
  if (initialized || !isEnabled()) return;
  initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  // send_page_view: false — this is a single-page app, so we send page_view
  // ourselves on each route change (see trackPageview) instead of relying on
  // GA's default full-page-load detection, which only fires once.
  gtag('config', MEASUREMENT_ID, { send_page_view: false });

  // Delegated click tracking: catches every tel:/mailto:/Yelp link on the site
  // (navbar, footer, hero, every service's call button, etc.) from one place,
  // instead of wiring an onClick into each individual button.
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href.startsWith('tel:')) {
      trackEvent('click_to_call', { phone_number: href.replace('tel:', '') });
    } else if (href.startsWith('mailto:')) {
      trackEvent('click_to_email');
    } else if (href.includes('yelp.com')) {
      trackEvent('click_yelp_link');
    }
  });
}

export function trackPageview(path) {
  if (!isEnabled() || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', { page_path: path, page_location: window.location.href });
}

export function trackEvent(name, params = {}) {
  if (!isEnabled() || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}
