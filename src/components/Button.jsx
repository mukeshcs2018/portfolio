import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-accent-600 text-slate-950 hover:bg-accent-500 shadow-[0_10px_30px_rgba(90,210,255,0.25)]",
  ghost:
    "border border-white/15 text-white hover:border-accent-500/70 hover:text-accent-500",
  subtle:
    "bg-white/5 text-slate-200 hover:bg-white/10 border border-white/10",
};

const Button = ({
  label,
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  className = "",
}) => {
  const MotionTag = href ? motion.a : motion.button;
  const props = href
    ? { href }
    : { type: "button", onClick };

  return (
    <MotionTag
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
        variants[variant] || variants.primary
      } ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {label}
    </MotionTag>
  );
};

export default Button;


