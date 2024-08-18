import React, { useState } from 'react';
import "./navbar.css";
import { FaHome, FaInfoCircle, FaServicestack, FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);  // Close the menu when a link is clicked
  };

  return (
    <nav>
      <div className='title'>Viprab Technologies</div>
      {!menuOpen ? (
        <FaBars className="menu-icon" onClick={() => setMenuOpen(true)} />
      ) : (
        <FaTimes className="menu-close" onClick={() => setMenuOpen(false)} />
      )}
      <ul className={menuOpen ? 'nav-links-mobile' : 'nav-links'}>
        <li>
          <a href="#home" className={activeLink === '#home' ? 'active' : ''} onClick={() => handleClick('#home')}>
            <FaHome /> Home
          </a>
        </li>
        <li>
          <a href="#about" className={activeLink === '#about' ? 'active' : ''} onClick={() => handleClick('#about')}>
            <FaInfoCircle /> About
          </a>
        </li>
        <li>
          <a href="#services" className={activeLink === '#services' ? 'active' : ''} onClick={() => handleClick('#services')}>
            <FaServicestack /> Services
          </a>
        </li>
        <li>
          <a href="#contact" className={activeLink === '#contact' ? 'active' : ''} onClick={() => handleClick('#contact')}>
            <FaPhone /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
