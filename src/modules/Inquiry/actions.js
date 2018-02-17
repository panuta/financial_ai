
export const ADD_INQUIRY = 'ADD_INQUIRY';

export function addInquiry(questionName, questionType, isRequired) {
  if (isRequired === undefined) {
    isRequired = false;
  }

  return {
    type: ADD_INQUIRY,
    questionName,
    questionType,
    isRequired
  }
}
