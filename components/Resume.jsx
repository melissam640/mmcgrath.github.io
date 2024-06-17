import './Resume.css';

function Resume() {

    function downloadResume() {
      window.location.href = "src/assets/MelissaMcGrathResume.pdf";
    }
  
    return (
      <button onClick={downloadResume}>Find My Resume Here</button>
    );
  }

  export default Resume;
