import React from 'react';

function QCardSection2(props) {
    return (
        <div className="container py-5" id="whyus">
            {
                props.content.map(
                    function(element, index) {

                        let rowOrder = "";

                        return (
                                <div className={"row " + rowOrder}>
                                    
                                        
                                <div className="col-12 col-md-6 col-lg-6">
                                        <img style= { {"margin-right": "2cm","borderRadius": "3rem"} }src={element.picture1} width="100%" height="auto" />
                                    </div>                                                    
                                    
                                    <div className="col-12 col-md-6 col-lg-6 ms-auto">
                                        <h1  style={{"font-size": "3.5rem","font-family": "Merriweather Sans", "textAlign": "center"}}>{element.Qheading2}</h1>
                                        <hr className="divider" />
                                        <h4 style={ {"font-weight": "bold", "textAlign": "center","font-family": "Merriweather Sans"} }>{element.title1}</h4>                                                                
                                        <p style={ {"textAlign": "center", "font-family": "Merriweather Sans"} }>{element.description1}</p>
                                        <h5 style={ {"font-weight": "bold", "textAlign": "center", "font-family": "Merriweather Sans"} }>{element.title2}</h5>
                                        <p style={ {"textAlign": "center", "font-family": "Merriweather Sans"} }>{element.description2}</p>

                                    </div>
                                
                                </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default QCardSection2;
