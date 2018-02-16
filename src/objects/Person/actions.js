import 'rxjs';

export const ADD_PERSON = 'ADD_PERSON';

export function addPerson(name) {
  return {
    type: ADD_PERSON,
    name
  }
}

export const addPersonEpic = action$ =>
  action$
    .ofType('ADD_PERSON')
    .mapTo({ type: 'ADD_QUESTION', question_name:'What if?' });
