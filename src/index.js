import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css'; // Importa los estilos globales
import App from './App'; // Componente principal de la aplicación

// Renderiza la aplicación en el DOM
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderiza el componente principal */}
  </React.StrictMode>,
  document.getElementById('root') // Aquí se insertará el componente
);
