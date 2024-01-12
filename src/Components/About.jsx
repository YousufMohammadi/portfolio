import { Link } from "react-router-dom";
import "../Styles/Components/About.css"
import { useState } from "react";
import { BIO, EDUCATION, EXPERIENCE } from "../Constants/Constants";
export function About() {
    const [text,setText] = useState(BIO)
    return (
      <div className="about-container">
        <p className="section-heading">
          about <span>me</span>
        </p>
        <div className="btns">
          <Link to={"#"} className="btn-active" onClick={()=>{
            setText(BIO)
          }}>
            Bio
          </Link>
          <Link to={"#"} className="btn" onClick={()=>{
            setText(EDUCATION)
          }}>
            Education
          </Link>
          <Link to={"#"} className="btn" onClick={()=>{
            setText(EXPERIENCE)
          }}>
            Experience
          </Link>
        </div>
        <h2 className="brand">A Little About Me And My Passion</h2>
        <div className="about">
          <div className="about-images">
            <img
              src="about.png"
              alt="about"
              className="about-image about-image1"
            />
            <img
              src="doodleItems.png"
              alt="about"
              className="about-image about-image2"
            />
          </div>
          <p className="par">
            {text}
          </p>
        </div>
      </div>
    );
}