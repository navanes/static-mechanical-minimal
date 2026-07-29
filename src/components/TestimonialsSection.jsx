// Placeholder testimonials — swap in real customer quotes once available.
const reviews = [
  {
    name: 'John M.',
    location: 'Glendale, CA',
    text: 'Static Mechanical handled our office building\'s rooftop package unit replacement start to finish. Clean install, clear communication, zero downtime for our tenants.',
  },
  {
    name: 'Maria T.',
    location: 'Burbank, CA',
    text: 'Our furnace stopped working on the coldest night of the year. They had a technician at our door by 10 AM and explained everything clearly.',
  },
  {
    name: 'David R.',
    location: 'Sherman Oaks, CA',
    text: "Honest pricing, no upselling, and the crew showed up on time with the right equipment for the job.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 border-t border-line" aria-labelledby="reviews-heading">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-gray-500">WHAT CLIENTS SAY</p>
        <h2 id="reviews-heading" className="mb-12 text-[clamp(32px,3vw,42px)] font-medium leading-tight text-white">Verified feedback.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <article key={r.name} className="pt-6 border-t border-line">
              <blockquote className="text-[15px] leading-relaxed text-gray-300">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <footer className="mt-4 text-[13px]">
                <cite className="not-italic font-medium text-white">{r.name}</cite>
                <span className="text-gray-500"> &mdash; {r.location}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
