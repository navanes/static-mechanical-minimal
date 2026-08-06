import { Link } from 'react-router-dom';
import Logo from './Logo';
import { InstagramIcon, YelpIcon } from './SocialIcon';

const PHONE = '818-699-7654';
const PHONE_ALT = '818-318-3032';
const EMAIL = 'Staticmechanicalinc@gmail.com';
const YELP_URL = 'https://www.yelp.com/biz/static-mechanical-montrose';
const INSTAGRAM_URL = 'https://www.instagram.com/static_mechanical/';
const LICENSE_NO = '1092530';

const LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

const languages = ['English', 'Armenian', 'Persian/Farsi'];

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
            Commercial + residential HVAC contractor serving the greater Los Angeles area,
            Los Angeles County, and surrounding communities. Licensed, bonded, and insured.
          </p>
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-gray-500">
            Service available in {languages.join(', ')}.
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
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">Main line</p>
              <a href={`tel:${PHONE}`} className="text-[15px] font-medium text-white transition-colors hover:text-brand-blue">
                {PHONE}
              </a>
            </li>
            <li>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">Service line</p>
              <a href={`tel:${PHONE_ALT}`} className="text-[15px] font-medium text-white transition-colors hover:text-brand-blue">
                {PHONE_ALT}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="break-all text-[15px] text-gray-300 transition-colors hover:text-white">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="mb-8 h-px w-full bg-white/10" />
          <div className="mb-8 flex items-center justify-center gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-gray-100 transition-colors hover:border-brand-blue hover:bg-brand-blue hover:text-white"
              aria-label="Open Static Mechanical Instagram"
            >
              <InstagramIcon className="h-8 w-8" />
            </a>
            <a
              href={YELP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-gray-100 transition-colors hover:border-brand-blue hover:bg-brand-blue hover:text-white"
              aria-label="Open Static Mechanical Yelp reviews"
            >
              <YelpIcon className="h-8 w-8" />
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-3 px-6 pb-7 text-[13px] text-gray-500 sm:flex-row">
          <p>LIC #{LICENSE_NO} · California</p>
          <p>All Rights Reserved 2026 © Static Mechanical Inc.</p>
        </div>
      </div>
    </footer>
  );
}
