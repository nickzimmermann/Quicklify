function Carousel(props) {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">

                {
                    props.slides.map(
                        (slide, index) =>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className="active" aria-current="true" aria-label={`Slide ${index}`}></button>
                    )                    
                }

            </div>
            <div className="carousel-inner">

                {
                    props.slides.map(
                        (slide, index) => 
                        <div className={`carousel-item ` + (index === 0 ? 'active' : '') }>
                            <div style={{'display': 'relative', 'height': '100vh', 'width': '100%', 'background': `url(${slide.img}) center center`, 'background-size': '50%'}} />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 style={{"color": "black"}}>{slide.title}</h2>
                                <p style={{"color": "black"}}>{slide.desc}</p>
                            </div>
                        </div>
                    )
                }

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    )
}

export default Carousel;