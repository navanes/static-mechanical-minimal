import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Img from '../components/Img';
import TrustBar from '../components/TrustBar';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

const PHONE = '818-318-3032';

// Service photos — save each image to public/images/ with the matching filename
const IMG = {
  acRepair:  '/images/service-ac.jpg',             // tech with red cap working on outdoor AC unit
  furnace:   '/images/static-furnace.jpg',         // Rheem Criterion II gas furnace install
  thermo:    '/images/service-thermo.jpg',         // hand on smart thermostat showing 72°
  mini:      '/images/service-mini.jpg',           // tech installing mini split on wall
  changeout: '/images/static-crane-delivery.jpg',  // crane truck delivering new rooftop package units
  airflow:   '/images/gallery-31.jpg',             // supply diffuser & ductwork install
};

const services = [
  {
    img: IMG.acRepair,
    alt: 'AC repair technician diagnosing an outdoor condenser unit — Glendale, CA',
    icon: '❄️',
    id: 'ac-repair-diagnostics',
    title: 'AC Repair & Diagnostics',
    tagline: 'Stay cool — we fix it the same day.',
    desc: [
      'A broken AC in the Los Angeles heat is no small problem. Static Mechanical technicians respond fast and come equipped to diagnose and repair any issue — from refrigerant leaks and faulty compressors to electrical problems and frozen coils.',
      'We service all major brands including Carrier, Lennox, Trane, Rheem, York, and more. Every repair comes with a clear explanation and upfront price before any work begins.',
    ],
    bullets: [
      'All makes and models serviced',
      'Refrigerant leak detection & recharge',
      'Compressor, capacitor & contactor repairs',
      'Evaporator & condenser coil cleaning',
      'Electrical diagnostics & wiring repairs',
    ],
    reverse: false,
  },
  {
    img: IMG.furnace,
    alt: 'Gas furnace repair and installation — Burbank, CA',
    icon: '🔥',
    id: 'furnace-repair-installation',
    title: 'Furnace Repair & Installation',
    tagline: "Don't go cold — we're ready 7 days a week.",
    desc: [
      "Whether your furnace is making strange noises, failing to ignite, or simply not heating your home efficiently, our technicians can diagnose and resolve any issue quickly. We also handle complete furnace replacements when it's time for an upgrade.",
      "We install high-efficiency gas and electric furnaces tailored to your home's size and your budget. Ask us about rebates on qualifying energy-efficient units.",
    ],
    bullets: [
      'Gas & electric furnace repair',
      'Igniter, heat exchanger & blower repairs',
      'New furnace installation & replacement',
      'Annual tune-ups & safety inspections',
      'Carbon monoxide & safety checks',
    ],
    reverse: true,
  },
  {
    img: IMG.thermo,
    alt: 'Smart thermostat installation — Pasadena, CA',
    icon: '🌡️',
    id: 'thermostat-installation',
    title: 'Thermostat Installation',
    tagline: 'Smart comfort, lower bills.',
    desc: [
      "The right thermostat can cut your energy bills by 15–20%. We install and program all types of thermostats — from basic programmable models to advanced smart thermostats that learn your schedule and let you control your home's climate from anywhere.",
      'We work with Nest, Ecobee, Honeywell, Emerson, and other leading brands. Proper wiring and setup is critical — let our technicians do it right.',
    ],
    bullets: [
      'Smart thermostat installation (Nest, Ecobee, Honeywell)',
      'Programmable & non-programmable models',
      'Zoning system compatibility',
      'Wi-Fi & app setup',
      'Compatibility checks before purchase',
    ],
    reverse: false,
  },
  {
    img: IMG.mini,
    alt: 'Ductless mini split system installation — East Los Angeles, CA',
    icon: '🔧',
    id: 'mini-split-systems',
    title: 'Mini Split Systems',
    tagline: 'Ductless comfort — room by room.',
    desc: [
      "Mini split systems are the perfect solution for homes without ductwork, room additions, garages, sunrooms, or any space that needs independent temperature control. They're quieter, more efficient, and easier to install than traditional HVAC systems.",
      'We install both single-zone and multi-zone ductless systems from leading brands. Our technicians are factory-trained and handle everything from the initial load calculation to final testing.',
    ],
    bullets: [
      'Single & multi-zone installations',
      'Mitsubishi, Daikin, LG, Samsung brands',
      'Heat pump models for year-round use',
      'Energy Star certified options',
      'Existing system repairs & service',
    ],
    reverse: true,
  },
  {
    img: IMG.changeout,
    alt: 'Crane delivering new rooftop HVAC package units for a commercial system change-out — Los Angeles, CA',
    pos: 'center 78%',
    icon: '⚙️',
    id: 'full-system-change-outs',
    title: 'Full System Change-Outs',
    tagline: 'A new system, done in a day.',
    desc: [
      "Older HVAC systems waste energy and cost more to repair every year. When it's time for a full replacement, Static Mechanical handles the complete project — from crane-lifted rooftop package units on commercial buildings to single condensers on a residential change-out — removal of the old system, installation of the new one, and testing to make sure everything works perfectly.",
      'We offer equipment from top-rated brands and can help you choose the right system size and efficiency rating for your home. We also help you navigate available rebates and financing options.',
    ],
    bullets: [
      'Full AC & heating system replacement',
      'Load calculation & proper system sizing',
      'All major brands available',
      'Old equipment removal & disposal',
      'Utility rebates & financing assistance',
    ],
    reverse: false,
  },
  {
    img: IMG.airflow,
    alt: 'Supply duct and diffuser installation for improved airflow — San Fernando, CA',
    icon: '💨',
    id: 'airflow-efficiency',
    title: 'Airflow & Efficiency Solutions',
    tagline: 'Better comfort, lower utility bills.',
    desc: [
      'If some rooms in your home are always too hot or too cold, your energy bills are high, or your system runs constantly without reaching the right temperature — you likely have an airflow problem. Proper airflow is critical to system performance and longevity.',
      'Our technicians assess your entire HVAC system, ductwork, and ventilation to identify inefficiencies. We offer duct sealing, duct repair, zoning system installation, and air balancing to make your whole home comfortable.',
    ],
    bullets: [
      'Duct inspection, sealing & repair',
      'Airflow & static pressure testing',
      'Zoning system installation',
      'Air balancing for even temperatures',
      'Filter & ventilation recommendations',
    ],
    reverse: true,
  },
];

