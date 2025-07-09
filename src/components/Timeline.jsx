import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaCertificate,
  FaAward,
  FaUserTie // Nuevo icono para Product Owner
} from "react-icons/fa";

const Timeline = () => {
  const categoryColors = {
    educacion: "#4CAF50",    // Verde para educación formal
    bootcamp: "#2196F3",     // Azul para bootcamps
    certificacion: "#FF9800", // Naranja para certificaciones
    developer: "#9C27B0",    // Morado para desarrollo
    carrera: "#F44336",      // Rojo para hitos profesionales
    productowner: "#673AB7"  // Púrpura para Product Owner
  };

  const events = [
    {
      year: "2025",
      title: "Product Owner - DevExtreme",
      description: "Liderando la estrategia de producto y coordinando equipos de desarrollo. Gestión de roadmap, análisis de mercado y optimización de experiencia de usuario.",
      icon: <FaUserTie />,
      category: "productowner"
    },
    {
      year: "2025",
      title: "Titulada de Ingeniería en Informática",
      description: "Instituto DuocUC - Desarrollo de habilidades en programación, estructuras de datos y algoritmos.",
      icon: <FaGraduationCap />,
      category: "educacion"
    },
    {
      year: "2025",
      title: "Diplomado Diseño y Gestión Ágil de Proyectos",
      description: "Diplomado en Diseño y Gestión Ágil de Proyectos - Fundación Telefónica",
      icon: <FaAward />,
      category: "certificacion"
    },
    {
      year: "2024",
      title: "BOOTCAMP DESARROLLO FRONT-END TRAINEE",
      description: "Especialización en Vue.js, Node.js y tecnologías modernas. Desarrollo de aplicaciones web responsivas.",
      icon: <FaCode />,
      category: "bootcamp"
    },
    {
      year: "2024",
      title: "Bootcamp Samsung Innovation Campus: Bigdata",
      description: "Bootcamp en Bigdata | Data Science - Samsung Innovation Campus",
      icon: <FaLaptopCode />,
      category: "bootcamp"
    },
    {
      year: "2024",
      title: "Desarrollo Frontend con JavaScript",
      description: "Desarrollo de aplicaciones web con JavaScript y tecnologías modernas - CodigoDojo and Banco de Chile",
      icon: <FaCode />,
      category: "certificacion"
    },
    {
      year: "2024",
      title: "Desarrolladora Fullstack",
      description: "Especialización en React, Node.js y tecnologías modernas. Desarrollo de aplicaciones web responsivas.",
      icon: <FaCode />,
      category: "developer"
    },
    {
      year: "2023",
      title: "Oracle Next Education + Alura Latam",
      description: "Formación intensiva en desarrollo web, Backend con Java, Frontend con React. Especialización G5 ONE.",
      icon: <FaCertificate />,
      category: "certificacion"
    },
    {
      year: "2022",
      title: "Introducción al Hacking Ético y Pentesting",
      description: "Introducción al Hacking Ético y Pentesting - Capacitación Universidad de Santiago de Chile (USACH)",
      icon: <FaCertificate />,
      category: "certificacion"
    },
    {
      year: "2021",
      title: "Primeros Proyectos Web",
      description: "Desarrollo de proyectos personales utilizando HTML, CSS, JavaScript y React.",
      icon: <FaLaptopCode />,
      category: "developer"
    },
    {
      year: "2020",
      title: "Inicio en Desarrollo Web",
      description: "Comenzando mi viaje en el desarrollo web y fundamentos de programación.",
      icon: <FaBriefcase />,
      category: "carrera"
    },
    {
      year: "2020",
      title: "Estudiante de Ingeniería en Informática",
      description: "Instituto DuocUC - Desarrollo de habilidades en programación, estructuras de datos y algoritmos.",
      icon: <FaGraduationCap />,
      category: "educacion"
    }
  ];

  return (
    <section className="timeline-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Mi Trayectoria
      </motion.h2>

      <div className="timeline-categories">
        {Object.entries(categoryColors).map(([category, color]) => (
          <motion.div 
            key={category} 
            className="category-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="category-dot" style={{ backgroundColor: color }}></span>
            <span className="category-name">{category}</span>
          </motion.div>
        ))}
      </div>

      <div className="timeline-container">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${event.category}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div 
              className="timeline-icon"
              style={{ 
                background: `linear-gradient(45deg, ${categoryColors[event.category]}, ${categoryColors[event.category]}dd)`
              }}
            >
              {event.icon}
            </div>
            <motion.div 
              className="timeline-content"
              style={{ borderLeft: `4px solid ${categoryColors[event.category]}` }}
              whileHover={{ scale: 1.02 }}
            >
              <span 
                className="timeline-year"
                style={{ backgroundColor: categoryColors[event.category] }}
              >
                {event.year}
              </span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
