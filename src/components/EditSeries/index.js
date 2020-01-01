import React, { useState } from 'react';

import './styles.css';

//compenents
import ModalFormSeries from '../ModalFormSeries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

const EditSeries = ({ seriesId }) => {

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
			<ModalFormSeries 
				modal={modal} 
				modalTitle="Edit" 
				toggle={toggle} 
				seriesId={seriesId} />
		</div>
	);
}

export default EditSeries;