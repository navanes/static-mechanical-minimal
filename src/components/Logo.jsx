// Two logo treatments, matching the brand's two marks:
// - "wordmark" — plain letter-spaced text lockup (matches the reference design's nav/header
//   treatment exactly), scales perfectly at any size, no image needed.
// - "emblem" — the actual designed mark (icon + flag graphic), for spots that want the fuller
//   brand identity: footer, About page. Comes in light/dark variants for the two theme modes.
export default function Logo({ variant = 'wordmark', theme = 'dark', size = 48, className = '' }) {
  if (variant === 'emblem') {
    const src = theme === 'dark' ? '/images/logo2/logo-white-full.png' : '/images/logo2/logo-dark-full.png';
    return (
      <img
        src={src}
        alt="Static Mechanical Inc. logo"
        style={{ height: size, width: 'auto' }}
        className={className}
      />
    );
  }

  const textColor = theme === 'dark' ? 'text-white' : 'text-ink';
  const subColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const mainSize = Math.max(18, Math.round(size * 0.42));
  const subSize = Math.max(10, Math.round(size * 0.2));
  const ruleWidth = Math.max(16, Math.round(size * 0.36));

  return (
    <div className={`leading-none ${className}`}>
      <p
        className={`font-semibold tracking-[0.35em] ${textColor}`}
        style={{ fontSize: mainSize }}
      >
        STATIC
      </p>
      <div className="flex items-center gap-2 mt-1">
        <span className="h-px bg-brand-red" style={{ width: ruleWidth }} aria-hidden="true" />
        <span
          className={`font-medium tracking-[0.25em] ${subColor}`}
          style={{ fontSize: subSize }}
        >
          MECHANICAL INC.
        </span>
      </div>
    </div>
  );
}
