import ScrollGrowImg from '../components/ScrollGrowImg';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

const projects = [
  { img: '/images/v2/project-crane-street.jpg',        category: 'COMMERCIAL',  title: 'Rooftop package unit delivery',       location: 'LOS ANGELES, CA' },
  { img: '/images/v2/project-condenser-row.jpg',        category: 'COMMERCIAL',  title: 'Multi-unit condenser installation',   location: 'LOS ANGELES, CA' },
  { img: '/images/v2/project-mechanical-room.jpg',      category: 'COMMERCIAL',  title: 'Chiller plant mechanical room',       location: 'LOS ANGELES, CA' },
  { img: '/images/v2/project-boiler.jpg',                category: 'COMMERCIAL',  title: 'Rooftop boiler system',               location: 'LOS ANGELES, CA' },
  { img: '/images/v2/project-condensers-palms.jpg',     category: 'RESIDENTIAL', title: 'Dual condenser replacement',          location: 'LOS ANGELES, CA' },
  { img: '/images/v2/project-cooling-tower.jpg',        category: 'COMMERCIAL',  title: 'Cooling tower service',               location: 'LOS ANGELES, CA' },
  { img: '/images/v2/project-crane-switchgear.jpg',     category: 'COMMERCIAL',  title: 'Switchgear crane delivery',           location: 'LOS ANGELES, CA' },
  { img: '/images/static-newconstruction.jpg',           category: 'NEW CONSTRUCTION', title: 'Rooftop duct curb installation', location: 'LOS ANGELES, CA' },
];

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects — Static Mechanical Inc."
        description="Selected HVAC projects: rooftop package units, mechanical rooms, cooling towers, and condenser installations across the greater Los Angeles area."
        canonical="/projects"
        breadcrumb={{ name: 'Projects', path: '/projects' }}
      />

      <section className="pt-16 pb-24 px-6" aria-label="Page header">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-gray-500">SELECTED WORK</p>
          <h1 className="max-w-xl text-[42px] font-medium leading-[1.05] tracking-[-0.025em] text-white md:text-[clamp(52px,5vw,72px)]">
            Quiet systems.<br />Visible results.
          </h1>
        </div>
      </section>

      <section className="pb-24 px-6" aria-label="Project gallery">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-8 gap-y-14">
          {projects.map((p) => (
            <article key={p.title}>
              <div className="aspect-[4/3] overflow-hidden rounded bg-surface">
                <ScrollGrowImg
                  src={p.img}
                  alt={`${p.title} — ${p.location}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-5 text-[13px] font-semibold tracking-[0.18em] text-gray-500">{p.category}</p>
              <p className="mt-1 text-[22px] font-semibold leading-snug text-white md:text-2xl">{p.title}</p>
              <p className="mt-1 text-[13px] text-gray-500">{p.location}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        heading="Have a project in mind?"
        sub="Tell us what you're working with and we'll put together a plan."
      />
    </>
  );
}
