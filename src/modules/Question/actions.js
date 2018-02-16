
export const ADD_QUESTION = 'ADD_QUESTION';

export function addQuestion(question_name, is_required) {
  return {
    type: ADD_QUESTION,
    question_name,
    is_required
  }
}
