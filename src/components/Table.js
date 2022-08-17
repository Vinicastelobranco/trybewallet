import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Expense from './Expense';
import exchangeOperations from '../tests/helpers/exchangeOperations';

class Table extends Component {
  render() {
    const { getExpenses } = this.props;
    return (
      <section>
        <table>
          <thead>
            <tr>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Moeda de conversão</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Descrição</th>
              <th>Método de pagamento</th>
              <th>Tag</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              getExpenses.map((data) => (
                <Expense data={ exchangeOperations(data) } key={ data.id } />
              ))
            }
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = (store) => ({
  getExpenses: store.wallet.expenses,
});

Table.propTypes = {
  getExpenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Table);
