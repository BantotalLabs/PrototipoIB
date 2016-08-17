import React from 'react'
import { Button, FormGroup } from 'react-bootstrap'
import { hashHistory } from 'react-router'

import { SimpleInput } from '../atoms'

export const FormLogin = ( { login } ) => {

	const handleClick = (event) => {
		login()
		hashHistory.push('/home/')
	}

	return (
		<form>
			<FormGroup controlId="login">
				<h3>HOLA DE NUEVO!</h3>

					<SimpleInput className="input-login" label="tu número de tarjeta" type="text" placeholder="XXXXXXXXX"></SimpleInput>

					<SimpleInput className="input-login" label="tu contraseña" type="password" placeholder="·····"></SimpleInput>

					<SimpleInput className="input-login" label="el código token" type="password" placeholder="·····"></SimpleInput>
							
					<Button bsStyle="success" bsSize="large" block onClick={ handleClick }>ENTRAR</Button>

			</FormGroup>
		</form>
	)
}