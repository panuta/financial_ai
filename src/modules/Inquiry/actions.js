
export const ADD_INQUIRY = 'ADD_INQUIRY';

export const REQUEST_FOR_DATA = 'REQUEST_FOR_DATA';



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

export function requestForData(title, fields) {
  return {
    type: REQUEST_FOR_DATA,
    title,
    fields
  }
}

