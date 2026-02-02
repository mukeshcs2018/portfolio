import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Card from "../components/Card.jsx";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";

const Skills = ({ data }) => (
  <section id={data.id} className="py-20">
    <Container>
      <SectionTitle title={data.title} subtitle={data.subtitle} />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {data.categories.map((category, categoryIndex) => (
          <Reveal key={category.title} delay={categoryIndex * 0.05}>
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">{category.title}</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Icon name={category.icon} className="h-5 w-5 text-accent-500" />
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-200">{item.name}</span>
                      <span className="text-slate-400">{item.levelLabel}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/5">
                      <div
                        className="h-2 rounded-full bg-accent-500/80"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);

export default Skills;


