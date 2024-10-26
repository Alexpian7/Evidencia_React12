import React from 'react';
import '../Style/Servicios.css'; // Asegúrate de importar el CSS si usas un archivo separado

const Servicios = () => {
  return (
    <div className="servicio">
      <h1>Servicios</h1>
      <div className="card-container">
        <div className="card">
          <h2>Servicio 1</h2>
          <p>Descripción breve del servicio 1. Aquí puedes añadir más detalles sobre lo que ofrece este servicio.</p>
        </div>
        <div className="card">
          <h2>Servicio 2</h2>
          <p>Descripción breve del servicio 2. Aquí puedes añadir más detalles sobre lo que ofrece este servicio.</p>
        </div>
       
      </div>
    </div>
  );
};

export default Servicios;
