import { Link as ReactLink } from 'react-router-dom';
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
                        <ReactLink className="nav-item" to="/home"><a className="nav-link" href="#home">{props.label1}</a></ReactLink>
                        <li className="nav-item"><a className="nav-link" href="#how it works">{props.label3}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#why us">{props.label2}</a></li>
                        <ReactLink className="nav-item" to="/pricing"><a className="nav-link" href="#pricing">{props.label4}</a></ReactLink>
                    </ul>
                        <ReactLink type="button" className="btn btn-primary px-4" style= { {"margin-right": ".3cm", "margin-left": "1cm", "borderRadius": "3rem"} } to="/pricing">{props.btnlabel1}</ReactLink>
                        <ReactLink type="button" style={{"borderRadius": "3rem"}} className="btn btn-primary px-4"to="/login">{props.btnlabel2}</ReactLink>
                        <ReactLink type="button" style={{"margin-right": ".3cm", "margin-left": ".3cm", "borderRadius": "3rem"}} className="btn btn-primary px-4" to="/profile">{props.btnlabel3}</ReactLink>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;

