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
				
				{ false ? 
						<EmptyCard />
					:	
						<Card />
				}

			</Container>
			<h2 id="footer-series" className="text-center"> Add a new series ! </h2>
		</div>
	);
}

export default Series;