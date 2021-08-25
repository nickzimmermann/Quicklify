import RegistrationForm from './RegistrationForm.js';
import NavBar from './NavBar.js';

function RegistrationScreen() {
    return (
        <div>
            <NavBar logo="./logo1.png" label1="Home" label2= "Why Us"label3="How it works"label4="Pricing"
      btnlabel1="Register"
      btnlabel2="Login"/>
            <br></br>
            <RegistrationForm />
        </div>
    )
};

export default RegistrationScreen;