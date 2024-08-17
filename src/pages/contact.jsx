import React from 'react';
import './Contact.css'; // Ensure your CSS is properly linked
import { FaPhone, FaEnvelope, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // React Icons for contact details

// Greeting card component
const GreetingCard = () => {
  return (
    <div className="card greeting-card">
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
  );
};

// Card component for Google Map location
const LocationCard = () => {
  return (
    <div className="card generic-card">
      <iframe 
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d282.43760610600253!2d77.70177100878813!3d27.424964370963167!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1723875912416!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          title="Viprab Technologies Office Location"
        ></iframe>
    </div>
  );
};

// Parent Contact component
const Contact = () => {
  return (
    <div className="contact-container">
      <GreetingCard />
      <LocationCard />
    </div>
  );
};

export default Contact;
