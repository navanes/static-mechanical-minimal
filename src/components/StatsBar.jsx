const stats = [
  { value: 'Licensed',  label: 'Bonded & Insured',            icon: '📋' },
  { value: 'Res. + Comm.', label: 'Full-Service HVAC',        icon: '🏢' },
  { value: 'Same-Day', label: 'Service Available',           icon: '⚡' },
  { value: '100%',     label: 'Satisfaction Guaranteed',     icon: '✅' },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-8 px-4" aria-label="Company statistics">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1">
            <span className="text-2xl" aria-hidden="true">{s.icon}</span>
            <span className="font-display text-3xl font-black text-brand-navy">{s.value}</span>
            <span className="text-sm text-gray-500 font-medium">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
