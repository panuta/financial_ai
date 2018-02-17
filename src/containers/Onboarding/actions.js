import 'rxjs';
import { ADD_PERSON } from "../../objects/Person/actions";

export const ONBOARD_USER = 'ONBOARD_USER';


export function onboardUser(personName) {
  return {
    type: ONBOARD_USER,
    personName,
  }
}

export const onboardUserEpic = action$ =>
  action$
    .ofType(ONBOARD_USER)
    .map(action => ({ type: ADD_PERSON, personName: action.personName }));
