import { Link } from 'react-router-dom';
import Logo from './Logo';

const PHONE = '818-318-3032';
const PHONE_ALT = '818-699-7654';
const EMAIL = 'Staticmechanicalinc@gmail.com';
const YELP_URL = 'https://www.yelp.com/biz/static-mechanical-montrose';
const LICENSE_NO = '1092530';

const LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const areas = ['Los Angeles', 'Glendale', 'Burbank', 'Pasadena', 'East Los Angeles', 'San Fernando'];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link to="/" aria-label="Static Mechanical Inc. — Home">
            <Logo size={36} />
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed mt-5 max-w-sm">
            Residential + commercial HVAC contractor serving {areas.join(', ')}, and the greater
            San Fernando Valley. Licensed, bonded, and insured.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs text-gray-500 tracking-widest mb-4">NAVIGATE</p>
          <ul className="space-y-3">
            {LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs text-gray-500 tracking-widest mb-4">CONTACT</p>
          <ul className="space-y-3">
            <li>
              <a href={`tel:${PHONE}`} className="text-sm text-white hover:text-brand-blue transition-colors">
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_ALT}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                {PHONE_ALT}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="text-sm text-gray-400 hover:text-white transition-colors break-all">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={YELP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                Yelp Reviews
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>LIC #{LICENSE_NO} · Glendale, California</p>
          <p>© 2026 Static Mechanical Inc.</p>
        </div>
      </div>
    </footer>
  );
}
