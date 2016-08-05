import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

import { NavLogo } from '../navLogo';

export const NavLogin = () =>
	<Navbar className="navbar-login bg-primary">
		<div className="container">
			<Navbar.Header>
				<NavLogo />
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav pullRight>
					<NavItem href="#">campañas</NavItem>
					<NavItem href="#">tasas y tarifas</NavItem>
					<NavItem href="#">cajeros</NavItem>						
					<NavItem href="#">agentes</NavItem>
				</Nav>
			</Navbar.Collapse>
		    <div className="row hidden-xs">	
			    <i className="navbar-text navbar-right fa fa-youtube fa-2x"></i>
			    <i className="navbar-text navbar-right fa fa-linkedin fa-2x"></i>
		    	<i className="navbar-text navbar-right fa fa-facebook fa-2x"></i>
		    	<i className="navbar-text navbar-right fa fa-twitter fa-2x"></i>
			</div>
		</div>
	</Navbar>