import React from "react";
import { assets, features } from "../assets/assets";
import "./BottomBanner.css";

const BottomBanner = () => {
  return (
    <div className="bottom-banner">
      <img
        src={assets.bottom_banner_image}
        alt="banner"
        className="banner-img-lg"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="banner"
        className="banner-img-sm"
      />

      <div className="banner-content">
        <div>
          <h1 className="banner-heading">Why We Are The Best?</h1>
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
              />
              <div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;