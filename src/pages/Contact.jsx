import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",    // Cambiado para coincidir con la plantilla de EmailJS
    user_email: "",   // Cambiado para coincidir con la plantilla de EmailJS
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Enviando mensaje...");

    emailjs.sendForm(
      'service_4x256au',
      'template_k69c8jp',
      form.current,
      'XmCaE9kYXpTLbzDcy'
    )
      .then((result) => {
        console.log(result.text);
        setStatus("¡Mensaje enviado con éxito!");
        setFormData({
          user_name: "",
          user_email: "",
          message: ""
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.text);
        setStatus("Error al enviar el mensaje. Por favor, intenta nuevamente.");
        setLoading(false);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contáctame</h2>
        <p className="contact-description">
          ¿Tienes alguna pregunta o propuesta? No dudes en escribirme.
        </p>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="user_name">Nombre</label>
            <input
              type="text"
              id="user_name"
              name="user_name"           
              value={formData.user_name} 
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"           
              value={formData.user_email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea                    
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí"
              required
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Mensaje"}
          </button>

          {status && (
            <div
              className={`status-message ${status.includes("éxito") ? "success" : "error"}`}
              aria-live="polite"
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;