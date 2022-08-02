// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_USER':
    return {
      ...state,
      email: action.userName,
    };
  case 'DELETE_USER':
    return state.filter((login) => login.userName !== action.value);
  default:
    return state;
  }
}
export default user;
