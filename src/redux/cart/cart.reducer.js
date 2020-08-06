import { TOGGLE_CART_HIDDEN } from './cart.types'

const INIT_STATE = {
    hidden: true
};

const cartReducer = (state = INIT_STATE, action) => {
    
    switch (action.type){
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer