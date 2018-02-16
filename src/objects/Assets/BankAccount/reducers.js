
import { ADD_BANK_ACCOUNT } from './actions';

// Reducers

export function reducers(state = [], action) {
  switch (action.type) {
    case ADD_PERSON:
      return state.concat([action.name]);
    default:
      return state
  }
}
