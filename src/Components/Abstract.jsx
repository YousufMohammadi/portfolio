import "../Styles/Components/Abstract.css"
export function Abstract() {
    return (
      <div className="abstract-container">
        <div className="introduction">
          <p className="intro-par">
            CREATIVE <span>PROGRAMMER</span>
          </p>
          <div className="abstract-btns">
          <a href="#" className="hire-btn">
            hire me
          </a>
          <a href="#" className="download-btn">
            Download CV{" "}
            <i class="fa-solid fa-cloud-arrow-down download-icon"></i>
          </a>
          </div>
        </div>
        <div className="abstract-images">
          <img
            alt="images"
            src="abstract.png"
            className="abstract-image abstract-image1"
          />
          <img
            alt="images"
            src="abstract2.png"
            className="abstract-image abstract-image2"
          />
        </div>
      </div>
    );
}