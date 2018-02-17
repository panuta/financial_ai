
export const ADD_INQUIRY = 'ADD_INQUIRY';

export function addInquiry(questionName, isRequired) {
  if (isRequired === undefined) {
    isRequired = false;
  }

  return {
    type: ADD_INQUIRY,
    questionName,
    isRequired
  }
}
