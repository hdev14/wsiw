import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';

//components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
	Button,
	Form,
	FormGroup,
	Input,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'reactstrap';
const EmptyCardGenre = ({ circle = '' }) => {

	const [genre, setGenre] = useState({name: null});
	const [modal, setModal] = useState(true);

	const toggle = () => setModal(!modal);

	const form = field => evt => {
		setGenre({
			name: evt.target.value
		});
	}

	const submit = evt => {
		evt.preventDefault();
		api.post(`genres`, genre).then(res => {
			if (res.status === 200)
				window.location.reload();
		});
	}

	return (
		<div>
			<div id="empty-card-genre" className={circle} onClick={toggle}>
				<FontAwesomeIcon id="icon" icon={faPlus} />
			</div>
			<Modal id="form-genre-modal" centered isOpen={!modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>New genre</ModalHeader>
				<ModalBody>
					<Form id="form-modal-genre">
						<FormGroup>
							<Input type="text" placeholder="Genre" onChange={form('name')}/>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button 
						id="save" 
						form="form-modal-genre" 
						className="btn-block"
						onClick={submit}>Save</Button>
				</ModalFooter>
			</Modal>
		</div>

	);
}

export default EmptyCardGenre;