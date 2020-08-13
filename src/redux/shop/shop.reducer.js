// import SHOP_DATA  from "./shop.data"

import { UPDATE_COLLECTIONS } from './shop.types'

const INIT_STATE = {
    // collections: SHOP_DATA //moved data to Firebase
    collections: null
}

const shopReducer = ( state = INIT_STATE, action ) => {
    switch(action.type){
        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        
        default:
            return state;
    }
}

export default shopReducer;