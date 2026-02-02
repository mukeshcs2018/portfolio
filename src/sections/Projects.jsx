import { useMemo, useState } from "react";
import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Card from "../components/Card.jsx";
import FilterPill from "../components/FilterPill.jsx";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";

const Projects = ({ data }) => {
  const [activeFilter, setActiveFilter] = useState(data.filters[0]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === data.filters[0]) {
      return data.items;
    }
    return data.items.filter((project) => project.tech.includes(activeFilter));
  }, [activeFilter, data]);

  return (
    <section id={data.id} className="py-20">
      <Container>
        <SectionTitle title={data.title} subtitle={data.subtitle} />
        <Reveal>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
              {data.filterLabel}
            </span>
            {data.filters.map((filter) => (
              <FilterPill
                key={filter}
                label={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {filteredProjects.length ? (
            filteredProjects.map((project, projectIndex) => (
              <Reveal key={project.title} delay={projectIndex * 0.05}>
                <Card className="group h-full overflow-hidden">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      {project.links.github ? (
                        <a
                          href={project.links.github}
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:text-accent-500"
                        >
                          <Icon name="Github" className="h-4 w-4" />
                          {data.linkLabels.github}
                        </a>
                      ) : null}
                      {project.links.live ? (
                        <a
                          href={project.links.live}
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:text-accent-500"
                        >
                          <Icon name="ExternalLink" className="h-4 w-4" />
                          {data.linkLabels.live}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))
          ) : (
            <Card hover={false}>
              <p className="text-sm text-slate-300">{data.emptyState}</p>
            </Card>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Projects;


