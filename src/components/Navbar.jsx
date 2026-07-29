import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

const LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <header className={`${isHome ? 'absolute bg-transparent border-transparent' : 'sticky bg-ink/90 backdrop-blur-sm border-line'} top-0 z-50 w-full border-b`}>
      <div className={`${isHome ? 'px-6 md:px-12' : 'max-w-6xl mx-auto px-6'} flex items-center justify-between h-20`}>
        <Link to="/" aria-label="Static Mechanical Inc. — Home" onClick={() => setOpen(false)}>
          <Logo size={40} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact#call"
          className="hidden md:inline-flex items-center gap-2 text-sm text-white border border-line rounded-full px-5 py-2.5 hover:border-white/30 transition-colors"
        >
          Call us
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-line bg-ink/95 backdrop-blur-sm" aria-label="Mobile navigation">
          <ul className="max-w-6xl mx-auto px-6 py-2" role="list">
            {LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `block py-3.5 text-base border-b border-line last:border-0 ${isActive ? 'text-white' : 'text-gray-400'}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/contact#call"
                className="block py-4 text-base text-white font-medium"
                onClick={() => setOpen(false)}
              >
                Call us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
