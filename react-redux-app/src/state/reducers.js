import * as types from './actionTypes';
import uuid from 'uuid';

const initialQuote = {
    text: "",
}

const initialCount = 0;

const initialCart = [];

const fruits = [
    { id: uuid(), name: 'pear' },
    { id: uuid(), name: 'mango' },
    { id: uuid(), name: 'banana' },
  ];
  const meats = [
    { id: uuid(), name: 'beef' },
    { id: uuid(), name: 'chicken' },
    { id: uuid(), name: 'fish' },
  ];

const initialStock = { meats, fruits }

export const quoteReducer = (state = initialQuote, action) => {
    switch(action.type) {
        default:
            return state;
        case types.GET_QUOTE:
            return {
                text: action.payload,
            }
    }
}

export const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        default:
            return state;
        case types.ADD_TO_CART:
            return [...state, action.payload]
    }
}

export const stockReducer = (state = initialStock, action) => {
    switch (action.type) {
        default:
            return state;
        case types.ADD_FRUITS:
            return {
                ...state,
                fruits: action.payload
            }
        case types.ADD_MEATS:
            return {
                ...state,
                meats: action.payload
            }
    }
}


export const countReducer = (state = initialCount, action) => {
    switch (action.type) {
        default:
            return state;
        case types.INCREMENT:
            return state + 1;
        case types.DECREMENT:
            return state - 1;
        case types.RESET:
            return 0;
    }
}