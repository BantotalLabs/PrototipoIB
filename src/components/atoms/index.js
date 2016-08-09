import React from 'react'
import { FormControl, ControlLabel } from 'react-bootstrap'

export const SimpleInput = ({ label, type, placeholder, className }) => 
	<div className={ className }>
		<small><strong>{ label }</strong></small>
		<FormControl type={ type } placeholder={ placeholder } />
		<FormControl.Feedback />
	</div>

export const GenericInput = ({ label, placeholder, className, onChange, type }) => 
	<div className={ className }>
		<ControlLabel className="label-generic-input">{ label }</ControlLabel>
		<FormControl type={ type } placeholder={ placeholder } onChange={ onChange }/>
		<FormControl.Feedback />
	</div>