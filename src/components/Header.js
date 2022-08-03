import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { loginName } = this.props;
    const { total, currency } = this.state;
    return (
      <div>
        <div>
          <p data-testid="email-field">{ `User: ${loginName}` }</p>
        </div>
        <div>
          <p data-testid="total-field">{ `Total Expenses: ${total}` }</p>
          <p data-testid="header-currency-field">{ `Currency: ${currency}` }</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginName: state.user.email,
});

Header.propTypes = {
  loginName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
