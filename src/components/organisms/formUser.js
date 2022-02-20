import useForm from "../../hooks/useForm";
import CustomInput from "../atoms/input";

const FormUser = () => {

  const[values, handleInputChange] = useForm({
    name: '',
    mail: '',
    password: ''
  });

  const { name, mail, password } = values;
  
  return(
    <>
      <CustomInput
        
        name="name"
        type="text"
        value={name}
        variant="standard"
        label="name"
        onChange={handleInputChange}
      >
        name...
      </CustomInput>
      <CustomInput
        name="mail"
        type="mail"
        value={mail}
        variant="standard"
        label="mail"
        onChange={handleInputChange}
      >
        mail...
      </CustomInput>
      <CustomInput
        name="password"
        type="password"
        value={password}
        variant="standard"
        label="password"
        onChange={handleInputChange}
      >
        password...
      </CustomInput>

    </>
  )
};

export default FormUser;