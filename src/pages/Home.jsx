import React from 'react';
import './Home.css';
import Card from './Card';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className='home'>Empowering Innovation with Cutting-Edge Automation</h1>
        <p>
          Comprehensive IoT Solutions, Advanced Security Systems, and Expert Automation Services from Viprab Technologies
        </p>
        <div className="buttons">
          <a href="/services" className="button">Explore Services</a>
          <a href="/about" className="button">Check My Work</a>
        </div>

        <div className="service-cards">
          <Card 
            icon="fas fa-cogs"
            title="Automation Support"
            description="Streamline your processes with our expert automation services, designed to boost efficiency and reduce costs."
          />
          <Card 
            icon="fas fa-shield-alt"
            title="Security Services"
            description="Protect your business with advanced security solutions, ensuring peace of mind and operational continuity."
          />
          <Card 
            icon="fas fa-code-branch"
            title="Object-Oriented Design"
            description="Enhance your software architecture with our object-oriented system design, promoting scalability and maintainability."
          />
          <Card 
            icon="fas fa-users-cog"
            title="Third-Party Support"
            description="Leverage our third-party support to integrate and manage external systems seamlessly within your infrastructure."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;