import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin as fabLinkedin,
  faGithub as fabGithub,
  faTelegramPlane as fabTelegramPlane,
  faInstagram as fabInstagram,
  faFacebook as fabFacebook,
  faYoutube as fabYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li>
              <a href="#Home">
                <FontAwesomeIcon icon={faChevronCircleRight} /> Home
              </a>
            </li>
            <li>
              <a href="#AboutMe">
                <FontAwesomeIcon icon={faChevronCircleRight} /> About Me
              </a>
            </li>
            <li>
              <a href="#Project">
                <FontAwesomeIcon icon={faChevronCircleRight} /> Project
              </a>
            </li>
            <li>
              <a href="#Skills">
                <FontAwesomeIcon icon={faChevronCircleRight} /> Skills
              </a>
            </li>
            <li>
              <a href="#Education">
                <FontAwesomeIcon icon={faChevronCircleRight} /> Education
              </a>
            </li>
            <li>
              <a href="#Contact">
                <FontAwesomeIcon icon={faChevronCircleRight} /> Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="QL">Contact Info</h3>
          <ul className="contact-info">
            <li>
              <a href="tel:+918180819246">
                <FontAwesomeIcon icon={faPhone} /> +91 8180819246
              </a>
            </li>
            <li>
              <a
                href="mailto:maheshchavan9246@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} /> maheshchavan9246@gmail.com
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Pune, 411001
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Social Links</h3>
          <ul className="social-links">
            <li>
              <a
                href="https://www.linkedin.com/in/mahesh-chavan-2a6b99249"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={fabLinkedin} aria-label="LinkedIn" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/1maheshchavan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={fabGithub} aria-label="GitHub" />
              </a>
            </li>
            <li>
              <a
                href="mailto:maheshchavan9246@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} aria-label="Mail" />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/Mahesh46"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={fabTelegramPlane}
                  aria-label="Telegram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mahesh_chavan27?igsh=N2kxYzd4cmRlc2ht"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={fabInstagram} aria-label="Instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100023686989872"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={fabFacebook} aria-label="Facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@code_with_mahesh_?si=4CVVLkRhw2KviIp7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={fabYoutube} aria-label="YouTube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;