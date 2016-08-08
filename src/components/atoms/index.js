import React from 'react'
import { FormControl } from 'react-bootstrap'

export const SimpleInput = ({ label, type, placeholder, className }) => 
	<div className={ className }>
		<small><strong>{ label }</strong></small>
		<FormControl type={ type } placeholder={ placeholder } />
		<FormControl.Feedback />
	</div>