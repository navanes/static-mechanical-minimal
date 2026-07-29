export default function TrustBar({ light = false }) {
  const textColor = light ? 'text-gray-500' : 'text-gray-500';
  return (
    <div className={`flex items-center gap-2 text-xs ${textColor}`}>
      <span className="w-4 h-px bg-brand-red" aria-hidden="true" />
      <span className="tracking-wide">Licensed &bull; Insured &bull; Glendale, Burbank, Pasadena + LA</span>
    </div>
  );
}
