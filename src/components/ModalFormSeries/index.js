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

const ModalFormSeries = ({ toggle, modal, modalTitle, seriesId = 1 }) => {
	
	const [id, setId] = useState(seriesId)
		, [series, setSeries] = useState({})
		, [genres, setGenres] = useState([]);


	useEffect(() => {
		
		if (id !== null) {
			api.get(`series/${id}`).then(res => {
				setSeries(res.data);
			});
			setId(null);
		}

		// TODO get genres
		setGenres([
			{
				id: 1,
				name: 'action',
			},
			{
				id: 2,
				name: 'comedy',
			}
		]);

	}, []);

	const changeStatus = evt => {
		// Get "for"
		console.log(evt);
	}

	const submit = () => {
		//api.post('series', {series})
	};

	const form = field => evt => {
		
		console.log(evt);
		setSeries({
			[field]: evt.target.value,
			...series
		});
	};

	return (
		<Modal centered id="form-series-modal" isOpen={modal} toggle={toggle}>
			<ModalHeader>{modalTitle}</ModalHeader>
			<ModalBody>
				<Form id="series-form">
					<FormGroup id="radios" check inline>
						<div className={ series.status === 'to-watch' ? 'to-watch' : ''}>
							<Input id="radio1" type="radio" name="status" onChange={form('status')} />
							<Label onClick={changeStatus} htmlFor="radio1" check>To Watch</Label>
						</div>
						<div className={ series.status === 'watching' ? 'watching' : ''}>
							<Input id="radio2" type="radio" name="status" onChange={form('status')} />
							<Label onClick={changeStatus} htmlFor="radio2" check>Watching</Label>
						</div>
						<div className={ series.status === 'assisted' ? 'assisted' : ''}>
							<Input id="radio3" type="radio" name="status" onChange={form('status')} />	
							<Label onClick={changeStatus} htmlFor="radio3" check>Assisted</Label>
						</div>
					</FormGroup>
					<FormGroup>
						<Input type="select" placeholder="Chose genre">
							{genres.map(genre => (
								<option key={genre.id} value={genre.id}>{genre.name}</option>	
							))}
						</Input>
					</FormGroup>
					<FormGroup>
						<Input type="text" placeholder="Title" value={series.name}/>		
					</FormGroup>
					<FormGroup>
						<Input type="textarea" placeholder="Description" value={series.comments} />		
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