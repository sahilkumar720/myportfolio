import { IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { profile, socials } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";
import "./Footer.css";

const socialIcons = {
  github: <FaGithub size={17} />,
  linkedin: <FaLinkedin size={17} />,
  twitter: <FaTwitter size={17} />,
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Reveal>
        <div className="container">
        <div className="footer-top">
            <a href="#top" className="footer-logo">
            Sahil<span className="dot">.</span>
          </a>

          <a href={`mailto:${profile.email}`} className="footer-email">
            <IoMail /> {profile.email}
          </a>
        </div>

          <div className="footer-bottom">
            <p>
              © {year} {profile.name}. All rights reserved.
            </p>
            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-icon"
                  title={s.label}
                  aria-label={s.label}
                >
                  {socialIcons[s.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
