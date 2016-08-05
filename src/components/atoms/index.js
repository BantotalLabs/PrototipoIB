import React from 'react'
import { FormControl } from 'react-bootstrap'

export const SimpleInput = ({ label, type, placeholder }) => 
	<div>
		<small><strong>{ label }</strong></small>
		<FormControl type={ type } placeholder={ placeholder } />
		<FormControl.Feedback />
	</div>