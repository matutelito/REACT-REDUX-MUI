import React from 'react';
import PropTypes from 'prop-types';


const EditText = ({setText}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target67890/)
    setText( text => e.target.value)
  };

  return (
    
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ></input>
      </form>
    </>
  );

};

EditText.propTypes = {

};

export default EditText; 
