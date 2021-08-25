import QCard from './QCard.js';
import React from 'react';


function QCardSection(props) {
    return (
        <section className="page-section" id="about">

            <h2 class="card-title pt-4" style={{"font-size": "3.5rem","font-family": "Merriweather Sans", "text-align": "center"}}>How It Works</h2>

            <div className="card-box text-center d-flex py-5 px-5">           

                <div className="container px-4" id="icon-grid">
                
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






