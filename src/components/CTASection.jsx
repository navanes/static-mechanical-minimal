import { Link } from 'react-router-dom';

const PHONE = '818-318-3032';

export default function CTASection({
  heading = 'Ready for Fast, Reliable HVAC Service?',
  sub = 'Call us now or request a free quote online. Same-day service available.',
  showForm = true,
}) {
  return (
    <section
      className="py-16 px-4 text-white"
      style={{ background: 'linear-gradient(135deg, #8B1A1A 0%, #6b1212 100%)' }}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 id="cta-heading" className="font-display text-3xl md:text-4xl font-black uppercase tracking-wide mb-2">
            {heading}
          </h2>
          <p className="text-red-200 max-w-lg">{sub}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-brand-red font-display font-black text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors uppercase tracking-wide text-center"
            aria-label={`Call Static Mechanical at ${PHONE}`}
          >
            📞 {PHONE}
          </a>
          {showForm && (
            <Link
              to="/contact"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-brand-red transition-colors uppercase tracking-wide text-center"
            >
              Get Free Quote
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
