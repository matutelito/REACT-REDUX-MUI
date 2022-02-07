import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import {useState} from 'react';
import './select.css'

const CustomSelect = styled(Select)(({theme}) => ({
  borderBottom: `1px solid ${theme.palette.primary.main}`, 
  '& svg':{
    color: theme.palette.primary.main, 
  }
}));

const SelectForm = ()=>{  
     
  const [state, setState] = useState({  
    selectData: ''  
  });
  
  function handleChange(e){  
    setState({
      ...state,
      selectData: e.target.value
    })
  }

  return(
    <FormControl variant="standard" sx={{  minWidth: 240 }}>
      <InputLabel sx={{ color: 'primary.main' }} id="demo">Age</InputLabel> 
      <CustomSelect
        labelId="demo" 
        id="demo"
        value={state.selectData}
        onChange={handleChange}
        label="Age"
      >
        <MenuItem value={10}>Ten</MenuItem> 
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomSelect>
    </FormControl>   
  )
};

export default SelectForm; 


