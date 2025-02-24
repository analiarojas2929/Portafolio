import React from 'react';
import { motion } from 'framer-motion';
import About from './About';
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import Badges from '../components/Badges';
import Timeline from '../components/Timeline';


const Home = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
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
            <motion.p 
              className="hero-subtitle"
              transition={{ delay: 0.2 }}
            >
              Desarrolladora Frontend & UX/UI Designer
            </motion.p>
            <motion.div 
              className="hero-cta"
              transition={{ delay: 0.4 }}
            >
              <motion.button
                className="primary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conoce mi trabajo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <About />
      
      <Timeline />
      {/* Skills Section */}
      <Skills />

      {/* CTA Section */}
      <motion.section
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <div className="cta-content">
          <h2>¿Listo para colaborar?</h2>
          <p>¡No dudes en explorar mis proyectos y ponerte en contacto conmigo!</p>
          <motion.button
            className="cta-button"
            whileHover={{ 
              scale: 1.05,
              background: 'linear-gradient(to right, #ff7f50, #d76a87)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Proyectos
          </motion.button>
        </div>
      </motion.section>
      <Badges />
      <ContactForm />
    </>
  );
};

export default Home;
