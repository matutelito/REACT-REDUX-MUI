import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)((theme) => ({
  borderRadius: '25px',
  boxShadow: ' 0px 1px 15px 0px #3aa4a96c',
  '&:hover': {
    boxShadow: ' 0px 0px 2px 3px #3aa4a96c',
    color: '#9fe2dcc7'
    },
}));

export default CustomButton;   