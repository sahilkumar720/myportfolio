import { FiCode, FiBriefcase } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {profile, aboutCards, tools } from "../data/portfolioData.js";
import myprofile1 from "../assets/myprofile1.png";
import { BsInstagram } from "react-icons/bs";

import Reveal from "./Reveal.jsx";
import "./About.css";

// maps the `icon` string in portfolioData.js to an actual icon component
const cardIcons = {
  code: <FiCode size={22} />,
  education: <FaGraduationCap size={22} />,
  briefcase: <FiBriefcase size={22} />,
};

// maps each tool's `key` to its real logo + a brand color for the icon box
const toolIcons = {
  // vscode: { icon: <VscVscode />, color: "#007ACC" },
  // firebase: { icon: <SiFirebase />, color: "#FFA000" },
  instagram: { icon: <BsInstagram />, color: "#f952e8" },
  twitter: { icon: <RiTwitterXLine />, style: {color:"#ffffff"} },
  // github: { icon: <FaGithub />, color: "#1f1e1e" },
  github: { icon: <FaGithub />, style: { color: "#ffffff" } },

  linkedin: {icon: <FaLinkedin/>, color: "#0A66C2"},
  // linkedin: {icon: <FaLinkedin/>, style: { color: "#ffffff" } },


  
};

const About = () => {
  return (
    <section id="about" className="section container">
      <Reveal>
        <p className="section-eyebrow">Introduction</p>
        <h2 className="section-title">About me</h2>
      </Reveal>

      <div className="about-grid">
        <Reveal>
          <img src={myprofile1} alt={profile.name} className="about-photo" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="about-content">
            <p className="about-text">{profile.aboutText}</p>

            <div className="about-cards">
              {aboutCards.map((card) => (
                <div key={card.title} className="about-card">
                  {cardIcons[card.icon]}
                  <h3>{card.title}</h3>
                  {Array.isArray(card.detail) ? (
                    card.detail.map((line) => <p key={line}>{line}</p>)
                  ) : (
                    <p>{card.detail}</p>
                  )}
                </div>
              ))}
            </div>

            <p className="tools-label">Know me more.</p>
            <div className="tools-list">
              {tools.map((tool) => {
                const t = toolIcons[tool.key];
                
                return (
                  <a
                    key={tool.key}
                    className="tool-icon"
                    href={tool.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: t.color }}
                    title={tool.label}
                    aria-label={tool.label}
                  >
                    {t.icon}
                  </a>



                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
