import React from 'react';

import './styles.css';

//components
import Tag from '../Tag';

const CardSeries = ({ 
	title = 'One Punch Man', 
	img = '/assets/card-bg.jpeg', 
	status = 'watching',
	genre = 'empty'
}) => {
	
	const styles = {
		backgroundImage: `radial-gradient( rgba(0, 0, 0, 0.2) , black), url('http:${img}')`
	};

	return (
		<div id="card" style={styles}>
			<div id="card-tags">
				<Tag tagValue={genre} />
			</div>
			<h1>{title}</h1>
			<div id="card-alert" className={status}>
				{status}
			</div>
		</div>
	);	
} 

export default CardSeries;