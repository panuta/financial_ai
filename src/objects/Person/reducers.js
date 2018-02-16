
import { ADD_PERSON } from './actions';

// Reducers

export function reducers(state = [], action) {
  switch (action.type) {
    case ADD_PERSON:
      return state.concat([action.name]);
    default:
      return state
  }
}
