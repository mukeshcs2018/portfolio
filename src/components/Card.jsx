import { motion } from "framer-motion";

const Card = ({ children, className = "", hover = true }) => (
  <motion.div
    className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur ${className}`}
    whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
    transition={{ type: "spring", stiffness: 240, damping: 20 }}
  >
    {children}
  </motion.div>
);

export default Card;


