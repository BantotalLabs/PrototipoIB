import React, { Component } from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import { Container } from './container'
import { Login } from './login'
import { Resume } from './resume'
import { Transfer } from './transfer'

export class RouterApp extends Component {
	render() {
		const LoginHandler = () =>
			<Login login={ this.props.login } /> 

		return (
			<Router history={ hashHistory }>
				<Route path='/' component={ LoginHandler } />
				<Route path='/home/' component={ Container }>
					<IndexRoute component={ Resume } />
					<Route path='/resume' component={ Resume } />
					<Route path='/transfer' component={ Transfer } />
				</Route>			
			</Router>
		)
	}
}