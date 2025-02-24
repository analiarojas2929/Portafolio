import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el email
    console.log('Enviando...', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.section 
      className="contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="contact-container">
        <h2 className="section-title">Contacto</h2>
        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombre"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Mensaje"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              rows="4"
            />
          </div>

          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar <FaPaperPlane />
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactForm;