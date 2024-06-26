import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function NavBar() {
  
  function downloadResume() {
    window.location.href = "src/assets/MelissaMcGrathResume.pdf";
  }
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  
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
          <Nav variant="pills" activeKey="1" onSelect={downloadResume}>
          <Nav.Item>
            <Nav.Link eventKey="1" id="resume-button">
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