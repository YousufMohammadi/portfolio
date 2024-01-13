import { Link } from "react-router-dom";
import "../Styles/Components/Header.css"
export function Header() {
  function handleMenu() {
    var x = document.getElementById("links");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
    return (
      <div className="header-container">
        <div className="brand">Yousuf Mohammadi</div>
        <div className="header-links" id="links">
          <Link className="link">Home</Link>
          <Link className="link">Skills</Link>
          <Link className="link">About</Link>
          <Link className="link">Projects</Link>
          <Link className="link">Contact</Link>
        </div>
        <Link onClick={handleMenu} id="menu">
          <i class="fa-solid fa-bars"></i>
        </Link>
      </div>
    );
}