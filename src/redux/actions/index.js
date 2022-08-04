import getCurrencies from '../../services/api';

// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const REQUEST_CURRENCIES_FAILURE = 'REQUEST_CURRENCIES_FAILURE';

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
      dispatch(receiveCurrencies(response));
    } catch (error) {
      dispatch(requestCurrenciesFailure(error));
    }
  };
}
