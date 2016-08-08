import React from 'react';
import { Navbar } from 'react-bootstrap';

import brandLogo from '../../img/bonline.png';

export const NavLogo = () =>
	<Navbar.Brand className="nav-logo">
		<a href="#">
			<img className="img-responsive" alt="Brand" src={ brandLogo }/>
		</a>
	</Navbar.Brand>
