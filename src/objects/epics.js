import { combineEpics } from 'redux-observable';

import { addPersonEpic } from './Person/actions';


export default combineEpics(
  addPersonEpic,
);
