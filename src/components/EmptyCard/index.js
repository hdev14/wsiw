import React from 'react';

import './styles.css';

//components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EmptyCard = () => (
	<div id="empty-card">
		<FontAwesomeIcon id="plus" icon={faPlus} />
	</div>
);

export default EmptyCard;