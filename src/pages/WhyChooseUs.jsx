import { Link } from 'react-router-dom';
import Img from '../components/Img';
import ScrollGrowImg from '../components/ScrollGrowImg';
import TrustBar from '../components/TrustBar';
import CTASection from '../components/CTASection';
import TestimonialsSection from '../components/TestimonialsSection';
import SEO from '../components/SEO';

const PHONE = '818-318-3032';

const IMG = {
  team: '/images/static-crane-delivery.jpg',
};

const GALLERY = [
  { src: '/images/static-hero.jpg',            label: 'Commercial Rooftop Package Units — Los Angeles, CA' },
  { src: '/images/static-crane-delivery.jpg',  label: 'Crane-Lift Equipment Delivery — Glendale, CA' },
  { src: '/images/static-newconstruction.jpg', label: 'New Construction Roof Curbs — Burbank, CA' },
  { src: '/images/static-furnace.jpg',         label: 'Gas Furnace Installation — Pasadena, CA' },
  { src: '/images/work1.jpg',      label: 'Air Handler Installation — East Los Angeles, CA' },
  { src: '/images/work2.jpg',      label: 'Rooftop Package Unit — San Fernando, CA' },
  { src: '/images/gallery-30.jpg', label: 'New Construction Ductwork' },
  { src: '/images/gallery-31.jpg', label: 'Commercial Rooftop System' },
  { src: '/images/gallery-32.jpg', label: 'Duct System Installation' },
  { src: '/images/gallery-33.jpg', label: 'Attic Ductwork & Furnace' },
  { src: '/images/gallery-34.jpg', label: 'Flexible Duct Routing' },
  { src: '/images/gallery-35.jpg', label: 'Commercial Air Handler' },
];

const reasons = [
  {
    icon: '⚡',
    title: 'Fast Response Times',
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-brand-blue',
    desc: 'We know HVAC problems don\'t wait for convenient times. That\'s why we offer same-day service and prioritize urgent calls. Most customers see a technician within hours of calling.',
  },
  {
    icon: '💰',
    title: 'Honest, Upfront Pricing',
    color: 'bg-red-50 border-red-100',
    iconBg: 'bg-brand-red',
    desc: "We quote you before we wrench. No surprises on the bill, no upselling you services you don't need. You'll know exactly what you're paying before we start — and that price doesn't change.",
  },
  {
    icon: '🔧',
    title: 'Professional Workmanship',
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-brand-blue',
    desc: 'Every Static Mechanical technician is trained, certified, and background-checked. We invest in ongoing education to stay current with the latest HVAC technology, ensuring top-quality work on every job.',
  },
  {
    icon: '🏠',
    title: 'Local & Community-Focused',
    color: 'bg-red-50 border-red-100',
    iconBg: 'bg-brand-red',
    desc: "Static Mechanical is based right here in the San Fernando Valley, serving Glendale, Burbank, and Pasadena. We show up, we stand behind our work, and we treat every home and building the way we'd want ours treated.",
  },
  {
    icon: '✅',
    title: '100% Satisfaction Guaranteed',
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-brand-blue',
    desc: "If you're not completely satisfied with our work, we'll come back and make it right. No arguments, no runaround. Your satisfaction is the only outcome we'll accept.",
  },
  {
    icon: '📋',
    title: 'Fully Licensed & Insured',
    color: 'bg-red-50 border-red-100',
    iconBg: 'bg-brand-red',
    desc: 'Static Mechanical is licensed by the State of California (LIC #1092530), fully bonded, and insured. Hiring an unlicensed contractor is a serious legal and financial risk — we protect you completely.',
  },
];

const credentials = [
  { label: 'State License',        value: 'LIC #1092530' },
  { label: 'Status',               value: 'Fully Bonded & Insured' },
  { label: 'Service Area',         value: 'LA, Glendale, Burbank & SFV' },
  { label: 'Technician Training',  value: 'Factory-Certified' },
  { label: 'Background Checks',    value: 'All Staff' },
  { label: 'Satisfaction',         value: '100% Guaranteed' },
];

export default function WhyChooseUs() {
  return (
    <>
      <SEO
        title="Why Choose Us — Glendale & Burbank HVAC"
        description="Static Mechanical: same-day HVAC service, upfront pricing, licensed & bonded contractor serving Glendale, Burbank & Pasadena. Call 818-318-3032."
        canonical="/why-choose-us"
        breadcrumb={{ name: 'Why Choose Us', path: '/why-choose-us' }}
      />

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
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">Why Static Mechanical?</p>
          <h1 className="font-display text-5xl font-black text-white uppercase tracking-wide mb-4">Your Local HVAC Experts in Glendale &amp; Burbank</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Trusted by homeowners and businesses across Los Angeles, Glendale, Burbank, Pasadena, East
            Los Angeles, San Fernando &amp; the San Fernando Valley.
          </p>
        </div>
      </section>

      {/* Intro + photo */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">Our Story</p>
            <h2 className="font-display text-4xl font-black text-gray-900 uppercase tracking-wide mb-5">
              Built on Trust,<br />Backed by Experience
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Static Mechanical Inc. was founded with one mission: provide the kind of honest,
              high-quality HVAC contracting that homeowners and businesses in Glendale, Burbank,
              Pasadena, and greater Los Angeles couldn't easily find. No bait-and-switch pricing,
              no scare tactics — just skilled crews who fix the problem and treat every property
              with respect.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From single-family furnace repairs in San Fernando to full commercial rooftop
              change-outs in East Los Angeles coordinated with crane crews, we bring the same
              standard of workmanship to every job across the San Fernando Valley — still local,
              and still showing up same-day when your comfort is on the line.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ScrollGrowImg src={IMG.team} alt="Static Mechanical crew delivering new rooftop HVAC units — Los Angeles, CA" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* 6 reasons grid */}
      <section className="bg-gray-50 py-16 px-4" aria-labelledby="reasons-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">What Sets Us Apart</p>
            <h2 id="reasons-heading" className="font-display text-4xl font-black text-gray-900 uppercase tracking-wide">
              6 Reasons Customers Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className={`rounded-2xl border p-7 ${r.color}`}>
                <div className={`w-12 h-12 rounded-xl ${r.iconBg} flex items-center justify-center text-xl text-white mb-4`} aria-hidden="true">
                  {r.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials table */}
      <section className="bg-white py-16 px-4" aria-labelledby="creds-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Verified &amp; Certified</p>
            <h2 id="creds-heading" className="font-display text-3xl font-black text-gray-900 uppercase tracking-wide">
              Our Credentials
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((c) => (
              <div key={c.label} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
                <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm shrink-0">✓</span>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{c.label}</p>
                  <p className="font-bold text-gray-900 text-sm">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work photos gallery */}
      <section className="bg-gray-50 py-16 px-4" aria-labelledby="work-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Real Jobs. Real Results.</p>
            <h2 id="work-heading" className="font-display text-3xl font-black text-gray-900 uppercase tracking-wide">
              Our Work in Action
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY.map((item) => (
              <div key={item.src} className="relative rounded-xl overflow-hidden shadow-md group" style={{ aspectRatio: '4/3' }}>
                <Img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-2 left-3 right-3 text-white text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      <TrustBar />
      <CTASection
        heading="Experience the Static Mechanical Difference"
        sub="Serving Glendale, Burbank, Pasadena, East Los Angeles, San Fernando & the Los Angeles area — call today for fast, honest HVAC service you can count on."
      />
    </>
  );
}
