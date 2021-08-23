import React from 'react';
import './Cover.css';
import { Link as ReactLink } from 'react-router-dom';

function Cover(props) {
    return(
        <div className="cover-wrapper" style={{
             "background-image":  "linear-gradient(to bottom, rgba(56, 102, 133, 0.8) 0%, rgba(73, 73, 73, 0.8) 100%), url(./cover2.jpeg)"}}>
            <div className="banner-text ms-2" >
                <h1 style={{"font-size": "4rem"}}>{props.covertitle}</h1>
                <hr className="divider" />
                <p className= "cover-text pb-4" style={{"font-family": "Merriweather Sans"}}>{props.coverdescription}</p>
                <ReactLink type="button"  className="btn btn-primary text-center px-5" style={{"text-align": "center", "border-top": "1cm", "borderRadius": "4rem" , "height": "3rem"}} to="pricing">{props.getstartedbtn}</ReactLink>
            </div>
        </div>
    )
};

export default Cover;
