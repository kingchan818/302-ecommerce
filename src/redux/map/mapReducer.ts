import { AppActions } from '../types/actions';
import {FETCH_LOCATION_SUCCESS,FETCH_LOCATION_FAIL} from '../constants';
export interface geo {
    geolocation : {
        lat: number ,
        lng: number ,
    }
}
const initalState = {
    geolocation: {} as geo['geolocation'],
}

export const mapReducer = (state= {geolocation : {}}, action: AppActions) => {
    switch(action.type){
        case FETCH_LOCATION_SUCCESS:
            return {
                ...state,
                geolocation :  action.payload,
            };
        case FETCH_LOCATION_FAIL:
            return {
                ...state,
                error : action.payload
            }
        default:
            return state;
    }
}