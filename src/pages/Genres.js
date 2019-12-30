import React from 'react';

import '../styles/genres.css';

//components
import Header from '../components/Header';
import CardGenre from '../components/CardGenre';
import EmptyCardGenre from '../components/EmptyCardGenre';
import {
	Container
} from 'reactstrap';

const Genres = () => {
	return (
		<div id="page-genres">
			<Header />
			<Container className="wsiw-container themed-container" fluid="sm">
				<h2>GENRES</h2>

				{ false ? 
					<div>
						<EmptyCardGenre />
						<h2 id="footer-genres" className="text-center"> Add a new genres ! </h2>
					</div>
					:
					<div>
						<CardGenre />
						<CardGenre />
						<CardGenre />
					</div>
				}
			</Container>
		</div>
	);
};

export default Genres;