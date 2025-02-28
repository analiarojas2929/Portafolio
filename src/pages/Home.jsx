import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import programmerAnimation from "../assets/images/programmer-animation.json";
import About from "./About";
import Skills from "../components/Skills";
import Contact from "../pages/Contact";
import Badges from "../components/Badges";
import Timeline from "../components/Timeline";

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
              Bienvenido a mi Portafolio
            </motion.h1>
            <motion.p className="hero-subtitle" transition={{ delay: 0.2 }}>
              Desarrolladora Frontend & UX/UI Designer
            </motion.p>
            <motion.div className="hero-cta" transition={{ delay: 0.4 }}>
              <motion.a
                href="https://github.com/analiarojas2929"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
                style={{ display: "inline-block", textDecoration: "none" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conoce mi trabajo
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="hero-animation"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Lottie
              animationData={programmerAnimation}
              loop={true}
              style={{ width: "400px", height: "400px" }}
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
      <section id="proyectos">
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
        <Badges />
      </section>

      {/* Contact Section */}
      <section id="contacto">
        <Contact />
      </section>
    </>
  );
};

export default Home;
