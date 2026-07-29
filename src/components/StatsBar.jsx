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
            <p className="text-[26px] font-medium leading-tight text-white">{f.value}</p>
            <p className="mt-2 text-xs font-semibold tracking-[0.16em] text-gray-500">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
