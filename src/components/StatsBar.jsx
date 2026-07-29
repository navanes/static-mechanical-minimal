const facts = [
  { value: 'Same day',  label: 'SERVICE AVAILABLE' },
  { value: 'Licensed',  label: 'BONDED + INSURED' },
  { value: 'Commercial', label: '+ RESIDENTIAL' },
];

export default function StatsBar() {
  return (
    <section className="py-4 px-6" aria-label="Company facts">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8">
        {facts.map((f) => (
          <div key={f.value} className="pt-6 border-t border-line">
            <p className="text-2xl text-white">{f.value}</p>
            <p className="text-xs text-gray-500 tracking-widest mt-1">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
