import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import { Container } from './container'
import { Login } from './login'
import { Resume } from './resume'
import { Transfer } from './transfer'

const Root = () =>
	<Router history={ hashHistory }>
		<Route path='/' component={ Login } />
		<Route path='/home/' component={ Container }>
			<IndexRoute component={ Resume } />
			<Route path='/resume' component={ Resume } />
			<Route path='/transfer' component={ Transfer } />
		</Route>			
	</Router>

render((
  <Root>
  </Root>
), document.getElementById("root"))