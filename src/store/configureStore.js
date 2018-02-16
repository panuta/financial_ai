import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import DevTools from './DevTools';

import * as reducers from './reducers'
import { rootEpic } from './epics';

const rootReducer = combineReducers({ ...reducers });
const epicMiddleware = createEpicMiddleware(rootEpic);

const enhancer = compose(
  applyMiddleware(epicMiddleware, ),
  DevTools.instrument()
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // if (module.hot) {
  //   module.hot.accept('./reducers', () =>
  //     store.replaceReducer(require('./reducers')/*.default if you use Babel 6+ */)
  //   );
  // }

  return store;
}