import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import DevTools from './store/DevTools';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';
const store = configureStore({
  app: {
    onboarding: true
  }
});

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
