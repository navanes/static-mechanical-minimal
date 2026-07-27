import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const PHONE = '818-318-3032';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-md sticky top-0 z-50 bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-3" aria-label="Static Mechanical Inc. — Home">
          <Logo size={60} />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold tracking-tight text-gray-900 uppercase">Static Mechanical</span>
            <span className="text-xs font-semibold text-brand-navy tracking-widest">— HVAC Contractor —</span>
          </div>
        </Link>
        <a
          href={`tel:${PHONE}`}
          className="hidden sm:flex items-center gap-2 bg-brand-red text-white font-bold px-5 py-2 rounded text-sm hover:bg-red-900 transition-colors"
          aria-label={`Call us at ${PHONE}`}
        >
          CALL: {PHONE}
        </a>
        {/* Hamburger */}
        <button
          className="sm:hidden text-gray-700 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <nav className="bg-brand-navy" aria-label="Main navigation">
        <ul className={`max-w-6xl mx-auto flex flex-col sm:flex-row ${open ? '' : 'hidden sm:flex'}`} role="list">
          {[
            { to: '/', label: 'Home' },
            { to: '/services', label: 'Services' },
            { to: '/why-choose-us', label: 'Why Choose Us' },
            { to: '/contact', label: 'Contact Us' },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `block px-6 py-3 text-sm font-semibold transition-colors ${
                    isActive ? 'text-white bg-brand-blue' : 'text-gray-200 hover:text-white hover:bg-brand-blue'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
