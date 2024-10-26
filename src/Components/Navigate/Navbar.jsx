import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div >
    
   
    <div>
      <div className="navbar-nav " >
        <Link className="nav-link active" to="/">Home</Link>
        <Link className="nav-link active" to="/Servicios">Servicios</Link>
        <Link className="nav-link active" to="/Contacto">Contacto</Link>
        <Link className="nav-link active" to="/Productos">Productos</Link>
        <Link className="nav-link active" to="/Acerca">Acerca de </Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
