import React from 'react';
import { IMAGES } from '../assets/image';

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <header className="page-header">
        <h1>About Our Brand</h1>
        <p>Innovation meets design in everything we do.</p>
      </header>

      <section className="container grid-2">
        {/* Left Column: Image */}
        <div className="image-wrapper">
          <img src={IMAGES.about} alt="Our Workspace" className="responsive-img" />
        </div>

        {/* Right Column: Text Content */}
        <div className="text-content">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          {/* Feature Showcase Button */}
          <button className="btn-secondary" onClick={() => alert('Learn more about our team!')}>
            Meet the Team
          </button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <h2>Our Philosophy</h2>
          <div className="cards-container">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card">
                <h3>Core Value {item}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac eros.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;