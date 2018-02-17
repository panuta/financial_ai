import { combineReducers } from 'redux'

import person_reducer from './Person/reducers';
import assets_reducers from './Assets/reducers';


export default combineReducers({
  'person': person_reducer,
  'assets': assets_reducers,
});
