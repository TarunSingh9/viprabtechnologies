import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const handleClick = (url) => {
    // Open a new tab with the provided URL
    window.open(url, '_blank');
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        <h3>Contact Us</h3>
        <p onClick={() => handleClick('https://www.viprab.com/contact')}>info@viprab.com</p>
        <p>© 2024 Viprab Technology. All rights reserved.</p>
        <div className="social-icons">
          <FaFacebook className="icon" onClick={() => handleClick('https://www.facebook.com/Viprab')}/>
          <FaTwitter className="icon" onClick={() => handleClick('https://www.twitter.com/Viprab')}/>
          <FaInstagram className="icon" onClick={() => handleClick('https://www.instagram.com/Viprab')}/>
          <FaLinkedin className="icon" onClick={() => handleClick('https://www.linkedin.com/company/Viprab')}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
