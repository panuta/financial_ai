
import { ADD_INQUIRY, REQUEST_FOR_DATA } from "./actions";


export default function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_INQUIRY:
      state.questions = state.questions || [];
      state.questions.push({
        'question_name': action.questionName,
        'is_required': action.isRequired,
      });
      return state;

    case REQUEST_FOR_DATA:
      state.requests = state.requests || [];
      state.requests.push({
        title: action.title,
        fields: action.fields
      });
      return state;

    default:
      return state
  }
}
