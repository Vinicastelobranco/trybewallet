import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={ Login } exact />
          <Route path="/carteira" render={ (props) => <Wallet { ...props } /> } />
        </Switch>

      </div>);
  }
}
export default App;
