import { useEffect, useRef } from 'react';
import Img from './Img';

// Apple-style "grow on scroll": the image starts slightly scaled down and
// grows to full size as it scrolls up into view. Driven by scroll position
// via rAF-throttled updates rather than a native CSS scroll-timeline, so it
// behaves the same across browsers instead of depending on newer CSS support.
const MIN_SCALE = 0.82;
const MAX_SCALE = 1;

export default function ScrollGrowImg({ className = '', style, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // 0 when the element's top edge is at the viewport's bottom edge (just entering),
      // 1 once it has scrolled up to 60% of the viewport height (fully "grown in").
      const start = vh;
      const end = vh * 0.4;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      const scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * progress;
      el.style.transform = `scale(${scale})`;
      el.style.opacity = String(0.55 + 0.45 * progress);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <Img
      ref={ref}
      className={className}
      style={{ willChange: 'transform, opacity', ...style }}
      {...props}
    />
  );
}
