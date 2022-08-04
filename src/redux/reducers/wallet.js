// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { RECEIVE_CURRENCIES,
  REQUEST_CURRENCIES, REQUEST_CURRENCIES_FAILURE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
    };
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case REQUEST_CURRENCIES_FAILURE:
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
}

export default wallet;
