import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './createStore';
import { AUTH_ACCOUNT } from './Auth/constants/authConstants';

import App from './App/App';

const token = localStorage.getItem('accountToken');

if (token) {
  store.dispatch({ type: AUTH_ACCOUNT, payload: token });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();
