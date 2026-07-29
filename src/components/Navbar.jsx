import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

const SERVICE_LINKS = [
  { to: '/services#commercial', label: 'Commercial HVAC' },
  { to: '/services#repair', label: 'AC & Heating Repair' },
  { to: '/services#installation', label: 'HVAC Installation' },
  { to: '/services#maintenance', label: 'Maintenance Plans' },
];

const LINKS = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);
      setHidden(currentY > lastY.current && currentY > 180 && !open);
      lastY.current = currentY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setHidden(false);
  }, [pathname]);

  const headerBg = scrolled || !isHome || open
    ? 'bg-[linear-gradient(to_bottom,rgba(3,6,10,0.84),rgba(3,6,10,0.18))]'
    : 'bg-[linear-gradient(to_bottom,rgba(3,6,10,0.80),rgba(3,6,10,0))]';

  return (
    <header className={`${headerBg} ${hidden ? '-translate-y-full' : 'translate-y-0'} fixed top-0 z-50 w-full transition-transform duration-200`}>
      <div className={`${isHome ? 'px-6 md:px-12' : 'max-w-7xl mx-auto px-6'} flex h-24 items-center justify-between`}>
        <Link to="/" aria-label="Static Mechanical Inc. — Home" onClick={() => setOpen(false)}>
          <Logo size={81} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-24 lg:gap-32" aria-label="Main navigation">
          <div className="group relative py-8">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `relative text-[17px] font-medium transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-brand-blue after:transition-all ${isActive ? 'text-white after:w-full' : 'text-gray-300 hover:text-white after:w-0'}`
              }
            >
              Services
            </NavLink>
            <div className="pointer-events-none absolute left-1/2 top-full w-80 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded bg-[rgba(11,16,23,0.92)] p-3 shadow-xl shadow-black/20">
                {SERVICE_LINKS.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="block rounded px-4 py-3 text-[15px] font-medium text-gray-300 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:bg-white/[0.05]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative text-[17px] font-medium transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-brand-blue after:transition-all ${isActive ? 'text-white after:w-full' : 'text-gray-300 hover:text-white after:w-0'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact#call"
          className="hidden h-12 min-w-40 items-center justify-center rounded-lg border border-white/20 bg-[rgba(5,8,13,0.28)] px-7 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-brand-blue hover:bg-brand-blue active:bg-[var(--color-primary-active)] md:inline-flex"
        >
          Request Service
        </Link>

        {/* Mobile hamburger */}
        <button
          className="min-h-11 min-w-11 p-3 -mr-3 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="bg-[rgba(5,8,13,0.94)] md:hidden" aria-label="Mobile navigation">
          <ul className="max-w-7xl mx-auto px-6 py-3" role="list">
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block border-b border-line py-4 text-base font-medium ${isActive ? 'text-white' : 'text-gray-300'}`
                }
                onClick={() => setOpen(false)}
              >
                Services
              </NavLink>
            </li>
            {SERVICE_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="block border-b border-line py-3 pl-5 text-[15px] text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            {LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `block border-b border-line py-4 text-base font-medium last:border-0 ${isActive ? 'text-white' : 'text-gray-300'}`
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
                className="my-3 block min-h-11 rounded-lg border border-white/20 bg-[rgba(5,8,13,0.28)] px-5 py-3 text-center text-base font-semibold text-white hover:bg-brand-blue"
                onClick={() => setOpen(false)}
              >
                Request Service
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
