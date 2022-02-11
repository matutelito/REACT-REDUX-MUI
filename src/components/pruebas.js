import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { CustomFormControl, CustomInputLabel, CustomInput } from "./atoms/input";


const EditText = ({setText}) => {

  const [formState, setFormState] = useState('');

  const handleInput = (e) => {
    // setFormState(e.target.value)
    setText( text => e.target.value) 
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setText( text => formState)  
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CustomFormControl color="primary" variant="standard">
          <CustomInputLabel
            name="name"
            text="nombre"
            value="hola"
          >
            hola
          </CustomInputLabel>  

          <CustomInput
          color="primary" 
            onChange={handleInput} 
            type="text"
            > 
          </CustomInput>
        </CustomFormControl>
      </form> 
    </>
  );

};

// EditText.propTypes = {

// };

export default EditText;  
