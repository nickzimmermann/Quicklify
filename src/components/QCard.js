import React from 'react';


function QCard(props) {
    return (
        <div className="card" style={ {"max-width": "40rem", "width": "100%", "borderColor": "#2674e9", "height": "100%", "backgroundColor": "#454849", "borderRadius": "2rem", "border-width": "thick"} }>
            <div className="card-body">
   
                    <h5 className="card-title pb-2" style={{"color": "white", "font-family": "Merriweather Sans"}}><b>{props.title}</b></h5>

                <p className="card-text" style={{"color": "#6c757d"}}>{props.description}</p>
            </div>
        </div>
    )
};

export default QCard;


  