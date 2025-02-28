import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (formData.user_name.trim().length < 3) {
      newErrors.user_name = "El nombre debe tener al menos 3 caracteres.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = "El email no es válido.";
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setStatus("Enviando mensaje...");

    try {
      await emailjs.sendForm(
        "service_4x256au",
        "template_k69c8jp",
        form.current,
        "XmCaE9kYXpTLbzDcy"
      );
      setStatus("¡Mensaje enviado con éxito!");
      setFormData({ user_name: "", user_email: "", message: "" });
      form.current.reset();
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("Error al enviar el mensaje. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contáctame</h2>
        <p className="contact-description">
          ¿Tienes alguna pregunta o propuesta? No dudes en escribirme.
        </p>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <input type="hidden" name="from_name" value="portafolio" />

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
            {errors.user_name && <p className="error-message">{errors.user_name}</p>}
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
            {errors.user_email && <p className="error-message">{errors.user_email}</p>}
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
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Enviando..." : "Enviar Mensaje"}
          </button>

          {status && (
            <div className={`status-message ${status.includes("éxito") ? "success" : "error"}`}>
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
