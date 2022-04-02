import { 
    ADD_TO_CART_ITEM,
    DELETE_CART_ITEM,
    ORDER_SUCCESS,
    ORDER_SUCCESS_WITH_GUSET_USER,
    ORDER_FAIL,
    ORDER_FETCH_SUCCESS,
    ORDER_FETCH_FAIL,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    FETCH_LOCATION
} from '../constants';

// CartActions
export interface addToCartActionAction  {
    type : typeof ADD_TO_CART_ITEM;
    payload: {
        id: number,
        name: string,
        image: string,
        price: number,
    },
}

export interface deleteCartItemAction {
    type : typeof DELETE_CART_ITEM;
    payload: {
        id: number,
        name: string,
        price: number,
    },
}

// orderAction
export interface createOrderSuccessAction {
    type: typeof ORDER_SUCCESS;
    payload? : any
}
export interface createOrderFailAction {
    type: typeof ORDER_FAIL;
    payload? : any
}
export interface createOrderSuccessActionWithGuestUser {
    type: typeof ORDER_SUCCESS_WITH_GUSET_USER;
    payload : any;
}
export interface createOrderFailActionWithGuestUser {
    type: typeof ORDER_FAIL;
    payload : string;
}
export interface fetchOrderSuccessAction {
    type : typeof ORDER_FETCH_SUCCESS;
    payload : {
        data : {
            arrivedTimeStamp : string,
            creationTimeStamp : string,
            currentLocation : string,
            id : string,
            logisticVender : string,
            status : string
        }
    };
}
export interface fetchOrderFailAction {
    type : typeof ORDER_FETCH_FAIL;
    payload : string;
}

// UserAction
export interface fetchUserSuccessAction {
    type : typeof FETCH_USER_SUCCESS;
    payload : any;
}

export interface fetchUserFailAction {
    type : typeof FETCH_USER_FAIL;
    payload : string;
}

export interface userReisterSuccessAction {
    type : typeof REGISTER_USER_SUCCESS;
    payload : any;
}
export interface userRegisterFailAction {
    type : typeof REGISTER_USER_FAIL;
    payload : string;
}

// map Action
export interface Location {
    address_components : any[],
    formatted_address : string,
    geometry : {
        location : {
            lat : number,
            lng : number,
        }
    },
}


export interface mapSuccessAction {
    type : typeof FETCH_LOCATION_SUCCESS;
    payload : {
        results: Location[],
        status : string,
    };
}
export interface mapFailAction {
    type : typeof FETCH_LOCATION_FAIL;
    payload : string | any;
}




export type orderActionType = createOrderSuccessAction | createOrderFailAction | createOrderSuccessActionWithGuestUser | createOrderFailActionWithGuestUser | fetchOrderSuccessAction | fetchOrderFailAction;
export type cartActionType = addToCartActionAction | deleteCartItemAction;
export type userLoginType = fetchUserSuccessAction | fetchUserFailAction | userReisterSuccessAction | userRegisterFailAction;
export type mapActionType = mapSuccessAction | mapFailAction


export type AppActions = orderActionType | cartActionType | userLoginType | mapActionType;