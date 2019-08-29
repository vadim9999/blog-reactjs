import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
