import React from 'react';

import './styles.css';

const Tag = ({ tagValue = 'comedy', moreTag = false, more = 1 }) => (
	<div id="tags">
		<div className="tag">{tagValue}</div>
		{ moreTag && 
			<div className="tag circle">+{more}</div>
		}
	</div>
);

export default Tag;