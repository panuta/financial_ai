import 'rxjs';
import { Observable } from 'rxjs';
import {requestForData} from "../../modules/Inquiry/actions";

export const ADD_PERSON = 'ADD_PERSON';
export const ADDING_PERSON = 'ADDING_PERSON';

export function addPerson(personName) {
  return {
    type: ADD_PERSON,
    personName
  }
}

export const addPersonEpic = action$ =>
  action$.ofType(ADD_PERSON)
    .map(action => requestForData('Need data for person', [
      {
        name: 'Birth year',
        type: 'number'
      },
      {
        name: 'Marital status',
        type: 'choices',
        choices: 'Single,Married'
      },
    ]));

// export const addPersonEpic = action$ =>
//   action$
//     .ofType(ADD_PERSON)
//     .mapTo(requestForData([
//       {
//         name: 'Birth year',
//       },
//       {
//         name: 'Marital status',
//       },
//     ]));

// export const addPersonEpic = action$ =>
//   action$
//     .ofType(ADD_PERSON)
//     .flatMap(action =>
//       Observable.concat(
//         Observable.of(addInquiry('Age?', 'number')),
//         Observable.of(addInquiry('Gender?', 'choices')),
//         Observable.of(addInquiry('Marital status?', 'choices'))
//       )
//     );
