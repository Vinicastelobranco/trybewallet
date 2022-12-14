import getCurrencies from '../../services/api';
import { addExpense, removeExpense } from '../../tests/helpers/exchangeOperations';

export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const REQUEST_CURRENCIES_FAILURE = 'REQUEST_CURRENCIES_FAILURE';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const addUser = (userName) => ({
  type: ADD_USER,
  userName,
});

export const deleteUser = (userName) => ({
  type: DELETE_USER,
  userName,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  currencies,
});

export const requestCurrenciesFailure = (error) => ({
  type: REQUEST_CURRENCIES_FAILURE,
  error,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    try {
      const response = await getCurrencies();
      const filteredResponse = Object.keys(response)
        .filter((currencies) => currencies !== 'USDT');
      dispatch(receiveCurrencies(filteredResponse));
    } catch (error) {
      dispatch(requestCurrenciesFailure(error));
    }
  };
}

export const saveExpenseAction = (expense, { totalValue }) => {
  const { convertedValue } = addExpense(expense);
  console.log(convertedValue);
  const sumValues = Math.round((convertedValue + totalValue) * 100) / 100;
  return {
    type: SAVE_EXPENSES,
    payload1: { ...expense },
    payload2: sumValues,
  };
};

export function expenseWithCurrencies(expense) {
  return async (dispatch, getState) => {
    try {
      dispatch(requestCurrencies());
      const response = await getCurrencies();
      const newExpense = {
        ...expense,
        exchangeRates: response,
      };
      dispatch(saveExpenseAction(newExpense, getState().wallet));
    } catch (error) {
      dispatch(requestCurrenciesFailure(error));
    }
  };
}
const returnExpenseAction = (getId, getState) => {
  const { updateSum, updateExpenses } = removeExpense(getId, getState().wallet);

  return {
    type: DELETE_EXPENSES,
    payload1: updateExpenses,
    payload2: updateSum,
  };
};

export function deleteExpenseAction(getId) {
  return (dispatch, getState) => {
    dispatch(returnExpenseAction(getId, getState));
  };
}
