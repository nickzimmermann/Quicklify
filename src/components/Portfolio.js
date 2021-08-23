import React from 'react';


function Portfolio(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                {
                props.content.map(
                    (location) => {
                    return (
                    <div class="col-12 col-md-4 mx-0 ">
                    <img src={location['image']} style={{"height": "298.96px", "width": "500px"}}  alt="..."/>
                    </div>
                    )
                    }
                )
                }
            </div>
            <div className="row">
                {
                props.content2.map(
                    (location) => {
                    return (
                    <div class="col-12 col-md-4  mx-0 ">
                    <img src={location['image2']} style={{"height": "298.96px", "width": "500px"}}  alt="..."/>
                    </div>
                    )
                    }
                )
                }
            </div>
        </div>
    )
}

export default Portfolio;
