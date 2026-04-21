import '../styles/projects.css';
import ProjectCard from '../components/projectcard';
import projectsData from '../assets/projects.json';
 
function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
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
  );
}
 
export default Projects;