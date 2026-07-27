// Static Mechanical Inc. — logo assets live at public/images/logo-mark.png (icon only,
// transparent background) and public/images/logo-full.png (icon + wordmark, for larger spots).
export default function Logo({ size = 64, className = '', variant = 'mark' }) {
  const src = variant === 'full' ? '/images/logo-full.png' : '/images/logo-mark.png';
  return (
    <img
      src={src}
      alt="Static Mechanical Inc. — HVAC Contractor logo"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
}
