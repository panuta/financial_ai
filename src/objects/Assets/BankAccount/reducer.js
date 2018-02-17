
import { ADD_BANK_ACCOUNT } from './actions';

// Reducers

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_BANK_ACCOUNT:
      return state.concat([action.name]);
    default:
      return state
  }
}
