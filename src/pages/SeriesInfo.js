import React from 'react';

import '../styles/series-info.css';

//components 
import Header from '../components/Header';
import Tag from '../components/Tag';
import FormSeries from '../components/FormSeries';
import { 
	Container,
} from 'reactstrap';

const SeriesInfo = ({
	bgImg = '/assets/card-bg.jpeg', 
	posterImg = '/assets/poster.jpeg',
	title = 'One Punch Man',
	description = 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur.',
	status = 'watching'
}) => {

	const styles = {
		backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) , rgba(0, 0, 0, 0.3)), url(${bgImg})`
	};

	return (
		<div id="page-series-info">
			<Header back="/series" series/>

			<FormSeries />

			<div id="poster" style={styles}>
				<img src={posterImg} alt="img"/>
			</div>

			<Container className="wsiw-container themed-container" fluid="sm"> 
				<h2 id="title">{title}</h2>
				<div id="tags">
					<Tag classes="tag dark"/>
					<Tag classes="tag dark" />
				</div>
				<h2 id="desc">{description}</h2>
			</Container>
			
			<div id="alert" className={status}>
				{status}
			</div>
		</div>
	);
};

export default SeriesInfo;