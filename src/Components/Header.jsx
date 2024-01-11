import { Link } from "react-router-dom";
import "../Styles/Components/Header.css"
export function Header() {
    return (
      <div className="header-container">
        <div className="brand">Yousuf Mohammadi</div>
        <div className="header-links">
          <Link className="link">Home</Link>
          <Link className="link">Skills</Link>
          <Link className="link">About</Link>
          <Link className="link">Projects</Link>
          <Link className="link">Contact</Link>
        </div>
      </div>
    );
}