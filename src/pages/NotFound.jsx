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
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <p className="text-8xl text-gray-800 leading-none mb-4">404</p>
          <h1 className="text-3xl text-white mb-4">Page not found</h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
            Need HVAC help? We&rsquo;re just a call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="border border-line text-white text-sm px-7 py-3 rounded hover:border-white/30 transition-colors"
            >
              &larr; Back to Home
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="bg-brand-blue text-white text-sm px-7 py-3 rounded hover:bg-brand-blue-lt transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
