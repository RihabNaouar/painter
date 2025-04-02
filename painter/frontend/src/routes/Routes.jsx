import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import ContactViaWhatsApp from '../components/ContactViaWhatsApp';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Gallery from '../Pages/Gallery';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-whatsapp" element={<ContactViaWhatsApp />} />
    </Routes>
  );
};

export default AppRoutes;
