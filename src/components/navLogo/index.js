import React from 'react';
import { Navbar } from 'react-bootstrap';

import brandLogo from '../../img/brandLogo.png';

export const NavLogo = () =>
	<Navbar.Brand className="nav-logo">
		<a href="#">
			<img className="img-responsive hidden-sm hidden-xs" alt="Brand" src={ brandLogo }/>
			<img className="img-responsive small-logo hidden-md hidden-lg" alt="Brand" src={ brandLogo }/>
		</a>
	</Navbar.Brand>
