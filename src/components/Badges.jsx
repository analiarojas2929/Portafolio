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

const Badges = () => {
  const badges = [
    {
      title: "AWS Academy Graduate",
      issuer: "AWS Academy",
      image: awsImage,
      date: "2024",
      url: "https://www.credly.com/users/analia-rojas",
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