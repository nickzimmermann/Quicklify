import './Pricing.css';
import { Link as ReactLink } from 'react-router-dom';


function CardDescription({ title, description }) {	
	return (
		<div className="card-description pt-4" >
			<h2 style={{"font-size": "26px",
        "margin-bottom": ".5rem", "text-align": "center"}}><b>{ title }</b></h2>
			<p style={{"text-align": "center"}}>{ description }</p>
		</div>  
	);
};

function CardBilling({ price, recurrency }) {
	return (
		<div className="card-billing">
			<p style={{"text-align": "center"}}>
				<strong className="price">$ { price }</strong>
        <strong> / mo.</strong>
			</p>
			<p style={{"text-align": "center"}}>
				<span className="recurrency">
					Billed Anually or	$ { recurrency }/monthly
				</span>
			</p>
		</div>
	);
};

function CardFeatures({ data }) {	
  console.log(data, "data from cards")
	return (
		<div className="card-features">
			<ul>
				{ 
					data.map((item, index) => {
						return (
							<li key={index}>{item}</li>
						)
					})
				}
			</ul>
		</div>
	);
};

function CardAction({ clickMe }) {
	return (
		<div className="card-action">
      <ReactLink style={{"align": "center"}} className="btn btn-primary ms-5 px-4" to="/register">Subscribe</ReactLink>
		</div>
	);
};

function PricingCard(props) {	
	const { 
    type,
    title,
    description,
    price,
    recurrency,
    mostPopular,
    data,
    clickMe
  } = props;
	console.log(data, "this is the data from props")
	return (
		<div className={`card pricing-card pt-4 ${type}`}>
      { (mostPopular) ? <span style={{"text-align": "center"}} className="most-popular">Most Popular</span> : null }
			<CardDescription title={title} description={description} />
			<CardBilling price={price} recurrency={recurrency} />
			<CardFeatures data={data} />
			<CardAction style={{"text-align": "center", "display": "inline-block"}}clickMe={clickMe}  />
		</div>
	);
};

function PricingHome() {
  function handleClick() {
    console.log('Button clicked!');
  };
  
	return (
		<div className="app-wrapper">
      {
        cardsData.map(mohammed => {                              
          return (
            <PricingCard
              {...mohammed}
              key={mohammed.id}
              data={mohammed.data}
              clickMe={handleClick} 
            />
          )
        })
      }
		</div>
	);
};

const cardsData = [
  {
    id: 1,
    type: 'free',
    title: 'Free Trial',
    description: '14 days Trial',
    price: '$0',
    mostPopular: false,
    data: ['1 Dynamic QR Code', '100 Scans', '1 User' ]
  },
  {
    id: 2,
    type: 'basic',
    title: 'Starter',
    description: 'Best for Individuals',
    price: '$6.99',
    mostPopular: false,
    data: ['Billed annually', '2 Dynamic QR Code', '10,000 Scans', '1 User']
  },
  {
    id: 3,
    type: 'medium',
    title: 'Advanced',
    description: 'Great for Teams',
    price: '$12.99',
    mostPopular: true,
    data: ['Billed bi-annually', '50 Dynamic QR Codes', 'Unlimited Scans', '100 Bulk Creations', '3000 API Requests', '2 Users']
  },
  {
    id: 4,
    type: 'pro',
    title: 'Professional',
    description: 'Perfect for Industry Leaders',
    price: '$34.99',
    mostPopular: false,
    data: ['250 Dynamic QR Codes','Unlimited Scans', '500 Bulk Creations','10,000 API Requests', '5 Users', 'Premium Support']
  }
];

const root = document.querySelector('[data-react-app="root"]');

export default PricingHome;