import React from 'react';

const ContactViaWhatsApp = () => {
  // Numéro WhatsApp (remplacez par votre propre numéro de téléphone)
  const phoneNumber = '21612345678'; // Remplacez par votre numéro de téléphone WhatsApp
  const message = 'Hi there ! https://brandaidpainting.com/'; // Message pré-rempli

  // URL WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div>
      <h2>Contactez-nous via WhatsApp</h2>
      <button onClick={() => window.open(whatsappLink, '_blank')}>
        Utiliser WhatsApp
      </button>
    </div>
  );
};

export default ContactViaWhatsApp;
