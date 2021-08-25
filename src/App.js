import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen.js';
import RegistrationScreen from './components/RegistrationScreen.js';
import './App.css';
import PricingScreen from './components/PricingScreen.js'
import LoginScreen from './components/LoginScreen.js'
import ProfileScreen from './components/ProfileScreen.js'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MainScreen} />
        <Route path="/register" exact={true} component={RegistrationScreen} />
        <Route path="/pricing" exact={true} component={PricingScreen} />
        <Route path="/login" exact={true} component={LoginScreen} />
        <Route path="/home" exact={true} component={MainScreen} />
        <Route path="/profile" exact={true} component={ProfileScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;



