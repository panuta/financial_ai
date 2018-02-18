import { combineReducers } from 'redux'

import { default as onboarding_reducer } from '../containers/Onboarding/reducer';
import { default as objects_reducers } from '../objects/reducers'
import { default as inquiry_reducer } from '../modules/Inquiry/reducer'

// import { default as app_reducer } from './app';
// import { default as inquiry_reducer } from './inquiry';


export default combineReducers({
  'app': onboarding_reducer,
  'objects': objects_reducers,
  'inquiry': inquiry_reducer,
});
