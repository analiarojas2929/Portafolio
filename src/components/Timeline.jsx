import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaCertificate,
  FaAward 
} from "react-icons/fa";

const Timeline = () => {
  const categoryColors = {
    education: "#4CAF50",    // Verde para educación formal
    bootcamp: "#2196F3",     // Azul para bootcamps
    certification: "#FF9800", // Naranja para certificaciones
    development: "#9C27B0",  // Morado para desarrollo
    career: "#F44336"        // Rojo para hitos profesionales
  };

  const events = [
    {
      year: "2025",
      title: "Titulada de Ingeniería en Informática",
      description: "Instituto DuocUC - Desarrollo de habilidades en programación, estructuras de datos y algoritmos.",
      icon: <FaGraduationCap />,
      category: "education"
    },
    {
      year: "2025",
      title: "Diplomado Diseño y Gestión Ágil de Proyectos",
      description: "Diplomado en Diseño y Gestión Ágil de Proyectos - Fundacion telefónica ",
      icon: <FaAward />,
      category: "certification"
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
      title: "Desarrollo Frontend",
      description: "Desarrollo de aplicaciones web con JavaScript y tecnologías modernas - CodigoDojo and Banco de Chile",
      icon: <FaCode />,
      category: "development"
    },
    {
      year: "2024",
      title: "Desarrolladora Fullstack",
      description: "Especialización en React, Node.js y tecnologías modernas. Desarrollo de aplicaciones web responsivas.",
      icon: <FaCode />,
      category: "development"
    },
    {
      year: "2023",
      title: "Oracle Next Education + Alura Latam",
      description: "Formación intensiva en desarrollo web, Backend con Java, Frontend con React. Especialización G5 ONE.",
      icon: <FaCertificate />,
      category: "certification"
    },
    {
      year: "2022",
      title: "Introducción al Hacking Ético y Pentesting",
      description: "Introducción al Hacking Ético y Pentesting - Capacitación Usach",
      icon: <FaCertificate />,
      category: "certification"
    },
    {
      year: "2021",
      title: "Primeros Proyectos Web",
      description: "Desarrollo de proyectos personales utilizando HTML, CSS, JavaScript y React.",
      icon: <FaLaptopCode />,
      category: "development"
    },
    {
      year: "2020",
      title: "Inicio en Desarrollo Web",
      description: "Comenzando mi viaje en el desarrollo web y fundamentos de programación.",
      icon: <FaBriefcase />,
      category: "career"
    },
    {
      year: "2020",
      title: "Estudiante de Ingeniería en Informática",
      description: "Instituto DuocUC - Desarrollo de habilidades en programación, estructuras de datos y algoritmos.",
      icon: <FaGraduationCap />,
      category: "education"
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
