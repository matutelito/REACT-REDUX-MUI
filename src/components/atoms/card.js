import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button'

export default function CardEj({legend, tittle, ...props}) {  
  return (
    <>   
    <Card sx={{ maxWidth: 370, borderRadius: 1 }} elevation={3}>
      <CardMedia
          style={{'filter':'grayScale(1)'}}  
          sx={{
            // width: '90%', 
            // marginBottom: '-35%', 
            // marginLeft: '5%',
            // borderRadius: '4px'
          }}
          component="img"
          height="250"
          image={props.img}  
          alt="Fer"
        />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {tittle}
        </Typography>
        <Typography variant="body2" color="primary">
          {legend}
        </Typography>
        </CardContent>
      <CardActions sx={{padding:2 }}>
        <Button variant="contained"  size="small">Anotarme</Button>
        <Button variant="outlined" size="small">Saber Más</Button> 
        {/* <Button size="small">Saber Más</Button>  */}
      </CardActions> 
    </Card>
    </> 
  );
}
