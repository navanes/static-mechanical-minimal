import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Img from '../components/Img';
import TrustBar from '../components/TrustBar';
import StatsBar from '../components/StatsBar';
import CTASection from '../components/CTASection';

const PHONE = '818-699-7654';

function ArrowIcon() {
  return <span className="cta-arrow" aria-hidden="true" />;
}

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

// This background (photo + gradient layers) is deliberately scoped to this page's
// own wrapper, not the global <body>: an earlier version set it on <body>, which
// meant it bled through the top of every other route (Services, Projects, About,
// Contact) since those pages don't have opaque section backgrounds of their own.
const HOME_BACKGROUND = {
  backgroundImage: [
    'linear-gradient(90deg, rgba(3,7,12,0.96) 0%, rgba(3,7,12,0.86) 29%, rgba(3,7,12,0.42) 57%, rgba(3,7,12,0.12) 100%)',
    'linear-gradient(180deg, rgba(2,5,9,0.35) 0%, rgba(2,5,9,0.05) 55%, rgba(2,5,9,0.42) 100%)',
    "url('/images/v2/static-mechanical-homepage-hero.png')",
  ].join(', '),
  backgroundSize: 'cover',
  backgroundPosition: '62% center, 62% center, 62% center',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
};

export default function Home() {
  return (
    <div style={HOME_BACKGROUND}>
      <SEO
        title="Commercial & Residential HVAC — Greater Los Angeles, CA"
        description="Static Mechanical Inc. — commercial & residential HVAC contractor serving the greater Los Angeles area and surrounding communities. English, Armenian & Persian/Farsi speaking AC service. Call 818-699-7654."
        canonical="/"
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative isolate min-h-screen overflow-hidden px-6 min-[480px]:px-8 md:px-12"
        aria-label="Hero"
      >
        <div className="flex min-h-screen flex-col justify-center pt-36 pb-12 md:pt-40">
          <div className="max-w-[950px]">
            <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-gray-400">HVAC / LOS ANGELES</p>
            <h1 className="mb-6 max-w-[950px] text-[clamp(4.5rem,6.6vw,7rem)] font-normal leading-[0.96] tracking-[-0.045em] text-white max-[767px]:text-[clamp(3.25rem,15vw,4rem)]">
              Comfort, handled.
            </h1>
            <p className="mb-9 max-w-[720px] text-[clamp(1.05rem,1.25vw,1.25rem)] font-normal leading-[1.55] text-gray-300">
              Commercial + residential HVAC across the greater Los Angeles area and surrounding communities.
            </p>

            <div className="mb-16 flex flex-wrap items-stretch gap-5 min-[900px]:gap-7">
              <a
                href={`tel:${PHONE}`}
                className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-lg border border-brand-blue bg-brand-blue px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-blue-lt active:bg-[var(--color-primary-active)] min-[520px]:w-auto min-[520px]:min-w-56"
                aria-label={`Call Static Mechanical at ${PHONE}`}
              >
                Call {PHONE} <ArrowIcon />
              </a>
              <Link
                to="/contact"
                className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-lg border border-line bg-[rgba(5,8,13,0.30)] px-7 text-base font-semibold text-white backdrop-blur-[6px] transition-colors duration-200 hover:border-[var(--color-border-hover)] hover:bg-[rgba(17,24,33,0.58)] min-[480px]:w-auto min-[480px]:min-w-52"
              >
                Get a Quote <ArrowIcon />
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
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-gray-400">SERVICES</p>
          <h2 id="services-heading" className="mb-14 max-w-lg text-[clamp(36px,4vw,56px)] font-medium leading-[1.06] text-white">
            What we handle.
          </h2>

          <div>
            {services.map((s) => (
              <Link
                key={s.num}
                to={s.href}
                className="group flex items-center gap-8 py-7 border-t border-white/10 last:border-b hover:bg-white/[0.025] transition-colors -mx-6 px-6"
              >
                <span className="w-6 shrink-0 text-[13px] font-semibold text-brand-red">{s.num}</span>
                <span className="w-48 shrink-0 text-[26px] font-semibold leading-tight text-white md:w-64 md:text-[32px]">{s.title}</span>
                <span className="hidden md:block text-base text-gray-400 leading-relaxed flex-1">{s.desc}</span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-gray-400 transition-colors group-hover:border-white/30 group-hover:text-white" aria-hidden="true">
                  &gt;
                </span>
              </Link>
            ))}
          </div>

          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-gray-100 mt-10 hover:text-brand-blue transition-colors">
            View all services <span aria-hidden="true">&gt;</span>
          </Link>
        </div>
      </section>

      {/* ─── SELECTED WORK PREVIEW ────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-line" aria-labelledby="work-heading">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-gray-400">SELECTED WORK</p>
          <h2 id="work-heading" className="mb-14 max-w-lg text-[clamp(36px,4vw,56px)] font-medium leading-[1.06] text-white">
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
                <p className="mt-5 text-[13px] font-semibold tracking-[0.18em] text-gray-400">{w.category}</p>
                <p className="mt-1 text-[22px] font-semibold leading-snug text-white">{w.title}</p>
                <p className="mt-1 text-[13px] text-gray-500">{w.location}</p>
              </Link>
            ))}
          </div>

          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-gray-100 mt-10 hover:text-brand-blue transition-colors">
            View all projects <span aria-hidden="true">&gt;</span>
          </Link>
        </div>
      </section>

      <CTASection sub="Serving the greater Los Angeles area, Los Angeles County, and surrounding communities. English, Armenian & Persian/Farsi speaking service." />
    </div>
  );
}
