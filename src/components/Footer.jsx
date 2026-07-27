import { Link } from 'react-router-dom';
import Logo from './Logo';

const PHONE = '818-318-3032';
const PHONE_ALT = '818-699-7654';
const EMAIL = 'Staticmechanicalinc@gmail.com';
const WEBSITE = 'staticmechanicalinc.com';
const YELP_URL = 'https://www.yelp.com/biz/static-mechanical-montrose';
const LICENSE_NO = '1092530';

const serviceLinks = [
  { label: 'AC Repair & Diagnostics',      href: '/services#ac-repair-diagnostics' },
  { label: 'Furnace Repair & Installation', href: '/services#furnace-repair-installation' },
  { label: 'Thermostat Installation',       href: '/services#thermostat-installation' },
  { label: 'Mini Split Systems',            href: '/services#mini-split-systems' },
  { label: 'Full System Change-Outs',       href: '/services#full-system-change-outs' },
  { label: 'Airflow & Efficiency',          href: '/services#airflow-efficiency' },
];

const areas = [
  'Los Angeles', 'Glendale', 'Burbank', 'Pasadena', 'Van Nuys',
  'North Hollywood', 'Sherman Oaks', 'Encino', 'Woodland Hills', 'Northridge',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-4" aria-label="Static Mechanical Inc. — Home">
            <Logo size={52} />
            <div>
              <p className="font-display font-black text-white text-base uppercase leading-tight">Static Mechanical</p>
              <p className="text-xs text-gray-400">HVAC Contractor</p>
            </div>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Full-service mechanical contractor serving residential and commercial clients across
            Los Angeles and the San Fernando Valley. Licensed, bonded, and insured.
          </p>
          <div className="space-y-2 text-sm">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors font-bold">
              <span aria-hidden="true">📞</span> {PHONE}
            </a>
            <a href={`tel:${PHONE_ALT}`} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <span aria-hidden="true">📞</span> {PHONE_ALT}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <span aria-hidden="true">✉️</span> {EMAIL}
            </a>
            <a href={YELP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <span aria-hidden="true">⭐</span> Read Our Yelp Reviews
            </a>
          </div>
        </div>

        {/* Services column */}
        <div>
          <h3 className="font-display font-black text-white uppercase tracking-wide text-sm mb-4">Our Services</h3>
          <ul className="space-y-2">
            {serviceLinks.map(({ label, href }) => (
              <li key={label}>
                <Link to={href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-brand-red text-xs" aria-hidden="true">›</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links + hours */}
        <div>
          <h3 className="font-display font-black text-white uppercase tracking-wide text-sm mb-4">Quick Links</h3>
          <ul className="space-y-2 mb-7">
            {[
              { to: '/',              label: 'Home' },
              { to: '/services',      label: 'Services' },
              { to: '/why-choose-us', label: 'Why Choose Us' },
              { to: '/contact',       label: 'Contact Us' },
              { to: '/contact',       label: 'Get a Free Quote' },
            ].map(({ to, label }) => (
              <li key={label}>
                <Link to={to} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-brand-red text-xs" aria-hidden="true">›</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="font-display font-black text-white uppercase tracking-wide text-sm mb-3">Hours</h3>
          <dl className="space-y-1 text-sm">
            {[
              ['Mon – Fri',  '7 AM – 7 PM'],
              ['Saturday',   '8 AM – 5 PM'],
              ['Sunday',     'Emergency Only'],
            ].map(([day, time]) => (
              <div key={day} className="flex justify-between gap-4">
                <dt className="text-gray-400">{day}</dt>
                <dd className="text-gray-300 font-medium">{time}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Service areas */}
        <div>
          <h3 className="font-display font-black text-white uppercase tracking-wide text-sm mb-4">Service Areas</h3>
          <ul className="flex flex-wrap gap-2">
            {areas.map((city) => (
              <li key={city}>
                <span className="text-xs bg-white/5 border border-white/10 rounded px-2 py-1 text-gray-300">
                  {city}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-4">
            Serving the 818 &amp; 310 area codes and surrounding communities.
          </p>

          {/* Trust badges */}
          <div className="mt-6 pt-5 border-t border-white/10 space-y-1">
            {[`✓ Licensed${LICENSE_NO ? ` — LIC #${LICENSE_NO}` : ''}`, '✓ Fully Bonded & Insured', '✓ Same-Day Service'].map(b => (
              <p key={b} className="text-xs text-green-400 font-medium">{b}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-black/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2026 Static Mechanical Inc. · {WEBSITE}{LICENSE_NO ? ` · LIC #${LICENSE_NO}` : ''}</p>
          <p>Residential &amp; Commercial HVAC Contractor</p>
        </div>
      </div>
    </footer>
  );
}
