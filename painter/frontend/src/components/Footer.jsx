import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoInstagram } from "react-icons/bi";
import { RiLinkedinFill } from "react-icons/ri";
import logo from '../assets/Logo_Resized03.png'; // Ensure the path is correct

import "../styles/footer.css"
import ContactForm from "./ContactForm.jsx";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src={logo} alt="BrandAid Painting Logo" className="footer-logo" />
        <p className="footer-description">
          Behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts they live
        </p>
        <div className="footer-socials">
          <a
            href="https://facebook.com" aria-label="Facebook" target="blank"
            style={{ color: 'blue', fontSize: '20px' }} >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com" target="blank" rel="noopener noreferrer"
            style={{ color: '#1b1f95', fontSize: '20px' }} >
            <BiLogoInstagram />
          </a>
          <a
            href="https://www.linkedin.com" target="blank" rel="noopener noreferrer"
            style={{ color: 'blue', fontSize: '20px' }}>
            <RiLinkedinFill />
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h2 className="footer-title">Areas we serve</h2>
        <div className="footer-areas">
          <ul>
            <li>Delta</li>
            <li>Langley</li>
            <li>Maple Ridge</li>
            <li>New Westminster</li>
            <li>North Vancouver</li>
            <li>Port Coquitlam</li>
            <li>Port Moody</li>
          </ul>
          <ul>
            <li>Richmond</li>
            <li>Vancouver</li>
            <li>West Vancouver</li>
            <li>Surrey</li>
            <li>Squamish</li>
            <li>Chilliwack</li>
          </ul>
        </div>
      </div>
      <div className="footer-section">
        <h2 className="footer-title">BCD profile</h2>
        <p>Don’t miss our future updates! Get Subscribed Today!</p>
        <p className="footer-email">contact@brandaidpainting.com</p>
        <div className="footer-subscribe">
          <ContactForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
