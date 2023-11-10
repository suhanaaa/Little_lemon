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
                <h4>Heading</h4>
              </li>
              <li>Privacy</li>
              <li>Sub Heading</li>
              <li>Connect</li>
            </ul>
          </div>

          <div className="info">
            <ul className="first-ul">
              <li>
                <h4>Heading</h4>
              </li>
              <li>Privacy</li>
              <li>Sub Heading</li>
              <li>Connect</li>
            </ul>
          </div>
          <div className="info-two">
            <ul className="second-ul">
              <li>
                <h4>Heading</h4>
              </li>
              <li>Privacy</li>
              <li>Sub Heading</li>
              <li>Connect</li>
            </ul>
          </div>
        </div>

        <div className="social-container">
          <a
            href="https://www.youtube.com/c/jamesqquick"
            className="youtube social"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/learnbuildteach/"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.twitter.com/jamesqquick"
            className="twitter social"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/learnbuildteach"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
