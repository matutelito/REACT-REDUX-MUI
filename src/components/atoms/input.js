import  InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input'; 


export default function TextInput() {   
  return (
    <FormControl variant="standard">
      <InputLabel sx={{color: 'primary.main'}} >Name</InputLabel>
      <Input id="component-simple" sx={{borderBottom: 1 ,borderColor: 'primary.main'}}/> 
    </FormControl>
  );
}