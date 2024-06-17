import { IoIosArrowUp } from "react-icons/io";

function MyButton(props) {

    // let { message } = props;

    function handleClick (evt) {
        // alert('This is an alert.');
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    return (
      <button onClick={handleClick}>
        <IoIosArrowUp />
      </button>
    );
  }

  export default MyButton;
