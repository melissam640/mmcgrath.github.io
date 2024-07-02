import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import resume from '/src/assets/MelissaMcGrathResume.pdf';
import './NavBar.css';

function NavBar() {
  
  return (
    <Navbar expand="lg" className="nav-body">
      <Container>
        <Navbar.Brand href="#home">Melissa McGrath</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#about-me-section">Bio</Nav.Link>
            <Nav.Link href="#skills-section">Skills</Nav.Link>
            <Nav.Link href="#projects-section">Projects</Nav.Link>
          </Nav>
          <Nav variant="pills">
          <Nav.Item>
            <Nav.Link href={resume} target="_blank" rel="noreferrer" id="resume-button">
              Resume
            </Nav.Link>
          </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;