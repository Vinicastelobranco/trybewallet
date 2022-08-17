import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <section>
        <table className="wallet-table">
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
        </table>
      </section>
    );
  }
}
// ok

export default Table;
