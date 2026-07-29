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
    <div className="bg-[linear-gradient(180deg,rgba(5,8,13,0.28),rgba(5,8,13,0.70))] text-white">
      <SEO
        title="Contact Us — Glendale & Burbank HVAC"
        description="Contact Static Mechanical for same-day HVAC service in Glendale, Burbank & Pasadena. Call 818-318-3032 or request a free quote online."
        canonical="/contact"
        breadcrumb={{ name: 'Contact', path: '/contact' }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-12 pt-16">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-gray-500">START A PROJECT</p>
          <h1 className="mb-6 max-w-3xl text-[42px] font-medium leading-[1.04] tracking-[-0.025em] text-white md:text-[clamp(52px,5vw,64px)]">
            Let&rsquo;s get your comfort handled.
          </h1>
          <p className="mb-12 max-w-2xl text-[17px] leading-relaxed text-gray-300">
            Tell us what is happening with your system. We respond quickly during business hours and keep both partner lines available for urgent calls.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            <div id="call" className="scroll-mt-28 rounded border border-line bg-[rgba(11,16,23,0.78)] p-6 backdrop-blur">
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-gray-500">CALL</p>
              <a href={`tel:${PHONE}`} className="block text-[24px] font-semibold leading-snug text-white transition-colors hover:text-brand-blue">
                {PHONE} <span aria-hidden="true">&gt;</span>
              </a>
              <a href={`tel:${PHONE_ALT}`} className="mt-2 block text-[22px] font-medium leading-snug text-gray-300 transition-colors hover:text-brand-blue">
                {PHONE_ALT} <span aria-hidden="true">&gt;</span>
              </a>
            </div>
            <a href={`mailto:${EMAIL}`} className="group block rounded border border-line bg-[rgba(11,16,23,0.78)] p-6 backdrop-blur">
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-gray-500">EMAIL</p>
              <p className="break-all text-[22px] font-semibold leading-snug text-white transition-colors group-hover:text-brand-blue md:text-2xl">{EMAIL} <span aria-hidden="true">&gt;</span></p>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FORM + DETAILS ───────────────────────────────────────────────── */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          <aside className="lg:col-span-2 space-y-4">
            <div className="rounded border border-line bg-[rgba(11,16,23,0.78)] p-6 text-white backdrop-blur">
              <h2 className="mb-5 text-[24px] font-semibold">Hours</h2>
              <dl className="space-y-2.5">
                {hours.map(([day, time]) => (
                  <div key={day} className="flex justify-between gap-4 text-[15px]">
                    <dt className="text-gray-300">{day}</dt>
                    <dd className="font-medium text-gray-100">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded border border-line bg-[rgba(11,16,23,0.78)] p-6 text-white backdrop-blur">
              <p className="mb-2 text-[24px] font-semibold">Service Area</p>
              <p className="text-[15px] leading-relaxed text-gray-300">
                Los Angeles, Glendale, Burbank, Pasadena, East Los Angeles, San Fernando &amp; the
                San Fernando Valley, CA
              </p>
            </div>

            <a
              href={YELP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded border border-line bg-[rgba(11,16,23,0.78)] p-6 text-white backdrop-blur transition-colors hover:border-brand-blue/60"
            >
              <span className="font-semibold">Read our Yelp reviews</span>
              <span aria-hidden="true">&gt;</span>
            </a>

            <div className="rounded border border-white/10 bg-brand-blue text-white p-6">
              <p className="mb-1 text-[24px] font-semibold">HVAC emergency?</p>
              <p className="text-[15px] leading-relaxed text-white/85">Use the call options at the top of this page for urgent service.</p>
            </div>
          </aside>

          {/* Form */}
          <div className="rounded border border-line bg-[rgba(11,16,23,0.82)] p-8 text-white backdrop-blur md:p-10 lg:col-span-3">
            <h2 className="mb-2 text-[26px] font-semibold leading-tight md:text-[32px]">Request a quote or service</h2>
            <p className="mb-7 text-[15px] leading-relaxed text-gray-300">
              Fill in your details and we&rsquo;ll get back to you within 1 hour during business hours.
            </p>

            {submitted ? (
              <div className="text-center py-14" role="alert" aria-live="polite">
                <h3 className="mb-3 text-[26px] font-semibold">Thank you!</h3>
                <p className="text-gray-300 mb-6">
                  We&rsquo;ve received your request and will be in touch shortly.
                </p>
                <p className="text-gray-400 text-sm">
                  For urgent service, use the call options at the top of this page.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Service request form" className="space-y-5">
                <div>
                <label htmlFor="name" className="mb-1.5 block text-[14px] font-medium text-gray-300">
                    Full Name <span className="text-brand-red" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name" type="text" name="name" required
                    value={form.name} onChange={handleChange}
                    aria-required="true" aria-invalid={!!errors.name}
                    className={`w-full rounded border bg-white/5 px-4 py-3 text-base text-white placeholder:text-[#7F8A96] transition-shadow focus:outline-none focus:ring-2 focus:ring-[#93C5FD] ${errors.name ? 'border-red-400' : 'border-white/20'}`}
                    placeholder="John Smith"
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-[14px] font-medium text-gray-300">
                      Phone <span className="text-brand-red" aria-hidden="true">*</span>
                    </label>
                    <input
                    id="phone" type="tel" name="phone" required
                    value={form.phone} onChange={handleChange}
                    aria-required="true" aria-invalid={!!errors.phone}
                      className={`w-full rounded border bg-white/5 px-4 py-3 text-base text-white placeholder:text-[#7F8A96] transition-shadow focus:outline-none focus:ring-2 focus:ring-[#93C5FD] ${errors.phone ? 'border-red-400' : 'border-white/20'}`}
                      placeholder="(818) 000-0000"
                      autoComplete="tel"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-[14px] font-medium text-gray-300">Email</label>
                    <input
                      id="email" type="email" name="email"
                      value={form.email} onChange={handleChange}
                      className="w-full rounded border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-[#7F8A96] transition-shadow focus:outline-none focus:ring-2 focus:ring-[#93C5FD]"
                      placeholder="you@email.com"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-[14px] font-medium text-gray-300">Service Needed</label>
                  <select
                    id="service" name="service"
                    value={form.service} onChange={handleChange}
                    className="w-full rounded border border-white/20 bg-ink px-4 py-3 text-base text-white focus:outline-none focus:ring-2 focus:ring-[#93C5FD]"
                  >
                    <option value="">Please select a service</option>
                    {SERVICE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-[14px] font-medium text-gray-300">
                    Describe the Problem <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={form.message} onChange={handleChange}
                    className="w-full resize-none rounded border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-[#7F8A96] transition-shadow focus:outline-none focus:ring-2 focus:ring-[#93C5FD]"
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
                  className="min-h-[52px] w-full rounded bg-brand-blue text-base font-semibold text-white transition-colors hover:bg-brand-blue-lt active:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? 'Sending...' : 'Submit Request'}
                </button>
                <p className="text-center text-[13px] text-gray-500">
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
