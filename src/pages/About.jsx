import React from 'react';
import { motion } from 'framer-motion';
import miFoto from '../assets/images/mi-foto.png';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CV from '../assets/cv/Analia_Rojas_CV.pdf';

const About = () => {
  const handleDownloadCV = () => {
    window.open(CV, '_blank');
  };

  return (
    <section className="about-container">
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
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Product Owner & Desarrolladora Fullstack</h3>
          <p>
            Soy Product Owner en DevExtreme con sólida experiencia como desarrolladora fullstack. 
            Mi perfil único combina liderazgo estratégico de producto con expertise técnico profundo 
            en React, Node.js y metodologías ágiles. Especializada en transformar ideas complejas 
            en soluciones digitales escalables que generan valor real para usuarios y negocio.
          </p>

          <motion.button
            className="about-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadCV}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FontAwesomeIcon icon={faDownload} style={{ marginRight: '8px' }} />
            Descarga mi CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
