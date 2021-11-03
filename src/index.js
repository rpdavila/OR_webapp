import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { isSignedIn, hasError, isUser, updateCart, changeLanguage } from './Redux/reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger'; ---> for debug purposesn
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import './i18n';

Amplify.configure(awsExports);


const rootReducer = combineReducers({ isSignedIn, hasError, isUser, updateCart, changeLanguage});
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
