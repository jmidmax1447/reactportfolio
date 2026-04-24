import '../styles/about.css';

function skills() {
  const skillsList = [
    'Photoshop', 'Premiere Pro', 'Illustrator', 'Davinci Resolve',
    'Digital Photography', 'LightRoom', 'Videography', 'Short-form content',
    'Visual Storytelling', 'Audio Editing', 'UI/UX Design', 'Figma',
    'MySQL', 'PHP', 'HTML', 'CSS', 'Javascript', 'React', 'React Native',
  ];

  return (
    <div className="skills-background">
      <div className="skills">
        <h2 className="skills-heading">Skills</h2>
        <div className="skillslayout">
          {skillsList.map((skill) => (
            <div className="box" key={skill}>{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default skills;