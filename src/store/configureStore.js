import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import DevTools from './DevTools';

import rootReducers from './rootReducers';
import rootEpics from './rootEpics';

const enhancer = compose(
  applyMiddleware(
    createEpicMiddleware(rootEpics),
  ),
  DevTools.instrument()
);

export default function configureStore(initialState) {
  const store = createStore(
    rootReducers,
    initialState,
    enhancer);

  // if (module.hot) {
  //   module.hot.accept('./reducers', () =>
  //     store.replaceReducer(require('./reducers')/*.default if you use Babel 6+ */)
  //   );
  // }

  return store;
}