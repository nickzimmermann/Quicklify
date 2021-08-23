import QCard from './QCard.js';
import React from 'react';


function QCardSection(props) {
    return (
        <section className="page-section" id="about">
            <div className="card text-center d-flex py-5 px-5">
                <h2 class="card-title" style={{"font-size": "3.5rem","font-family": "Merriweather Sans"}}>How It Works</h2>
                <div className="container px-4 py-5" id="icon-grid">
                
                    <div className="row">
                        {
                        props.content.map(
                            (location) => {
                            return (
                                
                                <div className="col-12 col-md-4 mb-4">
                                
                                                        
                                    <QCard
                                    icon={location.icon}
                                    title={location.title}
                                    description={location.description}
                                    />
                                                        
                                </div>
                                
                                
                            )
                            }
                        )
                        }
                    </div>
                </div>
            </div>
        </section>   
    )
}

export default QCardSection;





