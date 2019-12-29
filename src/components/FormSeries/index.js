import React, { useState } from 'react';

import './styles.css';

//compenents
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
	Button,
	Col,
	Form,
	FormGroup,
	Input,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Label,
	Row
} from 'reactstrap';

const FormSeries = ({ modalTitle = 'New series'}) => {

	const [edit, setEdit] = useState(faPen);
	const [modal, setModal] = useState(false);

	const toggle = () => {
		setModal(!modal);
		setEdit( (edit === faPen) ? faTimes : faPen );
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
						<FormGroup id="radios" check inline>
							<div className="to-watch">
								<Input id="radio1" type="radio" name="status" />
								<Label for="radio1" check>To Watch </Label>
							</div>
							<div>
								<Input id="radio2" type="radio" name="status" />
								<Label for="radio2" check>Watching</Label>
							</div>
							<div>
								<Input id="radio3" type="radio" name="status" />	
								<Label for="radio3" check>Assisted</Label>
							</div>
						</FormGroup>
						<FormGroup>
							<Input type="select" placeholder="Chose genre" defaultValue="">
								<option>Action</option>
								<option>Comedy</option>
								<option>Adventure</option>
							</Input>
						</FormGroup>
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