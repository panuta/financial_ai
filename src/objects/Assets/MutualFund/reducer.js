
import { ADD_MUTUAL_FUND } from './actions';

// Reducers

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_MUTUAL_FUND:
      return state.concat([action.name]);
    default:
      return state
  }
}
