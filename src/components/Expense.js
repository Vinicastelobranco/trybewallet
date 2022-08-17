import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expense extends Component {
  render() {
    const { data: {
      value,
      description,
      method,
      currencyName,
      tag,
      convertedValue,
      exchangeValue,
    } } = this.props;

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
          <button type="button">Excluir</button>
        </td>
      </tr>
    );
  }
}

Expense.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Expense;
