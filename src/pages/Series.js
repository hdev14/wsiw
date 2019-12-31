import React from 'react';

import '../styles/series.css';


//components
import Header from '../components/Header';
import EmptyCardSeries from '../components/EmptyCardSeries';
import CardSeries from '../components/CardSeries';
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
						<EmptyCardSeries />
						<h2 id="footer-series" className="text-center"> Add a new series ! </h2>
					</div>
					:	
					<div>
						<CardSeries />
						<CardSeries />
						<CardSeries />
						<CardSeries />
						<CardSeries />
					</div>
				}

			</Container>
			
		</div>
	);
}

export default Series;