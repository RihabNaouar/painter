import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import ContactViaWhatsApp from '../components/ContactViaWhatsApp';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-whatsapp" element={<ContactViaWhatsApp />} />
    </Routes>
  );
};

export default AppRoutes;
