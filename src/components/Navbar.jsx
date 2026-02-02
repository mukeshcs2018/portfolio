import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container.jsx";
import Button from "./Button.jsx";

const Navbar = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-base-950/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href={data.links[0]?.href} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
              {data.logo}
            </span>
            {data.brand ? (
              <span className="hidden text-sm font-medium text-slate-200 sm:block">
                {data.brand}
              </span>
            ) : null}
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-6">
              {data.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {data.cta ? (
              <Button label={data.cta.label} href={data.cta.href} variant="subtle" />
            ) : null}
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? data.aria.close : data.aria.open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-base-950/95 lg:hidden">
          <Container>
            <div className="flex flex-col gap-4 py-6">
              {data.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {data.cta ? (
                <Button label={data.cta.label} href={data.cta.href} variant="subtle" />
              ) : null}
            </div>
          </Container>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;


