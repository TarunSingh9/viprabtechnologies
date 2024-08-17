import React from 'react';
import './review.css';

const Review = () => {
  return (
    <div className="parent-card">
      <h1>Review and Work Performance</h1>
      <div className="review-grid">
        <figure className="review-card">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Seamless Automation Integration</h3>
            <p className="my-4">Viprab Technologies made automation so simple, we were able to save countless hours and focus on what really matters."</p>
          </blockquote>
          <figcaption className="review-figcaption">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile " />
            <div>
              <div>Rajesh Kumar</div>
              <div>Senior Engineer at Indian Oil Corporation</div>
            </div>
          </figcaption>
        </figure>
        <figure className="review-card">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Robust Solutions for Efficiency</h3>
            <p className="my-4">Their industry-efficient tools are game-changers. We've improved our processes and output significantly!"</p>
          </blockquote>
          <figcaption className="review-figcaption">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile" />
            <div>
              <div>Priya Sharma</div>
              <div>Operations Lead at Bharat Petroleum</div>
            </div>
          </figcaption>
        </figure>
        <figure className="review-card">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Transformative Work Experience</h3>
            <p className="my-4">Working with Viprab Technologies has been a breath of fresh air. Their expertise and support are unparalleled."</p>
          </blockquote>
          <figcaption className="review-figcaption">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile" />
            <div>
              <div>Amit Patel</div>
              <div>Software Engineer at Reliance Industries</div>
            </div>
          </figcaption>
        </figure>
        <figure className="review-card">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Innovative IoT Tools</h3>
            <p className="my-4">The IoT tools provided by Viprab Technologies are top-notch, enabling us to stay ahead in a competitive market."</p>
          </blockquote>
          <figcaption className="review-figcaption">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile" />
            <div>
              <div>Sunita Reddy</div>
              <div>CTO at Hindustan Petroleum</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Review;

