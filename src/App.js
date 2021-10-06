import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import WithdrawAmount from './components/withdraw/WithdrawAmount';
import DepositAmount from './components/deposit/DepositAmount';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Home />
        <Switch>
          <Route exact path='/withdraw' component={WithdrawAmount} />
          <Route path='/deposit' component={DepositAmount} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
