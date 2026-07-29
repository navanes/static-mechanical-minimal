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
        description="Selected HVAC projects: rooftop package units, mechanical rooms, cooling towers, and condenser installations across Los Angeles, Glendale, Burbank & Pasadena."
        canonical="/projects"
        breadcrumb={{ name: 'Projects', path: '/projects' }}
      />

      <section className="pt-16 pb-24 px-6" aria-label="Page header">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-500 tracking-widest mb-3">SELECTED WORK</p>
          <h1 className="text-4xl md:text-5xl text-white max-w-lg">
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
              <p className="text-xs text-gray-500 tracking-widest mt-5">{p.category}</p>
              <p className="text-xl text-white mt-1">{p.title}</p>
              <p className="text-xs text-gray-500 mt-1">{p.location}</p>
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
