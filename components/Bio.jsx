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
        <a href="">
          <Linkedin />
        </a>
        <a href="">
          <Github />
        </a>
      </Col>
    </Container>
  );
}

export default Bio;
