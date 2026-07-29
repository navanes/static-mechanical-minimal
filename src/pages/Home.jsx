import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Img from '../components/Img';
import TrustBar from '../components/TrustBar';
import StatsBar from '../components/StatsBar';
import CTASection from '../components/CTASection';

const PHONE = '818-318-3032';
const PHONE_ALT = '818-699-7654';

const services = [
  { num: '01', title: 'Repair',       desc: 'Fast diagnostics and dependable repairs for every major HVAC system.', href: '/services#repair' },
  { num: '02', title: 'Installation', desc: 'High-efficiency equipment selected, sized, and installed with precision.', href: '/services#installation' },
  { num: '03', title: 'Commercial',   desc: 'Rooftop units, controls, airflow, and maintenance for active businesses.', href: '/services#commercial' },
  { num: '04', title: 'Maintenance',  desc: 'Practical preventive care that protects comfort and equipment life.', href: '/services#maintenance' },
];

const work = [
  { img: '/images/v2/project-crane-street.jpg', category: 'COMMERCIAL', title: 'Rooftop package unit replacement', location: 'GLENDALE, CA' },
  { img: '/images/v2/project-condenser-row.jpg', category: 'RESIDENTIAL', title: 'High-efficiency comfort upgrade', location: 'BURBANK, CA' },
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
      <section className="grid md:grid-cols-2" aria-label="Hero">
        <div className="flex flex-col justify-center px-6 md:px-12 py-16 md:py-0 md:min-h-[80vh] order-2 md:order-1">
          <p className="text-xs text-gray-500 tracking-widest mb-4">HVAC / LOS ANGELES</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            Comfort,<br />handled.
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Residential + commercial HVAC across Los Angeles, Glendale, Burbank &amp; Pasadena.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white text-sm px-7 py-4 rounded hover:bg-brand-blue-lt transition-colors"
              aria-label={`Call Static Mechanical at ${PHONE}`}
            >
              Call {PHONE} <span aria-hidden="true">&gt;</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-line text-white text-sm px-7 py-4 rounded hover:border-white/30 transition-colors"
            >
              Get a Quote <span aria-hidden="true">&gt;</span>
            </Link>
          </div>
          <p className="text-xs text-gray-600 mb-8">or call {PHONE_ALT}</p>

          <TrustBar />
        </div>

        <div className="order-1 md:order-2 h-[45vh] md:h-auto">
          <Img
            src="/images/v2/hero-rooftop-glass-dark.jpg"
            alt="Static Mechanical Inc. — commercial rooftop HVAC package unit, Los Angeles, CA"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </section>

      <StatsBar />

      {/* ─── SERVICES PREVIEW ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-line" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-500 tracking-widest mb-3">SERVICES</p>
          <h2 id="services-heading" className="text-4xl text-white mb-14 max-w-lg">
            What we handle.
          </h2>

          <div>
            {services.map((s) => (
              <Link
                key={s.num}
                to={s.href}
                className="group flex items-center gap-6 py-6 border-t border-line last:border-b hover:bg-white/[0.02] transition-colors -mx-6 px-6"
              >
                <span className="text-brand-red text-xs w-6 shrink-0">{s.num}</span>
                <span className="text-2xl md:text-3xl text-white w-48 md:w-64 shrink-0">{s.title}</span>
                <span className="hidden md:block text-sm text-gray-500 flex-1">{s.desc}</span>
                <span className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-gray-400 group-hover:border-white/30 group-hover:text-white transition-colors shrink-0" aria-hidden="true">
                  &gt;
                </span>
              </Link>
            ))}
          </div>

          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white mt-10 hover:text-brand-blue transition-colors">
            View all services <span aria-hidden="true">&gt;</span>
          </Link>
        </div>
      </section>

      {/* ─── SELECTED WORK PREVIEW ────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-line" aria-labelledby="work-heading">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-500 tracking-widest mb-3">SELECTED WORK</p>
          <h2 id="work-heading" className="text-4xl text-white mb-14 max-w-lg">
            Quiet systems. Visible results.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {work.map((w) => (
              <Link key={w.title} to="/projects" className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded bg-surface">
                  <Img
                    src={w.img}
                    alt={`${w.title} — ${w.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs text-gray-500 tracking-widest mt-5">{w.category}</p>
                <p className="text-xl text-white mt-1">{w.title}</p>
                <p className="text-xs text-gray-500 mt-1">{w.location}</p>
              </Link>
            ))}
          </div>

          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-white mt-10 hover:text-brand-blue transition-colors">
            View all projects <span aria-hidden="true">&gt;</span>
          </Link>
        </div>
      </section>

      <CTASection sub="Serving Glendale, Burbank, Pasadena, East Los Angeles, San Fernando & the greater San Fernando Valley." />
    </>
  );
}
