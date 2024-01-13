import { Link } from "react-router-dom";
import "../Styles/Components/Footer.css"
export function Footer() {
    return (
      <div className="footer-container">
        <img src="techLand.png" alt="techLand" className="logo" />
        <p className="footer-description">
          Itaque earum rerum hic tenetur asaItaque earum rerum hic tenetur asap
          iente delectus ac elit in coeiciendis maiores.
        </p>
        <h2 className="footer-heading">Follow me on Social Media !</h2>
        <div className="socials">
          <Link to={"#"} className="social">
            <i class="fa-brands fa-facebook-f"></i>
          </Link>
          <Link to={"#"} className="social">
            <i class="fa-brands fa-telegram"></i>
          </Link>
          <Link to={"#"} className="social">
            <i class="fa-brands fa-instagram"></i>
          </Link>
          <Link to={"#"} className="social">
            <i class="fa-brands fa-youtube"></i>
          </Link>
          <Link to={"#"} className="social">
            <i class="fa-brands fa-linkedin"></i>
          </Link>
          <Link to={"#"} className="social">
            <i class="fa-brands fa-x-twitter"></i>
          </Link>
        </div>
      </div>
    );
}