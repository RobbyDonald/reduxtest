import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import App from './App';
//import MyRoute from './example';
import * as serviceWorker from './serviceWorker';
import App from './App.js';

const initialState = {
  count:0
};

const reducer =(state=initialState, action)=>{
 
  switch(action.type){
     case 'INCREMENT':
       return Object.assign({}, state, {count: state.count+1});
     default:
       return state;
  }  
}

const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

ReactDOM.render(<App  />, document.getElementById('root'));

//
serviceWorker.unregister();



dsfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasd