import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navigate/navbar'
import Servicios from './Components/Pages/Servicios'
import Contacto from './Components/Pages/Contacto'
import Productos from './Components/Pages/Productos'
import Home from './Components/Pages/Home'
import Acerca from './Components/Pages/Acerca'
import Footer from './Components/Pages/Footer'

function App() {
  return (
    <div className='App'>
      <Router>
       
        
          <Navbar />
       
        
       
        <main className="content-container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Servicios' element={<Servicios />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/Productos' element={<Productos />} />
            <Route path='/Acerca' element={<Acerca />} />
          </Routes>
        </main>
        
        
        <footer className="footer-container">
          <Footer />
        </footer>
      </Router>
    </div>
  )
}

export default App
