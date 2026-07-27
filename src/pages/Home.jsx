import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Img from '../components/Img';
import TrustBar from '../components/TrustBar';
import StatsBar from '../components/StatsBar';
import HowItWorks from '../components/HowItWorks';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const PHONE = '818-318-3032';

// Local paths → drop files in public/images/ and they auto-activate
// Fallbacks keep the site looking good in the meantime
const IMG = {
  hero:    '/images/static-hero.jpg',
  tech:    '/images/tech.jpg',
  acCard:  '/images/service-ac.jpg',
  furnace: '/images/static-furnace.jpg',
  thermo:  '/images/service-thermo.jpg',
  mini:    '/images/service-mini.jpg',
  change:  '/images/static-crane-delivery.jpg',
  air:     '/images/static-newconstruction.jpg',
};

const services = [
  { img: IMG.acCard,  title: 'AC Repair & Diagnostics',       desc: 'Fast, accurate diagnosis and repair for all makes and models. We get your AC running the same day.',       href: '/services#ac-repair-diagnostics', alt: 'AC repair technician working on an outdoor condenser unit — Glendale, CA' },
  { img: IMG.furnace, title: 'Furnace Repair & Installation',  desc: 'From emergency furnace repairs to full new installations — we keep you warm all winter.',                 href: '/services#furnace-repair-installation', alt: 'Gas furnace installation — Burbank, CA' },
  { img: IMG.thermo,  title: 'Thermostat Installation',        desc: 'Upgrade to a smart thermostat and start saving on energy bills from day one.',                            href: '/services#thermostat-installation', alt: 'Smart thermostat installation — Pasadena, CA' },
  { img: IMG.mini,    title: 'Mini Split Systems',             desc: 'Ductless comfort exactly where you need it — perfect for additions, garages, and older homes.',            href: '/services#mini-split-systems', alt: 'Ductless mini split installation — San Fernando Valley, CA' },
  { img: IMG.change,  title: 'Full System Change-Outs',        desc: 'Time for a new system? We handle full HVAC replacements — residential and commercial — with energy-efficient equipment.', href: '/services#full-system-change-outs', pos: 'center 78%', alt: 'Crane delivering new rooftop HVAC package units for a commercial change-out — Los Angeles, CA' },
  { img: IMG.air,     title: 'Airflow & Efficiency',           desc: 'Poor airflow or high bills? We diagnose ductwork, zoning, and ventilation issues for peak performance.',   href: '/services#airflow-efficiency', alt: 'Supply duct and diffuser installation — East Los Angeles, CA' },
];

const areas = [
  'Los Angeles','Glendale','Burbank','Pasadena','East Los Angeles','San Fernando',
  'Van Nuys','North Hollywood','Sherman Oaks','Encino','Woodland Hills','Northridge',
  'Chatsworth','Reseda','Tarzana','Canoga Park','Calabasas','Studio City','Toluca Lake',
];

