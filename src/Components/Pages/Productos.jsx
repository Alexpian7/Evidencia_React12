import React from 'react';
import '../Style/Productos.css'; 
import crema from '../../assets/crema.avif'; 
import cremas from '../../assets/cremas.avif'; 
import dulces from '../../assets/dulces.avif'; 
import vaso from '../../assets/vaso.avif'; 
import perfum from '../../assets/perfum.avif'; 

const Productos = () => {

  const imagenes = [
    crema, 
    cremas,
    dulces,
    vaso,
    perfum,
  ];

  return (
    <div>
      <h1 className="titulo-productos">Productos</h1>
      <div className="productos-container">
        {imagenes.map((imagen, index) => (
          <img key={index} src={imagen} alt={`Producto ${index + 1}`} className="producto-imagen" />
        ))}
      </div>
    </div>
  );
};

export default Productos;
