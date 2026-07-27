import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PHONE = '818-318-3032';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Static Mechanical Inc.</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <section className="min-h-[70vh] flex items-center justify-center px-4 bg-gray-50">
        <div className="text-center max-w-lg">
          <p className="font-display text-8xl font-black text-brand-navy/10 leading-none mb-2">404</p>
          <h1 className="font-display text-3xl font-black text-gray-900 uppercase tracking-wide mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            Need HVAC help? We're just a call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="bg-brand-navy text-white font-bold px-7 py-3 rounded-lg hover:bg-brand-blue transition-colors"
            >
              ← Back to Home
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="bg-brand-red text-white font-bold px-7 py-3 rounded-lg hover:bg-brand-red-lt transition-colors"
            >
              📞 {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
