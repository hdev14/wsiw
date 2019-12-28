import React from 'react';

import './styles.css';

const Tag = ({ classes = 'tag', tagValue = 'comedy', moreTag = false, more = 1 }) => (
	<div id="tags">
		<div className={classes} >{tagValue}</div>
		{ moreTag && 
			<div className="tag circle">+{more}</div>
		}
	</div>
);

export default Tag;