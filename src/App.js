import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen.js';
import RegistrationScreen from './components/RegistrationScreen.js';
import './App.css';
import PricingScreen from './components/PricingScreen.js'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MainScreen} />
        <Route path="/register" exact={true} component={RegistrationScreen} />
        <Route path="/pricing" exact={true} component={PricingScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;



