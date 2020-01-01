import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';

//components
import {
	Button,
	Form,
	FormGroup,
	Input,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Label,
} from 'reactstrap';

const ModalFormSeries = ({ toggle, modal, modalTitle, seriesId = null }) => {
	
	const [id, setId] = useState(seriesId)
		, [series, setSeries] = useState({ 
			id: null, 
			name: null, 
			status: null, 
			genre: null, 
			genre_id: null, 
			comments: null,
			genre_index: null 
		})
		, [genres, setGenres] = useState([]);


	useEffect(() => {
		
		if (id !== null) {
			
			api.get(`series/${id}`).then(res => {
				setSeries(res.data);
			});

			setId(null);
		}

		// TODO get genres
		api.get('genres').then(res => {
			console.log("GENRES", res.data);
			setGenres(res.data);
		});

	}, []);

	const submit = evt => {

		evt.preventDefault();

		const seriesData = series;
		const genre = genres[seriesData.genre_index];
		seriesData.genre_id = genre.id;
		seriesData.genre = genre.name;
		delete seriesData.genre_index;

		console.log("SERIES DATA", seriesData);
		api.post('series', seriesData).then(res => {
			document.location.reload();
		});
	};

	const form = field => evt => {
		console.log("FIELD", field);
		console.log("INPUT", evt.target.value);
		setSeries({
			...series,
			[field]: evt.target.value
		});
	};

	return (
		<Modal centered id="form-series-modal" isOpen={modal} toggle={toggle}>
			<ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
			<ModalBody>
				<Form id="series-form">
					<FormGroup>
						<Input type="select" onChange={form('status')}>
							<option>Status</option>
							<option value="to-watch">To watch</option>
							<option value="watching">Watching</option>
							<option value="assisted">Assisted</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Input type="select" onChange={form('genre_index')}>
							<option>Choose genre</option>
							{genres.map((genre, index) => (
								<option key={index} value={index}>{genre.name}</option>	
							))}
						</Input>
					</FormGroup>
					<FormGroup>
						<Input type="text" placeholder="Title" defaultValue={series.name} onChange={form('name')}/>		
					</FormGroup>
					<FormGroup>
						<Input type="textarea" placeholder="Description" defaultValue={series.comments} onChange={form('comments')} />		
					</FormGroup>
				</Form>
			</ModalBody>
			<ModalFooter>
				<Button
					onClick={submit} 
					type="submit" 
					form="series-form" 
					id="save" 
					className="btn-block">
					Save
				</Button>
			</ModalFooter>
		</Modal>
	);
}

export default ModalFormSeries;