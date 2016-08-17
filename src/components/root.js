//LA FUNCION PRINCIPAL DE ESTE PROGRAMA ES CONECTAR LAS VISTAS AL STORE DE REDUX
import React, { Component } from 'react'

import * as actionCreators from '../actions'
import { connect } from 'react-redux'

import { RouterApp } from './router'

//RETORNA EL PRIMER ELEMENTO CISUAL REAL DE LA APLICACION PASANDOLE LAS PROPS
class Root extends Component {
	render() {
		return (
			<RouterApp { ...this.props } >		
			</RouterApp>
		)
	}
}

//MAPEA LOS DATOS DEL STATE A PROPS PARA QUE LAS USEN LOS ELEMENTOS HIJOS
const mapStateToProps = (state) => {
	return {
		userLoged: state.userLoged,
		accounts:  state.accounts
	}
}

//SE CONECTAN LAS VISTAS A REDUX PASANDOLE EL STATE Y LOS ACTIONS PARA QUE LOS DEVUELVA COMO PROPS
export default connect(mapStateToProps, actionCreators)(Root)