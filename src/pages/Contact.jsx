// src/pages/Contact.jsx
import React, { useState } from 'react';
const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado');
  };

  return (
    <div className="contact">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Mensaje:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
