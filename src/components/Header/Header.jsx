import { Container } from "react-bootstrap";
import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <Container>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav">
            <ul className="navItems">
              <li className="navItem">
                <a href="">About</a>
              </li>
              <li className="navItem">
                <a href="">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
