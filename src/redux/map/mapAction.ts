import {Dispatch} from 'redux'
import axios from 'axios';
import {FETCH_LOCATION_SUCCESS,FETCH_LOCATION_FAIL} from '../constants'
import { AppActions, mapSuccessAction} from '../types/actions';
export const fetchLocation = (location : string) => async (dispatch: Dispatch<AppActions>) => {
    try{
        const {data} = await axios.get<mapSuccessAction['payload']>('https://maps.googleapis.com/maps/api/geocode/json',{
            params: {
                address: location,
                key: process.env.REACT_APP_GEO_LOCATION_API_KEY
            },
        });
        
        return dispatch({
            type: FETCH_LOCATION_SUCCESS,
            payload: data.results[0].geometry.location,
        });
        
    }catch(error : any){
        return dispatch({
            type: FETCH_LOCATION_FAIL,
            payload: error.message,
        });
    }
   
}