import "../Styles/Components/Projects.css"
export function Projects() {
    return (
      <div className="projects-container">
        <p className="section-heading">
          MY <span>Projects</span>
        </p>
        <div className="projects">
          <div className="project">
            <img src="project1.png" alt="project" className="project-icon" />
            <h2 className="project-heading">Oxygen Management System</h2>
          </div>
          <div className="project">
            <img src="project2.png" alt="project" className="project-icon" />
            <h2 className="project-heading">Oxygen Management System</h2>
          </div>
          <div className="project">
            <img src="project1.png" alt="project" className="project-icon" />
            <h2 className="project-heading">Oxygen Management System</h2>
          </div>
          <div className="project">
            <img src="project1.png" alt="project" className="project-icon" />
            <h2 className="project-heading">Oxygen Management System</h2>
          </div>
        </div>
      </div>
    );
}