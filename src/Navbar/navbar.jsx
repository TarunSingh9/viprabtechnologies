import React, { useState } from 'react';
import "./navbar.css";
import { FaHome, FaInfoCircle, FaServicestack, FaPhone, FaStar } from 'react-icons/fa';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <a href="#" className='title'>
        Viprab Technologies
      </a>
      <ul>
        <li>
          <a
            href="#home"
            className={activeLink === '#home' ? 'active' : ''}
            onClick={() => handleClick('#home')}
          >
            <FaHome /> Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeLink === '#about' ? 'active' : ''}
            onClick={() => handleClick('#about')}
          >
            <FaInfoCircle /> About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={activeLink === '#services' ? 'active' : ''}
            onClick={() => handleClick('#services')}
          >
            <FaServicestack /> Services
          </a>
        </li>
        <li>
          <a
            href="#review"
            className={activeLink === '#review' ? 'active' : ''}
            onClick={() => handleClick('#review')}
          >
            <FaStar /> Review
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === '#contact' ? 'active' : ''}
            onClick={() => handleClick('#contact')}
          >
            <FaPhone /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
