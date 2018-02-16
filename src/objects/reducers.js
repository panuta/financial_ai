import { combineReducers } from 'redux'

import { questions_reducer } from './Questions';
import { reducers as person_reducers } from './Person/reducers';
// import { bank_account_reducer } from './BankAccount';


export default combineReducers({
  'questions': questions_reducer,

  'person': person_reducers,
  // 'bank_account': bank_account_reducer,
});
