import { motion } from "framer-motion";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import TypingText from "../components/TypingText.jsx";
import Reveal from "../components/Reveal.jsx";

const Hero = ({ data, name, role }) => (
  <section id={data.id} className="relative pb-20 pt-28 sm:pt-32">
    <Container>
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent-500">
              {data.greeting}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              {name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-slate-300 sm:text-xl">{role || data.roleLabel}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg text-slate-300 sm:text-xl">
              <TypingText
                phrases={data.typing.phrases}
                speed={data.typing.speed}
                deleteSpeed={data.typing.deleteSpeed}
                pause={data.typing.pause}
                cursor={data.typing.cursor}
                className="text-white"
              />
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-lg font-medium text-white/90 sm:text-xl">
              {data.headline}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-xl text-base text-slate-300 sm:text-lg">
              {data.description}
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="flex flex-wrap gap-4">
              {data.cta.map((item) => (
                <Button
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  variant={item.variant}
                />
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="grid gap-4 sm:grid-cols-3">
              {data.stats.map((stat) => (
                <Card key={stat.label} hover={false} className="p-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-accent-500/20 blur-2xl" />
          <Card className="overflow-hidden">
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="h-64 w-full rounded-2xl object-cover"
            />
            <div className="mt-6 space-y-3">
              <span className="inline-flex items-center rounded-full border border-accent-500/40 bg-accent-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent-500">
                {data.highlight.badge}
              </span>
              <h3 className="text-xl font-semibold text-white">
                {data.highlight.title}
              </h3>
              <p className="text-sm text-slate-300">{data.highlight.text}</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </Container>
  </section>
);

export default Hero;


