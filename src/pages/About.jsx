import React from 'react';
import { motion } from 'framer-motion';
import miFoto from '../assets/images/mi-foto-samsung.jpeg'; // Importando la imagen

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="content">
        <h2 className="title">Analia Rojas Araya</h2>
        <p className="description">
          Hola soy <span className="name">Analia Rojas Araya</span> vivo en Valparaíso, Chile
          Estudiante de Ingeniería en Informática | Desarrolladora Front-end | Gestión de Proyecto

        </p>
        <p className="description">
        Apasionada por crear experiencias digitales hermosas y funcionales.

Cuando no estoy codificando, disfruto explorando la naturaleza y capturando la belleza en fotografías.
        </p>
      </div>
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
