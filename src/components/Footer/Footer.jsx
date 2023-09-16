import { Container } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="footer">
          <div className="social-icon">
            <div className="icon">
              <BsFacebook />
            </div>
            <div className="icon">
              <BsTwitter />
            </div>
            <div className="icon">
              <BsInstagram />
            </div>
            <div className="icon">
              <BsYoutube />
            </div>
          </div>
          <div className="footer-nav">
            <ul className="navItems">
              <li className="navItem">
                <a href="/">FAQ</a>
              </li>
              <li className="navItem">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="navItem">
                <a href="/">Email Us</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
