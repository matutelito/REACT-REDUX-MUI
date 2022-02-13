import * as React from 'react';
import Box from '@mui/material/Box';
import  SpeedDial  from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import {styled} from '@mui/material/styles'

const CustomSpeedDial = styled(SpeedDial)(({ theme }) => ({ 
}));

const CustomActionDial = styled(SpeedDialAction)(({ theme }) =>({
  boxShadow: theme.shadows[9],
  '&:hover':{
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
    
  }
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Copiar' },
  { icon: <SaveIcon />, name: 'Guardar' },
  { icon: <PrintIcon />, name: 'Imprimir' },
  { icon: <ShareIcon />, name: 'Compartir' },
];

export default function LateralButtons() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <CustomSpeedDial
        ariaLabel="hola"
        sx={{ position: 'absolute', bottom: 16, right: 16}}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <CustomActionDial
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </CustomSpeedDial>
    </Box>
  );
}