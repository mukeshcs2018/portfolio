import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Reveal from "../components/Reveal.jsx";

const Experience = ({ data }) => (
  <section id={data.id} className="py-20">
    <Container>
      <SectionTitle title={data.title} subtitle={data.subtitle} />
      <div className="relative mt-12 border-l border-white/10 pl-8">
        {data.timeline.map((item, index) => (
          <Reveal key={`${item.company}-${index}`} delay={index * 0.05}>
            <div className="relative pb-10">
              <span className="absolute -left-[11px] top-2 h-5 w-5 rounded-full border border-accent-500 bg-base-950">
                <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500" />
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-accent-500">
                {item.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {item.role}
              </h3>
              <p className="text-sm text-slate-300">{item.company}</p>
              <p className="text-sm text-slate-500">{item.location}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {item.details.map((detail) => (
                  <li key={detail} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);

export default Experience;


