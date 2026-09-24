import {
  SiVite,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiFirebase,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaShieldAlt,
  FaBolt,
  FaCode,
  FaDesktop,
} from "react-icons/fa";
import { skills } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";
import "./Skills.css";

const skillIcons = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: FaJsSquare,
  react: FaReact,
  vite: SiVite,
  responsive: FaDesktop,
  node: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  jwt: FaShieldAlt,
  api: FaCode,
  rest: FaBolt,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
  figma: SiFigma,
  firebase: SiFirebase,
  postman: SiPostman,
};

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <Reveal>
        <p className="section-eyebrow">Core strengths</p>
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          I work across frontend, backend, and product implementation to build clean, functional experiences.
        </p>
      </Reveal>

      <div className="skills-grid">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.08}>
            <div className="skill-card">
              <h3>{group.category}</h3>

              <div className="skill-list">
                {group.items.map((item) => {
                  const Icon = skillIcons[item.icon] || SiReact;

                  return (
                    <div key={item.label} className="skill-item">
                      <div
                        className="skill-badge"
                        style={{ background: item.color }}
                        title={item.label}
                        aria-label={item.label}
                      >
                        <Icon />
                      </div>
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
