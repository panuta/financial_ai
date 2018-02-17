import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducers from './rootReducers';
import rootEpics from './rootEpics';

const enhancer = compose(
  applyMiddleware(
    createEpicMiddleware(rootEpics),
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function configureStore(initialState) {
  const store = (module.hot && module.hot.data && module.hot.data.store)
    ? module.hot.data.store
    : createStore(
      rootReducers,
      initialState,
    enhancer);

  if (module.hot) {
    module.hot.accept('./rootReducers', () => {
      const nextRootReducer = require('./rootReducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}