const faqs = [
  {
    q: 'How soon can you come out?',
    a: 'We offer same-day service Monday–Friday and Saturday. For most calls placed before 2 PM, we can arrive the same day. Sunday service is available for emergencies.',
  },
  {
    q: 'Do you charge for estimates?',
    a: 'Diagnostic visits have a standard service call fee, which is waived if you proceed with the repair. Written estimates for new installations and replacements are always free.',
  },
  {
    q: 'What brands do you work with?',
    a: 'We service and install all major brands including Carrier, Lennox, Trane, Rheem, York, Goodman, Daikin, Mitsubishi, LG, and many more.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Static Mechanical Inc. is fully licensed by the State of California (LIC #1092530), bonded, and insured. All technicians are background-checked.',
  },
  {
    q: 'Is there an HVAC contractor near me in Glendale, Burbank, or Pasadena?',
    a: 'Yes — Static Mechanical is a local HVAC contractor based in the San Fernando Valley, serving Glendale, Burbank, Pasadena, East Los Angeles, San Fernando, and the rest of the greater Los Angeles area. If you\'re searching for HVAC service near me, we\'re already in your neighborhood.',
  },
  {
    q: 'Do you offer any warranties?',
    a: 'Yes. We stand behind our work with a labor warranty on all repairs, and new equipment comes with the manufacturer\'s warranty plus our installation guarantee.',
  },
];

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

