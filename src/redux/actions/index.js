import getCurrencies from '../../services/api';

// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

export const addUser = (userName) => ({
  type: ADD_USER,
  userName,
});

export const deleteUser = (userName) => ({
  type: DELETE_USER,
  userName,
});
