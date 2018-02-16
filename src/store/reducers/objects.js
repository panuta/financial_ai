import { combineReducers } from 'redux'

import { reducers as person_reducers } from '../../objects/Person/reducers';
// import { bank_account_reducer } from '../../objects/BankAccount';


export default combineReducers({
  'person': person_reducers,
  // 'bank_account': bank_account_reducer,
});
