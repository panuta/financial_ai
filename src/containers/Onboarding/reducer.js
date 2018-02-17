import { ONBOARD_USER } from './actions';


export default (state = {}, action) => {
  switch (action.type) {
    case ONBOARD_USER:
      return {
        onboarding: false
      };
    default:
      return state
  }
}
