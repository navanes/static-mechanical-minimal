const YELP_URL = 'https://www.yelp.com/biz/static-mechanical-montrose';

export default function TrustBar({ dark = false }) {
  const bg = dark ? 'bg-gray-900' : 'bg-black';
  return (
    <div className={`${bg} text-white text-sm font-semibold py-3`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-4 items-center">
        <span className="flex items-center gap-1">
          <span>📋</span> LICENSED
        </span>
        <span className="text-gray-500">·</span>
        <span>BONDED</span>
        <span className="text-gray-500">·</span>
        <span>INSURED</span>
        <span className="text-gray-500">·</span>
        <span>RESIDENTIAL &amp; COMMERCIAL</span>
        <span className="text-gray-500">·</span>
        <a
          href={YELP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-yellow-300 transition-colors"
          aria-label="Static Mechanical on Yelp"
        >
          FIND US ON YELP
        </a>
      </div>
    </div>
  );
}
