import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" className="nav-body">
      <Container>
        <Navbar.Brand href="#home">Melissa McGrath</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-me-section">Bio</Nav.Link>
            <Nav.Link href="#skills-section">Skills</Nav.Link>
            <Nav.Link href="#projects-section">Projects</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;