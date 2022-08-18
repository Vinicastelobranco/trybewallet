import {
  RECEIVE_CURRENCIES,
  REQUEST_CURRENCIES,
  REQUEST_CURRENCIES_FAILURE,
  SAVE_EXPENSES,
  DELETE_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalValue: 0.00,
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
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload1],
      totalValue: action.payload2,
    };
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: action.payload1,
      totalValue: action.payload2,
    };
  default:
    return state;
  }
}

export default wallet;
