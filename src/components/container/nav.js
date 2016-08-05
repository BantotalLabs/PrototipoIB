import React from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'

import { NavLogo } from '../navLogo'

import fotoPerfil from '../../img/perfil.jpg'

export const NavApp = () => 
	<Navbar className="navbar-container">
		<div className="container">
			<Navbar.Header>
				<Navbar.Brand>
					<NavLogo />
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<img className="img-responsive img-circle profile-img navbar-right hidden-sm hidden-xs" alt="Brand" src={ fotoPerfil } />
			<Navbar.Collapse>
				<Nav pullRight className="navbar-menu" >
					<NavItem eventKey={1} href="#"><Link to="/resumen">RESUMEN</Link></NavItem>
					<NavItem eventKey={2} href="#"><Link to="/transferencia">TRANSFERENCIAS</Link></NavItem>
					<NavItem eventKey={3} href="#"><Link to="/consulta">PRODUCTOS</Link></NavItem>						
					<NavItem eventKey={4} href="#"><Link to="/servicios">SERVICIOS</Link></NavItem>
					<NavItem eventKey={5} href="#"><Link to="/">SALIR</Link></NavItem>
				</Nav>
			</Navbar.Collapse>
		</div>
	</Navbar>