import React, { useState, useEffect } from 'react';
import api from '../services/api';

import '../styles/series.css';


//components
import Header from '../components/Header';
import EmptyCardSeries from '../components/EmptyCardSeries';
import CardSeries from '../components/CardSeries';
import {
	Container,
} from 'reactstrap';

const Series = () => {

	const [series, setSeries] = useState([]);
	
	useEffect(() => {
		api.get('series').then(res => {
			console.log(res.data);
			setSeries(res.data);
		});
	}, []);

	return (
		<div id="page-series">
			<Header />
			<Container id="container-series" className="wsiw-container themed-container" fluid="sm">
				<h2> SERIES  </h2>
				
				{ (series.length === 0) ? 
					<div>
						<EmptyCardSeries />
						<h2 id="footer-series" className="text-center"> Add a new series ! </h2>
					</div>
					:
					<div>
						{series.map(s => (
							<CardSeries 
								key={s.id} 
								title={s.name} 
								img={s.background} 
								status={s.status} 
								genre={s.genre} />
						))}	
					</div>
				}

			</Container>
			
		</div>
	);
}

export default Series;