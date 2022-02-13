import React, { useState } from 'react';
import CustomInput from "./atoms/input";


const EditText = ({setText}) => {

  const [formState, setFormState] = useState('');

  const handleInput = (e) => {
    setText( text => e.target.value)  
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setText( text => formState)  
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CustomInput
          label="name..."
          variant='standard'
        >
        </CustomInput> 
      </form> 
    </>
  );
};

export default EditText;   
