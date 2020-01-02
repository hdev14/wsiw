import React, { useState, useEffect } from 'react';
import api from '../services/api';

import '../styles/series-info.css';

//components 
import Header from '../components/Header';
import Tag from '../components/Tag';
import EditSeries from '../components/EditSeries';
import { 
	Container,
} from 'reactstrap';

const SeriesInfo = ({ match }) => {

	const [series, setSeries] = useState({});

	useEffect(() => {
		const xhr = new XMLHttpRequest();
		xhr.open('get', 'http://localhost:3002/api/series/5');
		xhr.send(null);

		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4 && xhr.status === 200) {
				setSeries(JSON.parse(xhr.responseText));
			} 
		}

	}, []);

	return (
		<div id="page-series-info">
			<Header back="/series" series/>

			<EditSeries seriesId={series.id}/>

			<div id="poster" style={{ 
				backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url("http:${series.background}")`
			}}>
				<img src={series.poster} alt="img" height="200" width="150"/>
			</div>

			<Container className="wsiw-container themed-container" fluid="sm"> 
				<h2 id="title">{series.name}</h2>
				<div id="tags">
					<Tag classes="tag dark" tagValue={series.genre} />
				</div>
				<h2 id="desc">{series.comments}</h2>
			</Container>
			
			<div id="alert" className={series.status}>
				{series.status === 'to-watch' ? 
					'to-watch' 
					:
					(series.status === 'watching' ?
						'watching'
						:
						'assisted'
					)
				}
			</div>
		</div>
	);
};

export default SeriesInfo;