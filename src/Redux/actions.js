import { 
    CART,
    CHANGE_IS_SIGNED_IN,
    CHANGE_USER,
    ERR,
    REMOVE_CART_ITEM,
    CHANGE_LANGUAGE
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

export const setCart = (cart) => ({
    type: CART,
    payload: cart
})

export const setRemoveCartItem = (cart) => ({
    type: REMOVE_CART_ITEM,
    payload: cart
})

export const setLanguage = (language) => ({
    type: CHANGE_LANGUAGE,
    payload: language
})