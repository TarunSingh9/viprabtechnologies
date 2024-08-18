import React from 'react';
import './about.css';

const about = () => {
  return (
    <div className="container">
      <header>
        <h1>Automation in Industries</h1>
      </header>
      
      <section id="futureImpact">
        <div className="image">
          <img src="https://equitablegrowth.org/wp-content/uploads/2021/12/Man-working-with-machines.jpg" alt="Automation Future Impact" />
        </div>
        <div className="description">
          <h2 className='sub-heading'>Future Impact</h2>
          <p>Automation is significantly transforming industries by enhancing productivity and efficiency. It allows for more agile production systems, where processes can be rapidly adapted to changes in demand without stopping the line to reconfigure settings. Innovations in AI and sensor technologies enable robots to perform tasks with a high degree of variability and precision, opening up opportunities for automation in areas like agriculture and intricate electronic assembly.</p>
        </div>
      </section>
       
      <section id="goals">
        <div className="image">
          <img src="https://importanceoftechnology.net/wp-content/uploads/2021/01/Importance-Of-Technology-In-Oil-And-Gas-Industry.jpg" alt="Automation Goals" />
        </div>
        <div className="description">
          <h2 className='sub-heading'>Goals</h2>
          <p>The primary goal of industrial automation is to increase operational efficiency and reduce costs. By integrating advanced technologies like the Industrial Internet of Things (IIoT) and AI, factories are becoming smarter. This includes the adoption of predictive maintenance, which minimizes downtime, and seamless interoperability among different systems, facilitating smoother operations and data-driven decision making.</p>
        </div>
      </section>
      
      <section id="needs">
        <div className="image">
          <img src="https://img.freepik.com/free-photo/photo-automobile-production-line-welding-car-body-modern-car-assembly-plant-auto-industry-male-worker-orange-protective-helmet_645730-108.jpg" alt="Automation Needs" />
        </div>
        <div className="description">
          <h2 className='sub-heading'>Needs</h2>
          <p>To keep pace with the rapid advancements in technology, industries need to focus on upskilling their workforce to handle new tools and technologies. This involves training in digital skills, AI, and the management of automated systems. Additionally, industries need to invest in state-of-the-art infrastructure and ensure their systems are compatible with the latest standards in connectivity and data exchange.</p>
        </div>
      </section>
      
      <section id="importance">
        <div className="image">
          <img src="https://www.ashlingpartners.com/wp-content/uploads/2023/07/Blog-42-The-Role-of-Automation-in-the-Future-of-Energy-for-Oil-Gas-scaled-e1700084190993.jpg" alt="Automation Importance" />
        </div>
        <div className="description">
          <h2 className='sub-heading'>Importance</h2>
          <p>Industrial automation is crucial for sustaining competitive advantage in a global market. It allows businesses to maintain high quality and consistency in production, manage labor costs, and improve safety standards. Moreover, automation is integral in meeting the growing demands for sustainability and efficiency, helping companies to adhere to environmental regulations and optimize resource use.</p>
        </div>
      </section>
      
      <section id="challenges">
        <div className="image">
          <img src="https://www.electricsolenoidvalves.com/product_images/uploaded_images/oil-field-upstream.jpg" alt="Challenges and Opportunities" />
        </div>
        <div className="description">
          <h2 className='sub-heading'>Challenges</h2>
          <p>While automation presents numerous opportunities, it also poses challenges, particularly in terms of workforce displacement. However, history suggests that technology often creates more jobs than it displaces, and the jobs that are affected are transformed rather than eliminated. New roles that are emerging are often more focused on technology management, oversight, and innovation.</p>
        </div>
      </section>
    </div>
  );
};

export default about;
