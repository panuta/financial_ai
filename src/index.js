import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './containers/App';

import configureStore from './store/configureStore';
const store = configureStore({
  app: {
    onboarding: true
  }
});

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
