import React from 'react'
import { Button, FormGroup } from 'react-bootstrap'
import { hashHistory } from 'react-router'

import { SimpleInput } from '../atoms'

export const FormLogin = () => {

	const handleClick = (event) => {
		hashHistory.push('/home/')
	}

	return (
		<form>
			<FormGroup controlId="login">
				<h3>HOLA DE NUEVO!</h3>
				<div className="col-md-6 col-lg-6">
					<SimpleInput label="tu número de tarjeta" type="text"></SimpleInput>
				</div>
				<div className="col-md-6 col-lg-6">
					<SimpleInput label="tu contraseña" type="password"></SimpleInput>
				</div>
				<div className="col-md-6 col-lg-6">
					<SimpleInput label="el código token" type="password"></SimpleInput>
				</div>									
				<div className="col-md-6 col-lg-6">
					<Button bsStyle="primary" className="hidden-sm hidden-xs" onClick={ handleClick }>ENTRAR</Button>
					<Button bsStyle="primary" bsSize="large" block className="hidden-md hidden-lg" onClick={ handleClick }>ENTRAR</Button>
				</div>
			</FormGroup>
		</form>
	)
}