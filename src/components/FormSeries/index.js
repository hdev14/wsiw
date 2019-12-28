import React, { useState } from 'react';

import './styles.css';

//compenents
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'reactstrap';

const FormSeries = ({ modalTitle = 'New Series'}) => {

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<button id="edit" onClick={toggle}>
				<FontAwesomeIcon icon={faPen}/>
			</button>
			<Modal centered id="form-series-modal" isOpen={modal} toggle={toggle}>
				<ModalHeader>{modalTitle}</ModalHeader>
				<ModalBody>
					Form
				</ModalBody>
				<ModalFooter>
					<Button id="close" onClick={toggle}>Cancel</Button>
					<Button id="save">Save</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default FormSeries;