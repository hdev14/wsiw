import React from 'react';

import '../styles/series.css';

//components
import Header from '../components/Header';
import EmptyCard from '../components/EmptyCard';
import Card from '../components/Card';

const Series = () => {

	return (
		<div id="page-series">
			<Header />
			<h2> SERIES </h2>
			<EmptyCard />
			<Card />
			<h2 id="series-footer"> Add a new series ! </h2>
		</div>
	);
}

export default Series;