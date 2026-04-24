import '../styles/projects.css';
import { motion } from "framer-motion";
import ProjectCard from '../components/projectcard';
import projectsData from '../assets/projects.json';
import { slideFromRight } from "../components/pageTransition";
 
function Projects() {
  return (
    <motion.div
      variants={slideFromRight}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="projects">
        <h2 className="project-heading">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              href={project.href}
              spanTwo={project.spanTwo}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
 
export default Projects;