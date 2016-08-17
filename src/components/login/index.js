import React from 'react'

import { NavLogin } from './nav.js'
import { FormLogin } from './form.js'

export const Login = ({ login }) => 
	<div>
		<NavLogin />
		<div className="container">
			<div className="row container-login">
				<div className="col-lg-offset-4 col-md-offset-4 col-lg-4 col-md-4">
					<FormLogin login={ login }/>
				</div>
			</div>
		</div>
	</div>