import { SiPython, SiHtml5, SiCss3, SiJavascript, SiFlask, SiPostgresql,
        SiSqlalchemy, SiJinja } from "react-icons/si";
import { Github, Youtube } from 'react-bootstrap-icons';
import {Container, Row, Col} from 'react-bootstrap';
import './Projects.css';

function Projects() {
return (
<div id="projects-section">
    <p className="projects-title">
      Projects
    </p>
    <Container>
        <Row>
            <Col md="6">
                <img src="src/assets/totalview1.gif" className="project-gif"/>
                <img src="src/assets/totalview2.gif" className="project-gif"/>
            </Col>
            <Col>
                <p className="projects-sub-title">TotalView</p>
                <a href="https://github.com/melissam640/totalview.git">
                <Github />
                </a>&nbsp;
                <a href="https://www.youtube.com/watch?v=cfkpgqYO2BU">
                <Youtube />
                </a>
                <p>
                TotalView is a productivity app that allows a user to create
                traditional calendar events, routines with repeating sets of
                actions, and one-time or recurring task lists. 
                <br/><br/>
                Created with a focus on supporting varying attention abilities,
                a user can view their entire day, mark items as complete, and
                schedule new items all on a single page.
                <br/><br/>
                Using FullCalendar API, a user can also view their monthly and
                weekly schedule. A user's schedule is easy to view at a glance
                with the ability to set custom colors for each item on their
                schedule. For added visibility and customization, a user can
                also toggle between light and dark mode and set a preferred
                color for main buttons and navigation links.
                </p>
                <SiPython /> &nbsp; <SiHtml5 /> &nbsp; <SiCss3 /> &nbsp;
                <SiJavascript /> &nbsp; <SiJinja /> &nbsp; <SiFlask /> &nbsp;
                <SiPostgresql /> &nbsp; <SiSqlalchemy />
            </Col>
        </Row>
    </Container>
</div>
);
}

export default Projects;
