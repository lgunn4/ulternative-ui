import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import {ulternativeApplication} from "./redux/ulternativeApplication";
import {createLogger} from "redux-logger";
import {fetchCategories} from "./redux/actions/categoryActions";

const logger = createLogger({ collapsed: true });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(thunk, logger));
const store = createStore(ulternativeApplication, middleware);

store.dispatch(fetchCategories());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
