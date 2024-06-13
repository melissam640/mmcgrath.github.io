import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import {Container, Row, Col} from 'react-bootstrap';
import './Bio.css';

function Bio() {
  return (
    <Container>
      <Col>
        <img src="components/profilephoto.jpg" alt="Sticky Image" className="sticky-image" />
      </Col>
      <Col className="intro-section">
        <p className="name">Melissa McGrath</p>
        <p className="title">Software Engineer</p>
        <a href="www.linkedin.com/in/melissa-mcgrath">
          <Linkedin />
        </a>
        <a href="https://github.com/melissam640">
          <Github />
        </a>
      </Col>
    </Container>
  );
}

export default Bio;
