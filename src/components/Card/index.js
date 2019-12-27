import React from 'react';

import './styles.css';

//components
import Tag from '../Tag';

const Card = ({ 
	title = 'One Punch Man', 
	img = '/assets/card-bg.jpeg', 
	tag = 'watching'
}) => {
	
	const styles = {
		backgroundImage: `radial-gradient( rgba(0, 0, 0, 0.2) , black), url(${img})`
	};

	return (
		<div id="card" style={styles}>
			<div id="card-tags">
				<Tag />
			</div>
			<h1>{title}</h1>
			<div id="card-alert" className={tag}>
				{tag}
			</div>
		</div>
	);	
} 

export default Card;