import * as types from './actionTypes';
import axios from 'axios';

const kanyeApi = 'https://api.kanye.rest?format=text/';

export function addToCart(itemId) {
    return { type: types.ADD_TO_CART, payload: itemId }
}

export function increment() {
    return { type: types.INCREMENT };
}

export function decrement() {
    return { type: types.DECREMENT };
}

export function reset() {
    return { type: types.DECREMENT };
}

export const getQuote = () => dispatch => {
    axios.get(kanyeApi)
        .then(res => {
            dispatch({ type: types.GET_QUOTE, payload: res.data})
        })
}