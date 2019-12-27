import React, { useState } from 'react';

import './styles.css';

//componentes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

const Header = () => {

	const [collapsed, setCollapsed] = useState(true);
	
	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div id="header">
			<Navbar className="header-navbar" fixed="top" >
				<NavbarBrand href="/" className="mr-auto">WSIW?</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar}>
					<FontAwesomeIcon id="header-menu" icon={faBars} size="lg"/>
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