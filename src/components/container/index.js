//ES EL CONTENEDOR DE LA APLICACION
import React from 'react'

import { NavApp } from './nav'

export const Container = ({ children }) => 
	<div>
		<NavApp />
		{ children }
	</div>