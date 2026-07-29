import { useState } from 'react';
import SEO from '../components/SEO';
import { trackEvent } from '../lib/analytics';

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
        trackEvent('generate_lead', { service: form.service || 'unspecified' });
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
    <div className="bg-paper text-ink">
      <SEO
        title="Contact Us — Glendale & Burbank HVAC"
        description="Contact Static Mechanical for same-day HVAC service in Glendale, Burbank & Pasadena. Call 818-318-3032 or request a free quote online."
        canonical="/contact"
        breadcrumb={{ name: 'Contact', path: '/contact' }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-16 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-500 tracking-widest mb-3">START A PROJECT</p>
          <h1 className="text-4xl md:text-5xl mb-14 max-w-xl">
            Let&rsquo;s get your comfort handled.
          </h1>

          <div className="grid sm:grid-cols-2 gap-8">
            <div id="call" className="scroll-mt-24 pt-5 border-t border-gray-300">
              <p className="text-xs text-gray-500 tracking-widest mb-2">CALL</p>
              <a href={`tel:${PHONE}`} className="block text-2xl hover:text-brand-blue transition-colors">
                {PHONE} <span aria-hidden="true">&gt;</span>
              </a>
              <a href={`tel:${PHONE_ALT}`} className="block text-2xl hover:text-brand-blue transition-colors mt-1">
                {PHONE_ALT} <span aria-hidden="true">&gt;</span>
              </a>
            </div>
            <a href={`mailto:${EMAIL}`} className="block pt-5 border-t border-gray-300 group">
              <p className="text-xs text-gray-500 tracking-widest mb-2">EMAIL</p>
              <p className="text-2xl group-hover:text-brand-blue transition-colors break-all">{EMAIL} <span aria-hidden="true">&gt;</span></p>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FORM + DETAILS ───────────────────────────────────────────────── */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          <aside className="lg:col-span-2 space-y-4">
            <div className="bg-white border border-gray-200 rounded p-6">
              <h2 className="mb-4">Hours</h2>
              <dl className="space-y-2.5">
                {hours.map(([day, time]) => (
                  <div key={day} className="flex justify-between text-sm">
                    <dt className="text-gray-500">{day}</dt>
                    <dd className="font-medium">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-white border border-gray-200 rounded p-6">
              <p className="font-medium mb-1">Service Area</p>
              <p className="text-sm text-gray-500">
                Los Angeles, Glendale, Burbank, Pasadena, East Los Angeles, San Fernando &amp; the
                San Fernando Valley, CA
              </p>
            </div>

            <a
              href={YELP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white border border-gray-200 rounded p-6 hover:border-gray-400 transition-colors"
            >
              <span className="font-medium">Read our Yelp reviews</span>
              <span aria-hidden="true">&gt;</span>
            </a>

            <div className="bg-ink text-white rounded p-6">
              <p className="font-medium mb-1">HVAC emergency?</p>
              <p className="text-sm text-gray-400 mb-4">Don&rsquo;t wait — call either number now.</p>
              <div className="space-y-1">
                <a href={`tel:${PHONE}`} className="block text-lg text-white hover:text-brand-blue transition-colors">
                  {PHONE} <span aria-hidden="true">&gt;</span>
                </a>
                <a href={`tel:${PHONE_ALT}`} className="block text-lg text-white hover:text-brand-blue transition-colors">
                  {PHONE_ALT} <span aria-hidden="true">&gt;</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-gray-200 rounded p-8">
            <h2 className="text-2xl mb-2">Request a quote or service</h2>
            <p className="text-gray-500 text-sm mb-7">
              Fill in your details and we&rsquo;ll get back to you within 1 hour during business hours.
            </p>

            {submitted ? (
              <div className="text-center py-14" role="alert" aria-live="polite">
                <h3 className="text-2xl mb-3">Thank you!</h3>
                <p className="text-gray-600 mb-6">
                  We&rsquo;ve received your request and will be in touch shortly.
                </p>
                <p className="text-gray-500 text-sm">
                  For urgent service, call us directly at{' '}
                  <a href={`tel:${PHONE}`} className="text-brand-blue">{PHONE}</a>
                  {' '}or{' '}
                  <a href={`tel:${PHONE_ALT}`} className="text-brand-blue">{PHONE_ALT}</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Service request form" className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Full Name <span className="text-brand-red" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name" type="text" name="name" required
                    value={form.name} onChange={handleChange}
                    aria-required="true" aria-invalid={!!errors.name}
                    className={`w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue transition-shadow ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
                    placeholder="John Smith"
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                      Phone <span className="text-brand-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone" type="tel" name="phone" required
                      value={form.phone} onChange={handleChange}
                      aria-required="true" aria-invalid={!!errors.phone}
                      className={`w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue transition-shadow ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}
                      placeholder="(818) 000-0000"
                      autoComplete="tel"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                    <input
                      id="email" type="email" name="email"
                      value={form.email} onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue transition-shadow"
                      placeholder="you@email.com"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1.5">Service Needed</label>
                  <select
                    id="service" name="service"
                    value={form.service} onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue bg-white"
                  >
                    <option value="">Please select a service</option>
                    {SERVICE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Describe the Problem <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={form.message} onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue resize-none transition-shadow"
                    placeholder="E.g. My AC is not cooling, it makes a rattling sound..."
                  />
                </div>

                {serverError && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded px-4 py-3" role="alert">
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-brand-blue text-white text-sm py-4 rounded hover:bg-brand-blue-lt transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending...' : 'Submit Request'}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  We respond within 1 hour during business hours. For emergencies, call either number above.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
