import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpenseAction } from '../redux/actions';

class Expense extends Component {
  constructor() {
    super();

    this.state = {
      id: null,
    };
  }

  componentDidMount() {
    const { data: { id } } = this.props;
    this.setState({
      id,
    });
  }

  render() {
    const { id } = this.state;
    const { data: {
      value,
      description,
      method,
      currencyName,
      tag,
      convertedValue,
      exchangeValue,
    }, deleteExpense } = this.props;

    return (
      <tr>
        <td>{ parseFloat(value).toFixed(2) }</td>
        <td>{ currencyName }</td>
        <td>REAL</td>
        <td>{ parseFloat(exchangeValue).toFixed(2) }</td>
        <td>{ convertedValue }</td>
        <td>{ description }</td>
        <td>{ method }</td>
        <td>{ tag }</td>
        <td>
          <button type="button">Editar</button>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => deleteExpense(id) }
          >
            Excluir

          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (getId) => dispatch(deleteExpenseAction(getId)),
});

Expense.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Expense);
