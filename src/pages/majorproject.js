import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slideFromRight } from '../components/pageTransition';
import '../styles/majorproject.css';

function MajorProject() {
  return (
    <motion.div
      variants={slideFromRight}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-page">
        <NavLink className="back-button" to="/projects">← Back to Projects</NavLink>

        <div className="project-header">
          <h1 className="project-title">Content From Front-End Major Assignment 2</h1>
          <p className="project-subtitle">
            Three short-form videos filmed for webpage display.
          </p>
        </div>

        <div className="video-grid">
          <iframe
            className="ytshort"
            src="https://www.youtube.com/embed/PnWvtg3nXoI"
            title="Major Assignment 2 Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <iframe
            className="ytshort"
            src="https://www.youtube.com/embed/6LY-ZUBCTcE"
            title="Major Assignment 2 Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <iframe
            className="ytshort"
            src="https://www.youtube.com/embed/9-pnJerTVbA"
            title="Major Assignment 2 Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="project-header" style={{ marginTop: '70px' }}>
          <h2 className="project-title">Comic Strip</h2>
          <p className="project-subtitle">
            Full-size image from my comic-strip project.
          </p>
        </div>

        <div className="comicstrip-wrap">
          <img
            className="comicstrip-full"
            src="/assets/comicstrip.jpg"
            alt="Comic strip full image"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default MajorProject;