import 'rxjs';
import {addPerson} from '../../objects/Person/actions';

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
    .map(action => (addPerson(action.personName)));
