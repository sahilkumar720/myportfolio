import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiExternalLink, FiGithub, FiPlay, FiX } from "react-icons/fi";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const isClosingRef = useRef(false);
  const closeTimer = useRef(null);
  const closeButton = useRef(null);
  const modal = useRef(null);
  const technologies = Array.isArray(project.techStack)
    ? project.techStack
    : typeof project.techStack === "string"
      ? project.techStack.split(",").map((technology) => technology.trim()).filter(Boolean)
      : [];

  const closeModal = () => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    setIsClosing(true);
    closeTimer.current = window.setTimeout(onClose, 180);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }

      if (event.key === "Tab") {
        const focusableElements = modal.current?.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements?.length) {
          event.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(closeTimer.current);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, []);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) closeModal();
  };

  return createPortal(
    <div
      className={`project-modal-backdrop${isClosing ? " project-modal-backdrop--closing" : ""}`}
      onMouseDown={handleBackdropClick}
    >
      <section
        ref={modal}
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <button
          ref={closeButton}
          className="project-modal-close"
          type="button"
          onClick={closeModal}
          aria-label="Close project details"
        >
          <FiX aria-hidden="true" />
        </button>

        {project.image && (
          <img
            className="project-modal-image"
            src={project.image}
            alt={`${project.title} project preview`}
          />
        )}

        <div className="project-modal-content">
          <p className="project-modal-category">{project.category}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p id="project-modal-description" className="project-modal-description">
            {project.description || `${project.title} is a ${project.category} project.`}
          </p>

          {technologies.length > 0 && (
            <div className="project-modal-stack">
              <h3>Technologies</h3>
              <ul aria-label="Technologies used">
                {technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="project-modal-links">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                <FiExternalLink aria-hidden="true" />
                Live demo
              </a>
            )}
            {project.videoUrl && (
              <a href={project.videoUrl} target="_blank" rel="noreferrer">
                <FiPlay aria-hidden="true" />
                Video demo
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" />
                GitHub repo
              </a>
            )}
          </div>
        </div>
      </section>
    </div>,
    document.body
  );
};

export default ProjectModal;
