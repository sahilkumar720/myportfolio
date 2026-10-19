import {
  SiBootstrap,
  SiCloudinary,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFigma,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiLanggraph,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiRazorpay,
  SiReact,
  SiRedis,
  SiRedux,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaAws,
  FaCss3Alt,
  FaDatabase,
  FaBrain,
  FaCode,
  FaComments,
  FaJava,
  FaNetworkWired,
  FaNodeJs,
  FaProjectDiagram,
  FaSearch,
  FaServer,
} from "react-icons/fa";
import { SiJsonwebtokens } from "react-icons/si";
import { skills } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";
import "./Skills.css";

const skillIcons = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  java: FaJava,
  sql: FaDatabase,
  react: SiReact,
  nextjs: SiNextdotjs,
  redux: SiRedux,
  html5: SiHtml5,
  css3: FaCss3Alt,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  node: FaNodeJs,
  express: SiExpress,
  api: FaServer,
  jwt: SiJsonwebtokens,
  firebase: SiFirebase,
  mongodb: SiMongodb,
  mongoose: SiMongoose,
  mysql: SiMysql,
  redis: SiRedis,
  aws: FaAws,
  docker: SiDocker,
  render: SiRender,
  vercel: SiVercel,
  cloudinary: SiCloudinary,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  vscode: VscVscode,
  figma: SiFigma,
  razorpay: SiRazorpay,
  gemini: SiGooglegemini,
  llm: FaBrain,
  prompt: FaComments,
  rag: FaSearch,
  embeddings: FaProjectDiagram,
  langchain: SiLangchain,
  langgraph: SiLanggraph,
  mcp: FaNetworkWired,
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
                  const Icon = skillIcons[item.icon] || FaCode;

                  return (
                    <div key={item.label} className="skill-item">
                      <div
                        className="skill-badge"
                        style={{ color: item.color }}
                        aria-hidden="true"
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
