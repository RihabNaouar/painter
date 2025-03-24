import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import ContactViaWhatsApp from './components/ContactViaWhatsApp';
import Navbar from './components/Navbar'; // Importez la Navbar ici
import Footer  from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar /> {/* Affichez la navbar en haut de la page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-whatsapp" element={<ContactViaWhatsApp />} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App 