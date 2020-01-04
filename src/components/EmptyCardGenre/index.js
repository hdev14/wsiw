import React, { useState } from 'react';

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
const EmptyCardGenre = () => {

	const [modal, setModal] = useState(true);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<div id="empty-card-genre" onClick={toggle}>
				<FontAwesomeIcon id="icon" icon={faPlus} />
			</div>
			<Modal id="form-genre-modal" centered isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>New genre</ModalHeader>
				<ModalBody>
					<Form id="form-modal-genre">
						<FormGroup>
							<Input type="text" placeholder="Genre" />
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button id="save" form="form-modal-genre" className="btn-block">Save</Button>
				</ModalFooter>
			</Modal>
		</div>

	);
}

export default EmptyCardGenre;