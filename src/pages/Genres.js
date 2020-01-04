import React, { useEffect, useState } from 'react';
import api from '../services/api';

import '../styles/genres.css';

//components
import Header from '../components/Header';
import CardGenre from '../components/CardGenre';
import EmptyCardGenre from '../components/EmptyCardGenre';
import {
	Container
} from 'reactstrap';

const Genres = () => {

	const [genres, setGenres] = useState([]);

	useEffect(() => {
		
		api.get('genres').then(res => {
			setGenres(res.data);
		});

	}, []);

	return (
		<div id="page-genres">
			<Header />
			<Container className="wsiw-container themed-container" fluid="sm">
				<h2>GENRES</h2>

				{ (genres.length === 0) ? 
					<div>
						<EmptyCardGenre />
						<h2 id="footer-genres" className="text-center"> Add a new genres ! </h2>
					</div>
					:
					<div>
						{genres.map(genre => (
							<CardGenre key={genre.id} genreId={genre.id} name={genre.name} />
						))}
						<EmptyCardGenre circle="button-circle"/>
					</div>
				}
			</Container>
		</div>
	);
};

export default Genres;