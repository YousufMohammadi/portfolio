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
            <img src="reacthooks.JPEG" alt="project" className="project-icon" />
            <h2 className="project-heading">React Hooks</h2>
            <a href="https://reacthooks.onrender.com/" target="_blank" className="btn-active">
              Read More <i class="fa-regular fa-eye download-icon"></i>
            </a>
          </div>
        </div>
      </div>
        <Footer />
    </div>
}