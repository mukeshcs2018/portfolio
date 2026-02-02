import { motion } from "framer-motion";

const FilterPill = ({ label, active, onClick }) => (
  <motion.button
    type="button"
    onClick={onClick}
    className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition ${
      active
        ? "border-accent-500 bg-accent-500/15 text-accent-500"
        : "border-white/10 text-slate-300 hover:border-white/30 hover:text-white"
    }`}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
  >
    {label}
  </motion.button>
);

export default FilterPill;


