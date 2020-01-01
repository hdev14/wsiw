import React, { useState } from 'react';

import './styles.css';

//components
import ModalFormSeries from '../ModalFormSeries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EmptyCard = () => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal)
	return (
		<div id="empty-card" onClick={toggle}>
			<FontAwesomeIcon id="plus" icon={faPlus} />
			<ModalFormSeries 
				modalTitle="New series" 
				modal={modal} 
				toggle={toggle} />
		</div>
	);
}

export default EmptyCard;