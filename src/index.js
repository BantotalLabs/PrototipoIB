//ARCHIVO RAIZ DE LA LOGICA JAVASCRIPT
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

import ls from 'local-storage'

import RootContainer from './components/root'
import './css/Index.css' 

//GUARDA EL STATE DE REDUX EN EL LOCAL STORAGE, SIRVE SOBRE TODO EN ETAPA DE 
//DESARROLLO DONDE UTILIZAMOS EL HOT RELOAD PARA QUE NO SE REINICIE EL STATE POR CADA REFRESH
const saveLocalStorage = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  ls.remove('state')
  ls.set('state', store.getState())
  return result
}

//SE CREA EL STORE
let store = createStore(reducers, compose(
  applyMiddleware(saveLocalStorage),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

//SE AGREGA EL PROVIDER PARA QUE TODOS SUS HIJOS ACCEDAN AL STORE
export const Index = () => 
	<Provider store={ store } >
		<RootContainer />
	</Provider>

//SE RENDERIZAN LAS VISTAS EN EL DOM
render((
  <Index>
  </Index>
), document.getElementById("root"))