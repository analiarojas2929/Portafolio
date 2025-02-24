import React from 'react';
import { motion } from 'framer-motion';
import miFoto from '../assets/images/mi-foto-samsung.jpeg';

const About = () => {
  return (
    <section id="about" className="about-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sobre Mí
      </motion.h2>
      
      <div className="about-content">
        <motion.div 
          className="image-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={miFoto}
            alt="Analia Rojas Araya"
            className="resaltar-img fade-in-img"
            whileHover={{ scale: 1.1, opacity: 0.9 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Desarrolladora Frontend & UX/UI Designer</h3>
          <p>
            Soy una apasionada desarrolladora frontend con experiencia en crear experiencias
            digitales atractivas y funcionales. Mi enfoque combina principios de diseño UX/UI
            con código limpio y eficiente.
          </p>
          <motion.button
            className="about-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Descarga mi CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
