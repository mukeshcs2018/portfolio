import Reveal from "./Reveal.jsx";

const SectionTitle = ({ title, subtitle, align = "left", eyebrow }) => {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`space-y-3 ${alignment}`}>
      {eyebrow ? (
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent-500">
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <Reveal>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal>
          <p className="text-base text-slate-300 sm:text-lg">{subtitle}</p>
        </Reveal>
      ) : null}
    </div>
  );
};

export default SectionTitle;


