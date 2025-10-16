import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import programmerAnimation from "../assets/images/programmer-animation.json";
import programmerGirl from "../assets/images/programmer-girl.png";
import About from "./About";
import Skills from "../components/Skills";
import Contact from "../pages/Contact";
import Badges from "../components/Badges";
import Timeline from "../components/Timeline";
import Projects from "./Projects"; // Importar el componente Projects
import GitHubStats from "../components/GitHubStats";

const Home = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        id="inicio"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 className="main-title">
              ¡Hola! Soy Analia Rojas
            </motion.h1>
            <motion.p className="hero-subtitle" transition={{ delay: 0.2 }}>
              Product Owner & Desarrolladora Full Stack
            </motion.p>
            <motion.p className="hero-description" transition={{ delay: 0.3 }}>
              Transformo ideas en soluciones digitales escalables. Especializada en React, Node.js y metodologías ágiles, 
              combino liderazgo estratégico con expertise técnico para crear productos que generan valor real.
            </motion.p>
            <motion.div className="hero-cta" transition={{ delay: 0.5 }}>
              <motion.a
                href="#proyectos"
                className="primary-button"
                style={{ display: "inline-block", textDecoration: "none", marginRight: "1rem" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver mis Proyectos
              </motion.a>
              <motion.a
                href="#contacto"
                className="secondary-button"
                style={{ display: "inline-block", textDecoration: "none" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hablemos
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Años de Experiencia</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Proyectos Completados</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Certificaciones</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="hero-animation"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={programmerGirl}
              alt="Desarrolladora programando"
              style={{ 
                width: "600px", 
                height: "600px", 
                objectFit: "contain",
                backgroundColor: "transparent",
                mixBlendMode: "darken",
                filter: "contrast(1.2)"
              }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="sobre-mi">
        <About />
      </section>

      {/* Experience Section */}
      <section id="experiencia">
        <Timeline />
      </section>

      {/* Skills Section */}
      <section id="habilidades">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="projects-section-container">
        <Projects />
        
        {/* CTA Section */}
        <motion.section
          className="cta-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <div className="cta-content">
            <motion.h2
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              ¿Listo para colaborar?
            </motion.h2>
            <motion.p
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              ¡No dudes en explorar mis proyectos y ponerte en contacto conmigo!
            </motion.p>
            <motion.a
              href="https://github.com/analiarojas2929?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
              style={{ textDecoration: "none" }}
              whileHover={{
                scale: 1.05,
                background: "linear-gradient(to right, #ff7f50, #d76a87)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyectos
            </motion.a>
          </div>
        </motion.section>
      </section>

      {/* Achievements/Badges Section */}
      <section id="logros" className="badges-section-container">
        <Badges />
      </section>

      {/* GitHub Stats Section */}
      <section id="github-stats" className="github-stats-wrapper">
        <GitHubStats />
      </section>

      {/* Contact Section */}
      <section id="contacto">
        <Contact />
      </section>
    </>
  );
};

export default Home;
