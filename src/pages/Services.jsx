import { Helmet } from 'react-helmet-async';
import ScrollGrowImg from '../components/ScrollGrowImg';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

const PHONE = '818-318-3032';

const categories = [
  { num: '01', id: 'repair',       title: 'Repair',       desc: 'Fast diagnostics and dependable repairs for every major HVAC system.' },
  { num: '02', id: 'installation', title: 'Installation', desc: 'High-efficiency equipment selected, sized, and installed with precision.' },
  { num: '03', id: 'commercial',   title: 'Commercial',   desc: 'Rooftop units, controls, airflow, and maintenance for active businesses.' },
  { num: '04', id: 'maintenance',  title: 'Maintenance',  desc: 'Practical preventive care that protects comfort and equipment life.' },
];

const sections = [
  {
    id: 'repair',
    label: '01 / REPAIR',
    heading: 'Fast, honest repairs.',
    intro: "A broken system in the Los Angeles heat — or a cold night with no heat — is no small problem. Our technicians respond fast and come equipped to diagnose the issue correctly the first time, with an upfront price before any work begins.",
    img: '/images/service-ac.jpg',
    alt: 'AC repair technician diagnosing an outdoor condenser unit — Glendale, CA',
    items: [
      { title: 'AC Repair & Diagnostics', bullets: ['All makes and models — Carrier, Lennox, Trane, Rheem, York', 'Refrigerant leak detection & recharge', 'Compressor, capacitor & contactor repairs', 'Evaporator & condenser coil cleaning'] },
      { title: 'Furnace Repair', bullets: ['Gas & electric furnace repair', 'Igniter, heat exchanger & blower repairs', 'Carbon monoxide & safety checks', 'Ready 7 days a week'] },
    ],
  },
  {
    id: 'installation',
    label: '02 / INSTALLATION',
    heading: 'Sized right, installed with precision.',
    intro: "Whether it's a smart thermostat, a ductless mini split, or a full system change-out, proper sizing and installation is what separates a system that lasts from one that doesn't. We handle the full project — old equipment removal, new installation, and testing.",
    img: '/images/v2/project-crane-street.jpg',
    alt: 'Crane delivering new rooftop HVAC package units for a commercial change-out — Los Angeles, CA',
    items: [
      { title: 'Full System Change-Outs', bullets: ['Load calculation & proper system sizing', 'All major brands available', 'Utility rebates & financing assistance'] },
      { title: 'Mini Split Systems', bullets: ['Single & multi-zone installations', 'Mitsubishi, Daikin, LG, Samsung', 'Perfect for additions & rooms without ductwork'] },
      { title: 'Smart Thermostats', bullets: ['Nest, Ecobee, Honeywell installation', 'Can cut energy bills 15–20%', 'Wi-Fi & app setup included'] },
    ],
  },
  {
    id: 'commercial',
    label: '03 / COMMERCIAL',
    heading: 'Built for active businesses.',
    intro: "From rooftop package units to mechanical rooms and cooling towers, we work on the equipment that keeps a business running. Crane-lifted installs, controls, airflow balancing, and scheduled maintenance — coordinated to minimize disruption to your tenants or operations.",
    img: '/images/v2/project-mechanical-room.jpg',
    alt: 'Commercial mechanical room with chiller and piping — Los Angeles, CA',
    items: [
      { title: 'Rooftop Package Units', bullets: ['Crane-coordinated equipment delivery', 'Multi-unit condenser row installs', 'Carrier, York, Trane commercial equipment'] },
      { title: 'Mechanical Rooms & Controls', bullets: ['Chillers, cooling towers, boilers', 'Building controls & scheduling', 'Preventive maintenance contracts'] },
    ],
  },
  {
    id: 'maintenance',
    label: '04 / MAINTENANCE',
    heading: 'Protects comfort and equipment life.',
    intro: 'Poor airflow, high bills, or a system that runs constantly without reaching temperature usually means an airflow or maintenance problem — not a system that needs replacing. Regular preventive care catches small issues before they become expensive ones.',
    img: '/images/gallery-31.jpg',
    alt: 'Supply duct and diffuser installation for improved airflow — East Los Angeles, CA',
    items: [
      { title: 'Airflow & Efficiency', bullets: ['Duct inspection, sealing & repair', 'Airflow & static pressure testing', 'Zoning system installation'] },
      { title: 'Preventive Maintenance', bullets: ['Seasonal tune-ups', 'Filter & ventilation recommendations', 'Extends equipment lifespan'] },
    ],
  },
];