export default function Services() {
  return (
    <>
      <SEO
        title="HVAC Services in Glendale, Burbank, Pasadena & Los Angeles"
        description="HVAC services for residential & commercial clients in Glendale, Burbank, Pasadena, East Los Angeles, San Fernando & the Los Angeles area: AC repair, furnace installation, smart thermostats, mini splits, full change-outs & airflow. Same-day service. Call 818-318-3032."
        canonical="/services"
        breadcrumb={{ name: 'Services', path: '/services' }}
      />
      <Helmet>
        <script type="application/ld+json">{faqSchema}</script>
      </Helmet>

      {/* Page header */}
      <section
        className="bg-brand-navy py-20 px-4 text-center relative overflow-hidden"
        aria-label="Page header"
      >
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">Everything HVAC</p>
          <h1 className="font-display text-5xl font-black text-white uppercase tracking-wide mb-4">
            HVAC Services in Glendale, Burbank &amp; Pasadena
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Expert heating &amp; cooling solutions for homes and businesses across Los Angeles, East Los
            Angeles, San Fernando &amp; the San Fernando Valley — done right, guaranteed.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-3xl mx-auto text-center text-gray-600 leading-relaxed text-lg">
          At <strong className="text-gray-900">Static Mechanical Inc.</strong>, we provide a full
          range of HVAC services for residential and commercial clients across the year. Our licensed, bonded, and
          insured crews serve <strong className="text-gray-900">Glendale, Burbank, Pasadena, East Los Angeles,
          San Fernando, and the greater Los Angeles &amp; San Fernando Valley area</strong> with
          fast, reliable, professional service — 7 days a week.
        </div>
      </section>

      {/* Service sections */}
      <div className="bg-gray-50" aria-label="Service details">
        {services.map((s, idx) => (
          <article
            key={s.id}
            id={s.id}
            className={`py-16 px-4 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className={`max-w-6xl mx-auto flex flex-col ${s.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              {/* Photo */}
              <div className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-xl">
                <Img
                  src={s.img}
                  alt={s.alt || s.title}
                  className="w-full h-72 md:h-96 object-cover"
                  style={s.pos ? { objectPosition: s.pos } : undefined}
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl" aria-hidden="true">{s.icon}</span>
                  <span className="text-brand-red font-bold text-sm uppercase tracking-widest">{s.tagline}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-wide mb-5">
                  {s.title}
                </h2>
                {s.desc.map((p, i) => (
                  <p key={i} className="text-gray-600 mb-4 leading-relaxed">{p}</p>
                ))}
                <ul className="space-y-2 mb-6" aria-label={`${s.title} details`}>
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold shrink-0" aria-hidden="true">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 bg-brand-red text-white font-display font-black px-7 py-3 rounded-lg hover:bg-brand-red-lt transition-colors uppercase tracking-wide"
                  aria-label={`Call for ${s.title}`}
                >
                  📞 Call Now: {PHONE}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Energy note */}
      <div className="bg-amber-50 border-y border-amber-100 py-6 px-4 text-center">
        <p className="text-amber-800 font-medium">
          💡 <strong>Save money:</strong> Ask us about energy-efficient upgrades and available utility rebates in Los Angeles County.
        </p>
      </div>

      {/* FAQ */}
      <section className="bg-white py-16 px-4" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Got Questions?</p>
            <h2 id="faq-heading" className="font-display text-3xl font-black text-gray-900 uppercase tracking-wide">
              Frequently Asked
            </h2>
          </div>
          <dl className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-100 rounded-xl p-6 hover:border-brand-blue/30 transition-colors">
                <dt className="font-bold text-gray-900 mb-2">{faq.q}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <TrustBar />
      <CTASection
        heading="Need HVAC Service Today?"
        sub="Serving Glendale, Burbank, Pasadena, East Los Angeles, San Fernando & the greater Los Angeles area — same-day appointments available."
      />
    </>
  );
}
