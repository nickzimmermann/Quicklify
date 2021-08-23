import React from "react";


const Footer = () => (
   <div className="row text-center bg-dark">
       <div>
       <img className = "d-block mx-auto mb-4" src = "./logo2.png" alt = "" width = "70"  height = "70" />
       </div>
       <p className="col-sm mx-auto mb-4" style={{color:'white'} }>
            &copy;{new Date().getFullYear()} Quicklify | All Rights Reserved | <a href="SS Privacy">Privacy</a> · <a href="SS Terms and Condition">Terms</a>
        </p>
    </div>
);

export default Footer;