import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaCertificate,
  FaAward,
  FaUserTie,
  FaRocket,
  FaDatabase,
  FaShieldAlt,
  FaReact,
  FaStar
} from "react-icons/fa";

const Timeline = () => {
  const categoryConfig = {
    educacion: { 
      color: "#4CAF50", 
      name: "Educación",
      gradient: "linear-gradient(135deg, #4CAF50, #66BB6A)"
    },
    bootcamp: { 
      color: "#2196F3", 
      name: "Bootcamps",
      gradient: "linear-gradient(135deg, #2196F3, #42A5F5)"
    },
    certificacion: { 
      color: "#FF9800", 
      name: "Certificaciones",
      gradient: "linear-gradient(135deg, #FF9800, #FFB74D)"
    },
    developer: { 
      color: "#9C27B0", 
      name: "Desarrollo",
      gradient: "linear-gradient(135deg, #9C27B0, #BA68C8)"
    },
    carrera: { 
      color: "#F44336", 
      name: "Carrera",
      gradient: "linear-gradient(135deg, #F44336, #EF5350)"
    },
    productowner: { 
      color: "#673AB7", 
      name: "Product Owner",
      gradient: "linear-gradient(135deg, #673AB7, #9575CD)"
    }
  };

  const events = [
    {
      year: "2025",
      title: "Product Owner - DevExtreme",
      description: "Defino roadmap, alinear equipos y optimizar la experiencia de producto en DevExtreme.",
      icon: <FaUserTie />,
      category: "productowner",
      highlight: true,
      skills: ["Gestión de Producto", "Scrum", "Análisis de Mercado"]
    },
    {
      year: "2025",
      title: "Titulada de Ingeniería en Informática",
      description: "DuocUC | Formación en programación, estructuras de datos y arquitectura de software.",
      icon: <FaGraduationCap />,
      category: "educacion",
      highlight: true,
      skills: ["Algoritmos", "Estructuras de Datos", "Ingeniería de Software"]
    },
    {
      year: "2025",
      title: "Diplomado Diseño y Gestión Ágil de Proyectos",
      description: "Fundación Telefónica | Diseño y gestión ágil aplicada a proyectos digitales.",
      icon: <FaAward />,
      category: "certificacion",
      skills: ["Metodologías Ágiles", "Gestión de Proyectos", "Liderazgo"]
    },
    {
      year: "2024",
      title: "BOOTCAMP DESARROLLO FRONT-END TRAINEE",
      description: "Especialización en Vue.js y Node.js para crear experiencias web responsivas.",
      icon: <FaReact />,
      category: "bootcamp",
      skills: ["Vue.js", "Node.js", "JavaScript", "Frontend"]
    },
    {
      year: "2024",
      title: "Bootcamp Samsung Innovation Campus: Bigdata",
      description: "Samsung Innovation Campus | Data Science aplicada a proyectos de big data.",
      icon: <FaDatabase />,
      category: "bootcamp",
      skills: ["Big Data", "Data Science", "Python", "Analytics"]
    },
    {
      year: "2024",
      title: "Desarrollo Frontend con JavaScript",
      description: "CodigoDojo + Banco de Chile | Desarrollo web moderno con JavaScript.",
      icon: <FaCode />,
      category: "certificacion",
      skills: ["JavaScript", "Frontend", "Web Development"]
    },
    {
      year: "2024",
      title: "Desarrolladora Fullstack",
      description: "Stack React + Node.js para soluciones full stack escalables.",
      icon: <FaRocket />,
      category: "developer",
      skills: ["React", "Node.js", "Full Stack", "APIs"]
    },
    {
      year: "2023",
      title: "Oracle Next Education + Alura Latam",
      description: "ONE + Alura | Formación intensiva en Java backend y React frontend.",
      icon: <FaCertificate />,
      category: "certificacion",
      skills: ["Java", "React", "Oracle", "Backend"]
    },
    {
      year: "2022",
      title: "Introducción al Hacking Ético y Pentesting",
      description: "USACH | Fundamentos de hacking ético y ejercicios de pentesting guiados.",
      icon: <FaShieldAlt />,
      category: "certificacion",
      skills: ["Ciberseguridad", "Pentesting", "Ethical Hacking"]
    },
    {
      year: "2021",
      title: "Primeros Proyectos Web",
      description: "Proyectos personales con HTML, CSS, JS y React para afinar mi stack.",
      icon: <FaLaptopCode />,
      category: "developer",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      year: "2020",
      title: "Inicio en Desarrollo Web",
      description: "Inicio del camino en programación y fundamentos web.",
      icon: <FaBriefcase />,
      category: "carrera",
      skills: ["Programación", "Web Development", "Fundamentos"]
    },
    {
      year: "2020",
      title: "Estudiante de Ingeniería en Informática",
      description: "DuocUC | Base en programación, estructuras y pensamiento lógico.",
      icon: <FaGraduationCap />,
      category: "educacion",
      skills: ["Informática", "Programación", "Matemáticas"]
    }
  ];

  return (
    <section className="timeline-section">
      <motion.div 
        className="timeline-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className="section-title">Mi Trayectoria Profesional</h2>
        <p className="section-subtitle">Un viaje de aprendizaje y crecimiento constante</p>
      </motion.div>

      <motion.div 
        className="timeline-categories"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {Object.entries(categoryConfig).map(([category, config], index) => (
          <motion.div 
            key={category} 
            className="category-item"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, margin: "-30px" }}
          >
            <span 
              className="category-dot" 
              style={{ background: config.gradient }}
            ></span>
            <span className="category-name">{config.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${event.category} ${event.highlight ? 'highlight' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div 
              className="timeline-icon"
              style={{ 
                background: categoryConfig[event.category].gradient,
                boxShadow: `0 0 20px ${categoryConfig[event.category].color}40`
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 15,
                boxShadow: `0 0 30px ${categoryConfig[event.category].color}60`
              }}
              transition={{ duration: 0.2 }}
            >
              {event.icon}
              {event.highlight && <FaStar className="highlight-star" />}
            </motion.div>
            
            <motion.div 
              className="timeline-content"
              style={{ 
                borderLeft: `4px solid ${categoryConfig[event.category].color}`,
                background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`
              }}
              whileHover={{ 
                scale: 1.01,
                boxShadow: `0 8px 25px rgba(0,0,0,0.15)`,
                background: `linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))`
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="timeline-header-content">
                <motion.span 
                  className="timeline-year"
                  style={{ background: categoryConfig[event.category].gradient }}
                  whileHover={{ scale: 1.1 }}
                >
                  {event.year}
                </motion.span>
                <span 
                  className="timeline-category-badge"
                  style={{ color: categoryConfig[event.category].color }}
                >
                  {categoryConfig[event.category].name}
                </span>
              </div>
              
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              
              {event.skills && (
                <motion.div 
                  className="skills-tags"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {event.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skillIndex}
                      className="skill-tag"
                      style={{ 
                        borderColor: categoryConfig[event.category].color,
                        color: categoryConfig[event.category].color
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: `${categoryConfig[event.category].color}15`
                      }}
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: skillIndex * 0.03 }}
                      viewport={{ once: true, margin: "-30px" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
