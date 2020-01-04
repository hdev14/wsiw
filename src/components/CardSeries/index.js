import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

//components
import Tag from '../Tag';

const CardSeries = ({ 
	seriesId = null,
	title = 'One Punch Man', 
	img = '/assets/card-bg.jpeg', 
	status = 'watching',
	genre = 'empty'
}) => {
	
	const styles = {
		backgroundImage: `radial-gradient( rgba(0, 0, 0, 0.2) , black), url('http:${img}')`
	};

	return (
		<Link id="card-link" to={`/series-info/${seriesId}`}>
			<div id="card" style={styles}>
				<div id="card-tags">
					<Tag tagValue={genre} />
				</div>
				<h1>{title}</h1>
				<div id="card-alert" className={status}>
					{status}
				</div>
			</div>
		</Link>
	);	
} 

export default CardSeries;