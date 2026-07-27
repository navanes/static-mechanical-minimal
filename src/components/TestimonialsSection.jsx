// Placeholder testimonials — swap in real customer quotes once available.
const reviews = [
  {
    name: 'John M.',
    location: 'Glendale, CA',
    stars: 5,
    text: 'Static Mechanical handled our office building\'s rooftop package unit replacement start to finish. Clean install, clear communication, and the crew knew exactly what they were doing. Zero downtime for our tenants.',
  },
  {
    name: 'Maria T.',
    location: 'Burbank, CA',
    stars: 5,
    text: 'Our furnace stopped working on the coldest night of the year. I called Static Mechanical at 7 AM and they had a technician at our door by 10 AM. Fixed it the same day and explained everything clearly.',
  },
  {
    name: 'David R.',
    location: 'Sherman Oaks, CA',
    stars: 5,
    text: "I've worked with a lot of mechanical contractors over the years and Static Mechanical is by far the most professional. Honest pricing, no upselling, and the crew showed up on time with the right equipment for the job.",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-yellow-400 text-lg" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4" aria-labelledby="reviews-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="reviews-heading" className="font-display text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-wide mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Don't just take our word for it — here's what homeowners and businesses across Los Angeles have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article key={r.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <Stars count={r.stars} />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Verified Customer</span>
              </div>
              <blockquote className="text-gray-600 text-sm leading-relaxed flex-1">
                "{r.text}"
              </blockquote>
              <footer className="flex items-center gap-3 pt-2 border-t border-gray-50">
                <div className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold text-sm" aria-hidden="true">
                  {r.name[0]}
                </div>
                <div>
                  <cite className="not-italic font-bold text-gray-900 text-sm">{r.name}</cite>
                  <p className="text-xs text-gray-400">{r.location}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
