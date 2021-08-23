import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegistrationScreen from './RegistrationScreen.js'
import Footer from './Footer.js';
import PricingHome from './PricingHome.js';
import NavBar from './NavBar.js';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={NavBar}/>
           <Route path="/register" exact={true} component={RegistrationScreen} />
           <Route path="/pricing" exact={true} component={PricingHome} />
      </Switch>
      <Footer />      

    </BrowserRouter>
    
  )
}

export default App;