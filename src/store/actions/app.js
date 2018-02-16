import 'rxjs';

export const ONBOARD_USER = 'ONBOARD_USER';
export const RESET_USER = 'RESET_USER';


export function onboardUser(personName) {
  return {
    type: ONBOARD_USER,
    personName,
  }
}

export function resetUser() {
  return {
    type: RESET_USER,
  }
}

export const onboardUserEpic = action$ =>
  action$
    .ofType(ONBOARD_USER)
    .mapTo({ type: 'ADD_PERSON', personName:'NAME' });
