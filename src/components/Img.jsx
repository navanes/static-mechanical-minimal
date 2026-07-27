// Img — tries the local src first; falls back to a picsum placeholder if the file is missing.
// Drop the real photo into public/images/ and it takes over automatically.
const FALLBACKS = {
  '/images/hero.jpg':              'https://picsum.photos/seed/fb-hero/1600/900',
  '/images/tech.jpg':              'https://picsum.photos/seed/fb-tech/800/900',
  '/images/service-ac.jpg':        'https://picsum.photos/seed/svc-ac/900/600',
  '/images/service-furnace.jpg':   'https://picsum.photos/seed/svc-furnace/900/600',
  '/images/service-thermo.jpg':    'https://picsum.photos/seed/svc-thermo/900/600',
  '/images/service-mini.jpg':      'https://picsum.photos/seed/svc-mini/900/600',
  '/images/service-changeout.jpg': 'https://picsum.photos/seed/svc-change/900/600',
  '/images/service-airflow.jpg':   'https://picsum.photos/seed/svc-air/900/600',
  '/images/work1.jpg':             'https://picsum.photos/seed/work1/600/450',
  '/images/work2.jpg':             'https://picsum.photos/seed/work2/600/450',
  '/images/gallery-30.jpg':        'https://picsum.photos/seed/g30/600/450',
  '/images/gallery-31.jpg':        'https://picsum.photos/seed/g31/600/450',
  '/images/gallery-32.jpg':        'https://picsum.photos/seed/g32/600/450',
  '/images/gallery-33.jpg':        'https://picsum.photos/seed/g33/600/450',
  '/images/gallery-34.jpg':        'https://picsum.photos/seed/g34/600/450',
  '/images/gallery-35.jpg':        'https://picsum.photos/seed/g35/600/450',
  '/images/gallery-36.jpg':        'https://picsum.photos/seed/g36/600/450',
  '/images/static-hero.jpg':            'https://picsum.photos/seed/sm-hero/1600/900',
  '/images/static-crane-delivery.jpg':  'https://picsum.photos/seed/sm-crane/900/600',
  '/images/static-furnace.jpg':         'https://picsum.photos/seed/sm-furnace/900/600',
  '/images/static-newconstruction.jpg': 'https://picsum.photos/seed/sm-newconst/900/600',
};

export default function Img({ src, alt, className, style, loading = 'lazy', fetchpriority }) {
  const fallback = FALLBACKS[src] || 'https://picsum.photos/seed/fb-default/800/600';
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      fetchpriority={fetchpriority}
      decoding={loading === 'eager' ? 'sync' : 'async'}
      onError={(e) => {
        if (e.target.src !== fallback) e.target.src = fallback;
      }}
    />
  );
}
