import React from 'react';

import './styles.css';

//components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {
	ButtonGroup,
	Button
} from 'reactstrap';

const CardGenre = ({ name = 'genre' }) => (
	<div id="card-genre">
		<p>{name}</p>
		<ButtonGroup className="actions">
			<Button color="link" size="sm">
				<FontAwesomeIcon icon={faTrashAlt} />
			</Button>
		</ButtonGroup>
	</div>
);

export default CardGenre;