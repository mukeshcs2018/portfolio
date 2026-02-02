import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Reveal from "../components/Reveal.jsx";
import Card from "../components/Card.jsx";

const About = ({ data }) => (
  <section id={data.id} className="py-20">
    <Container>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Card className="overflow-hidden">
            <img
              src={data.profileImage.src}
              alt={data.profileImage.alt}
              className="h-80 w-full rounded-2xl object-cover"
            />
          </Card>
        </Reveal>
        <div className="space-y-6">
          <SectionTitle title={data.title} subtitle={data.subtitle} />
          <Reveal>
            <p className="text-base text-slate-300 sm:text-lg">{data.bio}</p>
          </Reveal>
          <Reveal>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                {data.summaryTitle}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {data.summary.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Container>
  </section>
);

export default About;


