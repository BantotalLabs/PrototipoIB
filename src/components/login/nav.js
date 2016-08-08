import React from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap'

import { NavLogo } from '../navLogo'

export const NavLogin = () =>
	<Navbar className="navbar-login bg-primary">
		<div className="container">
			<Navbar.Header>
				<NavLogo />
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav pullRight>
					<NavItem href="#">CAMPAÑAS</NavItem>
					<NavItem><strong>|</strong></NavItem>
					<NavItem href="#">CAJEROS</NavItem>
					<NavItem><strong>|</strong></NavItem>						
					<NavItem href="#">AGENTES</NavItem>
				</Nav>
			</Navbar.Collapse>
		    <div className="row hidden-xs">	
			    <i className="navbar-text navbar-right fa fa-youtube-square yt fa-2x"></i>
			    <i className="navbar-text navbar-right fa fa-linkedin-square ld fa-2x"></i>
		    	<i className="navbar-text navbar-right fa fa-facebook-square fb fa-2x"></i>
		    	<i className="navbar-text navbar-right fa fa-twitter-square tw fa-2x"></i>
			</div>
		</div>
	</Navbar>