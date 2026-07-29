import { Link } from 'react-router-dom';

const PHONE = '818-318-3032';
const PHONE_ALT = '818-699-7654';

function ArrowIcon() {
  return <span className="cta-arrow" aria-hidden="true" />;
}

export default function CTASection({
  heading = "Let's get your comfort handled.",
  sub = 'Call now or request a free quote online.',
}) {
  return (
    <section className="border-t border-line px-6 py-24" aria-labelledby="cta-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="cta-heading" className="mb-4 text-[clamp(36px,4vw,56px)] font-medium leading-[1.05] text-white">
          {heading}
        </h2>
        <p className="mb-8 max-w-xl text-[17px] leading-relaxed text-gray-300">{sub}</p>
        <div className="flex flex-wrap items-stretch gap-5 min-[900px]:gap-7">
          <a
            href={`tel:${PHONE}`}
            className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-lg border border-brand-blue bg-brand-blue px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-blue-lt active:bg-[var(--color-primary-active)] sm:w-auto sm:min-w-56"
            aria-label={`Call Static Mechanical at ${PHONE}`}
          >
            Call {PHONE} <ArrowIcon />
          </a>
          <a
            href={`tel:${PHONE_ALT}`}
            className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-lg border border-brand-blue bg-brand-blue px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-blue-lt active:bg-[var(--color-primary-active)] sm:w-auto sm:min-w-56"
            aria-label={`Call Static Mechanical at ${PHONE_ALT}`}
          >
            Call {PHONE_ALT} <ArrowIcon />
          </a>
          <Link
            to="/contact"
            className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-lg border border-line bg-[rgba(5,8,13,0.30)] px-7 text-base font-semibold text-white backdrop-blur-[6px] transition-colors duration-200 hover:border-[var(--color-border-hover)] hover:bg-[rgba(17,24,33,0.58)]"
          >
            Get a Quote <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
