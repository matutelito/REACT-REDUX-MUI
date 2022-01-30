import { applyMiddleware, combineReducers, createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {rootReducer} from 'reducers'
import { createTheme} from '@mui/material/styles';


const theme = createTheme({
    pallete:{
        type: 'dark'
    }
  });



export default createStore(
    combineReducers({
        rootReducer
    }), 
    composeWithDevTools(applyMiddleware(thunk))
)