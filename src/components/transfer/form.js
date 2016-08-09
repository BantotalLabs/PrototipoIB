import React from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

import { GenericInput } from '../atoms'

export const FormTransfer = () => 
	<div>
		<Form>
			<FormGroup controlId="login">
				<GenericInput label="MOTIVO DE LA TRANSFERENCIA" placeholder="" type="text" />
				<GenericInput label="CUANTO DINERO" placeholder="0.00" type="number" />

				<ControlLabel className="label-generic-input">CUENTA DE DÉBITO</ControlLabel>
				<FormControl componentClass="select" placeholder="select">
					<option value="select">selecciona una</option>
					<option value="CC">C.CORRIENTE 120000124-1</option>
					<option value="CA">CAJA DE AHORRO 120000124-1</option>
				</FormControl>

				<ControlLabel className="label-generic-input">CUENTA DE CRÉDITO</ControlLabel>
				<FormControl componentClass="select" placeholder="select">
					<option value="select">selecciona una</option>
					<option value="other">C.CORRIENTE 120000124-1</option>
					<option value="other">CAJA DE AHORRO 120000124-1</option>
				</FormControl>								
			</FormGroup>
		</Form>
		<Button className="btn-transfer" bsStyle="success" bsSize="large" block>TRANSFERIR</Button>
	</div>