
import { ADD_INQUIRY } from "./actions";


export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_INQUIRY:
      return state.concat([{
        'question_name': action.questionName,
        'is_required': action.isRequired,
      }]);
    default:
      return state
  }
}
