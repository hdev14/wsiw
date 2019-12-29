import React from 'react';

import '../styles/series.css';


//components
import Header from '../components/Header';
import EmptyCard from '../components/EmptyCard';
import Card from '../components/Card';
import {
	Container,
} from 'reactstrap';

const Series = () => {

	return (
		<div id="page-series">
			<Header />
			<Container id="container-series" className="wsiw-container themed-container" fluid="sm">
				<h2> SERIES </h2>
				
				{ true ? 
					<div>
						<EmptyCard />
						<h2 id="footer-series" className="text-center"> Add a new series ! </h2>
					</div>
					:	
					<div>
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				}

			</Container>
			
		</div>
	);
}

export default Series;