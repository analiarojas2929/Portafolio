import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaCertificate, FaAward } from 'react-icons/fa';

// Importaciones de imágenes
import awsImage from '../assets/images/aws-academy-graduate-aws-academy-cloud-foundations.png';
import gobernanzaImage from '../assets/images/fundamentos-de-gobernanza-de-la-ciberseguridad-octu.png';
import sgsiImage from '../assets/images/fundamentos-de-sgsi-octubre-2024.png';
import hackingImage from '../assets/images/introduccion-al-hacking-etico-y-pentesting.png';
import redTeamImage from '../assets/images/nivelacion-de-conocimientos-para-el-red-team.png';
import talentoDigitalImage from '../assets/images/talento-digital.png';
import programaMentoriasTCSImage from '../assets/images/programa-mentorias-mujeres-tcs.png';
import cienciaDataImage from '../assets/images/bg_ciencia_de_datos.png';
import capc from '../assets/images/capc.png';
import depc from '../assets/images/depc.png';
import sfpc from '../assets/images/sfpc.png';
import cehpc from '../assets/images/cehpc.png';
import spopc from '../assets/images/spopc.png';
import smpc from '../assets/images/smpc.png';
import depc2 from '../assets/images/depc2.png';
import voluntariammt from '../assets/images/voluntariammt.png';

const Badges = () => {
  const badges = [
    {
      title: "Cybersecurity Awareness Professional Certification - CAPC",
      issuer: "CertiProf",
      image: capc, // Cambiar por la imagen correspondiente
      date: "Ene 2026 - Ene 2029",
      url: "https://www.credly.com/badges/24ec48ae-8282-4024-a14d-2abd44552e19/public_url",
      icon: <FaCertificate />
    },
    {
      title: "DevOps Essentials Professional Certification - DEPC®",
      issuer: "CertiProf",
      image: depc, // Cambiar por la imagen correspondiente
      date: "Ene 2026 - Ene 2029",
      url: "https://www.credly.com/earner/earned/badge/8812a4ce-120c-4d9b-b712-f3121143f479",
      icon: <FaCertificate />
    },
    {
      title: "Scrum Foundation Professional Certification - SFPC™",
      issuer: "CertiProf",
      image: sfpc, // Cambiar por la imagen correspondiente
      date: "Ene 2026 - Ene 2029",
      url: "https://www.credly.com/earner/earned/badge/a59e3d0e-d6e9-4e14-8149-935289ffb198",
      icon: <FaCertificate />
    },
    {
      title: "Ethical Hacking Professional Certification - CEHPC™",
      issuer: "CertiProf",
      image: cehpc, // Cambiar por la imagen correspondiente
      date: "Dic 2025 - Dic 2028",
      url: "https://www.credly.com/earner/earned/badge/04785f18-7519-44cc-8de1-45726263f71a",
      icon: <FaCertificate />
    },
    {
      title: "Scrum Product Owner Professional Certification - SPOPC®",
      issuer: "CertiProf",
      image: spopc, // Cambiar por la imagen correspondiente
      date: "Dic 2025 - Dic 2028",
      url: "https://www.credly.com/earner/earned/badge/747f6425-70ad-4195-8eec-b5486b0462c1",
      icon: <FaAward />
    },
    {
      title: "Voluntaria más mujeres en las tics",
      issuer: "Canvas Credentials (Badgr)",
      image: voluntariammt, // Cambiar por la imagen correspondiente
      date: "Dic 2025 - Dic 2027",
      url: "https://badges.parchment.com/public/assertions/lCYBoSIgRb2hZmVlTgKjFg",
      icon: <FaMedal />
    },
    {
      title: "DevOps Essentials Professional Certification (Spanish)",
      issuer: "CertiProf",
      image: depc2, // Cambiar por la imagen correspondiente
      date: "Nov 2025 - Nov 2028",
      url: "https://www.credly.com/earner/earned/badge/12fa7bb5-c3a7-4942-b203-cf1f9f455933",
      icon: <FaCertificate />
    },
    {
      title: "Scrum Master Professional Certification - SMPC®",
      issuer: "CertiProf",
      image: smpc, // Cambiar por la imagen correspondiente
      date: "Nov 2025 - Nov 2028",
      url: "https://www.credly.com/earner/earned/badge/1b46bd7e-0ac1-49d1-ab25-ba33fb2445c9",
      icon: <FaAward />
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      image: awsImage,
      date: "2024",
      url: "https://www.credly.com/badges/2c479e1a-cb1c-4c68-9908-7aa0f77801ca/public_url",
      icon: <FaAward />
    },
    {
      title: "Fundamentos de Gobernanza de la Ciberseguridad",
      issuer: "Capacitación USACH",
      image: gobernanzaImage,
      date: "2024",
      url: "#",
      icon: <FaCertificate />
    },
    {
      title: "Fundamentos de SGSI",
      issuer: "Capacitación USACH",
      image: sgsiImage,
      date: "2024",
      url: "#",
      icon: <FaMedal />
    },
    {
      title: "Hacking Ético y Pentesting",
      issuer: "Capacitación USACH",
      image: hackingImage,
      date: "2024",
      url: "#",
      icon: <FaCertificate />
    },
    {
      title: "Nivelación de Conocimientos para el Red Team",
      issuer: "Capacitación USACH",
      image: redTeamImage,
      date: "2024",
      url: "#",
      icon: <FaCertificate />
    },
    {
      title: "Talento Digital",
      issuer: "Fundación Telefónica",
      image: talentoDigitalImage,
      date: "2024",
      url: "https://www.acreditta.com/credential/5ba7777c-b7e5-4390-af98-73e35964353a",
      icon: <FaAward />
    },
    {
      title: "Programa Mentorías Mujeres Talento Digital",
      issuer: "TCS (Tata Consultancy Services)",
      image: programaMentoriasTCSImage, 
      date: "2025",
      url: "https://www.acreditta.com/credential/345d7be2-3169-413e-a74f-e087f5f36943",
      icon: <FaAward />
    },
    {
      title: "Ciencia de Datos - Especialidad",
      issuer: "Talento Digital 2025",
      image: cienciaDataImage,
      date: "2025",
      url: "https://www.acreditta.com/credential/75481bea-4e5b-4326-a47c-c0a8e22a3c79?utm_source=copy&resource_type=badge&resource=75481bea-4e5b-4326-a47c-c0a8e22a3c79",
      icon: <FaCertificate />
    }
  ];

  return (
    <section className="badges-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certificaciones y Logros
      </motion.h2>
      <div className="badges-container">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            className="badge-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
            }}
          >
            <div className="badge-icon">{badge.icon}</div>
            <div className={`badge-image ${badge.title === "Talento Digital" ? 'talento-digital' : ''}`}>
              <img src={badge.image} alt={badge.title} />
            </div>
            <div className="badge-content">
              <h3>{badge.title}</h3>
              <p className="badge-issuer">{badge.issuer}</p>
              <p className="badge-date">{badge.date}</p>
              {badge.description && (
                <p className="badge-description">{badge.description}</p>
              )}
              {badge.url !== "#" && (
                <motion.a 
                  href={badge.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="badge-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Credencial
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Badges;