import { combineEpics } from 'redux-observable';

import { addPersonEpic } from '../objects/Person/actions';
import { onboardUserEpic } from './actions/app';

export const rootEpic = combineEpics(
  addPersonEpic,
  onboardUserEpic,
);
