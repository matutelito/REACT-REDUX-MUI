import {DELETE_OFF_CASOS} from './actions' 
import { GET_CLIENT } from './actions'; 
import axios from 'axios';

const DeleteOffCasos = (ID) => ({
  type: DELETE_OFF_CASOS,
  ID
})


const InitialCredits =  () => dispatch => {
    
  axios.get('http://localhost:5000/getCredits' , {
    params:{ 
      'documento' : 624933
    }
  })
  .then(response =>{
    return dispatch({
      type: GET_CLIENT,
      casos: response.data
    })
  })
}


export  {DeleteOffCasos, InitialCredits}   



/// junto con actions.js es el paquete de data que el dispatcher traslada al atore para que el reducer vea que tiene que hacer
/// con esa data y poder modificar asi el global state de la app 