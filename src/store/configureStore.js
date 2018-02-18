import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducers from '../reducers/index';
import rootEpics from './rootEpics';

const enhancer = compose(
  applyMiddleware(
    createEpicMiddleware(rootEpics),
  ),
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  //     // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
  //     // Prevent recomputing reducers for `replaceReducer`
  //     shouldHotReload: false,
  //   })
  //   : compose
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function configureStore(initialState = {}) {

  const store = createStore(rootReducers, initialState, enhancer);
  // const store = createStore(rootReducers, initialState);

  // const store = (module.hot && module.hot.data && module.hot.data.store)
  //   ? module.hot.data.store
  //   : createStore(
  //     rootReducers,
  //     initialState,
  //   enhancer);

  // console.log(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  // if (module.hot) {
  //   module.hot.accept('./rootReducers', () => {
  //     const nextRootReducer = require('./rootReducers');
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }

  return store;
}