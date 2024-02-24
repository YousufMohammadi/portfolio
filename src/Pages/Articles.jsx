import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import "../Styles/Components/Projects.css"
export function Articles() {
    return <div id="home">
        <Header />
        <div className="projects-container" id="projects">
        <p className="section-heading">
          MY <span>Articles</span>
        </p>
        <div className="projects">
          <div className="project">
            <img src="project1.png" alt="project" className="project-icon" />
            <h2 className="project-heading">Oxygen DBMS</h2>
            <a href="#" className="btn-active">
              Demo <i class="fa-regular fa-eye download-icon"></i>
            </a>
          </div>
          <div className="project">
            <img src="project2.png" alt="project" className="project-icon" />
            <h2 className="project-heading">gym power DBMS</h2>
            <a href="#" className="btn-active">
              Demo <i class="fa-regular fa-eye download-icon"></i>
            </a>
          </div>
        </div>
      </div>
        <Footer />
    </div>
}