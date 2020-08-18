// import SHOP_DATA  from "./shop.data"

import 
{ 
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAIL
    
} from './shop.types'

const INIT_STATE = {
    // collections: SHOP_DATA //moved data to Firebase
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = ( state = INIT_STATE, action ) => {
    switch(action.type){
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case FETCH_COLLECTIONS_FAIL:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;