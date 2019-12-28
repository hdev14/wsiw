import React, { useState } from 'react';

import './styles.css';

//compenents
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
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

const FormSeries = ({ modalTitle = 'New Series'}) => {

	const [edit, setEdit] = useState(faPen);
	const [modal, setModal] = useState(false);

	const toggle = () => {
		setModal(!modal);
		setEdit( (edit == faPen) ? faTimes : faPen );
	}

	return (
		<div>
			<button id="edit" onClick={toggle}>
				<FontAwesomeIcon icon={edit}/>
			</button>
			<Modal centered id="form-series-modal" isOpen={modal} toggle={toggle}>
				<ModalHeader>{modalTitle}</ModalHeader>
				<ModalBody>
					<Form id="series-form">
						<FormGroup>
							<Input type="text" placeholder="Title" />		
						</FormGroup>
						<FormGroup>
							<Input id="ta" type="textarea" placeholder="Description" />		
						</FormGroup>
					</Form>
					
				</ModalBody>
				<ModalFooter>
					<Button type="submit" form="series-form" id="save" className="btn-block">Save</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default FormSeries;