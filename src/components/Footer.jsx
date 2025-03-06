// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-social">
            <h4>Conecta conmigo</h4>
            <div className="social-links">
              <motion.a 
                href="https://github.com/analiarojas2929" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#ff7f50' }}
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/analia-rojas-araya-056349205/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#ff7f50' }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a 
                href="mailto:analiarojas818@gmail.com"
                whileHover={{ scale: 1.2, color: '#ff7f50' }}
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="made-with">
            Hecho con <FaHeart className="heart-icon" /> por Analia Rojas Araya
          </p>
          <p className="copyright">
            &copy; {currentYear} - Todos los derechos reservados
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
