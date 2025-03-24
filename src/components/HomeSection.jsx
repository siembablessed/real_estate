import React from "react";
import "../styles/homesetcionnew.css"; // Import the CSS file

const HomeSection = () => {
  return (
    <div className="parallax-container">
      <div className="parallax-content">
        <h1>Trusted Property Management & Real Estate Experts</h1>
        <p>
          Managing, leasing, and selling properties with expertise and care. 
          From owners to tenants, we ensure seamless real estate solutions.
        </p>
        <a href="/properties" className="explore-link">
          Explore Available Properties →
        </a>
      </div>
    </div>
  );
};

export default HomeSection;
