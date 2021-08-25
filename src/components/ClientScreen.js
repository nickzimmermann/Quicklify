import Carousel from './Carousel';
import NavBar from './NavBar.js';

const slides = [
    {
        title: 'PROCESS FLOW',
        desc: 'Scheme of the client area and actions that can be done',
        img: './processflow.jpg'
    },
    {
        title: 'Sample Output',
        desc: 'Restaurant payment',
        img: './carousel2.jpg'
    },
    {
        title: 'Sample Output',
        desc: 'Accesing Business card with the QR',
        img: './businessacard.jpg'
    }
]

function ClientScreen(props) {
    return (
        <div>
            <NavBar {...props} logo="./logo1.png" label1="Home" label2= "Why Us"label3="How it works"label4="Pricing"
      btnlabel1="Register"
      btnlabel2="Login"
      btnlabel3="Profile"
      />
            <Carousel slides={slides}/>
        </div>
    )
};

export default ClientScreen;