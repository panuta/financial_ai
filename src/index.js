import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import DevTools from './store/DevTools';

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
