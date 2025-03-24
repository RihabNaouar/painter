import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons/fa
import '../styles/home.css'
import pict1 from '../assets/rouleau_peinture_plafond.jpg'
function Home() {
  return (
    <div>
        <div className="hero-section">
      <div className="content">
        <h1>
          Brand aid Providing Best Painting Services for a Brighter Home.
        </h1>
        <p>From Interior Perfection to Exterior Excellence</p>
                <img src={pict1} alt="Pict1"  />
        
      </div>
    </div>
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
    </div>
  );
}

export default Home;
