import { CHANGE_IS_SIGNED_IN, CHANGE_USER, ERR, CART, REMOVE_CART_ITEM } from './constants'

let initialStateIsSIgnedIn = {
    isSignedIn: false  
}

let initialStateIsUser = {
    user:null
}

let initialStateHasError = {
    error: ''
}

let initialStateCart = {
    cart: []
}

export const isSignedIn = (state=initialStateIsSIgnedIn, action={}) => {
    switch(action.type) {
        case CHANGE_IS_SIGNED_IN:
            return {...state, isSignedIn: action.payload};
        default:
            return state;
    }
}


export const isUser = (state=initialStateIsUser, action={}) => {
    switch(action.type){
        case CHANGE_USER:
            return{...state, user: action.payload};
        default:
            return state;
    }
    
}

export const hasError = (state=initialStateHasError, action={}) => {
    switch(action.type){
        case ERR:
            return{...state, error: action.payload}; 
        default:
            return state;
    }

}

export const updateCart = (state=initialStateCart, action={}) => {
    switch(action.type){
        case CART:
            return  {cart: [...state.cart, action.payload]};
        // still needs work remove cart item is still returning undefined
        case REMOVE_CART_ITEM:
            return {cart: [...state.cart.filter((item, index) => index !== action.index)]}
        default:
            return state;
    }
}
