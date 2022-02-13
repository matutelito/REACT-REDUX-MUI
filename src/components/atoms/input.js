import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomInput = styled(TextField)(({theme}) => ({
  '& .MuiInput-underline:before': {
    borderBottom: `1px solid ${theme.palette.primary.main}`
  },
  '&&& .MuiInput-underline:hover:before': {
    borderBottom: `2px solid ${theme.palette.primary.main}` 
  }
}));

export default CustomInput;   
