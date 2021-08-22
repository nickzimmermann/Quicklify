import React from 'react';
import './NavBar.css';

function NavBar(props) {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-2" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top" >
                    <img src={props.logo} width="70px" style={ {"margin-left": ".5cm", "border-radius": ".5ch"} }/> 
                </a> 
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-1 my-lg-0 me-auto px-5 " style={{"position": "static"}}>
                        <li className="nav-item"><a className="nav-link" href="#about">{props.label1}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">{props.label2}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">{props.label3}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#how it works">{props.label4}</a></li>
                    </ul>
                        <button type="button" className="btn btn-primary px-4" style= { {"margin-right": ".3cm", "margin-left": "1cm", "borderRadius": "3rem"} }>{props.btnlabel1}</button>
                        <button type="button" style={{"borderRadius": "3rem"}} className="btn btn-primary px-4">{props.btnlabel2}</button>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;

