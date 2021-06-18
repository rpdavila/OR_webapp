import { 
    CHANGE_IS_SIGNED_IN,
    CHANGE_USER,
    ERR 
 } from './constants'


export const setIsSignedIn = (isSignedIn) => ({
    type: CHANGE_IS_SIGNED_IN,
    payload: isSignedIn
})

export const setUser = (user) => ({
    type: CHANGE_USER,
    payload: user
})

export const setError = (error) => ({
    type: ERR,
    payload: error
})
