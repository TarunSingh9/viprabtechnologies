import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleReadMore = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="home-container">

      {/* Headline Section */}
      <section className="headline-section">
        <h1>Innovative Automation Solutions for Modern Businesses</h1>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h2>Recent Blog Posts</h2>
        <div className="blog-grid">
          {[
            {
              title: "Transforming Manufacturing with Viprab Technologies",
              author: "Rohan Sharma",
              content: "Viprab Technologies has been a game-changer for our manufacturing unit...",
              fullContent: "Viprab Technologies has been a game-changer for our manufacturing unit. Their industrial automation services have significantly improved our production efficiency. The team’s deep knowledge and attention to detail ensured that our systems were seamlessly integrated. We are now running at an optimized level, thanks to their cutting-edge solutions. Their support has been outstanding, and we couldn’t be happier with the results.",
              rating: "⭐⭐⭐⭐⭐"
            },
            {
              title: "Seamless System Integration by Viprab Technologies",
              author: "Priya Kapoor",
              content: "Working with Viprab Technologies on our system integration project was a fantastic experience...",
              fullContent: "Working with Viprab Technologies on our system integration project was a fantastic experience. They not only understood our requirements but also provided innovative solutions that exceeded our expectations. The integration was flawless, and their ongoing support has been exemplary. Viprab Technologies is truly a partner in our growth, making our operations smoother and more efficient.",
              rating: "⭐⭐⭐⭐⭐"
            },
            {
              title: "IoT Integration that Revolutionized Our Business",
              author: "Anil Deshmukh",
              content: "The IoT integration services provided by Viprab Technologies have revolutionized our business operations...",
              fullContent: "The IoT integration services provided by Viprab Technologies have revolutionized our business operations. Their expertise in connecting and managing devices has enabled us to monitor our systems in real-time, making data-driven decisions that have greatly benefited our bottom line. The team at Viprab Technologies was professional and responsive throughout the project. We highly recommend their services to any business looking to leverage IoT for operational excellence.",
              rating: "⭐⭐⭐⭐⭐"
            },
            {
              title: "Empowering Businesses with Advanced Security Systems",
              author: "Aarav Patel",
              content: "Viprab Technologies has taken our security systems to the next level....",
              fullContent: "Viprab Technologies has taken our security systems to the next level. Their advanced security solutions have provided us with robust protection and peace of mind. The team’s expertise in designing and implementing state-of-the-art security systems was evident from the start. we’ve experienced a notable increase in safety and operational security. Viprab Technologies has proven to be an invaluable asset to our security strategy.",
              rating: "⭐⭐⭐⭐"
            },
            {
              title: "A Smooth Upgrade to Automation Systems",
              author: "Neha Agarwal",
              content: "We recently upgraded our automation systems with the help of Viprab Technologies, and the experience was seamless...",
              fullContent: "We recently upgraded our automation systems with the help of Viprab Technologies, and the experience was seamless. The transition was handled with utmost professionalism, and the new systems have greatly enhanced our productivity. The team was knowledgeable, and their attention to detail ensured that the upgrade was completed on time without any disruptions to our operations. Viprab Technologies has proven to be a reliable partner in our automation journey.",
              rating: "⭐⭐⭐⭐⭐"
            }

          ].map((post, index) => (
            <div className={`blog-card ${expandedCard === index ? 'expanded' : ''}`} key={index}>
              <div className="star-rating">{post.rating}</div>
              <h3>{post.title}</h3>
              <p><strong>Author:</strong> {post.author}</p>
              <p>{expandedCard === index ? post.fullContent : post.content}</p>
              <button className="read-more-btn" onClick={() => handleReadMore(index)}>
                {expandedCard === index ? "Show Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
