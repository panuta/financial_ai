import { combineReducers } from 'redux'

import bankaccount_reducer from './BankAccount/reducer'
import mututalfund_reducer from './MutualFund/reducer'


export default combineReducers({
  'bank_account': bankaccount_reducer,
  'mutual_fund': mututalfund_reducer,
});
