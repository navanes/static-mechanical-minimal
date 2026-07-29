import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Static Mechanical Inc.';
const PHONE = '818-318-3032';
// Placeholder domain — update once staticmechanicalinc.com (or the real domain) is registered/confirmed.
const DOMAIN = 'https://staticmechanicalinc.com';
// Short form for title/description defaults — Google truncates titles past ~60 chars
// and descriptions past ~155, so these must stay compact.
const SHORT_AREA = 'Glendale, Burbank & LA, CA';
const OG_IMAGE = `${DOMAIN}/images/v2/hero-rooftop-glass-dark.jpg`;
const YELP_URL = 'https://www.yelp.com/biz/static-mechanical-montrose';

const schemaJSON = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: SITE_NAME,
  telephone: '+18183183032',
  email: 'Staticmechanicalinc@gmail.com',
  url: DOMAIN,
  sameAs: [YELP_URL],
  priceRange: '$$',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '17:00' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: [
    'Los Angeles','Glendale','Burbank','Pasadena','East Los Angeles','San Fernando','Van Nuys',
    'North Hollywood','Sherman Oaks','Encino','Calabasas',
    'Woodland Hills','Northridge','Reseda','Tarzana',
  ],
});

export default function SEO({ title, description, canonical, breadcrumb }) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | HVAC Contractor — ${SHORT_AREA}`;

  const metaDesc = description ||
    `Static Mechanical Inc. — full-service HVAC contractor serving ${SHORT_AREA}. Licensed, bonded & insured. Same-day service. Call ${PHONE}.`;

  const canonicalUrl = `${DOMAIN}${canonical || '/'}`;

  const breadcrumbSchema = breadcrumb
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
          { '@type': 'ListItem', position: 2, name: breadcrumb.name, item: `${DOMAIN}${breadcrumb.path}` },
        ],
      })
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="keywords" content="HVAC contractor Los Angeles, HVAC Glendale, AC Glendale, HVAC near me, AC repair near me, Glendale CA HVAC, HVAC Burbank, AC Burbank, HVAC Pasadena, AC Pasadena, HVAC East Los Angeles, HVAC San Fernando, San Fernando Valley HVAC contractor, mechanical contractor Los Angeles, commercial HVAC, air conditioning repair, furnace repair, AC installation, heating repair, mini split, same day HVAC" />
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="Los Angeles, CA" />
      <meta name="author" content={SITE_NAME} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="2000" />
      <meta property="og:image:height" content="1500" />
      <meta property="og:image:alt" content="Static Mechanical Inc. — Los Angeles HVAC Contractor" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* JSON-LD: Business */}
      <script type="application/ld+json">{schemaJSON}</script>
      {/* JSON-LD: Breadcrumb */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{breadcrumbSchema}</script>
      )}
    </Helmet>
  );
}
