import ClientArea from './ClientArea';
import NavBar from './NavBar.js';

function ClientScreen() {
    return (
        <div>
            <NavBar logo="./logo1.png" label1="Home" label2= "Why Us"label3="How it works"label4="Pricing"
      btnlabel1="Register"
      btnlabel2="Login"/>
            <ClientArea />
        </div>
    )
};

export default ClientScreen;