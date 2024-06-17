import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import {Container, Row, Col} from 'react-bootstrap';
import './Intro.css';

function Intro() {
  return (
    <Container className="intro-section" id="home">
      <Row>
      <Col xs lg="4">
        <img src="src/assets/profile.jpg" alt="Sticky Image" className="sticky-image" />
      </Col>
      <Col className="intro-section">
        <p className="name">
          Melissa<br/>
          McGrath
        </p>
        <p className="title">Software Engineer</p>&nbsp;
        <a href="www.linkedin.com/in/melissa-mcgrath">
          <Linkedin />
        </a>&nbsp;
        <a href="https://github.com/melissam640">
          <Github />
        </a>
      </Col>
      </Row>
    </Container>
  );
}

export default Intro;
