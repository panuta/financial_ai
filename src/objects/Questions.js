

const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion(question_name, is_required) {
  return {
    type: ADD_QUESTION,
    question_name,
    is_required
  }
}

export function questions_reducer(state = [], action) {
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