const faqs = [
  { q: 'How soon can you come out?', a: 'We offer same-day service Monday–Friday and Saturday. For most calls placed before 2 PM, we can arrive the same day. Sunday service is available for emergencies.' },
  { q: 'Do you charge for estimates?', a: 'Diagnostic visits have a standard service call fee, which is waived if you proceed with the repair. Written estimates for new installations and replacements are always free.' },
  { q: 'What brands do you work with?', a: 'We service and install all major brands including Carrier, Lennox, Trane, Rheem, York, Goodman, Daikin, Mitsubishi, LG, and many more.' },
  { q: 'Are you licensed and insured?', a: 'Yes. Static Mechanical Inc. is fully licensed by the State of California (LIC #1092530), bonded, and insured. All technicians are background-checked.' },
  { q: 'Is there an HVAC contractor near me in Glendale, Burbank, or Pasadena?', a: "Yes — Static Mechanical is a local HVAC contractor based in the San Fernando Valley, serving Glendale, Burbank, Pasadena, East Los Angeles, San Fernando, and the rest of the greater Los Angeles area." },
  { q: 'Do you offer any warranties?', a: "Yes. We stand behind our work with a labor warranty on all repairs, and new equipment comes with the manufacturer's warranty plus our installation guarantee." },
];

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});

export default function Services() {
  return (
    <>
      <SEO
        title="HVAC Services — Glendale & Burbank"
        description="HVAC services in Glendale, Burbank & Pasadena: AC repair, furnace installation, thermostats, mini splits & full change-outs. Same-day service. Call 818-318-3032."
        canonical="/services"
        breadcrumb={{ name: 'Services', path: '/services' }}
      />
      <Helmet>
        <script type="application/ld+json">{faqSchema}</script>
      </Helmet>

      {/* ─── HERO / NUMBERED LIST ─────────────────────────────────────────── */}
      <section className="pt-16 pb-24 px-6" aria-label="Page header">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-500 tracking-widest mb-3">SERVICES</p>
          <h1 className="text-4xl md:text-5xl text-white mb-16 max-w-lg">
            Built around your space.
          </h1>

          <div>
            {categories.map((c) => (
              <a
                key={c.num}
                href={`#${c.id}`}
                className="group flex items-center gap-6 py-6 border-t border-line last:border-b hover:bg-white/[0.02] transition-colors -mx-6 px-6"
              >
                <span className="text-brand-red text-xs w-6 shrink-0">{c.num}</span>
                <span className="text-2xl md:text-3xl text-white w-48 md:w-64 shrink-0">{c.title}</span>
                <span className="hidden md:block text-sm text-gray-500 flex-1">{c.desc}</span>
                <span className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-gray-400 group-hover:border-white/30 group-hover:text-white transition-colors shrink-0" aria-hidden="true">
                  &gt;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DETAIL SECTIONS ──────────────────────────────────────────────── */}
      {sections.map((s, idx) => (
        <section key={s.id} id={s.id} className="py-24 px-6 border-t border-line scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
              <div className="md:w-1/2 w-full rounded overflow-hidden">
                <ScrollGrowImg src={s.img} alt={s.alt} className="w-full h-72 md:h-96 object-cover" />
              </div>
              <div className="md:w-1/2">
                <p className="text-xs text-gray-500 tracking-widest mb-3">{s.label}</p>
                <h2 className="text-3xl md:text-4xl text-white mb-5">{s.heading}</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">{s.intro}</p>

                <div className="space-y-6 mb-8">
                  {s.items.map((item) => (
                    <div key={item.title} className="pt-5 border-t border-line">
                      <h3 className="text-white mb-3">{item.title}</h3>
                      <ul className="space-y-1.5">
                        {item.bullets.map((b) => (
                          <li key={b} className="text-sm text-gray-500 flex gap-2">
                            <span className="text-brand-red" aria-hidden="true">&middot;</span>{b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-sm text-white border border-line rounded px-6 py-3 hover:border-white/30 transition-colors">
                  Call {PHONE} <span aria-hidden="true">&gt;</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-line" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 tracking-widest mb-3">FAQ</p>
          <h2 id="faq-heading" className="text-4xl text-white mb-12">Common questions.</h2>
          <dl>
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6 border-t border-line last:border-b">
                <dt className="text-white mb-2">{faq.q}</dt>
                <dd className="text-gray-500 text-sm leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection
        heading="Need HVAC service today?"
        sub="Serving Glendale, Burbank, Pasadena, East Los Angeles, San Fernando & the greater Los Angeles area."
      />
    </>
  );
}
