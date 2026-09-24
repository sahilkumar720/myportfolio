// The big "Home" section at the top of the page (id="top" so the
// navbar's Home link can scroll back to it).

import { FiArrowRight, FiDownload } from "react-icons/fi";

import "./Hero.css";
import { profile } from "../data/portfolioData.js";
import myprofile2 from "../assets/myprofile2.png";

const Hero = () => {
  return (
    <section id="top" className="hero container fade-in-up">
      <img src={myprofile2} alt={profile.name} className="hero-photo" />

      <p className="hero-greeting">{profile.greeting} 👋</p>

      <h1 className="hero-heading">{profile.role}</h1>

      <p className="hero-description">{profile.heroDescription}</p>

      <div className="hero-actions">
        <a href="#contact" className="btn btn-primary">
          contact me <FiArrowRight />
        </a>
        <a href={profile.resumeLink} download className="btn btn-outline">
          my resume <FiDownload />
        </a>
      </div>
    </section>
  );
};

export default Hero;
