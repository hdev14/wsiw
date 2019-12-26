import React, { useState } from 'react';

import './styles.css';

//componentes
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
	const [collapse, setCollapse] = useState(true);

	const toggleNavbar = () => setCollapse(!collapse);

	return (
		<div id="header">
			<Navbar className="header-navbar">
				<NavbarBrand href="/" className="mr-auto">WSIW?</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
				<Collapse isOpen={!collapse}>
					<Nav>
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