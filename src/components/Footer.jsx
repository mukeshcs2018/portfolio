import Container from "./Container.jsx";
import Icon from "./Icon.jsx";

const Footer = ({ footer, socials }) => (
  <footer className="border-t border-white/10 py-10">
    <Container>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm text-slate-400">{footer.text}</p>
          {footer.tagline ? (
            <p className="text-xs text-slate-500">{footer.tagline}</p>
          ) : null}
        </div>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:text-accent-500"
              aria-label={social.label}
            >
              <Icon name={social.icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;


