import React, { Component } from 'react'

import * as actionCreators from '../actions'
import { connect } from 'react-redux'

import { RouterApp } from './router'

class Root extends Component {
	render() {
		return (
			<RouterApp { ...this.props } >		
			</RouterApp>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		userLoged: state.userLoged
	}
}

export default connect(mapStateToProps, actionCreators)(Root)