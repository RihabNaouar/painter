import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'; // Import Facebook and LinkedIn icons
import { RiInstagramFill } from 'react-icons/ri'; // Corrected import for Instagram icon
import { IoMdArrowDropdown } from "react-icons/io"; // Import the correct dropdown arrow icon
import '../styles/navbar.css';
import logo from '../assets/Logo_Resized03.png'; // Ensure the path is correct

function Navbar() {
  return (
    <nav className="navbar">
      {/* First Line: Contact Information */}
      <div className="navbar-top">
        <div className="contact">
          <a href="tel:+16047045671">+1 604-704-5671</a> | 
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@brandaidpainting.com" 
          target="blank" rel="noopener noreferrer">contact@brandaidpainting.com</a>| 
          <span>11275 136 St, Surrey, BC V3R 3B8, Canada</span>
        </div>
        <div className="socialmedia">
          <a href="https://facebook.com" aria-label="Facebook" target='blanck' className="facebook">
            <FaFacebookF size={30} color="#3b5998" /> {/* Customize the size and color */}
          </a>
          <a href="https://www.instagram.com" target="blank" rel="noopener noreferrer">
            <RiInstagramFill size={30} />
          </a>
          <a href="https://www.linkedin.com" target="blank" rel="noopener noreferrer">
            <FaLinkedinIn size={30} color="#0077B5" /> {/* Customize LinkedIn icon */}
          </a>
        </div>
      </div>

      {/* Second Line: Logo and Navigation Menu */}
      <div className="navbar-bottom">
        <img src={logo} alt="BrandAid Painting Logo" className="navbar-logo" />
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          {/* Services with Arrow */}
          <li className="dropdown">
            <a href="/services">Services <IoMdArrowDropdown size={16} /> </a> {/* Corrected icon name */}
            <div className="dropdown-content">
              <ul>
                <li><a href="/hello">Interior House Painting</a></li>
                <li><a href="/hello">Exterior House Painting</a></li>
                <li><a href="/hello">Other Services</a></li>
              </ul>
            </div>
          </li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/gallery">Gallery</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
