import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import { Container } from './container'
import { Login } from './login'

const Root = () =>
	<Router history={hashHistory}>
		<Route path='/' component={ Login } />
		<Route path='/home/' component={ Container }>
		</Route>			
	</Router>

render((
  <Root>
  </Root>
), document.getElementById("root"))