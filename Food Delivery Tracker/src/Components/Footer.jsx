import React from "react";
import { assets, footerLinks } from "../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div>
          <img className="footer-logo" src={assets.logo} alt="logo" />
          <p className="footer-description">
            We deliver fresh groceries and snacks straight to your door.
            Trusted by thousands, we aim to make your shopping experience
            simple and affordable.
          </p>
        </div>
        <div className="footer-links">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="footer-section-title">{section.title}</h3>
              <ul className="footer-link-list">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="footer-link">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="footer-bottom-text">
        Copyright {new Date().getFullYear()} © GreenCart.dev All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;