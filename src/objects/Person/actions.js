import 'rxjs';
import { Observable } from 'rxjs';
import { addInquiry } from "../../modules/Inquiry/actions";

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
    .flatMap(action =>
      Observable.concat(
        Observable.of(addInquiry('Gender?')),
        Observable.of(addInquiry('Marital status?'))
      )
    );
