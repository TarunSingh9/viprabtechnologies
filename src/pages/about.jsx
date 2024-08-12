import React from 'react'
import { FaToolbox, FaShieldAlt, FaDatabase, FaChartLine, FaCog, FaUsers } from 'react-icons/fa';
import './about.css';

const cards = [
  {
    icon: <FaToolbox />,
    title: 'Automation Tools',
    description: 'Cutting-edge automation tools to streamline your processes.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Face Detection Systems',
    description: 'Advanced face detection systems for enhanced security.'
  },
  {
    icon: <FaDatabase />,
    title: 'Data Storage Solutions',
    description: 'Secure data storage solutions to protect your valuable information.'
  },
  {
    icon: <FaChartLine />,
    title: 'Plant Resource Management',
    description: 'Comprehensive management of plant resources to optimize performance.'
  },
  {
    icon: <FaCog />,
    title: 'Manual Storage Options',
    description: 'Seamless manual storage options for easy management.'
  },
  {
    icon: <FaUsers />,
    title: '24/7 Support',
    description: 'Dedicated support available around the clock.'
  }
];

const about = () => {
  return (
    <div className="about-container">
    <h1>Viprab Technologies: Revolutionizing Automation and Resource Management</h1>
    <p>
      At Viprab Technologies, we specialize in delivering cutting-edge automation tools, advanced face detection systems, and secure data storage solutions. Our expertise extends to comprehensive plant resource management and seamless manual storage options, backed by 24/7 support. We are committed to enhancing operational efficiency and driving innovation for businesses worldwide.
    </p>
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="card-icon">{card.icon}</div>
          <div className="card-description">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default about