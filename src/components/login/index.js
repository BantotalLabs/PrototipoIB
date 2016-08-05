import React from 'react'

import { NavLogin } from './nav.js';
import { Advertising } from './advertising.js';
import { FormLogin } from './form.js';

export const Login = () => 
	<div>
		<NavLogin />
		<div className="container">
			<div className="row container-login">
				<Advertising /> 
				<div className="col-md-6 col-lg-6">
					<FormLogin />
				</div>
			</div>
		</div>
	</div>