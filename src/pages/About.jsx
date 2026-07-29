import Img from '../components/Img';
import ScrollGrowImg from '../components/ScrollGrowImg';
import StatsBar from '../components/StatsBar';
import CTASection from '../components/CTASection';
import TestimonialsSection from '../components/TestimonialsSection';
import SEO from '../components/SEO';

const GALLERY = [
  { src: '/images/v2/team-crew.jpg',                label: 'Static Mechanical crew' },
  { src: '/images/v2/project-crane-street.jpg',      label: 'Crane-lift equipment delivery' },
  { src: '/images/v2/project-tech-coil.jpg',         label: 'Cooling tower service' },
  { src: '/images/static-newconstruction.jpg',       label: 'New construction ductwork' },
  { src: '/images/v2/project-rooftop-brazing.jpg',   label: 'Rooftop brazing & install' },
  { src: '/images/gallery-31.jpg',                   label: 'Commercial rooftop system' },
];

const reasons = [
  { title: 'Fast Response Times', desc: "Same-day service and prioritized urgent calls. Most customers see a technician within hours." },
  { title: 'Honest, Upfront Pricing', desc: 'You know the cost before we touch anything. No surprises, no upselling.' },
  { title: 'Professional Workmanship', desc: 'Trained, certified, background-checked technicians on every job.' },
  { title: 'Local & Community-Focused', desc: 'Based in the San Fernando Valley, serving Glendale, Burbank, and Pasadena.' },
  { title: '100% Satisfaction Guaranteed', desc: "If you're not satisfied, we come back and make it right." },
  { title: 'Fully Licensed & Insured', desc: 'California licensed contractor (LIC #1092530), bonded, and insured.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About — Static Mechanical Inc."
        description="Static Mechanical: same-day HVAC service, upfront pricing, licensed & bonded contractor serving Glendale, Burbank & Pasadena. Call 818-318-3032."
        canonical="/about"
        breadcrumb={{ name: 'About', path: '/about' }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-16 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-500 tracking-widest mb-3">WHY STATIC</p>
          <h1 className="text-4xl md:text-5xl text-white mb-10 max-w-xl">
            Mechanical work,<br />done thoughtfully.
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-lg">
            We believe good service should feel simple. You get direct communication, honest
            recommendations, and work completed with care — without pressure or unnecessary noise.
          </p>
        </div>
      </section>

      <StatsBar />

      {/* ─── OUR STORY ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-line">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-xs text-gray-500 tracking-widest mb-3">OUR STORY</p>
            <h2 className="text-3xl text-white mb-6">Built on trust, backed by experience.</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Static Mechanical Inc. was founded with one mission: provide the kind of honest,
              high-quality HVAC contracting that homeowners and businesses in Glendale, Burbank,
              Pasadena, and greater Los Angeles couldn't easily find. No bait-and-switch pricing,
              no scare tactics — just skilled crews who fix the problem and treat every property
              with respect.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From single-family furnace repairs to full commercial rooftop change-outs
              coordinated with crane crews, we bring the same standard of workmanship to every
              job across the San Fernando Valley.
            </p>
          </div>
          <div className="rounded overflow-hidden">
            <ScrollGrowImg
              src="/images/v2/team-crew.jpg"
              alt="Static Mechanical crew on a commercial rooftop — Los Angeles, CA"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── REASONS ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-line" aria-labelledby="reasons-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="reasons-heading" className="text-3xl text-white mb-12">What sets us apart.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {reasons.map((r) => (
              <div key={r.title} className="pt-5 border-t border-line">
                <h3 className="text-white mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-line" aria-labelledby="work-heading">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-500 tracking-widest mb-3">REAL JOBS, REAL RESULTS</p>
          <h2 id="work-heading" className="text-3xl text-white mb-12">Our work in action.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY.map((item) => (
              <div key={item.src} className="relative rounded overflow-hidden group" style={{ aspectRatio: '4/3' }}>
                <Img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-2 left-3 right-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <CTASection
        heading="Experience the Static Mechanical difference."
        sub="Serving Glendale, Burbank, Pasadena, East Los Angeles, San Fernando & the Los Angeles area."
      />
    </>
  );
}
