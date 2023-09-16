import { Col, Container, Row } from "react-bootstrap";
import './banner.css';
import img from '../../assets/developer.gif';

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className="banner-text">
            <span>Coming soon</span>
            <h2>Get Notified</h2>
            <h2>When we Launch</h2>
            <div className="searchInput">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email address"
              />
              <button style={{borderRadius: '0 30px 30px 0'}}>Notify Me</button>
            </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <img className="img-fluid" src={img} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
