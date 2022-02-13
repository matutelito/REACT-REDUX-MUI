import React from "react";
import { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import Paper from "@mui/material/Paper";
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Typography  from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import getTheme from '../styles/theme/theme';
import Input from "./atoms/input";
import LateralButtons from "./atoms/lateralButtons"
import SelectForm from "./atoms/select/select";
import CardEj from "./atoms/card";
import imgFer from '../img/fer.jpg';
import EditText from './pruebas';
import MyComponent from './hooksPruebas';

const App = ()=> { 
  
    
  const[themeUser, setThemeUser]= useState('light');   

  const theme= getTheme(themeUser)

  const modTheme= ()=>{
    let newMode= themeUser === 'dark' ? 'light': 'dark'   
    setThemeUser(newMode) 
  } 

  const [text, setText] = useState('') 

  return (
    <ThemeProvider theme={theme}>

      <Paper sx={{minHeight: '100%'}}>    
        <Container maxWidth="xl">  
          <Grid container> 
            <Grid item xs={11} sm={11} md={10} lg={10} xl={10}>
              <Typography variant="h2" color="primary">Esto es in titulo h1 </Typography >
            </Grid>
            <Grid item xs={1} sm={1} md={2} lg={2} xl={2}> 
              <IconButton
                onClick={() => modTheme()}
              >
                {
                  themeUser === 'dark' 
                ? 
                  <Brightness4Icon sx={{ color: 'primary.main' }}/> 
                : 
                  <Brightness7Icon sx={{ color: 'primary.main' }}/>
                }  
              </IconButton>
            </Grid>
          </Grid> 
          <Grid container>  
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <SelectForm  />
              <EditText setText={setText} />

            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <SelectForm mode={theme.palette.mode} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <input/>          
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={6} md={3} lg={4} xl={4}>
              <CardEj 
                legend={`El coaching es una forma de desarrollo personal en la cual 
                una persona con experiencia, llamada coach, apoya a un alumno o 
                cliente a lograr un objetivo personal o profesional al brindarle capacitación
                y orientación. En ocasiones, al alumno se le conoce como coachee. `}
                tittle= {"Coahchin Ontologico"} 
                img={imgFer}    
              />
            </Grid>
            <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>  
              <LateralButtons />
            </Grid>
            <Grid item xs={12} sm={12} md={1} lg={4} xl={4}>  
              <Typography variant="h5">{ text }</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={1} lg={4} xl={3}>  
              <EditText setText={setText} />
              {/* <MyComponent /> */}
            </Grid>
          </Grid>
        </Container> 
      </Paper> 
    </ThemeProvider>
  );
};
export default App;



