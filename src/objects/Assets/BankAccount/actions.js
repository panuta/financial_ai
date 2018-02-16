import 'rxjs';

export const ADD_BANK_ACCOUNT = 'ADD_BANK_ACCOUNT';

export function addBankAccount(name) {
  return {
    type: ADD_BANK_ACCOUNT,
    name
  }
}

export const addBankAccountEpic = action$ =>
  action$
    .ofType('ADD_BANK_ACCOUNT')
    .mapTo({ type: 'ADD_QUESTION', question_name:'What bank?' });
