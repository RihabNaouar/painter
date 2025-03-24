import axios from 'axios';
import React, { useState } from 'react';
import '../styles/Popup.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [showPopup, setShowPopup] = useState(false); // État pour afficher la modale
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/send-request', formData);
      setResponseMessage(response.data.message);
      setShowPopup(true); // Afficher la modale après la soumission réussie
    } catch (error) {
      console.error('Erreur:', error);
      setResponseMessage('Une erreur est survenue. Veuillez réessayer.');
      setShowPopup(true); // Afficher la modale en cas d'erreur
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Fermer la modale
  };

  return (
    <div>
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>{responseMessage}</p>
            <button className="close-button" onClick={handleClosePopup}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