export default function Home() {
  return (
    <>
      <SEO
        title="HVAC Contractor in Glendale & Burbank, CA"
        description="Static Mechanical Inc. — HVAC contractor serving Glendale, Burbank, Pasadena & the LA area. Same-day AC & heating repair. Licensed & insured. Call 818-318-3032."
        canonical="/"
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center min-h-[88vh] bg-brand-navy"
        aria-label="Hero"
      >
        {/* Background photo */}
        <div className="absolute inset-0 overflow-hidden">
          <Img
            src={IMG.hero}
            alt="Static Mechanical Inc. — commercial rooftop HVAC package units, serving Glendale, Burbank, Pasadena and Los Angeles, CA"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
            loading="eager"
            fetchpriority="high"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-red/90 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
              Same-Day Service Available
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-none tracking-tight mb-4">
              Reliable<br />
              <span className="text-brand-red">Comfort.</span><br />
              Done Right.
            </h1>

            <h2 className="text-blue-200 text-sm md:text-base font-bold uppercase tracking-widest mb-6">
              HVAC Contractor Serving Glendale, Burbank, Pasadena &amp; the San Fernando Valley
            </h2>

            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              Full-service mechanical contracting for homes and businesses across{' '}
              <strong className="text-white">Los Angeles, Glendale, Burbank, Pasadena, East Los Angeles,
              San Fernando, and the greater San Fernando Valley.</strong>{' '}
              Licensed, bonded, and insured — ready when you need us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-display font-black text-xl px-8 py-4 rounded-lg hover:bg-brand-red-lt transition-colors uppercase tracking-wide shadow-lg"
                aria-label={`Call Static Mechanical at ${PHONE}`}
              >
                📞 {PHONE}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-brand-navy transition-colors uppercase tracking-wide backdrop-blur-sm"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Inline trust badges */}
            <div className="flex flex-wrap gap-4 mt-8 text-gray-400 text-sm">
              {['✓ Licensed & Insured', '✓ LIC #1092530', '✓ No Hidden Fees', '✓ 100% Satisfaction'].map(b => (
                <span key={b} className="text-green-400 font-medium">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ────────────────────────────────────────────────────── */}
      <TrustBar />

      {/* ─── STATS ────────────────────────────────────────────────────────── */}
      <StatsBar />

      {/* ─── SERVICES GRID ────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">What We Do</p>
            <h2 id="services-heading" className="font-display text-4xl font-black text-gray-900 uppercase tracking-wide mb-4">
              Our HVAC Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From emergency repairs to full system replacements — we handle every aspect of residential
              and commercial heating &amp; cooling in Los Angeles, Glendale, Burbank, Pasadena, and the
              San Fernando Valley.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.href}
                className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col bg-white"
              >
                {/* Photo */}
                <div className="relative h-48 overflow-hidden">
                  <Img
                    src={s.img}
                    alt={s.alt || s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={s.pos ? { objectPosition: s.pos } : undefined}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 text-white font-display font-black text-lg uppercase leading-tight">
                    {s.title}
                  </h3>
                </div>
                {/* Text */}
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <span className="text-brand-red font-bold text-sm group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-block bg-brand-navy text-white font-display font-black px-10 py-4 rounded-lg hover:bg-brand-blue transition-colors uppercase tracking-wide"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <HowItWorks />

      {/* ─── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Img
              src={IMG.tech}
              alt="Static Mechanical HVAC technician ready to help — Los Angeles & San Fernando Valley"
              className="w-full h-[480px] object-cover"
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-5 py-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Trusted by</p>
              <p className="font-display font-black text-xl text-brand-navy leading-tight">Homeowners &amp;<br />Businesses Alike</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Why Static Mechanical?</p>
            <h2 id="why-heading" className="font-display text-4xl font-black text-gray-900 uppercase tracking-wide mb-6">
              Your Local HVAC Experts
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              When it comes to heating and cooling in Los Angeles, Glendale, Burbank, and Pasadena,
              Static Mechanical is the name homeowners and businesses trust. Our crews handle everything
              from a single-family furnace repair in the San Fernando Valley to a full commercial
              rooftop change-out — with the same attention to detail on every job.
            </p>

            <ul className="space-y-5">
              {[
                { icon: '⚡', title: 'Fast Response Times',       desc: 'Same-day service so your comfort is never on hold.' },
                { icon: '💰', title: 'Honest, Upfront Pricing',   desc: 'You know the cost before we touch anything. No surprises.' },
                { icon: '🔧', title: 'Professional Workmanship',  desc: 'Licensed, trained technicians who get it right the first time.' },
                { icon: '🏠', title: 'Family-Owned & Local',       desc: 'We live in this community and stand behind every job.' },
              ].map((item) => (
                <li key={item.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-0.5">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/why-choose-us"
              className="inline-block mt-8 bg-brand-red text-white font-bold px-8 py-3 rounded-lg hover:bg-brand-red-lt transition-colors"
            >
              More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ─── SERVICE AREAS ────────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">We Come to You</p>
          <h2 id="areas-heading" className="font-display text-3xl font-black text-gray-900 uppercase tracking-wide mb-4">
            Serving Glendale, Burbank, Pasadena &amp; the Greater Los Angeles Area
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Searching for an HVAC contractor near me? From Glendale and Burbank to Pasadena, East Los
            Angeles, San Fernando, and the rest of the San Fernando Valley — if you're in the{' '}
            <strong className="text-gray-700">818, 626, or 323 area</strong>, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {areas.map((city) => (
              <span
                key={city}
                className="bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-sm font-medium px-4 py-2 rounded-full hover:bg-brand-navy hover:text-white transition-colors"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <CTASection sub="Serving Glendale, Burbank, Pasadena, East Los Angeles, San Fernando & the greater San Fernando Valley — same-day service available." />

      {/* ─── BOTTOM STRIP ─────────────────────────────────────────────────── */}
      <div className="bg-gray-900 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-400">
          <span>🏠 RESIDENTIAL &amp; COMMERCIAL</span>
          <span>🔧 INSTALLATION</span>
          <span>⚙️ REPAIRS &amp; MAINTENANCE</span>
          <span>❄️ COOLING</span>
          <span>🔥 HEATING</span>
        </div>
      </div>
    </>
  );
}
