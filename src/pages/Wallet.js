import React from 'react';
import Header from '../components/Header';
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
        </section>
      </main>);
  }
}

export default Wallet;
