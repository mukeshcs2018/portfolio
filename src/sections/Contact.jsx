import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Card from "../components/Card.jsx";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";

const Contact = ({ data }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = data.form.fields
      .map((field) => `${field.label}: ${formData.get(field.name)}`)
      .join("\n");

    const mailto = `mailto:${data.email}?subject=${encodeURIComponent(
      data.form.subject
    )}&body=${encodeURIComponent(lines)}`;

    window.location.href = mailto;
  };

  return (
    <section id={data.id} className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <SectionTitle title={data.title} subtitle={data.subtitle} />
            <div className="space-y-4">
              {data.methods.map((method, index) => (
                <Reveal key={method.label} delay={index * 0.05}>
                  <Card className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <Icon name={method.icon} className="h-5 w-5 text-accent-500" />
                    </span>
                    <div>
                      <p className="text-sm text-slate-400">{method.label}</p>
                      <a
                        href={method.href}
                        className="text-sm font-medium text-white transition hover:text-accent-500"
                      >
                        {method.value}
                      </a>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <Card>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {data.form.fields.map((field) => (
                  <label key={field.name} className="block space-y-2 text-sm">
                    <span className="text-slate-300">{field.label}</span>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        required={field.required}
                        placeholder={field.placeholder}
                        rows={5}
                        className="w-full rounded-2xl border border-white/10 bg-base-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent-500 focus:outline-none"
                      />
                    ) : (
                      <input
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full rounded-2xl border border-white/10 bg-base-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent-500 focus:outline-none"
                      />
                    )}
                  </label>
                ))}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent-600 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent-500"
                >
                  {data.form.submitLabel}
                </button>
              </form>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Contact;


