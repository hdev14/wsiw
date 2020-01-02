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
} from 'reactstrap';

const ModalFormSeries = ({ toggle, modal, modalTitle, seriesId, edit = false }) => {

	const [series, setSeries] = useState({ 
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
		// TODO get genres
		api.get('genres').then(res => {
			setGenres(res.data);
		});

		if (seriesId !== null) {
			api.get(`series/${seriesId}`).then(res => {
				setSeries(res.data);
			});
		}

	}, [seriesId]);

	const submit = evt => {

		evt.preventDefault();

		const genre = genres.filter(g => {
			return g.id === series.genre_index; 
		});

		console.log("GENRE", genre);

		setSeries({
			...series,
			genre: genre.name,
			genre_id: genre.id
		})

		if (!edit) {
			api.post('series', series).then(res => {
				document.location.reload();
			});
		} else {
			console.log("EDIT");
			api.put(`series/${series.id}`, series).then(res => {
				document.location.reload(true);
			}).catch(err => {
				console.error(err);
			});
		}
	};

	const form = field => evt => {
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
						<Input type="select" onChange={form('status')} defaultValue={series.status}>
							<option>Status</option>
							<option value="to-watch">To watch</option>
							<option value="watching">Watching</option>
							<option value="assisted">Assisted</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Input type="select" onChange={form('genre_index')} defaultValue={series.genre_id}>
							<option>Choose genre</option>
							{genres.map((genre, index) => (
								<option key={genre.id} value={genre.id}>{genre.name}</option>	
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