import React from 'react';
import { motion } from 'framer-motion';
import About from './About';

const Home = () => {
  return (
    <div className="home-container">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fade-in-title"
      >
        Bienvenido a mi Portafolio
      </motion.h1>

      
      <About /> 

      {/* Sección de habilidades */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="skills-container"
      >
        <h2>Mis Habilidades</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
        </ul>
      </motion.div>

      {/* Llamado a la acción */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="cta-container"
      >
        <p>¡No dudes en explorar mis proyectos y ponerte en contacto conmigo!</p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#4CAF50' }}
          transition={{ duration: 0.3 }}
          className="cta-button"
        >
          Ver Proyectos
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
