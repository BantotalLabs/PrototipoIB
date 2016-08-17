//LA FUNCION DE ESTE ARCHIVO ES MANEJAR LAS RUTAS DE LA APLICACION
import React, { Component } from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

//SE IMPORTAN LOS COMPONENTES
import { Container } from './container'
import { Login } from './login'
import { Resume } from './resume'
import { Transfer } from './transfer'

export class RouterApp extends Component {
	render() {
		//SE DEFINEN LOS HANDLERS PARA PASARLE LAS PROPS ESPECIFICAS A CADA COMPONENTE
		const LoginHandler = () =>
			<Login login={ this.props.login } /> 
		const ResumeHandler = () =>
			<Resume accounts={ this.props.accounts } /> 			

		//SE RETORNAN LAS RUTAS
		return (
			<Router history={ hashHistory }>
				<Route path='/' component={ LoginHandler } />
				<Route path='/home/' component={ Container }>
					<IndexRoute component={ ResumeHandler } />
					<Route path='/resume' component={ ResumeHandler } />
					<Route path='/transfer' component={ Transfer } />
				</Route>			
			</Router>
		)
	}
}