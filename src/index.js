import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import lightSlideApp from './reducers';
import App from './components/App';
import './index.css';

let store = createStore(lightSlideApp, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);