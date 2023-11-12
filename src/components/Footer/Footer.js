import React from "react";
import Logo from "../../assets/icons_assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="logo">
          <img src={Logo} alt="Logo" style={{ height: 50, width: 200 }} />
        </div>

        <div className="info-container">
          <div className="info">
            <ul className="first-ul">
              <li>
                <h4>About Us</h4>
              </li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="info">
            <ul className="first-ul">
              <li>
                <h4>Services</h4>
              </li>
              <li>Menu</li>
              <li>Specials</li>
              <li>Events</li>
            </ul>
          </div>

          <div className="info-two">
            <ul className="second-ul">
              <li>
                <h4>Contact Information</h4>
              </li>
              <li>123 Main Street, Cityville, State, Zip</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@littlelemon.com</li>
            </ul>
          </div>
        </div>

        <div className="social-container">
          <a
            href="https://www.youtube.com/c/littlelemon"
            className="youtube social"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/littlelemon"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.twitter.com/littlelemon"
            className="twitter social"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/littlelemon"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </footer>
      <div className="footer-text">
        <p>© 2023 Little Lemon. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
