import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import Market from './components/Market';
import Search from './components/Search';
import Quote from './components/Quote';
import thunk from 'redux-thunk';
import * as reducers from './state/reducers';

const rootReducer = combineReducers({
  count: reducers.countReducer,
  cart: reducers.cartReducer,
  stock: reducers.stockReducer,
  quote: reducers.quoteReducer,
})

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)

ReactDOM.render(
  <div class="App">
  <Provider store={store}>
{/*     <Counter />
    <Market /> */}
    <Quote />
    <Search />
  </Provider>
  </div>, document.getElementById('root'));
