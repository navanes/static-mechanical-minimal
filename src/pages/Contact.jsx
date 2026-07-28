import { useState } from 'react';
import TrustBar from '../components/TrustBar';
import SEO from '../components/SEO';

const PHONE = '818-318-3032';
const PHONE_ALT = '818-699-7654';
const EMAIL = 'Staticmechanicalinc@gmail.com';
const YELP_URL = 'https://www.yelp.com/biz/static-mechanical-montrose';

// ─── Formspree ────────────────────────────────────────────────────────────────
// 1. Go to https://formspree.io → New Form → copy your form ID
// 2. Replace 'YOUR_FORM_ID' below with it  (e.g. 'xpwzgkqr')
const FORMSPREE_ID = 'YOUR_FORM_ID';
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;
// ─────────────────────────────────────────────────────────────────────────────

const SERVICE_OPTIONS = [
  'AC Repair & Diagnostics',
  'Furnace Repair & Installation',
  'Thermostat Installation',
  'Mini Split Systems',
  'Full System Change-Out',
  'Airflow & Efficiency Solutions',
  'Maintenance / Tune-Up',
  'Other / General Inquiry',
];

const hours = [
  ['Monday – Friday', '7:00 AM – 7:00 PM'],
  ['Saturday',        '8:00 AM – 5:00 PM'],
  ['Sunday',          'Emergency Calls Only'],
];

