import LoginForm from './LoginForm.js';
import NavBar from './NavBar.js';

function LoginScreen() {
    return (
        <div>
            <NavBar logo="./logo1.png" label1="Home" label2= "Why Us"label3="How it works"label4="Pricing"btnlabel1="Register"btnlabel2="Login"btnlabel3="Profile"/>
            <br></br>
            <br></br>
            <br></br>
            <LoginForm />
        </div>
    )
};

export default LoginScreen;