import { useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "./data/portfolioData.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Contact from "./sections/Contact.jsx";

const App = () => {
  useEffect(() => {
    document.title = `${portfolioData.name} | ${portfolioData.role}`;
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-base-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-halo" />
      <div className="pointer-events-none absolute inset-0 bg-aurora" />

      <Navbar data={portfolioData.nav} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <Hero data={portfolioData.hero} name={portfolioData.name} role={portfolioData.role} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <Projects data={portfolioData.projects} />
        <Experience data={portfolioData.experience} />
        <Contact data={portfolioData.contact} />
      </motion.main>

      <Footer footer={portfolioData.footer} socials={portfolioData.socials} />
    </div>
  );
};

export default App;


