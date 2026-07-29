export default function TrustBar({ light = false }) {
  const textColor = light ? 'text-gray-500' : 'text-gray-400';
  return (
    <div className={`flex items-center gap-3 text-[13px] leading-relaxed ${textColor}`}>
      <span className="w-4 h-px bg-brand-red" aria-hidden="true" />
      <span className="tracking-wide">Licensed &bull; Insured &bull; Glendale, Burbank, Pasadena + LA</span>
    </div>
  );
}
