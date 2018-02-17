import { combineEpics } from 'redux-observable';

import { onboardUserEpic } from './Onboarding/actions'


export default combineEpics(
  onboardUserEpic,
);
