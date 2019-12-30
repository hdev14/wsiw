import React, { useState } from 'react';

import './styles.css';

//components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {
	ButtonGroup,
	Button,
	Modal,
	ModalHeader,
	ModalBody
} from 'reactstrap';

const CardGenre = ({ name = 'genre' }) => {
	const [modal, setModal] = useState(true);

	const toggle = () => setModal(!modal);

	return (
		<div id="card-genre">
			<p>{name}</p>
			<ButtonGroup className="actions">
				<Button onClick={toggle} color="link" size="sm">
					<FontAwesomeIcon icon={faTrashAlt}/>
				</Button>
			</ButtonGroup>
			<Modal id="delete-modal" centered isOpen={!modal} toggle={toggle}>
				<ModalHeader>
					Are you sure?
				</ModalHeader>
				<ModalBody id="delete-options">
					<Button id="cancel" onClick={toggle}>Cancel</Button>
					<Button id="yes">Yes</Button>
				</ModalBody>
			</Modal>
		</div>
	);
}

export default CardGenre;