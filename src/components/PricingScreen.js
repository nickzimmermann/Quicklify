import PricingHome from './PricingHome.js';
import NavBar from './NavBar.js';

function PricingScreen() {
    return (
        <div>
            <NavBar logo="./logo1.png" label1="Home" label2= "Why Us"label3="How it works"label4="Pricing"
      btnlabel1="Register"
      btnlabel2="Login"/>
            <br></br>
            <PricingHome />
        </div>
    )
};

export default PricingScreen;