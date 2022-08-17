import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expenseWithCurrencies, fetchCurrencies } from '../redux/actions';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { currenciesList } = this.props;
    currenciesList();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  saveNewExpense = (state) => {
    const { addExpense } = this.props;
    addExpense(state);
    console.log('oi');
    this.setState((prevState) => ({
      value: '',
      description: '',
      method: 'Dinheiro',
      currency: 'USD',
      tag: 'Trabalho',
      id: prevState.id + 1,
    }));
  }

  render() {
    const currentState = this.state;
    const { currencies } = this.props;
    const { value, description, method, tag, currency } = this.state;
    return (
      <div>
        <form id="form">
          <label htmlFor="value">
            Value:
            <input
              type="number"
              name="value"
              value={ value }
              data-testid="value-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Currency:
            <select
              name="currency"
              value={ currency }
              data-testid="currency-input"
              onChange={ this.handleChange }
            >
              {currencies.map((code) => (
                <option key={ code } value={ code }>
                  {code}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Payment Method:
            <select
              name="method"
              value={ method }
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select
              name="tag"
              value={ tag }
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Description:
            <input
              type="text"
              name="description"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ () => this.saveNewExpense(currentState) }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesList: () => dispatch(fetchCurrencies()),
  addExpense: (expense) => dispatch(expenseWithCurrencies(expense)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currenciesList: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
