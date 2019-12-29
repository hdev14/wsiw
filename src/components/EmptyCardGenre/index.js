import React from 'react';

import './styles.css';

//components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EmptyCardGenre = () => (
	<div id="empty-card-genre">
		<FontAwesomeIcon id="icon" icon={faPlus} />
	</div>
);

export default EmptyCardGenre;