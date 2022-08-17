import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: 'BRL',
    };
  }

  render() {
    const { loginName, totalExpenses } = this.props;
    const { currency } = this.state;
    return (
      <div>
        <div>
          <p data-testid="email-field">{ `User: ${loginName}` }</p>
        </div>
        <div>
          <p>
            Total Expenses:
            <span
              data-testid="total-field"
            >
              {Number.parseFloat(totalExpenses).toFixed(2)}

            </span>
          </p>
          <p data-testid="header-currency-field">{ `Currency: ${currency}` }</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginName: state.user.email,
  totalExpenses: state.wallet.totalValue,
});

Header.propTypes = {
  loginName: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
