import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      disabledButton: true,
    };
  }

  validateEmail = (email) => {
    const checkEmail = /\S+@\S+\.\S+/;
    return checkEmail.test(email);
  }

  handleButton = () => {
    const { senha, email } = this.state;
    const minPasswordLength = 6;
    if (senha.length >= minPasswordLength && this.validateEmail(email) === true) {
      this.setState({ disabledButton: false });
    } else {
      this.setState({ disabledButton: true });
    }
  }

  handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState(() => ({ [name]: value }), this.handleButton);
  }

  handleClick = () => {
    const { email } = this.state;
    const { history, addUser } = this.props;
    addUser({ email });
    history.push('/carteira');
  }

  render() {
    const { disabledButton, email, senha } = this.state;
    return (
      <div>
        <p>Hello, TrybeWallet!</p>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="text"
            name="senha"
            data-testid="password-input"
            value={ senha }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ disabledButton }
          onClick={ this.handleClick }
          onChange={ this.handleChange }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: ({ email }) => dispatch(addUser(email)),
});

Login.propTypes = {
  addUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
