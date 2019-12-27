import React, { useState } from 'react';

import './styles.css';

//componentes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

const Header = ({ back = true }) => {

	const [collapsed, setCollapsed] = useState(true);
	
	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div id="header">
			<Navbar className="header-navbar" fixed="top" >
				{ back && 
					// Link to={props.to}
					<a id="header-back" href={back}> 
						<FontAwesomeIcon icon={faChevronLeft} />
					</a>
				}
				<NavbarBrand href="/" className="mr-auto">WSIW?</NavbarBrand>
				<NavbarToggler id="header-menu" onClick={toggleNavbar}>
					<FontAwesomeIcon icon={faBars} />
				</NavbarToggler>
				<Collapse navbar isOpen={!collapsed}>
					<Nav navbar>
						<NavItem>
							<NavLink href="/">Series</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/">New series</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/">Genres</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/">New genres</NavLink>
						</NavItem>
					</Nav>
				</Collapse> 
			</Navbar>
		</div>
	);
};

export default Header;