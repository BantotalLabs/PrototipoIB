import React from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap'
import { hashHistory } from 'react-router'

export const Form = () => {

	const handleClick = (event) => {
		hashHistory.push('/home/')
	}

	return (
		<form>
			<FormGroup controlId="login">
				<h3>HOLA DE NUEVO!</h3>
				<div className="col-md-6 col-lg-6">
					<small><strong>tu número de tarjeta</strong></small>
					<FormControl type="email" placeholder="" />
					<FormControl.Feedback />
				</div>
				<div className="col-md-6 col-lg-6">
					<small><strong>tu contraseña</strong></small>
					<FormControl type="password" placeholder="" />
					<FormControl.Feedback />
				</div>
				<div className="col-md-6 col-lg-6">
					<small><strong>el código token</strong></small>
					<FormControl type="password" placeholder="" />
					<FormControl.Feedback />
				</div>									
				<div className="col-md-6 col-lg-6">
					<br/>
					<Button bsStyle="primary" className="hidden-sm hidden-xs" onClick={ handleClick }>ENTRAR</Button>
					<Button bsStyle="primary" bsSize="large" block className="hidden-md hidden-lg" onClick={ handleClick }>ENTRAR</Button>
				</div>
			</FormGroup>
		</form>
	)
}