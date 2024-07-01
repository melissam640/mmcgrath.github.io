import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import {Container, Row, Col} from 'react-bootstrap';
import profile from '../src/assets/profile.jpg';
import './Intro.css';

function Intro() {
  return (
    <Container fluid id="home">
      <Row>
      <Col xs lg="4">
        <img src={profile} alt="Profile Photo" className="profile-photo" />
      </Col>
      <Col className="intro-section">
          <p className="name">
          Melissa McGrath
          </p>
        <p className="title">Software Engineer</p><br/>
        <a href="www.linkedin.com/in/melissa-mcgrath" className="icon-link">
          <Linkedin />
        </a>&nbsp;
        <a href="https://github.com/melissam640" className="icon-link">
          <Github />
        </a>
      </Col>
      </Row>
    </Container>
  );
}

export default Intro;
