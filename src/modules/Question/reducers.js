
import { ADD_QUESTION } from "./actions";


export function reducers(state = [], action) {
  switch (action.type) {
    case ADD_QUESTION:
      return state.concat([{
        'question_name': action.question_name,
        'is_required': action.is_required,
      }]);
    default:
      return state
  }
}
