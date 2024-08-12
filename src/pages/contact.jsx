import React from 'react'
import { FaPhone, FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Get in Touch with Viprab Technologies</h2>
        <p>
          At Viprab Technologies, we're here to help you with all your technology and automation needs. Whether you have questions about our services, need support with a project, or want to discuss how we can collaborate, our team is ready to assist you. Reach out to us anytime, and we'll get back to you promptly with the solutions you need. Your success is our priority, and we're committed to providing you with exceptional service every step of the way.
        </p>
        <div className="contact-info">
          <p><FaPhone /> +1234567890</p>
          <p><FaWhatsapp /> +0987654321</p>
          <p><FaEnvelope /> info@viprab.com</p>
          <p><FaLinkedin /> linkedin.com/company/viprab</p>
        </div>
      </div>
      <div className="map-card">
        <iframe 
          src="https://www.google.com/maps/embed?pb=" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          title="Viprab Technologies Office Location"
        ></iframe>
      </div>
    </div>
  )
}

export default contact