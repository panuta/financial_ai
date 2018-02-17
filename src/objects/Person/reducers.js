
import { ADD_PERSON } from './actions';

// Reducers

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_PERSON:
      return state.concat([action.personName]);
    default:
      return state
  }
}
