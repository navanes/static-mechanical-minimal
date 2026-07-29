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
        <p className="text-xs text-gray-500 tracking-widest mb-3">WHAT CLIENTS SAY</p>
        <h2 id="reviews-heading" className="text-3xl text-white mb-12">Verified feedback.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <article key={r.name} className="pt-6 border-t border-line">
              <blockquote className="text-gray-400 text-sm leading-relaxed">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <footer className="mt-4 text-sm">
                <cite className="not-italic text-white">{r.name}</cite>
                <span className="text-gray-500"> &mdash; {r.location}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
