import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import combineReducers from './Services/Reducers/Root_Reducers'

const store= createStore(combineReducers)
console.warn("store data", store);

ReactDOM.render(
   <Provider store={store}>
    <App />
    </Provider>,
   document.getElementById('root')
);


