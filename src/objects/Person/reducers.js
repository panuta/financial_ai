
import {ADD_PERSON} from './actions';

// Reducers

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_PERSON:
      if (action.personName !== undefined && action.personName) {
        state.push({
          name: action.personName,
          isPrimary: !state.length,
        })
      }
      return state;
    default:
      return state
  }
}


