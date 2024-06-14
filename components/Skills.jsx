import { SiPython, SiHtml5, SiCss3, SiJavascript, SiFlask, SiPostgresql,
        SiSqlalchemy, SiReact, SiJinja } from "react-icons/si";
import './Skills.css';

function Skills() {
  return (
    <div className="about-me-section">
        <p className="about-me-title">
          Technologies
        </p>
        <div className="tech">
          <SiPython /> Python &nbsp;&nbsp;
          <SiHtml5 /> HTML &nbsp;&nbsp;
          <SiCss3 /> CSS &nbsp;&nbsp;
          <SiJavascript /> JavaScript  
        </div>
        <div className="tech">
          <SiFlask /> Flask &nbsp;&nbsp;
          <SiPostgresql /> PostgreSQL &nbsp;&nbsp;
          <SiSqlalchemy /> SQLAlchemy &nbsp;&nbsp;
          <SiReact /> React &nbsp;&nbsp;
          <SiJinja /> Jinja  
        </div>
    </div>
  );
}

export default Skills;