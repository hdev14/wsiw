import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

const Header = ({ back = '', series = false, genre = false , id = '' }) => {

	const [collapsed, setCollapsed] = useState(true);
	
	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div id="header">
			<Navbar className="header-navbar" fixed="top" >
				{ back && 
					// Link to={props.to}
					<Link id="header-back" to={back}> 
						<FontAwesomeIcon icon={faChevronLeft} />
					</Link>
				}
				<NavbarBrand href="/" className="mr-auto">WSIW?</NavbarBrand>

				{ !(series || genre ) &&
					<>
						<NavbarToggler className="header-option" onClick={toggleNavbar}>
							<FontAwesomeIcon icon={faBars} />
						</NavbarToggler>
						<Collapse navbar isOpen={!collapsed}>
							<Nav navbar>
								<NavItem>
									<NavLink tag={Link} to="/series">Series</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={Link} to="/genres">Genres</NavLink>
								</NavItem>
							</Nav>
						</Collapse> 
					</>
				}
			</Navbar>
		</div>
	);
};

export default Header;