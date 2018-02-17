import { combineEpics } from 'redux-observable';

import { default as objects_epics } from '../objects/epics'
import { default as containers_epics } from '../containers/epics'


export default combineEpics(
  containers_epics,
  objects_epics,
);
