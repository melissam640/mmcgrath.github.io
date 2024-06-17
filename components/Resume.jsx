import './Resume.css';

function Resume() {

    function downloadResume() {
      window.location.href = "src/assets/MelissaMcGrathResume.pdf";
    }
  
    return (
      <button onClick={downloadResume} id="resume">Find My Resume Here</button>
    );
  }

  export default Resume;
