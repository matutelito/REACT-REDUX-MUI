import { createTheme } from '@mui/material/styles';
import Typography from './typography';
import getPalette from './pallete';
import getShadows from './shadows'; 

const getTheme = (mode)=> { 
  
  var shadowsMode= getShadows(mode);

  return createTheme({
    mode: mode,
    shape:{
      borderRadius: 4
    },
    typography: Typography,
    palette: getPalette(mode), 
    shadows: shadowsMode,
    components:{
      MuiMenuItem: {
        styleOverrides: {
          root: {
            width: '95%',
            marginLeft: '2.5%', 
            borderRadius: 4, 
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '4px',
            backgroundColor: 'palette.primary.main',  
            padding: '1.5% 4%',
            boxShadow: shadowsMode[1]   
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '0',   
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            marginBottom: '1rem',    
          },
        },
      },    
    }, 
  })
};

export default getTheme;    