export default function Contact() {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState('');
  const [errors, setErrors]   = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = 'Name is required.';
    if (!form.phone.trim()) e.phone = 'Phone is required.';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    // If Formspree ID is not yet set, just show success (dev mode)
    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      setSubmitted(true);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:    form.name,
          phone:   form.phone,
          email:   form.email,
          service: form.service,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setServerError(data?.error || 'Something went wrong. Please call us directly.');
      }
    } catch {
      setServerError('Network error. Please call us at ' + PHONE);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us — Glendale & Burbank HVAC"
        description="Contact Static Mechanical for same-day HVAC service in Glendale, Burbank & Pasadena. Call 818-318-3032 or request a free quote online."
        canonical="/contact"
        breadcrumb={{ name: 'Contact', path: '/contact' }}
      />

      {/* Header */}
      <section
        className="bg-brand-navy py-20 px-4 text-center relative overflow-hidden"
        aria-label="Page header"
      >
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">We're Here to Help</p>
          <h1 className="font-display text-5xl font-black text-white uppercase tracking-wide mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Serving Glendale, Burbank, Pasadena, East Los Angeles, San Fernando &amp; the greater Los
            Angeles area. Call us directly for the fastest response, or fill out the form and we'll
            get back to you within the hour.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10">

          {/* Sidebar — 2/5 */}
          <aside className="lg:col-span-2 space-y-6">
            {/* Call card */}
            <div className="bg-brand-navy text-white rounded-2xl p-7">
              <h2 className="font-display font-black text-xl uppercase tracking-wide mb-5">Get In Touch</h2>
              <address className="not-italic space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center text-lg shrink-0" aria-hidden="true">📞</div>
                  <div>
                    <p className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-0.5">Call or Text</p>
                    <a href={`tel:${PHONE}`} className="inline-block py-2 -my-2 font-display font-black text-xl hover:text-yellow-300 transition-colors">
                      {PHONE}
                    </a>
                    <a href={`tel:${PHONE_ALT}`} className="block py-1.5 -my-1.5 text-sm font-semibold text-blue-200 hover:text-yellow-300 transition-colors">
                      {PHONE_ALT}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-lg shrink-0" aria-hidden="true">✉️</div>
                  <div>
                    <p className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-0.5">Email</p>
                    <a href={`mailto:${EMAIL}`} className="inline-block py-2 -my-2 text-sm font-medium hover:text-yellow-300 transition-colors break-all">
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-brand-blue/60 rounded-xl flex items-center justify-center text-lg shrink-0" aria-hidden="true">📍</div>
                  <div>
                    <p className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-0.5">Service Area</p>
                    <p className="text-sm font-medium">Los Angeles, Glendale, Burbank, Pasadena,
                    East Los Angeles, San Fernando &amp; the San Fernando Valley, CA</p>
                  </div>
                </div>
              </address>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span aria-hidden="true">🕐</span> Hours of Operation
              </h2>
              <dl className="space-y-3">
                {hours.map(([day, time]) => (
                  <div key={day} className="flex justify-between text-sm">
                    <dt className="text-gray-500">{day}</dt>
                    <dd className="font-bold text-gray-900">{time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-400">
                Same-day appointments available. Call for fastest service.
              </p>
            </div>

            {/* Yelp */}
            <a
              href={YELP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:border-yellow-300 transition-colors group"
              aria-label="Read our Yelp reviews"
            >
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-black text-lg shrink-0">
                y!
              </div>
              <div>
                <p className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">Read Our Yelp Reviews</p>
                <p className="text-gray-500 text-sm">See what customers are saying</p>
              </div>
            </a>

            {/* Trust callout */}
            <div className="flex items-center gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700 font-black text-lg shrink-0">
                ✓
              </div>
              <div>
                <p className="font-bold text-gray-900">Licensed, Bonded &amp; Insured</p>
                <p className="text-gray-500 text-sm">Residential &amp; commercial HVAC contractor</p>
              </div>
            </div>

            {/* Emergency callout */}
            <div className="bg-brand-red rounded-2xl p-6 text-white text-center">
              <p className="font-display font-black text-lg uppercase mb-1">HVAC Emergency?</p>
              <p className="text-red-200 text-sm mb-4">Don't wait — call us now.</p>
              <a
                href={`tel:${PHONE}`}
                className="block bg-white text-brand-red font-display font-black text-lg px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                {PHONE}
              </a>
            </div>
          </aside>

          {/* Form — 3/5 */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="font-display font-black text-2xl text-brand-navy uppercase tracking-wide mb-2">
              Request a Quote or Service
            </h2>
            <p className="text-gray-500 text-sm mb-7">
              Fill in your details and we'll get back to you within 1 hour during business hours.
            </p>

            {submitted ? (
              <div className="text-center py-14" role="alert" aria-live="polite">
                <div className="text-6xl mb-5" aria-hidden="true">✅</div>
                <h3 className="font-display font-black text-3xl text-gray-900 uppercase mb-3">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  We've received your request and will be in touch shortly.
                </p>
                <p className="text-gray-500 text-sm">
                  For urgent service, call us directly at{' '}
                  <a href={`tel:${PHONE}`} className="text-brand-red font-bold">{PHONE}</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Service request form" className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-brand-red" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name" type="text" name="name" required
                    value={form.name} onChange={handleChange}
                    aria-required="true" aria-invalid={!!errors.name}
                    className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition-shadow ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                    placeholder="John Smith"
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
                </div>

                {/* Phone + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone <span className="text-brand-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone" type="tel" name="phone" required
                      value={form.phone} onChange={handleChange}
                      aria-required="true" aria-invalid={!!errors.phone}
                      className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition-shadow ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                      placeholder="(818) 000-0000"
                      autoComplete="tel"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                    <input
                      id="email" type="email" name="email"
                      value={form.email} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition-shadow"
                      placeholder="you@email.com"
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">Service Needed</label>
                  <select
                    id="service" name="service"
                    value={form.service} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
                  >
                    <option value="">Please select a service</option>
                    {SERVICE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Describe the Problem <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={form.message} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none transition-shadow"
                    placeholder="E.g. My AC is not cooling, it makes a rattling sound..."
                  />
                </div>

                {serverError && (
                  <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3" role="alert">
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-brand-red text-white font-display font-black text-lg py-4 rounded-lg hover:bg-brand-red-lt transition-colors uppercase tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending...' : 'Submit Request'}
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We respond within 1 hour during business hours. For emergencies, call {PHONE}.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <TrustBar />
    </>
  );
}
