import '../styles/projectcard.css';
 
// Each project object from projects.json should have:
//   title      – card heading
//   description – overlay paragraph
//   image      – path to the image (e.g. "/assets/majorproject2.png")
//   href       – link the card points to
//   spanTwo    – (optional) boolean; set true to make the card span 2 columns
 
function ProjectCard({ title, description, image, href, spanTwo }) {
    let cardClass = 'project-card';
    if (spanTwo) {
        cardClass= 'project-card project-card-span-two';
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
      <img src={image} alt={title} />
      <div className="project-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}
 
export default ProjectCard;