import 'rxjs';

export const ADD_MUTUAL_FUND = 'ADD_MUTUAL_FUND';

export function addMutualFund(name) {
  return {
    type: ADD_MUTUAL_FUND,
    name
  }
}

export const addMutualFundEpic = action$ =>
  action$
    .ofType(ADD_MUTUAL_FUND)
    .mapTo({ type: ADD_MUTUAL_FUND, question_name:'What bank?' });
