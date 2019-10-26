import React from "react";
import ReactDOM from "react-dom";
import App from "../src/js/components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware  from 'redux-thunk';
import reducers from './reducers';
import { BrowserRouter, Route } from "react-router-dom";
ReactDOM.render(<App/>, document.getElementById('root'));

