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
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

const areas = ['Los Angeles', 'Glendale', 'Burbank', 'Pasadena', 'East Los Angeles', 'San Fernando'];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#080B11]">
      <div className="max-w-6xl mx-auto grid gap-12 px-6 py-20 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link to="/" aria-label="Static Mechanical Inc. — Home">
            <Logo size={36} />
          </Link>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-gray-300">
            Commercial + residential HVAC contractor serving {areas.join(', ')}, and the greater
            San Fernando Valley. Licensed, bonded, and insured.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-gray-500">NAVIGATE</p>
          <ul className="space-y-3">
            {LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-[15px] text-gray-300 transition-colors hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-gray-500">CONTACT</p>
          <ul className="space-y-3">
            <li>
              <a href={`tel:${PHONE}`} className="text-[15px] font-medium text-white transition-colors hover:text-brand-blue">
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_ALT}`} className="text-[15px] font-medium text-white transition-colors hover:text-brand-blue">
                {PHONE_ALT}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="break-all text-[15px] text-gray-300 transition-colors hover:text-white">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={YELP_URL} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-300 transition-colors hover:text-white">
                Yelp Reviews
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-2 px-6 py-5 text-[13px] text-gray-500 sm:flex-row">
          <p>LIC #{LICENSE_NO} · Glendale, California</p>
          <p>© 2026 Static Mechanical Inc.</p>
        </div>
      </div>
    </footer>
  );
}
