const steps = [
  {
    step: '01',
    title: 'Call or Request Online',
    desc: 'Call us at 818-318-3032 or submit our quick online form. We respond within the hour during business hours.',
    icon: '📞',
  },
  {
    step: '02',
    title: 'We Arrive Same Day',
    desc: 'A licensed, uniformed technician arrives at your home or business — fully equipped to diagnose and fix the problem.',
    icon: '🚚',
  },
  {
    step: '03',
    title: 'Problem Solved, Guaranteed',
    desc: 'We give you an upfront price, complete the work, and guarantee our service. You\'re comfortable again — fast.',
    icon: '✅',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-brand-navy py-16 px-4" aria-labelledby="hiw-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="hiw-heading" className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wide mb-3">
            How It Works
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto">
            Getting your HVAC fixed is simple. Here's what to expect when you call Static Mechanical.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-brand-blue" aria-hidden="true" />

          {steps.map((s, i) => (
            <div key={s.step} className="relative flex flex-col items-center text-center">
              {/* Step bubble */}
              <div className="w-20 h-20 rounded-full bg-brand-red flex items-center justify-center text-3xl mb-5 shadow-lg z-10">
                {s.icon}
              </div>
              <span className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-1">Step {s.step}</span>
              <h3 className="text-xl font-display font-black text-white uppercase mb-3">{s.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
