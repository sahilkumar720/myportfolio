// "Services" section — icon + title + short blurb, with a "Read more"
// toggle that expands a longer description in place (no extra page
// or routing needed). Edit the `services` array in portfolioData.js
// to change what's offered.

import { useState } from "react";
import { FiGlobe, FiLayers, FiCode, FiPenTool, FiArrowRight } from "react-icons/fi";
import { services } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";
import "./Services.css";

const serviceIcons = {
  web: <FiGlobe size={22} className="service-icon service-icon1" />,
  fullstack: <FiLayers size={22} className="service-icon service-icon2" />,
  api: <FiCode size={22} className="service-icon service-icon3" />,
  design: <FiPenTool size={22} className="service-icon service-icon4" />,
};

const Services = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="services" className="section container">
      <Reveal>
        <p className="section-eyebrow">What I offer</p>
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">{`A few ways I can help — reach out if you have something else in mind.`}</p>
      </Reveal>

      <div className="services-grid">
        {services.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <Reveal key={service.title} delay={index * 0.08}>
              <div className="service-card">
                <span className="service-icon">{serviceIcons[service.icon]}</span>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>

                {isOpen && <p className="service-more">{service.readMore}</p>}

                <button type="button" className="service-toggle" onClick={() => toggle(index)}>
                  {isOpen ? "Show less" : "Read more"} <FiArrowRight />
                </button>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
