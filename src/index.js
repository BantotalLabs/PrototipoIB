import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

import ls from 'local-storage'

import RootContainer from './components/root'
import './css/Index.css' 

const saveLocalStorage = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  ls.remove('state')
  ls.set('state', store.getState())
  return result
}

let store = createStore(reducers, compose(
  applyMiddleware(saveLocalStorage),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export const Index = () => 
	<Provider store={ store } >
		<RootContainer />
	</Provider>

render((
  <Index>
  </Index>
), document.getElementById("root"))