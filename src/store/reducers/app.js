import { ONBOARD_USER, RESET_USER } from "../actions/app";

export default (state = {}, action) => {
  switch (action.type) {
    case ONBOARD_USER:
      return {
        ...state,
        onboarding: false
      };
    case RESET_USER:
      return {
        ...state,
        onboarding: true
      };
    default:
      return state
  }
}
