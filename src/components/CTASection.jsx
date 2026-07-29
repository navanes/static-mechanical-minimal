import { Link } from 'react-router-dom';

const PHONE = '818-318-3032';
const PHONE_ALT = '818-699-7654';

export default function CTASection({
  heading = "Let's get your comfort handled.",
  sub = 'Call now or request a free quote online.',
}) {
  return (
    <section className="py-24 px-6 border-t border-line" aria-labelledby="cta-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="cta-heading" className="text-4xl md:text-5xl text-white mb-3">
          {heading}
        </h2>
        <p className="text-gray-500 mb-8 max-w-lg">{sub}</p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white text-sm px-7 py-4 rounded hover:bg-brand-blue-lt transition-colors"
            aria-label={`Call Static Mechanical at ${PHONE}`}
          >
            Call {PHONE} <span aria-hidden="true">&gt;</span>
          </a>
          <a
            href={`tel:${PHONE_ALT}`}
            className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white text-sm px-7 py-4 rounded hover:bg-brand-blue-lt transition-colors"
            aria-label={`Call Static Mechanical at ${PHONE_ALT}`}
          >
            Call {PHONE_ALT} <span aria-hidden="true">&gt;</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-line text-white text-sm px-7 py-4 rounded hover:border-white/30 transition-colors"
          >
            Get a Quote <span aria-hidden="true">&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
