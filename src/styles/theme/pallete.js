const getPalette= (mode)=>{ 
  return mode === 'dark' ? darkPallete : lightPallete
};

const darkPallete= {
  type: 'dark', 
  background: {
    default: '#444a58', 
    paper: '#444a58', 
  },
  primary: {
    main: '#55cbc0c7',
    ligth: '#4ab0a7',
    dark: '#4ab0a7',
    contrastText: '#124c4775' 
  },
  secondary:{
    main: '#fff',
    ligth: '#fff',
    dark: '#fff',
  },
  divider: '#FBBC6C',
  text: {
    primary: '#fff',
    secondary:'#fff',
  },
  // action:{
  //   hover: 'rgba(85, 203, 192, 0.08)',
  //   active: 'rgba(85, 203, 192, 0.08)',
  //   focus: 'rgba(85, 203, 192, 0.08)'
  // }
};

const lightPallete={
  type: 'light',
  common:{
    black: '#FBBC6C',
    white: '#3AA3A9',
    secondary: '#3AA3A9'
  },
  background:{
    default: '#fff',
    paper: '#fff', 
  },
  primary: {
    main: '#3AA3A9',
    ligth: '#3AA3A9',
    dark: '#3AA3A9',
    contrastText: '#fff'   
  },
  secondary:{
    main: '#3AA3A9',
    ligth: '#3AA3A9',
    dark: '#3AA3A9',
    contrastText: '#DEDEDE' 
  },
  text: {
    primary:'#34495E',                         // color aplicado a los textos de los input 
    secondary: '#D6D6D6'
  },
    // action:{
  //   hover: 'rgba(85, 203, 192, 0.08)',
  //   active: 'rgba(85, 203, 192, 0.08)',
  //   focus: 'rgba(85, 203, 192, 0.08)'
  // }
};

export default getPalette;


