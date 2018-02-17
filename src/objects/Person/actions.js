import 'rxjs';
import { ADD_QUESTION } from "../../modules/Inquiry/actions";

export const ADD_PERSON = 'ADD_PERSON';

export function addPerson(name) {
  return {
    type: ADD_PERSON,
    name
  }
}

export const addPersonEpic = action$ =>
  action$
    .ofType(ADD_PERSON)
    .mapTo({ type: ADD_QUESTION, question_name:'What if?' });
