import React, { useState } from 'react';
import '../Style/Contacto.css'; // Asegúrate de tener este archivo CSS para los estilos

const Contacto = () => {
  const [fecha, setFecha] = useState('');
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  return (
    <div>
      <h1 className="titulo-contacto">Contacto</h1>
      <div className="tarjeta">
        <h4 className="group-name">Group Name</h4>
        <div className="tarjeta-body">
          <form>
            <div>
              <label htmlFor="fecha"></label>
              <input
                type="date"
                id="fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="opciones"></label>
              <select
                id="opciones"
                value={opcionSeleccionada}
                onChange={(e) => setOpcionSeleccionada(e.target.value)}
              >
                <option value="">Seleccione...</option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
