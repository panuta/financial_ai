import 'rxjs';
import { ADD_INQUIRY } from "../../../modules/Inquiry/actions";

export const ADD_BANK_ACCOUNT = 'ADD_BANK_ACCOUNT';

export function addBankAccount(name) {
  return {
    type: ADD_BANK_ACCOUNT,
    name
  }
}

export const addBankAccountEpic = action$ =>
  action$
    .ofType(ADD_BANK_ACCOUNT)
    .mapTo({ type: ADD_INQUIRY, questionName:'What bank?' });
