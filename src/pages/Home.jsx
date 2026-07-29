import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Img from '../components/Img';
import TrustBar from '../components/TrustBar';
import StatsBar from '../components/StatsBar';
import CTASection from '../components/CTASection';

const PHONE = '818-318-3032';
const PHONE_ALT = '818-699-7654';

const services = [
  { num: '01', title: 'Commercial',   desc: 'Rooftop units, controls, airflow, and maintenance for active businesses.', href: '/services#commercial' },
  { num: '02', title: 'Repair',       desc: 'Fast diagnostics and dependable repairs for every major HVAC system.', href: '/services#repair' },
  { num: '03', title: 'Installation', desc: 'High-efficiency equipment selected, sized, and installed with precision.', href: '/services#installation' },
  { num: '04', title: 'Maintenance',  desc: 'Practical preventive care that protects comfort and equipment life.', href: '/services#maintenance' },
];

const work = [
  { img: '/images/v2/project-crane-street.jpg',   category: 'COMMERCIAL', title: 'Rooftop package unit replacement', location: 'GLENDALE, CA' },
  { img: '/images/v2/project-mechanical-room.jpg', category: 'COMMERCIAL', title: 'Chiller plant mechanical room',     location: 'LOS ANGELES, CA' },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Commercial & Residential HVAC — Glendale & Burbank, CA"
        description="Static Mechanical Inc. — commercial & residential HVAC contractor serving Glendale, Burbank, Pasadena & the LA area. Same-day AC & heating repair. Licensed & insured. Call 818-318-3032."
        canonical="/"
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative isolate min-h-screen overflow-hidden px-6 md:px-12"
        aria-label="Hero"
      >
        <img
          src="/images/v2/static-mechanical-homepage-hero.png"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]"
          loading="eager"
          fetchPriority="high"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,8,13,0.88)_0%,rgba(5,8,13,0.66)_32%,rgba(5,8,13,0.18)_68%,rgba(5,8,13,0.08)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,8,13,0.18)_0%,rgba(5,8,13,0)_48%,rgba(5,8,13,0.58)_100%)]" />

        <div className="flex min-h-screen flex-col justify-center pt-32 pb-12 md:pt-36">
          <div className="max-w-3xl">
            <p className="text-xs text-gray-400 tracking-widest mb-4">HVAC / LOS ANGELES</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[1.04] mb-6">
              Comfort, handled.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
              Commercial + residential HVAC across Los Angeles, Glendale, Burbank &amp; Pasadena.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex min-w-48 items-center justify-center gap-2 bg-brand-blue text-white text-sm px-7 py-4 rounded hover:bg-brand-blue-lt transition-colors"
                aria-label={`Call Static Mechanical at ${PHONE}`}
              >
                Call {PHONE} <span aria-hidden="true">&gt;</span>
              </a>
              <a
                href={`tel:${PHONE_ALT}`}
                className="inline-flex min-w-48 items-center justify-center gap-2 bg-brand-blue text-white text-sm px-7 py-4 rounded hover:bg-brand-blue-lt transition-colors"
                aria-label={`Call Static Mechanical at ${PHONE_ALT}`}
              >
                Call {PHONE_ALT} <span aria-hidden="true">&gt;</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex min-w-44 items-center justify-center gap-2 border border-white/35 text-white text-sm px-7 py-4 rounded hover:border-white/70 transition-colors"
              >
                Get a Quote <span aria-hidden="true">&gt;</span>
              </Link>
            </div>

            <TrustBar />
          </div>
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
