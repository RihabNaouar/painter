import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/Routes'; // Import du fichier Routes.jsx
import { FaWhatsapp } from 'react-icons/fa';
import './App.css'
function App() {
  return (
    <div>
      <Navbar /> {/* Affiche la navbar sur toutes les pages */}
      <AppRoutes /> 
      {/* Bouton WhatsApp visible sur toutes les pages */}
           {/* WhatsApp Icon */}
           <a
        href="https://web.whatsapp.com/send?phone=+21699268595&text=Bonjour,%20j'ai%20une%20question%20concernant%20vos%20services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
      ><button className="whatsapp-button">
      <span className="whatsapp-icon">
        <FaWhatsapp size={40} color="white" /> {/* WhatsApp icon */}
        </span>
        <p style={{ textDecorationLine: 'none' }}>How can I help you?</p>

    </button>
      </a>
      <Footer /> {/* Affiche le footer sur toutes les pages */}
    </div>
  );
}

export default App;
