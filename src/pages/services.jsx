// Services.jsx
import React from 'react';
import './Services.css'; // Import the CSS file for styling

const services = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>
          At [Your Company Name], we specialize in delivering cutting-edge solutions across various technology domains. From Industrial Automation to IoT Integration, our services are designed to streamline operations, enhance system efficiency, and ensure robust security. With comprehensive system upgrades, we are dedicated to meeting your every need and exceeding your expectations.
        </p>
      </header>
      <div className="services-content">
        <div className="service-card">
          <img src="https://cdn.pixabay.com/photo/2017/09/27/10/30/robot-2791671_960_720.jpg" alt="Industrial Automation" className="service-image" />
          <div className="service-description">
            <h2>Industrial Automation</h2>
            <p>Optimize your manufacturing processes with our advanced Industrial Automation solutions. We integrate sophisticated technologies to enhance productivity, reduce downtime, and ensure seamless operation across your facilities.</p>
            <a href="/read-more" className="read-more">Read More</a>
          </div>
        </div>
        <div className="service-card">
          <img src="https://img.freepik.com/free-vector/illustration-with-multitasking-concept_23-2148408832.jpg" alt="System Integration" className="service-image" />
          <div className="service-description">
            <h2>System Integration</h2>
            <p>Achieve operational harmony with our System Integration services. We connect disparate systems, enabling smooth data flow and communication to enhance efficiency and simplify your IT environment.</p>
            <a href="/read-more" className="read-more">Read More</a>
          </div>
        </div>
        <div className="service-card">
          <img src="https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18146.jpg?t=st=1723370928~exp=1723374528~hmac=3a9d4ce933b563620f7406b612bf46df978a812ee36dfd0876e2df45f0245b76&w=1380" alt="IoT Integration" className="service-image" />
          <div className="service-description">
            <h2>IoT Integration</h2>
            <p>Transform your business with our IoT Integration services. We implement smart technologies to collect and analyze data, providing valuable insights and enabling real-time decision-making to drive innovation.</p>
            <a href="/read-more" className="read-more">Read More</a>
          </div>
        </div>
        <div className="service-card">
          <img src="https://img.freepik.com/premium-photo/automation-business-process-innovation-technology-manufacturing-internet-technology-concept-server-room-background_161452-10581.jpg?w=1380" alt="Automation System Upgrades" className="service-image" />
          <div className="service-description">
            <h2>Automation System Upgrades</h2>
            <p>Stay ahead of the curve with our Automation System Upgrades. We provide cutting-edge upgrades to your existing systems, improving performance, security, and functionality to keep your operations running smoothly.</p>
            <a href="/read-more" className="read-more">Read More</a>
          </div>
        </div>
        <div className="service-card">
          <img src="https://img.freepik.com/free-photo/closeup-cctv-camera-wall_53876-33830.jpg?ga=GA1.1.1558806304.1723351145&semt=ais_hybrid" alt="Security Systems" className="service-image" />
          <div className="service-description">
            <h2>Security Systems</h2>
            <p>Protect your assets with our comprehensive Security Systems. We offer state-of-the-art solutions to safeguard your facilities, ensuring that your operations are secure and resilient against potential threats.</p>
            <a href="/read-more" className="read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;
