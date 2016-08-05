import React from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'

import { NavLogo } from '../navLogo'

import fotoPerfil from '../../img/perfil.jpg'
let itemSelected = 1

export const NavApp = () => {
	const handleSelect = (eventKey) => {
		itemSelected = eventKey
	}

	return (
		<Navbar className="navbar-container">
			<div className="container">
				<Navbar.Header>
					<Navbar.Brand>
						<NavLogo />
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight className="navbar-menu" onSelect={ handleSelect }>
						<NavItem eventKey={1} className={ itemSelected===1 ? 'active' : '' } href="#"><Link to="/resume">RESUMEN</Link></NavItem>
						<NavItem eventKey={2} className={ itemSelected===2 ? 'active' : '' } href="#"><Link to="/transfer">TRANSFERENCIAS</Link></NavItem>
						<NavItem eventKey={3} className={ itemSelected===3 ? 'active' : '' } href="#"><Link to="/consulta">PRODUCTOS</Link></NavItem>						
						<NavItem eventKey={4} className={ itemSelected===4 ? 'active' : '' } href="#"><Link to="/servicios">SERVICIOS</Link></NavItem>
						<NavItem eventKey={5} className={ itemSelected===5 ? 'active' : '' } href="#"><Link to="/">SALIR</Link></NavItem>
						<NavItem eventKey={6} href="#" className="profile-img">
							<img className="img-responsive img-circle navbar-right hidden-sm hidden-xs" alt="Brand" src={ fotoPerfil } />
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	)
}