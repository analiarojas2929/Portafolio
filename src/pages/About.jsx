import React from 'react';
import { motion } from 'framer-motion';
import miFoto from '../assets/images/mi-foto-samsung.jpeg'; // Importando la imagen

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="image-container">
        {/* Imagen con animación de resaltar */}
        <motion.img
          src={miFoto} // Usando la imagen importada
          alt="Imagen destacada"
          className="resaltar-img fade-in-img"
          whileHover={{ scale: 1.1, opacity: 0.9 }} // Efecto de resaltar
          transition={{ duration: 0.3 }} // Duración del efecto
        />
      </div>
    </section>
  );
};

export default About;
