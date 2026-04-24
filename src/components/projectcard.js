import '../styles/projectcard.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
 
 
function ProjectCard({ title, description, image, href, spanTwo }) {
    let cardClass = 'project-card';
    if (spanTwo) {
        cardClass= 'project-card project-card-span-two';
    }

    const isReactPage = href.startsWith('/') && !href.startsWith('//');
      if (isReactPage) {
      return (
        <Link className={cardClass} to={href}>
          <div className="side-left"></div>
          <div className="side-right"></div>
          <img src={`${process.env.PUBLIC_URL}/${image}`} alt={title} />
          <div className="project-overlay">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>
        );
      }

  return (
    <a
      className={cardClass}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="side-left"></div>
      <div className="side-right"></div>
      <img src={`${process.env.PUBLIC_URL}/${image}`} alt={title} />
      <div className="project-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}
 
export default ProjectCard;