import React from 'react';
import { FaCogs, FaHeadset, FaUserTie, FaNetworkWired } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  return (
    <div className="service-container">
      <div className="service-header">
        <h1>Empowering Industry Efficiency with Advanced Automation, Security, and IoT Solutions</h1>
        <p>Delivering Reliable Support and Expert Services for Optimal Performance in Industrial Operations.</p>
      </div>
      
      <div className="service-services">
        <div className="services-card">
          <FaCogs className="service-icon" />
          <h2>Automation Services</h2>
          <p>Streamline your industrial operations with cutting-edge automation solutions, tailored to enhance productivity and reduce downtime.</p>
        </div>
        <div className="services-card">
          <FaHeadset className="service-icon" />
          <h2>Reliable Support System</h2>
          <p>Experience uninterrupted operations with our reliable support system, designed to provide timely assistance and prevent potential issues.</p>
        </div>
        <div className="services-card">
          <FaUserTie className="service-icon" />
          <h2>Expert Support</h2>
          <p>Leverage our team of industry experts for specialized support and guidance, ensuring your systems are always running at peak performance.</p>
        </div>
        <div className="services-card">
          <FaNetworkWired className="service-icon" />
          <h2>IoT Tools</h2>
          <p>Optimize efficiency and monitor your operations in real-time with our advanced IoT tools, designed for seamless integration and intelligent decision-making.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
