import  InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input'; 
import './select/select.css'

import { styled } from '@mui/material/styles';

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  // width: '100%',
}));

const CustomInputLabel = styled(InputLabel)(({ theme }) => ({
  // width: '100%',
}));

const CustomInput = styled(Input)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.secondary.main}`
  // width: '100%',
}));


export { CustomFormControl, CustomInputLabel, CustomInput };   
