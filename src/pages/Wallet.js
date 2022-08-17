import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <header>
          <div>
            <Header />
          </div>
        </header>
        <section>
          <div>
            <WalletForm />
          </div>
          <div>
            <Table />
          </div>
        </section>
      </main>);
  }
}
// ok

export default Wallet;
