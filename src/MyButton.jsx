function MyButton(props) {

    // let { message } = props;

    function handleClick (evt) {
        alert('This is an alert.');
    }
    
    return (
      <button onClick={handleClick}>{props.message}</button>
    );
  }

  export default MyButton;
