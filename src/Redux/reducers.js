import { CHANGE_IS_SIGNED_IN, CHANGE_USER, ERR } from './constants'

let initialStateIsSIgnedIn = {
    isSignedIn: false  
}

let initialStateIsUser = {
    user:null
}

let initialStateHasError = {
    error: ''
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
